import React, { useState } from 'react';
import { 
  Shield, 
  Lock, 
  Eye, 
  Bell, 
  ShieldCheck, 
  ArrowRight, 
  Smartphone, 
  Globe, 
  AlertTriangle,
  Fingerprint,
  Download,
  Trash2,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

export function PrivacySettings() {
  const [toggles, setToggles] = useState({
    visibility: true,
    twoFactor: false,
    onlineStatus: true,
    publicPortfolio: true,
    analytics: false
  });

  const toggle = (key: keyof typeof toggles) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="p-4 sm:p-8 pb-32 space-y-8 sm:space-y-12 animate-in fade-in duration-700 max-w-7xl mx-auto">
      {/* Header Section with Privacy Score */}
      <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#576856]/10 text-[#576856] rounded-full text-[10px] font-black uppercase tracking-widest border border-[#576856]/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            Security Verified
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">Privacy Center</h1>
          <p className="text-sm sm:text-lg text-gray-500 font-medium max-w-xl">
            Take full control of your digital footprint and secure your property assets.
          </p>
        </div>

        <div className="w-full lg:w-auto bg-white rounded-[32px] p-6 sm:p-8 border border-gray-100 shadow-sm flex items-center gap-6 sm:gap-10">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90">
              <circle cx="50%" cy="50%" r="42%" className="stroke-gray-100 fill-none" strokeWidth="8" />
              <circle cx="50%" cy="50%" r="42%" className="stroke-[#576856] fill-none" strokeWidth="8" strokeDasharray="264" strokeDashoffset="66" />
            </svg>
            <span className="absolute font-black text-xl sm:text-2xl text-gray-900">75%</span>
          </div>
          <div>
            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Privacy Score</h4>
            <p className="text-xs sm:text-sm font-bold text-gray-900 mb-2">Almost Secure</p>
            <button className="text-[10px] font-black text-[#576856] hover:underline uppercase tracking-widest flex items-center gap-1">
              Improve Now <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
        {/* Core Settings Column */}
        <div className="lg:col-span-2 space-y-8 sm:space-y-10">
          <div className="bg-white rounded-[40px] p-6 sm:p-10 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-[#f4f5f2] rounded-2xl flex items-center justify-center text-[#576856]">
                <Fingerprint className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-gray-900">Identity & Safety</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SettingCard 
                icon={Lock} 
                label="Two-Factor Auth" 
                desc="Extra layer of protection" 
                active={toggles.twoFactor} 
                onToggle={() => toggle('twoFactor')} 
              />
              <SettingCard 
                icon={Eye} 
                label="Public Profile" 
                desc="Visible to all visitors" 
                active={toggles.visibility} 
                onToggle={() => toggle('visibility')} 
              />
              <SettingCard 
                icon={Globe} 
                label="Online Status" 
                desc="Show current activity" 
                active={toggles.onlineStatus} 
                onToggle={() => toggle('onlineStatus')} 
              />
              <SettingCard 
                icon={ShieldAlert} 
                label="Safe Search" 
                desc="Filter sensitive deals" 
                active={toggles.analytics} 
                onToggle={() => toggle('analytics')} 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#576856] rounded-[40px] p-8 sm:p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-20" />
              <div className="relative space-y-6">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                  <Smartphone className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-2xl font-black mb-2">Mobile Tracking</h4>
                  <p className="text-white/60 font-medium text-sm leading-relaxed">Ensure your location data is only encrypted and visible to you.</p>
                </div>
                <button className="w-full py-4 bg-white text-[#576856] rounded-xl font-black text-sm uppercase tracking-widest hover:bg-gray-50 transition-all">
                  Manage Access
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-[40px] p-8 sm:p-10 border border-gray-100 flex flex-col justify-between group cursor-pointer hover:bg-white hover:shadow-xl transition-all">
               <div className="space-y-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-red-500">
                    <Trash2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-gray-900 group-hover:text-red-500 transition-colors">Emergency Deletions</h4>
                    <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mt-1">Total Account Wipeout</p>
                  </div>
               </div>
               <div className="flex items-center justify-between pt-6 border-t border-gray-200 mt-6">
                 <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Self Destruct</span>
                 <ArrowRight className="w-4 h-4 text-gray-300 group-hover:translate-x-1 transition-all" />
               </div>
            </div>
          </div>
        </div>

        {/* Side Actions Column */}
        <div className="space-y-8 h-fit">
          <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
            <h3 className="text-xl font-black text-gray-900">Data Archive</h3>
            <p className="text-xs text-gray-400 font-bold leading-relaxed uppercase tracking-widest">Download all your interactions, contracts, and property history in a secure ZIP.</p>
            <button className="w-full py-5 bg-[#f4f5f2] text-[#576856] rounded-2xl font-black text-[12px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#576856] hover:text-white transition-all group">
              <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              Request Backup
            </button>
          </div>

          <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
               <h3 className="text-xl font-black text-gray-900">Alerts</h3>
               <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
            </div>
            <div className="space-y-6">
               <AlertItem 
                icon={Smartphone} 
                title="iPhone 15 Pro" 
                time="Sign in • Just now" 
                location="Texas, USA" 
               />
               <AlertItem 
                icon={Globe} 
                title="Chrome (Mac)" 
                time="Sign in • 2h ago" 
                location="New York, NY" 
               />
            </div>
            <button className="w-full py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-[#576856] transition-colors flex items-center justify-center gap-1">
              View All Logs <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingCard({ icon: Icon, label, desc, active, onToggle }: any) {
  return (
    <div className={`p-6 rounded-[32px] border-2 transition-all group cursor-pointer ${
      active ? 'bg-[#576856]/5 border-[#576856]/10' : 'bg-gray-50/50 border-gray-100 hover:border-[#576856]/20'
    }`} onClick={onToggle}>
      <div className="flex items-center justify-between mb-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
          active ? 'bg-[#576856] text-white shadow-lg' : 'bg-white text-gray-400'
        }`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className={`w-12 h-6 rounded-full border-2 p-1 transition-all flex items-center ${
          active ? 'bg-[#576856] border-[#576856] justify-end' : 'bg-gray-100 border-gray-200 justify-start'
        }`}>
          <div className="w-3 h-3 bg-white rounded-full shadow-sm" />
        </div>
      </div>
      <div>
        <p className="font-black text-gray-900 text-sm mb-1">{label}</p>
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{desc}</p>
      </div>
    </div>
  );
}

function AlertItem({ icon: Icon, title, time, location }: any) {
  return (
    <div className="flex items-center justify-between group cursor-default">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-[#576856]/10 group-hover:text-[#576856] transition-all">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <p className="font-black text-gray-900 text-sm">{title}</p>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{time}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">{location}</p>
      </div>
    </div>
  );
}
