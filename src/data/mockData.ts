import { LiveStream, ChatMessage, WishlistItem } from '@/types';

export const mockSellers = [
  {
    id: '1',
    name: 'Sofia Chen',
    username: 'sofiastyle',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    followers: 125000,
    isVerified: true,
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    username: 'marcusfits',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    followers: 89000,
    isVerified: true,
  },
  {
    id: '3',
    name: 'Luna Martinez',
    username: 'lunalooks',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    followers: 234000,
    isVerified: true,
  },
  {
    id: '4',
    name: 'Alex Kim',
    username: 'alexfinds',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    followers: 56000,
    isVerified: false,
  },
];

export const mockProducts = [
  {
    id: 'p1',
    name: 'Designer Silk Scarf',
    price: 89.99,
    originalPrice: 149.99,
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=200&h=200&fit=crop',
    seller: mockSellers[0],
  },
  {
    id: 'p2',
    name: 'Vintage Leather Bag',
    price: 199.99,
    originalPrice: 299.99,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&h=200&fit=crop',
    seller: mockSellers[0],
  },
  {
    id: 'p3',
    name: 'Limited Sneakers',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop',
    seller: mockSellers[1],
  },
  {
    id: 'p4',
    name: 'Gold Statement Earrings',
    price: 59.99,
    originalPrice: 89.99,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop',
    seller: mockSellers[2],
  },
  {
    id: 'p5',
    name: 'Tech Smartwatch',
    price: 399.99,
    originalPrice: 499.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop',
    seller: mockSellers[3],
  },
];

export const mockLiveStreams: LiveStream[] = [
  {
    id: 'ls1',
    seller: mockSellers[0],
    title: '🔥 FLASH SALE! Designer accessories at 40% OFF',
    viewers: 12453,
    products: [mockProducts[0], mockProducts[1]],
    thumbnail: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1200&fit=crop',
    isLive: true,
    category: 'Fashion',
  },
  {
    id: 'ls2',
    seller: mockSellers[1],
    title: 'Sneaker drop! Exclusive releases 👟',
    viewers: 8921,
    products: [mockProducts[2]],
    thumbnail: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&h=1200&fit=crop',
    isLive: true,
    category: 'Streetwear',
  },
  {
    id: 'ls3',
    seller: mockSellers[2],
    title: 'Jewelry haul - New arrivals ✨',
    viewers: 23104,
    products: [mockProducts[3]],
    thumbnail: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1200&fit=crop',
    isLive: true,
    category: 'Jewelry',
  },
  {
    id: 'ls4',
    seller: mockSellers[3],
    title: 'Tech gadgets under $500 💻',
    viewers: 5672,
    products: [mockProducts[4]],
    thumbnail: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&h=1200&fit=crop',
    isLive: true,
    category: 'Tech',
  },
];

export const mockChatMessages: ChatMessage[] = [
  {
    id: 'c1',
    userId: 'u1',
    username: 'fashionlover',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop',
    message: 'Love this scarf! 😍',
    timestamp: new Date(),
    type: 'message',
  },
  {
    id: 'c2',
    userId: 'u2',
    username: 'shopper2024',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50&h=50&fit=crop',
    message: 'Is this available in blue?',
    timestamp: new Date(),
    type: 'message',
  },
  {
    id: 'c3',
    userId: 'u3',
    username: 'luxuryfinds',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=50&h=50&fit=crop',
    message: 'Just bought the bag! 🛍️',
    timestamp: new Date(),
    type: 'purchase',
  },
  {
    id: 'c4',
    userId: 'u4',
    username: 'newbie_buyer',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=50&h=50&fit=crop',
    message: 'joined the stream',
    timestamp: new Date(),
    type: 'join',
  },
];

export const mockWishlist: WishlistItem[] = [
  {
    id: 'w1',
    product: mockProducts[0],
    addedAt: new Date(),
    priceWhenAdded: 89.99,
    aiRecommended: false,
  },
  {
    id: 'w2',
    product: mockProducts[2],
    addedAt: new Date(),
    priceWhenAdded: 269.99,
    aiRecommended: true,
  },
  {
    id: 'w3',
    product: mockProducts[4],
    addedAt: new Date(),
    priceWhenAdded: 399.99,
    aiRecommended: true,
  },
];
