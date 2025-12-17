import { NextResponse } from 'next/server';

function withValidProperties(properties: Record<string, undefined | string | string[]>) {
  return Object.fromEntries(
    Object.entries(properties).filter(([_, value]) => (Array.isArray(value) ? value.length > 0 : !!value))
  );
}

export async function GET() {
  const URL = process.env.NEXT_PUBLIC_URL || 'https://shopalive.app';
  
  const manifest = {
    accountAssociation: {
      header: "",
      payload: "",
      signature: ""
    },
    miniapp: withValidProperties({
      version: "1",
      name: "ShopAlive",
      homeUrl: URL,
      iconUrl: `${URL}/icon.png`,
      splashImageUrl: `${URL}/splash.png`,
      splashBackgroundColor: "#000000",
      webhookUrl: `${URL}/api/webhook`,
      subtitle: "Live shopping, instant checkout",
      description: "Discover and shop products through live streams. Connect with sellers, chat in real-time, and checkout instantly.",
      screenshotUrls: [
        `${URL}/screenshot1.png`,
        `${URL}/screenshot2.png`,
        `${URL}/screenshot3.png`
      ],
      primaryCategory: "shopping",
      tags: ["shopping", "live-streaming", "ecommerce", "social-shopping"],
      heroImageUrl: `${URL}/hero.png`,
      tagline: "Shop live, shop easy",
      ogTitle: "ShopAlive - Live Shopping Experience",
      ogDescription: "Discover products through live streams and interactive shopping",
      ogImageUrl: `${URL}/og.png`
    })
  };

  return NextResponse.json(manifest);
}
