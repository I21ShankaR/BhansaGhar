import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthContextType } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user data on component mount
    const storedUser = localStorage.getItem('biharSnacksUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    
    // Simulate API call - In real app, this would be an actual API call
    const storedUsers = JSON.parse(localStorage.getItem('biharSnacksUsers') || '[]');
    const foundUser = storedUsers.find((u: any) => u.email === email && u.password === password);
    
    if (foundUser) {
      const userData = { id: foundUser.id, name: foundUser.name, email: foundUser.email, phone: foundUser.phone };
      setUser(userData);
      localStorage.setItem('biharSnacksUser', JSON.stringify(userData));
      setLoading(false);
      return true;
    }
    
    setLoading(false);
    return false;
  };

  const register = async (name: string, email: string, password: string, phone?: string): Promise<boolean> => {
    setLoading(true);
    
    // Check if user already exists
    const storedUsers = JSON.parse(localStorage.getItem('biharSnacksUsers') || '[]');
    const userExists = storedUsers.some((u: any) => u.email === email);
    
    if (userExists) {
      setLoading(false);
      return false;
    }
    
    // Create new user
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
      phone
    };
    
    const updatedUsers = [...storedUsers, newUser];
    localStorage.setItem('biharSnacksUsers', JSON.stringify(updatedUsers));
    
    const userData = { id: newUser.id, name: newUser.name, email: newUser.email, phone: newUser.phone };
    setUser(userData);
    localStorage.setItem('biharSnacksUser', JSON.stringify(userData));
    
    setLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('biharSnacksUser');
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};