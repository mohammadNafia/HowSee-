import React, { useState } from 'react';
import { ArrowLeft, User, Mail, Phone, MapPin, Bell, Lock, Heart, CreditCard, HelpCircle, LogOut, ChevronRight, Camera, Shield, Check, X, Building2 } from "lucide-react";

interface ProfileSettingsScreenProps {
  onBack: () => void;
  onLogout: () => void;
  onNavigateToPublicProfile: () => void;
  isAdmin?: boolean;
  isConstructor?: boolean;
}

export function ProfileSettingsScreen({ onBack, onLogout, onNavigateToPublicProfile, isAdmin, isConstructor }: ProfileSettingsScreenProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "John Anderson",
    email: "john.anderson@email.com",
    phone: "+1 (555) 000-0000",
    location: "Beverly Hills, CA"
  });

  const handleSave = () => {
    setIsEditing(false);
    // TODO: Implement actual save logic
  };

  return (
    <div className="min-h-screen w-full bg-[#f4f5f2] flex flex-col">
      <div className="w-full max-w-[1200px] mx-auto flex-1 flex flex-col relative px-4 sm:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-6">
            <button 
              onClick={onBack}
              className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors border border-gray-100"
            >
              <ArrowLeft className="w-6 h-6 text-gray-800" strokeWidth={2.5} />
            </button>
            <h1 className="text-[32px] font-bold text-gray-900">Account Settings</h1>
          </div>
          <div className="flex items-center gap-4">
             {isAdmin && (
                <button 
                  onClick={() => window.location.href = '/constructor/admin/dashboard'}
                  className="bg-[#576856] text-white px-8 h-14 rounded-2xl flex items-center justify-center gap-3 shadow-xl hover:bg-[#4a5849] transition-all"
                >
                  <Shield className="w-5 h-5" />
                  <span className="text-[16px] font-bold">Admin Portal</span>
                </button>
              )}
             {isConstructor && (
                <button 
                  onClick={() => window.location.href = '/constructor/seller/overview'}
                  className="bg-[#576856] text-white px-8 h-14 rounded-2xl flex items-center justify-center gap-3 shadow-xl hover:bg-[#4a5849] transition-all"
                >
                  <Building2 className="w-5 h-5" />
                  <span className="text-[16px] font-bold">Constructor Dashboard</span>
                </button>
              )}
            <button 
              onClick={onLogout}
              className="px-8 h-14 bg-white text-red-500 rounded-2xl flex items-center justify-center gap-3 shadow-sm border border-red-100 hover:bg-red-50 transition-all font-bold"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100 sticky top-12">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-[40px] overflow-hidden bg-gradient-to-br from-[#576856] to-[#7a8d79] p-1 shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop" 
                      alt="Profile"
                      className="w-full h-full object-cover rounded-[36px]"
                    />
                  </div>
                  <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-xl border border-gray-100 hover:bg-gray-50 transition-colors">
                    <Camera className="w-5 h-5 text-[#576856]" strokeWidth={2.5} />
                  </button>
                </div>
                
                {isEditing ? (
                  <div className="w-full space-y-4">
                    <input 
                      type="text" 
                      value={profileData.name}
                      onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 font-bold text-center outline-none focus:ring-2 focus:ring-[#576856]/20"
                    />
                    <input 
                      type="email" 
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 font-medium text-center text-gray-500 outline-none focus:ring-2 focus:ring-[#576856]/20"
                    />
                  </div>
                ) : (
                  <>
                    <h2 className="text-3xl font-bold text-gray-900 mb-1">{profileData.name}</h2>
                    <p className="text-gray-500 font-medium tracking-wide">{profileData.email}</p>
                  </>
                )}
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { label: "Saved", value: "12" },
                  { label: "Visits", value: "5" },
                  { label: "Chats", value: "2" }
                ].map((stat) => (
                  <div key={stat.label} className="text-center bg-[#f8f9f7] rounded-3xl py-4 border border-gray-50">
                    <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                 {isEditing ? (
                   <div className="flex gap-3">
                     <button 
                       onClick={handleSave}
                       className="flex-1 py-4 bg-[#576856] text-white rounded-2xl font-bold hover:bg-[#4a5849] transition-colors flex items-center justify-center gap-2"
                     >
                       <Check className="w-5 h-5" /> Save
                     </button>
                     <button 
                       onClick={() => setIsEditing(false)}
                       className="w-14 py-4 bg-gray-100 text-gray-500 rounded-2xl font-bold hover:bg-gray-200 transition-colors flex items-center justify-center"
                     >
                       <X className="w-5 h-5" />
                     </button>
                   </div>
                 ) : (
                   <button 
                     onClick={() => setIsEditing(true)}
                     className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black transition-colors"
                   >
                     Edit Profile
                   </button>
                 )}
                 <button 
                   onClick={onNavigateToPublicProfile}
                   className="w-full py-4 bg-white text-gray-700 border border-gray-200 rounded-2xl font-bold hover:bg-gray-50 transition-colors"
                 >
                   View Public Profile
                 </button>
              </div>
            </div>
          </div>

          {/* Right Column: Settings Sections */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Account Settings Group */}
            <div className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-2 h-2 bg-[#576856] rounded-full"></div>
                Account & Preferences
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: User, title: "Personal Info", desc: "Update your details", color: "bg-blue-50 text-blue-600" },
                  { icon: Bell, title: "Notifications", desc: "Manage your alerts", color: "bg-orange-50 text-orange-600" },
                  { icon: Lock, title: "Security", desc: "Password and safety", color: "bg-purple-50 text-purple-600" },
                  { icon: MapPin, title: "Shipping", desc: "Your primary address", color: "bg-green-50 text-green-600" },
                  { icon: Heart, title: "Wishlist", desc: "Your favorite properties", color: "bg-red-50 text-red-600" },
                  { icon: CreditCard, title: "Payments", desc: "Cards and billing", color: "bg-teal-50 text-teal-600" },
                ].map((item) => (
                  <button key={item.title} className="flex items-center gap-5 p-4 rounded-[28px] hover:bg-gray-50 transition-all group border border-transparent hover:border-gray-100">
                    <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center shrink-0`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-bold text-gray-900">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.desc}</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-300 ml-auto group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>

            {/* Support Group */}
            <div className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100">
               <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-2 h-2 bg-[#576856] rounded-full"></div>
                Support & Legal
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <button className="flex items-center gap-5 p-4 rounded-[28px] hover:bg-gray-50 transition-all group border border-transparent hover:border-gray-100 text-left w-full">
                    <div className="w-14 h-14 bg-gray-100 text-gray-600 rounded-2xl flex items-center justify-center shrink-0">
                      <HelpCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">Help Center</div>
                      <div className="text-sm text-gray-500">FAQs and support</div>
                    </div>
                 </button>
                 <button className="flex items-center gap-5 p-4 rounded-[28px] hover:bg-gray-50 transition-all group border border-transparent hover:border-gray-100 text-left w-full">
                    <div className="w-14 h-14 bg-gray-100 text-gray-600 rounded-2xl flex items-center justify-center shrink-0">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">Privacy Policy</div>
                      <div className="text-sm text-gray-500">How we use your data</div>
                    </div>
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
