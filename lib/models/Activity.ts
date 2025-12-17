import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IActivity extends Document {
  userId: mongoose.Types.ObjectId;
  walletAddress: string;
  type: 'view' | 'purchase' | 'follow' | 'unfollow' | 'like' | 'share' | 'stream_start' | 'stream_end' | 'product_add' | 'cart_add' | 'wishlist_add';
  targetType?: 'stream' | 'product' | 'user';
  targetId?: string;
  metadata?: Record<string, any>;
  createdAt: Date;
}

const ActivitySchema: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    walletAddress: { type: String, required: true },
    type: { 
      type: String, 
      enum: ['view', 'purchase', 'follow', 'unfollow', 'like', 'share', 'stream_start', 'stream_end', 'product_add', 'cart_add', 'wishlist_add'],
      required: true 
    },
    targetType: { 
      type: String, 
      enum: ['stream', 'product', 'user'] 
    },
    targetId: { type: String },
    metadata: { type: Schema.Types.Mixed },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

// Indexes for efficient queries
ActivitySchema.index({ userId: 1, createdAt: -1 });
ActivitySchema.index({ walletAddress: 1, createdAt: -1 });
ActivitySchema.index({ type: 1, createdAt: -1 });
ActivitySchema.index({ targetId: 1, type: 1 });

const Activity: Model<IActivity> = mongoose.models.Activity || mongoose.model<IActivity>('Activity', ActivitySchema);

export default Activity;
