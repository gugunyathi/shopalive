import { Share2, X, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';

// Custom icons for platforms not in Lucide
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

const SnapchatIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301a.32.32 0 0 1 .114-.023c.12 0 .24.045.33.12.12.09.18.21.18.36 0 .24-.15.42-.345.495l-.018.006c-.012.004-.018.006-.024.009l-.012.003c-.303.12-.705.27-1.155.27-.12 0-.24-.015-.36-.03-.06 0-.12-.015-.18-.015-.315 0-.69.15-.9.315-.195.135-.315.315-.405.495a1.635 1.635 0 0 1-.36.555c-.3.315-.71.51-1.14.51-.3 0-.57-.09-.855-.195l-.21-.105c-.135-.045-.21-.075-.27-.075-.12 0-.255.045-.45.12-.195.06-.405.195-.69.315a4.39 4.39 0 0 1-1.605.36c-.54 0-1.08-.105-1.59-.36-.285-.12-.495-.255-.69-.315-.195-.075-.33-.12-.45-.12-.06 0-.135.03-.27.075l-.21.105c-.285.105-.555.195-.855.195-.42 0-.84-.195-1.14-.51a1.726 1.726 0 0 1-.36-.555c-.09-.18-.21-.36-.405-.495-.21-.165-.585-.315-.9-.315-.06 0-.12.015-.18.015-.12.015-.24.03-.36.03-.45 0-.855-.15-1.155-.27l-.012-.003c-.006-.003-.012-.005-.024-.009l-.018-.006c-.195-.075-.345-.255-.345-.495 0-.15.06-.27.18-.36a.395.395 0 0 1 .33-.12c.039 0 .078.008.114.023.374.18.733.285 1.033.301.198 0 .326-.045.401-.09a9.58 9.58 0 0 1-.03-.51l-.003-.06c-.104-1.628-.23-3.654.299-4.847C7.859 1.069 11.216.793 12.206.793z" />
  </svg>
);

interface SocialShareProps {
  productName?: string;
  streamTitle?: string;
}

export const SocialShare = ({ productName, streamTitle }: SocialShareProps) => {
  const { toast } = useToast();

  const shareText = productName
    ? `Check out ${productName} on Tyle!`
    : streamTitle
    ? `Watch "${streamTitle}" live on Tyle!`
    : 'Check out this amazing live stream on Tyle!';

  const handleShare = (platform: string) => {
    toast({
      title: `Sharing to ${platform}`,
      description: `"${shareText}" will be posted to your ${platform}`,
    });
  };

  const platforms = [
    { name: 'TikTok', icon: TikTokIcon, color: 'hover:bg-[#ff0050]/20' },
    { name: 'Instagram', icon: Instagram, color: 'hover:bg-[#E4405F]/20' },
    { name: 'X (Twitter)', icon: X, color: 'hover:bg-foreground/20' },
    { name: 'Facebook', icon: Facebook, color: 'hover:bg-[#1877F2]/20' },
    { name: 'Snapchat', icon: SnapchatIcon, color: 'hover:bg-[#FFFC00]/20' },
    { name: 'WhatsApp', icon: WhatsAppIcon, color: 'hover:bg-[#25D366]/20' },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <Share2 className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 glass">
        {platforms.map((platform) => (
          <DropdownMenuItem
            key={platform.name}
            onClick={() => handleShare(platform.name)}
            className={`flex items-center gap-3 cursor-pointer ${platform.color}`}
          >
            <platform.icon />
            <span>{platform.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
