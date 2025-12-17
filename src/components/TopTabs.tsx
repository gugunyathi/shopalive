import { cn } from '@/lib/utils';

interface TopTabsProps {
  activeTab: 'foryou' | 'following';
  onTabChange: (tab: 'foryou' | 'following') => void;
}

export const TopTabs = ({ activeTab, onTabChange }: TopTabsProps) => {
  return (
    <div className="flex items-center justify-center gap-6">
      <button
        onClick={() => onTabChange('following')}
        className={cn(
          'text-lg font-semibold transition-all',
          activeTab === 'following' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground/80'
        )}
      >
        Following
      </button>
      <span className="w-px h-6 bg-border" />
      <button
        onClick={() => onTabChange('foryou')}
        className={cn(
          'text-lg font-semibold transition-all',
          activeTab === 'foryou' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground/80'
        )}
      >
        For You
      </button>
      
      {/* Active Indicator */}
      <div
        className={cn(
          'absolute bottom-0 h-0.5 bg-primary rounded-full transition-all duration-300 w-16',
          activeTab === 'following' ? '-translate-x-12' : 'translate-x-10'
        )}
      />
    </div>
  );
};
