'use client';

import { useCallback } from 'react';
import { useEvmAddress } from '@coinbase/cdp-hooks';

type ActivityType = 
  | 'stream_view'
  | 'stream_start'
  | 'stream_end'
  | 'video_view'
  | 'video_like'
  | 'product_view'
  | 'product_add'
  | 'purchase'
  | 'follow'
  | 'unfollow'
  | 'wishlist_add'
  | 'wishlist_remove'
  | 'share'
  | 'like'
  | 'comment';

type TargetType = 'stream' | 'product' | 'user' | 'order' | 'video';

interface TrackActivityParams {
  type: ActivityType;
  targetType: TargetType;
  targetId: string;
  metadata?: Record<string, any>;
}

export function useActivity() {
  const { evmAddress } = useEvmAddress();

  const trackActivity = useCallback(async ({
    type,
    targetType,
    targetId,
    metadata = {},
  }: TrackActivityParams) => {
    if (!evmAddress) {
      console.warn('Cannot track activity: no wallet address');
      return null;
    }

    try {
      const response = await fetch('/api/activities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          walletAddress: evmAddress,
          type,
          targetType,
          targetId,
          metadata,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to track activity');
      }

      return await response.json();
    } catch (error) {
      console.error('Error tracking activity:', error);
      return null;
    }
  }, [evmAddress]);

  // Convenience methods for common activities
  const trackStreamView = useCallback((streamId: string, streamTitle?: string) => {
    return trackActivity({
      type: 'stream_view',
      targetType: 'stream',
      targetId: streamId,
      metadata: { streamTitle },
    });
  }, [trackActivity]);

  const trackProductView = useCallback((productId: string, productName?: string) => {
    return trackActivity({
      type: 'product_view',
      targetType: 'product',
      targetId: productId,
      metadata: { productName },
    });
  }, [trackActivity]);

  const trackPurchase = useCallback((orderId: string, total: number, items: number) => {
    return trackActivity({
      type: 'purchase',
      targetType: 'order',
      targetId: orderId,
      metadata: { total, items },
    });
  }, [trackActivity]);

  const trackFollow = useCallback((userId: string, username?: string) => {
    return trackActivity({
      type: 'follow',
      targetType: 'user',
      targetId: userId,
      metadata: { username },
    });
  }, [trackActivity]);

  const trackUnfollow = useCallback((userId: string, username?: string) => {
    return trackActivity({
      type: 'unfollow',
      targetType: 'user',
      targetId: userId,
      metadata: { username },
    });
  }, [trackActivity]);

  const trackWishlistAdd = useCallback((productId: string, productName?: string) => {
    return trackActivity({
      type: 'wishlist_add',
      targetType: 'product',
      targetId: productId,
      metadata: { productName },
    });
  }, [trackActivity]);

  const trackShare = useCallback((targetType: TargetType, targetId: string, platform?: string) => {
    return trackActivity({
      type: 'share',
      targetType,
      targetId,
      metadata: { platform },
    });
  }, [trackActivity]);

  const trackLike = useCallback((targetType: TargetType, targetId: string) => {
    return trackActivity({
      type: 'like',
      targetType,
      targetId,
    });
  }, [trackActivity]);

  return {
    trackActivity,
    trackStreamView,
    trackProductView,
    trackPurchase,
    trackFollow,
    trackUnfollow,
    trackWishlistAdd,
    trackShare,
    trackLike,
  };
}
