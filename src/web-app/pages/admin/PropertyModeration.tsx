import React, { useState } from 'react';
import { Search, CheckCircle2, XCircle, AlertCircle, Eye, Filter, ArrowUpRight } from 'lucide-react';

export function PropertyModeration() {
  const [properties] = useState([
    { id: 1, title: "Modern Beachfront Villa", seller: "Ocean Realty", price: "$1,200,000", status: "Review", listed: "2h ago" },
    { id: 2, title: "Downtown Luxury Loft", seller: "Urban Living", price: "$850,000", status: "Approved", listed: "5h ago" },
    { id: 3, title: "Classic Countryside Estate", seller: "Heritage Homes", price: "$2,400,000", status: "Rejected", listed: "1d ago" },
    { id: 4, title: "Minimalist Studio", seller: "Simple Spaces", price: "$320,000", status: "Review", listed: "2d ago" },
    { id: 5, title: "Mountain View Cabin", seller: "Peak Estates", price: "$590,000", status: "Approved", listed: "3d ago" },
  ]);

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Property Moderation</h1>
          <p className="text-gray-500 font-medium mt-2">Approve or reject property listings to maintain platform quality.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-white px-6 py-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
             <AlertCircle className="w-6 h-6 text-yellow-500" />
             <div>
               <p className="text-2xl font-black text-gray-900">42</p>
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Pending Review</p>
             </div>
          </div>
        </div>
      </div>

      {/* Grid of Pending Properties */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {properties.map((prop) => (
          <div key={prop.id} className="bg-white rounded-[40px] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
            <div className="flex gap-8">
              <div className="w-40 h-40 bg-[#f4f5f2] rounded-3xl overflow-hidden relative border border-gray-100 shrink-0">
                 <img src={`https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=400&fit=crop&q=80`} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute top-3 left-3">
                   <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                     prop.status === 'Approved' ? 'bg-green-100 text-green-600' : 
                     prop.status === 'Rejected' ? 'bg-red-100 text-red-600' : 
                     'bg-yellow-100 text-yellow-600'
                   }`}>
                     {prop.status}
                   </span>
                 </div>
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-black text-gray-900 group-hover:text-[#576856] transition-colors line-clamp-1">{prop.title}</h3>
                    <p className="text-sm font-bold text-gray-400">by <span className="text-[#576856] underline cursor-pointer">{prop.seller}</span></p>
                  </div>
                  <button className="p-2 bg-[#f4f5f2] rounded-xl text-gray-400 hover:text-gray-900 transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-black text-gray-900">{prop.price}</p>
                    <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mt-1">Listed {prop.listed}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="w-10 h-10 flex items-center justify-center bg-green-50 text-green-600 rounded-xl hover:bg-green-100 transition-all border border-green-100 shadow-sm" title="Approve">
                       <CheckCircle2 className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-all border border-red-100 shadow-sm" title="Reject">
                       <XCircle className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center bg-gray-50 text-gray-400 rounded-xl hover:bg-gray-100 transition-all border border-gray-100 shadow-sm" title="View Details">
                       <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12 pb-12">
        <button className="px-8 py-4 bg-white text-gray-500 font-bold rounded-2xl border border-gray-100 shadow-sm hover:bg-gray-50 transition-all uppercase tracking-widest text-xs">
          Load More Properties
        </button>
      </div>
    </div>
  );
}
