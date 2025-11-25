"use client"
import React, { createContext, useState, useContext, useEffect } from 'react';


interface UserContextType {
  user: UserData | null;
  updateUser: (newData: UserData) => void;
  resetUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserData | null>(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('userData');
      return saved ? JSON.parse(saved) : null;
    }
    return null;
  });

  useEffect(() => {
    if (user) {
      sessionStorage.setItem('userData', JSON.stringify(user));
    } else {
      sessionStorage.removeItem('userData');
    }
    const saved = sessionStorage.getItem('userData');
  }, [user]);

  const updateUser = (newData: UserData) => {
    setUser(newData);
  };

  const resetUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, updateUser, resetUser }}>
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