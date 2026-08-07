import React from 'react';
import {
  Brain,
  Target,
  Code,
  Clock,
  Award,
  ShieldCheck,
  Compass,
  Users,
  Globe
} from 'lucide-react';

const featureList = [
  {
    icon: Brain,
    title: "AI-First Learning",
    description: "Explore modern AI tools, automated workflows, and cutting-edge tech."
  },
  {
    icon: Target,
    title: "Practical Skills",
    description: "Focus on actionable skills directly applicable to real-world jobs."
  },
  {
    icon: Code,
    title: "Real Projects",
    description: "Build client-ready portfolio projects instead of passive video watching."
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description: "Study at your own pace with schedules tailored to fit your daily routine."
  },
  {
    icon: Award,
    title: "Industry-Active Tutors",
    description: "Learn directly from top professionals currently thriving in the industry."
  },
  {
    icon: ShieldCheck,
    title: "Money-Back Guarantee",
    description: "Risk-free learning backed by our straightforward satisfaction guarantee."
  },
  {
    icon: Compass,
    title: "Free Career Counseling",
    description: "1-on-1 guidance, resume building, and personalized career roadmaps."
  },
  {
    icon: Users,
    title: "Parent-Tutor Conferences",
    description: "Regular check-ins and progress reports to keep learning on track."
  },
  {
    icon: Globe,
    title: "Learn Anywhere, Anytime",
    description: "Seamless 24/7 access to all coursework from any mobile device or desktop."
  }
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-12 md:py-20 bg-[#0b0f19] relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-xs font-mono font-semibold text-cyan-400 tracking-wider uppercase mb-3">
            ACADEMY DISTINCTION
          </span>
          <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Why Choose <span className="text-cyan-400">Smart Skills Academy?</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg font-manrope">
            Engineering real digital capability — moving beyond traditional video tutorials.
          </p>
        </div>

        {/* Compact 3x3 Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
          {featureList.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative p-4 sm:p-5 rounded-xl bg-[#121827]/80 border border-white/10 hover:border-cyan-400/40 hover:bg-[#162032] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Title Header */}
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 group-hover:bg-cyan-400 group-hover:text-[#0b0f19] transition-all duration-300">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="font-sora text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Card Description */}
                  <p className="font-manrope text-xs sm:text-sm text-gray-400 leading-relaxed pl-0 sm:pl-[52px]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}