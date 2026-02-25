import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Home, Camera, Box, ArrowRight, ArrowLeft, Upload, Check, Eye, X, Globe } from 'lucide-react';

export function PropertyUploadWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    neighborhood: '',
    street: '',
    images: [] as any[],
    panoramicImages: [] as any[]
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);
  const exitWizard = () => window.location.href = '/constructor/seller/properties';

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-gray-900">Property Details</h2>
              <p className="text-gray-500 font-medium tracking-tight">Tell us about the property you want to list.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-[#576856]">Property Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Modern Lakefront Villa"
                  className="w-full p-6 bg-white rounded-2xl border border-gray-100 shadow-sm focus:ring-2 focus:ring-[#576856]/20 transition-all font-bold"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-[#576856]">City Location</label>
                <div className="relative">
                  <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="text" 
                    placeholder="e.g. Seattle, WA"
                    className="w-full pl-16 pr-6 py-6 bg-white rounded-2xl border border-gray-100 shadow-sm focus:ring-2 focus:ring-[#576856]/20 transition-all font-bold"
                    value={formData.location}
                    onChange={e => setFormData({...formData, location: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6 bg-gray-50 p-8 rounded-[32px] border border-gray-100">
               <div className="flex items-center gap-3 mb-2">
                  <Globe className="w-5 h-5 text-[#576856]" />
                  <h3 className="font-bold text-gray-900 uppercase tracking-widest text-xs">Full Address Details</h3>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Neighborhood</label>
                  <input 
                    type="text" 
                    placeholder="Neighborhood name"
                    className="w-full p-4 bg-white rounded-xl border border-gray-100 font-medium"
                    value={formData.neighborhood}
                    onChange={e => setFormData({...formData, neighborhood: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Street Address</label>
                  <input 
                    type="text" 
                    placeholder="Street name & Number"
                    className="w-full p-4 bg-white rounded-xl border border-gray-100 font-medium"
                    value={formData.street}
                    onChange={e => setFormData({...formData, street: e.target.value})}
                  />
                </div>
               </div>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-gray-900">Standard Photos</h2>
              <p className="text-gray-500 font-medium tracking-tight">Upload high-quality images of the property interior and exterior.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-square border-4 border-dashed border-gray-100 rounded-[32px] flex flex-col items-center justify-center gap-3 hover:border-[#576856]/20 transition-all cursor-pointer bg-white">
                 <Camera className="w-8 h-8 text-gray-300" />
                 <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Add Photo</span>
              </div>
              {[1,2,3].map(i => (
                <div key={i} className="aspect-square bg-gray-100 rounded-[32px] relative group overflow-hidden border border-gray-100 shadow-sm">
                   <img src={`https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80&sig=${i}`} className="w-full h-full object-cover grayscale opacity-50" alt="" />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <X className="text-white w-6 h-6" />
                   </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="space-y-4">
               <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-1.5 rounded-full">
                  <Box className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Next-Gen Feature</span>
               </div>
              <h2 className="text-3xl font-black text-gray-900">360° Immersive Photos</h2>
              <p className="text-gray-500 font-medium tracking-tight">Upload panoramic images to create a virtual 3D tour for buyers.</p>
            </div>

            <div className="bg-[#576856] rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 text-center border-4 border-dashed border-white/20 relative overflow-hidden group">
               <div className="absolute inset-0 opacity-10 group-hover:scale-110 transition-transform duration-[2s]">
                  <img src="https://images.unsplash.com/photo-1622015663381-d2e05ae91b72?w=800&q=80" className="w-full h-full object-cover" alt="" />
               </div>
               <div className="relative space-y-4 sm:space-y-6">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 mx-auto shadow-2xl">
                    <Upload className="w-6 h-6 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-1 sm:mb-2">Drop Panoramic Images</h3>
                    <p className="text-white/60 font-bold uppercase tracking-widest text-[8px] sm:text-[10px]">JPG, PNG allowed (Up to 50MB)</p>
                  </div>
                  <button className="w-full sm:w-auto px-6 py-3 sm:px-10 sm:py-4 bg-white text-[#576856] rounded-xl sm:rounded-2xl font-black transition-all hover:scale-105 shadow-xl text-sm">
                     Select Files
                  </button>
               </div>
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-gray-900">Final Preview</h2>
              <p className="text-gray-500 font-medium tracking-tight">This is how your property will appear to potential buyers.</p>
            </div>

            {/* Mock Website Preview */}
            <div className="bg-white rounded-[32px] sm:rounded-[48px] border-4 sm:border-8 border-gray-100 overflow-hidden shadow-2xl relative">
               <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
                  <span className="bg-green-500 text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[8px] sm:text-[10px] font-black uppercase tracking-widest shadow-lg">New Listing</span>
               </div>
               <div className="h-[200px] sm:h-[300px] w-full bg-gray-200 relative">
                  <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80" className="w-full h-full object-cover" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 sm:p-10">
                     <div className="text-white">
                        <h3 className="text-2xl sm:text-4xl font-black">{formData.name || "Modern Villa"}</h3>
                        <p className="text-white/80 font-bold flex items-center gap-2 mt-1 sm:mt-2 text-xs sm:text-base">
                           <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                           {formData.neighborhood || "Area"}, {formData.location || "City"}
                        </p>
                     </div>
                  </div>
               </div>
               <div className="p-6 sm:p-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="space-y-1 sm:space-y-2">
                       <p className="text-[8px] sm:text-[10px] font-black text-gray-400 uppercase tracking-widest">Detail {i}</p>
                       <p className="font-bold text-gray-900 text-sm sm:text-base">Value</p>
                    </div>
                  ))}
               </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-3xl border border-yellow-100 flex gap-4 items-center">
               <div className="w-12 h-12 bg-yellow-400/20 rounded-2xl flex items-center justify-center shrink-0">
                  <Check className="w-6 h-6 text-yellow-600" />
               </div>
               <p className="text-sm font-bold text-yellow-800">You can still edit details after publishing from your property management dashboard.</p>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto p-4 sm:p-6 md:p-12 mb-32 md:mb-20 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8 md:mb-16">
        <button 
          onClick={exitWizard}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white rounded-2xl border border-gray-100 shadow-sm hover:bg-gray-50 transition-all font-bold text-red-500"
        >
          <X className="w-4 h-4" />
          <span className="uppercase tracking-widest text-[10px]">Cancel</span>
        </button>

        <div className="flex items-center gap-2 sm:gap-3">
          {[1, 2, 3, 4].map(i => (
            <div 
              key={i} 
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-500 font-bold text-xs sm:text-sm ${
                step >= i ? 'bg-[#576856] text-white shadow-lg' : 'bg-white text-gray-300 border border-gray-100'
              }`}
            >
              {step > i ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : i}
            </div>
          ))}
        </div>
      </div>

      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>
      </div>

      {/* Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-4 sm:p-6 border-t border-gray-100 z-50">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-3 sm:gap-6">
          <button 
            onClick={prevStep}
            disabled={step === 1}
            className={`flex items-center justify-center gap-2 px-4 py-3 sm:px-8 sm:py-5 rounded-xl sm:rounded-2xl font-bold transition-all text-xs sm:text-base flex-1 sm:flex-none ${
              step === 1 ? 'opacity-0 pointer-events-none' : 'bg-white border border-gray-100 shadow-sm hover:bg-gray-50 text-gray-600'
            }`}
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Back</span>
          </button>

          {step < 4 ? (
            <button 
              onClick={nextStep}
              className="flex items-center justify-center gap-2 px-6 py-3 sm:px-12 sm:py-5 bg-[#576856] text-white rounded-xl sm:rounded-3xl font-bold shadow-xl shadow-[#576856]/30 hover:scale-[1.02] active:scale-95 transition-all text-xs sm:text-base flex-[2] sm:flex-none"
            >
              <span>Next Step</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          ) : (
            <div className="flex items-center gap-2 sm:gap-4 flex-[3] sm:flex-none">
               <button 
                onClick={() => setStep(1)}
                className="flex items-center justify-center gap-2 px-3 py-3 sm:px-8 sm:py-5 bg-white border border-gray-100 text-gray-900 rounded-xl sm:rounded-3xl font-bold shadow-sm hover:bg-gray-50 transition-all text-xs sm:text-base flex-1"
              >
                <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Edit</span>
              </button>
              <button 
                onClick={exitWizard}
                className="flex items-center justify-center gap-2 px-4 py-3 sm:px-12 sm:py-5 bg-[#576856] text-white rounded-xl sm:rounded-3xl font-bold shadow-xl shadow-[#576856]/40 hover:scale-[1.02] active:scale-95 transition-all text-xs sm:text-base flex-[2]"
              >
                <Upload className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Publish</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
