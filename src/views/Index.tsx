import { useState, useEffect } from 'react';
import { LiveFeed } from '@/components/LiveFeed';
import { BottomNav } from '@/components/BottomNav';
import { TopTabs } from '@/components/TopTabs';
import { WishlistView } from '@/components/WishlistView';
import { DiscoverView } from '@/components/DiscoverView';
import { ProfileView } from '@/components/ProfileView';
import { LandingPage } from '@/components/LandingPage';
import { SignInModal } from '@/components/SignInModal';
import { GoLiveView } from '@/components/GoLiveView';
import { mockLiveStreams, mockSellers, mockWishlist } from '@/data/mockData';
import { Toaster } from '@/components/ui/toaster';
import { CartModal, CartItem } from '@/components/CartModal';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Loader2 } from 'lucide-react';
import { Product, LiveStream } from '@/types';
import { useToast } from '@/hooks/use-toast';
import { useIsSignedIn } from '@coinbase/cdp-hooks';
import { useActivity } from '@/hooks/use-activity';

const Index = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [feedTab, setFeedTab] = useState<'foryou' | 'following'>('foryou');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [liveStreams, setLiveStreams] = useState<LiveStream[]>([]);
  const [isLoadingStreams, setIsLoadingStreams] = useState(true);
  const { toast } = useToast();
  const isSignedIn = useIsSignedIn();
  const isAuthenticated = isSignedIn;
  const { trackProductView } = useActivity();

  // Fetch live streams from API
  useEffect(() => {
    const fetchStreams = async () => {
      setIsLoadingStreams(true);
      try {
        const response = await fetch('/api/streams?status=live&limit=20');
        if (response.ok) {
          const { streams } = await response.json();
          
          // Transform API data to match LiveStream type
          const transformedStreams: LiveStream[] = streams.map((stream: any) => ({
            id: stream._id,
            title: stream.title,
            seller: {
              id: stream.sellerId?.walletAddress || stream.sellerWallet,
              name: stream.sellerId?.username || 'Seller',
              username: stream.sellerId?.username || 'seller',
              avatar: stream.sellerId?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
              followers: stream.sellerId?.followers || 0,
              isVerified: stream.sellerId?.isVerified || false,
            },
            viewers: stream.viewerCount || 0,
            thumbnail: stream.thumbnailUrl || 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1200&fit=crop',
            products: stream.products?.map((p: any) => ({
              id: p._id || p,
              name: p.name || 'Product',
              price: p.price || 0,
              image: p.images?.[0] || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop',
            })) || [],
            isLive: stream.status === 'live',
            category: stream.category || 'Other',
          }));

          // If no live streams, use mock data
          setLiveStreams(transformedStreams.length > 0 ? transformedStreams : mockLiveStreams);
        } else {
          // Fallback to mock data on error
          setLiveStreams(mockLiveStreams);
        }
      } catch (error) {
        console.error('Error fetching streams:', error);
        setLiveStreams(mockLiveStreams);
      } finally {
        setIsLoadingStreams(false);
      }
    };

    fetchStreams();
    // Refresh streams every 30 seconds
    const interval = setInterval(fetchStreams, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  if (showLanding) {
    return <LandingPage onGetStarted={() => setShowLanding(false)} />;
  }

  const addToCart = (product: Product) => {
    // Track product view
    trackProductView(product.id, product.name);
    
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
            {isLoadingStreams ? (
              <div className="h-full flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <LiveFeed streams={liveStreams} onAddToCart={addToCart} />
            )}
          </div>
        );
      case 'discover':
        return (
          <DiscoverView
            streams={liveStreams.length > 0 ? liveStreams : mockLiveStreams}
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
        return <GoLiveView />;
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
