import { useState, useRef, useEffect } from 'react';
import { ShoppableVideo, Product } from '@/types';
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
  Play,
  Pause,
  Eye,
  UserPlus,
  Check,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useActivity } from '@/hooks/use-activity';
import { useEvmAddress, useIsSignedIn } from '@coinbase/cdp-hooks';
import { useToast } from '@/hooks/use-toast';

interface VideoViewerProps {
  video: ShoppableVideo;
  isActive: boolean;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
  onAddToCart?: (product: Product) => void;
}

export const VideoViewer = ({
  video,
  isActive,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
  onAddToCart,
}: VideoViewerProps) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showProducts, setShowProducts] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [likeCount, setLikeCount] = useState(video.likeCount);
  const [viewCount, setViewCount] = useState(video.viewCount);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { trackProductView, trackLike, trackFollow } = useActivity();
  const { evmAddress } = useEvmAddress();
  const { isSignedIn } = useIsSignedIn();
  const { toast } = useToast();
  const hasTrackedView = useRef(false);

  // Check if following seller
  useEffect(() => {
    const checkFollowing = async () => {
      if (!evmAddress || !isSignedIn || !video.seller.walletAddress) return;
      try {
        const response = await fetch(`/api/follows?followerWallet=${evmAddress}&followingWallet=${video.seller.walletAddress}`);
        if (response.ok) {
          const data = await response.json();
          setIsFollowing(data.isFollowing);
        }
      } catch (error) {
        console.error('Error checking follow status:', error);
      }
    };
    checkFollowing();
  }, [evmAddress, isSignedIn, video.seller.walletAddress]);

  // Handle follow/unfollow
  const handleFollow = async () => {
    if (!evmAddress || !isSignedIn) {
      toast({
        title: 'Sign in required',
        description: 'Please sign in to follow sellers',
        variant: 'destructive',
      });
      return;
    }

    try {
      const response = await fetch('/api/follows', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          followerWallet: evmAddress,
          followingWallet: video.seller.walletAddress || video.seller.id,
          action: isFollowing ? 'unfollow' : 'follow',
        }),
      });

      if (response.ok) {
        setIsFollowing(!isFollowing);
        if (!isFollowing) {
          trackFollow(video.seller.id, video.seller.username);
        }
        toast({
          title: isFollowing ? 'Unfollowed' : 'Following',
          description: isFollowing ? `Unfollowed ${video.seller.name}` : `Now following ${video.seller.name}`,
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update follow status',
        variant: 'destructive',
      });
    }
  };

  // Track view when becoming active
  useEffect(() => {
    if (isActive && !hasTrackedView.current) {
      // Track view via API
      fetch('/api/videos/stats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ videoId: video.id, action: 'view' }),
      }).then(() => {
        setViewCount(prev => prev + 1);
      }).catch(console.error);
      
      hasTrackedView.current = true;
    }
    if (!isActive) {
      hasTrackedView.current = false;
    }
  }, [isActive, video.id]);

  // Auto-play when active
  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setIsPlaying(false);
      }
    }
  }, [isActive]);

  // Update progress
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setProgress((video.currentTime / video.duration) * 100 || 0);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      video.currentTime = 0;
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Rotate products every 5 seconds
  useEffect(() => {
    if (!isActive || video.products.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentProductIndex((prev) => (prev + 1) % video.products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isActive, video.products.length]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleLike = async () => {
    if (!isLiked) {
      trackLike('video', video.id);
      try {
        await fetch('/api/videos/stats', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ videoId: video.id, action: 'like' }),
        });
        setLikeCount(prev => prev + 1);
      } catch (error) {
        console.error('Error liking video:', error);
      }
    }
    setIsLiked(!isLiked);
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  const currentProduct = video.products[currentProductIndex];

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0" onClick={handlePlayPause}>
        <video
          ref={videoRef}
          src={video.videoUrl}
          poster={video.thumbnail}
          className="w-full h-full object-cover"
          muted={isMuted}
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/80" />
        
        {/* Play/Pause overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-background/50 flex items-center justify-center">
              <Play className="h-10 w-10 text-foreground ml-1" />
            </div>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 bg-background/30 z-20 cursor-pointer"
        onClick={handleProgressClick}
      >
        <div 
          className="h-full bg-primary transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Top Bar - No LIVE badge, show view count instead */}
      <div className="absolute top-2 left-0 right-0 p-4 z-10 safe-area-top">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-full">
            <Eye className="h-4 w-4 text-foreground" />
            <span className="text-sm font-semibold text-foreground">
              {viewCount >= 1000 ? `${(viewCount / 1000).toFixed(1)}K` : viewCount} views
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full glass"
              onClick={handleMute}
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </Button>
            <SocialShare streamTitle={video.title} />
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
            {likeCount >= 1000 ? `${(likeCount / 1000).toFixed(1)}K` : likeCount}
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
          <span className="text-xs text-foreground/80 font-medium">Comments</span>
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

        {/* Seller Avatar with Follow Button */}
        <button className="relative mt-2" onClick={handleFollow}>
          <img
            src={video.seller.avatar}
            alt={video.seller.name}
            className={cn(
              'w-12 h-12 rounded-full object-cover ring-2',
              isFollowing ? 'ring-green-500' : 'ring-primary'
            )}
          />
          <span className={cn(
            'absolute -bottom-1 left-1/2 -translate-x-1/2 text-xs font-bold px-1.5 py-0.5 rounded-full flex items-center justify-center',
            isFollowing ? 'bg-green-500 text-white' : 'bg-primary text-primary-foreground'
          )}>
            {isFollowing ? <Check className="h-3 w-3" /> : <UserPlus className="h-3 w-3" />}
          </span>
        </button>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-16 p-4 z-10">
        {/* Seller Info */}
        <SellerInfo seller={video.seller} variant="compact" className="mb-3" />

        {/* Video Title & Description */}
        <p className="text-foreground font-medium mb-1 line-clamp-2">{video.title}</p>
        {video.description && (
          <p className="text-foreground/70 text-sm mb-4 line-clamp-1">{video.description}</p>
        )}

        {/* Tags */}
        {video.tags && video.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {video.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="text-primary text-sm">#{tag}</span>
            ))}
          </div>
        )}

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
        {video.products.length > 1 && showProducts && (
          <div className="flex justify-center gap-1.5 mt-3">
            {video.products.map((_, idx) => (
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

      {/* Comments Sidebar (same as chat) */}
      {showChat && (
        <div className="absolute right-0 top-0 bottom-0 w-80 glass-dark z-20 slide-up">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h3 className="font-semibold text-foreground">Comments</h3>
            <Button variant="ghost" size="icon" onClick={() => setShowChat(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <LiveChat
            streamId={video.id}
            className="h-[calc(100%-60px)]"
          />
        </div>
      )}
    </div>
  );
};
