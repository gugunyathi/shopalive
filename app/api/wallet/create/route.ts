import { NextRequest, NextResponse } from 'next/server';
import { Coinbase, Wallet } from '@coinbase/coinbase-sdk';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, walletName } = body;

    if (!userId) {
      return NextResponse.json(
        { error: 'userId is required' },
        { status: 400 }
      );
    }

    // Initialize Coinbase SDK
    Coinbase.configure({
      apiKeyName: process.env.CDP_API_KEY!,
      privateKey: process.env.CDP_API_SECRET!.replace(/\\n/g, '\n'),
    });

    // Create a new wallet
    const wallet = await Wallet.create({
      networkId: Coinbase.networks.BaseMainnet,
    });

    const address = await wallet.getDefaultAddress();

    return NextResponse.json({
      walletId: wallet.getId(),
      walletAddress: address.getId(),
      networkId: wallet.getNetworkId(),
    }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating wallet:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create wallet' },
      { status: 500 }
    );
  }
}
