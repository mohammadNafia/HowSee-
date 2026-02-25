import React, { useState } from 'react';
import { Search, UserPlus, MoreVertical, Shield, Mail, Phone, Calendar, Filter } from 'lucide-react';

export function UserManagement() {
  const [users] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Seller", status: "Active", joined: "Oct 12, 2025" },
    { id: 2, name: "Sarah Smith", email: "sarah@example.com", role: "Buyer", status: "Active", joined: "Oct 15, 2025" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Seller", status: "Pending", joined: "Oct 18, 2025" },
    { id: 4, name: "Emma Wilson", email: "emma@example.com", role: "Buyer", status: "Inactive", joined: "Oct 20, 2025" },
    { id: 5, name: "Alex Brown", email: "alex@example.com", role: "Seller", status: "Active", joined: "Oct 22, 2025" },
  ]);

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">User Management</h1>
          <p className="text-gray-500 font-medium mt-2">Manage all registered users, roles, and account statuses.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-4 bg-[#576856] text-white rounded-2xl font-bold shadow-xl shadow-[#576856]/20 hover:bg-[#4a5849] transition-all whitespace-nowrap">
          <UserPlus className="w-5 h-5" />
          Add New User
        </button>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search users by name, email or ID..."
            className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#576856]/20 transition-all font-medium"
          />
        </div>
        <button className="flex items-center gap-2 px-6 py-4 bg-white text-gray-600 rounded-2xl font-bold border border-gray-100 shadow-sm hover:bg-gray-50 transition-all">
          <Filter className="w-5 h-5" />
          More Filters
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#f4f5f2] border-b border-gray-100">
                <th className="px-8 py-6 text-left text-xs font-black uppercase tracking-widest text-gray-400">User</th>
                <th className="px-8 py-6 text-left text-xs font-black uppercase tracking-widest text-gray-400">Role</th>
                <th className="px-8 py-6 text-left text-xs font-black uppercase tracking-widest text-gray-400">Status</th>
                <th className="px-8 py-6 text-left text-xs font-black uppercase tracking-widest text-gray-400">Joined Date</th>
                <th className="px-8 py-6 text-right text-xs font-black uppercase tracking-widest text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#f4f5f2] flex items-center justify-center font-bold text-[#576856] text-lg border border-gray-100">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 group-hover:text-[#576856] transition-colors">{user.name}</p>
                        <p className="text-xs text-gray-400 font-medium">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-gray-100 text-gray-600">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                      user.status === 'Active' ? 'bg-green-100 text-green-600' : 
                      user.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' : 
                      'bg-red-100 text-red-600'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 font-medium text-gray-500 text-sm">
                    {user.joined}
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="p-2 hover:bg-white rounded-xl transition-all text-gray-400 hover:text-gray-900 border border-transparent hover:border-gray-100">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-8 py-6 bg-[#f4f5f2] border-t border-gray-100 flex items-center justify-between">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Showing 5 of 1,248 users</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white rounded-xl border border-gray-100 font-bold text-xs text-gray-400 hover:text-gray-900 transition-all shadow-sm">Previous</button>
            <button className="px-4 py-2 bg-white rounded-xl border border-gray-100 font-bold text-xs text-gray-900 hover:bg-gray-50 transition-all shadow-sm">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
