import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Activity from '@/lib/models/Activity';
import User from '@/lib/models/User';

// Create activity
export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { walletAddress, type, targetType, targetId, metadata } = body;

    if (!walletAddress || !type) {
      return NextResponse.json(
        { error: 'walletAddress and type are required' },
        { status: 400 }
      );
    }

    // Find user by wallet address
    const user = await User.findOne({ walletAddress });
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Create activity
    const activity = await Activity.create({
      userId: user._id,
      walletAddress,
      type,
      targetType,
      targetId,
      metadata,
    });

    // Update user stats based on activity type
    const statsUpdate: Record<string, number> = {};
    if (type === 'view') statsUpdate.totalViews = 1;
    if (type === 'purchase') statsUpdate.totalPurchases = 1;
    
    if (Object.keys(statsUpdate).length > 0) {
      await User.findByIdAndUpdate(user._id, { $inc: statsUpdate });
    }

    return NextResponse.json({ activity }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating activity:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create activity' },
      { status: 500 }
    );
  }
}

// Get activities
export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const walletAddress = searchParams.get('walletAddress');
    const type = searchParams.get('type');
    const limit = parseInt(searchParams.get('limit') || '50');
    const page = parseInt(searchParams.get('page') || '1');

    const query: Record<string, any> = {};
    if (walletAddress) query.walletAddress = walletAddress;
    if (type) query.type = type;

    const activities = await Activity.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .populate('userId', 'username avatar walletAddress');

    const total = await Activity.countDocuments(query);

    return NextResponse.json({
      activities,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      }
    });
  } catch (error: any) {
    console.error('Error fetching activities:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch activities' },
      { status: 500 }
    );
  }
}
