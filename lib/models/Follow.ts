import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IFollow extends Document {
  followerId: mongoose.Types.ObjectId;
  followerWallet: string;
  followingId: mongoose.Types.ObjectId;
  followingWallet: string;
  createdAt: Date;
}

const FollowSchema: Schema = new Schema(
  {
    followerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    followerWallet: { type: String, required: true },
    followingId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    followingWallet: { type: String, required: true },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

// Unique compound index to prevent duplicate follows
FollowSchema.index({ followerId: 1, followingId: 1 }, { unique: true });
FollowSchema.index({ followerWallet: 1 });
FollowSchema.index({ followingWallet: 1 });

const Follow: Model<IFollow> = mongoose.models.Follow || mongoose.model<IFollow>('Follow', FollowSchema);

export default Follow;
