import { ArrowRight, Eye, Shield, Zap, TrendingUp, Play } from 'lucide-react';
import logoImage from '@/shared/assets/logo.png';


export function LandingPage() {

  const linkedinUrl = "https://www.linkedin.com/in/howsee-iq-58a516400?utm_source=share_via&utm_content=profile&utm_medium=member_android";
  const email = "howsee.iq@gmail.com";

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
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border border-gray-100/50 rounded-[32px] px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between shadow-sm mx-1 sm:mx-0">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#f4f5f2] rounded-lg sm:rounded-xl flex items-center justify-center border border-gray-100 overflow-hidden shrink-0">
            <img src={logoImage} alt="Howsee" className="w-full h-full object-contain p-1 sm:p-1.5" />
          </div>
          <span className="font-bold text-xl sm:text-2xl tracking-tight text-gray-900 truncate">Howsee</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <a href="#features" className="text-[15px] font-bold text-gray-500 hover:text-[#576856] transition-colors">Features</a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[15px] font-bold text-gray-500 hover:text-[#576856] transition-colors">LinkedIn</a>
          <a href={`mailto:${email}`} className="text-[15px] font-bold text-gray-500 hover:text-[#576856] transition-colors">Contact Us</a>
        </div>
 
        <div className="flex items-center gap-1.5 sm:gap-4">
          <button
            onClick={() => window.open('https://my.matterport.com/show?m=Z5JyV83eBoj', '_blank')}
            className="px-3.5 py-2 sm:px-8 sm:py-3.5 bg-[#576856] text-white text-[12px] sm:text-[15px] font-bold rounded-xl sm:rounded-2xl hover:scale-105 transition-all shadow-lg shadow-[#576856]/20"
          >
            Explore Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white rounded-[48px] border border-gray-100 shadow-sm overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f4f5f2]/50 -skew-x-12 translate-x-1/2 hidden lg:block" />
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 lg:space-y-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#f4f5f2] text-[#576856] rounded-full text-xs sm:text-sm font-bold border border-gray-100 mx-auto lg:mx-0">
                <span className="animate-pulse">●</span>
                REAL ESTATE REVOLUTION
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.2] lg:leading-[1.1] tracking-tight">
                Discover Your <span className="text-[#576856]">Dream Space</span> with 3D Precision.
              </h1>
              <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-xl font-medium mx-auto lg:mx-0">
                Experience properties like never before. Our immersive 3D tours bring listings to life, making buying and selling 3x faster and more secure.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4">
                <button
                  onClick={() => window.open(linkedinUrl, '_blank')}
                  className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-[#576856] text-white rounded-[24px] hover:scale-105 transition-all flex items-center justify-center gap-3 font-bold shadow-xl shadow-[#576856]/30 text-[16px] sm:text-lg"
                >
                  Connect with Us
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button 
                  onClick={() => window.open('https://my.matterport.com/show?m=Z5JyV83eBoj', '_blank')}
                  className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-[#f4f5f2] text-gray-700 rounded-[24px] hover:bg-gray-100 transition-all flex items-center justify-center gap-3 font-bold border border-gray-100 text-[16px] sm:text-lg"
                >
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                  View Showcase
                </button>
              </div>
            </div>

            <div className="relative group mt-8 lg:mt-0">
              <div className="absolute -inset-4 bg-[#576856]/5 rounded-[60px] blur-3xl group-hover:bg-[#576856]/10 transition-all duration-500" />
              <div className="relative bg-[#f4f5f2] rounded-[40px] sm:rounded-[56px] border-4 sm:border-8 border-white shadow-2xl overflow-hidden aspect-[4/3]">
                <iframe 
                  src="https://my.matterport.com/show?play=0&playsInline=1&lang=en-US&m=Z5JyV83eBoj&ss=81&sr=-.19,-.74" 
                  frameBorder="0" 
                  allowFullScreen 
                  allow="xr-spatial-tracking"
                  className="w-full h-full border-none outline-none"
                  title="Matterport 3D Tour"
                ></iframe>
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 bg-white/80 backdrop-blur-xl p-4 sm:p-6 rounded-[24px] sm:rounded-[32px] border border-white/50 shadow-xl pointer-events-none">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 bg-[#576856] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-[#576856]/20">
                      <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-lg sm:text-2xl font-bold text-gray-900">+127%</p>
                      <p className="text-[9px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest">Growth in Engagement</p>
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
      <section id="features" className="bg-white rounded-[48px] border border-gray-100 p-8 sm:p-24 shadow-sm">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">Everything You Need to Scale</h2>
          <p className="text-sm sm:text-lg text-gray-500 font-medium leading-relaxed">
            Our platform provides the most advanced tools for modern real estate professionals.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="group p-8 rounded-[40px] hover:bg-[#f4f5f2] transition-all duration-500 border border-transparent hover:border-gray-100">
              <div className="w-16 h-16 bg-[#f4f5f2] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white transition-all duration-500 shadow-inner">
                <feature.icon className="w-8 h-8 text-[#576856]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-white rounded-[48px] border border-gray-100 p-12 lg:p-20 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 mb-20">
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
              <div className="flex flex-col gap-2">
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[#576856] font-bold hover:underline">LinkedIn Profile</a>
                <a href={`mailto:${email}`} className="text-[#576856] font-bold hover:underline">{email}</a>
              </div>
            </div>
            <div className="flex flex-col items-end justify-center">
               <p className="text-gray-400 font-bold text-sm">© 2026 Howsee. A New Perspective on Home.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
