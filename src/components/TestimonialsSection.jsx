import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    initials: "AR",
    name: "Ahmad Raza",
    role: "Freelance AI Specialist • Lahore, PK",
    quote: "The Agentic AI & Automation module completely changed how I work. I built custom automation workflows for a US client on Upwork and earned my investment back within the first month.",
    rating: 5,
  },
  {
    id: 2,
    initials: "SK",
    name: "Sara Khan",
    role: "Digital Marketing Strategist • Karachi, PK",
    quote: "Learning Meta & Google Ads hands-on gave me the confidence to pitch real business owners. The proposal templates and outreach strategies helped me land 3 retainers!",
    rating: 5,
  },
  {
    id: 3,
    initials: "HS",
    name: "Hamza Sheikh",
    role: "Full-Stack Web Developer • Islamabad, PK",
    quote: "Building real React and Tailwind projects instead of just watching tutorials made all the difference. The terminal curriculum format made learning structured and super clear.",
    rating: 5,
  },
  {
    id: 4,
    initials: "AA",
    name: "Ayesha Ali",
    role: "UI/UX Designer • Rawalpindi, PK",
    quote: "The practical portfolio feedback turned my rough designs into client-ready case studies. I secured my first remote freelance contract within two weeks of finishing!",
    rating: 5,
  },
  {
    id: 5,
    initials: "UM",
    name: "Usman Malik",
    role: "SEO & Growth Specialist • Faisalabad, PK",
    quote: "From keyword research to technical audits, everything was taught with real client sites. Smart Skills Academy gave me the exact blueprint needed to pitch with confidence.",
    rating: 5,
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(1);

  // Update visible card count based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  // Auto-slide timer
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  // Prevent index overflow when resizing screen
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="testimonials" className="py-12 md:py-24 bg-[#0b0f19] relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-xs font-mono font-semibold text-cyan-400 tracking-wider uppercase mb-3">
            STUDENT SUCCESS STORIES
          </span>
          <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Loved by <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Ambitious Freelancers</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg font-manrope px-2">
            See how our practical, project-based learning helped students build successful digital careers.
          </p>
        </div>

        {/* Carousel Viewport */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Animated Track */}
          <div 
            className="flex -mx-3 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-3"
              >
                <div className="h-full flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#121827]/90 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 relative group">
                  
                  {/* Watermark Quote Icon */}
                  <div className="absolute top-4 right-5 text-gray-700/30 group-hover:text-cyan-400/20 transition-colors pointer-events-none text-4xl font-serif">
                    “
                  </div>

                  <div>
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 mb-3 sm:mb-4">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Testimonial Quote */}
                    <p className="font-manrope text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Author Details */}
                  <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 font-sora font-bold text-sm shrink-0">
                      {item.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-sora text-sm font-bold text-white truncate">
                          {item.name}
                        </h4>
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400/20 shrink-0" />
                      </div>
                      <p className="font-manrope text-xs text-gray-400 truncate">
                        {item.role}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation & Dots */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-xl bg-[#121827] border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all active:scale-95"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Pagination Dots */}
          <div className="flex items-center gap-2">
            {[...Array(maxIndex + 1)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-6 bg-cyan-400'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2.5 rounded-xl bg-[#121827] border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all active:scale-95"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}