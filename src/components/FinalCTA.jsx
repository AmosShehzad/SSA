import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function FinalCTA() {
  const handleScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="apply" className="py-24 bg-[#0b0f19]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="relative rounded-3xl overflow-hidden bg-[#111827] border border-white/10 p-10 sm:p-16 text-center shadow-2xl">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-400/10 text-xs font-bold uppercase tracking-widest text-cyan-400 border border-cyan-400/20">
              Admissions Open
            </span>
            
            <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {siteConfig.cta.heading}
            </h2>
            
            <p className="text-gray-300 font-manrope text-base sm:text-lg leading-relaxed">
              {siteConfig.cta.text}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              {/* Primary CTA Button */}
              <button 
                onClick={() => handleScroll('apply')}
                className="w-full sm:w-auto bg-cyan-400 hover:bg-cyan-300 text-[#0b0f19] px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 shadow-lg hover:shadow-cyan-400/20 active:scale-95 flex items-center justify-center gap-2 group cursor-pointer"
              >
                Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              {/* Secondary CTA Button (Scrolls to Curriculum) */}
              <button 
                onClick={() => handleScroll('curriculum')}
                className="w-full sm:w-auto bg-[#1a2336] hover:bg-white/10 text-white border border-white/15 px-8 py-4 rounded-xl font-medium text-base transition-all duration-200 active:scale-95 cursor-pointer"
              >
                Explore Program Details
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}