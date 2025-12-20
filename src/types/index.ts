export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  seller: Seller;
}

export interface Seller {
  id: string;
  name: string;
  username: string;
  avatar: string;
  followers: number;
  isVerified: boolean;
  walletAddress?: string;
}

export interface LiveStream {
  id: string;
  seller: Seller;
  title: string;
  viewers: number;
  products: Product[];
  videoUrl?: string;
  thumbnail: string;
  isLive: boolean;
  category: string;
}

export interface ShoppableVideo {
  id: string;
  seller: Seller;
  title: string;
  description?: string;
  videoUrl: string;
  thumbnailUrl: string; // Primary property for thumbnail
  thumbnail?: string; // Alias for compatibility
  products: Product[];
  category: string;
  tags: string[];
  viewCount: number;
  likeCount: number;
  shareCount?: number;
  duration: number;
  isVideo: true; // Discriminator to differentiate from LiveStream
}

// Union type for feed items
export type FeedItem = LiveStream | ShoppableVideo;

export interface ChatMessage {
  id: string;
  userId: string;
  username: string;
  avatar: string;
  message: string;
  timestamp: Date;
  type: 'message' | 'purchase' | 'join';
}

export interface WishlistItem {
  id: string;
  product: Product;
  addedAt: Date;
  priceWhenAdded: number;
  aiRecommended?: boolean;
}
