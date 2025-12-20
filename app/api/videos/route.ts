import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Video from '@/lib/models/Video';
import User from '@/lib/models/User';
import Product from '@/lib/models/Product';

// Create a new video
export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { 
      title, 
      description, 
      videoUrl, 
      thumbnailUrl, 
      sellerWallet, 
      products, 
      category, 
      tags,
      duration 
    } = body;

    if (!title || !videoUrl || !thumbnailUrl || !sellerWallet) {
      return NextResponse.json(
        { error: 'title, videoUrl, thumbnailUrl, and sellerWallet are required' },
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

    // Validate products if provided
    let validProductIds: string[] = [];
    if (products && products.length > 0) {
      const foundProducts = await Product.find({ 
        _id: { $in: products },
        sellerWallet 
      });
      validProductIds = foundProducts.map(p => p._id.toString());
    }

    const video = await Video.create({
      title,
      description,
      videoUrl,
      thumbnailUrl,
      sellerId: seller._id,
      sellerWallet,
      products: validProductIds,
      category: category || 'Other',
      tags: tags || [],
      duration: duration || 0,
      status: 'active',
    });

    // Populate for response
    const populatedVideo = await Video.findById(video._id)
      .populate('sellerId', 'username avatar walletAddress isVerified followers')
      .populate('products');

    return NextResponse.json({ 
      success: true, 
      video: populatedVideo 
    }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating video:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create video' },
      { status: 500 }
    );
  }
}

// Get videos
export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const videoId = searchParams.get('id');
    const sellerWallet = searchParams.get('sellerWallet');
    const category = searchParams.get('category');
    const status = searchParams.get('status') || 'active';
    const limit = parseInt(searchParams.get('limit') || '20');
    const page = parseInt(searchParams.get('page') || '1');
    const skip = (page - 1) * limit;

    // Get single video by ID
    if (videoId) {
      const video = await Video.findById(videoId)
        .populate('sellerId', 'username avatar walletAddress isVerified followers')
        .populate('products');

      if (!video) {
        return NextResponse.json(
          { error: 'Video not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({ video });
    }

    // Build query
    const query: any = { status };
    if (sellerWallet) query.sellerWallet = sellerWallet;
    if (category) query.category = category;

    const [videos, total] = await Promise.all([
      Video.find(query)
        .populate('sellerId', 'username avatar walletAddress isVerified followers')
        .populate('products')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),
      Video.countDocuments(query)
    ]);

    return NextResponse.json({
      videos,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      }
    });
  } catch (error: any) {
    console.error('Error fetching videos:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch videos' },
      { status: 500 }
    );
  }
}

// Update video
export async function PUT(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { videoId, sellerWallet, ...updates } = body;

    if (!videoId || !sellerWallet) {
      return NextResponse.json(
        { error: 'videoId and sellerWallet are required' },
        { status: 400 }
      );
    }

    // Verify ownership
    const video = await Video.findById(videoId);
    if (!video) {
      return NextResponse.json(
        { error: 'Video not found' },
        { status: 404 }
      );
    }

    if (video.sellerWallet !== sellerWallet) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
      );
    }

    // Update allowed fields
    const allowedUpdates = ['title', 'description', 'products', 'category', 'tags', 'status', 'thumbnailUrl'];
    const filteredUpdates: any = {};
    for (const key of allowedUpdates) {
      if (updates[key] !== undefined) {
        filteredUpdates[key] = updates[key];
      }
    }

    const updatedVideo = await Video.findByIdAndUpdate(
      videoId,
      { $set: filteredUpdates },
      { new: true }
    )
      .populate('sellerId', 'username avatar walletAddress isVerified followers')
      .populate('products');

    return NextResponse.json({ 
      success: true, 
      video: updatedVideo 
    });
  } catch (error: any) {
    console.error('Error updating video:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update video' },
      { status: 500 }
    );
  }
}

// Delete video (soft delete)
export async function DELETE(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const videoId = searchParams.get('videoId');
    const sellerWallet = searchParams.get('sellerWallet');

    if (!videoId || !sellerWallet) {
      return NextResponse.json(
        { error: 'videoId and sellerWallet are required' },
        { status: 400 }
      );
    }

    // Verify ownership
    const video = await Video.findById(videoId);
    if (!video) {
      return NextResponse.json(
        { error: 'Video not found' },
        { status: 404 }
      );
    }

    if (video.sellerWallet !== sellerWallet) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
      );
    }

    // Soft delete
    await Video.findByIdAndUpdate(videoId, { status: 'deleted' });

    return NextResponse.json({ 
      success: true, 
      message: 'Video deleted' 
    });
  } catch (error: any) {
    console.error('Error deleting video:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to delete video' },
      { status: 500 }
    );
  }
}
