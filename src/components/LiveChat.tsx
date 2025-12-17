import { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '@/types';
import { Send, Gift, Heart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LiveChatProps {
  messages: ChatMessage[];
  onSendMessage?: (message: string) => void;
  className?: string;
}

export const LiveChat = ({ messages, onSendMessage, className }: LiveChatProps) => {
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (newMessage.trim()) {
      onSendMessage?.(newMessage);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={cn('flex flex-col h-full', className)}>
      <div className="flex-1 overflow-y-auto scrollbar-hide p-4 space-y-3">
        {messages.map((message) => (
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
        ))}
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
              placeholder="Say something..."
              className="pr-12 bg-secondary border-border"
            />
            <Button
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 gradient-primary"
              onClick={handleSend}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
