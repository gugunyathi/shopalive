import { Seller } from '@/types';
import { BadgeCheck, UserPlus, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface SellerInfoProps {
  seller: Seller;
  className?: string;
  variant?: 'default' | 'compact';
}

export const SellerInfo = ({ seller, className, variant = 'default' }: SellerInfoProps) => {
  const [isFollowing, setIsFollowing] = useState(false);

  if (variant === 'compact') {
    return (
      <div className={cn('flex items-center gap-3', className)}>
        <img
          src={seller.avatar}
          alt={seller.name}
          className="w-10 h-10 rounded-full object-cover ring-2 ring-primary"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-foreground truncate">{seller.name}</span>
            {seller.isVerified && <BadgeCheck className="h-4 w-4 text-primary flex-shrink-0" />}
          </div>
          <p className="text-sm text-muted-foreground">@{seller.username}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('flex items-center gap-4 glass rounded-2xl p-4', className)}>
      <div className="relative">
        <img
          src={seller.avatar}
          alt={seller.name}
          className="w-14 h-14 rounded-full object-cover ring-2 ring-primary"
        />
        <div className="absolute -bottom-1 -right-1 bg-success text-success-foreground text-xs font-bold px-1.5 py-0.5 rounded-full">
          LIVE
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1 mb-0.5">
          <span className="font-bold text-foreground truncate">{seller.name}</span>
          {seller.isVerified && <BadgeCheck className="h-5 w-5 text-primary flex-shrink-0" />}
        </div>
        <p className="text-sm text-muted-foreground">@{seller.username}</p>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
          <Users className="h-4 w-4" />
          <span>{seller.followers.toLocaleString()} followers</span>
        </div>
      </div>
      <Button
        variant={isFollowing ? 'secondary' : 'default'}
        className={cn(!isFollowing && 'gradient-primary border-0')}
        onClick={() => setIsFollowing(!isFollowing)}
      >
        {isFollowing ? (
          'Following'
        ) : (
          <>
            <UserPlus className="h-4 w-4 mr-1" />
            Follow
          </>
        )}
      </Button>
    </div>
  );
};
