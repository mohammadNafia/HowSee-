import { ArrowLeft, Mail, Lock, Eye, EyeOff, User, Building2, Shield } from "lucide-react";
import { useState } from "react";
import type { UserRole } from '../App';

interface SignInScreenProps {
  onBack: () => void;
  onSignIn: (role: UserRole) => void;
  onSignUp: () => void;
}

export function SignInScreen({ onBack, onSignIn, onSignUp }: SignInScreenProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState<UserRole>('user');

  const roles: { id: UserRole; label: string; desc: string; icon: typeof User }[] = [
    { id: 'user', label: 'User', desc: 'Browse & discover properties', icon: User },
    { id: 'constructor', label: 'Constructor', desc: 'Sell & manage properties', icon: Building2 },
    { id: 'admin', label: 'Admin', desc: 'Manage the platform', icon: Shield },
  ];

  return (
    <div className="min-h-screen w-full bg-[#f4f5f2] flex flex-col md:flex-row">
      {/* Left Side: Branding/Image Section */}
      <div className="hidden md:flex md:w-1/2 bg-[#576856] relative overflow-hidden flex-col justify-center p-20 text-white">
        <div className="relative z-10 max-w-lg">
          <h1 className="text-6xl font-bold mb-8 leading-tight">Find Your <br />Perfect Sanctuary.</h1>
          <p className="text-xl text-white/80 leading-relaxed mb-12">Join thousands of homeowners who found their dream aesthetic with our platform. Simple, elegant, and personalized.</p>
          
          <div className="flex gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">10k+</div>
              <div className="text-white/60 text-sm font-bold uppercase tracking-wider">Happy Users</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">500+</div>
              <div className="text-white/60 text-sm font-bold uppercase tracking-wider">Premium Houses</div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-20%] left-[-20%] w-[600px] h-[600px] bg-black/10 rounded-full blur-3xl"></div>
      </div>

      {/* Right Side: Sign In Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 md:p-20 relative">
        <button 
          onClick={onBack}
          className="absolute top-12 left-8 md:left-12 flex items-center gap-3 text-gray-500 hover:text-gray-900 transition-colors font-bold"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <div className="w-full max-w-[480px]">
          <div className="mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome Back</h2>
            <p className="text-lg text-gray-500 font-medium">Choose your account type and sign in.</p>
          </div>

          {/* Role Selector */}
          <div className="mb-8">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block px-1">Sign in as</label>
            <div className="grid grid-cols-3 gap-3">
              {roles.map((role) => {
                const Icon = role.icon;
                const isActive = selectedRole === role.id;
                return (
                  <button
                    key={role.id}
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
            <p className="text-xs text-gray-400 mt-2 text-center font-medium">
              {roles.find(r => r.id === selectedRole)?.desc}
            </p>
          </div>

          <div className="space-y-6 mb-10">
            <div>
              <label className="text-[15px] font-bold text-gray-700 mb-2.5 block px-1">Email Address</label>
              <div className="bg-white rounded-2xl px-6 py-5 flex items-center gap-4 shadow-sm border border-gray-100 focus-within:border-[#576856] focus-within:ring-4 focus-within:ring-[#576856]/5 transition-all">
                <Mail className="w-5 h-5 text-gray-400" />
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-lg text-gray-900 placeholder:text-gray-300"
                />
              </div>
            </div>

            <div>
              <label className="text-[15px] font-bold text-gray-700 mb-2.5 block px-1">Password</label>
              <div className="bg-white rounded-2xl px-6 py-5 flex items-center gap-4 shadow-sm border border-gray-100 focus-within:border-[#576856] focus-within:ring-4 focus-within:ring-[#576856]/5 transition-all">
                <Lock className="w-5 h-5 text-gray-400" />
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-lg text-gray-900 placeholder:text-gray-300"
                />
                <button 
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-1 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between px-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded-lg border-gray-200 text-[#576856] focus:ring-[#576856]" />
                <span className="text-sm font-bold text-gray-500 group-hover:text-gray-700 transition-colors">Remember me</span>
              </label>
              <button className="text-sm text-[#576856] font-bold hover:underline">
                Forgot Password?
              </button>
            </div>
          </div>

          <button 
            onClick={() => onSignIn(selectedRole)}
            className="w-full bg-[#576856] text-white rounded-[24px] py-5 text-lg font-bold shadow-xl shadow-[#576856]/20 hover:bg-[#4a5a49] hover:scale-[1.02] active:scale-[0.98] transition-all mb-10"
          >
            Sign In as {roles.find(r => r.id === selectedRole)?.label}
          </button>

          <div className="relative mb-10">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
            <div className="relative flex justify-center text-sm font-bold uppercase tracking-widest text-gray-400">
              <span className="bg-[#f4f5f2] px-6">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-12">
            <button className="bg-white rounded-2xl py-4 flex items-center justify-center gap-3 shadow-sm border border-gray-100 hover:bg-gray-50 transition-all font-bold text-gray-700">
               <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Google</span>
            </button>
            <button className="bg-white rounded-2xl py-4 flex items-center justify-center gap-3 shadow-sm border border-gray-100 hover:bg-gray-50 transition-all font-bold text-gray-700">
               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="black">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <span>Apple ID</span>
            </button>
          </div>

          <div className="text-center font-bold">
            <span className="text-gray-400">New here? </span>
            <button 
              onClick={onSignUp}
              className="text-[#576856] hover:underline"
            >
              Create an Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
