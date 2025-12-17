import { useState } from 'react';
import { X, CreditCard, Smartphone, Bitcoin, Check, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';

interface PaymentModalProps {
  product: Product;
  onClose: () => void;
  onSuccess: () => void;
}

type PaymentMethod = 'card' | 'mobile' | 'crypto';
type CardType = 'visa' | 'mastercard' | 'amex';
type MobileType = 'apple' | 'google' | 'samsung';
type CryptoType = 'bitcoin' | 'ethereum' | 'usdc';

export const PaymentModal = ({ product, onClose, onSuccess }: PaymentModalProps) => {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
  const [selectedSubMethod, setSelectedSubMethod] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  const handlePayment = () => {
    setProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      onSuccess();
    }, 2000);
  };

  const paymentMethods = [
    {
      id: 'card' as PaymentMethod,
      name: 'Card Payment',
      icon: CreditCard,
      description: 'Visa, Mastercard, Amex',
      subOptions: [
        { id: 'visa', name: 'Visa', icon: '💳' },
        { id: 'mastercard', name: 'Mastercard', icon: '💳' },
        { id: 'amex', name: 'American Express', icon: '💳' },
      ],
    },
    {
      id: 'mobile' as PaymentMethod,
      name: 'Mobile Pay',
      icon: Smartphone,
      description: 'Apple Pay, Google Pay, Samsung Pay',
      subOptions: [
        { id: 'apple', name: 'Apple Pay', icon: '' },
        { id: 'google', name: 'Google Pay', icon: '🅖' },
        { id: 'samsung', name: 'Samsung Pay', icon: '🅢' },
      ],
    },
    {
      id: 'crypto' as PaymentMethod,
      name: 'Cryptocurrency',
      icon: Bitcoin,
      description: 'Bitcoin, Ethereum, USDC',
      subOptions: [
        { id: 'bitcoin', name: 'Bitcoin (BTC)', icon: '₿' },
        { id: 'ethereum', name: 'Ethereum (ETH)', icon: 'Ξ' },
        { id: 'usdc', name: 'USDC', icon: '$' },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md bg-card rounded-t-3xl sm:rounded-2xl max-h-[90vh] overflow-hidden animate-slideUp">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Checkout</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
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

        {/* Payment Methods */}
        <div className="p-4 space-y-3 overflow-y-auto max-h-[50vh]">
          <p className="text-sm font-medium text-muted-foreground mb-3">Select payment method</p>
          
          {paymentMethods.map((method) => (
            <div key={method.id} className="space-y-2">
              <button
                onClick={() => {
                  setSelectedMethod(selectedMethod === method.id ? null : method.id);
                  setSelectedSubMethod(null);
                }}
                className={`w-full flex items-center gap-3 p-4 rounded-xl border transition-all ${
                  selectedMethod === method.id
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/50 hover:bg-muted/50'
                }`}
              >
                <div className={`p-2 rounded-lg ${
                  selectedMethod === method.id ? 'bg-primary text-primary-foreground' : 'bg-muted'
                }`}>
                  <method.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-medium text-foreground">{method.name}</p>
                  <p className="text-xs text-muted-foreground">{method.description}</p>
                </div>
                <ChevronRight className={`w-5 h-5 text-muted-foreground transition-transform ${
                  selectedMethod === method.id ? 'rotate-90' : ''
                }`} />
              </button>

              {/* Sub-options */}
              {selectedMethod === method.id && (
                <div className="ml-4 pl-4 border-l-2 border-primary/30 space-y-2 animate-fadeIn">
                  {method.subOptions.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => setSelectedSubMethod(sub.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${
                        selectedSubMethod === sub.id
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <span className="text-xl w-8 text-center">{sub.icon}</span>
                      <span className="flex-1 text-left text-sm font-medium text-foreground">
                        {sub.name}
                      </span>
                      {selectedSubMethod === sub.id && (
                        <Check className="w-4 h-4 text-primary" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border bg-muted/30">
          <div className="flex items-center justify-between mb-3">
            <span className="text-muted-foreground">Total</span>
            <span className="text-xl font-bold text-foreground">${product.price}</span>
          </div>
          <Button
            variant="gradient"
            className="w-full h-12 text-base font-semibold"
            disabled={!selectedSubMethod || processing}
            onClick={handlePayment}
          >
            {processing ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Processing...
              </span>
            ) : (
              `Pay $${product.price}`
            )}
          </Button>
          <p className="text-xs text-center text-muted-foreground mt-3">
            🔒 Secure payment powered by encrypted connection
          </p>
        </div>
      </div>
    </div>
  );
};
