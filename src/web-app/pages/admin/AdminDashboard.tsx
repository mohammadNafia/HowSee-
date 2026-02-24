import { Users, Home, BarChart3, TrendingUp, ArrowUpRight, ShieldCheck, Activity, Globe, MapPin } from 'lucide-react';

export function AdminDashboard() {
  const stats = [
    { label: 'Total Revenue', value: '$128,430', change: '+12.5%', icon: BarChart3, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Active Users', value: '12,843', change: '+18.2%', icon: Users, color: 'text-[#576856]', bg: 'bg-[#576856]/10' },
    { label: 'Total Properties', value: '452', change: '+5.4%', icon: Home, color: 'text-orange-600', bg: 'bg-orange-50' },
    { label: 'System Health', value: '99.9%', change: 'Stable', icon: ShieldCheck, color: 'text-purple-600', bg: 'bg-purple-50' }
  ];

  const recentActivity = [
    { user: 'Sarah Jenkins', action: 'New Property Listed', target: 'Luxury Villa in Malibu', time: '2 mins ago', avatar: 'https://i.pravatar.cc/150?u=1' },
    { user: 'Michael Chen', action: 'User Registration', target: 'Premium Seller', time: '15 mins ago', avatar: 'https://i.pravatar.cc/150?u=2' },
    { user: 'Emma Wilson', action: 'Verification Approved', target: 'Agent ID #824', time: '1 hour ago', avatar: 'https://i.pravatar.cc/150?u=3' },
    { user: 'David Miller', action: 'Subscription Updated', target: 'Enterprise Plan', time: '3 hours ago', avatar: 'https://i.pravatar.cc/150?u=4' }
  ];

  return (
    <div className="p-8 space-y-10 animate-in fade-in duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-2">Platform Overview</h1>
          <p className="text-gray-500 font-medium">Monitoring Howsee global operations and growth.</p>
        </div>
        <div className="flex gap-4">
           <button className="px-6 py-3 bg-white border border-gray-100 rounded-2xl font-bold text-gray-600 hover:bg-gray-50 transition-all flex items-center gap-2 shadow-sm">
             <Globe className="w-5 h-5 text-gray-400" />
             Global
           </button>
           <button className="px-6 py-3 bg-[#576856] text-white rounded-2xl font-bold hover:bg-[#4a5849] transition-all flex items-center gap-2 shadow-xl shadow-[#576856]/20">
             <Activity className="w-5 h-5" />
             Real-time
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all group">
            <div className="flex items-center justify-between mb-6">
              <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-7 h-7" />
              </div>
              <div className="flex items-center gap-1 text-green-600 bg-green-50 px-3 py-1 rounded-full text-xs font-bold">
                <TrendingUp className="w-3 h-3" />
                {stat.change}
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-gray-900 tracking-tight">{stat.value}</p>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-8 border-b border-gray-50 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Revenue Growth</h2>
            <div className="flex items-center gap-2 text-sm font-bold text-[#576856] uppercase tracking-widest bg-[#576856]/5 px-4 py-2 rounded-xl">
               Monthly View
            </div>
          </div>
          <div className="flex-1 min-h-[400px] flex items-center justify-center relative p-8">
             {/* Mock Chart Visualization */}
             <div className="w-full h-full flex items-end gap-3 px-4">
                {[45, 60, 55, 75, 90, 80, 70, 85, 95, 120, 110, 130].map((h, i) => (
                  <div key={i} className="flex-1 bg-gray-50 rounded-t-2xl relative group cursor-pointer hover:bg-[#576856]/10 transition-colors">
                    <div 
                      className={`absolute bottom-0 left-0 right-0 bg-[#576856] rounded-t-2xl transition-all duration-1000 group-hover:bg-[#4a5849]`} 
                      style={{ height: `${h}%` }} 
                    />
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      ${(h * 10).toLocaleString()}
                    </div>
                  </div>
                ))}
             </div>
          </div>
          <div className="p-8 bg-gray-50/50 flex items-center justify-between">
             <div className="flex items-center gap-8">
                <div>
                   <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Peak Value</p>
                   <p className="text-lg font-bold text-gray-900">$1,300,000</p>
                </div>
                <div>
                   <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Assets</p>
                   <p className="text-lg font-bold text-gray-900">$45.2M</p>
                </div>
             </div>
             <button className="text-[#576856] font-bold text-sm hover:underline flex items-center gap-1 group">
               View Full Report
               <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </button>
          </div>
        </div>

        <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-8 border-b border-gray-50">
            <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
          </div>
          <div className="flex-1 overflow-auto p-4 space-y-2">
            {recentActivity.map((activity, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-3xl hover:bg-gray-50 transition-colors group">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-transparent group-hover:border-[#576856]/20 transition-all">
                  <img src={activity.avatar} alt={activity.user} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-bold text-gray-900 truncate">{activity.user}</p>
                    <span className="text-[10px] font-bold text-gray-400">{activity.time}</span>
                  </div>
                  <p className="text-xs font-medium text-gray-500">
                    {activity.action} <span className="font-bold text-[#576856]">{activity.target}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-6 border-t border-gray-50">
             <button className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black transition-all">
               View All Audit Logs
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
