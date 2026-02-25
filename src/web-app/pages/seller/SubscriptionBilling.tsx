import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, History, Zap, ArrowUpRight, DollarSign, Plus } from 'lucide-react';

export function SubscriptionBilling() {
  const navigate = useNavigate();
  const [transactions] = useState([
    { date: "Oct 12, 2025", amount: "$49.00", status: "Paid", type: "Professional Plan" },
    { date: "Sep 12, 2025", amount: "$49.00", status: "Paid", type: "Professional Plan" },
    { date: "Aug 12, 2025", amount: "$49.00", status: "Paid", type: "Professional Plan" }
  ]);

  return (
    <div className="p-8 pb-32 space-y-12 animate-in fade-in duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Billing & Subscriptions</h1>
          <p className="text-gray-500 font-medium mt-2">Manage your current plan, payment methods, and invoices.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Active Plan Card */}
          <div className="bg-[#576856] rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            
            <div className="relative flex justify-between items-start mb-12">
              <div>
                <p className="text-white/60 font-bold uppercase tracking-widest text-[10px] mb-2">Active Subscription</p>
                <h2 className="text-3xl font-black">Professional Plan</h2>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20">
                <Zap className="w-6 h-6 fill-white" />
              </div>
            </div>

            <div className="relative flex items-end justify-between">
              <div>
                <p className="text-4xl font-black mb-2">$49<span className="text-lg opacity-60">/mo</span></p>
                <p className="text-sm font-bold opacity-60">Next billing on Nov 12, 2025</p>
              </div>
              <button className="px-8 py-4 bg-white text-[#576856] rounded-2xl font-bold flex items-center gap-2 hover:bg-gray-50 transition-all shadow-xl">
                 Upgrade Plan
              </button>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-[40px] p-10 border border-gray-100 shadow-sm space-y-8">
            <h3 className="text-xl font-bold">Payment Methods</h3>
            <div className="flex items-center justify-between p-6 bg-[#f4f5f2] rounded-3xl border border-gray-100">
               <div className="flex items-center gap-6">
                  <div className="w-16 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-white">
                     <CreditCard className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Visa ending in 8829</p>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">Expires 12/28</p>
                  </div>
               </div>
               <button className="text-[#576856] font-bold text-sm hover:underline uppercase tracking-widest">Edit</button>
            </div>
            <button 
              onClick={() => navigate('/constructor/seller/billing/add-card')}
              className="flex items-center gap-2 text-gray-400 font-bold text-sm hover:text-gray-900 transition-colors"
            >
               <Plus className="w-4 h-4" />
               <span>Add Card</span>
            </button>
          </div>
        </div>

        {/* Transaction History Column */}
        <div className="bg-white rounded-[40px] p-10 border border-gray-100 shadow-sm space-y-8 h-fit">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">History</h3>
            <div className="p-2 bg-[#f4f5f2] rounded-xl">
               <History className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="space-y-6">
            {transactions.map((tx, i) => (
              <div key={i} className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0 group">
                <div>
                  <p className="font-bold text-gray-900 group-hover:text-[#576856] transition-colors">{tx.type}</p>
                  <p className="text-xs text-gray-400 font-medium">{tx.date}</p>
                </div>
                <div className="text-right">
                   <p className="font-bold text-gray-900">{tx.amount}</p>
                   <span className="text-[9px] font-black uppercase tracking-widest text-green-500">{tx.status}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full py-4 bg-[#f4f5f2] text-gray-500 rounded-2xl font-bold text-sm hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
             View All Invoices
             <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
