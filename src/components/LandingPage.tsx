'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Video, Zap, Users, TrendingUp, Sparkles, Play, ArrowRight } from "lucide-react";
import { AuthButton, useAuthModal } from "@coinbase/cdp-react";
import { useIsSignedIn, useEvmAddress } from "@coinbase/cdp-hooks";
import { useUser } from "@/lib/context/UserContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface LandingPageProps {
  onGetStarted: () => void;
}

export const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const isSignedIn = useIsSignedIn();
  const { evmAddress } = useEvmAddress();
  const { createOrUpdateUser, fetchUser } = useUser();
  const [isProcessing, setIsProcessing] = useState(false);

  // When user signs in, create/fetch user and proceed to app
  useEffect(() => {
    const handleSignIn = async () => {
      if (isSignedIn && evmAddress && !isProcessing) {
        setIsProcessing(true);
        try {
          // Check if user exists, if not create them
          let user = await fetchUser(evmAddress);
          if (!user) {
            user = await createOrUpdateUser({
              walletAddress: evmAddress,
              username: `user_${evmAddress.slice(0, 8)}`,
              authProvider: 'wallet',
              authProviderId: evmAddress,
            });
          }
          setShowAuthModal(false);
          onGetStarted();
        } catch (error) {
          console.error('Error during sign-in:', error);
        } finally {
          setIsProcessing(false);
        }
      }
    };

    handleSignIn();
  }, [isSignedIn, evmAddress]);

  const handleLaunchApp = () => {
    if (isSignedIn) {
      onGetStarted();
    } else {
      setShowAuthModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <div className="relative">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />
        
        {/* Navigation */}
        <nav className="relative z-10 border-b border-border/40 backdrop-blur-xl bg-background/50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <span className="font-display text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ShopAlive
              </span>
            </div>
            <Button onClick={handleLaunchApp} size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Launch App
            </Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 pt-20 pb-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-primary/10 text-primary border-primary/30 px-4 py-2 animate-pulse-ring">
              <Sparkles className="w-4 h-4 mr-2" />
              The Future of Social Shopping
            </Badge>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
              Shop Live,{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                Shop Easy
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Discover products through live streams, connect with sellers in real-time, and checkout instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={handleLaunchApp}
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 h-14 group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Start Shopping Live
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary/30 hover:border-primary text-lg px-8 h-14"
              >
                Watch Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
              {[
                { label: "Live Streams", value: "10K+" },
                { label: "Active Users", value: "50K+" },
                { label: "Products", value: "100K+" }
              ].map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <div className="font-display text-3xl md:text-4xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <Dialog open={showAuthModal} onOpenChange={setShowAuthModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">Welcome to ShopAlive</DialogTitle>
            <DialogDescription className="text-center">
              Sign in to start shopping live and discover amazing products
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <AuthButton />
            {isProcessing && (
              <p className="text-center text-sm text-muted-foreground">
                Setting up your account...
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Features Section */}
      <div className="relative py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Why Choose ShopAlive?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience shopping like never before with our innovative live streaming platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Video,
                title: "Live Shopping",
                description: "Watch products in action through live streams. See how they work, ask questions, and make informed decisions.",
                gradient: "from-primary to-orange-500"
              },
              {
                icon: Zap,
                title: "Instant Checkout",
                description: "One-tap checkout with secure payment. No hassle, no waiting. Get what you want instantly.",
                gradient: "from-accent to-pink-500"
              },
              {
                icon: Users,
                title: "Social Commerce",
                description: "Connect with sellers and other shoppers. Share your finds, get recommendations, build community.",
                gradient: "from-purple-500 to-accent"
              }
            ].map((feature) => (
              <div
                key={feature.title}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,107,53,0.2)] overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start shopping live in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Browse Live Streams",
                description: "Explore live shopping streams from your favorite sellers and brands"
              },
              {
                step: "02",
                title: "Interact & Shop",
                description: "Chat with sellers, ask questions, and add products to your cart in real-time"
              },
              {
                step: "03",
                title: "Checkout Instantly",
                description: "Complete your purchase with one tap using secure, instant checkout"
              }
            ].map((step, index) => (
              <div key={step.step} className="relative text-center">
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mb-6 font-display text-3xl font-bold text-white">
                  {step.step}
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-3xl bg-card/50 border border-primary/30 backdrop-blur-xl">
            <TrendingUp className="w-16 h-16 mx-auto text-primary animate-float" />
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Ready to Start Shopping?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of shoppers discovering amazing products through live streams
            </p>
            <Button 
              onClick={handleLaunchApp}
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-12 h-16 text-white group"
            >
              <Play className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
              Launch ShopAlive
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative py-12 border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold">ShopAlive</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 ShopAlive. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
