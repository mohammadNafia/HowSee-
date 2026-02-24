import { apiClient, USE_MOCK } from './client';
import { User } from './types';

export const usersApi = {
  getUsers: async (): Promise<User[]> => {
    if (USE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 300));
      return [
        { id: '1', email: 'user1@example.com', name: 'User One', role: 'seller', createdAt: '2026-01-01' },
        { id: '2', email: 'user2@example.com', name: 'User Two', role: 'buyer', createdAt: '2026-01-02' }
      ];
    }
    const response = await apiClient.get<User[]>('/users');
    return response.data;
  },

  getUser: async (id: string): Promise<User> => {
    if (USE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 200));
      return { id, email: 'user@example.com', name: 'User', role: 'seller', createdAt: '2026-01-01' };
    }
    const response = await apiClient.get<User>(`/users/${id}`);
    return response.data;
  },

  updateUser: async (id: string, data: Partial<User>): Promise<User> => {
    if (USE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 300));
      return { id, email: 'user@example.com', name: 'User', role: 'seller', ...data, createdAt: '2026-01-01' } as User;
    }
    const response = await apiClient.put<User>(`/users/${id}`, data);
    return response.data;
  },

  deleteUser: async (id: string): Promise<void> => {
    if (USE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 200));
      return;
    }
    await apiClient.delete(`/users/${id}`);
  }
};
