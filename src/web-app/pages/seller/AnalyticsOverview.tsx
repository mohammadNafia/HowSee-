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
    <div className="p-4 sm:p-8 space-y-6 sm:space-y-10 animate-in fade-in duration-700">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-2">Performance</h1>
          <p className="text-sm sm:text-base text-gray-500 font-medium">Tracking your property engagement and conversion metrics.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-3xl sm:rounded-[32px] p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all group">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className={`w-12 h-12 sm:w-14 sm:h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              {stat.change > 0 && (
                <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold">
                  <ArrowUp className="w-2 h-2 sm:w-3 sm:h-3" />
                  {stat.change}%
                </div>
              )}
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">{stat.value}</p>
              <p className="text-[10px] sm:text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-[32px] sm:rounded-[40px] border border-gray-100 shadow-sm overflow-hidden flex flex-col">
        <div className="p-6 sm:p-8 border-b border-gray-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900">Engagement Trends</h2>
            <p className="text-xs sm:text-sm text-gray-500 font-medium italic mt-1">127% more engagement with 3D Tours.</p>
          </div>
          <div className="flex gap-2">
            {['D', 'W', 'M'].map((period, i) => {
              const label = i === 0 ? 'Daily' : i === 1 ? 'Weekly' : 'Monthly';
              return (
                <button key={period} className={`px-3 sm:px-4 py-2 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all ${label === 'Weekly' ? 'bg-[#576856] text-white shadow-lg' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}>
                  <span className="hidden sm:inline">{label}</span>
                  <span className="sm:hidden">{period}</span>
                </button>
              );
            })}
          </div>
        </div>
        
        <div className="overflow-x-auto scrollbar-hide">
          <div className="min-w-[500px] h-[300px] sm:min-h-[400px] flex items-end justify-center p-8 sm:p-12 gap-2 sm:gap-4">
             {/* Mock engagement visualization */}
             {[40, 55, 65, 50, 75, 85, 95, 80, 70, 60, 85, 110, 100, 120, 140].map((h, i) => (
               <div key={i} className="flex-1 max-w-[40px] relative group cursor-pointer">
                  <div className="absolute bottom-0 left-0 right-0 bg-gray-50 rounded-t-xl sm:rounded-t-2xl h-full" />
                  <div 
                    className={`absolute bottom-0 left-0 right-0 bg-[#576856] rounded-t-xl sm:rounded-t-2xl transition-all duration-1000 group-hover:bg-[#4a5849]`} 
                    style={{ height: `${h / 1.5}%` }} 
                  />
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[8px] sm:text-[10px] font-bold px-2 py-1 sm:px-3 sm:py-2 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl z-10">
                    {Math.floor(h * 1.5)} Views
                  </div>
               </div>
             ))}
          </div>
        </div>

        <div className="p-6 sm:p-8 bg-[#f4f5f2]/50 flex flex-col sm:flex-row items-center justify-between gap-6">
           <div className="flex items-center gap-6 sm:gap-10">
              <div className="flex items-center gap-2 sm:gap-3">
                 <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#576856]" />
                 <span className="text-[10px] sm:text-sm font-bold text-gray-600 uppercase tracking-widest sm:normal-case">3D Interaction</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                 <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-300" />
                 <span className="text-[10px] sm:text-sm font-bold text-gray-600 uppercase tracking-widest sm:normal-case">Regular Photos</span>
              </div>
           </div>
           <button className="w-full sm:w-auto text-[#576856] font-black text-xs sm:text-sm hover:underline flex items-center justify-center gap-1 group uppercase tracking-widest sm:normal-case">
             Details
             <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </button>
        </div>
      </div>
    </div>
  );
}
