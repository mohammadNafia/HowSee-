import { apiClient, USE_MOCK } from './client';
import { mockProperties } from '../mock/mockData';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  fullName: string;
  accountType: 'seller' | 'buyer';
  phone?: string;
  company?: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: 'seller' | 'buyer' | 'admin';
  };
}

export const authApi = {
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    if (USE_MOCK) {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      return {
        token: 'mock-token-123',
        user: {
          id: '1',
          email: data.email,
          name: 'John Doe',
          role: 'seller'
        }
      };
    }
    const response = await apiClient.post<AuthResponse>('/auth/login', data);
    return response.data;
  },

  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    if (USE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 500));
      return {
        token: 'mock-token-123',
        user: {
          id: '1',
          email: data.email,
          name: data.fullName,
          role: data.accountType
        }
      };
    }
    const response = await apiClient.post<AuthResponse>('/auth/register', data);
    return response.data;
  },

  logout: async (): Promise<void> => {
    if (USE_MOCK) {
      return;
    }
    await apiClient.post('/auth/logout');
  },

  getCurrentUser: async (): Promise<AuthResponse['user']> => {
    if (USE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 300));
      return {
        id: '1',
        email: 'john@example.com',
        name: 'John Doe',
        role: 'seller'
      };
    }
    const response = await apiClient.get<AuthResponse['user']>('/auth/me');
    return response.data;
  }
};
