'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Video, 
  Camera, 
  Mic, 
  MicOff, 
  VideoOff, 
  Settings, 
  Share2, 
  Users, 
  ShoppingBag,
  Plus,
  X,
  Sparkles,
  Radio
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export const GoLiveView = () => {
  const [isLive, setIsLive] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [showAddProduct, setShowAddProduct] = useState(false);

  const handleGoLive = () => {
    if (!title.trim()) {
      return;
    }
    setIsLive(true);
  };

  const handleEndStream = () => {
    setIsLive(false);
  };

  if (isLive) {
    return (
      <div className="h-full flex flex-col bg-black relative">
        {/* Live Preview */}
        <div className="flex-1 relative">
          {/* Camera Preview Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
            {isCameraOff ? (
              <div className="text-center">
                <VideoOff className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Camera is off</p>
              </div>
            ) : (
              <div className="text-center">
                <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-4 animate-pulse" />
                <p className="text-muted-foreground">Camera preview</p>
              </div>
            )}
          </div>

          {/* Live Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <Badge className="bg-red-500 text-white animate-pulse">
              <Radio className="w-3 h-3 mr-1" />
              LIVE
            </Badge>
            <Badge variant="secondary" className="bg-black/50 backdrop-blur">
              <Users className="w-3 h-3 mr-1" />
              0 viewers
            </Badge>
          </div>

          {/* Stream Title */}
          <div className="absolute top-4 right-4 max-w-[200px]">
            <p className="text-white text-sm font-medium truncate bg-black/50 backdrop-blur px-3 py-1 rounded-full">
              {title}
            </p>
          </div>

          {/* Products Showcase */}
          {products.length > 0 && (
            <div className="absolute bottom-20 left-4 right-4">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {products.map((product) => (
                  <div 
                    key={product.id}
                    className="flex-shrink-0 bg-black/70 backdrop-blur rounded-lg p-2 flex items-center gap-2"
                  >
                    <div className="w-10 h-10 rounded bg-gray-700" />
                    <div>
                      <p className="text-white text-xs font-medium">{product.name}</p>
                      <p className="text-primary text-xs">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent pt-16 pb-6 px-4">
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "w-12 h-12 rounded-full",
                isMuted ? "bg-red-500/20 text-red-500" : "bg-white/10 text-white"
              )}
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "w-12 h-12 rounded-full",
                isCameraOff ? "bg-red-500/20 text-red-500" : "bg-white/10 text-white"
              )}
              onClick={() => setIsCameraOff(!isCameraOff)}
            >
              {isCameraOff ? <VideoOff className="w-6 h-6" /> : <Video className="w-6 h-6" />}
            </Button>

            <Button
              variant="destructive"
              size="lg"
              className="px-8 rounded-full"
              onClick={handleEndStream}
            >
              End Stream
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full bg-white/10 text-white"
              onClick={() => setShowAddProduct(true)}
            >
              <ShoppingBag className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full bg-white/10 text-white"
            >
              <Share2 className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto bg-background">
      <div className="max-w-lg mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto glow">
            <Video className="w-10 h-10 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Go Live</h1>
            <p className="text-muted-foreground">Start streaming and showcase your products</p>
          </div>
        </div>

        {/* Stream Setup Form */}
        <div className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Stream Title *</label>
            <Input
              placeholder="What are you selling today?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="h-12"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <Textarea
              placeholder="Tell viewers what to expect..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>

          {/* Products */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Products to Showcase</label>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowAddProduct(true)}
              >
                <Plus className="w-4 h-4 mr-1" />
                Add Product
              </Button>
            </div>
            
            {products.length === 0 ? (
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                <ShoppingBag className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">No products added yet</p>
                <p className="text-xs text-muted-foreground">Add products to sell during your stream</p>
              </div>
            ) : (
              <div className="space-y-2">
                {products.map((product) => (
                  <div 
                    key={product.id}
                    className="flex items-center gap-3 p-3 bg-secondary rounded-lg"
                  >
                    <div className="w-12 h-12 rounded bg-muted" />
                    <div className="flex-1">
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-primary">${product.price}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setProducts(products.filter(p => p.id !== product.id))}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Tips */}
          <div className="bg-primary/10 rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2 text-primary">
              <Sparkles className="w-4 h-4" />
              <span className="font-medium text-sm">Tips for a great stream</span>
            </div>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Good lighting makes a big difference</li>
              <li>• Engage with your viewers in chat</li>
              <li>• Show products from multiple angles</li>
              <li>• Keep energy high and be authentic</li>
            </ul>
          </div>

          {/* Go Live Button */}
          <Button
            onClick={handleGoLive}
            disabled={!title.trim()}
            size="lg"
            className="w-full h-14 text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90"
          >
            <Radio className="w-5 h-5 mr-2" />
            Go Live Now
          </Button>
        </div>
      </div>
    </div>
  );
};
