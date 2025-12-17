import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IStream extends Document {
  sellerId: mongoose.Types.ObjectId;
  sellerWallet: string;
  title: string;
  description: string;
  category: string;
  thumbnailUrl?: string;
  streamUrl?: string;
  products: mongoose.Types.ObjectId[];
  externalLinks: {
    name: string;
    url: string;
    type: 'shop' | 'product' | 'website';
  }[];
  status: 'scheduled' | 'live' | 'ended';
  viewerCount: number;
  peakViewers: number;
  totalViews: number;
  likes: number;
  scheduledAt?: Date;
  startedAt?: Date;
  endedAt?: Date;
  duration?: number; // in seconds
  createdAt: Date;
  updatedAt: Date;
}

const StreamSchema: Schema = new Schema(
  {
    sellerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    sellerWallet: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    category: { type: String },
    thumbnailUrl: { type: String },
    streamUrl: { type: String },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    externalLinks: [{
      name: { type: String, required: true },
      url: { type: String, required: true },
      type: { type: String, enum: ['shop', 'product', 'website'], required: true }
    }],
    status: { 
      type: String, 
      enum: ['scheduled', 'live', 'ended'],
      default: 'scheduled'
    },
    viewerCount: { type: Number, default: 0 },
    peakViewers: { type: Number, default: 0 },
    totalViews: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    scheduledAt: { type: Date },
    startedAt: { type: Date },
    endedAt: { type: Date },
    duration: { type: Number },
  },
  {
    timestamps: true,
  }
);

// Indexes
StreamSchema.index({ sellerId: 1 });
StreamSchema.index({ sellerWallet: 1 });
StreamSchema.index({ status: 1, createdAt: -1 });
StreamSchema.index({ category: 1, status: 1 });

const Stream: Model<IStream> = mongoose.models.Stream || mongoose.model<IStream>('Stream', StreamSchema);

export default Stream;
