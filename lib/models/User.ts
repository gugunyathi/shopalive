import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
  email?: string;
  phone?: string;
  username: string;
  avatar?: string;
  walletAddress: string;
  walletId?: string;
  authProvider: 'google' | 'apple' | 'x' | 'sms' | 'email' | 'wallet';
  authProviderId: string;
  bio?: string;
  followers: number;
  following: number;
  totalViews: number;
  totalSales: number;
  totalPurchases: number;
  isVerified: boolean;
  isSeller: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    email: { type: String, sparse: true },
    phone: { type: String, sparse: true },
    username: { type: String, required: true, unique: true },
    avatar: { type: String },
    walletAddress: { type: String, required: true, unique: true },
    walletId: { type: String },
    authProvider: { 
      type: String, 
      enum: ['google', 'apple', 'x', 'sms', 'email', 'wallet'],
      required: true 
    },
    authProviderId: { type: String, required: true, unique: true },
    bio: { type: String, maxlength: 500 },
    followers: { type: Number, default: 0 },
    following: { type: Number, default: 0 },
    totalViews: { type: Number, default: 0 },
    totalSales: { type: Number, default: 0 },
    totalPurchases: { type: Number, default: 0 },
    isVerified: { type: Boolean, default: false },
    isSeller: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

// Indexes
UserSchema.index({ walletAddress: 1 });
UserSchema.index({ authProviderId: 1 });
UserSchema.index({ username: 1 });

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
