import { Search, Home, Heart, Settings, Bell, MapPin, Star, Building2, Shield } from "lucide-react";
import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import { FilterModal } from "./FilterModal";

const featuredImage = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=900&fit=crop&q=100";

interface HomeScreenProps {
  onNavigateToProperties: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToAdmin?: () => void;
  onNavigateToConstructor?: () => void;
  isAdmin?: boolean;
  isConstructor?: boolean;
}

export function HomeScreen({ onNavigateToProperties, onNavigateToProfile, onNavigateToAdmin, onNavigateToConstructor, isAdmin, isConstructor }: HomeScreenProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#f4f5f2] flex flex-col pb-40">
      <div className="w-full max-w-[1400px] mx-auto flex-1 flex flex-col relative px-4 sm:px-8 py-8">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-8">
            <div className="w-16 h-16 flex items-center justify-center overflow-hidden">
               <img src={logo} alt="Howsee Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-[32px] font-bold text-gray-900 leading-tight">Howsee</h1>
              <p className="text-gray-500 text-base font-medium">Discover curated spaces for your next chapter</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            {isAdmin && (
              <button 
                onClick={onNavigateToAdmin}
                className="bg-[#576856] text-white px-8 h-14 rounded-2xl flex items-center justify-center gap-3 shadow-xl hover:bg-[#4a5849] transition-all transform hover:translate-y-[-2px] active:translate-y-0"
              >
                <Shield className="w-5 h-5" />
                <span className="text-[16px] font-bold">Admin Portal</span>
              </button>
            )}
            {isConstructor && (
              <button 
                onClick={onNavigateToConstructor}
                className="bg-[#576856] text-white px-8 h-14 rounded-2xl flex items-center justify-center gap-3 shadow-xl hover:bg-[#4a5849] transition-all transform hover:translate-y-[-2px] active:translate-y-0"
              >
                <Building2 className="w-5 h-5" />
                <span className="text-[16px] font-bold">Constructor Dashboard</span>
              </button>
            )}
            <div className="flex items-center gap-4 bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
              <button className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 rounded-xl transition-colors relative">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="w-px h-8 bg-gray-100"></div>
              <button 
                onClick={onNavigateToProfile}
                className="flex items-center gap-3 pl-2 pr-4 hover:bg-gray-50 rounded-xl transition-colors group"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#576856]/20 transition-all">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" 
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <span className="block text-sm font-bold text-gray-900">John Anderson</span>
                  <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">Premium Member</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar - No Categories */}
        <div className="flex flex-col gap-10 mb-12">
          <div className="max-w-3xl w-full mx-auto">
            <div className="bg-white rounded-[32px] p-2 pr-3 flex items-center gap-4 shadow-xl shadow-gray-200/50 border border-gray-100 group focus-within:ring-4 focus-within:ring-[#576856]/5 transition-all">
              <div className="pl-6 flex items-center gap-4 flex-1">
                <Search className="w-6 h-6 text-gray-400 group-focus-within:text-[#576856] transition-colors" />
                <input 
                  type="text" 
                  id="main-search-input"
                  placeholder="Search by location, neighborhood, or style..."
                  className="w-full bg-transparent outline-none text-[17px] text-gray-900 placeholder:text-gray-300 py-4 font-medium"
                />
              </div>
              <div className="w-px h-8 bg-gray-100"></div>
              <button 
                onClick={() => setIsFilterOpen(true)}
                className="px-4 flex items-center gap-2 cursor-pointer hover:bg-gray-50 py-2 rounded-xl transition-colors border-none bg-transparent"
              >
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-bold text-gray-500">Filters</span>
              </button>
              <button 
                onClick={onNavigateToProperties}
                className="bg-[#576856] text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-[#576856]/20 hover:bg-[#4a5849] transition-all"
              >
                Search Now
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Featured Property - Left Column (8 cols) */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                 <div className="w-2 h-8 bg-[#576856] rounded-full"></div>
                 Exclusive Marketplace
              </h2>
              <button className="text-[#576856] font-bold text-sm uppercase tracking-widest hover:underline">Explore All</button>
            </div>
            
            <div 
              onClick={onNavigateToProperties}
              className="relative rounded-[48px] overflow-hidden shadow-2xl group cursor-pointer border-[8px] border-white"
            >
              <img 
                src={featuredImage}
                alt="Featured property"
                className="w-full h-[640px] object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              <div className="absolute top-8 left-8 flex gap-3">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl text-xs font-bold text-white border border-white/20 uppercase tracking-widest">New Property</span>
                <span className="px-4 py-2 bg-[#576856] rounded-xl text-xs font-bold text-white shadow-lg uppercase tracking-widest">Verified</span>
              </div>

              <div className="absolute bottom-10 left-10 right-10">
                <div className="flex items-end justify-between">
                  <div className="max-w-md">
                    <h3 className="text-[52px] font-bold text-white mb-2 leading-tight">Modern Lakefront Villa</h3>
                    <div className="flex items-center gap-3 text-white/70 mb-6 font-medium">
                      <MapPin className="w-5 h-5" />
                      <span className="text-lg">123 Waterfront Drive, Seattle, WA</span>
                    </div>
                    <div className="flex gap-4">
                       <button className="px-8 h-14 bg-white text-gray-900 rounded-2xl font-bold hover:bg-gray-50 transition-all transform group-hover:translate-x-2">
                         View details
                       </button>
                       <div className="h-14 px-6 bg-white/20 backdrop-blur-md rounded-2xl flex items-center gap-3 border border-white/20">
                          <span className="text-white text-xl font-bold">$4,800</span>
                          <span className="text-white/60 text-xs font-bold uppercase tracking-widest">/ Month</span>
                       </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 grid grid-cols-2 gap-x-8 gap-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">4</div>
                      <span className="text-white/60 text-xs uppercase font-bold tracking-tighter">Beds</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">3</div>
                      <span className="text-white/60 text-xs uppercase font-bold tracking-tighter">Baths</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">3.2k</div>
                      <span className="text-white/60 text-xs uppercase font-bold tracking-tighter">Sqft</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">2</div>
                      <span className="text-white/60 text-xs uppercase font-bold tracking-tighter">Garage</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (4 cols) - Recommended List */}
          <div className="lg:col-span-4 flex flex-col pt-14">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Top Recommended</h2>
              <div className="flex gap-2">
                 <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-sm transition-all text-gray-400">
                   <Heart className="w-5 h-5" />
                 </button>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              {[1, 2, 3].map((item) => (
                <div 
                  key={item} 
                  onClick={onNavigateToProperties}
                  className="bg-white rounded-[40px] p-5 flex items-center gap-6 shadow-sm border border-gray-50 hover:shadow-xl transition-all cursor-pointer group hover:translate-x-2"
                >
                  <div className="w-28 h-28 rounded-[28px] overflow-hidden shrink-0 border-4 border-gray-50">
                    <img 
                      src={`https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=300&fit=crop&q=80&sig=${item}`}
                      alt="Grand Villa"
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 text-[#576856] mb-1">
                       <Star className="w-3 h-3 fill-current" />
                       <span className="text-[10px] font-black uppercase tracking-[0.2em]">Top Rated</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#576856] transition-colors mb-0.5">Grand Villa Royale</h3>
                    <p className="text-sm text-gray-400 font-medium mb-3">Beverly Hills, CA</p>
                    <div className="flex items-end gap-1">
                       <span className="text-2xl font-black text-gray-900">$49k</span>
                       <span className="text-[10px] text-gray-400 font-bold uppercase mb-1.5 whitespace-nowrap">/ Monthly</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={onNavigateToProperties}
              className="mt-10 w-full py-8 bg-gray-900 text-white rounded-[32px] font-bold shadow-2xl hover:bg-black transition-all flex items-center justify-center gap-4 group"
            >
              <span>Discover 150+ more</span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                 <Search className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Modern Floating Bottom Navigation Bar - Redesigned to match image inspiration */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-white/80 backdrop-blur-xl rounded-[40px] shadow-[0_15px_50px_-10px_rgba(0,0,0,0.15)] px-4 py-3 flex items-center gap-8 border border-white/40">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-14 h-14 bg-[#576856] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#576856]/30 transition-all transform hover:scale-110 active:scale-95"
          >
            <Home className="w-6 h-6" strokeWidth={2.5} />
          </button>
          
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="w-12 h-12 text-gray-400 hover:text-gray-900 transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center"
          >
            <Search className="w-6 h-6" strokeWidth={2.5} />
          </button>
          
          <button 
            onClick={onNavigateToProperties}
            className="w-12 h-12 text-gray-400 hover:text-gray-900 transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center"
          >
            <Heart className="w-6 h-6" strokeWidth={2.5} />
          </button>
          
          <button 
            onClick={onNavigateToProfile}
            className="w-12 h-12 text-gray-400 hover:text-gray-900 transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center"
          >
            <Settings className="w-6 h-6" strokeWidth={2.5} />
          </button>
        </div>
      </div>
      <FilterModal 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)} 
        onApply={() => {
          setIsFilterOpen(false);
          onNavigateToProperties();
        }}
      />
    </div>
  );
}