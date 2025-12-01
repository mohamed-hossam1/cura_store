"use client"
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useCart } from './CartContext';

interface UserContextType {
  user: UserData | null;
  updateUser: (newData: UserData) => void;
  resetUser: () => void;
  isLoading: boolean; 
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const { initCart } = useCart();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('userData');
    if (saved) {
      setUser(JSON.parse(saved));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (user) {
        localStorage.setItem('userData', JSON.stringify(user));
      } else {
        localStorage.removeItem('userData');
      }
    }
  }, [user, isLoading]);

  const updateUser = (newData: UserData) => {
    setUser(newData);
    initCart();
  };

  const resetUser = () => {
    setUser(null);
    initCart();
  };

  return (
    <UserContext.Provider value={{ user, updateUser, resetUser, isLoading }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}