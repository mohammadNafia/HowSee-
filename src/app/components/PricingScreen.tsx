import React from 'react';
import { ArrowLeft, Check, Zap, Shield, Star, Globe } from 'lucide-react';

interface PricingScreenProps {
  onBack: () => void;
}

export function PricingScreen({ onBack }: PricingScreenProps) {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      desc: "Perfect for exploring the platform",
      features: ["5 Property Listings", "Basic 3D Viewer", "Standard Support", "Mobile App Access"],
      button: "Start for Free",
      color: "bg-gray-900"
    },
    {
      name: "Premium",
      price: "$29",
      desc: "Ideal for active property seekers",
      features: ["Unlimited Listings", "Advanced 3D Tours", "Priority Support", "VR Experience", "Ad-Free Browsing", "Verified Badge"],
      button: "Go Premium",
      color: "bg-[#576856]",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      desc: "For real estate agencies",
      features: ["Multiple Agent Seats", "Brand Integration", "API Access", "Custom Analytics", "Dedicated Manager"],
      button: "Contact Sales",
      color: "bg-gray-900"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-[#f4f5f2] flex flex-col pb-20">
      <div className="max-w-[1200px] mx-auto px-8 py-12 w-full">
        {/* Header */}
        <div className="flex items-center gap-6 mb-16">
          <button 
            onClick={onBack}
            className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors border border-gray-100"
          >
            <ArrowLeft className="w-6 h-6 text-gray-800" strokeWidth={2.5} />
          </button>
          <div>
            <h1 className="text-[40px] font-bold text-gray-900">Premium Plans</h1>
            <p className="text-gray-500 font-medium">Choose the perfect plan for your real estate journey</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative bg-white rounded-[48px] p-10 shadow-sm border ${plan.popular ? 'border-[#576856] ring-4 ring-[#576856]/5' : 'border-gray-100'} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#576856] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{plan.desc}</p>
              </div>

              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                {plan.price !== "Free" && <span className="text-gray-400 font-bold">/mo</span>}
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {plan.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
                      <Check className="w-4 h-4 text-[#576856]" strokeWidth={3} />
                    </div>
                    <span className="text-gray-600 font-medium">{feat}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 ${plan.color} text-white rounded-[24px] font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-gray-200`}>
                {plan.button}
              </button>
            </div>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 bg-white rounded-[48px] p-12 border border-gray-100 shadow-sm">
           <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-3xl flex items-center justify-center"><Shield className="w-8 h-8" /></div>
              <h4 className="text-xl font-bold text-gray-900">Secure Payments</h4>
              <p className="text-gray-500 font-medium">Encrypted transactions for your peace of mind</p>
           </div>
           <div className="flex flex-col items-center text-center gap-4 border-x border-gray-100 px-12">
              <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-3xl flex items-center justify-center"><Zap className="w-8 h-8" /></div>
              <h4 className="text-xl font-bold text-gray-900">Instant Activation</h4>
              <p className="text-gray-500 font-medium">Get access to premium features immediately</p>
           </div>
           <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-purple-50 text-purple-500 rounded-3xl flex items-center justify-center"><Globe className="w-8 h-8" /></div>
              <h4 className="text-xl font-bold text-gray-900">Global Coverage</h4>
              <p className="text-gray-500 font-medium">Access listings from around the world</p>
           </div>
        </div>
      </div>
    </div>
  );
}
