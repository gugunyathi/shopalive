'use client';

import { AuthButton } from "@coinbase/cdp-react";
import { useIsSignedIn } from "@coinbase/cdp-hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Video, Wallet, ShoppingBag, Users, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  const { isSignedIn } = useIsSignedIn();
  const router = useRouter();

  // Redirect to home if already signed in
  useEffect(() => {
    if (isSignedIn) {
      router.push('/');
    }
  }, [isSignedIn, router]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-border">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => router.back()}
          className="mr-2"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold">Sign In</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        {/* Logo/Icon */}
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg shadow-primary/25">
          <Video className="w-12 h-12 text-white" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-2">Welcome to ShopAlive</h1>
        <p className="text-muted-foreground text-center mb-8 max-w-sm">
          Sign in to start streaming, sell products, and connect with your audience
        </p>

        {/* Auth Button */}
        <div className="w-full max-w-sm mb-8">
          <AuthButton />
        </div>

        {/* Features */}
        <div className="w-full max-w-sm space-y-4">
          <h3 className="text-sm font-medium text-center text-muted-foreground">
            Why join ShopAlive?
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-secondary/50 text-center">
              <Wallet className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-xs font-medium">Crypto Wallet</p>
              <p className="text-xs text-muted-foreground">Auto-created for you</p>
            </div>
            <div className="p-4 rounded-xl bg-secondary/50 text-center">
              <Video className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-xs font-medium">Go Live</p>
              <p className="text-xs text-muted-foreground">Stream & sell</p>
            </div>
            <div className="p-4 rounded-xl bg-secondary/50 text-center">
              <ShoppingBag className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-xs font-medium">Shop Live</p>
              <p className="text-xs text-muted-foreground">Buy from streams</p>
            </div>
            <div className="p-4 rounded-xl bg-secondary/50 text-center">
              <Users className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-xs font-medium">Community</p>
              <p className="text-xs text-muted-foreground">Follow sellers</p>
            </div>
          </div>
        </div>

        {/* Terms */}
        <p className="text-xs text-muted-foreground text-center mt-8 max-w-sm">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}
