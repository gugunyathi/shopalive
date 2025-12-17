import { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { PaymentModal } from './PaymentModal';
import { useToast } from '@/hooks/use-toast';

export interface CartItem extends Product {
  quantity: number;
}

interface CartModalProps {
  items: CartItem[];
  onClose: () => void;
  onRemoveItem: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onClearCart: () => void;
}

export const CartModal = ({
  items,
  onClose,
  onRemoveItem,
  onUpdateQuantity,
  onClearCart,
}: CartModalProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { toast } = useToast();

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  const handleCheckout = () => {
    if (items.length === 0) return;
    
    // For now, just show a success message
    toast({
      title: "Checkout Initiated! 🛍️",
      description: `Total: $${total.toFixed(2)} for ${items.length} items`,
    });
    onClearCart();
    onClose();
  };

  const handleBuyNow = (item: CartItem) => {
    setSelectedProduct(item);
  };

  const handlePaymentSuccess = () => {
    if (selectedProduct) {
      onRemoveItem(selectedProduct.id);
      setSelectedProduct(null);
      toast({
        title: "Payment Successful! 🎉",
        description: `You've purchased ${selectedProduct.name}`,
      });
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 animate-in fade-in">
        <div className="absolute inset-0" onClick={onClose} />
        
        <div className="absolute right-0 top-0 bottom-0 w-full max-w-md glass border-l border-border animate-in slide-in-from-right">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-bold text-foreground">Shopping Cart</h2>
              <span className="text-sm text-muted-foreground">({items.length})</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Content */}
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[calc(100%-8rem)] p-8">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
                <ShoppingBag className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground text-center">
                Add items from live streams to get started!
              </p>
            </div>
          ) : (
            <>
              <ScrollArea className="h-[calc(100%-16rem)] p-4">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-3 p-3 glass rounded-xl slide-up"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground truncate">{item.name}</p>
                        <p className="text-sm text-muted-foreground truncate">
                          by {item.seller.name}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-primary font-bold">${item.price}</span>
                          {item.originalPrice && (
                            <span className="text-muted-foreground text-xs line-through">
                              ${item.originalPrice}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex items-center gap-2 glass rounded-lg">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-6 w-6 p-0"
                              onClick={() =>
                                onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))
                              }
                            >
                              -
                            </Button>
                            <span className="text-sm font-medium w-6 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-6 w-6 p-0"
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </Button>
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-6 px-2"
                            onClick={() => handleBuyNow(item)}
                          >
                            Buy Now
                          </Button>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive hover:text-destructive"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Footer with totals */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-background/95 backdrop-blur">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax (10%)</span>
                    <span className="text-foreground">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t border-border">
                    <span className="text-foreground">Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>
                <Button
                  className="w-full gradient-primary border-0 glow"
                  size="lg"
                  onClick={handleCheckout}
                >
                  Checkout ({items.length} {items.length === 1 ? 'item' : 'items'})
                </Button>
              </div>
            </>
          )}
        </div>
      </div>

      {selectedProduct && (
        <PaymentModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </>
  );
};
