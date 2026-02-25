import { ArrowLeft, Mail, Lock, User, Eye, EyeOff, Building2, Shield } from "lucide-react";
import { useState } from "react";
import type { UserRole } from '../App';

interface SignUpScreenProps {
  onBack: () => void;
  onSignUp: (role: UserRole) => void;
  onSignIn: () => void;
}

export function SignUpScreen({ onBack, onSignUp, onSignIn }: SignUpScreenProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
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
      {/* Left Side: Information Section */}
      <div className="hidden md:flex md:w-5/12 bg-white relative overflow-hidden flex-col justify-between p-20">
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">Join the <br /><span className="text-[#576856]">Future of Living.</span></h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-md">Create an account to start saving your favorite properties and get personalized recommendations.</p>
        </div>

        <div className="space-y-8">
           {[
             { title: "Personalized Feed", desc: "Houses that match your style and budget." },
             { title: "Early Access", desc: "Get notified before properties hit the market." },
             { title: "Direct Chat", desc: "Speak with verified owners and agents instantly." }
           ].map((feat, i) => (
             <div key={i} className="flex gap-6">
                <div className="w-12 h-12 bg-[#576856]/10 rounded-2xl flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 bg-[#576856] rounded-full"></div>
                </div>
                <div>
                   <h4 className="font-bold text-gray-900">{feat.title}</h4>
                   <p className="text-sm text-gray-500 font-medium">{feat.desc}</p>
                </div>
             </div>
           ))}
        </div>

        <div className="text-sm text-gray-400 font-medium">
          © 2026 HowSee Inc. All rights reserved.
        </div>
        
        {/* Subtle background pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#576856]/5 rounded-bl-full"></div>
      </div>

      {/* Right Side: Sign Up Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 md:p-20 bg-[#f4f5f2]">
        <div className="w-full max-w-[520px] bg-white rounded-[40px] p-10 md:p-14 shadow-sm border border-gray-100">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Create Account</h2>
            <p className="text-gray-500 font-medium">Choose your account type and get started.</p>
          </div>

          {/* Role Selector */}
          <div className="mb-6">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block px-1">Account Type</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {roles.map((role) => {
                const Icon = role.icon;
                const isActive = selectedRole === role.id;
                return (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-3 ${
                      isActive
                        ? 'border-[#576856] bg-[#576856]/5 text-[#576856]'
                        : 'border-gray-100 hover:border-[#576856]/30 text-gray-400'
                    }`}
                  >
                    <Icon className="w-8 h-8" />
                  </button>
                );
              })}
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center font-bold">
              {roles.find(r => r.id === selectedRole)?.desc}
            </p>
          </div>

          <div className="space-y-5 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block px-1">Full Name</label>
                <div className="bg-[#f8f9f7] rounded-2xl px-5 py-4 flex items-center gap-3 border border-transparent focus-within:border-[#576856] transition-all">
                  <User className="w-5 h-5 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-[16px] text-gray-900 placeholder:text-gray-300"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block px-1">Email</label>
                <div className="bg-[#f8f9f7] rounded-2xl px-5 py-4 flex items-center gap-3 border border-transparent focus-within:border-[#576856] transition-all">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <input 
                    type="email" 
                    placeholder="john@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-[16px] text-gray-900 placeholder:text-gray-300"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block px-1">Password</label>
              <div className="bg-[#f8f9f7] rounded-2xl px-5 py-4 flex items-center gap-3 border border-transparent focus-within:border-[#576856] transition-all">
                <Lock className="w-5 h-5 text-gray-400" />
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-[16px] text-gray-900 placeholder:text-gray-300"
                />
                <button onClick={() => setShowPassword(!showPassword)} className="p-1">
                  {showPassword ? <EyeOff className="w-5 h-5 text-gray-400" /> : <Eye className="w-5 h-5 text-gray-400" />}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-3 px-1">
              <input type="checkbox" id="reg-terms" className="w-5 h-5 mt-0.5 rounded border-gray-300 text-[#576856] focus:ring-[#576856]" />
              <label htmlFor="reg-terms" className="text-sm text-gray-500 leading-relaxed font-medium">
                I agree to the <span className="text-[#576856] font-bold cursor-pointer">Terms of Service</span> and <span className="text-[#576856] font-bold cursor-pointer">Privacy Policy</span>
              </label>
            </div>
          </div>

          <button 
            onClick={() => onSignUp(selectedRole)}
            className="w-full bg-[#576856] text-white rounded-2xl py-5 text-lg font-bold shadow-xl shadow-[#576856]/10 hover:bg-[#4a5a49] transition-all mb-8"
          >
            Create Account
          </button>

          <div className="text-center font-bold">
            <span className="text-gray-400">Already a member? </span>
            <button 
              onClick={onSignIn}
              className="text-[#576856] hover:underline"
            >
              Sign In here
            </button>
          </div>
        </div>
        
        <button 
          onClick={onBack}
          className="mt-8 flex items-center gap-2 text-gray-500 font-bold hover:text-gray-800 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Landing</span>
        </button>
      </div>
    </div>
  );
}
