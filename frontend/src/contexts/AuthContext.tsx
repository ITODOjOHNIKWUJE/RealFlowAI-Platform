import React, { createContext, useContext, useState, ReactNode } from "react";

interface User {
  email: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (data: { email: string; password: string }) => Promise<boolean>;
  logout: () => Promise<void>;
  loading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface Props {
  children: ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      // Dummy login
      if (email && password) {
        setUser({ email });
        return true;
      }
      throw new Error("Login failed");
    } catch (err) {
      setError("Login failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: { email: string; password: string }): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      // Dummy register
      if (data.email && data.password) {
        setUser({ email: data.email });
        return true;
      }
      throw new Error("Registration failed");
    } catch (err) {
      setError("Registration failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setUser(null);
  };

  const value: AuthContextType = {
    isAuthenticated: !!user,
    user,
    login,
    register,
    logout,
    loading,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

