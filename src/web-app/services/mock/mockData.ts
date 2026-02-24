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

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Hillside Villa',
    location: 'Beverly Hills, CA',
    price: 2850000,
    type: 'Villa',
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MTE4MjI5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    views: 1247,
    leads: 23,
    favorites: 89,
    uploadDate: '2026-02-01',
    tourViews: 456,
    hasPrivacy: true,
    description: 'Stunning modern villa with panoramic city views, open floor plan, and luxury finishes throughout.'
  },
  {
    id: '2',
    title: 'Luxury Downtown Apartment',
    location: 'Manhattan, NY',
    price: 1650000,
    type: 'Apartment',
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzExODIyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    views: 2341,
    leads: 45,
    favorites: 156,
    uploadDate: '2026-01-28',
    tourViews: 892,
    hasPrivacy: true,
    description: 'High-end apartment in prime location with floor-to-ceiling windows and premium amenities.'
  },
  {
    id: '3',
    title: 'Contemporary Villa Estate',
    location: 'Miami Beach, FL',
    price: 4200000,
    type: 'Villa',
    bedrooms: 5,
    bathrooms: 4,
    area: 4500,
    status: 'pending',
    imageUrl: 'https://images.unsplash.com/photo-1622015663319-e97e697503ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjB2aWxsYXxlbnwxfHx8fDE3NzExMzA3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    views: 876,
    leads: 34,
    favorites: 67,
    uploadDate: '2026-01-15',
    tourViews: 234,
    hasPrivacy: false,
    description: 'Waterfront estate with private dock, infinity pool, and stunning ocean views.'
  },
  {
    id: '4',
    title: 'Modern Condo Tower Unit',
    location: 'Chicago, IL',
    price: 895000,
    type: 'Condo',
    bedrooms: 2,
    bathrooms: 2,
    area: 1400,
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1762397794646-f19044bd0828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25kbyUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MTIyMzQyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    views: 1567,
    leads: 28,
    favorites: 94,
    uploadDate: '2026-02-10',
    tourViews: 567,
    hasPrivacy: true,
    description: 'Sleek condo in prestigious tower with concierge service and rooftop terrace.'
  },
  {
    id: '5',
    title: 'Suburban Family Home',
    location: 'Austin, TX',
    price: 725000,
    type: 'House',
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1689574666650-de9cd6056e82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMHByb3BlcnR5fGVufDF8fHx8MTc3MTEzNzMxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    views: 2103,
    leads: 52,
    favorites: 178,
    uploadDate: '2026-02-05',
    tourViews: 721,
    hasPrivacy: true,
    description: 'Spacious family home with large backyard, updated kitchen, and excellent school district.'
  },
  {
    id: '6',
    title: 'Bright Modern Loft',
    location: 'Portland, OR',
    price: 575000,
    type: 'Loft',
    bedrooms: 2,
    bathrooms: 1,
    area: 1200,
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1677448068589-8c644873cdda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjaW91cyUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzcxMTM5NzM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    views: 987,
    leads: 19,
    favorites: 52,
    uploadDate: '2026-02-12',
    tourViews: 345,
    hasPrivacy: false,
    description: 'Industrial-chic loft with exposed brick, high ceilings, and abundant natural light.'
  }
];

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

export const mockAnalytics: AnalyticsData = {
  totalViews: 9121,
  totalLeads: 201,
  conversionRate: 2.2,
  activeListings: 5,
  viewsChange: 12.5,
  leadsChange: 8.3,
  conversionChange: -0.4,
  listingsChange: 0
};

export const mockViewsData = [
  { date: 'Feb 1', views: 245, leads: 5 },
  { date: 'Feb 3', views: 312, leads: 7 },
  { date: 'Feb 5', views: 289, leads: 6 },
  { date: 'Feb 7', views: 456, leads: 12 },
  { date: 'Feb 9', views: 398, leads: 9 },
  { date: 'Feb 11', views: 534, leads: 14 },
  { date: 'Feb 13', views: 467, leads: 11 },
  { date: 'Feb 15', views: 521, leads: 13 }
];

export const mockPropertyTypeData = [
  { name: 'Villa', value: 35 },
  { name: 'Apartment', value: 28 },
  { name: 'House', value: 22 },
  { name: 'Condo', value: 15 }
];

export interface Subscription {
  plan: string;
  price: number;
  billingCycle: string;
  nextBilling: string;
  features: string[];
  status: 'active' | 'cancelled';
}

export const mockSubscription: Subscription = {
  plan: 'Professional',
  price: 79,
  billingCycle: 'monthly',
  nextBilling: '2026-03-15',
  features: [
    'Up to 10 active listings',
    'Unlimited 3D tours',
    'Advanced analytics',
    'Priority support',
    'Custom branding',
    'Lead management tools'
  ],
  status: 'active'
};
