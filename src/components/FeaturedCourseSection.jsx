import React from 'react';
import { ArrowRight, CheckCircle2, Clock, ShieldCheck, Sparkles } from 'lucide-react';

const featuredModules = [
  {
    emoji: "🤖",
    title: "Agentic AI & Prompt Engineering",
    desc: "Master GPT-4o, Claude 3.5, AI Agents, and custom prompt workflows for business automation."
  },
  {
    emoji: "⚡",
    title: "Full-Stack Web App Development",
    desc: "Build responsive, high-speed agency sites and web apps using React, Tailwind CSS, & Vercel."
  },
  {
    emoji: "📈",
    title: "Advanced Digital Marketing & Ads",
    desc: "Master high-ROI Meta & Google Ads, SEO strategies, sales funnels, and performance marketing."
  },
  {
    emoji: "📊",
    title: "Python Automation & Data Analytics",
    desc: "Automate repetitive data tasks and build interactive executive sales dashboards with Pandas."
  },
  {
    emoji: "🎨",
    title: "Generative AI Media & UI/UX Design",
    desc: "Create hyper-realistic brand imagery and promotional AI video ads with Midjourney & Canva Pro."
  },
  {
    emoji: "💼",
    title: "Freelancing & Client Acquisition",
    desc: "Complete profile setup on Upwork & Fiverr with cold outreach proposal templates that convert."
  }
];

export default function FeaturedCourseSection() {
  return (
    <section 
      id="most-popular" 
      className="py-20 sm:py-28 bg-[#0b0f19] relative overflow-hidden scroll-mt-24"
    >
      {/* Background Glow Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Main Card Wrapper */}
        <div className="rounded-3xl bg-[#111827]/90 backdrop-blur-xl border border-white/10 p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden group hover:border-cyan-400/30 transition-all duration-500">
          
          {/* Top Badges Bar */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-cyan-300 bg-cyan-400/10 px-4 py-1.5 rounded-full border border-cyan-400/20">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              FEATURED PROGRAM
            </span>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>3 Months Hands-On</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Admissions Open</span>
            </div>
          </div>

          {/* Program Titles & Overview */}
          <div className="space-y-4 max-w-3xl mb-12">
            <h2 className="font-sora text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Smart Freelancer <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Program</span>
            </h2>
            <p className="text-cyan-400 font-sora font-semibold text-lg sm:text-xl">
              3-Month Practical Digital Marketing, AI & Freelancing Masterclass
            </p>
            <p className="text-gray-300 text-base sm:text-lg font-manrope leading-relaxed">
              A comprehensive hands-on program designed to take you from beginner to job-ready freelancer. Master performance digital marketing, AI workflows, web development, analytics, design, and high-paying client outreach strategies.
            </p>
          </div>

          {/* Perfectly Aligned 6-Module Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-12">
            {featuredModules.map((mod, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#0b0f19]/80 border border-white/10 hover:border-cyan-400/50 hover:bg-[#131d31] transition-all duration-300 group/item hover:-translate-y-1 shadow-md flex flex-col justify-between h-full"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl p-3 rounded-xl bg-white/5 border border-white/10 group-hover/item:bg-cyan-400/10 group-hover/item:border-cyan-400/30 transition-all shrink-0">
                    {mod.emoji}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-sora font-bold text-white text-base sm:text-lg group-hover/item:text-cyan-400 transition-colors leading-snug">
                      {mod.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm font-manrope leading-relaxed mt-2">
                      {mod.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action & Trust Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
            
            <a 
              href="#curriculum"
              className="bg-cyan-400 hover:bg-cyan-300 text-[#0b0f19] font-sora font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-cyan-400/20 transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 cursor-pointer group/btn shrink-0"
            >
              <span>Explore Full Curriculum</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </a>

            {/* Quick Guarantees */}
            <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-gray-300 font-mono">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                Live Q&A Mentorship
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                Verified Certification
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}