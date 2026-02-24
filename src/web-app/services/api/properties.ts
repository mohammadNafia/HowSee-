import { apiClient, USE_MOCK } from './client';
import { mockProperties, Property } from '../mock/mockData';

export interface PropertyFilters {
  type?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  status?: 'active' | 'pending' | 'sold';
}

export const propertiesApi = {
  getProperties: async (filters?: PropertyFilters): Promise<Property[]> => {
    if (USE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 300));
      let filtered = [...mockProperties];
      if (filters?.type) {
        filtered = filtered.filter(p => p.type === filters.type);
      }
      if (filters?.status) {
        filtered = filtered.filter(p => p.status === filters.status);
      }
      return filtered;
    }
    const response = await apiClient.get<Property[]>('/properties', { params: filters });
    return response.data;
  },

  getProperty: async (id: string): Promise<Property> => {
    if (USE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 200));
      const property = mockProperties.find(p => p.id === id);
      if (!property) throw new Error('Property not found');
      return property;
    }
    const response = await apiClient.get<Property>(`/properties/${id}`);
    return response.data;
  },

  createProperty: async (data: Partial<Property>): Promise<Property> => {
    if (USE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 500));
      return {
        ...data,
        id: Date.now().toString(),
        views: 0,
        leads: 0,
        favorites: 0,
        tourViews: 0,
        uploadDate: new Date().toISOString().split('T')[0],
        status: 'active',
        hasPrivacy: true
      } as Property;
    }
    const response = await apiClient.post<Property>('/properties', data);
    return response.data;
  },

  updateProperty: async (id: string, data: Partial<Property>): Promise<Property> => {
    if (USE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 300));
      return { ...mockProperties.find(p => p.id === id)!, ...data } as Property;
    }
    const response = await apiClient.put<Property>(`/properties/${id}`, data);
    return response.data;
  },

  deleteProperty: async (id: string): Promise<void> => {
    if (USE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 200));
      return;
    }
    await apiClient.delete(`/properties/${id}`);
  }
};
