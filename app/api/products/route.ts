import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Product from '@/lib/models/Product';
import User from '@/lib/models/User';
import Activity from '@/lib/models/Activity';

// Create product
export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { 
      sellerWallet, 
      name, 
      description, 
      price, 
      currency,
      images, 
      category,
      inventory,
      externalUrl,
      externalPlatform
    } = body;

    if (!sellerWallet || !name || !description || !price || !category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Find seller
    const seller = await User.findOne({ walletAddress: sellerWallet });
    if (!seller) {
      return NextResponse.json(
        { error: 'Seller not found' },
        { status: 404 }
      );
    }

    // Create product
    const product = await Product.create({
      sellerId: seller._id,
      sellerWallet,
      name,
      description,
      price,
      currency: currency || 'USD',
      images: images || [],
      category,
      inventory: inventory || 0,
      externalUrl,
      externalPlatform,
    });

    // Mark user as seller
    if (!seller.isSeller) {
      await User.findByIdAndUpdate(seller._id, { isSeller: true });
    }

    // Track activity
    await Activity.create({
      userId: seller._id,
      walletAddress: sellerWallet,
      type: 'product_add',
      targetType: 'product',
      targetId: product._id.toString(),
      metadata: { productName: name, price },
    });

    return NextResponse.json({ product }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create product' },
      { status: 500 }
    );
  }
}

// Get products
export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const sellerWallet = searchParams.get('sellerWallet');
    const category = searchParams.get('category');
    const isActive = searchParams.get('isActive');
    const limit = parseInt(searchParams.get('limit') || '20');
    const page = parseInt(searchParams.get('page') || '1');

    const query: Record<string, any> = {};
    if (sellerWallet) query.sellerWallet = sellerWallet;
    if (category) query.category = category;
    if (isActive !== null) query.isActive = isActive === 'true';

    const products = await Product.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .populate('sellerId', 'username avatar walletAddress isVerified');

    const total = await Product.countDocuments(query);

    return NextResponse.json({
      products,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      }
    });
  } catch (error: any) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
