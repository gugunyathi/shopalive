import { WishlistItem } from '@/types';
import { ProductCard } from './ProductCard';
import { Sparkles, TrendingDown, Clock, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface WishlistViewProps {
  items: WishlistItem[];
  onRemove?: (id: string) => void;
  onBuy?: (item: WishlistItem) => void;
}

export const WishlistView = ({ items, onRemove, onBuy }: WishlistViewProps) => {
  const aiRecommended = items.filter((i) => i.aiRecommended);
  const saved = items.filter((i) => !i.aiRecommended);
  const priceDrops = items.filter(
    (i) => i.product.originalPrice && i.product.price < i.priceWhenAdded
  );

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 glass-dark p-4 border-b border-border">
        <h1 className="text-2xl font-bold font-display text-foreground">My Items</h1>
        <p className="text-sm text-muted-foreground mt-1">
          {items.length} items saved • {priceDrops.length} price drops
        </p>
      </div>

      {/* AI Recommendations Section */}
      {aiRecommended.length > 0 && (
        <section className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 rounded-lg bg-accent/20">
              <Sparkles className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">AI Picks For You</h2>
              <p className="text-xs text-muted-foreground">Based on your watching history</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {aiRecommended.map((item) => (
              <div key={item.id} className="relative">
                <ProductCard
                  product={item.product}
                  variant="grid"
                  onAddToCart={() => onBuy?.(item)}
                />
                <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 z-10">
                  <Sparkles className="h-3 w-3" />
                  AI Pick
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Price Drops Section */}
      {priceDrops.length > 0 && (
        <section className="p-4 border-t border-border">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 rounded-lg bg-success/20">
              <TrendingDown className="h-5 w-5 text-success" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">Price Drops</h2>
              <p className="text-xs text-muted-foreground">Items that went on sale</p>
            </div>
          </div>
          <div className="space-y-3">
            {priceDrops.map((item) => (
              <div
                key={item.id}
                className="glass rounded-xl p-3 flex items-center gap-3"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground truncate">{item.product.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-success font-bold">${item.product.price}</span>
                    <span className="text-muted-foreground text-sm line-through">
                      ${item.priceWhenAdded}
                    </span>
                    <span className="text-success text-xs font-semibold">
                      -${(item.priceWhenAdded - item.product.price).toFixed(2)}
                    </span>
                  </div>
                </div>
                <Button
                  size="sm"
                  className="gradient-primary"
                  onClick={() => onBuy?.(item)}
                >
                  Buy
                </Button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Saved Items Section */}
      {saved.length > 0 && (
        <section className="p-4 border-t border-border">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 rounded-lg bg-secondary">
              <Clock className="h-5 w-5 text-foreground" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">Saved Items</h2>
              <p className="text-xs text-muted-foreground">Items you've added</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {saved.map((item) => (
              <div key={item.id} className="relative group">
                <ProductCard
                  product={item.product}
                  variant="grid"
                  onAddToCart={() => onBuy?.(item)}
                />
                <button
                  onClick={() => onRemove?.(item.id)}
                  className="absolute top-3 right-3 p-2 glass rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Empty State */}
      {items.length === 0 && (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center p-8">
          <div className="p-4 rounded-full bg-secondary mb-4">
            <Heart className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">No items yet</h3>
          <p className="text-muted-foreground max-w-xs">
            Start browsing live streams and save items you love. Our AI will also suggest items based on your interests!
          </p>
        </div>
      )}
    </div>
  );
};

// Add missing import
import { Heart } from 'lucide-react';
