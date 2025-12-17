import { Seller } from '@/types';
import { BadgeCheck, Settings, Grid3X3, Video, ShoppingBag, Users, UserPlus, Share2, Wallet, Copy, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useUser } from '@/lib/context/UserContext';
import { useEvmAddress } from '@coinbase/cdp-hooks';
import { useToast } from '@/hooks/use-toast';

interface ProfileViewProps {
  seller?: Seller;
  isOwnProfile?: boolean;
}

export const ProfileView = ({ seller, isOwnProfile = true }: ProfileViewProps) => {
  const [activeTab, setActiveTab] = useState<'videos' | 'products' | 'liked'>('videos');
  const [isFollowing, setIsFollowing] = useState(false);
  const { user: dbUser } = useUser();
  const address = useEvmAddress();
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Wallet address copied to clipboard",
    });
  };

  // Use database user data if available for own profile
  const user = isOwnProfile && dbUser ? {
    id: dbUser._id,
    name: dbUser.username,
    username: dbUser.username,
    avatar: dbUser.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop',
    followers: dbUser.followers,
    isVerified: dbUser.isVerified,
  } : seller || {
    id: 'me',
    name: 'Your Name',
    username: 'yourprofile',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop',
    followers: 1234,
    isVerified: false,
  };

  const stats = [
    { label: 'Following', value: '156' },
    { label: 'Followers', value: user.followers.toLocaleString() },
    { label: 'Likes', value: '12.5K' },
  ];

  const tabs = [
    { id: 'videos', icon: Video, label: 'Videos' },
    { id: 'products', icon: ShoppingBag, label: 'Products' },
    { id: 'liked', icon: Grid3X3, label: 'Liked' },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h1 className="text-xl font-bold font-display text-foreground">@{user.username}</h1>
        {isOwnProfile && (
          <Button variant="ghost" size="icon">
            <Settings className="h-6 w-6" />
          </Button>
        )}
      </div>

      {/* Profile Info */}
      <div className="flex flex-col items-center p-6">
        <div className="relative">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-24 h-24 rounded-full object-cover ring-4 ring-primary/30"
          />
          {user.isVerified && (
            <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
              <BadgeCheck className="h-5 w-5 text-primary-foreground" />
            </div>
          )}
        </div>
        
        <h2 className="text-xl font-bold text-foreground mt-4 flex items-center gap-1">
          {user.name}
          {user.isVerified && <BadgeCheck className="h-5 w-5 text-primary" />}
        </h2>
        
        {/* Stats */}
        <div className="flex items-center gap-8 mt-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Wallet Info - Only for own profile */}
        {isOwnProfile && address && (
          <div className="w-full max-w-md mt-6 p-4 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-2 mb-3">
              <Wallet className="h-5 w-5 text-primary" />
              <span className="font-semibold text-sm">Wallet Address</span>
            </div>
            <div className="flex items-center gap-2 bg-background rounded-lg p-3">
              <code className="text-xs text-muted-foreground flex-1 truncate">
                {address}
              </code>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 flex-shrink-0"
                onClick={() => copyToClipboard(address)}
              >
                <Copy className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 flex-shrink-0"
                asChild
              >
                <a 
                  href={`https://basescan.org/address/${address}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
            {dbUser?.walletId && (
              <p className="text-xs text-muted-foreground mt-2">
                Wallet ID: {dbUser.walletId.slice(0, 20)}...
              </p>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-3 mt-6 w-full max-w-xs">
          {isOwnProfile ? (
            <>
              <Button variant="secondary" className="flex-1">
                Edit Profile
              </Button>
              <Button variant="secondary" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </>
          ) : (
            <>
              <Button
                className={cn('flex-1', !isFollowing && 'gradient-primary border-0')}
                variant={isFollowing ? 'secondary' : 'default'}
                onClick={() => setIsFollowing(!isFollowing)}
              >
                {isFollowing ? 'Following' : (
                  <>
                    <UserPlus className="h-4 w-4 mr-2" />
                    Follow
                  </>
                )}
              </Button>
              <Button variant="secondary" className="flex-1">
                Message
              </Button>
            </>
          )}
        </div>

        {/* Bio */}
        <p className="text-sm text-muted-foreground text-center mt-4 max-w-xs">
          Live shopping enthusiast 🛍️ | Fashion & Tech | Drop in to see what's new!
        </p>
      </div>

      {/* Content Tabs */}
      <div className="border-t border-border">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={cn(
                'flex-1 flex items-center justify-center gap-2 py-3 border-b-2 transition-colors',
                activeTab === tab.id
                  ? 'border-foreground text-foreground'
                  : 'border-transparent text-muted-foreground'
              )}
            >
              <tab.icon className="h-5 w-5" />
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-3 gap-0.5 p-0.5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <div
            key={i}
            className="aspect-[3/4] bg-secondary relative overflow-hidden group cursor-pointer"
          >
            <img
              src={`https://images.unsplash.com/photo-${1550000000000 + i * 10000}?w=300&h=400&fit=crop`}
              alt={`Content ${i}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=400&fit=crop';
              }}
            />
            <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-foreground font-semibold">View</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
