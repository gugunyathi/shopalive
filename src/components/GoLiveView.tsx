'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Video, 
  Camera, 
  Mic, 
  MicOff, 
  VideoOff, 
  Share2, 
  Users, 
  ShoppingBag,
  Plus,
  Sparkles,
  Radio,
  Upload,
  Link,
  Globe,
  ChevronRight,
  Trash2,
  Clock,
  Zap,
  Store,
  Tag,
  Image as ImageIcon,
  Wallet,
  DollarSign,
  TrendingUp
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsSignedIn } from '@coinbase/cdp-hooks';
import { AuthButton } from '@coinbase/cdp-react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
}

interface ExternalLink {
  id: string;
  name: string;
  url: string;
  type: 'shop' | 'product' | 'website';
}

export const GoLiveView = () => {
  const isSignedIn = useIsSignedIn();
  const [step, setStep] = useState<'setup' | 'products' | 'preview' | 'live'>('setup');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [externalLinks, setExternalLinks] = useState<ExternalLink[]>([]);
  
  // New product form state
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: ''
  });
  
  // New link form state
  const [newLink, setNewLink] = useState({
    name: '',
    url: '',
    type: 'shop' as 'shop' | 'product' | 'website'
  });

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price) {
      setProducts([...products, {
        id: Date.now().toString(),
        name: newProduct.name,
        price: parseFloat(newProduct.price),
        image: newProduct.image || '/placeholder.jpg',
        description: newProduct.description
      }]);
      setNewProduct({ name: '', price: '', description: '', image: '' });
    }
  };

  const handleAddLink = () => {
    if (newLink.name && newLink.url) {
      setExternalLinks([...externalLinks, {
        id: Date.now().toString(),
        ...newLink
      }]);
      setNewLink({ name: '', url: '', type: 'shop' });
    }
  };

  const handleGoLive = () => {
    if (!title.trim()) return;
    setStep('live');
  };

  const handleEndStream = () => {
    setStep('setup');
  };

  const categories = [
    'Fashion & Apparel',
    'Electronics',
    'Beauty & Skincare',
    'Home & Living',
    'Food & Beverages',
    'Sports & Outdoors',
    'Art & Collectibles',
    'Other'
  ];

  // Show sign-in UI if user is not authenticated
  if (!isSignedIn) {
    return (
      <div className="h-full overflow-y-auto bg-background pb-20">
        <div className="max-w-lg mx-auto p-4">
          {/* Header */}
          <div className="text-center space-y-3 pt-8">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto shadow-lg shadow-primary/25">
              <Video className="w-12 h-12 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Go Live</h1>
              <p className="text-muted-foreground text-sm">Sign in to start your livestream</p>
            </div>
          </div>

          {/* Sign In Card */}
          <Card className="mt-8 border-border/50">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl">Start Selling Live</CardTitle>
              <CardDescription>
                Connect your wallet to go live and showcase your products to thousands of viewers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col gap-3">
                <AuthButton />
              </div>
              
              <div className="pt-4 border-t border-border">
                <h4 className="text-sm font-medium mb-4 text-center">Why go live on ShopAlive?</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-secondary/50 text-center">
                    <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xs font-medium">Reach Thousands</p>
                    <p className="text-xs text-muted-foreground">Connect with buyers live</p>
                  </div>
                  <div className="p-3 rounded-xl bg-secondary/50 text-center">
                    <DollarSign className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xs font-medium">Instant Sales</p>
                    <p className="text-xs text-muted-foreground">Sell directly on stream</p>
                  </div>
                  <div className="p-3 rounded-xl bg-secondary/50 text-center">
                    <Wallet className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xs font-medium">Crypto Payments</p>
                    <p className="text-xs text-muted-foreground">Accept crypto & fiat</p>
                  </div>
                  <div className="p-3 rounded-xl bg-secondary/50 text-center">
                    <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xs font-medium">Grow Your Brand</p>
                    <p className="text-xs text-muted-foreground">Build loyal followers</p>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium">What you can do:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Stream live video to your audience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Showcase and sell products in real-time</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Store className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Link your Shopify, Etsy, or Amazon store</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Engage with viewers through live chat</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Live streaming view
  if (step === 'live') {
    return (
      <div className="h-full flex flex-col bg-black relative">
        <div className="flex-1 relative">
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

          {/* Live Badge & Stats */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <Badge className="bg-red-500 text-white animate-pulse">
              <Radio className="w-3 h-3 mr-1" />
              LIVE
            </Badge>
            <Badge variant="secondary" className="bg-black/50 backdrop-blur">
              <Users className="w-3 h-3 mr-1" />
              0 viewers
            </Badge>
            <Badge variant="secondary" className="bg-black/50 backdrop-blur">
              <Clock className="w-3 h-3 mr-1" />
              00:00
            </Badge>
          </div>

          {/* Stream Title */}
          <div className="absolute top-4 right-4 max-w-[200px]">
            <p className="text-white text-sm font-medium truncate bg-black/50 backdrop-blur px-3 py-1 rounded-full">
              {title}
            </p>
          </div>

          {/* Products Carousel */}
          {products.length > 0 && (
            <div className="absolute bottom-24 left-0 right-0 px-4">
              <ScrollArea className="w-full">
                <div className="flex gap-3 pb-2">
                  {products.map((product) => (
                    <div 
                      key={product.id}
                      className="flex-shrink-0 bg-black/80 backdrop-blur-md rounded-xl p-3 flex items-center gap-3 border border-white/10"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <ShoppingBag className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{product.name}</p>
                        <p className="text-primary font-bold">${product.price}</p>
                      </div>
                      <Button size="sm" className="ml-2 bg-primary hover:bg-primary/90">
                        Buy
                      </Button>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent pt-20 pb-8 px-4">
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "w-14 h-14 rounded-full transition-all",
                isMuted ? "bg-red-500/20 text-red-400 border-2 border-red-500/50" : "bg-white/10 text-white hover:bg-white/20"
              )}
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "w-14 h-14 rounded-full transition-all",
                isCameraOff ? "bg-red-500/20 text-red-400 border-2 border-red-500/50" : "bg-white/10 text-white hover:bg-white/20"
              )}
              onClick={() => setIsCameraOff(!isCameraOff)}
            >
              {isCameraOff ? <VideoOff className="w-6 h-6" /> : <Video className="w-6 h-6" />}
            </Button>

            <Button
              variant="destructive"
              size="lg"
              className="px-10 h-14 rounded-full font-semibold"
              onClick={handleEndStream}
            >
              End Stream
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="w-14 h-14 rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <ShoppingBag className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="w-14 h-14 rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <Share2 className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto bg-background pb-20">
      <div className="max-w-lg mx-auto p-4 space-y-6">
        {/* Header */}
        <div className="text-center space-y-3 pt-4">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto shadow-lg shadow-primary/25">
            <Video className="w-10 h-10 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Go Live</h1>
            <p className="text-muted-foreground text-sm">Set up your livestream and start selling</p>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2">
          {['Setup', 'Products', 'Preview'].map((stepName, index) => (
            <div key={stepName} className="flex items-center">
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all",
                step === stepName.toLowerCase() 
                  ? "bg-primary text-white" 
                  : index < ['setup', 'products', 'preview'].indexOf(step)
                    ? "bg-primary/20 text-primary"
                    : "bg-muted text-muted-foreground"
              )}>
                {index + 1}
              </div>
              {index < 2 && (
                <div className={cn(
                  "w-8 h-0.5 mx-1",
                  index < ['setup', 'products', 'preview'].indexOf(step)
                    ? "bg-primary"
                    : "bg-muted"
                )} />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Basic Setup */}
        {step === 'setup' && (
          <div className="space-y-5">
            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Stream Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Title */}
                <div className="space-y-2">
                  <Label htmlFor="title">Stream Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Summer Fashion Sale - Up to 50% Off!"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="h-12"
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Tell viewers what products you'll be showcasing..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                    className="resize-none"
                  />
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label>Category</Label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <Badge
                        key={cat}
                        variant={category === cat ? "default" : "outline"}
                        className={cn(
                          "cursor-pointer transition-all",
                          category === cat 
                            ? "bg-primary hover:bg-primary/90" 
                            : "hover:bg-primary/10 hover:border-primary"
                        )}
                        onClick={() => setCategory(cat)}
                      >
                        {cat}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button
              onClick={() => setStep('products')}
              disabled={!title.trim()}
              size="lg"
              className="w-full h-12"
            >
              Continue to Products
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        )}

        {/* Step 2: Products */}
        {step === 'products' && (
          <div className="space-y-5">
            <Tabs defaultValue="add" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="add">Add Product</TabsTrigger>
                <TabsTrigger value="link">Link Store</TabsTrigger>
                <TabsTrigger value="import">Import</TabsTrigger>
              </TabsList>
              
              {/* Add Product Tab */}
              <TabsContent value="add" className="space-y-4 mt-4">
                <Card className="border-dashed border-2">
                  <CardContent className="pt-6 space-y-4">
                    {/* Product Image Upload */}
                    <div 
                      className="border-2 border-dashed border-border rounded-xl p-6 text-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all"
                    >
                      <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm font-medium">Upload Product Image</p>
                      <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label htmlFor="productName">Product Name *</Label>
                        <Input
                          id="productName"
                          placeholder="Product name"
                          value={newProduct.name}
                          onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="productPrice">Price ($) *</Label>
                        <Input
                          id="productPrice"
                          type="number"
                          placeholder="0.00"
                          value={newProduct.price}
                          onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="productDesc">Description</Label>
                      <Textarea
                        id="productDesc"
                        placeholder="Brief product description..."
                        value={newProduct.description}
                        onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                        rows={2}
                      />
                    </div>

                    <Button 
                      onClick={handleAddProduct}
                      disabled={!newProduct.name || !newProduct.price}
                      className="w-full"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Product
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Link Store Tab */}
              <TabsContent value="link" className="space-y-4 mt-4">
                <Card className="border-dashed border-2">
                  <CardContent className="pt-6 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="storeName">Store/Link Name *</Label>
                      <Input
                        id="storeName"
                        placeholder="e.g., My Shopify Store"
                        value={newLink.name}
                        onChange={(e) => setNewLink({...newLink, name: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="storeUrl">URL *</Label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="storeUrl"
                          placeholder="https://yourstore.com"
                          value={newLink.url}
                          onChange={(e) => setNewLink({...newLink, url: e.target.value})}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Link Type</Label>
                      <div className="flex gap-2">
                        {[
                          { value: 'shop', label: 'Shop', icon: Store },
                          { value: 'product', label: 'Product', icon: Tag },
                          { value: 'website', label: 'Website', icon: Globe }
                        ].map((type) => (
                          <Badge
                            key={type.value}
                            variant={newLink.type === type.value ? "default" : "outline"}
                            className={cn(
                              "cursor-pointer flex items-center gap-1 px-3 py-1.5",
                              newLink.type === type.value && "bg-primary"
                            )}
                            onClick={() => setNewLink({...newLink, type: type.value as 'shop' | 'product' | 'website'})}
                          >
                            <type.icon className="w-3 h-3" />
                            {type.label}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button 
                      onClick={handleAddLink}
                      disabled={!newLink.name || !newLink.url}
                      className="w-full"
                    >
                      <Link className="w-4 h-4 mr-2" />
                      Add Link
                    </Button>
                  </CardContent>
                </Card>

                {/* Popular Platforms */}
                <div className="space-y-2">
                  <Label className="text-muted-foreground text-xs">Quick Connect</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Shopify', 'Etsy', 'Amazon'].map((platform) => (
                      <Button
                        key={platform}
                        variant="outline"
                        size="sm"
                        className="h-auto py-3 flex flex-col gap-1"
                      >
                        <Store className="w-5 h-5" />
                        <span className="text-xs">{platform}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Import Tab */}
              <TabsContent value="import" className="space-y-4 mt-4">
                <Card className="border-dashed border-2">
                  <CardContent className="pt-6 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Upload className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Import from CSV</p>
                      <p className="text-sm text-muted-foreground">Upload a CSV file with your products</p>
                    </div>
                    <Button variant="outline" className="w-full">
                      <Upload className="w-4 h-4 mr-2" />
                      Choose File
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Added Products List */}
            {products.length > 0 && (
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <ShoppingBag className="w-4 h-4" />
                      Products ({products.length})
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {products.map((product) => (
                    <div 
                      key={product.id}
                      className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <ImageIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{product.name}</p>
                        <p className="text-sm text-primary font-semibold">${product.price}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground hover:text-destructive"
                        onClick={() => setProducts(products.filter(p => p.id !== product.id))}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Added Links List */}
            {externalLinks.length > 0 && (
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Link className="w-4 h-4" />
                    External Links ({externalLinks.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {externalLinks.map((link) => (
                    <div 
                      key={link.id}
                      className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        {link.type === 'shop' && <Store className="w-5 h-5 text-blue-500" />}
                        {link.type === 'product' && <Tag className="w-5 h-5 text-blue-500" />}
                        {link.type === 'website' && <Globe className="w-5 h-5 text-blue-500" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{link.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{link.url}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground hover:text-destructive"
                        onClick={() => setExternalLinks(externalLinks.filter(l => l.id !== link.id))}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setStep('setup')}
                className="flex-1 h-12"
              >
                Back
              </Button>
              <Button
                onClick={() => setStep('preview')}
                className="flex-1 h-12"
              >
                Preview Stream
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Preview */}
        {step === 'preview' && (
          <div className="space-y-5">
            {/* Preview Card */}
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-black relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground text-sm">Camera Preview</p>
                  </div>
                </div>
                <Badge className="absolute top-3 left-3 bg-red-500">
                  <Radio className="w-3 h-3 mr-1" />
                  LIVE
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg">{title}</h3>
                {description && (
                  <p className="text-sm text-muted-foreground mt-1">{description}</p>
                )}
                {category && (
                  <Badge variant="secondary" className="mt-2">{category}</Badge>
                )}
              </CardContent>
            </Card>

            {/* Stream Summary */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Stream Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Products</span>
                  <span className="font-medium">{products.length} items</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">External Links</span>
                  <span className="font-medium">{externalLinks.length} links</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Category</span>
                  <span className="font-medium">{category || 'Not set'}</span>
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-4 space-y-2">
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
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setStep('products')}
                className="flex-1 h-12"
              >
                Back
              </Button>
              <Button
                onClick={handleGoLive}
                size="lg"
                className="flex-1 h-14 text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                <Radio className="w-5 h-5 mr-2" />
                Go Live Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
