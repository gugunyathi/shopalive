import { useState, useRef, useEffect, useCallback } from 'react';
import { LiveStream, Product } from '@/types';
import { StreamViewer } from './StreamViewer';
import { cn } from '@/lib/utils';

interface LiveFeedProps {
  streams: LiveStream[];
  onAddToCart?: (product: Product) => void;
}

export const LiveFeed = ({ streams, onAddToCart }: LiveFeedProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  const goToNext = useCallback(() => {
    if (currentIndex < streams.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, streams.length]);

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  // Handle wheel scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollTimeout: NodeJS.Timeout;
    let lastScrollTime = 0;
    const scrollCooldown = 500;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastScrollTime < scrollCooldown) return;

      if (e.deltaY > 50) {
        goToNext();
        lastScrollTime = now;
      } else if (e.deltaY < -50) {
        goToPrevious();
        lastScrollTime = now;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [goToNext, goToPrevious]);

  // Handle touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    const diff = touchStartY.current - touchEndY.current;
    const threshold = 50;

    if (diff > threshold) {
      goToNext();
    } else if (diff < -threshold) {
      goToPrevious();
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'j') {
        goToNext();
      } else if (e.key === 'ArrowUp' || e.key === 'k') {
        goToPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious]);

  return (
    <div
      ref={containerRef}
      className="h-full w-full overflow-hidden relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {streams.map((stream, index) => (
        <div
          key={stream.id}
          className={cn(
            'absolute inset-0 transition-transform duration-500 ease-out',
            index === currentIndex && 'z-10',
            index < currentIndex && '-translate-y-full',
            index > currentIndex && 'translate-y-full'
          )}
        >
          <StreamViewer
            stream={stream}
            isActive={index === currentIndex}
            onNext={goToNext}
            onPrevious={goToPrevious}
            hasNext={currentIndex < streams.length - 1}
            hasPrevious={currentIndex > 0}
            onAddToCart={onAddToCart}
          />
        </div>
      ))}

      {/* Progress Indicators */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-1.5">
        {streams.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'w-1 rounded-full transition-all duration-300',
              index === currentIndex ? 'h-8 bg-primary' : 'h-4 bg-foreground/30 hover:bg-foreground/50'
            )}
          />
        ))}
      </div>
    </div>
  );
};
