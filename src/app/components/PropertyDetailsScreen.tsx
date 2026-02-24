import { ArrowLeft, SlidersHorizontal, Heart, Mail, Phone, Send, Calendar, MessageSquare, CheckCircle2 } from "lucide-react";
import React, { useState } from 'react';

const luxuryVillaImage = "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&h=900&fit=crop";

interface PropertyDetailsScreenProps {
  onBack: () => void;
}

export function PropertyDetailsScreen({ onBack }: PropertyDetailsScreenProps) {
  const [activeAction, setActiveAction] = useState<'none' | 'scheduled' | 'sent'>('none');
  const [message, setMessage] = useState("");

  const manager = {
    name: "Clovis Aucoin",
    group: "Luxe Realty Group",
    email: "clovis.aucoin@luxerealty.com",
    phone: "+1 (555) 789-1234",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
  };

  if (activeAction === 'scheduled') {
    return (
      <div className="min-h-screen bg-[#f4f5f2] flex items-center justify-center p-8">
        <div className="bg-white rounded-[48px] p-16 shadow-2xl border border-gray-100 max-w-2xl w-full text-center space-y-8 animate-in zoom-in-95 duration-500">
           <div className="w-24 h-24 bg-[#576856] rounded-[32px] flex items-center justify-center mx-auto shadow-xl shadow-[#576856]/20">
             <Calendar className="w-10 h-10 text-white" />
           </div>
           <h2 className="text-4xl font-bold text-gray-900">Request Confirmed</h2>
           <p className="text-xl text-gray-500 font-medium leading-relaxed">Your request to view <span className="text-gray-900 font-bold">Luxury Villa</span> has been sent to {manager.name}. They will contact you shortly.</p>
           <button 
             onClick={() => setActiveAction('none')}
             className="w-full py-5 bg-[#576856] text-white rounded-3xl font-bold text-lg hover:shadow-xl transition-all"
           >
             Return to details
           </button>
        </div>
      </div>
    );
  }

  if (activeAction === 'sent') {
    return (
      <div className="min-h-screen bg-[#f4f5f2] flex items-center justify-center p-8">
        <div className="bg-white rounded-[48px] p-16 shadow-2xl border border-gray-100 max-w-2xl w-full text-center space-y-8 animate-in zoom-in-95 duration-500">
           <div className="w-24 h-24 bg-[#576856] rounded-[32px] flex items-center justify-center mx-auto shadow-xl shadow-[#576856]/20">
             <MessageSquare className="w-10 h-10 text-white" />
           </div>
           <h2 className="text-4xl font-bold text-gray-900">Message Sent</h2>
           <p className="text-xl text-gray-500 font-medium leading-relaxed">Your message has been delivered to {manager.name}. Expect a response in your inbox soon.</p>
           <button 
             onClick={() => setActiveAction('none')}
             className="w-full py-5 bg-[#576856] text-white rounded-3xl font-bold text-lg hover:shadow-xl transition-all"
           >
             Return to details
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#f4f5f2] flex flex-col">
      <div className="w-full max-w-[1400px] mx-auto flex-1 flex flex-col relative px-4 sm:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={onBack}
            className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors border border-gray-100"
          >
            <ArrowLeft className="w-6 h-6 text-gray-800" strokeWidth={2.5} />
          </button>
          <div className="flex items-center gap-4">
            <button className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
              <Heart className="w-6 h-6 text-red-500 fill-red-500" strokeWidth={2} />
            </button>
            <button 
              onClick={() => setActiveAction('scheduled')}
              className="px-8 h-14 bg-[#576856] text-white rounded-2xl font-bold flex items-center justify-center shadow-xl hover:bg-[#4a5849] transition-all"
            >
              Schedule Viewing
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: Images & Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative aspect-[16/10] bg-white rounded-[48px] overflow-hidden shadow-sm border-[8px] border-white group">
              <img
                src={luxuryVillaImage}
                alt="Luxury Villa"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-8 left-8 flex gap-2">
                <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-gray-900 shadow-lg">New Listing</span>
                <span className="bg-[#576856]/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white shadow-lg">Verified</span>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
               {[1,2,3,4].map((i) => (
                 <div key={i} className="aspect-square bg-white rounded-3xl overflow-hidden shadow-sm border-4 border-white cursor-pointer hover:border-[#576856]/20 transition-all">
                   <img src={`https://images.unsplash.com/photo-1622015663381-d2e05ae91b72?w=300&h=300&fit=crop`} className="w-full h-full object-cover" />
                 </div>
               ))}
            </div>
          </div>

          {/* Right Side: Information */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-white rounded-[48px] p-10 shadow-sm border border-gray-100">
               <div className="flex items-center justify-between mb-2">
                 <h2 className="text-4xl font-bold text-gray-900">Luxury Villa</h2>
                 <div className="text-3xl font-bold text-[#576856]">$19,999</div>
               </div>
               <p className="text-gray-400 font-medium mb-8 leading-relaxed">
                 Where sophistication meets serenity crafted for those who appreciate true luxury. Experience breathtaking views and unparalleled comfort.
               </p>

               <div className="grid grid-cols-3 gap-4 mb-10">
                 {[
                   { label: "Bedrooms", value: "4", icon: "Bed" },
                   { label: "Bathrooms", value: "4", icon: "Bath" },
                   { label: "Square Ft", value: "2,900", icon: "Area" }
                 ].map((feat) => (
                    <div key={feat.label} className="bg-[#f8f9f7] rounded-3xl p-6 border border-gray-50">
                       <div className="text-2xl font-bold text-gray-900 mb-1">{feat.value}</div>
                       <div className="text-[10px] font-bold text-gray-400 capitalize uppercase tracking-widest">{feat.label}</div>
                    </div>
                 ))}
               </div>

               <div className="space-y-6">
                 <h3 className="text-xl font-bold text-gray-900">Amenities</h3>
                 <div className="flex flex-wrap gap-3">
                   {['Infinity Pool', 'Home Theater', 'Smart Home System', 'Wine Cellar', 'Ocean View', 'Private Gym'].map(tag => (
                     <span key={tag} className="px-5 py-3 bg-gray-50 rounded-2xl text-sm font-bold text-gray-600 border border-gray-100">{tag}</span>
                   ))}
                 </div>
               </div>
            </div>

            {/* Manager Info & Messaging */}
            <div className="bg-white rounded-[48px] p-10 shadow-sm border border-gray-100 space-y-8">
              <div className="flex items-center gap-6 pb-8 border-b border-gray-50">
                <div className="w-20 h-20 rounded-[28px] overflow-hidden shadow-lg shadow-[#576856]/10">
                  <img
                    src={manager.avatar}
                    alt={manager.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900">{manager.name}</h4>
                  <p className="text-[#576856] font-bold text-xs uppercase tracking-widest">{manager.group}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 text-gray-500 font-medium">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center"><Mail className="w-4 h-4 text-[#576856]" /></div>
                    <span>{manager.email}</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-500 font-medium">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center"><Phone className="w-4 h-4 text-[#576856]" /></div>
                    <span>{manager.phone}</span>
                  </div>
                </div>

                <div className="relative">
                  <textarea 
                    placeholder="Write a message to Clovis..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-6 bg-[#f4f5f2] rounded-3xl border border-gray-100 outline-none focus:ring-4 focus:ring-[#576856]/5 transition-all min-h-[140px] font-medium placeholder:text-gray-300"
                  />
                  <button 
                    onClick={() => setActiveAction('sent')}
                    disabled={!message.trim()}
                    className="absolute bottom-4 right-4 w-12 h-12 bg-[#576856] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-[#576856]/20 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-[48px] p-10 shadow-sm border border-gray-100 flex-1">
               <h3 className="text-xl font-bold text-gray-900 mb-6">Location Map</h3>
... (Location section continues)               <div className="aspect-video bg-[#f8f9f7] rounded-[32px] overflow-hidden relative border border-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#b8d5c4] to-[#f4f5f2]">
                    <div className="relative">
                      <div className="w-6 h-6 bg-red-500 rounded-full shadow-2xl border-4 border-white animate-bounce"></div>
                      <div className="absolute -bottom-8 -left-1/2 whitespace-nowrap bg-gray-900 text-white text-[10px] font-bold px-3 py-1 rounded-lg">Beverly Hills, CA</div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
