'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useCDPReact } from '@coinbase/cdp-react';

interface UserProfile {
  _id: string;
  email?: string;
  phone?: string;
  username: string;
  avatar?: string;
  walletAddress: string;
  walletId?: string;
  authProvider: string;
  bio?: string;
  followers: number;
  following: number;
  totalViews: number;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

interface UserContextType {
  user: UserProfile | null;
  loading: boolean;
  error: string | null;
  createOrUpdateUser: (data: Partial<UserProfile>) => Promise<void>;
  refreshUser: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isAuthenticated, user: cdpUser, address } = useCDPReact();

  const fetchUser = async (walletAddress: string) => {
    try {
      const response = await fetch(`/api/users?walletAddress=${walletAddress}`);
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        return data.user;
      } else if (response.status === 404) {
        return null;
      } else {
        throw new Error('Failed to fetch user');
      }
    } catch (err: any) {
      console.error('Error fetching user:', err);
      setError(err.message);
      return null;
    }
  };

  const createOrUpdateUser = async (userData: Partial<UserProfile>) => {
    try {
      setLoading(true);
      setError(null);

      if (!address) {
        throw new Error('No wallet address available');
      }

      // First, try to create wallet via API
      let walletData = null;
      if (!userData.walletId) {
        try {
          const walletResponse = await fetch('/api/wallet/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: cdpUser?.id || 'temp' }),
          });
          if (walletResponse.ok) {
            walletData = await walletResponse.json();
          }
        } catch (err) {
          console.error('Error creating wallet:', err);
        }
      }

      // Create or update user
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          walletAddress: address,
          walletId: walletData?.walletId || userData.walletId,
          authProviderId: cdpUser?.id || `temp_${Date.now()}`,
          username: userData.username || `user_${Date.now()}`,
          ...userData,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create user');
      }

      const data = await response.json();
      setUser(data.user);
    } catch (err: any) {
      console.error('Error creating/updating user:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const refreshUser = async () => {
    if (!address) return;
    setLoading(true);
    await fetchUser(address);
    setLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated && address) {
      fetchUser(address).then((existingUser) => {
        if (!existingUser) {
          // Auto-create user if they don't exist
          createOrUpdateUser({
            authProvider: 'email' as any,
            username: `user_${address.slice(0, 8)}`,
          });
        }
        setLoading(false);
      });
    } else {
      setUser(null);
      setLoading(false);
    }
  }, [isAuthenticated, address]);

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        error,
        createOrUpdateUser,
        refreshUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
