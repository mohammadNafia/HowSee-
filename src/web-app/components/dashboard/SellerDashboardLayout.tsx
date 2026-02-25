import React, { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Upload, Layers, CreditCard, Shield, LogOut, Menu, Mail, DollarSign, Globe } from 'lucide-react';
import logoImage from '../../../assets/logo.png';

interface SellerDashboardLayoutProps {
  children: ReactNode;
}

export function SellerDashboardLayout({ children }: SellerDashboardLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: Home, path: '/constructor/seller/overview' },
    { id: 'upload', label: 'Upload Property', icon: Upload, path: '/constructor/seller/upload' },
    { id: 'properties', label: 'My Properties', icon: Layers, path: '/constructor/seller/properties' },
    { id: 'pricing', label: 'Pricing Plans', icon: DollarSign, path: '/constructor/seller/pricing' },
    { id: 'billing', label: 'Billing', icon: CreditCard, path: '/constructor/seller/billing' },
    { id: 'privacy', label: 'Privacy', icon: Shield, path: '/constructor/seller/privacy' },
    { id: 'contact', label: 'Contact', icon: Mail, path: '/constructor/seller/contact' }
  ];

  const currentPage = menuItems.find(item => location.pathname === item.path)?.id || 'overview';

  return (
    <div className="flex h-screen bg-[#f4f5f2] p-4 gap-4 overflow-hidden">
      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white rounded-[40px] shadow-sm border border-gray-100/50
        transform transition-all duration-300 ease-in-out flex flex-col
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        m-0 lg:m-0
      `}>
        <div className="flex flex-col h-full p-6">
          <div className="px-4 py-8 flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center overflow-hidden border border-gray-100 p-2">
              <img src={logoImage} alt="Howsee" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="font-bold text-xl text-gray-900 block leading-tight">Howsee</span>
              <span className="text-xs font-semibold text-[#576856] uppercase tracking-wider">Seller Portal</span>
            </div>
          </div>

          <nav className="flex-1 space-y-2 px-2 mt-8">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    navigate(item.path);
                    setSidebarOpen(false);
                  }}
                  className={`
                    w-full flex items-center gap-4 px-5 py-3.5 rounded-[24px] transition-all duration-200
                    ${isActive 
                      ? 'bg-[#576856] text-white shadow-lg shadow-[#576856]/20' 
                      : 'text-gray-500 hover:bg-[#f4f5f2] hover:text-[#576856]'
                    }
                  `}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : ''}`} />
                  <span className="font-semibold text-[15px]">{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between gap-1.5 sm:gap-2">
            <div className="flex items-center gap-2 sm:gap-3 px-2 py-1.5 sm:px-3 sm:py-2 bg-[#f4f5f2] rounded-2xl border border-gray-100 flex-1 min-w-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-sm shrink-0">
                <span className="text-[#576856] font-bold text-[10px] sm:text-xs">JD</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-[11px] sm:text-[13px] text-gray-900 truncate">John Doe</p>
                <p className="text-[8px] sm:text-[9px] font-bold text-[#576856] tracking-tight truncate lowercase opacity-60">john@example.com</p>
              </div>
            </div>
            <button 
              onClick={() => { localStorage.removeItem('howsee_auth'); localStorage.removeItem('howsee_role'); window.location.href = '/signin'; }}
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl text-red-500 hover:bg-red-50 transition-all border border-transparent hover:border-red-100 shrink-0 shadow-sm"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
          
          <div className="pt-3">
            <button 
              onClick={() => { window.location.href = '/'; }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-[20px] text-white bg-[#576856] hover:bg-[#4a5849] transition-all font-bold text-[12px] shadow-lg shadow-[#576856]/20 uppercase tracking-widest"
            >
              <Globe className="w-4 h-4" />
              <span>User Website</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 gap-4 overflow-hidden">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white rounded-[32px] border border-gray-100 px-6 py-4 flex items-center justify-between shadow-sm">
          <button
            onClick={() => setSidebarOpen(true)}
            className="w-10 h-10 flex items-center justify-center rounded-2xl bg-[#f4f5f2] text-gray-600 hover:text-[#576856] transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2">
            <img src={logoImage} alt="Howsee" className="w-8 h-8 object-contain" />
            <span className="font-bold text-gray-900">Howsee</span>
          </div>
          <div className="w-10" />
        </div>

        {/* Content Container */}
        <div className="flex-1 bg-white rounded-[48px] border border-gray-100 shadow-sm overflow-hidden flex flex-col relative">
          <div className="absolute inset-0 overflow-auto scrollbar-hide p-8">
            {children}
          </div>
        </div>
      </main>

      {/* Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-40 transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
