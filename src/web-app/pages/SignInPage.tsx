import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, LayoutDashboard, Home, ArrowRight, User, Building2, Shield } from 'lucide-react';
import logoImage from '../../assets/logo.png';

interface SignInPageProps {
  onSignIn: (role: 'seller' | 'admin') => void;
  isAuthenticated?: boolean;
  userRole?: 'seller' | 'admin';
}

export function SignInPage({ onSignIn, isAuthenticated, userRole }: SignInPageProps) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'seller' | 'admin'>('seller');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignIn(selectedRole);
    navigate(selectedRole === 'admin' ? '/constructor/admin/dashboard' : '/constructor/seller/overview');
  };

  const dashboardPath = userRole === 'admin' ? '/constructor/admin/dashboard' : '/constructor/seller/overview';

  const roles = [
    { id: 'seller' as const, label: 'Constructor', desc: 'Sell & manage properties', icon: Building2 },
    { id: 'admin' as const, label: 'Admin', desc: 'Manage the platform', icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-[#f4f5f2] p-2 sm:p-6 flex items-center justify-center">
      <div className="w-full max-w-[1200px] bg-white rounded-3xl sm:rounded-[48px] border border-gray-100 shadow-sm overflow-hidden flex min-h-[600px] sm:min-h-[700px]">
        {/* Left Side: Visual */}
        <div className="hidden lg:block w-1/2 bg-[#576856] relative overflow-hidden p-16">
          <div className="absolute top-0 right-0 w-full h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 border-4 border-white rounded-full" />
            <div className="absolute bottom-20 left-10 w-96 h-96 border-4 border-white rounded-full" />
          </div>
          <div className="relative h-full flex flex-col justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 p-2">
                <img src={logoImage} alt="Howsee" className="w-full h-full object-contain brightness-0 invert" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">Howsee</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-5xl font-black leading-tight">Welcome back to the future of Real Estate.</h2>
              <p className="text-white/70 text-lg font-medium">Log in to manage your immersive property portfolio and close deals 3x faster.</p>
            </div>
            <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-white/50">
              <span>Verified Portal</span>
              <span>•</span>
              <span>Premium Access</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-20 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full space-y-8 sm:space-y-10">
            {isAuthenticated ? (
              <div className="text-center space-y-6 sm:space-y-8 animate-in fade-in zoom-in-95 duration-500">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#576856] rounded-[24px] sm:rounded-[32px] flex items-center justify-center mx-auto shadow-xl shadow-[#576856]/20 mb-4 sm:mb-8">
                  <LayoutDashboard className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-4xl font-black text-gray-900 mb-2 sm:mb-4">Already Signed In</h1>
                  <p className="text-sm sm:text-lg text-gray-500 font-medium leading-relaxed">You are signed in as {userRole === 'admin' ? 'Admin' : 'Constructor'}.</p>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <button 
                    onClick={() => navigate(dashboardPath)}
                    className="w-full py-4 sm:py-5 bg-[#576856] text-white rounded-xl sm:rounded-[24px] font-bold text-base sm:text-lg hover:scale-[1.05] transition-all shadow-xl shadow-[#576856]/20 flex items-center justify-center gap-3"
                  >
                    Go to Dashboard
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => { window.location.href = '/'; }}
                    className="w-full py-4 sm:py-5 bg-white text-gray-600 rounded-xl sm:rounded-[24px] font-bold text-base sm:text-lg hover:bg-gray-50 transition-all border border-gray-100 flex items-center justify-center gap-3"
                  >
                    <Home className="w-5 h-5" />
                    User Website
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-2 sm:mb-3 tracking-tight">Sign In</h1>
                  <p className="text-gray-500 font-bold text-[10px] sm:text-sm uppercase tracking-widest sm:tracking-wider">Access your dashboard</p>
                </div>

                {/* Role Selector */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Sign in as</label>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {roles.map((role) => {
                      const Icon = role.icon;
                      const isActive = selectedRole === role.id;
                      return (
                        <button
                          key={role.id}
                          type="button"
                          onClick={() => setSelectedRole(role.id)}
                          className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 transition-all flex flex-col items-center gap-1.5 sm:gap-2 ${
                            isActive
                              ? 'border-[#576856] bg-[#576856]/5 text-[#576856]'
                              : 'border-gray-100 hover:border-[#576856]/30 text-gray-400'
                          }`}
                        >
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                          <span className="font-black text-[10px] uppercase tracking-widest">{role.label}</span>
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-400 mt-1 text-center font-bold uppercase tracking-widest">
                    {roles.find(r => r.id === selectedRole)?.desc}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-[#576856] transition-colors" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full pl-11 sm:pl-14 pr-6 py-3.5 sm:py-5 rounded-xl sm:rounded-[24px] border border-gray-100 bg-[#f4f5f2] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#576856]/5 focus:border-[#576856] transition-all font-bold text-sm sm:text-base text-gray-900 placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-center justify-between px-1">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Password</label>
                      <a href="#" className="text-[10px] font-black text-[#576856] hover:underline uppercase tracking-widest">Forgot?</a>
                    </div>
                    <div className="relative group">
                      <Lock className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-[#576856] transition-colors" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        placeholder="••••••••"
                        className="w-full pl-11 sm:pl-14 pr-11 sm:pr-16 py-3.5 sm:py-5 rounded-xl sm:rounded-[24px] border border-gray-100 bg-[#f4f5f2] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#576856]/5 focus:border-[#576856] transition-all font-bold text-sm sm:text-base text-gray-900 placeholder:text-gray-400"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 px-1">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={formData.remember}
                      onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
                      className="w-4 h-4 sm:w-5 sm:h-5 rounded-lg border-gray-200 text-[#576856] focus:ring-[#576856]"
                    />
                    <label htmlFor="remember" className="text-[11px] sm:text-sm font-bold text-gray-500 cursor-pointer">
                      Remember sessions
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 sm:py-5 bg-[#576856] text-white rounded-xl sm:rounded-[24px] font-black text-xs sm:text-lg hover:scale-[1.02] transition-all shadow-xl shadow-[#576856]/20 mt-2 sm:mt-4 active:scale-95 uppercase tracking-widest"
                  >
                    Sign In
                  </button>

                  <div className="pt-2 sm:pt-4 space-y-2 sm:space-y-3 text-center">
                    <p className="text-[10px] sm:text-sm font-black text-gray-500 uppercase tracking-widest">
                      No account?{' '}
                      <button
                        type="button"
                        onClick={() => navigate('/signup')}
                        className="text-[#576856] hover:underline"
                      >
                        Create One
                      </button>
                    </p>
                    <button
                      type="button"
                      onClick={() => { window.location.href = '/'; }}
                      className="text-[10px] sm:text-sm font-black text-gray-400 hover:text-[#576856] transition-colors flex items-center gap-2 mx-auto uppercase tracking-widest"
                    >
                      <Home className="w-3.5 h-3.5 sm:w-4 h-4" />
                      Home
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
