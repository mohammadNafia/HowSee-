import { ArrowLeft, SlidersHorizontal, Heart, Check } from "lucide-react";
import React, { useState } from 'react';
import { FilterModal } from "./FilterModal";
const luxuryVillaImage = "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop";

interface PropertiesScreenProps {
  onBack: () => void;
  onPropertyClick: () => void;
}

const properties = [
  {
    id: 1,
    name: "Luxury Villa",
    location: "Beverly Hills, CA",
    price: "$19,999",
    image: luxuryVillaImage,
    liked: true,
  },
  {
    id: 2,
    name: "Emerald",
    location: "Malibu, CA",
    price: "$39,999",
    image: "https://images.unsplash.com/photo-1622015663381-d2e05ae91b72?w=400&h=300&fit=crop",
    liked: false,
  },
  {
    id: 3,
    name: "Bella Vista Villa",
    location: "Santa Monica, CA",
    price: "$39,999",
    image: "https://images.unsplash.com/photo-1760475244813-45b6807a0a72?w=400&h=300&fit=crop",
    liked: false,
  },
  {
    id: 4,
    name: "Harmony Villa",
    location: "Newport Beach, CA",
    price: "$59,999",
    image: "https://images.unsplash.com/photo-1760485524677-c7e00cc1c7b4?w=400&h=300&fit=crop",
    liked: false,
  },
  {
    id: 5,
    name: "Crest Villa",
    location: "Aspen, CO",
    price: "$39,999",
    image: "https://images.unsplash.com/photo-1739140019682-05bd100b5a5e?w=400&h=300&fit=crop",
    liked: false,
  },
  {
    id: 6,
    name: "Azure Villa",
    location: "Miami, FL",
    price: "$45,999",
    image: "https://images.unsplash.com/photo-1659720879195-d5a108231648?w=400&h=300&fit=crop",
    liked: false,
  },
];

export function PropertiesScreen({ onBack, onPropertyClick }: PropertiesScreenProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <div className="min-h-screen w-full bg-[#f4f5f2] flex flex-col">
      <div className="w-full max-w-[1400px] mx-auto flex-1 flex flex-col relative px-4 sm:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col gap-8 mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button 
                onClick={onBack}
                className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors border border-gray-100"
              >
                <ArrowLeft className="w-6 h-6 text-gray-800" strokeWidth={2.5} />
              </button>
              <h1 className="text-[32px] font-bold text-gray-900">Available Properties</h1>
            </div>
            <button 
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4 text-gray-800" strokeWidth={2.5} />
              <span className="font-bold text-sm text-gray-700">Filters</span>
            </button>
          </div>

          {/* Filter Pills */}
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
            {['All Properties', 'Apartment', 'Villa', 'Duplex', 'Penthouse', 'Cottage', 'Studio'].map((filter, i) => (
              <button 
                key={filter}
                className={`px-8 py-4 rounded-2xl text-[16px] font-semibold whitespace-nowrap shadow-sm transition-all ${
                  i === 0 ? 'bg-[#576856] text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-12">
          {properties.map((property) => (
            <div
              key={property.id}
              onClick={onPropertyClick}
              className="group bg-white rounded-[40px] overflow-hidden shadow-sm cursor-pointer hover:shadow-xl transition-all duration-300 border-4 border-white flex flex-col"
            >
              <div className="relative h-[280px] overflow-hidden rounded-[32px] m-2">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="text-2xl font-bold">{property.price}</div>
                    <div className="text-sm opacity-80">Per Month</div>
                  </div>
                </div>
                <button className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/30 hover:bg-white transition-colors">
                  <Heart
                    className={`w-6 h-6 ${property.liked ? 'fill-red-500 text-red-500' : 'text-white'}`}
                    strokeWidth={2}
                  />
                </button>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-[#576856] transition-colors">
                    {property.name}
                  </h3>
                  <p className="text-gray-400 mb-6 font-medium">
                    {property.location}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-50 pt-6">
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-gray-900 font-bold">3</div>
                      <div className="text-[10px] text-gray-400 uppercase font-bold">Beds</div>
                    </div>
                    <div className="w-px h-8 bg-gray-100"></div>
                    <div className="text-center">
                      <div className="text-gray-900 font-bold">2</div>
                      <div className="text-[10px] text-gray-400 uppercase font-bold">Baths</div>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-gray-900 text-white rounded-xl text-sm font-bold hover:bg-black transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FilterModal 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)} 
        onApply={() => setIsFilterOpen(false)} 
      />
    </div>
  );
}
