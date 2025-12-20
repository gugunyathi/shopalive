import { useState, useRef, useEffect, useCallback } from 'react';
import { ChatMessage } from '@/types';
import { Send, Gift, Heart, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useEvmAddress, useIsSignedIn } from '@coinbase/cdp-hooks';
import { useToast } from '@/hooks/use-toast';

interface LiveChatProps {
  streamId: string;
  messages?: ChatMessage[];
  onSendMessage?: (message: string) => void;
  className?: string;
}

export const LiveChat = ({ streamId, messages: initialMessages, onSendMessage, className }: LiveChatProps) => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages || []);
  const [isLoading, setIsLoading] = useState(!initialMessages);
  const [isSending, setIsSending] = useState(false);
  const [lastTimestamp, setLastTimestamp] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { evmAddress } = useEvmAddress();
  const { isSignedIn } = useIsSignedIn();
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Load initial messages
  useEffect(() => {
    if (initialMessages) {
      setMessages(initialMessages);
      return;
    }

    const loadMessages = async () => {
      try {
        const response = await fetch(`/api/chat?streamId=${streamId}&limit=50`);
        if (response.ok) {
          const data = await response.json();
          setMessages(data.messages);
          setLastTimestamp(data.lastTimestamp);
        }
      } catch (error) {
        console.error('Error loading chat:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadMessages();
  }, [streamId, initialMessages]);

  // Poll for new messages every 3 seconds
  useEffect(() => {
    if (initialMessages) return; // Skip polling if using props

    const pollMessages = async () => {
      if (!lastTimestamp) return;
      
      try {
        const response = await fetch(`/api/chat?streamId=${streamId}&since=${lastTimestamp}`);
        if (response.ok) {
          const data = await response.json();
          if (data.messages.length > 0) {
            setMessages(prev => [...prev, ...data.messages]);
            setLastTimestamp(data.lastTimestamp);
          }
        }
      } catch (error) {
        console.error('Error polling chat:', error);
      }
    };

    const interval = setInterval(pollMessages, 3000);
    return () => clearInterval(interval);
  }, [streamId, lastTimestamp, initialMessages]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = useCallback(async () => {
    if (!newMessage.trim()) return;

    if (!isSignedIn || !evmAddress) {
      toast({
        title: 'Sign in required',
        description: 'Please sign in to chat',
        variant: 'destructive',
      });
      return;
    }

    setIsSending(true);
    const messageText = newMessage;
    setNewMessage('');

    // If using prop-based messaging, use the callback
    if (onSendMessage) {
      onSendMessage(messageText);
      setIsSending(false);
      return;
    }

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          streamId,
          userWallet: evmAddress,
          message: messageText,
          type: 'message',
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages(prev => [...prev, data.message]);
        setLastTimestamp(data.message.timestamp);
      } else {
        setNewMessage(messageText); // Restore message on error
        toast({
          title: 'Error',
          description: 'Failed to send message',
          variant: 'destructive',
        });
      }
    } catch (error) {
      setNewMessage(messageText);
      toast({
        title: 'Error',
        description: 'Failed to send message',
        variant: 'destructive',
      });
    } finally {
      setIsSending(false);
    }
  }, [newMessage, streamId, evmAddress, isSignedIn, onSendMessage, toast]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={cn('flex flex-col h-full', className)}>
      <div className="flex-1 overflow-y-auto scrollbar-hide p-4 space-y-3">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
            No messages yet. Be the first to chat!
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                'flex items-start gap-2 fade-in',
                message.type === 'purchase' && 'bg-primary/20 rounded-lg p-2 -mx-2',
                message.type === 'join' && 'opacity-60'
              )}
            >
              <img
                src={message.avatar}
                alt={message.username}
                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
              />
              <div className="min-w-0 flex-1">
                <span className="font-semibold text-sm text-foreground">{message.username}</span>
                {message.type === 'purchase' && (
                  <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                    🎉 Purchased!
                  </span>
                )}
                <p className="text-sm text-foreground/80 break-words">
                  {message.type === 'join' ? (
                    <span className="italic">{message.message}</span>
                  ) : (
                    message.message
                  )}
                </p>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Button variant="secondary" size="icon" className="flex-shrink-0">
            <Gift className="h-5 w-5 text-primary" />
          </Button>
          <Button variant="secondary" size="icon" className="flex-shrink-0">
            <Heart className="h-5 w-5 text-accent" />
          </Button>
          <div className="flex-1 relative">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={isSignedIn ? "Say something..." : "Sign in to chat"}
              disabled={!isSignedIn || isSending}
              className="pr-12 bg-secondary border-border"
            />
            <Button
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 gradient-primary"
              onClick={handleSend}
              disabled={!isSignedIn || isSending || !newMessage.trim()}
            >
              {isSending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
