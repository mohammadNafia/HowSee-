import { apiClient, USE_MOCK } from './client';
import { mockAnalytics, mockViewsData, mockPropertyTypeData } from '../mock/mockData';

export interface AnalyticsData {
  totalViews: number;
  totalLeads: number;
  conversionRate: number;
  activeListings: number;
  viewsChange: number;
  leadsChange: number;
  conversionChange: number;
  listingsChange: number;
}

export const analyticsApi = {
  getOverview: async (): Promise<AnalyticsData> => {
    if (USE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 300));
      return mockAnalytics;
    }
    const response = await apiClient.get<AnalyticsData>('/analytics/overview');
    return response.data;
  },

  getViewsData: async () => {
    if (USE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 200));
      return mockViewsData;
    }
    const response = await apiClient.get('/analytics/views');
    return response.data;
  },

  getPropertyTypeData: async () => {
    if (USE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 200));
      return mockPropertyTypeData;
    }
    const response = await apiClient.get('/analytics/property-types');
    return response.data;
  }
};
