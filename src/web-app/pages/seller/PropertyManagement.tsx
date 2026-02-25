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
    <div className="p-4 sm:p-8 pb-32 space-y-8 sm:space-y-12 animate-in fade-in duration-700">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 px-2 sm:px-0">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">My Properties</h1>
          <p className="text-sm sm:text-base text-gray-500 font-medium mt-1 sm:mt-2">Manage your property portfolio.</p>
        </div>
        <button 
          onClick={() => window.location.href = '/constructor/seller/upload'}
          className="bg-[#576856] text-white px-6 py-4 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-black flex items-center justify-center gap-2 shadow-xl shadow-[#576856]/20 hover:scale-105 transition-all w-full sm:w-auto uppercase tracking-widest text-sm"
        >
          <Plus className="w-5 h-5" />
          <span>Add New</span>
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 sm:gap-10">
        {properties.map((prop) => (
          <div 
            key={prop.id}
            onMouseEnter={() => setHoveredId(prop.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative h-[280px] sm:h-[300px] w-full perspective-1000"
          >
            <motion.div 
              className="relative w-full h-full preserve-3d transition-all duration-700"
              animate={{ rotateY: hoveredId === prop.id ? 180 : 0 }}
            >
              {/* Front Side */}
              <div className="absolute inset-0 backface-hidden bg-[#576856] rounded-3xl sm:rounded-[32px] overflow-hidden p-6 sm:p-8 flex flex-col justify-between text-white shadow-2xl border border-white/10">
                <div className="absolute inset-0 opacity-20">
                   <img src={prop.image} className="w-full h-full object-cover grayscale" alt="" />
                   <div className="absolute inset-0 bg-gradient-to-br from-[#576856] to-transparent" />
                </div>
                
                <div className="relative flex justify-between items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                    <Home className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-right">
                    <span className="text-[8px] sm:text-[10px] uppercase font-black tracking-widest bg-white/20 px-2 sm:px-3 py-1 rounded-full">{prop.type}</span>
                  </div>
                </div>

                <div className="relative">
                  <p className="text-base sm:text-lg font-bold mb-1 opacity-50">
                    {prop.cardNumber?.replace(/\d(?=\d{4})/g, "*") || "**** **** **** ****"}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-black truncate">{prop.name}</h3>
                </div>

                <div className="relative flex justify-between items-end">
                   <div>
                      <p className="text-[8px] sm:text-[10px] uppercase font-black text-white/50 tracking-tighter">Location</p>
                      <p className="font-bold text-sm sm:text-base">{prop.location}</p>
                   </div>
                   <div className="text-right">
                      <p className="text-[8px] sm:text-[10px] uppercase font-black text-white/50 tracking-tighter">Price</p>
                      <p className="text-xl sm:text-2xl font-black">{prop.price}</p>
                   </div>
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 backface-hidden bg-gray-900 rounded-3xl sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-between shadow-2xl border border-gray-800 rotate-y-180">
                <div className="h-10 sm:h-12 w-full bg-black/50 -mx-6 sm:-mx-8 mt-2 sm:mt-4" />
                
                <div className="flex flex-col gap-4 sm:gap-6">
                   <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                      <p className="text-[8px] sm:text-[10px] uppercase font-black text-gray-500 tracking-widest mb-3">Management</p>
                      <div className="grid grid-cols-2 gap-2 sm:gap-4">
                         <button className="py-2.5 bg-white/5 hover:bg-[#576856] transition-colors rounded-lg text-[10px] sm:text-xs font-black uppercase tracking-widest text-white">Edit</button>
                         <button className="py-2.5 bg-white/5 hover:bg-[#576856] transition-colors rounded-lg text-[10px] sm:text-xs font-black uppercase tracking-widest text-white">Stats</button>
                         <button className="py-2.5 bg-white/5 hover:bg-[#576856] transition-colors rounded-lg text-[10px] sm:text-xs font-black uppercase tracking-widest text-white">Ad</button>
                         <button className="py-2.5 bg-white/5 hover:bg-red-500/50 transition-colors rounded-lg text-[10px] sm:text-xs font-black uppercase tracking-widest text-white">Bin</button>
                      </div>
                   </div>
                </div>

                <div className="flex justify-between items-center bg-[#576856] p-3 sm:p-4 rounded-xl">
                   <span className="text-[10px] sm:text-xs font-black text-white uppercase tracking-widest">Status: {prop.status}</span>
                   <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse shadow-glow" />
                </div>
              </div>
            </motion.div>
          </div>
        ))}

        <button 
          onClick={() => window.location.href = '/constructor/seller/upload'}
          className="group h-[280px] sm:h-[300px] border-4 border-dashed border-gray-100 rounded-3xl sm:rounded-[32px] flex flex-col items-center justify-center gap-4 hover:border-[#576856]/50 transition-all hover:bg-white/50"
        >
           <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 group-hover:text-[#576856]" />
           </div>
           <p className="font-black text-sm sm:text-base text-gray-400 group-hover:text-[#576856] uppercase tracking-widest">Add Property</p>
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
