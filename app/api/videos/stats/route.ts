import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Video from '@/lib/models/Video';

// Increment view count
export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { videoId, action } = body;

    if (!videoId || !action) {
      return NextResponse.json(
        { error: 'videoId and action are required' },
        { status: 400 }
      );
    }

    let updateField: string;
    switch (action) {
      case 'view':
        updateField = 'viewCount';
        break;
      case 'like':
        updateField = 'likeCount';
        break;
      case 'share':
        updateField = 'shareCount';
        break;
      default:
        return NextResponse.json(
          { error: 'Invalid action. Use: view, like, or share' },
          { status: 400 }
        );
    }

    const video = await Video.findByIdAndUpdate(
      videoId,
      { $inc: { [updateField]: 1 } },
      { new: true }
    );

    if (!video) {
      return NextResponse.json(
        { error: 'Video not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      [updateField]: video[updateField as keyof typeof video],
    });
  } catch (error: any) {
    console.error('Error updating video stats:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update stats' },
      { status: 500 }
    );
  }
}
