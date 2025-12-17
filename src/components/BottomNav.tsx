import { Home, Search, Plus, Heart, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const BottomNav = ({ activeTab, onTabChange }: BottomNavProps) => {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'discover', icon: Search, label: 'Discover' },
    { id: 'create', icon: Plus, label: '', isSpecial: true },
    { id: 'wishlist', icon: Heart, label: 'Wishlist' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass-dark border-t border-border/50 safe-area-bottom">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              'flex flex-col items-center justify-center flex-1 h-full transition-all',
              tab.isSpecial && 'relative',
              !tab.isSpecial && activeTab === tab.id
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {tab.isSpecial ? (
              <div className="gradient-primary rounded-xl p-3 glow">
                <Plus className="h-6 w-6 text-primary-foreground" />
              </div>
            ) : (
              <>
                <tab.icon className="h-6 w-6" />
                <span className="text-xs mt-1 font-medium">{tab.label}</span>
              </>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};
