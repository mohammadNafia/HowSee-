import { Eye, Users, TrendingUp, Layers, ArrowUp, ArrowUpRight, Activity } from 'lucide-react';
import { mockAnalytics } from '../../services/mock/mockData';

export function AnalyticsOverview() {
  const stats = [
    { label: 'Total Views', value: mockAnalytics.totalViews.toLocaleString(), change: mockAnalytics.viewsChange, icon: Eye, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Total Leads', value: mockAnalytics.totalLeads.toLocaleString(), change: mockAnalytics.leadsChange, icon: Users, color: 'text-[#576856]', bg: 'bg-[#576856]/10' },
    { label: 'Conversion Rate', value: `${mockAnalytics.conversionRate}%`, change: mockAnalytics.conversionChange, icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Active Listings', value: mockAnalytics.activeListings.toString(), change: mockAnalytics.listingsChange, icon: Layers, color: 'text-orange-600', bg: 'bg-orange-50' }
  ];

  return (
    <div className="p-8 space-y-10 animate-in fade-in duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-2">Performance Dashboard</h1>
          <p className="text-gray-500 font-medium">Tracking your property engagement and conversion metrics.</p>
        </div>
        <button className="px-8 py-4 bg-[#576856] text-white rounded-2xl font-bold hover:bg-[#4a5849] transition-all flex items-center gap-2 shadow-xl shadow-[#576856]/20">
          <Activity className="w-5 h-5" />
          Live Metrics
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all group">
            <div className="flex items-center justify-between mb-6">
              <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-7 h-7" />
              </div>
              {stat.change > 0 && (
                <div className="flex items-center gap-1 text-green-600 bg-green-50 px-3 py-1 rounded-full text-xs font-bold">
                  <ArrowUp className="w-3 h-3" />
                  {stat.change}%
                </div>
              )}
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-gray-900 tracking-tight">{stat.value}</p>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden flex flex-col">
        <div className="p-8 border-b border-gray-50 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Engagement Trends</h2>
            <p className="text-sm text-gray-500 font-medium italic mt-1">Average of 127% more engagement with 3D Tours.</p>
          </div>
          <div className="flex gap-2">
            {['Daily', 'Weekly', 'Monthly'].map((period) => (
              <button key={period} className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${period === 'Weekly' ? 'bg-[#576856] text-white shadow-lg' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}>
                {period}
              </button>
            ))}
          </div>
        </div>
        <div className="flex-1 min-h-[400px] flex items-end justify-center p-12 gap-4">
           {/* Mock engagement visualization */}
           {[40, 55, 65, 50, 75, 85, 95, 80, 70, 60, 85, 110, 100, 120, 140].map((h, i) => (
             <div key={i} className="flex-1 max-w-[40px] relative group cursor-pointer">
                <div className="absolute bottom-0 left-0 right-0 bg-gray-50 rounded-t-2xl h-full" />
                <div 
                  className={`absolute bottom-0 left-0 right-0 bg-[#576856] rounded-t-2xl transition-all duration-1000 group-hover:bg-[#4a5849]`} 
                  style={{ height: `${h / 1.5}%` }} 
                />
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-3 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
                  {Math.floor(h * 1.5)} Views
                </div>
             </div>
           ))}
        </div>
        <div className="p-8 bg-[#f4f5f2]/50 flex items-center justify-between">
           <div className="flex items-center gap-10">
              <div className="flex items-center gap-3">
                 <div className="w-3 h-3 rounded-full bg-[#576856]" />
                 <span className="text-sm font-bold text-gray-600">3D Interaction</span>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-3 h-3 rounded-full bg-gray-200" />
                 <span className="text-sm font-bold text-gray-600">Regular Photos</span>
              </div>
           </div>
           <button className="text-[#576856] font-bold text-sm hover:underline flex items-center gap-1 group">
             Detailed Analytics
             <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </button>
        </div>
      </div>
    </div>
  );
}
