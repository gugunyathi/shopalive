import { useState } from 'react';
import { X, Loader2, CheckCircle2, ExternalLink, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';
import { pay, getPaymentStatus } from '@base-org/account';
import { BasePayButton } from '@base-org/account-ui/react';
import { useToast } from '@/hooks/use-toast';

interface PaymentModalProps {
  product: Product;
  onClose: () => void;
  onSuccess: () => void;
  recipientAddress?: string;
}

type PaymentState = 'idle' | 'processing' | 'polling' | 'success' | 'error';

// Default seller wallet - replace with actual seller wallet from product
const DEFAULT_SELLER_WALLET = '0x1234567890123456789012345678901234567890';

export const PaymentModal = ({ 
  product, 
  onClose, 
  onSuccess,
  recipientAddress 
}: PaymentModalProps) => {
  const [paymentState, setPaymentState] = useState<PaymentState>('idle');
  const [transactionId, setTransactionId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { toast } = useToast();

  // Use seller's wallet address if available, otherwise use default
  const sellerWallet = recipientAddress || product.seller?.walletAddress || DEFAULT_SELLER_WALLET;

  const handleBasePay = async () => {
    setPaymentState('processing');
    setErrorMessage(null);

    try {
      // Initiate payment using Base Pay
      const payment = await pay({
        amount: product.price.toString(),
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
      setPaymentState('polling');

      // Poll for payment status
      const checkStatus = async (attempts = 0): Promise<void> => {
        if (attempts > 60) { // 2 minute timeout (60 * 2 seconds)
          setPaymentState('error');
          setErrorMessage('Payment verification timed out. Please check your transaction.');
          return;
        }

        const { status } = await getPaymentStatus({
          id: payment.id,
          testnet: true
        });

        if (status === 'completed') {
          setPaymentState('success');
          toast({
            title: 'Payment Successful! 🎉',
            description: `You've purchased ${product.name}`,
          });
          
          // Wait a moment before closing
          setTimeout(() => {
            onSuccess();
          }, 2000);
        } else if (status === 'failed') {
          setPaymentState('error');
          setErrorMessage('Payment failed. Please try again.');
        } else {
          // Status is pending, keep polling
          setTimeout(() => checkStatus(attempts + 1), 2000);
        }
      };

      await checkStatus();

    } catch (error: any) {
      console.error('Payment error:', error);
      setPaymentState('error');
      setErrorMessage(error.message || 'Payment failed. Please try again.');
      toast({
        title: 'Payment Failed',
        description: error.message || 'Something went wrong',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={paymentState === 'processing' || paymentState === 'polling' ? undefined : onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md bg-card rounded-t-3xl sm:rounded-2xl max-h-[90vh] overflow-hidden animate-slideUp">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">
            {paymentState === 'success' ? 'Payment Complete' : 'Checkout with Base Pay'}
          </h2>
          {paymentState !== 'processing' && paymentState !== 'polling' && (
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          )}
        </div>

        {/* Product Summary */}
        <div className="p-4 border-b border-border">
          <div className="flex gap-3">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="font-medium text-foreground line-clamp-1">{product.name}</h3>
              <p className="text-sm text-muted-foreground">by {product.seller.name}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-primary font-bold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xs text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Payment Content */}
        <div className="p-6 space-y-4">
          {paymentState === 'idle' && (
            <>
              {/* Base Pay Info */}
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <DollarSign className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Pay with USDC</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Fast, secure payments on Base network. No gas fees, instant settlement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment Summary */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Item Price</span>
                  <span className="text-foreground">${product.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Network Fee</span>
                  <span className="text-green-500">Free</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t border-border">
                  <span className="text-foreground">Total</span>
                  <span className="text-primary">${product.price.toFixed(2)} USDC</span>
                </div>
              </div>
            </>
          )}

          {paymentState === 'processing' && (
            <div className="flex flex-col items-center py-8">
              <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
              <p className="text-foreground font-medium">Initiating payment...</p>
              <p className="text-sm text-muted-foreground mt-1">
                Please complete the payment in your wallet
              </p>
            </div>
          )}

          {paymentState === 'polling' && (
            <div className="flex flex-col items-center py-8">
              <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
              <p className="text-foreground font-medium">Confirming payment...</p>
              <p className="text-sm text-muted-foreground mt-1">
                This usually takes a few seconds
              </p>
              {transactionId && (
                <p className="text-xs text-muted-foreground mt-2 font-mono">
                  TX: {transactionId.slice(0, 8)}...{transactionId.slice(-6)}
                </p>
              )}
            </div>
          )}

          {paymentState === 'success' && (
            <div className="flex flex-col items-center py-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <p className="text-foreground font-medium text-lg">Payment Successful!</p>
              <p className="text-sm text-muted-foreground mt-1">
                Your order is being processed
              </p>
              {transactionId && (
                <a
                  href={`https://sepolia.basescan.org/tx/${transactionId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-primary mt-4 hover:underline"
                >
                  View on BaseScan
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          )}

          {paymentState === 'error' && (
            <div className="flex flex-col items-center py-8">
              <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center mb-4">
                <X className="w-10 h-10 text-destructive" />
              </div>
              <p className="text-foreground font-medium">Payment Failed</p>
              <p className="text-sm text-muted-foreground mt-1 text-center">
                {errorMessage || 'Something went wrong. Please try again.'}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border bg-muted/30">
          {paymentState === 'idle' && (
            <>
              <BasePayButton
                colorScheme="light"
                onClick={handleBasePay}
              />
              <p className="text-xs text-center text-muted-foreground mt-3">
                🔒 Powered by Base Pay • USDC on Base Sepolia
              </p>
            </>
          )}

          {paymentState === 'error' && (
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
                onClick={() => setPaymentState('idle')}
              >
                Try Again
              </Button>
            </div>
          )}

          {paymentState === 'success' && (
            <Button
              className="w-full gradient-primary border-0"
              onClick={onClose}
            >
              Done
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
