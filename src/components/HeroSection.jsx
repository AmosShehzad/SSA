import { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');

  useEffect(() => {
    // 4000ms (4 seconds) rotation timer
    const timer = setInterval(() => {
      setFadeState('fade-out');

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
        setFadeState('fade-in');
      }, 400); // 400ms transition window before content swap
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-[#0b0f19] pt-12 pb-16 overflow-hidden">
      
      {/* Glow Background Accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[250px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-sm font-mono text-cyan-400 mb-4 shadow-inner">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>🚀 Admissions Open — Smart Freelancer Program</span>
        </div>

        {/* Animated Headline Container - Adjusted height for perfectly uniform 3-line text */}
        <div className="min-h-[180px] sm:min-h-[220px] lg:min-h-[240px] flex items-start justify-center pt-2 mb-6">
          <h1 
            className={`font-sora text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] transition-all duration-500 ease-out transform ${
              fadeState === 'fade-in' 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 -translate-y-3 scale-98'
            }`}
          >
            {currentIndex === 0 ? (
              /* Text 1: Consolidated to exactly 3 lines */
              <>
                Learn <span className="text-cyan-400">Future Skills.</span><br />
                Build Real Projects.<br />
                Become <span className="relative inline-block border-b-4 border-cyan-400 pb-1">Freelance-Ready.</span>
              </>
            ) : (
              /* Text 2: Matches with 3 lines */
              <>
                Learn <span className="text-cyan-400">AI & Digital Skills</span><br />
                And Build Your Future<br />
                To The <span className="relative inline-block border-b-4 border-cyan-400 pb-1">Next Level.</span>
              </>
            )}
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-gray-400 text-base sm:text-xl font-manrope max-w-3xl mx-auto mb-10 leading-relaxed">
          Master AI, programming, data analytics, digital marketing, design, and other in-demand digital skills through practical, project-based learning.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#enroll"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan-400 text-[#0b0f19] font-sora font-bold text-base hover:bg-cyan-300 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-cyan-400/20 flex items-center justify-center gap-2"
          >
            Enroll Now <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#course"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-sora font-semibold text-base hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 fill-white" /> View Curriculum
          </a>
        </div>

      </div>
    </section>
  );
}