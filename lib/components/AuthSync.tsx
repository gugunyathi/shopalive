'use client';

import { useEffect, useRef } from 'react';
import { useIsSignedIn, useEvmAddress } from '@coinbase/cdp-hooks';
import { useUser } from '@/lib/context/UserContext';

/**
 * AuthSync component - Automatically syncs CDP wallet with database user
 * 
 * This component:
 * 1. Monitors sign-in state from CDP
 * 2. When user signs in, gets their wallet address
 * 3. Creates or fetches user profile from database
 * 4. Ensures sellers have their wallet address saved for receiving payments
 */
export function AuthSync() {
  const { isSignedIn } = useIsSignedIn();
  const { evmAddress } = useEvmAddress();
  const { user, createOrUpdateUser, fetchUser } = useUser();
  const syncedRef = useRef(false);
  const lastAddressRef = useRef<string | null>(null);

  useEffect(() => {
    const syncUser = async () => {
      // Only sync when signed in and have a wallet address
      if (!isSignedIn || !evmAddress) {
        syncedRef.current = false;
        lastAddressRef.current = null;
        return;
      }

      // Don't sync if we already synced this address
      if (syncedRef.current && lastAddressRef.current === evmAddress) {
        return;
      }

      // Don't sync if user already loaded with same address
      if (user && user.walletAddress === evmAddress) {
        syncedRef.current = true;
        lastAddressRef.current = evmAddress;
        return;
      }

      console.log('[AuthSync] Syncing user with wallet:', evmAddress);

      try {
        // First, try to fetch existing user
        const existingUser = await fetchUser(evmAddress);

        if (existingUser) {
          console.log('[AuthSync] Found existing user:', existingUser.username);
          syncedRef.current = true;
          lastAddressRef.current = evmAddress;
          return;
        }

        // User doesn't exist, create new one
        console.log('[AuthSync] Creating new user for wallet:', evmAddress);
        
        // Generate a unique username from wallet address
        const username = `user_${evmAddress.slice(2, 10).toLowerCase()}`;

        const newUser = await createOrUpdateUser({
          walletAddress: evmAddress,
          username,
          authProvider: 'wallet',
          authProviderId: evmAddress,
          isSeller: false, // Can be updated later when they start selling
        });

        if (newUser) {
          console.log('[AuthSync] Created new user:', newUser.username);
        }

        syncedRef.current = true;
        lastAddressRef.current = evmAddress;
      } catch (error) {
        console.error('[AuthSync] Error syncing user:', error);
        // Reset sync state so it can retry
        syncedRef.current = false;
      }
    };

    syncUser();
  }, [isSignedIn, evmAddress, user, createOrUpdateUser, fetchUser]);

  // This component doesn't render anything
  return null;
}
