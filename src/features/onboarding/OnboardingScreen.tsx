import onboardingImage from "figma:asset/62684876aaf504df552f98589a2050328d47d802.png";
import { Home } from "lucide-react";

interface OnboardingScreenProps {
  onStart: () => void;
}

export function OnboardingScreen({ onStart }: OnboardingScreenProps) {
  return (
    <div className="h-full w-full bg-[#d8dbd5] flex items-center justify-center p-4">
      <div className="w-full max-w-[430px] h-full max-h-[932px] bg-[#d8dbd5] rounded-[60px] overflow-hidden flex flex-col relative shadow-2xl">
        {/* Status Bar */}
        <div className="flex justify-between items-center px-8 pt-5 pb-2 shrink-0">
          <div className="text-[17px] font-semibold">9:41</div>
          <div className="flex items-center gap-2">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
              <rect width="18" height="12" rx="2" fill="black"/>
              <rect x="1" y="1" width="16" height="10" rx="1" fill="white"/>
              <rect x="2" y="2" width="14" height="8" rx="1" fill="black"/>
            </svg>
            <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
              <path d="M0 6C0 4.34 1.34 3 3 3h11c1.66 0 3 1.34 3 3s-1.34 3-3 3H3c-1.66 0-3-1.34-3-3z" fill="black"/>
            </svg>
            <svg width="27" height="13" viewBox="0 0 27 13" fill="none">
              <rect x="2" y="0.5" width="21" height="11" rx="2.5" stroke="black" strokeWidth="1"/>
              <rect x="24" y="3.5" width="3" height="5" rx="1" fill="black"/>
            </svg>
          </div>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center gap-2 pt-8 pb-4 shrink-0">
          <Home className="w-7 h-7 text-[#576856]" strokeWidth={2} />
          <h1 className="text-[26px] text-[#576856] font-medium">Howsee</h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-end px-6 pb-8 relative">
          {/* Property Image */}
          <div className="absolute inset-0 flex items-center justify-center px-8">
            <img 
              src={onboardingImage}
              alt="Modern architectural home"
              className="w-full h-auto max-h-[65%] object-contain"
            />
          </div>

          {/* Text and Button Overlay */}
          <div className="relative z-10 w-full">
            <div 
              className="absolute bottom-0 left-[-1.5rem] right-[-1.5rem] h-[350px] pointer-events-none"
              style={{
                background: 'linear-gradient(to top, rgba(87, 104, 86, 0.95) 0%, rgba(87, 104, 86, 0.7) 40%, transparent 100%)'
              }}
            />
            
            <div className="relative z-10 text-center mb-6">
              <h2 className="text-white text-[28px] font-normal leading-tight mb-2">
                Welcome to Your
              </h2>
              <h3 className="text-white text-[42px] font-bold leading-tight">
                Perfect Home
              </h3>
            </div>
            
            <button 
              onClick={onStart}
              className="w-full bg-white text-black rounded-full py-4 text-[18px] font-semibold shadow-lg hover:bg-gray-50 transition-colors"
            >
              Start Your Visit
            </button>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="flex justify-center py-3 shrink-0">
          <div className="w-[140px] h-[5px] bg-black rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
