import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProduct extends Document {
  sellerId: mongoose.Types.ObjectId;
  sellerWallet: string;
  name: string;
  description: string;
  price: number;
  currency: 'USD' | 'ETH' | 'USDC';
  images: string[];
  category: string;
  inventory: number;
  sold: number;
  isActive: boolean;
  externalUrl?: string;
  externalPlatform?: 'shopify' | 'etsy' | 'amazon' | 'other';
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema: Schema = new Schema(
  {
    sellerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    sellerWallet: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    currency: { 
      type: String, 
      enum: ['USD', 'ETH', 'USDC'],
      default: 'USD'
    },
    images: [{ type: String }],
    category: { type: String, required: true },
    inventory: { type: Number, default: 0 },
    sold: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    externalUrl: { type: String },
    externalPlatform: { 
      type: String, 
      enum: ['shopify', 'etsy', 'amazon', 'other'] 
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
ProductSchema.index({ sellerId: 1 });
ProductSchema.index({ sellerWallet: 1 });
ProductSchema.index({ category: 1 });
ProductSchema.index({ isActive: 1, createdAt: -1 });

const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
