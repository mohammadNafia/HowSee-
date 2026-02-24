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
    <div className="p-8 space-y-12 animate-in fade-in duration-700">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Expand Your Reach</h1>
        <p className="text-gray-500 font-medium text-lg leading-relaxed">Select a plan that scales with your property portfolio and offers the best tools for your business.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
        {plans.map((plan) => (
          <div 
            key={plan.name}
            className={`relative bg-white rounded-[40px] p-10 border shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 ${plan.popular ? 'border-[#576856] ring-8 ring-[#576856]/5' : 'border-gray-100'} flex flex-col`}
          >
            {plan.popular && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#576856] text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                Most Popular
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">{plan.desc}</p>
            </div>

            <div className="flex items-baseline gap-1 mb-10">
              <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
              {plan.price !== "Free" && <span className="text-gray-400 font-bold">/mo</span>}
            </div>

            <div className="space-y-4 mb-10 flex-1">
              {plan.features.map((feat) => (
                <div key={feat} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-[#f4f5f2] flex items-center justify-center border border-gray-100">
                    <Check className="w-3.5 h-3.5 text-[#576856]" strokeWidth={3} />
                  </div>
                  <span className="text-gray-600 font-bold text-sm tracking-tight">{feat}</span>
                </div>
              ))}
            </div>

            <button className={`w-full py-5 ${plan.color} rounded-[24px] font-bold text-lg transition-all shadow-xl shadow-gray-100 flex items-center justify-center gap-2 group`}>
              {plan.button}
              {!plan.current && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            </button>
          </div>
        ))}
      </div>

      <div className="bg-[#576856] rounded-[48px] p-12 text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
         <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4">
               <h3 className="text-3xl font-bold">Need a Custom Solution?</h3>
               <p className="text-white/70 font-medium max-w-md">Our team can craft a bespoke package tailored for large-scale enterprise requirements and specific integrations.</p>
            </div>
            <button className="px-10 py-5 bg-white text-[#576856] rounded-[24px] font-bold text-lg hover:bg-gray-50 transition-all shadow-2xl">
               Contact Support
            </button>
         </div>
      </div>
    </div>
  );
}
