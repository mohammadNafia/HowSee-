import React from 'react';
import { BarChart3, TrendingUp, Users, Home, DollarSign, ArrowUpRight, ArrowDownRight, Layout } from 'lucide-react';

export function PlatformAnalytics() {
  const stats = [
    { label: "Total Revenue", value: "$428,590", change: "+12.5%", trend: "up", icon: DollarSign, color: "bg-green-500" },
    { label: "Active Listings", value: "2,482", change: "+5.2%", trend: "up", icon: Home, color: "bg-blue-500" },
    { label: "New Users", value: "1,124", change: "-2.1%", trend: "down", icon: Users, color: "bg-purple-500" },
    { label: "Total Visits", value: "54.2k", change: "+24.8%", trend: "up", icon: Layout, color: "bg-orange-500" },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20">
      <div>
        <h1 className="text-4xl font-black text-gray-900 tracking-tight">Platform Analytics</h1>
        <p className="text-gray-500 font-medium mt-2">Deep dive into platform performance, user engagement, and revenue growth.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-white rounded-[40px] p-8 border border-gray-100 shadow-sm relative overflow-hidden group">
               <div className={`absolute top-0 right-0 w-32 h-32 ${stat.color} opacity-[0.03] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700`} />
               
               <div className="flex items-center justify-between mb-8">
                  <div className={`w-14 h-14 ${stat.color} text-white rounded-2xl flex items-center justify-center shadow-lg shadow-gray-200`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className={`flex items-center gap-1 ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                    <span className="text-xs font-black uppercase tracking-widest">{stat.change}</span>
                  </div>
               </div>

               <div>
                 <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                 <h2 className="text-3xl font-black text-gray-900">{stat.value}</h2>
               </div>
            </div>
          );
        })}
      </div>

      {/* Charts Placeholder Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 bg-white rounded-[40px] p-10 border border-gray-100 shadow-sm space-y-8">
            <div className="flex items-center justify-between">
               <h3 className="text-xl font-black text-gray-900">Revenue Growth</h3>
               <select className="px-4 py-2 bg-[#f4f5f2] rounded-xl font-bold text-xs uppercase tracking-widest text-[#576856] border-none focus:ring-2 focus:ring-[#576856]/20">
                 <option>Last 30 Days</option>
                 <option>Last 6 Months</option>
                 <option>Year to Date</option>
               </select>
            </div>
            
            <div className="h-80 bg-[#f4f5f2] rounded-[32px] flex items-end justify-between p-8 gap-4 overflow-hidden border border-gray-100/50">
               {Array.from({ length: 12 }, (_, i) => (
                 <div key={i} className="flex-1 space-y-2">
                    <div 
                      className="w-full bg-[#576856] rounded-t-xl group-hover:bg-[#4a5849] transition-all relative group shadow-sm"
                      style={{ height: `${20 + Math.random() * 80}%` }}
                    >
                       <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                         ${(10 + Math.random() * 50).toFixed(1)}k
                       </div>
                    </div>
                    <div className="text-center text-[8px] font-black text-gray-400 uppercase tracking-tighter">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-[#576856] rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl shadow-[#576856]/40 flex flex-col justify-between">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
            
            <div className="relative">
              <TrendingUp className="w-10 h-10 mb-6 opacity-60" />
              <h3 className="text-2xl font-black mb-4">Market Share</h3>
              <p className="text-white/60 font-medium text-sm leading-relaxed">Your platform has grown by <span className="text-white font-black">18.4%</span> in the enterprise sector this quarter.</p>
            </div>

            <div className="relative space-y-6 pt-12">
               <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span>Direct Traffic</span>
                    <span>65%</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-white rounded-full w-[65%]" />
                  </div>
               </div>
               <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-white/60">
                    <span>Referral</span>
                    <span>35%</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-white/40 rounded-full w-[35%]" />
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
