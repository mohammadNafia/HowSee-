import React from 'react';
import { Settings, Shield, Bell, Globe, Database, Key, Layout, Save } from 'lucide-react';

export function AdminSettings() {
  const settingsGroups = [
    {
      title: "General Configuration",
      icon: Settings,
      description: "Basics of the platform behavior and interface settings.",
      settings: [
        { label: "Platform Name", value: "Howsee HQ", type: "text" },
        { label: "Support Email", value: "admin@howsee.com", type: "email" },
        { label: "Default Currency", value: "USD ($)", type: "select" },
      ]
    },
    {
      title: "Security & Access",
      icon: Shield,
      description: "Manage authentication protocols and admin permissions.",
      settings: [
        { label: "Two-Factor Auth", value: "Enabled", type: "toggle" },
        { label: "Session Timeout", value: "24 Hours", type: "select" },
        { label: "IP Whitelisting", value: "None", type: "text" },
      ]
    },
    {
      title: "System Status",
      icon: Database,
      description: "Infrastructure health and database connection status.",
      settings: [
        { label: "Database Version", value: "PostgreSQL 15.4", status: "Healthy" },
        { label: "API Latency", value: "24ms", status: "Healthy" },
        { label: "Storage Used", value: "4.2 TB / 10 TB", status: "Warning" },
      ]
    }
  ];

  return (
    <div className="max-w-5xl space-y-12 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Platform Settings</h1>
          <p className="text-gray-500 font-medium mt-2">Global configuration and administrative preferences.</p>
        </div>
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-[#576856] text-white rounded-xl sm:rounded-2xl font-bold shadow-xl shadow-[#576856]/20 hover:bg-[#4a5849] transition-all whitespace-nowrap text-sm sm:text-base">
          <Save className="w-4 h-4 sm:w-5 sm:h-5" />
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {settingsGroups.map((group, i) => {
          const Icon = group.icon;
          return (
            <div key={i} className="bg-white rounded-[40px] p-10 border border-gray-100 shadow-sm space-y-8">
               <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#f4f5f2] rounded-3xl flex items-center justify-center text-[#576856] border border-gray-100">
                     <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                     <h2 className="text-2xl font-black text-gray-900">{group.title}</h2>
                     <p className="text-gray-400 font-medium">{group.description}</p>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-gray-50">
                  {group.settings.map((s: any, idx) => (
                    <div key={idx} className="space-y-3">
                       <label className="text-xs font-black uppercase tracking-widest text-[#576856]">{s.label}</label>
                       {s.status ? (
                         <div className="flex items-center justify-between p-4 bg-[#f4f5f2] rounded-2xl border border-gray-100">
                           <span className="font-bold text-gray-900">{s.value}</span>
                           <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                             s.status === 'Healthy' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                           }`}>{s.status}</span>
                         </div>
                       ) : (
                         <div className="p-4 bg-[#f4f5f2] rounded-2xl border border-gray-100 font-bold text-gray-900 focus-within:ring-2 focus-within:ring-[#576856]/20 transition-all">
                           {s.value}
                         </div>
                       )}
                    </div>
                  ))}
               </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
