import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import axios from 'axios';
import toast from 'react-hot-toast';

// API base URL - would be configured based on environment
const API_URL = 'http://localhost:5000';

// Auth context
export const AuthContext = React.createContext({
  isAuthenticated: false,
  user: null as any,
  login: async (_email: string, _password: string): Promise<boolean> => { return false; },
  logout: async () => {},
  loading: false,
  error: null as string | null
});

// Auth provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check if user is already authenticated on mount
  React.useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/auth/user`, { withCredentials: true });
        if (response.data.success) {
          setIsAuthenticated(true);
          setUser(response.data.user);
        }
      } catch (err) {
        // Not authenticated, that's okay
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.post(
        `${API_URL}/api/auth/login`,
        { email, password },
        { withCredentials: true }
      );
      
      if (response.data.success) {
        setIsAuthenticated(true);
        setUser(response.data.user);
        toast.success('Login successful!');
        return true;
      } else {
        setError(response.data.message || 'Login failed');
        toast.error(response.data.message || 'Login failed');
        return false;
      }
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Login failed. Please try again.';
      setError(errorMessage);
      toast.error(errorMessage);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    setLoading(true);
    
    try {
      await axios.post(`${API_URL}/api/auth/logout`, {}, { withCredentials: true });
      setIsAuthenticated(false);
      setUser(null);
      toast.success('Logged out successfully');
    } catch (err) {
      toast.error('Logout failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// API hooks for leads
export const useSubmitLead = () => {
  return useMutation(
    (leadData: any) => axios.post(`${API_URL}/api/leads`, leadData),
    {
      onSuccess: () => {
        toast.success('Thank you! Your information has been submitted successfully.');
      },
      onError: () => {
        toast.error('Failed to submit your information. Please try again.');
      }
    }
  );
};

// API hooks for client resources
export const useClientResources = () => {
  return useQuery(
    'clientResources',
    async () => {
      const response = await axios.get(`${API_URL}/api/client/resources`, { withCredentials: true });
      return response.data.resources;
    },
    {
      enabled: false, // Only fetch when explicitly requested
      onError: () => {
        toast.error('Failed to load resources. Please try again.');
      }
    }
  );
};

// API hooks for client messages
export const useClientMessages = () => {
  return useQuery(
    'clientMessages',
    async () => {
      const response = await axios.get(`${API_URL}/api/client/messages`, { withCredentials: true });
      return response.data.messages;
    },
    {
      enabled: false, // Only fetch when explicitly requested
      onError: () => {
        toast.error('Failed to load messages. Please try again.');
      }
    }
  );
};

// API hook for sending client message
export const useSendClientMessage = () => {
  return useMutation(
    (messageData: { content: string }) => 
      axios.post(`${API_URL}/api/client/messages`, messageData, { withCredentials: true }),
    {
      onSuccess: () => {
        toast.success('Message sent successfully.');
      },
      onError: () => {
        toast.error('Failed to send message. Please try again.');
      }
    }
  );
};

// API hook for client project status
export const useClientProject = () => {
  return useQuery(
    'clientProject',
    async () => {
      const response = await axios.get(`${API_URL}/api/client/project`, { withCredentials: true });
      return response.data.project;
    },
    {
      enabled: false, // Only fetch when explicitly requested
      onError: () => {
        toast.error('Failed to load project status. Please try again.');
      }
    }
  );
};

