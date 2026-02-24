import { apiClient, USE_MOCK } from './client';
import { mockSubscription } from '../mock/mockData';

export interface Subscription {
  plan: string;
  price: number;
  billingCycle: string;
  nextBilling: string;
  features: string[];
  status: 'active' | 'cancelled';
}

export const subscriptionsApi = {
  getPlans: async () => {
    if (USE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 200));
      return [
        { name: 'Starter', price: 29, features: ['Up to 3 listings', 'Basic 3D tours'] },
        { name: 'Professional', price: 79, features: ['Up to 10 listings', 'Advanced features'] },
        { name: 'Enterprise', price: 199, features: ['Unlimited listings', 'White label'] }
      ];
    }
    const response = await apiClient.get('/subscriptions/plans');
    return response.data;
  },

  getCurrent: async (): Promise<Subscription> => {
    if (USE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 200));
      return mockSubscription;
    }
    const response = await apiClient.get<Subscription>('/subscriptions/current');
    return response.data;
  },

  subscribe: async (planId: string) => {
    if (USE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 500));
      return { success: true };
    }
    const response = await apiClient.post('/subscriptions/subscribe', { planId });
    return response.data;
  },

  cancel: async () => {
    if (USE_MOCK) {
      await new Promise(resolve => setTimeout(resolve, 300));
      return { success: true };
    }
    const response = await apiClient.put('/subscriptions/cancel');
    return response.data;
  }
};
