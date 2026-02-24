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
    <div className="min-h-screen bg-[#f4f5f2] p-4 lg:p-6 flex items-center justify-center">
      <div className="w-full max-w-[1200px] bg-white rounded-[48px] border border-gray-100 shadow-sm overflow-hidden flex min-h-[700px]">
        {/* Left Side: Visual */}
        <div className="hidden lg:block w-1/2 bg-[#576856] relative overflow-hidden p-16">
          <div className="absolute top-0 right-0 w-full h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 border-4 border-white rounded-full" />
            <div className="absolute bottom-20 left-10 w-96 h-96 border-4 border-white rounded-full" />
          </div>
          <div className="relative h-full flex flex-col justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
                <img src={logoImage} alt="Howsee" className="w-full h-full object-contain p-2 brightness-0 invert" />
              </div>
              <span className="font-bold text-2xl tracking-tight">Howsee</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-5xl font-bold leading-tight">Welcome back to the future of Real Estate.</h2>
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
        <div className="w-full lg:w-1/2 p-8 lg:p-20 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full space-y-10">
            {isAuthenticated ? (
              <div className="text-center space-y-8 animate-in fade-in zoom-in-95 duration-500">
                <div className="w-24 h-24 bg-[#576856] rounded-[32px] flex items-center justify-center mx-auto shadow-xl shadow-[#576856]/20 mb-8">
                  <LayoutDashboard className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">Already Signed In</h1>
                  <p className="text-lg text-gray-500 font-medium leading-relaxed">You are currently logged in as {userRole === 'admin' ? 'Admin' : 'Constructor'}. Access your management portal directly.</p>
                </div>
                <div className="space-y-4">
                  <button 
                    onClick={() => navigate(dashboardPath)}
                    className="w-full py-5 bg-[#576856] text-white rounded-[24px] font-bold text-lg hover:scale-[1.05] transition-all shadow-xl shadow-[#576856]/20 flex items-center justify-center gap-3"
                  >
                    Go to Dashboard
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => { window.location.href = '/'; }}
                    className="w-full py-5 bg-white text-gray-600 rounded-[24px] font-bold text-lg hover:bg-gray-50 transition-all border border-gray-100 flex items-center justify-center gap-3"
                  >
                    <Home className="w-5 h-5" />
                    Go to User Website
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">Sign In</h1>
                  <p className="text-gray-500 font-bold text-sm uppercase tracking-wider">Access your dashboard</p>
                </div>

                {/* Role Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Sign in as</label>
                  <div className="grid grid-cols-2 gap-3">
                    {roles.map((role) => {
                      const Icon = role.icon;
                      const isActive = selectedRole === role.id;
                      return (
                        <button
                          key={role.id}
                          type="button"
                          onClick={() => setSelectedRole(role.id)}
                          className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${
                            isActive
                              ? 'border-[#576856] bg-[#576856]/5 text-[#576856]'
                              : 'border-gray-100 hover:border-[#576856]/30 text-gray-400'
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                          <span className="font-bold text-xs uppercase tracking-widest">{role.label}</span>
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-xs text-gray-400 mt-1 text-center font-medium">
                    {roles.find(r => r.id === selectedRole)?.desc}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <div className="relative group">
                      <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#576856] transition-colors" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full pl-14 pr-6 py-5 rounded-[24px] border border-gray-100 bg-[#f4f5f2] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#576856]/5 focus:border-[#576856] transition-all font-semibold text-gray-900"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between px-1">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Password</label>
                      <a href="#" className="text-xs font-bold text-[#576856] hover:underline uppercase tracking-widest">Forgot?</a>
                    </div>
                    <div className="relative group">
                      <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#576856] transition-colors" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        placeholder="••••••••"
                        className="w-full pl-14 pr-16 py-5 rounded-[24px] border border-gray-100 bg-[#f4f5f2] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#576856]/5 focus:border-[#576856] transition-all font-semibold text-gray-900"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 px-1">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={formData.remember}
                      onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
                      className="w-5 h-5 rounded-lg border-gray-200 text-[#576856] focus:ring-[#576856]"
                    />
                    <label htmlFor="remember" className="text-sm font-bold text-gray-500 cursor-pointer">
                      Remember sessions
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 bg-[#576856] text-white rounded-[24px] font-bold text-lg hover:scale-[1.02] transition-all shadow-xl shadow-[#576856]/20 mt-4 active:scale-95"
                  >
                    Sign In as {roles.find(r => r.id === selectedRole)?.label}
                  </button>

                  <div className="pt-4 space-y-3 text-center">
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                      No account?{' '}
                      <button
                        type="button"
                        onClick={() => navigate('/constructor/signup')}
                        className="text-[#576856] hover:underline"
                      >
                        Create One
                      </button>
                    </p>
                    <button
                      type="button"
                      onClick={() => { window.location.href = '/'; }}
                      className="text-sm font-bold text-gray-400 hover:text-[#576856] transition-colors flex items-center gap-2 mx-auto"
                    >
                      <Home className="w-4 h-4" />
                      Go to User Website
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
