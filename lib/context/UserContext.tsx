'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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
  fetchUser: (walletAddress: string) => Promise<UserProfile | null>;
  createOrUpdateUser: (data: Partial<UserProfile> & { walletAddress: string }) => Promise<UserProfile | undefined>;
  refreshUser: (walletAddress: string) => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  const createOrUpdateUser = async (userData: Partial<UserProfile> & { walletAddress: string }) => {
    try {
      setLoading(true);
      setError(null);

      // First, try to create wallet via API
      let walletData = null;
      if (!userData.walletId) {
        try {
          const walletResponse = await fetch('/api/wallet/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: userData.walletAddress }),
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
          walletId: walletData?.walletId || userData.walletId,
          authProvider: 'wallet',
          authProviderId: userData.walletAddress,
          username: userData.username || `user_${userData.walletAddress?.slice(0, 8)}`,
          ...userData,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create user');
      }

      const data = await response.json();
      setUser(data.user);
      return data.user;
    } catch (err: any) {
      console.error('Error creating/updating user:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const refreshUser = async (walletAddress: string) => {
    if (!walletAddress) return;
    setLoading(true);
    await fetchUser(walletAddress);
    setLoading(false);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        error,
        fetchUser,
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
