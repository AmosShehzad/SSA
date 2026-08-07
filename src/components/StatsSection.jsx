import { useState, useEffect, useRef } from 'react';
import { BookOpen, Users, Star, Award } from 'lucide-react';

const statsData = [
  {
    id: 'courses',
    icon: BookOpen,
    label: 'Total Courses',
    target: 5,
    suffix: '',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10 border-cyan-400/20'
  },
  {
    id: 'students',
    icon: Users,
    label: 'Total Students',
    target: 100,
    suffix: '+',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20'
  },
  {
    id: 'rating',
    icon: Star,
    label: 'Average Rating',
    target: 4.9,
    suffix: ' / 5',
    isDecimal: true,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20'
  },
  {
    id: 'completion',
    icon: Award,
    label: 'Project Completion Rate',
    target: 96,
    suffix: '%',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20'
  }
];

export default function StatsSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    courses: 0,
    students: 0,
    rating: 0,
    completion: 0
  });
  
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1800; // 1.8 seconds animation
    const steps = 60;
    const intervalTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        courses: Math.min(Math.round(5 * progress), 5),
        students: Math.min(Math.round(100 * progress), 100),
        rating: Math.min(Number((4.9 * progress).toFixed(1)), 4.9),
        completion: Math.min(Math.round(96 * progress), 96)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-16 bg-[#080c16] border-y border-white/10 relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {statsData.map((stat) => {
            const Icon = stat.icon;
            let displayVal = counts[stat.id];
            
            if (stat.isDecimal) {
              displayVal = Number(displayVal).toFixed(1);
            }

            return (
              <div 
                key={stat.id}
                className="rounded-2xl bg-[#0f172a] border border-white/10 p-6 sm:p-8 flex flex-col items-center text-center group hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(0,229,255,0.15)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>

                <div className="font-sora text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-2 font-mono">
                  {displayVal}{stat.suffix}
                </div>

                <div className="text-gray-400 text-xs sm:text-sm font-manrope font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}