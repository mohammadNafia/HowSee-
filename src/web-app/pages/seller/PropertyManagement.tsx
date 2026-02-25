import React, { useState } from 'react';
import { Layers, MapPin, Home, Star, Plus, MoreVertical, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function PropertyManagement() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const [properties, setProperties] = useState([
    {
      id: 1,
      name: "Modern Lakefront Villa",
      location: "Seattle, WA",
      price: "$4,800",
      status: "Active",
      cardNumber: "4111 1111 8829",
      type: "Premium",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
    },
    {
      id: 2,
      name: "Urban Loft Downtown",
      location: "New York, NY",
      price: "$3,200",
      status: "Active",
      cardNumber: "5222 2222 4412",
      type: "Standard",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"
    },
    {
      id: 3,
      name: "Mountain Retreat",
      location: "Aspen, CO",
      price: "$5,500",
      status: "Under Review",
      cardNumber: "6011 0000 9090",
      type: "Premium",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
    }
  ]);

  return (
    <div className="p-8 pb-32 space-y-12 animate-in fade-in duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">My Properties</h1>
          <p className="text-gray-500 font-medium mt-2">Manage your listed property portfolio and active listings.</p>
        </div>
        <button 
          className="bg-[#576856] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 shadow-xl shadow-[#576856]/20 hover:scale-105 transition-all"
        >
          <Plus className="w-5 h-5" />
          <span>Add New</span>
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-10">
        {properties.map((prop) => (
          <div 
            key={prop.id}
            onMouseEnter={() => setHoveredId(prop.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative h-[280px] w-full perspective-1000"
          >
            <motion.div 
              className="relative w-full h-full preserve-3d transition-all duration-700"
              animate={{ rotateY: hoveredId === prop.id ? 180 : 0 }}
            >
              {/* Front Side */}
              <div className="absolute inset-0 backface-hidden bg-[#576856] rounded-[32px] overflow-hidden p-8 flex flex-col justify-between text-white shadow-2xl border border-white/10">
                <div className="absolute inset-0 opacity-20">
                   <img src={prop.image} className="w-full h-full object-cover grayscale" alt="" />
                   <div className="absolute inset-0 bg-gradient-to-br from-[#576856] to-transparent" />
                </div>
                
                <div className="relative flex justify-between items-start">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                    <Home className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-black tracking-widest bg-white/20 px-3 py-1 rounded-full">{prop.type}</span>
                  </div>
                </div>

                <div className="relative">
                  <p className="text-lg font-bold mb-1">
                    {prop.cardNumber?.replace(/\d(?=\d{4})/g, "*") || "**** **** **** ****"}
                  </p>
                  <h3 className="text-2xl font-black truncate">{prop.name}</h3>
                </div>

                <div className="relative flex justify-between items-end">
                   <div>
                      <p className="text-[10px] uppercase font-black text-white/50 tracking-tighter">Location</p>
                      <p className="font-bold">{prop.location}</p>
                   </div>
                   <div className="text-right">
                      <p className="text-[10px] uppercase font-black text-white/50 tracking-tighter">Price</p>
                      <p className="text-xl font-black">{prop.price}</p>
                   </div>
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 backface-hidden bg-gray-900 rounded-[32px] p-8 flex flex-col justify-between shadow-2xl border border-gray-800 rotate-y-180">
                <div className="h-12 w-full bg-black/50 -mx-8 mt-4" />
                
                <div className="flex flex-col gap-6">
                   <div className="bg-white/10 p-4 rounded-xl border border-white/5">
                      <p className="text-[10px] uppercase font-bold text-gray-500 tracking-widest mb-2">Management Options</p>
                      <div className="grid grid-cols-2 gap-4">
                         <button className="py-2 bg-white/10 hover:bg-[#576856] transition-colors rounded-lg text-xs font-bold text-white">Edit Details</button>
                         <button className="py-2 bg-white/10 hover:bg-[#576856] transition-colors rounded-lg text-xs font-bold text-white">Analytics</button>
                         <button className="py-2 bg-white/10 hover:bg-[#576856] transition-colors rounded-lg text-xs font-bold text-white">Promote</button>
                         <button className="py-2 bg-white/10 hover:bg-red-500/50 transition-colors rounded-lg text-xs font-bold text-white">Archive</button>
                      </div>
                   </div>
                </div>

                <div className="flex justify-between items-center bg-[#576856] p-4 rounded-xl">
                   <span className="text-xs font-bold text-white">Status: {prop.status}</span>
                   <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-glow" />
                </div>
              </div>
            </motion.div>
          </div>
        ))}

        <button 
          className="group h-[280px] border-4 border-dashed border-gray-100 rounded-[32px] flex flex-col items-center justify-center gap-4 hover:border-[#576856]/50 transition-all hover:bg-white/50"
        >
           <div className="w-16 h-16 rounded-3xl bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Plus className="w-8 h-8 text-gray-400 group-hover:text-[#576856]" />
           </div>
           <p className="font-bold text-gray-400 group-hover:text-[#576856]">Add Property</p>
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .shadow-glow { box-shadow: 0 0 10px rgba(74, 222, 128, 0.5); }
      `}} />
    </div>
  );
}
