import { Product } from '@/types';
import { Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { PaymentModal } from '@/components/PaymentModal';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
  variant?: 'overlay' | 'grid' | 'compact';
  onAddToCart?: (product: Product) => void;
  onAddToWishlist?: (product: Product) => void;
}

export const ProductCard = ({
  product,
  variant = 'overlay',
  onAddToCart,
  onAddToWishlist,
}: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const { toast } = useToast();
  
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const handleBuyClick = () => {
    setShowPayment(true);
  };

  const handlePaymentSuccess = () => {
    setShowPayment(false);
    toast({
      title: "Payment Successful! 🎉",
      description: `You've purchased ${product.name}`,
    });
  };

  if (variant === 'compact') {
    return (
      <>
        <div className="flex items-center gap-3 glass rounded-xl p-3 slide-up">
          <img
            src={product.image}
            alt={product.name}
            className="w-14 h-14 rounded-lg object-cover"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">{product.name}</p>
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-muted-foreground text-xs line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>
          <Button
            size="sm"
            className="gradient-primary border-0 glow"
            onClick={handleBuyClick}
          >
            <ShoppingBag className="h-4 w-4" />
          </Button>
        </div>
        {showPayment && (
          <PaymentModal
            product={product}
            onClose={() => setShowPayment(false)}
            onSuccess={handlePaymentSuccess}
          />
        )}
      </>
    );
  }

  if (variant === 'grid') {
    return (
      <>
        <div className="glass rounded-2xl overflow-hidden group">
          <div className="relative aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {discount && (
              <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                -{discount}%
              </span>
            )}
            <button
              onClick={() => {
                setIsLiked(!isLiked);
                onAddToWishlist?.(product);
              }}
              className="absolute top-3 right-3 p-2 glass rounded-full hover:scale-110 transition-transform"
            >
              <Heart
                className={cn('h-5 w-5', isLiked ? 'fill-accent text-accent' : 'text-foreground')}
              />
            </button>
          </div>
          <div className="p-4">
            <p className="font-medium text-foreground mb-1 truncate">{product.name}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold text-lg">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-muted-foreground text-sm line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              <Button
                size="sm"
                className="gradient-primary border-0"
                onClick={handleBuyClick}
              >
                <ShoppingBag className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        {showPayment && (
          <PaymentModal
            product={product}
            onClose={() => setShowPayment(false)}
            onSuccess={handlePaymentSuccess}
          />
        )}
      </>
    );
  }

  // Overlay variant (default)
  return (
    <>
      <div className="glass rounded-2xl p-4 flex items-center gap-4 slide-up max-w-xs">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-20 h-20 rounded-xl object-cover"
          />
          {discount && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">
              -{discount}%
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-foreground mb-1 truncate">{product.name}</p>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-primary font-bold text-lg">${product.price}</span>
            {product.originalPrice && (
              <span className="text-muted-foreground text-sm line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              className="gradient-primary border-0 flex-1"
              onClick={handleBuyClick}
            >
              Buy Now
            </Button>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => {
                setIsLiked(!isLiked);
                onAddToWishlist?.(product);
              }}
            >
              <Heart className={cn('h-4 w-4', isLiked && 'fill-accent text-accent')} />
            </Button>
          </div>
        </div>
      </div>
      {showPayment && (
        <PaymentModal
          product={product}
          onClose={() => setShowPayment(false)}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </>
  );
};
