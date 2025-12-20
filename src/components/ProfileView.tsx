import { Seller } from '@/types';
import { BadgeCheck, Settings, Grid3X3, Video, ShoppingBag, Users, UserPlus, Share2, Wallet, Copy, ExternalLink, User, LogIn, Loader2, Send, Download, Coins } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { useUser } from '@/lib/context/UserContext';
import { useEvmAddress, useIsSignedIn } from '@coinbase/cdp-hooks';
import { useToast } from '@/hooks/use-toast';
import { AuthButton, SendEvmTransactionButton } from '@coinbase/cdp-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface ProfileViewProps {
  seller?: Seller;
  isOwnProfile?: boolean;
}

interface UserProduct {
  _id: string;
  name: string;
  price: number;
  images: string[];
}

interface UserStream {
  _id: string;
  title: string;
  thumbnailUrl?: string;
  viewerCount: number;
  status: string;
}

interface UserVideo {
  _id: string;
  title: string;
  thumbnailUrl: string;
  viewCount: number;
  likeCount: number;
  duration: number;
  status: string;
  createdAt: string;
}

export const ProfileView = ({ seller, isOwnProfile = true }: ProfileViewProps) => {
  const [activeTab, setActiveTab] = useState<'videos' | 'products' | 'liked'>('videos');
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoadingFollow, setIsLoadingFollow] = useState(false);
  const [userProducts, setUserProducts] = useState<UserProduct[]>([]);
  const [userStreams, setUserStreams] = useState<UserStream[]>([]);
  const [userVideos, setUserVideos] = useState<UserVideo[]>([]);
  const [isLoadingContent, setIsLoadingContent] = useState(false);
  const [showSendDialog, setShowSendDialog] = useState(false);
  const [showReceiveDialog, setShowReceiveDialog] = useState(false);
  const [sendTo, setSendTo] = useState('');
  const [sendAmount, setSendAmount] = useState('');
  const [ethBalance] = useState('0.001');
  const { user: dbUser, fetchUser } = useUser();
  const { evmAddress: address } = useEvmAddress();
  const { isSignedIn } = useIsSignedIn();
  const { toast } = useToast();

  // Fetch user's products, streams, and videos
  useEffect(() => {
    const fetchUserContent = async () => {
      if (!address && !seller?.id) return;
      
      setIsLoadingContent(true);
      try {
        const walletAddress = isOwnProfile ? address : seller?.id;
        
        // Fetch products
        const productsRes = await fetch(`/api/products?sellerWallet=${walletAddress}`);
        if (productsRes.ok) {
          const { products } = await productsRes.json();
          setUserProducts(products || []);
        }

        // Fetch streams
        const streamsRes = await fetch(`/api/streams?sellerWallet=${walletAddress}`);
        if (streamsRes.ok) {
          const { streams } = await streamsRes.json();
          setUserStreams(streams || []);
        }

        // Fetch videos
        const videosRes = await fetch(`/api/videos?sellerWallet=${walletAddress}`);
        if (videosRes.ok) {
          const { videos } = await videosRes.json();
          setUserVideos(videos || []);
        }
      } catch (error) {
        console.error('Error fetching user content:', error);
      } finally {
        setIsLoadingContent(false);
      }
    };

    if (isSignedIn || seller) {
      fetchUserContent();
    }
  }, [address, seller, isOwnProfile, isSignedIn]);

  // Handle follow/unfollow
  const handleFollowToggle = async () => {
    if (!address || !seller?.id) return;
    
    setIsLoadingFollow(true);
    try {
      const response = await fetch('/api/follows', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          followerWallet: address,
          followingWallet: seller.id,
        }),
      });

      if (response.ok) {
        const { action } = await response.json();
        setIsFollowing(action === 'followed');
        toast({
          title: action === 'followed' ? 'Followed!' : 'Unfollowed',
          description: action === 'followed' 
            ? `You are now following ${seller.name}` 
            : `You unfollowed ${seller.name}`,
        });
      }
    } catch (error: any) {
      toast({
        title: 'Error',
        description: 'Failed to update follow status',
        variant: 'destructive',
      });
    } finally {
      setIsLoadingFollow(false);
    }
  };

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

  // Don't render profile if not signed in - parent should handle this
  if (isOwnProfile && !isSignedIn) {
    return null;
  }

  // Previous placeholder sign-in UI removed - now handled by SignInModal
  // if (isOwnProfile && !isSignedIn) {
  //   return (
  //     <div className="min-h-screen bg-background pb-20">
  //       {/* Sign In UI */}
  //     </div>
  //   );
  // }



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
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5 text-primary" />
                <span className="font-semibold text-sm">My Wallet</span>
              </div>
              <div className="text-right">
                <p className="font-bold">{ethBalance} ETH</p>
                <p className="text-xs text-muted-foreground">≈ $3.50 USD</p>
              </div>
            </div>
            
            {/* Address */}
            <div className="flex items-center gap-2 bg-background rounded-lg p-3 mb-3">
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
                  href={`https://sepolia.basescan.org/address/${address}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Send/Receive Buttons */}
            <div className="flex gap-2 mb-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1"
                onClick={() => setShowSendDialog(true)}
              >
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1"
                onClick={() => setShowReceiveDialog(true)}
              >
                <Download className="h-4 w-4 mr-2" />
                Receive
              </Button>
            </div>

            {/* Token Balances */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Coins className="h-4 w-4" />
                <span>Tokens</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-background">
                <div className="flex items-center gap-2">
                  <span>⟠</span>
                  <span className="text-sm">ETH</span>
                </div>
                <span className="text-sm font-medium">{ethBalance}</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-background">
                <div className="flex items-center gap-2">
                  <span>💵</span>
                  <span className="text-sm">USDC</span>
                </div>
                <span className="text-sm font-medium">0.00</span>
              </div>
            </div>
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
                onClick={handleFollowToggle}
                disabled={isLoadingFollow}
              >
                {isLoadingFollow ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : isFollowing ? (
                  'Following'
                ) : (
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
        {isLoadingContent ? (
          <div className="col-span-3 flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : activeTab === 'videos' ? (
          // Show both videos and streams in the videos tab
          [...userVideos, ...userStreams].length > 0 ? (
            <>
              {/* Shoppable Videos */}
              {userVideos.map((video) => (
                <div
                  key={`video-${video._id}`}
                  className="aspect-[3/4] bg-secondary relative overflow-hidden group cursor-pointer"
                >
                  <img
                    src={video.thumbnailUrl || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=400&fit=crop'}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs font-medium truncate">{video.title}</p>
                    <div className="flex items-center gap-2 text-white/70 text-xs">
                      <span>{video.viewCount} views</span>
                      <span>•</span>
                      <span>{video.likeCount} likes</span>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-1.5 py-0.5 rounded">
                    {Math.floor(video.duration / 60)}:{(video.duration % 60).toString().padStart(2, '0')}
                  </div>
                </div>
              ))}
              {/* Live Streams */}
              {userStreams.map((stream) => (
                <div
                  key={`stream-${stream._id}`}
                  className="aspect-[3/4] bg-secondary relative overflow-hidden group cursor-pointer"
                >
                  <img
                    src={stream.thumbnailUrl || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=400&fit=crop'}
                    alt={stream.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs font-medium truncate">{stream.title}</p>
                    <p className="text-white/70 text-xs">{stream.viewerCount} views</p>
                  </div>
                  {stream.status === 'live' && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
                      LIVE
                    </div>
                  )}
                </div>
              ))}
            </>
          ) : (
            <div className="col-span-3 text-center py-12 text-muted-foreground">
              <Video className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>No videos or streams yet</p>
            </div>
          )
        ) : activeTab === 'products' ? (
          userProducts.length > 0 ? (
            userProducts.map((product) => (
              <div
                key={product._id}
                className="aspect-[3/4] bg-secondary relative overflow-hidden group cursor-pointer"
              >
                <img
                  src={product.images?.[0] || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=400&fit=crop'}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-xs font-medium truncate">{product.name}</p>
                  <p className="text-primary text-xs font-bold">${product.price}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-12 text-muted-foreground">
              <ShoppingBag className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>No products yet</p>
            </div>
          )
        ) : (
          <div className="col-span-3 text-center py-12 text-muted-foreground">
            <Grid3X3 className="h-12 w-12 mx-auto mb-2 opacity-50" />
            <p>No liked content yet</p>
          </div>
        )}
      </div>

      {/* Send Dialog */}
      <Dialog open={showSendDialog} onOpenChange={setShowSendDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Send ETH</DialogTitle>
            <DialogDescription>
              Send ETH to another wallet address on Base Sepolia
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="recipient">Recipient Address</Label>
              <Input
                id="recipient"
                placeholder="0x..."
                value={sendTo}
                onChange={(e) => setSendTo(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Amount (ETH)</Label>
              <Input
                id="amount"
                type="number"
                placeholder="0.001"
                value={sendAmount}
                onChange={(e) => setSendAmount(e.target.value)}
              />
            </div>
            {address && sendTo && sendAmount && (
              <SendEvmTransactionButton
                account={address}
                network="base-sepolia"
                transaction={{
                  to: sendTo as `0x${string}`,
                  value: BigInt(Math.floor(parseFloat(sendAmount) * 1e18)),
                  chainId: 84532,
                  type: "eip1559",
                }}
                onSuccess={(hash) => {
                  toast({
                    title: 'Transaction Sent!',
                    description: `Hash: ${hash.slice(0, 10)}...`,
                  });
                  setShowSendDialog(false);
                  setSendTo('');
                  setSendAmount('');
                }}
                onError={(error) => {
                  toast({
                    title: 'Transaction Failed',
                    description: error.message,
                    variant: 'destructive',
                  });
                }}
                pendingLabel="Sending..."
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Receive Dialog */}
      <Dialog open={showReceiveDialog} onOpenChange={setShowReceiveDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Receive Funds</DialogTitle>
            <DialogDescription>
              Share your wallet address to receive ETH or tokens
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="p-4 bg-secondary/50 rounded-lg text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center">
                <div className="text-4xl">📱</div>
              </div>
              <p className="font-mono text-sm break-all mb-4">{address}</p>
              <Button onClick={() => address && copyToClipboard(address)} variant="outline" className="w-full">
                <Copy className="h-4 w-4 mr-2" />
                Copy Address
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Only send ETH and ERC-20 tokens on Base Sepolia network
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
