import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IWishlistItem extends Document {
  userId: mongoose.Types.ObjectId;
  userWallet: string;
  productId: mongoose.Types.ObjectId;
  priceWhenAdded: number;
  aiRecommended: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const WishlistItemSchema: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    userWallet: { type: String, required: true },
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    priceWhenAdded: { type: Number, required: true },
    aiRecommended: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

// Compound index to prevent duplicate wishlist items
WishlistItemSchema.index({ userId: 1, productId: 1 }, { unique: true });
WishlistItemSchema.index({ userWallet: 1 });

const WishlistItem: Model<IWishlistItem> = mongoose.models.WishlistItem || mongoose.model<IWishlistItem>('WishlistItem', WishlistItemSchema);

export default WishlistItem;
