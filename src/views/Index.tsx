import { useState } from 'react';
import { LiveFeed } from '@/components/LiveFeed';
import { BottomNav } from '@/components/BottomNav';
import { TopTabs } from '@/components/TopTabs';
import { WishlistView } from '@/components/WishlistView';
import { DiscoverView } from '@/components/DiscoverView';
import { ProfileView } from '@/components/ProfileView';
import { LandingPage } from '@/components/LandingPage';
import { SignInModal } from '@/components/SignInModal';
import { mockLiveStreams, mockSellers, mockWishlist } from '@/data/mockData';
import { Toaster } from '@/components/ui/toaster';
import { CartModal, CartItem } from '@/components/CartModal';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/types';
import { useToast } from '@/hooks/use-toast';
import { useIsSignedIn } from '@coinbase/cdp-hooks';

const Index = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [feedTab, setFeedTab] = useState<'foryou' | 'following'>('foryou');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const { toast } = useToast();
  const isSignedIn = useIsSignedIn();
  const isAuthenticated = isSignedIn;

  const handleTabChange = (tab: string) => {
    if ((tab === 'create' || tab === 'profile') && !isAuthenticated) {
      setShowSignIn(true);
      return;
    }
    setActiveTab(tab);
  };

  if (showLanding) {
    return <LandingPage onGetStarted={() => setShowLanding(false)} />;
  }

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        toast({
          title: "Updated Cart",
          description: `${product.name} quantity increased`,
        });
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      toast({
        title: "Added to Cart! 🛒",
        description: `${product.name} has been added to your cart`,
      });
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast({
      title: "Removed from Cart",
      description: "Item has been removed from your cart",
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="h-full relative">
            {/* Top Navigation */}
            <div className="absolute top-4 left-0 right-0 z-30 flex justify-between items-center px-4 safe-area-top">
              <div className="w-10" /> {/* Spacer for centering */}
              <TopTabs activeTab={feedTab} onTabChange={setFeedTab} />
              {/* Cart Icon at Top */}
              <Button
                variant="ghost"
                size="icon"
                className="relative glass rounded-full"
                onClick={() => setShowCart(true)}
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount > 99 ? '99+' : cartItemCount}
                  </span>
                )}
              </Button>
            </div>
            {/* Live Feed */}
            <LiveFeed streams={mockLiveStreams} onAddToCart={addToCart} />
          </div>
        );
      case 'discover':
        return (
          <DiscoverView
            streams={mockLiveStreams}
            sellers={mockSellers}
            onStreamClick={(stream) => {
              console.log('Navigate to stream:', stream.id);
              setActiveTab('home');
            }}
            onSellerClick={(seller) => {
              console.log('Navigate to seller:', seller.id);
            }}
          />
        );
      case 'wishlist':
        return (
          <WishlistView
            items={mockWishlist}
            onRemove={(id) => console.log('Remove:', id)}
            onBuy={(item) => console.log('Buy:', item)}
          />
        );
      case 'profile':
        return <ProfileView isOwnProfile />;
      case 'create':
        return (
          <div className="h-full flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 glow">
                <span className="text-4xl">📹</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Go Live</h2>
              <p className="text-muted-foreground max-w-xs mx-auto">
                Start streaming and showcase your products to thousands of viewers!
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-background">
      {/* Main Content */}
      <main className="h-full pb-16">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Sign In Modal */}
      <SignInModal 
        open={showSignIn} 
        onOpenChange={setShowSignIn}
      />

      {/* Cart Modal */}
      {showCart && (
        <CartModal
          items={cartItems}
          onClose={() => setShowCart(false)}
          onRemoveItem={removeFromCart}
          onUpdateQuantity={updateQuantity}
          onClearCart={clearCart}
        />
      )}
      
      <Toaster />
    </div>
  );
};

export default Index;
