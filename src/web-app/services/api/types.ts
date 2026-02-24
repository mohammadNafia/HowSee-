// Shared TypeScript interfaces for API responses

export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  status: 'active' | 'pending' | 'sold';
  imageUrl: string;
  views: number;
  leads: number;
  favorites: number;
  uploadDate: string;
  tourViews: number;
  hasPrivacy: boolean;
  description: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'seller' | 'buyer' | 'admin';
  phone?: string;
  company?: string;
  createdAt: string;
}

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

export interface Subscription {
  plan: string;
  price: number;
  billingCycle: string;
  nextBilling: string;
  features: string[];
  status: 'active' | 'cancelled';
}
