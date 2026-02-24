import { apiClient, USE_MOCK } from './client';
import { mockProperties } from '../mock/mockData';
import { Property } from './types';

export const favoritesApi = {
  getFavorites: async (): Promise<Property[]> => {
    if (USE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 300));
      return mockProperties.slice(0, 3); // Return first 3 as favorites
    }
    const response = await apiClient.get<Property[]>('/favorites');
    return response.data;
  },

  addFavorite: async (propertyId: string): Promise<void> => {
    if (USE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 200));
      return;
    }
    await apiClient.post('/favorites', { propertyId });
  },

  removeFavorite: async (propertyId: string): Promise<void> => {
    if (USE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 200));
      return;
    }
    await apiClient.delete(`/favorites/${propertyId}`);
  }
};
