'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';
import { 
  Video, 
  Upload,
  Plus,
  Trash2,
  Tag,
  Image as ImageIcon,
  Loader2,
  X,
  Play,
  Film,
  Check,
  ShoppingBag,
  ArrowLeft,
  Link as LinkIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsSignedIn, useEvmAddress } from '@coinbase/cdp-hooks';
import { AuthButton } from '@coinbase/cdp-react';
import { useToast } from '@/hooks/use-toast';

interface Product {
  id: string;
  _id?: string;
  name: string;
  price: number;
  image: string;
  description?: string;
}

const categories = ['Fashion', 'Beauty', 'Tech', 'Home', 'Food', 'Sports', 'Art', 'Other'];

export const VideoUploadView = () => {
  const { isSignedIn } = useIsSignedIn();
  const { evmAddress } = useEvmAddress();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const thumbnailInputRef = useRef<HTMLInputElement>(null);
  
  const [step, setStep] = useState<'upload' | 'details' | 'products' | 'preview'>('upload');
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoPreviewUrl, setVideoPreviewUrl] = useState<string>('');
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [thumbnailPreviewUrl, setThumbnailPreviewUrl] = useState<string>('');
  const [videoDuration, setVideoDuration] = useState(0);
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');
  
  const [products, setProducts] = useState<Product[]>([]);
  const [sellerProducts, setSellerProducts] = useState<Product[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  // New product form
  const [showNewProductForm, setShowNewProductForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: ''
  });

  // Load seller's existing products
  useEffect(() => {
    const loadProducts = async () => {
      if (!evmAddress) return;
      setIsLoadingProducts(true);
      try {
        const response = await fetch(`/api/products?sellerWallet=${evmAddress}&limit=50`);
        if (response.ok) {
          const { products } = await response.json();
          setSellerProducts(products.map((p: any) => ({
            id: p._id,
            _id: p._id,
            name: p.name,
            price: p.price,
            image: p.images?.[0] || '/placeholder.jpg',
            description: p.description,
          })));
        }
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setIsLoadingProducts(false);
      }
    };
    loadProducts();
  }, [evmAddress]);

  // Handle video file selection
  const handleVideoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('video/')) {
      toast({
        title: 'Invalid file type',
        description: 'Please select a video file',
        variant: 'destructive',
      });
      return;
    }

    // Validate file size (max 500MB)
    if (file.size > 500 * 1024 * 1024) {
      toast({
        title: 'File too large',
        description: 'Video must be under 500MB',
        variant: 'destructive',
      });
      return;
    }

    setVideoFile(file);
    const url = URL.createObjectURL(file);
    setVideoPreviewUrl(url);

    // Get video duration
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.onloadedmetadata = () => {
      setVideoDuration(Math.floor(video.duration));
      URL.revokeObjectURL(video.src);
    };
    video.src = url;
  };

  // Handle thumbnail selection
  const handleThumbnailSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast({
        title: 'Invalid file type',
        description: 'Please select an image file',
        variant: 'destructive',
      });
      return;
    }

    setThumbnailFile(file);
    setThumbnailPreviewUrl(URL.createObjectURL(file));
  };

  // Add tag
  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim().toLowerCase())) {
      setTags([...tags, newTag.trim().toLowerCase()]);
      setNewTag('');
    }
  };

  // Remove tag
  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };

  // Toggle product selection
  const handleToggleProduct = (product: Product) => {
    if (products.find(p => p.id === product.id)) {
      setProducts(products.filter(p => p.id !== product.id));
    } else {
      setProducts([...products, product]);
    }
  };

  // Create new product
  const handleCreateProduct = async () => {
    if (!newProduct.name || !newProduct.price || !evmAddress) return;

    setIsLoadingProducts(true);
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sellerWallet: evmAddress,
          name: newProduct.name,
          description: newProduct.description || 'No description',
          price: parseFloat(newProduct.price),
          category: category || 'Other',
          images: newProduct.image ? [newProduct.image] : [],
        }),
      });

      if (!response.ok) throw new Error('Failed to create product');

      const { product } = await response.json();
      const newProd = {
        id: product._id,
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.images?.[0] || '/placeholder.jpg',
        description: product.description,
      };
      
      setSellerProducts([newProd, ...sellerProducts]);
      setProducts([...products, newProd]);
      setNewProduct({ name: '', price: '', description: '', image: '' });
      setShowNewProductForm(false);

      toast({
        title: 'Product Created',
        description: 'Product has been added and linked to your video',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to create product',
        variant: 'destructive',
      });
    } finally {
      setIsLoadingProducts(false);
    }
  };

  // Upload video
  const handleUpload = async () => {
    if (!videoFile || !thumbnailFile || !title || !evmAddress) {
      toast({
        title: 'Missing information',
        description: 'Please fill in all required fields',
        variant: 'destructive',
      });
      return;
    }

    setIsUploading(true);
    setUploadProgress(10);

    try {
      // For demo purposes, we'll use placeholder URLs
      // In production, you'd upload to a service like Cloudinary, S3, etc.
      const videoUrl = videoPreviewUrl; // Would be replaced with actual upload URL
      const thumbnailUrl = thumbnailPreviewUrl; // Would be replaced with actual upload URL
      
      setUploadProgress(50);

      // Create video in database
      const response = await fetch('/api/videos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          videoUrl,
          thumbnailUrl,
          sellerWallet: evmAddress,
          products: products.map(p => p.id),
          category: category || 'Other',
          tags,
          duration: videoDuration,
        }),
      });

      setUploadProgress(90);

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to upload video');
      }

      setUploadProgress(100);

      toast({
        title: 'Video Uploaded! 🎉',
        description: 'Your shoppable video is now live',
      });

      // Reset form
      setTimeout(() => {
        setStep('upload');
        setVideoFile(null);
        setVideoPreviewUrl('');
        setThumbnailFile(null);
        setThumbnailPreviewUrl('');
        setTitle('');
        setDescription('');
        setCategory('');
        setTags([]);
        setProducts([]);
        setUploadProgress(0);
      }, 1500);
    } catch (error: any) {
      toast({
        title: 'Upload Failed',
        description: error.message || 'Failed to upload video',
        variant: 'destructive',
      });
    } finally {
      setIsUploading(false);
    }
  };

  // Format duration
  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Not signed in
  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <Film className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Upload Shoppable Videos</h1>
          <p className="text-muted-foreground mb-6">
            Sign in to upload short-form videos and link your products
          </p>
          <AuthButton />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 glass-dark border-b border-border">
        <div className="flex items-center justify-between p-4">
          {step !== 'upload' ? (
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => {
                if (step === 'details') setStep('upload');
                else if (step === 'products') setStep('details');
                else if (step === 'preview') setStep('products');
              }}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          ) : (
            <div />
          )}
          <h1 className="text-lg font-semibold text-foreground">
            {step === 'upload' && 'Upload Video'}
            {step === 'details' && 'Video Details'}
            {step === 'products' && 'Link Products'}
            {step === 'preview' && 'Preview & Publish'}
          </h1>
          <div className="w-10" />
        </div>
        
        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 px-4 pb-4">
          {['upload', 'details', 'products', 'preview'].map((s, idx) => (
            <div key={s} className="flex items-center">
              <div 
                className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors',
                  step === s ? 'bg-primary text-primary-foreground' : 
                  ['upload', 'details', 'products', 'preview'].indexOf(step) > idx 
                    ? 'bg-primary/50 text-primary-foreground' 
                    : 'bg-secondary text-muted-foreground'
                )}
              >
                {['upload', 'details', 'products', 'preview'].indexOf(step) > idx ? (
                  <Check className="h-4 w-4" />
                ) : (
                  idx + 1
                )}
              </div>
              {idx < 3 && (
                <div className={cn(
                  'w-8 h-0.5',
                  ['upload', 'details', 'products', 'preview'].indexOf(step) > idx 
                    ? 'bg-primary' 
                    : 'bg-secondary'
                )} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="p-4">
        {/* Step 1: Upload */}
        {step === 'upload' && (
          <div className="space-y-6">
            {/* Video Upload Area */}
            <Card className="bg-secondary/50 border-dashed border-2">
              <CardContent className="p-8">
                {!videoFile ? (
                  <div 
                    className="flex flex-col items-center justify-center cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <Upload className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-foreground font-medium mb-2">Upload your video</p>
                    <p className="text-muted-foreground text-sm text-center">
                      MP4, MOV, or WebM • Max 500MB • Up to 3 minutes
                    </p>
                    <Button className="mt-4 gradient-primary">
                      Select Video
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="relative aspect-[9/16] max-h-[400px] mx-auto rounded-xl overflow-hidden bg-black">
                      <video 
                        src={videoPreviewUrl}
                        className="w-full h-full object-contain"
                        controls
                      />
                      <button
                        onClick={() => {
                          setVideoFile(null);
                          setVideoPreviewUrl('');
                        }}
                        className="absolute top-2 right-2 p-2 bg-background/80 rounded-full"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{videoFile.name}</span>
                      <span>{formatDuration(videoDuration)}</span>
                    </div>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="video/*"
                  className="hidden"
                  onChange={handleVideoSelect}
                />
              </CardContent>
            </Card>

            {/* Thumbnail Upload */}
            {videoFile && (
              <Card className="bg-secondary/50">
                <CardHeader>
                  <CardTitle className="text-lg">Cover Thumbnail</CardTitle>
                  <CardDescription>Add a cover image for your video</CardDescription>
                </CardHeader>
                <CardContent>
                  {!thumbnailFile ? (
                    <div 
                      className="flex items-center gap-4 cursor-pointer p-4 border-2 border-dashed rounded-lg"
                      onClick={() => thumbnailInputRef.current?.click()}
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <ImageIcon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-foreground font-medium">Add thumbnail</p>
                        <p className="text-muted-foreground text-sm">JPG, PNG • Recommended 9:16</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-32 rounded-lg overflow-hidden">
                        <img 
                          src={thumbnailPreviewUrl} 
                          alt="Thumbnail" 
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={() => {
                            setThumbnailFile(null);
                            setThumbnailPreviewUrl('');
                          }}
                          className="absolute top-1 right-1 p-1 bg-background/80 rounded-full"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                      <div>
                        <p className="text-foreground font-medium">{thumbnailFile.name}</p>
                        <Button 
                          variant="link" 
                          className="p-0 h-auto"
                          onClick={() => thumbnailInputRef.current?.click()}
                        >
                          Change
                        </Button>
                      </div>
                    </div>
                  )}
                  <input
                    ref={thumbnailInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleThumbnailSelect}
                  />
                </CardContent>
              </Card>
            )}

            {/* Next Button */}
            {videoFile && thumbnailFile && (
              <Button 
                className="w-full gradient-primary"
                onClick={() => setStep('details')}
              >
                Continue
              </Button>
            )}
          </div>
        )}

        {/* Step 2: Details */}
        {step === 'details' && (
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Give your video a catchy title"
                  className="bg-secondary"
                  maxLength={100}
                />
                <p className="text-xs text-muted-foreground mt-1">{title.length}/100</p>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell viewers about your video..."
                  className="bg-secondary min-h-[100px]"
                  maxLength={500}
                />
                <p className="text-xs text-muted-foreground mt-1">{description.length}/500</p>
              </div>

              <div>
                <Label>Category</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {categories.map((cat) => (
                    <Badge
                      key={cat}
                      variant={category === cat ? 'default' : 'secondary'}
                      className={cn(
                        'cursor-pointer transition-colors',
                        category === cat && 'bg-primary'
                      )}
                      onClick={() => setCategory(cat)}
                    >
                      {cat}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <Label>Tags</Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add tags..."
                    className="bg-secondary"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                  />
                  <Button variant="secondary" onClick={handleAddTag}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="gap-1">
                        #{tag}
                        <button onClick={() => handleRemoveTag(tag)}>
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <Button 
              className="w-full gradient-primary"
              onClick={() => setStep('products')}
              disabled={!title}
            >
              Continue
            </Button>
          </div>
        )}

        {/* Step 3: Products */}
        {step === 'products' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-foreground">Link Products</h2>
                <p className="text-sm text-muted-foreground">
                  {products.length} products selected
                </p>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowNewProductForm(true)}
              >
                <Plus className="h-4 w-4 mr-1" />
                New Product
              </Button>
            </div>

            {/* New Product Form */}
            {showNewProductForm && (
              <Card className="bg-secondary/50">
                <CardHeader>
                  <CardTitle className="text-lg">Create New Product</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Product Name *</Label>
                    <Input
                      value={newProduct.name}
                      onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                      placeholder="Product name"
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Label>Price (USD) *</Label>
                    <Input
                      type="number"
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                      placeholder="0.00"
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Label>Image URL</Label>
                    <Input
                      value={newProduct.image}
                      onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                      placeholder="https://..."
                      className="bg-background"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setShowNewProductForm(false)}
                    >
                      Cancel
                    </Button>
                    <Button 
                      className="flex-1 gradient-primary"
                      onClick={handleCreateProduct}
                      disabled={!newProduct.name || !newProduct.price || isLoadingProducts}
                    >
                      {isLoadingProducts ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Create'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Existing Products */}
            <ScrollArea className="h-[400px]">
              {isLoadingProducts && sellerProducts.length === 0 ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                </div>
              ) : sellerProducts.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">No products yet</p>
                  <p className="text-sm text-muted-foreground">Create your first product above</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {sellerProducts.map((product) => {
                    const isSelected = products.find(p => p.id === product.id);
                    return (
                      <div
                        key={product.id}
                        onClick={() => handleToggleProduct(product)}
                        className={cn(
                          'flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all',
                          isSelected ? 'bg-primary/20 ring-2 ring-primary' : 'bg-secondary hover:bg-secondary/80'
                        )}
                      >
                        <div className="relative">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          {isSelected && (
                            <div className="absolute inset-0 bg-primary/50 rounded-lg flex items-center justify-center">
                              <Check className="h-6 w-6 text-white" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground truncate">{product.name}</p>
                          <p className="text-primary font-bold">${product.price}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </ScrollArea>

            <Button 
              className="w-full gradient-primary"
              onClick={() => setStep('preview')}
            >
              Continue ({products.length} products)
            </Button>
          </div>
        )}

        {/* Step 4: Preview & Publish */}
        {step === 'preview' && (
          <div className="space-y-6">
            {/* Video Preview */}
            <div className="relative aspect-[9/16] max-h-[400px] mx-auto rounded-xl overflow-hidden bg-black">
              <video 
                src={videoPreviewUrl}
                poster={thumbnailPreviewUrl}
                className="w-full h-full object-contain"
                controls
              />
            </div>

            {/* Details Summary */}
            <Card className="bg-secondary/50">
              <CardContent className="p-4 space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Title</p>
                  <p className="font-medium text-foreground">{title}</p>
                </div>
                {description && (
                  <div>
                    <p className="text-sm text-muted-foreground">Description</p>
                    <p className="text-foreground text-sm">{description}</p>
                  </div>
                )}
                <div className="flex items-center gap-4">
                  {category && (
                    <div>
                      <p className="text-sm text-muted-foreground">Category</p>
                      <Badge>{category}</Badge>
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="text-foreground">{formatDuration(videoDuration)}</p>
                  </div>
                </div>
                {tags.length > 0 && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Tags</p>
                    <div className="flex flex-wrap gap-1">
                      {tags.map((tag) => (
                        <span key={tag} className="text-primary text-sm">#{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Linked Products */}
            {products.length > 0 && (
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Linked Products ({products.length})
                </p>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {products.map((product) => (
                    <div key={product.id} className="flex-shrink-0 w-24">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-24 h-24 rounded-lg object-cover"
                      />
                      <p className="text-xs text-foreground truncate mt-1">{product.name}</p>
                      <p className="text-xs text-primary font-bold">${product.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Upload Progress */}
            {isUploading && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Uploading...</span>
                  <span className="text-foreground font-medium">{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="h-2" />
              </div>
            )}

            {/* Publish Button */}
            <Button 
              className="w-full gradient-primary"
              onClick={handleUpload}
              disabled={isUploading}
            >
              {isUploading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Uploading...
                </>
              ) : (
                <>
                  <Video className="h-4 w-4 mr-2" />
                  Publish Video
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
