export default function AnimatedLogoHero() {
  return (
    <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center p-4">
      {/* Background Ambient Glow matching logo colors */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/20 via-brand-blue/20 to-brand-pink/20 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>

      <svg 
        viewBox="0 0 500 500" 
        className="w-full h-full relative z-10 animate-logo-glow"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Logo Main Ribbon Gradient */}
          <linearGradient id="logoRibbonGrad" x1="50" y1="450" x2="450" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00F2FE" />
            <stop offset="35%" stopColor="#2563EB" />
            <stop offset="70%" stopColor="#9333EA" />
            <stop offset="100%" stopColor="#D946EF" />
          </linearGradient>

          {/* Upward Arrow Cyan Gradient */}
          <linearGradient id="arrowGrad" x1="160" y1="360" x2="260" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00F2FE" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>

          {/* Circuit Lines Glow Gradient */}
          <linearGradient id="circuitGrad" x1="40" y1="250" x2="160" y2="250" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00F2FE" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>

        {/* --- 1. LEFT CIRCUIT NODES & CONNECTIONS --- */}
        <g stroke="url(#circuitGrad)" strokeWidth="4" strokeLinecap="round">
          <path d="M 40 200 L 110 200 L 145 220" />
          <path d="M 30 250 L 125 250" />
          <path d="M 50 300 L 110 300 L 140 280" />
        </g>
        {/* Outer Ring Circuit Nodes */}
        <circle cx="40" cy="200" r="7" fill="#050716" stroke="#00F2FE" strokeWidth="3" />
        <circle cx="30" cy="250" r="7" fill="#050716" stroke="#00F2FE" strokeWidth="3" />
        <circle cx="50" cy="300" r="7" fill="#050716" stroke="#00F2FE" strokeWidth="3" />
        {/* Animated Inner Glowing Node Dots */}
        <circle cx="40" cy="200" className="animate-node-glow" />
        <circle cx="30" cy="250" className="animate-node-glow" style={{ animationDelay: '0.4s' }} />
        <circle cx="50" cy="300" className="animate-node-glow" style={{ animationDelay: '0.8s' }} />

        {/* --- 2. MAIN "S" FOLDED RIBBON EMBLEM --- */}
        <path 
          d="M 170 360 
             C 120 330, 110 270, 150 230 
             L 270 110 
             C 320 60, 390 80, 390 140 
             C 390 180, 360 210, 320 250 
             L 200 370 
             C 150 420, 220 460, 280 430 
             L 340 400" 
          stroke="url(#logoRibbonGrad)" 
          strokeWidth="48" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />

        {/* Inner Dark Contour Lines for 3D Ribbon Layers */}
        <path 
          d="M 160 235 L 265 130 C 300 95, 350 100, 360 135" 
          stroke="#050716" 
          strokeWidth="6" 
          opacity="0.4"
          strokeLinecap="round"
        />

        {/* --- 3. UPWARD GROWTH ARROW (CENTER CYAN BEAM) --- */}
        <g className="animate-arrow-pulse">
          {/* Curved Arrow Shaft */}
          <path 
            d="M 140 330 Q 180 300 220 220" 
            stroke="url(#arrowGrad)" 
            strokeWidth="12" 
            strokeLinecap="round"
          />
          {/* Arrow Head */}
          <path 
            d="M 200 205 L 230 210 L 225 240 Z" 
            fill="#00F2FE"
          />
        </g>

        {/* --- 4. FLOATING DIGITAL PIXEL PARTICLES (TOP-RIGHT) --- */}
        <g fill="#00F2FE" className="animate-pixel-float-1">
          <rect x="370" y="110" width="12" height="12" rx="2" />
          <rect x="390" y="90" width="10" height="10" rx="2" fill="#38BDF8" />
        </g>
        <g fill="#9333EA" className="animate-pixel-float-2">
          <rect x="410" y="105" width="14" height="14" rx="3" fill="#D946EF" />
          <rect x="400" y="130" width="8" height="8" rx="2" />
        </g>
        <g fill="#00F2FE" className="animate-pixel-float-3">
          <rect x="425" y="80" width="9" height="9" rx="2" />
          <rect x="380" y="70" width="11" height="11" rx="2" fill="#2563EB" />
        </g>
      </svg>
    </div>
  );
}