import { Check, Zap, Shield, Star, Globe, ArrowRight } from 'lucide-react';

export function PricingPage() {
  const plans = [
    {
      name: "Standard",
      price: "Free",
      desc: "For individual sellers starting out",
      features: ["5 Property Slots", "Basic 3D Viewer", "7-Day Listing Life", "Community Support"],
      button: "Current Plan",
      color: "bg-gray-100 text-gray-400 cursor-not-allowed",
      current: true
    },
    {
      name: "Professional",
      price: "$49",
      desc: "For active agents and power sellers",
      features: ["25 Property Slots", "AI Enhanced Tours", "30-Day Listing Life", "Premium Support", "Detailed Analytics", "Custom Branding"],
      button: "Upgrade Now",
      color: "bg-[#576856] text-white",
      popular: true
    },
    {
      name: "Agency",
      price: "$199",
      desc: "Comprehensive solution for teams",
      features: ["Unlimited Properties", "VR Production Tools", "Unlimited Listing Life", "Dedicated Support", "API Integration", "MLS Sync"],
      button: "Choose Agency",
      color: "bg-gray-900 text-white"
    }
  ];

  return (
    <div className="p-4 sm:p-8 space-y-8 sm:space-y-12 animate-in fade-in duration-700">
      <div className="text-center max-w-2xl mx-auto space-y-2 sm:space-y-4 pt-4 sm:pt-0">
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">Expand Your Reach</h1>
        <p className="text-sm sm:text-lg text-gray-500 font-medium leading-relaxed px-4">Select a plan that scales with your portfolio.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 pb-8 sm:pb-12">
        {plans.map((plan) => (
          <div 
            key={plan.name}
            className={`relative bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 border shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 ${plan.popular ? 'border-[#576856] ring-4 sm:ring-8 ring-[#576856]/5' : 'border-gray-100'} flex flex-col`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#576856] text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-widest shadow-lg whitespace-nowrap">
                Most Popular
              </div>
            )}

            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-1 sm:mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-xs sm:text-sm font-bold uppercase tracking-widest leading-relaxed opacity-60">{plan.desc}</p>
            </div>

            <div className="flex items-baseline gap-1 mb-8 sm:mb-10">
              <span className="text-4xl sm:text-5xl font-black text-gray-900">{plan.price}</span>
              {plan.price !== "Free" && <span className="text-gray-400 font-black">/mo</span>}
            </div>

            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-1">
              {plan.features.map((feat) => (
                <div key={feat} className="flex items-center gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-[#f4f5f2] flex items-center justify-center border border-gray-100 shrink-0">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#576856]" strokeWidth={3} />
                  </div>
                  <span className="text-gray-600 font-bold text-xs sm:text-sm tracking-tight">{feat}</span>
                </div>
              ))}
            </div>

            <button className={`w-full py-4 sm:py-5 ${plan.color} rounded-xl sm:rounded-[24px] font-black text-sm sm:text-lg transition-all shadow-xl shadow-gray-100 flex items-center justify-center gap-2 group uppercase tracking-widest`}>
              {plan.button}
              {!plan.current && <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />}
            </button>
          </div>
        ))}
      </div>

      <div className="bg-[#576856] rounded-3xl sm:rounded-[48px] p-8 sm:p-12 text-white relative overflow-hidden text-center md:text-left">
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-20" />
         <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="space-y-2 sm:space-y-4">
               <h3 className="text-2xl sm:text-3xl font-black text-white">Need a Custom Solution?</h3>
               <p className="text-white/60 font-bold text-xs sm:text-base max-w-md uppercase tracking-wide">Enterprise bespoke packages tailored for you.</p>
            </div>
            <button className="w-full md:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#576856] rounded-xl sm:rounded-[24px] font-black text-sm sm:text-lg hover:scale-105 transition-all shadow-2xl uppercase tracking-widest whitespace-nowrap">
               Contact Support
            </button>
         </div>
      </div>
    </div>
  );
}
