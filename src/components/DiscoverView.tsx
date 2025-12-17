import { Search, TrendingUp, Sparkles, Flame } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { LiveStream, Seller } from '@/types';
import { cn } from '@/lib/utils';
import { LiveBadge } from './LiveBadge';

interface DiscoverViewProps {
  streams: LiveStream[];
  sellers: Seller[];
  onStreamClick: (stream: LiveStream) => void;
  onSellerClick: (seller: Seller) => void;
}

export const DiscoverView = ({ streams, sellers, onStreamClick, onSellerClick }: DiscoverViewProps) => {
  const categories = [
    { name: 'Trending', icon: TrendingUp, color: 'bg-primary/20 text-primary' },
    { name: 'Fashion', icon: Sparkles, color: 'bg-accent/20 text-accent' },
    { name: 'Tech', icon: Flame, color: 'bg-success/20 text-success' },
    { name: 'Beauty', icon: Sparkles, color: 'bg-pink-500/20 text-pink-400' },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Search Header */}
      <div className="sticky top-0 z-10 glass-dark p-4 border-b border-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search sellers, products, or categories..."
            className="pl-10 bg-secondary border-border"
          />
        </div>
      </div>

      {/* Categories */}
      <section className="p-4">
        <h2 className="font-semibold text-foreground mb-3">Browse Categories</h2>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap',
                cat.color
              )}
            >
              <cat.icon className="h-4 w-4" />
              <span className="font-medium">{cat.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Top Sellers */}
      <section className="p-4 border-t border-border">
        <h2 className="font-semibold text-foreground mb-3">Top Sellers</h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
          {sellers.map((seller) => (
            <button
              key={seller.id}
              onClick={() => onSellerClick(seller)}
              className="flex flex-col items-center gap-2 min-w-[80px]"
            >
              <div className="relative">
                <img
                  src={seller.avatar}
                  alt={seller.name}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-primary"
                />
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-live text-live-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  LIVE
                </span>
              </div>
              <span className="text-xs text-foreground font-medium truncate w-full text-center">
                {seller.username}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Live Now Grid */}
      <section className="p-4 border-t border-border">
        <h2 className="font-semibold text-foreground mb-3">Live Now</h2>
        <div className="grid grid-cols-2 gap-4">
          {streams.map((stream) => (
            <button
              key={stream.id}
              onClick={() => onStreamClick(stream)}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group"
            >
              <img
                src={stream.thumbnail}
                alt={stream.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/80" />
              
              {/* Live Badge */}
              <div className="absolute top-3 left-3">
                <LiveBadge size="sm" />
              </div>
              
              {/* Viewers */}
              <span className="absolute top-3 right-3 text-xs font-medium text-foreground/80 glass px-2 py-1 rounded-full">
                {(stream.viewers / 1000).toFixed(1)}K
              </span>

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <div className="flex items-center gap-2 mb-1">
                  <img
                    src={stream.seller.avatar}
                    alt={stream.seller.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-xs font-medium text-foreground truncate">
                    {stream.seller.username}
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground line-clamp-2 text-left">
                  {stream.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
