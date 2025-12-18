import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IOrder extends Document {
  buyerId: mongoose.Types.ObjectId;
  buyerWallet: string;
  sellerId: mongoose.Types.ObjectId;
  sellerWallet: string;
  platformWallet?: string;
  streamId?: mongoose.Types.ObjectId;
  products: {
    productId: mongoose.Types.ObjectId;
    name: string;
    price: number;
    quantity: number;
  }[];
  subtotal: number;
  fees: number;
  total: number;
  currency: 'USD' | 'ETH' | 'USDC';
  paymentMethod: 'crypto' | 'card' | 'basepay';
  transactionHash?: string;
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
  shippingAddress?: {
    name: string;
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema: Schema = new Schema(
  {
    buyerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    buyerWallet: { type: String, required: true },
    sellerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    sellerWallet: { type: String, required: true },
    platformWallet: { type: String },
    streamId: { type: Schema.Types.ObjectId, ref: 'Stream' },
    products: [{
      productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true, min: 1 }
    }],
    subtotal: { type: Number, required: true },
    fees: { type: Number, default: 0 },
    total: { type: Number, required: true },
    currency: { 
      type: String, 
      enum: ['USD', 'ETH', 'USDC'],
      default: 'USD'
    },
    paymentMethod: { 
      type: String, 
      enum: ['crypto', 'card', 'basepay'],
      required: true
    },
    transactionHash: { type: String },
    status: { 
      type: String, 
      enum: ['pending', 'paid', 'shipped', 'delivered', 'cancelled', 'refunded'],
      default: 'pending'
    },
    shippingAddress: {
      name: { type: String },
      street: { type: String },
      city: { type: String },
      state: { type: String },
      country: { type: String },
      postalCode: { type: String }
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
OrderSchema.index({ buyerId: 1, createdAt: -1 });
OrderSchema.index({ buyerWallet: 1, createdAt: -1 });
OrderSchema.index({ sellerId: 1, createdAt: -1 });
OrderSchema.index({ sellerWallet: 1, createdAt: -1 });
OrderSchema.index({ status: 1 });
OrderSchema.index({ transactionHash: 1 });

const Order: Model<IOrder> = mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);

export default Order;
