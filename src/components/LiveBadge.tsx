import { cn } from '@/lib/utils';

interface LiveBadgeProps {
  viewers?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const LiveBadge = ({ viewers, className, size = 'md' }: LiveBadgeProps) => {
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div
        className={cn(
          'flex items-center gap-1.5 bg-live text-live-foreground font-semibold rounded-full',
          sizeClasses[size]
        )}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-live-foreground opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-live-foreground"></span>
        </span>
        LIVE
      </div>
      {viewers && (
        <span className="text-foreground/80 text-sm font-medium">
          {viewers.toLocaleString()} watching
        </span>
      )}
    </div>
  );
};
