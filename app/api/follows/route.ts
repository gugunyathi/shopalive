import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Follow from '@/lib/models/Follow';
import User from '@/lib/models/User';
import Activity from '@/lib/models/Activity';

// Follow/Unfollow user
export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { followerWallet, followingWallet, action } = body;

    if (!followerWallet || !followingWallet) {
      return NextResponse.json(
        { error: 'followerWallet and followingWallet are required' },
        { status: 400 }
      );
    }

    if (followerWallet === followingWallet) {
      return NextResponse.json(
        { error: 'Cannot follow yourself' },
        { status: 400 }
      );
    }

    // Find both users
    const [follower, following] = await Promise.all([
      User.findOne({ walletAddress: followerWallet }),
      User.findOne({ walletAddress: followingWallet })
    ]);

    if (!follower || !following) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    if (action === 'unfollow') {
      // Unfollow
      const deleted = await Follow.findOneAndDelete({
        followerId: follower._id,
        followingId: following._id
      });

      if (deleted) {
        await Promise.all([
          User.findByIdAndUpdate(follower._id, { $inc: { following: -1 } }),
          User.findByIdAndUpdate(following._id, { $inc: { followers: -1 } })
        ]);

        await Activity.create({
          userId: follower._id,
          walletAddress: followerWallet,
          type: 'unfollow',
          targetType: 'user',
          targetId: following._id.toString(),
        });
      }

      return NextResponse.json({ success: true, following: false });
    } else {
      // Follow
      const existingFollow = await Follow.findOne({
        followerId: follower._id,
        followingId: following._id
      });

      if (existingFollow) {
        return NextResponse.json({ success: true, following: true, message: 'Already following' });
      }

      await Follow.create({
        followerId: follower._id,
        followerWallet,
        followingId: following._id,
        followingWallet
      });

      await Promise.all([
        User.findByIdAndUpdate(follower._id, { $inc: { following: 1 } }),
        User.findByIdAndUpdate(following._id, { $inc: { followers: 1 } })
      ]);

      await Activity.create({
        userId: follower._id,
        walletAddress: followerWallet,
        type: 'follow',
        targetType: 'user',
        targetId: following._id.toString(),
      });

      return NextResponse.json({ success: true, following: true });
    }
  } catch (error: any) {
    console.error('Error with follow action:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to process follow action' },
      { status: 500 }
    );
  }
}

// Get followers/following
export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const walletAddress = searchParams.get('walletAddress');
    const type = searchParams.get('type'); // 'followers' or 'following'
    const limit = parseInt(searchParams.get('limit') || '50');
    const page = parseInt(searchParams.get('page') || '1');

    if (!walletAddress || !type) {
      return NextResponse.json(
        { error: 'walletAddress and type are required' },
        { status: 400 }
      );
    }

    const user = await User.findOne({ walletAddress });
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    let query: Record<string, any>;
    let populateField: string;

    if (type === 'followers') {
      query = { followingId: user._id };
      populateField = 'followerId';
    } else {
      query = { followerId: user._id };
      populateField = 'followingId';
    }

    const follows = await Follow.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .populate(populateField, 'username avatar walletAddress isVerified followers');

    const total = await Follow.countDocuments(query);

    const users = follows.map(f => type === 'followers' ? f.followerId : f.followingId);

    return NextResponse.json({
      users,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      }
    });
  } catch (error: any) {
    console.error('Error fetching follows:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch follows' },
      { status: 500 }
    );
  }
}
