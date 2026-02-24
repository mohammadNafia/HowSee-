import React from 'react';
import { ArrowLeft, MapPin, Star, Shield, Mail, Phone, Home, Layers } from 'lucide-react';

interface PublicProfileScreenProps {
  onBack: () => void;
  isAdmin?: boolean;
}

export function PublicProfileScreen({ onBack, isAdmin }: PublicProfileScreenProps) {
  // Mock data for the demo
  const user = {
    name: "John Anderson",
    role: "Premium Member",
    email: "john.anderson@email.com",
    phone: "+1 (555) 000-0000",
    location: "Beverly Hills, CA",
    rating: 4.9,
    reviews: 128,
    bio: "Passionate real estate enthusiast and luxury property collector. I believe that home is where your story begins.",
    properties: [
      { id: 1, title: "Modern Lakefront Villa", price: "$4,800", location: "Seattle, WA", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" },
      { id: 2, title: "Grand Villa Royale", price: "$49k", location: "Beverly Hills, CA", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
      { id: 3, title: "Skyline Penthouse", price: "$12,500", location: "New York, NY", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80" }
    ]
  };

  return (
    <div className="min-h-screen w-full bg-[#f4f5f2] flex flex-col pb-20">
      {/* Cover Image & Header */}
      <div className="w-full h-80 bg-[#576856] relative">
        <div className="absolute inset-0 opacity-20">
           <div className="absolute top-10 right-10 w-64 h-64 border-4 border-white rounded-full translate-x-1/2 -translate-y-1/2" />
           <div className="absolute bottom-10 left-10 w-96 h-96 border-4 border-white rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-[1200px] mx-auto px-8 py-8 relative">
           <button 
             onClick={onBack}
             className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all"
           >
             <ArrowLeft className="w-5 h-5 text-white" strokeWidth={2.5} />
           </button>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-8 -mt-32 relative z-10 flex flex-col lg:flex-row gap-12">
        {/* Left Side: Profile Card */}
        <div className="lg:col-span-4 w-full lg:w-96">
          <div className="bg-white rounded-[48px] p-10 shadow-xl shadow-gray-200 border border-gray-100 flex flex-col items-center text-center">
            <div className="w-40 h-40 rounded-[48px] overflow-hidden bg-white p-1 shadow-2xl mb-8 -mt-24 ring-8 ring-[#f4f5f2]">
               <img 
                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" 
                 alt="Profile"
                 className="w-full h-full object-cover rounded-[44px]"
               />
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
              <Shield className="w-6 h-6 text-[#576856]" fill="currentColor" fillOpacity={0.1} />
            </div>
            <p className="text-[#576856] font-bold text-sm uppercase tracking-widest mb-6">{user.role}</p>
            
            <div className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-2xl border border-gray-100 mb-8">
              <Star className="w-4 h-4 text-orange-400 fill-current" />
              <span className="text-sm font-bold text-gray-900">{user.rating}</span>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <span className="text-sm font-bold text-gray-400">{user.reviews} Reviews</span>
            </div>

            <div className="w-full space-y-4 text-left">
              <div className="flex items-center gap-4 text-gray-600">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center"><Mail className="w-4 h-4" /></div>
                <span className="font-medium">{user.email}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center"><Phone className="w-4 h-4" /></div>
                <span className="font-medium">{user.phone}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center"><MapPin className="w-4 h-4" /></div>
                <span className="font-medium">{user.location}</span>
              </div>
            </div>

            <button className="w-full mt-10 py-5 bg-[#576856] text-white rounded-3xl font-bold hover:bg-[#4a5849] transition-all shadow-xl shadow-[#576856]/20">
              Send Message
            </button>
          </div>
        </div>

        {/* Right Side: Details & Listings */}
        <div className="flex-1 pt-12">
          <div className="flex flex-col gap-12">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-[#576856] rounded-full"></div>
                About {user.name.split(' ')[0]}
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed font-medium">
                {user.bio}
              </p>
            </section>

            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <div className="w-2 h-8 bg-[#576856] rounded-full"></div>
                  My Listings
                </h2>
                <span className="px-4 py-2 bg-white rounded-xl text-sm font-bold text-gray-500 border border-gray-100">{user.properties.length} Properties</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {user.properties.map(property => (
                  <div key={property.id} className="bg-white rounded-[40px] p-4 shadow-sm border border-gray-100 hover:shadow-xl transition-all group cursor-pointer">
                    <div className="aspect-[4/3] rounded-[32px] overflow-hidden mb-5">
                      <img src={property.image} alt={property.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="px-2">
                       <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#576856] transition-colors">{property.title}</h3>
                       <div className="flex items-center gap-2 text-gray-400 text-sm font-medium mb-4">
                         <MapPin className="w-4 h-4" />
                         <span>{property.location}</span>
                       </div>
                       <div className="flex items-center justify-between">
                         <div className="text-2xl font-black text-gray-900">{property.price}</div>
                         <button className="w-12 h-12 bg-[#f4f5f2] rounded-2xl flex items-center justify-center text-[#576856] hover:bg-[#576856] hover:text-white transition-colors">
                           <Layers className="w-5 h-5" />
                         </button>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
