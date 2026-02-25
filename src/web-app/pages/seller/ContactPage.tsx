import React from 'react';
import { Mail, MessageSquare, Phone, MapPin, Send, ArrowRight, Instagram, Twitter, Linkedin } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="p-8 pb-32 space-y-12 animate-in fade-in duration-700">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-4xl font-black text-gray-900 tracking-tight">Support & Contact</h1>
        <p className="text-gray-500 font-medium text-lg leading-relaxed">Our dedicated support team is here to help you maximize your potential on Howsee.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1 space-y-8">
          {[
            { icon: MessageSquare, title: "Live Chat", value: "Typically replies in 5m", color: "bg-blue-50 text-blue-500" },
            { icon: Mail, title: "Our Email", value: "support@howsee.com", color: "bg-orange-50 text-orange-500" },
            { icon: Phone, title: "Direct Call", value: "+1 (888) 123-4567", color: "bg-green-50 text-green-500" }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm flex items-center gap-6 group hover:shadow-xl transition-all hover:-translate-y-1">
               <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center`}>
                  <item.icon className="w-6 h-6" />
               </div>
               <div>
                  <h4 className="font-bold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-400 font-medium">{item.value}</p>
               </div>
            </div>
          ))}

          <div className="bg-gray-900 rounded-[32px] p-8 text-white space-y-6">
             <h4 className="font-bold">Follow Our Community</h4>
             <div className="flex gap-4">
                {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <button key={i} className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-[#576856] transition-colors border border-white/10">
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
             </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-[40px] p-12 border border-gray-100 shadow-sm">
           <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h3>
              <p className="text-gray-400 font-medium">We usually respond within 2-4 business hours.</p>
           </div>

           <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-[#f4f5f2] border border-transparent focus:border-[#576856] rounded-2xl px-6 py-4 outline-none transition-all font-medium" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Work Email</label>
                    <input type="email" placeholder="john@company.com" className="w-full bg-[#f4f5f2] border border-transparent focus:border-[#576856] rounded-2xl px-6 py-4 outline-none transition-all font-medium" />
                 </div>
              </div>

              <div className="space-y-2">
                 <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Subject</label>
                 <select className="w-full bg-[#f4f5f2] border border-transparent focus:border-[#576856] rounded-2xl px-6 py-4 outline-none transition-all font-medium appearance-none">
                    <option>Technical Support</option>
                    <option>Billing Question</option>
                    <option>Partnership Inquiry</option>
                    <option>Other</option>
                 </select>
              </div>

              <div className="space-y-2">
                 <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Message</label>
                 <textarea placeholder="Describe how we can help..." rows={5} className="w-full bg-[#f4f5f2] border border-transparent focus:border-[#576856] rounded-2xl px-6 py-4 outline-none transition-all font-medium resize-none" />
              </div>

              <button className="w-full bg-[#576856] text-white py-5 rounded-[24px] font-bold text-lg shadow-xl shadow-[#576856]/20 hover:bg-[#4a5849] transition-all flex items-center justify-center gap-3 group">
                 Send Message
                 <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
           </form>
        </div>
      </div>
    </div>
  );
}
