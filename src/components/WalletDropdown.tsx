'use client';

import { useState, useEffect } from 'react';
import { Wallet, Copy, ExternalLink, Send, Download, ChevronDown, Coins, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { useEvmAddress, useIsSignedIn } from '@coinbase/cdp-hooks';
import { SendEvmTransactionButton } from '@coinbase/cdp-react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Token {
  symbol: string;
  name: string;
  balance: string;
  icon: string;
  usdValue: string;
}

export const WalletDropdown = () => {
  const { evmAddress } = useEvmAddress();
  const { isSignedIn } = useIsSignedIn();
  const { toast } = useToast();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [showSendDialog, setShowSendDialog] = useState(false);
  const [showReceiveDialog, setShowReceiveDialog] = useState(false);
  const [sendTo, setSendTo] = useState('');
  const [sendAmount, setSendAmount] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [ethBalance, setEthBalance] = useState('0.00');
  const [tokens, setTokens] = useState<Token[]>([
    { symbol: 'ETH', name: 'Ethereum', balance: '0.00', icon: '⟠', usdValue: '$0.00' },
    { symbol: 'USDC', name: 'USD Coin', balance: '0.00', icon: '💵', usdValue: '$0.00' },
  ]);

  // Fetch balances (mock for now, can integrate with real API)
  const fetchBalances = async () => {
    if (!evmAddress) return;
    setIsRefreshing(true);
    try {
      // In production, fetch real balances from blockchain
      // For now, using placeholder values
      await new Promise(resolve => setTimeout(resolve, 1000));
      setEthBalance('0.001');
      setTokens([
        { symbol: 'ETH', name: 'Ethereum', balance: '0.001', icon: '⟠', usdValue: '$3.50' },
        { symbol: 'USDC', name: 'USD Coin', balance: '0.00', icon: '💵', usdValue: '$0.00' },
      ]);
    } catch (error) {
      console.error('Error fetching balances:', error);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    if (evmAddress && isSignedIn) {
      fetchBalances();
    }
  }, [evmAddress, isSignedIn]);

  const copyAddress = () => {
    if (evmAddress) {
      navigator.clipboard.writeText(evmAddress);
      toast({
        title: 'Copied!',
        description: 'Wallet address copied to clipboard',
      });
    }
  };

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const openExplorer = () => {
    if (evmAddress) {
      window.open(`https://sepolia.basescan.org/address/${evmAddress}`, '_blank');
    }
  };

  if (!isSignedIn) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="relative glass rounded-full"
        onClick={() => router.push('/signin')}
      >
        <Wallet className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="glass rounded-full px-3 gap-2"
          >
            <Wallet className="h-4 w-4 text-primary" />
            {evmAddress && (
              <span className="text-xs font-medium">{truncateAddress(evmAddress)}</span>
            )}
            <ChevronDown className="h-3 w-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-72 p-0">
          {/* Header */}
          <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Wallet Address</span>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={copyAddress}>
                  <Copy className="h-3 w-3" />
                </Button>
                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={openExplorer}>
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </div>
            </div>
            <p className="font-mono text-sm break-all">{evmAddress}</p>
          </div>

          <DropdownMenuSeparator />

          {/* Balance */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">Total Balance</span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-6 w-6"
                onClick={fetchBalances}
                disabled={isRefreshing}
              >
                <RefreshCw className={`h-3 w-3 ${isRefreshing ? 'animate-spin' : ''}`} />
              </Button>
            </div>
            <p className="text-2xl font-bold">{ethBalance} ETH</p>
            <p className="text-sm text-muted-foreground">≈ $3.50 USD</p>
          </div>

          <DropdownMenuSeparator />

          {/* Action Buttons */}
          <div className="p-3 flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1"
              onClick={() => {
                setIsOpen(false);
                setShowSendDialog(true);
              }}
            >
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1"
              onClick={() => {
                setIsOpen(false);
                setShowReceiveDialog(true);
              }}
            >
              <Download className="h-4 w-4 mr-2" />
              Receive
            </Button>
          </div>

          <DropdownMenuSeparator />

          {/* Tokens */}
          <div className="p-3">
            <div className="flex items-center gap-2 mb-3">
              <Coins className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Tokens</span>
            </div>
            <div className="space-y-2">
              {tokens.map((token) => (
                <div 
                  key={token.symbol}
                  className="flex items-center justify-between p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{token.icon}</span>
                    <div>
                      <p className="text-sm font-medium">{token.symbol}</p>
                      <p className="text-xs text-muted-foreground">{token.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{token.balance}</p>
                    <p className="text-xs text-muted-foreground">{token.usdValue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

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
            {evmAddress && sendTo && sendAmount && (
              <SendEvmTransactionButton
                account={evmAddress}
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
                  fetchBalances();
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
                {/* QR Code placeholder - in production use a QR library */}
                <div className="text-4xl">📱</div>
              </div>
              <p className="font-mono text-sm break-all mb-4">{evmAddress}</p>
              <Button onClick={copyAddress} variant="outline" className="w-full">
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
    </>
  );
};
