import { Property } from '@/shared/api/types';

// Mock favorites since endpoints are missing in the final backend spec
export const favoritesApi = {
  list: async (): Promise<Property[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [];
  },

  add: async (propertyId: number): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 200));
  },

  remove: async (favoriteId: number): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 200));
  }
};
