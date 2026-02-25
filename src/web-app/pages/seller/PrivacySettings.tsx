import React from 'react';
import { Shield, Lock, Eye, Bell, ShieldCheck, ArrowRight } from 'lucide-react';

export function PrivacySettings() {
  const sections = [
    {
      title: "Data Protection",
      desc: "Manage how your personal information is stored and shared.",
      icon: ShieldCheck,
      options: [
        { label: "Profile Visibility", desc: "Choose who can see your contact information", active: true },
        { label: "Two-Factor Authentication", desc: "Secure your account with an extra layer", active: false }
      ]
    },
    {
      title: "Activity Visibility",
      desc: "Control what others see about your platform interactions.",
      icon: Eye,
      options: [
        { label: "Show Online Status", desc: "Let users know when you are browsing", active: true },
        { label: "Public Portfolio", desc: "Allow users to see all your active listings", active: true }
      ]
    }
  ];

  return (
    <div className="p-8 pb-32 space-y-12 animate-in fade-in duration-700">
      <div>
        <h1 className="text-4xl font-black text-gray-900 tracking-tight">Privacy Settings</h1>
        <p className="text-gray-500 font-medium mt-2">Your data and privacy are our top priority.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {sections.map((section, idx) => (
          <div key={idx} className="bg-white rounded-[40px] p-10 border border-gray-100 shadow-sm space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#f4f5f2] rounded-3xl flex items-center justify-center text-[#576856] border border-gray-100">
                 <section.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                <p className="text-sm text-gray-400 font-medium">{section.desc}</p>
              </div>
            </div>

            <div className="space-y-6">
              {section.options.map((opt, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-[#f4f5f2]/50 rounded-[32px] border border-gray-50 group hover:border-[#576856]/20 transition-all">
                   <div className="max-w-[70%]">
                      <p className="font-bold text-gray-900">{opt.label}</p>
                      <p className="text-xs text-gray-400 font-medium leading-relaxed">{opt.desc}</p>
                   </div>
                   <div className={`w-14 h-8 rounded-full border-2 p-1 transition-all flex ${opt.active ? 'bg-[#576856] border-[#576856] justify-end' : 'bg-gray-100 border-gray-200 justify-start'}`}>
                      <div className="w-5 h-5 bg-white rounded-full shadow-sm" />
                   </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-900 rounded-[40px] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-800 shadow-2xl">
         <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-white border border-white/10">
               <Lock className="w-8 h-8" />
            </div>
            <div>
               <h3 className="text-xl font-bold">Request Personal Data</h3>
               <p className="text-sm text-gray-500 font-medium">Download a copy of all information we have stored.</p>
            </div>
         </div>
         <button className="px-10 py-5 bg-white text-gray-900 rounded-[24px] font-bold text-lg hover:bg-gray-100 transition-all shadow-xl flex items-center gap-2">
            Download Archive
            <ArrowRight className="w-5 h-5" />
         </button>
      </div>
    </div>
  );
}
