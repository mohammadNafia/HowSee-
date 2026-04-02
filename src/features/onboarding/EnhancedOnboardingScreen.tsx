import { Home } from "lucide-react";

interface EnhancedOnboardingScreenProps {
  onGetStarted: () => void;
}

export function EnhancedOnboardingScreen({ onGetStarted }: EnhancedOnboardingScreenProps) {
  return (
    <div className="min-h-screen w-full bg-[#f4f5f2] overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-screen w-full flex items-center justify-center">
        {/* Background Visuals */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#576856] to-[#3d5042]"></div>
        <div className="absolute inset-0 opacity-20">
           <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-white rounded-full blur-[160px] -translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-black rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 flex flex-col items-center">
          <div className="mb-12">
            <div className="w-24 h-24 bg-white rounded-[40px] flex items-center justify-center shadow-2xl mb-8 mx-auto transform hover:rotate-12 transition-transform duration-500">
              <Home className="w-12 h-12 text-[#576856]" strokeWidth={2.5} />
            </div>
            <h1 className="text-white text-[120px] font-bold text-center leading-[0.9] tracking-tighter mb-4">
              Howsee
            </h1>
            <div className="h-1 w-32 bg-white/20 mx-auto rounded-full mb-8"></div>
            <p className="text-white/80 text-[32px] text-center font-light max-w-2xl mx-auto leading-relaxed">
              Experience the future of property discovery. <br /> Elegant, curated, and uniquely yours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl">
            <button 
              onClick={onGetStarted}
              className="flex-1 bg-white text-[#576856] rounded-[32px] py-8 text-[24px] font-bold shadow-2xl hover:bg-gray-50 active:scale-95 transition-all"
            >
              Get Started
            </button>
            <button className="flex-1 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-[32px] py-8 text-[24px] font-bold hover:bg-white/20 transition-all">
              Watch Showcase
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/40">
           <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Discover More</span>
           <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="w-full max-w-[1400px] mx-auto px-8 py-32 grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { icon: "Find", title: "Smart Discovery", desc: "Our AI helps you find the perfect match based on your lifestyle and aesthetic preferences.", color: "bg-blue-500" },
          { icon: "Loc", title: "Premium Locations", desc: "Access exclusive listings in the world's most desired neighborhoods before they go public.", color: "bg-[#576856]" },
          { icon: "Price", title: "Seamless Finance", desc: "Transparent pricing and integrated mortgage tools to make your dream home a reality.", color: "bg-orange-500" }
        ].map((feat, i) => (
          <div key={i} className="group bg-white rounded-[48px] p-12 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-50">
            <div className={`w-20 h-20 ${feat.color} rounded-[32px] mb-8 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
               <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">{feat.title}</h3>
            <p className="text-gray-500 text-lg leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
