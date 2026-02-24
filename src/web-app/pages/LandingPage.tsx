import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check, Eye, Shield, Zap, TrendingUp, Star, Play, Globe, LayoutDashboard } from 'lucide-react';
import logoImage from '../../assets/logo.png';

interface LandingPageProps {
  isAuthenticated?: boolean;
  userRole?: 'seller' | 'admin';
}

export function LandingPage({ isAuthenticated, userRole }: LandingPageProps) {
  const navigate = useNavigate();
  const dashboardPath = userRole === 'admin' ? '/admin/dashboard' : '/seller/overview';

  const features = [
    {
      icon: Eye,
      title: 'Immersive 3D Tours',
      description: 'Create stunning 360° virtual tours that let buyers experience properties from anywhere'
    },
    {
      icon: Shield,
      title: 'Privacy Protected',
      description: 'Advanced privacy controls keep your exact location safe until you choose to share'
    },
    {
      icon: TrendingUp,
      title: 'Faster Sales',
      description: '3x faster conversion rates with interactive property experiences'
    },
    {
      icon: Zap,
      title: 'Instant Setup',
      description: 'Upload 360° photos and generate professional tours in minutes'
    }
  ];

  const stats = [
    { value: '10K+', label: 'Active Properties' },
    { value: '2.5M+', label: 'Virtual Tours' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '3x', label: 'Faster Sales' }
  ];

  return (
    <div className="min-h-screen bg-[#f4f5f2] p-4 lg:p-6 space-y-6">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border border-gray-100/50 rounded-[32px] px-8 py-5 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-[#f4f5f2] rounded-xl flex items-center justify-center border border-gray-100 overflow-hidden">
            <img src={logoImage} alt="Howsee" className="w-full h-full object-contain p-1.5" />
          </div>
          <span className="font-bold text-2xl tracking-tight text-gray-900">Howsee</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <a href="#features" className="text-[15px] font-bold text-gray-500 hover:text-[#576856] transition-colors">Features</a>
          <a href="#pricing" className="text-[15px] font-bold text-gray-500 hover:text-[#576856] transition-colors">Pricing</a>
          <a href="#testimonials" className="text-[15px] font-bold text-gray-500 hover:text-[#576856] transition-colors">Testimonials</a>
        </div>

        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <button
              onClick={() => navigate(dashboardPath)}
              className="px-8 py-3.5 bg-[#576856] text-white text-[15px] font-bold rounded-2xl hover:scale-105 transition-all shadow-lg shadow-[#576856]/20 flex items-center gap-2"
            >
              <LayoutDashboard className="w-4 h-4" />
              Go to Dashboard
            </button>
          ) : (
            <>
              <button
                onClick={() => navigate('/signin')}
                className="px-6 py-2.5 text-[15px] font-bold text-gray-700 hover:text-[#576856] transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="px-8 py-3.5 bg-[#576856] text-white text-[15px] font-bold rounded-2xl hover:scale-105 transition-all shadow-lg shadow-[#576856]/20"
              >
                Get Started
              </button>
            </>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white rounded-[48px] border border-gray-100 shadow-sm overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f4f5f2]/50 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-12 py-24 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#f4f5f2] text-[#576856] rounded-full text-sm font-bold border border-gray-100">
                <span className="animate-pulse">●</span>
                REAL ESTATE REVOLUTION
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                Discover Your <span className="text-[#576856]">Dream Space</span> with 3D Precision.
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed max-w-xl font-medium">
                Experience properties like never before. Our immersive 3D tours bring listings to life, making buying and selling 3x faster and more secure.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <button
                  onClick={() => navigate(isAuthenticated ? dashboardPath : '/signup')}
                  className="px-10 py-5 bg-[#576856] text-white rounded-[24px] hover:scale-105 transition-all flex items-center gap-3 font-bold shadow-xl shadow-[#576856]/30 text-lg"
                >
                  {isAuthenticated ? 'Go to Dashboard' : 'Start Exploration'}
                  <ArrowRight className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => window.open('https://discover.matterport.com/space/gzbxoZ1DVDd', '_blank')}
                  className="px-10 py-5 bg-[#f4f5f2] text-gray-700 rounded-[24px] hover:bg-gray-100 transition-all flex items-center gap-3 font-bold border border-gray-100 text-lg"
                >
                  <Play className="w-6 h-6 fill-current" />
                  View Showcase
                </button>
              </div>
              <div className="flex items-center gap-8 pt-10 border-t border-gray-100">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-gray-100 border-4 border-white overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm font-bold text-gray-500">Trusted by over 10k+ property owners</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-[#576856]/5 rounded-[60px] blur-3xl group-hover:bg-[#576856]/10 transition-all duration-500" />
              <div className="relative bg-[#f4f5f2] rounded-[56px] border-8 border-white shadow-2xl overflow-hidden aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=900&fit=crop" 
                  alt="Property"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-xl p-6 rounded-[32px] border border-white/50 shadow-xl">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-[#576856] rounded-2xl flex items-center justify-center shadow-lg shadow-[#576856]/20">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">+127%</p>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Growth in Engagement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#576856] rounded-[48px] py-20 px-12 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center space-y-2">
              <p className="text-6xl font-bold tracking-tighter">{stat.value}</p>
              <p className="text-white/70 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="bg-white rounded-[48px] border border-gray-100 p-12 lg:p-24 shadow-sm">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h2 className="text-5xl font-bold text-gray-900 tracking-tight">Everything You Need to Scale</h2>
          <p className="text-xl text-gray-500 font-medium leading-relaxed">
            Our platform provides the ultimate toolset for modern real estate professionals, combining immersive technology with powerful analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="group p-10 bg-[#f4f5f2] rounded-[40px] border border-gray-100 hover:bg-[#576856] hover:translate-y-[-8px] transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-[#576856]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors">{feature.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed group-hover:text-white/80 transition-colors">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>
      {/* Pricing Section */}
      <section id="pricing" className="bg-[#f4f5f2] rounded-[48px] p-12 lg:p-24 space-y-20">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-5xl font-bold text-gray-900 tracking-tight">Flexible Plans for Every Stage</h2>
          <p className="text-xl text-gray-500 font-medium leading-relaxed">
            Whether you're exploring your first home or managing a global portfolio, we have the specialized features you need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Explorer",
              price: "Free",
              features: ["Daily Property Updates", "Interactive Map View", "Save to Favorites", "Consumer Profile"],
              button: "Start Exploring",
              color: "bg-white text-gray-900",
              link: "/signup"
            },
            {
              name: "Professional",
              price: "$29",
              features: ["Unlimited 3D Views", "Agent Direct Chat", "Priority Touring", "Verified Member Badge"],
              button: "Go Professional",
              color: "bg-[#576856] text-white",
              popular: true,
              link: "/signup"
            },
            {
              name: "Global Agency",
              price: "$99",
              features: ["Global Property Syndication", "Team Collaboration", "Advanced Marketing Suite", "Dedicated Support"],
              button: "Contact Sales",
              color: "bg-gray-900 text-white",
              link: "/signup"
            }
          ].map((plan) => (
            <div key={plan.name} className={`relative p-10 rounded-[48px] border transition-all hover:scale-[1.02] duration-300 flex flex-col ${plan.popular ? 'bg-white border-[#576856] shadow-xl ring-8 ring-[#576856]/5' : 'bg-white/50 border-gray-200 shadow-sm'}`}>
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#576856] text-white px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                  Most Preferred
                </div>
              )}
              <div className="mb-10 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold tracking-tighter text-gray-900">{plan.price}</span>
                  {plan.price !== "Free" && <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">/mo</span>}
                </div>
              </div>
              <div className="space-y-5 mb-12 flex-1">
                {plan.features.map(feature => (
                  <div key={feature} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-lg bg-[#576856]/10 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-[#576856]" strokeWidth={3} />
                    </div>
                    <span className="text-gray-600 font-bold text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => navigate(isAuthenticated ? dashboardPath : plan.link)}
                className={`w-full py-5 rounded-[24px] font-bold text-lg transition-all shadow-xl shadow-gray-200/50 ${plan.color}`}
              >
                {isAuthenticated ? 'Enter Dashboard' : plan.button}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <div className="grid md:grid-cols-3 gap-8">
         {[
           { icon: Shield, title: "Secured Data", desc: "Top-tier encryption for your privacy." },
           { icon: Zap, title: "Lighting Fast", desc: "Proprietary 3D rendering technology." },
           { icon: Globe, title: "Global Access", desc: "Your portfolio, everywhere." }
         ].map(item => (
           <div key={item.title} className="bg-white rounded-[40px] p-10 border border-gray-100 flex items-center gap-6 shadow-sm">
             <div className="w-16 h-16 bg-[#576856]/5 text-[#576856] rounded-2xl flex items-center justify-center shrink-0">
               <item.icon className="w-8 h-8" />
             </div>
             <div>
               <h4 className="font-bold text-gray-900">{item.title}</h4>
               <p className="text-gray-500 text-sm font-medium">{item.desc}</p>
             </div>
           </div>
         ))}
      </div>
      <footer className="bg-white rounded-[48px] border border-gray-100 p-12 lg:p-20 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#f4f5f2] rounded-xl flex items-center justify-center border border-gray-100 overflow-hidden">
                  <img src={logoImage} alt="Howsee" className="w-full h-full object-contain p-1.5" />
                </div>
                <span className="font-bold text-2xl tracking-tight">Howsee</span>
              </div>
              <p className="text-gray-500 font-medium leading-relaxed">
                Transforming the heart of real estate through immersive technology and human-centric design.
              </p>
            </div>
            
            <div className="space-y-8">
              <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs">Product</h4>
              <ul className="space-y-4">
                <li><a href="#features" className="text-gray-500 font-bold hover:text-[#576856] transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-gray-500 font-bold hover:text-[#576856] transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-500 font-bold hover:text-[#576856] transition-colors">About Story</a></li>
                <li><a href="#" className="text-gray-500 font-bold hover:text-[#576856] transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs">Trust</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-500 font-bold hover:text-[#576856] transition-colors">Privacy Cloud</a></li>
                <li><a href="#" className="text-gray-500 font-bold hover:text-[#576856] transition-colors">Terms of Life</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 font-bold text-sm">© 2026 Howsee. A New Perspective on Home.</p>
            <div className="flex gap-8">
              {['Twitter', 'Instagram', 'LinkedIn'].map(social => (
                <a key={social} href="#" className="text-xs font-bold text-gray-400 hover:text-[#576856] uppercase tracking-widest transition-colors">{social}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
