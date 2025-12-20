import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import WishlistItem from '@/lib/models/WishlistItem';
import Product from '@/lib/models/Product';
import User from '@/lib/models/User';

// Add or remove from wishlist (toggle)
export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { userWallet, productId, action } = body;

    if (!userWallet || !productId) {
      return NextResponse.json(
        { error: 'userWallet and productId are required' },
        { status: 400 }
      );
    }

    // Find user
    const user = await User.findOne({ walletAddress: userWallet });
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Find product
    const product = await Product.findById(productId);
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    // Check if already in wishlist
    const existingItem = await WishlistItem.findOne({
      userId: user._id,
      productId: product._id,
    });

    if (action === 'remove' || (existingItem && action !== 'add')) {
      // Remove from wishlist
      if (existingItem) {
        await WishlistItem.findByIdAndDelete(existingItem._id);
      }
      return NextResponse.json({ 
        success: true, 
        action: 'removed',
        message: 'Removed from wishlist' 
      });
    } else {
      // Add to wishlist
      if (existingItem) {
        return NextResponse.json({ 
          success: true, 
          action: 'exists',
          message: 'Already in wishlist',
          wishlistItem: existingItem 
        });
      }

      const wishlistItem = await WishlistItem.create({
        userId: user._id,
        userWallet,
        productId: product._id,
        priceWhenAdded: product.price,
        aiRecommended: false,
      });

      return NextResponse.json({ 
        success: true, 
        action: 'added',
        message: 'Added to wishlist',
        wishlistItem 
      }, { status: 201 });
    }
  } catch (error: any) {
    console.error('Error updating wishlist:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update wishlist' },
      { status: 500 }
    );
  }
}

// Get wishlist items
export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const userWallet = searchParams.get('userWallet');
    const productId = searchParams.get('productId');

    if (!userWallet) {
      return NextResponse.json(
        { error: 'userWallet is required' },
        { status: 400 }
      );
    }

    // If productId provided, check if specific item is in wishlist
    if (productId) {
      const item = await WishlistItem.findOne({ userWallet, productId });
      return NextResponse.json({ 
        inWishlist: !!item,
        wishlistItem: item 
      });
    }

    // Get all wishlist items for user
    const items = await WishlistItem.find({ userWallet })
      .populate({
        path: 'productId',
        populate: {
          path: 'sellerId',
          select: 'username avatar walletAddress isVerified followers'
        }
      })
      .sort({ createdAt: -1 });

    // Transform to match frontend WishlistItem type
    const wishlistItems = items.map(item => {
      const product = item.productId as any;
      return {
        id: item._id.toString(),
        product: {
          id: product._id.toString(),
          name: product.name,
          price: product.price,
          originalPrice: product.price > item.priceWhenAdded ? item.priceWhenAdded : undefined,
          image: product.images?.[0] || '/placeholder.jpg',
          seller: {
            id: product.sellerId?.walletAddress || product.sellerWallet,
            name: product.sellerId?.username || 'Seller',
            username: product.sellerId?.username || 'seller',
            avatar: product.sellerId?.avatar || '/placeholder.jpg',
            followers: product.sellerId?.followers || 0,
            isVerified: product.sellerId?.isVerified || false,
            walletAddress: product.sellerId?.walletAddress || product.sellerWallet,
          }
        },
        addedAt: item.createdAt,
        priceWhenAdded: item.priceWhenAdded,
        aiRecommended: item.aiRecommended,
      };
    });

    // Identify price drops
    const priceDrops = wishlistItems.filter(
      item => item.product.price < item.priceWhenAdded
    );

    return NextResponse.json({ 
      items: wishlistItems,
      total: wishlistItems.length,
      priceDrops: priceDrops.length
    });
  } catch (error: any) {
    console.error('Error fetching wishlist:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch wishlist' },
      { status: 500 }
    );
  }
}

// Delete from wishlist
export async function DELETE(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const userWallet = searchParams.get('userWallet');
    const itemId = searchParams.get('itemId');

    if (!userWallet || !itemId) {
      return NextResponse.json(
        { error: 'userWallet and itemId are required' },
        { status: 400 }
      );
    }

    const deleted = await WishlistItem.findOneAndDelete({
      _id: itemId,
      userWallet,
    });

    if (!deleted) {
      return NextResponse.json(
        { error: 'Wishlist item not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Removed from wishlist' 
    });
  } catch (error: any) {
    console.error('Error deleting from wishlist:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to delete from wishlist' },
      { status: 500 }
    );
  }
}
