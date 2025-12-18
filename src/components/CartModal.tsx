import { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { X, Trash2, ShoppingBag, Loader2, DollarSign, CheckCircle2, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { PaymentModal } from './PaymentModal';
import { useToast } from '@/hooks/use-toast';
import { useEvmAddress, useIsSignedIn } from '@coinbase/cdp-hooks';
import { useActivity } from '@/hooks/use-activity';
import { pay, getPaymentStatus } from '@base-org/account';
import { BasePayButton } from '@base-org/account-ui/react';

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

type CheckoutState = 'idle' | 'processing' | 'polling' | 'success' | 'error';

// Platform wallet for commissions and platform revenue
const PLATFORM_WALLET = process.env.NEXT_PUBLIC_PLATFORM_WALLET || '0x21f8dc27ab14584D292Afb86dCc45E994f6b8b87';

export const CartModal = ({
  items,
  onClose,
  onRemoveItem,
  onUpdateQuantity,
  onClearCart,
}: CartModalProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [checkoutState, setCheckoutState] = useState<CheckoutState>('idle');
  const [transactionId, setTransactionId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { toast } = useToast();
  const { evmAddress } = useEvmAddress();
  const { isSignedIn } = useIsSignedIn();
  const { trackPurchase } = useActivity();

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  const handleCheckout = async () => {
    if (items.length === 0) return;
    
    if (!isSignedIn || !evmAddress) {
      toast({
        title: "Sign in required",
        description: "Please sign in to complete your purchase",
        variant: "destructive",
      });
      return;
    }
    
    setCheckoutState('processing');
    setErrorMessage(null);

    try {
      // Get seller wallet from first item or use platform wallet as fallback
      const sellerWallet = items[0]?.seller?.walletAddress || PLATFORM_WALLET;

      // Initiate Base Pay payment
      const payment = await pay({
        amount: total.toFixed(2),
        to: sellerWallet as `0x${string}`,
        testnet: true, // Use Base Sepolia testnet
        payerInfo: {
          requests: [
            { type: 'email' },
            { type: 'physicalAddress', optional: true }
          ]
        }
      });

      setTransactionId(payment.id);
      setCheckoutState('polling');

      // Poll for payment status
      const checkStatus = async (attempts = 0): Promise<void> => {
        if (attempts > 60) {
          setCheckoutState('error');
          setErrorMessage('Payment verification timed out. Please check your transaction.');
          return;
        }

        const { status } = await getPaymentStatus({
          id: payment.id,
          testnet: true
        });

        if (status === 'completed') {
          // Create order in database
          const response = await fetch('/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              buyerWallet: evmAddress,
              sellerWallet: sellerWallet,
              products: items.map(item => ({
                productId: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
              })),
              transactionId: payment.id,
              paymentMethod: 'basepay',
            }),
          });

          if (response.ok) {
            const { order } = await response.json();
            await trackPurchase(order._id, total, items.length);
          }

          setCheckoutState('success');
          toast({
            title: "Payment Successful! 🎉",
            description: `Total: $${total.toFixed(2)} USDC`,
          });

          // Clear cart after success
          setTimeout(() => {
            onClearCart();
            onClose();
          }, 3000);
        } else if (status === 'failed') {
          setCheckoutState('error');
          setErrorMessage('Payment failed. Please try again.');
        } else {
          setTimeout(() => checkStatus(attempts + 1), 2000);
        }
      };

      await checkStatus();

    } catch (error: any) {
      console.error('Checkout error:', error);
      setCheckoutState('error');
      setErrorMessage(error.message || 'Payment failed. Please try again.');
      toast({
        title: "Checkout Failed",
        description: error.message || "Failed to complete checkout",
        variant: "destructive",
      });
    }
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
                    <span className="text-primary">${total.toFixed(2)} USDC</span>
                  </div>
                </div>

                {/* Checkout States */}
                {checkoutState === 'idle' && (
                  <>
                    <div className="mb-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="h-4 w-4 text-blue-500" />
                        <span className="text-muted-foreground">Pay with USDC on Base</span>
                      </div>
                    </div>
                    <BasePayButton
                      colorScheme="light"
                      onClick={handleCheckout}
                    />
                    <p className="text-xs text-center text-muted-foreground mt-2">
                      🔒 Powered by Base Pay • {items.length} {items.length === 1 ? 'item' : 'items'}
                    </p>
                  </>
                )}

                {checkoutState === 'processing' && (
                  <div className="flex flex-col items-center py-4">
                    <Loader2 className="h-8 w-8 text-primary animate-spin mb-2" />
                    <p className="text-foreground font-medium">Initiating payment...</p>
                    <p className="text-xs text-muted-foreground">Complete in your wallet</p>
                  </div>
                )}

                {checkoutState === 'polling' && (
                  <div className="flex flex-col items-center py-4">
                    <Loader2 className="h-8 w-8 text-primary animate-spin mb-2" />
                    <p className="text-foreground font-medium">Confirming payment...</p>
                    {transactionId && (
                      <p className="text-xs text-muted-foreground font-mono mt-1">
                        TX: {transactionId.slice(0, 8)}...
                      </p>
                    )}
                  </div>
                )}

                {checkoutState === 'success' && (
                  <div className="flex flex-col items-center py-4">
                    <CheckCircle2 className="h-10 w-10 text-green-500 mb-2" />
                    <p className="text-foreground font-medium">Payment Successful!</p>
                    {transactionId && (
                      <a
                        href={`https://sepolia.basescan.org/tx/${transactionId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-primary mt-2 hover:underline"
                      >
                        View on BaseScan <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                )}

                {checkoutState === 'error' && (
                  <div className="space-y-3">
                    <div className="flex flex-col items-center py-2">
                      <X className="h-8 w-8 text-destructive mb-2" />
                      <p className="text-foreground font-medium">Payment Failed</p>
                      <p className="text-xs text-muted-foreground text-center mt-1">
                        {errorMessage || 'Something went wrong'}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={onClose}
                      >
                        Cancel
                      </Button>
                      <Button
                        className="flex-1 gradient-primary border-0"
                        onClick={() => setCheckoutState('idle')}
                      >
                        Try Again
                      </Button>
                    </div>
                  </div>
                )}
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
