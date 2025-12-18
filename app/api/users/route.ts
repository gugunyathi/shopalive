import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/lib/models/User';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { 
      email, 
      phone, 
      username, 
      avatar, 
      walletAddress, 
      walletId,
      authProvider, 
      authProviderId,
      isSeller,
      bio
    } = body;

    // Validate required fields
    if (!username || !walletAddress || !authProvider || !authProviderId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [
        { walletAddress },
        { authProviderId }
      ]
    });

    if (existingUser) {
      // Update existing user if there are new fields
      if (walletId && !existingUser.walletId) {
        existingUser.walletId = walletId;
        await existingUser.save();
      }
      return NextResponse.json({ user: existingUser }, { status: 200 });
    }

    // Create new user with CDP wallet address
    const user = await User.create({
      email,
      phone,
      username,
      avatar,
      walletAddress,  // This is the CDP wallet address for receiving payments
      walletId,
      authProvider,
      authProviderId,
      isSeller: isSeller || false,
      bio,
    });

    console.log(`[Users API] Created new user: ${username} with wallet: ${walletAddress}`);

    return NextResponse.json({ user }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create user' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const walletAddress = searchParams.get('walletAddress');
    const authProviderId = searchParams.get('authProviderId');

    if (!walletAddress && !authProviderId) {
      return NextResponse.json(
        { error: 'walletAddress or authProviderId is required' },
        { status: 400 }
      );
    }

    const user = await User.findOne({
      $or: [
        ...(walletAddress ? [{ walletAddress }] : []),
        ...(authProviderId ? [{ authProviderId }] : [])
      ]
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching user:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch user' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { walletAddress, ...updates } = body;

    if (!walletAddress) {
      return NextResponse.json(
        { error: 'walletAddress is required' },
        { status: 400 }
      );
    }

    const user = await User.findOneAndUpdate(
      { walletAddress },
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error: any) {
    console.error('Error updating user:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update user' },
      { status: 500 }
    );
  }
}
