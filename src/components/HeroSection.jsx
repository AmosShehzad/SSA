import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  // Smooth scroll handler matching Navbar functionality
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#0b0f19] text-white pt-8 sm:pt-12 pb-20 sm:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center relative z-10">
        
        {/* Animated Admissions Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs sm:text-sm mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.15)] hover:border-cyan-400/60 transition-all duration-300">
          {/* Pulsing Live Dot */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
          </span>
          
          {/* Animated Rocket Emoji */}
          <span className="inline-block animate-bounce text-base">🚀</span>
          
          <span>Admissions Open — Smart Freelancer Program</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-sora text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
          Learn <span className="text-cyan-400">AI & Digital Skills</span> <br className="hidden sm:inline" />
          And Build Your Future <br className="hidden sm:inline" />
          To The <span className="underline decoration-cyan-400 underline-offset-8">Next Level.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 font-manrope text-base sm:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
          Master AI, programming, data analytics, digital marketing, design, and other in-demand digital skills through practical, project-based learning.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Enroll Now (Scrolls to #apply) */}
          <a
            href="#apply"
            onClick={(e) => handleScroll(e, 'apply')}
            className="w-full sm:w-auto bg-cyan-400 hover:bg-cyan-300 text-[#0b0f19] font-sora font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-400/20 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            Enroll Now
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* View Curriculum (Scrolls to #curriculum) */}
          <a
            href="#curriculum"
            onClick={(e) => handleScroll(e, 'curriculum')}
            className="w-full sm:w-auto bg-[#1a2336] hover:bg-white/10 text-white font-sora font-semibold text-base px-8 py-4 rounded-xl border border-white/15 transition-all duration-200 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-current text-white" />
            View Curriculum
          </a>

        </div>

      </div>
    </section>
  );
}