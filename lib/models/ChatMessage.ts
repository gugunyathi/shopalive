import mongoose, { Document, Schema } from 'mongoose';

export interface IChatMessage extends Document {
  streamId: string;
  userId: mongoose.Types.ObjectId;
  userWallet: string;
  username: string;
  avatar: string;
  message: string;
  type: 'message' | 'purchase' | 'join' | 'gift';
  createdAt: Date;
  updatedAt: Date;
}

const ChatMessageSchema = new Schema<IChatMessage>({
  streamId: {
    type: String,
    required: true,
    index: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  userWallet: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop',
  },
  message: {
    type: String,
    required: true,
    maxlength: 500,
  },
  type: {
    type: String,
    enum: ['message', 'purchase', 'join', 'gift'],
    default: 'message',
  },
}, {
  timestamps: true,
});

// Index for efficient querying of recent messages
ChatMessageSchema.index({ streamId: 1, createdAt: -1 });

// TTL index to auto-delete old messages after 24 hours (optional)
// ChatMessageSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });

export default mongoose.models.ChatMessage || mongoose.model<IChatMessage>('ChatMessage', ChatMessageSchema);
