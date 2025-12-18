'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { sdk } from '@farcaster/miniapp-sdk';
import { useEffect, useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CDPReactProvider, type Config, type Theme } from "@coinbase/cdp-react";
import { UserProvider } from "@/lib/context/UserContext";

const cdpConfig: Config = {
  projectId: process.env.NEXT_PUBLIC_CDP_PROJECT_ID || "c782e910-b8f4-48a4-b8c2-07377f9026d2",
  ethereum: {
    createOnLogin: "smart",
  },
  appName: "ShopAlive",
  appLogoUrl: "",
  authMethods: ["oauth:google","oauth:apple","oauth:x","sms","email"],
  showCoinbaseFooter: true,
};

const cdpTheme: Partial<Theme> = {
  "colors-bg-default": "#0a0b0d",
  "colors-bg-alternate": "#22252d",
  "colors-bg-primary": "#FF6B35",
  "colors-bg-secondary": "#22252d",
  "colors-fg-default": "#ffffff",
  "colors-fg-muted": "#8a919e",
  "colors-fg-primary": "#FF6B35",
  "colors-fg-onPrimary": "#0a0b0d",
  "colors-fg-onSecondary": "#ffffff",
  "colors-fg-positive": "#27ad75",
  "colors-fg-negative": "#f0616d",
  "colors-fg-warning": "#ed702f",
  "colors-line-default": "#252629",
  "colors-line-heavy": "#5a5d6a",
  "borderRadius-banner": "var(--cdp-web-borderRadius-xl)",
  "borderRadius-cta": "var(--cdp-web-borderRadius-full)",
  "borderRadius-link": "var(--cdp-web-borderRadius-full)",
  "borderRadius-input": "var(--cdp-web-borderRadius-lg)",
  "borderRadius-select-trigger": "var(--cdp-web-borderRadius-lg)",
  "borderRadius-select-list": "var(--cdp-web-borderRadius-lg)",
  "borderRadius-modal": "var(--cdp-web-borderRadius-xl)"
};

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    sdk.actions.ready();
  }, []);

  return (
    <CDPReactProvider config={cdpConfig} theme={cdpTheme}>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </UserProvider>
      </QueryClientProvider>
    </CDPReactProvider>
  );
}
