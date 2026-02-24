import React from 'react';
import { X, Search, MapPin, Home, DollarSign, SlidersHorizontal, Check } from 'lucide-react';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: () => void;
}

export function FilterModal({ isOpen, onClose, onApply }: FilterModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      <div className="relative bg-white w-full max-w-2xl rounded-[48px] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 border border-gray-100">
        <div className="p-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Advanced Filters</h2>
              <p className="text-gray-500 font-medium">Refine your property search</p>
            </div>
            <button 
              onClick={onClose}
              className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-10">
            {/* Property Type */}
            <section>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Property Type</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['House', 'Villa', 'Apartment', 'Penthouse', 'Cottage', 'Office'].map((type) => (
                  <button 
                    key={type}
                    className={`px-6 py-4 rounded-2xl font-bold text-sm border-2 transition-all ${
                      type === 'Villa' 
                        ? 'border-[#576856] bg-[#576856]/5 text-[#576856]' 
                        : 'border-gray-50 bg-gray-50 text-gray-500 hover:border-gray-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </section>

            {/* Price Range */}
            <section>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Price Range (Monthly)</h3>
              <div className="flex items-center gap-4">
                <div className="flex-1 px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3">
                  <span className="text-gray-400 font-bold">$</span>
                  <input type="text" placeholder="Min" className="bg-transparent border-none outline-none w-full font-bold text-gray-900 placeholder:text-gray-300" />
                </div>
                <div className="w-4 h-0.5 bg-gray-200" />
                <div className="flex-1 px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3">
                  <span className="text-gray-400 font-bold">$</span>
                  <input type="text" placeholder="Max" className="bg-transparent border-none outline-none w-full font-bold text-gray-900 placeholder:text-gray-300" />
                </div>
              </div>
            </section>

            {/* Rooms */}
            <section>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Bedrooms & Bathrooms</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-gray-50 p-2 rounded-2xl">
                  {['Any', '1+', '2+', '3+', '4+', '5+'].map((num) => (
                    <button 
                      key={num}
                      className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${
                        num === '3+' 
                          ? 'bg-white text-[#576856] shadow-sm' 
                          : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div className="mt-12 flex gap-4">
            <button 
              onClick={onClose}
              className="flex-1 py-5 bg-gray-50 text-gray-500 rounded-3xl font-bold hover:bg-gray-100 transition-all"
            >
              Reset All
            </button>
            <button 
              onClick={onApply}
              className="flex-[2] py-5 bg-[#576856] text-white rounded-3xl font-bold shadow-xl shadow-[#576856]/20 hover:bg-[#4a5849] transition-all flex items-center justify-center gap-3"
            >
              <Check className="w-5 h-5" />
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
