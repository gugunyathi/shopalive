import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Stream from '@/lib/models/Stream';
import User from '@/lib/models/User';
import Activity from '@/lib/models/Activity';

// Create or update stream
export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { 
      sellerWallet, 
      title, 
      description, 
      category,
      thumbnailUrl,
      products,
      externalLinks,
      status
    } = body;

    if (!sellerWallet || !title) {
      return NextResponse.json(
        { error: 'sellerWallet and title are required' },
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

    // Create stream
    const stream = await Stream.create({
      sellerId: seller._id,
      sellerWallet,
      title,
      description,
      category,
      thumbnailUrl,
      products: products || [],
      externalLinks: externalLinks || [],
      status: status || 'scheduled',
    });

    // Track activity
    await Activity.create({
      userId: seller._id,
      walletAddress: sellerWallet,
      type: 'stream_start',
      targetType: 'stream',
      targetId: stream._id.toString(),
      metadata: { title, category },
    });

    return NextResponse.json({ stream }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating stream:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create stream' },
      { status: 500 }
    );
  }
}

// Get streams
export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const sellerWallet = searchParams.get('sellerWallet');
    const status = searchParams.get('status');
    const category = searchParams.get('category');
    const limit = parseInt(searchParams.get('limit') || '20');
    const page = parseInt(searchParams.get('page') || '1');

    const query: Record<string, any> = {};
    if (sellerWallet) query.sellerWallet = sellerWallet;
    if (status) query.status = status;
    if (category) query.category = category;

    const streams = await Stream.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .populate('sellerId', 'username avatar walletAddress isVerified followers')
      .populate('products');

    const total = await Stream.countDocuments(query);

    return NextResponse.json({
      streams,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      }
    });
  } catch (error: any) {
    console.error('Error fetching streams:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch streams' },
      { status: 500 }
    );
  }
}

// Update stream (for going live, ending, updating viewer count)
export async function PATCH(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { streamId, status, viewerCount } = body;

    if (!streamId) {
      return NextResponse.json(
        { error: 'streamId is required' },
        { status: 400 }
      );
    }

    const updateData: Record<string, any> = {};
    
    if (status === 'live') {
      updateData.status = 'live';
      updateData.startedAt = new Date();
    } else if (status === 'ended') {
      const stream = await Stream.findById(streamId);
      if (stream?.startedAt) {
        updateData.duration = Math.floor((Date.now() - stream.startedAt.getTime()) / 1000);
      }
      updateData.status = 'ended';
      updateData.endedAt = new Date();
    }
    
    if (viewerCount !== undefined) {
      updateData.viewerCount = viewerCount;
      updateData.$max = { peakViewers: viewerCount };
    }

    const stream = await Stream.findByIdAndUpdate(
      streamId,
      updateData,
      { new: true }
    ).populate('sellerId', 'username avatar walletAddress isVerified');

    if (!stream) {
      return NextResponse.json(
        { error: 'Stream not found' },
        { status: 404 }
      );
    }

    // Track end activity
    if (status === 'ended') {
      await Activity.create({
        userId: stream.sellerId._id,
        walletAddress: stream.sellerWallet,
        type: 'stream_end',
        targetType: 'stream',
        targetId: stream._id.toString(),
        metadata: { 
          duration: stream.duration,
          totalViews: stream.totalViews,
          peakViewers: stream.peakViewers
        },
      });
    }

    return NextResponse.json({ stream });
  } catch (error: any) {
    console.error('Error updating stream:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update stream' },
      { status: 500 }
    );
  }
}
