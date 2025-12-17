import { useState, useRef, useEffect, useCallback } from 'react';
import { LiveStream, ChatMessage, Product } from '@/types';
import { LiveBadge } from './LiveBadge';
import { ProductCard } from './ProductCard';
import { SellerInfo } from './SellerInfo';
import { LiveChat } from './LiveChat';
import { SocialShare } from './SocialShare';
import { Button } from '@/components/ui/button';
import {
  MessageCircle,
  Heart,
  ShoppingBag,
  Volume2,
  VolumeX,
  ChevronUp,
  ChevronDown,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { mockChatMessages } from '@/data/mockData';
import { useActivity } from '@/hooks/use-activity';

interface StreamViewerProps {
  stream: LiveStream;
  isActive: boolean;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
  onAddToCart?: (product: Product) => void;
}

export const StreamViewer = ({
  stream,
  isActive,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
  onAddToCart,
}: StreamViewerProps) => {
  const [isMuted, setIsMuted] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [showProducts, setShowProducts] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 50000) + 10000);
  const [messages, setMessages] = useState<ChatMessage[]>(mockChatMessages);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const { trackStreamView, trackLike } = useActivity();
  const hasTrackedView = useRef(false);

  // Track stream view when becoming active
  useEffect(() => {
    if (isActive && !hasTrackedView.current) {
      trackStreamView(stream.id, stream.title);
      hasTrackedView.current = true;
    }
    // Reset when stream changes
    if (!isActive) {
      hasTrackedView.current = false;
    }
  }, [isActive, stream.id, stream.title, trackStreamView]);

  // Rotate products every 5 seconds
  useEffect(() => {
    if (!isActive || stream.products.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentProductIndex((prev) => (prev + 1) % stream.products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isActive, stream.products.length]);

  const handleLike = () => {
    if (!isLiked) {
      trackLike('stream', stream.id);
    }
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleSendMessage = (message: string) => {
    const newMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      userId: 'current-user',
      username: 'you',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop',
      message,
      timestamp: new Date(),
      type: 'message',
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const currentProduct = stream.products[currentProductIndex];

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Video/Thumbnail Background */}
      <div className="absolute inset-0">
        <img
          src={stream.thumbnail}
          alt={stream.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/80" />
      </div>

      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 p-4 z-10 safe-area-top">
        <div className="flex items-center justify-between">
          <LiveBadge viewers={stream.viewers} />
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full glass"
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </Button>
            <SocialShare streamTitle={stream.title} />
          </div>
        </div>
      </div>

      {/* Navigation Hints */}
      {hasPrevious && (
        <button
          onClick={onPrevious}
          className="absolute top-20 left-1/2 -translate-x-1/2 z-10 p-2 text-foreground/50 hover:text-foreground transition-colors animate-bounce"
        >
          <ChevronUp className="h-8 w-8" />
        </button>
      )}
      {hasNext && (
        <button
          onClick={onNext}
          className="absolute bottom-32 left-1/2 -translate-x-1/2 z-10 p-2 text-foreground/50 hover:text-foreground transition-colors animate-bounce"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      )}

      {/* Right Side Actions */}
      <div className="absolute right-4 bottom-40 flex flex-col items-center gap-4 z-10">
        <div className="flex flex-col items-center">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-12 w-12"
            onClick={handleLike}
          >
            <Heart
              className={cn(
                'h-7 w-7 transition-all',
                isLiked && 'fill-accent text-accent scale-110'
              )}
            />
          </Button>
          <span className="text-xs text-foreground/80 font-medium">
            {(likeCount / 1000).toFixed(1)}K
          </span>
        </div>

        <div className="flex flex-col items-center">
          <Button
            variant="ghost"
            size="icon"
            className={cn('rounded-full h-12 w-12', showChat && 'bg-secondary')}
            onClick={() => setShowChat(!showChat)}
          >
            <MessageCircle className="h-7 w-7" />
          </Button>
          <span className="text-xs text-foreground/80 font-medium">Chat</span>
        </div>

        <div className="flex flex-col items-center">
          <Button
            variant="ghost"
            size="icon"
            className={cn('rounded-full h-12 w-12', showProducts && 'bg-secondary')}
            onClick={() => setShowProducts(!showProducts)}
          >
            <ShoppingBag className="h-7 w-7" />
          </Button>
          <span className="text-xs text-foreground/80 font-medium">Shop</span>
        </div>

        {/* Seller Avatar */}
        <button className="relative mt-2">
          <img
            src={stream.seller.avatar}
            alt={stream.seller.name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-primary"
          />
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-2 rounded-full">
            +
          </span>
        </button>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-16 p-4 z-10">
        {/* Seller Info */}
        <SellerInfo seller={stream.seller} variant="compact" className="mb-3" />

        {/* Stream Title */}
        <p className="text-foreground font-medium mb-4 line-clamp-2">{stream.title}</p>

        {/* Product Overlay */}
        {showProducts && currentProduct && (
          <ProductCard
            product={currentProduct}
            variant="compact"
            onAddToCart={onAddToCart}
            onAddToWishlist={(p) => console.log('Add to wishlist:', p)}
          />
        )}

        {/* Product Dots */}
        {stream.products.length > 1 && showProducts && (
          <div className="flex justify-center gap-1.5 mt-3">
            {stream.products.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentProductIndex(idx)}
                className={cn(
                  'w-2 h-2 rounded-full transition-all',
                  idx === currentProductIndex ? 'bg-primary w-4' : 'bg-foreground/30'
                )}
              />
            ))}
          </div>
        )}
      </div>

      {/* Chat Sidebar */}
      {showChat && (
        <div className="absolute right-0 top-0 bottom-0 w-80 glass-dark z-20 slide-up">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h3 className="font-semibold text-foreground">Live Chat</h3>
            <Button variant="ghost" size="icon" onClick={() => setShowChat(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <LiveChat
            messages={messages}
            onSendMessage={handleSendMessage}
            className="h-[calc(100%-60px)]"
          />
        </div>
      )}
    </div>
  );
};
