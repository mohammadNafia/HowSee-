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
    <div className="p-4 sm:p-8 pb-32 space-y-8 sm:space-y-12 animate-in fade-in duration-700">
      <div className="flex items-center justify-between px-2 sm:px-0">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">Billing</h1>
          <p className="text-sm sm:text-base text-gray-500 font-medium mt-1 sm:mt-2 hidden sm:block">Manage your plan and invoices.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        <div className="lg:col-span-2 space-y-6 sm:space-y-8">
          {/* Active Plan Card */}
          <div className="bg-[#576856] rounded-3xl sm:rounded-[40px] p-6 sm:p-10 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-20" />
            
            <div className="relative flex justify-between items-start mb-8 sm:mb-12">
              <div>
                <p className="text-white/60 font-black uppercase tracking-widest text-[9px] sm:text-[10px] mb-2">Active Subscription</p>
                <h2 className="text-2xl sm:text-3xl font-black">Professional Plan</h2>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border border-white/20">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
              </div>
            </div>

            <div className="relative flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <p className="text-3xl sm:text-4xl font-black mb-1 sm:mb-2">$49<span className="text-base sm:text-lg opacity-60">/mo</span></p>
                <p className="text-[10px] sm:text-xs font-bold opacity-60 uppercase tracking-widest">Next check: Nov 12, 2025</p>
              </div>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#576856] rounded-xl sm:rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-gray-50 transition-all shadow-xl text-sm sm:text-base uppercase tracking-widest">
                 Upgrade
              </button>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-3xl sm:rounded-[40px] p-6 sm:p-10 border border-gray-100 shadow-sm space-y-6 sm:space-y-8">
            <h3 className="text-xl sm:text-2xl font-black text-gray-900">Payment</h3>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 bg-[#f4f5f2]/50 rounded-2xl sm:rounded-3xl border border-gray-100 gap-4">
               <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-12 sm:w-16 h-8 sm:h-10 bg-gray-900 rounded-lg flex items-center justify-center text-white shrink-0">
                     <CreditCard className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-black text-gray-900 text-sm sm:text-base truncate">Visa •••• 8829</p>
                    <p className="text-[9px] sm:text-[10px] text-gray-400 font-black uppercase tracking-widest">Expires 12/28</p>
                  </div>
               </div>
               <button className="w-full sm:w-auto text-[#576856] font-black text-[10px] sm:text-xs hover:underline uppercase tracking-widest text-center">Update</button>
            </div>
            <button 
              onClick={() => navigate('/constructor/seller/billing/add-card')}
              className="flex items-center gap-2 text-gray-400 font-bold text-xs sm:text-sm hover:text-gray-900 transition-colors uppercase tracking-widest"
            >
               <Plus className="w-4 h-4" />
               <span>Add Method</span>
            </button>
          </div>
        </div>

        {/* Transaction History Column */}
        <div className="bg-white rounded-3xl sm:rounded-[40px] p-6 sm:p-10 border border-gray-100 shadow-sm space-y-6 sm:space-y-8 h-fit">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-black text-gray-900">History</h3>
            <div className="p-2 bg-[#f4f5f2] rounded-xl">
               <History className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {transactions.map((tx, i) => (
              <div key={i} className="flex items-center justify-between py-2 sm:py-4 border-b border-gray-50 last:border-0 group gap-4">
                <div className="min-w-0">
                  <p className="font-black text-gray-900 group-hover:text-[#576856] transition-colors text-sm sm:text-base truncate">{tx.type}</p>
                  <p className="text-[9px] sm:text-[10px] text-gray-400 font-black uppercase tracking-widest">{tx.date}</p>
                </div>
                <div className="text-right shrink-0">
                   <p className="font-black text-gray-900 text-sm sm:text-base">{tx.amount}</p>
                   <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-green-500">{tx.status}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full py-4 bg-[#f4f5f2] text-gray-500 rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm hover:bg-gray-200 transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
             All Activity
             <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
