import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Order from '@/lib/models/Order';
import User from '@/lib/models/User';
import Product from '@/lib/models/Product';
import Activity from '@/lib/models/Activity';

// Platform wallet for receiving fees and commissions
const PLATFORM_WALLET = process.env.NEXT_PUBLIC_PLATFORM_WALLET || '0x21f8dc27ab14584D292Afb86dCc45E994f6b8b87';

// Create order
export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { 
      buyerWallet, 
      sellerWallet,
      streamId,
      products, // Array of { productId, quantity }
      paymentMethod,
      transactionHash,
      shippingAddress
    } = body;

    if (!buyerWallet || !sellerWallet || !products || products.length === 0) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Find buyer and seller
    const [buyer, seller] = await Promise.all([
      User.findOne({ walletAddress: buyerWallet }),
      User.findOne({ walletAddress: sellerWallet })
    ]);

    if (!buyer || !seller) {
      return NextResponse.json(
        { error: 'Buyer or seller not found' },
        { status: 404 }
      );
    }

    // Fetch product details and calculate totals
    const productIds = products.map((p: any) => p.productId);
    const productDocs = await Product.find({ _id: { $in: productIds } });

    const orderProducts = products.map((p: any) => {
      const product = productDocs.find(doc => doc._id.toString() === p.productId);
      if (!product) throw new Error(`Product ${p.productId} not found`);
      return {
        productId: product._id,
        name: product.name,
        price: product.price,
        quantity: p.quantity
      };
    });

    const subtotal = orderProducts.reduce((sum, p) => sum + (p.price * p.quantity), 0);
    const fees = subtotal * 0.025; // 2.5% platform fee (sent to PLATFORM_WALLET)
    const total = subtotal + fees;

    // Create order
    const order = await Order.create({
      buyerId: buyer._id,
      buyerWallet,
      sellerId: seller._id,
      sellerWallet,
      platformWallet: PLATFORM_WALLET,
      streamId,
      products: orderProducts,
      subtotal,
      fees,
      total,
      currency: 'USD',
      paymentMethod: paymentMethod || 'crypto',
      transactionHash,
      status: transactionHash ? 'paid' : 'pending',
      shippingAddress,
    });

    // Update product sold counts
    await Promise.all(products.map((p: any) => 
      Product.findByIdAndUpdate(p.productId, {
        $inc: { sold: p.quantity, inventory: -p.quantity }
      })
    ));

    // Update user stats
    await Promise.all([
      User.findByIdAndUpdate(buyer._id, { $inc: { totalPurchases: 1 } }),
      User.findByIdAndUpdate(seller._id, { $inc: { totalSales: 1 } })
    ]);

    // Track activity
    await Activity.create({
      userId: buyer._id,
      walletAddress: buyerWallet,
      type: 'purchase',
      targetType: 'product',
      targetId: order._id.toString(),
      metadata: { 
        total,
        productCount: products.length,
        sellerWallet
      },
    });

    return NextResponse.json({ order }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create order' },
      { status: 500 }
    );
  }
}

// Get orders
export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const buyerWallet = searchParams.get('buyerWallet');
    const sellerWallet = searchParams.get('sellerWallet');
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit') || '20');
    const page = parseInt(searchParams.get('page') || '1');

    const query: Record<string, any> = {};
    if (buyerWallet) query.buyerWallet = buyerWallet;
    if (sellerWallet) query.sellerWallet = sellerWallet;
    if (status) query.status = status;

    const orders = await Order.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .populate('buyerId', 'username avatar walletAddress')
      .populate('sellerId', 'username avatar walletAddress')
      .populate('streamId', 'title');

    const total = await Order.countDocuments(query);

    return NextResponse.json({
      orders,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      }
    });
  } catch (error: any) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}

// Update order status
export async function PATCH(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { orderId, status, transactionHash } = body;

    if (!orderId) {
      return NextResponse.json(
        { error: 'orderId is required' },
        { status: 400 }
      );
    }

    const updateData: Record<string, any> = {};
    if (status) updateData.status = status;
    if (transactionHash) updateData.transactionHash = transactionHash;

    const order = await Order.findByIdAndUpdate(
      orderId,
      updateData,
      { new: true }
    );

    if (!order) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ order });
  } catch (error: any) {
    console.error('Error updating order:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update order' },
      { status: 500 }
    );
  }
}
