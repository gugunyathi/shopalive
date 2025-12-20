import mongoose, { Document, Schema } from 'mongoose';

export interface IVideo extends Document {
  title: string;
  description?: string;
  videoUrl: string;
  thumbnailUrl: string;
  sellerId: mongoose.Types.ObjectId;
  sellerWallet: string;
  products: mongoose.Types.ObjectId[];
  category: string;
  tags: string[];
  viewCount: number;
  likeCount: number;
  shareCount: number;
  duration: number; // in seconds
  status: 'processing' | 'active' | 'inactive' | 'deleted';
  createdAt: Date;
  updatedAt: Date;
}

const VideoSchema = new Schema<IVideo>({
  title: {
    type: String,
    required: true,
    maxlength: 100,
  },
  description: {
    type: String,
    maxlength: 500,
  },
  videoUrl: {
    type: String,
    required: true,
  },
  thumbnailUrl: {
    type: String,
    required: true,
  },
  sellerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  sellerWallet: {
    type: String,
    required: true,
    index: true,
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product',
  }],
  category: {
    type: String,
    default: 'Other',
    enum: ['Fashion', 'Beauty', 'Tech', 'Home', 'Food', 'Sports', 'Art', 'Other'],
  },
  tags: [{
    type: String,
    lowercase: true,
  }],
  viewCount: {
    type: Number,
    default: 0,
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  shareCount: {
    type: Number,
    default: 0,
  },
  duration: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ['processing', 'active', 'inactive', 'deleted'],
    default: 'active',
  },
}, {
  timestamps: true,
});

// Indexes for efficient queries
VideoSchema.index({ status: 1, createdAt: -1 });
VideoSchema.index({ sellerId: 1, status: 1 });
VideoSchema.index({ category: 1, status: 1 });
VideoSchema.index({ tags: 1 });

export default mongoose.models.Video || mongoose.model<IVideo>('Video', VideoSchema);
