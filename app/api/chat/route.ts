import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import ChatMessage from '@/lib/models/ChatMessage';
import User from '@/lib/models/User';

// Get chat messages for a stream
export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const streamId = searchParams.get('streamId');
    const since = searchParams.get('since'); // For polling - get messages after this timestamp
    const limit = parseInt(searchParams.get('limit') || '50');

    if (!streamId) {
      return NextResponse.json(
        { error: 'streamId is required' },
        { status: 400 }
      );
    }

    const query: any = { streamId };
    
    // If polling for new messages, only get messages after the timestamp
    if (since) {
      query.createdAt = { $gt: new Date(since) };
    }

    const messages = await ChatMessage.find(query)
      .sort({ createdAt: since ? 1 : -1 }) // Ascending for new messages, descending for initial load
      .limit(limit);

    // Reverse if initial load (to get chronological order)
    const orderedMessages = since ? messages : messages.reverse();

    // Transform to frontend format
    const formattedMessages = orderedMessages.map(msg => ({
      id: msg._id.toString(),
      oderId: msg.userId.toString(),
      username: msg.username,
      avatar: msg.avatar,
      message: msg.message,
      timestamp: msg.createdAt,
      type: msg.type,
    }));

    return NextResponse.json({
      messages: formattedMessages,
      count: formattedMessages.length,
      lastTimestamp: formattedMessages.length > 0 
        ? formattedMessages[formattedMessages.length - 1].timestamp 
        : null,
    });
  } catch (error: any) {
    console.error('Error fetching chat messages:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}

// Send a chat message
export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { streamId, userWallet, message, type = 'message' } = body;

    if (!streamId || !userWallet || !message) {
      return NextResponse.json(
        { error: 'streamId, userWallet, and message are required' },
        { status: 400 }
      );
    }

    // Find user
    const user = await User.findOne({ walletAddress: userWallet });
    if (!user) {
      return NextResponse.json(
        { error: 'User not found. Please sign in.' },
        { status: 404 }
      );
    }

    // Create message
    const chatMessage = await ChatMessage.create({
      streamId,
      userId: user._id,
      userWallet,
      username: user.username || `User_${userWallet.slice(-6)}`,
      avatar: user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop',
      message: message.slice(0, 500), // Enforce max length
      type,
    });

    return NextResponse.json({
      success: true,
      message: {
        id: chatMessage._id.toString(),
        userId: chatMessage.userId.toString(),
        username: chatMessage.username,
        avatar: chatMessage.avatar,
        message: chatMessage.message,
        timestamp: chatMessage.createdAt,
        type: chatMessage.type,
      },
    }, { status: 201 });
  } catch (error: any) {
    console.error('Error sending chat message:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send message' },
      { status: 500 }
    );
  }
}

// Delete a message (for moderation)
export async function DELETE(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const messageId = searchParams.get('messageId');
    const userWallet = searchParams.get('userWallet');

    if (!messageId || !userWallet) {
      return NextResponse.json(
        { error: 'messageId and userWallet are required' },
        { status: 400 }
      );
    }

    // Find message and verify ownership
    const message = await ChatMessage.findById(messageId);
    if (!message) {
      return NextResponse.json(
        { error: 'Message not found' },
        { status: 404 }
      );
    }

    // Only allow deletion by message author (or stream owner - could add later)
    if (message.userWallet !== userWallet) {
      return NextResponse.json(
        { error: 'Unauthorized to delete this message' },
        { status: 403 }
      );
    }

    await ChatMessage.findByIdAndDelete(messageId);

    return NextResponse.json({
      success: true,
      message: 'Message deleted',
    });
  } catch (error: any) {
    console.error('Error deleting chat message:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to delete message' },
      { status: 500 }
    );
  }
}
