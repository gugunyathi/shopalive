import { useState } from 'react';
import { LiveFeed } from '@/components/LiveFeed';
import { BottomNav } from '@/components/BottomNav';
import { TopTabs } from '@/components/TopTabs';
import { WishlistView } from '@/components/WishlistView';
import { DiscoverView } from '@/components/DiscoverView';
import { ProfileView } from '@/components/ProfileView';
import { mockLiveStreams, mockSellers, mockWishlist } from '@/data/mockData';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [feedTab, setFeedTab] = useState<'foryou' | 'following'>('foryou');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="h-full relative">
            {/* Top Navigation */}
            <div className="absolute top-4 left-0 right-0 z-30 flex justify-center safe-area-top">
              <TopTabs activeTab={feedTab} onTabChange={setFeedTab} />
            </div>
            {/* Live Feed */}
            <LiveFeed streams={mockLiveStreams} />
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
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      
      <Toaster />
    </div>
  );
};

export default Index;
