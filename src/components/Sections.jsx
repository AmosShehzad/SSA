import { siteConfig } from '../data/siteConfig';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  PenTool, 
  BarChart, 
  MonitorPlay, 
  Briefcase, 
  Cpu 
} from 'lucide-react';

export function WhyUsSection() {
  const icons = [Cpu, Terminal, PenTool, Briefcase, MonitorPlay, BarChart];
  
  return (
    <section className="py-24 container mx-auto px-6 max-w-7xl">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="font-sora text-3xl md:text-4xl font-bold mb-4">Why Smart Skills Academy?</h2>
        <p className="text-gray-400">More than learning tools — build skills for the future.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.whyUs.map((card, idx) => {
          const Icon = icons[idx];
          return (
            <div key={idx} className="group p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-royal/50 hover:bg-white/[0.05] transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-royal/10 flex items-center justify-center text-royal mb-6 group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-sora text-xl font-semibold mb-3 group-hover:text-royal transition-colors">{card.title}</h3>
              <p className="text-gray-400 font-manrope text-sm leading-relaxed">{card.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function FeaturedCourseSection() {
  const { featuredCourse } = siteConfig;
  return (
    <section className="py-12 container mx-auto px-6 max-w-7xl">
      <div className="p-[1px] rounded-3xl bg-gradient-premium shadow-[0_0_40px_rgba(124,58,237,0.15)]">
        <div className="bg-navy rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="flex-1 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-bold tracking-wider uppercase border border-royal/20">
              {featuredCourse.badge}
            </div>
            <h2 className="font-sora text-3xl md:text-4xl font-bold">{featuredCourse.title}</h2>
            <p className="text-xl font-medium text-white/80">{featuredCourse.subtitle}</p>
            <p className="text-gray-400 leading-relaxed font-manrope">{featuredCourse.description}</p>
            
            <div className="flex flex-wrap items-center gap-6 pt-2 font-manrope font-semibold text-sm">
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg"><CheckCircle2 className="w-4 h-4 text-cyan"/> {featuredCourse.duration}</span>
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-green-400"><span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> {featuredCourse.status}</span>
            </div>
            
            <button className="mt-4 bg-white text-navy px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              Explore Program <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-gradient-premium blur-[60px] opacity-10 rounded-full"></div>
            <div className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h4 className="font-sora text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6">Skills You Will Master</h4>
              <div className="flex flex-wrap gap-2">
                {featuredCourse.skills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-manrope hover:bg-white/10 hover:border-royal/50 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section className="py-24 container mx-auto px-6 max-w-7xl text-center">
      <h2 className="font-sora text-3xl font-bold mb-12">Skills for the Digital Future</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {siteConfig.skillsWeTeach.map((skill, idx) => (
          <div key={idx} className="group px-6 py-3 rounded-xl bg-white/[0.02] border border-white/10 hover:border-cyan/50 hover:bg-cyan/5 cursor-default transition-all duration-300 transform hover:-translate-y-1">
            <span className="font-manrope font-medium text-gray-300 group-hover:text-cyan transition-colors">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function LearningJourneySection() {
  return (
    <section className="py-24 bg-white/[0.01] border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-sora text-3xl md:text-4xl font-bold mb-4">From Learning to Opportunity</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between relative">
          <div className="hidden lg:block absolute top-10 left-10 right-10 h-[1px] bg-gradient-to-r from-royal/50 via-purple/50 to-cyan/50 -z-10"></div>
          
          {siteConfig.learningJourney.map((step, idx) => (
            <div key={idx} className="flex flex-row lg:flex-col items-center lg:items-start gap-6 lg:gap-4 mb-8 lg:mb-0 w-full lg:w-48 group">
              <div className="w-20 h-20 lg:w-16 lg:h-16 shrink-0 rounded-2xl bg-navy border border-white/10 flex items-center justify-center font-sora text-2xl lg:text-xl font-bold text-gray-400 group-hover:text-white group-hover:border-royal group-hover:bg-royal/10 transition-all duration-300 relative z-10 shadow-lg">
                {step.step}
              </div>
              <div className="flex-1 lg:text-left">
                <h4 className="font-sora font-semibold text-lg mb-1">{step.title}</h4>
                <p className="text-sm font-manrope text-gray-400">{step.desc}</p>
              </div>
              {idx < siteConfig.learningJourney.length - 1 && (
                <div className="lg:hidden text-white/20 ml-auto pr-4"><ArrowRight /></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-royal/20 to-purple/20 border border-white/10 p-12 md:p-20 text-center">
          <div className="relative z-10 space-y-6 flex flex-col items-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-cyan border border-white/20">
              Admissions Open
            </span>
            <h2 className="font-sora text-4xl md:text-5xl font-bold text-white">{siteConfig.cta.heading}</h2>
            <p className="text-xl text-gray-300 font-manrope max-w-2xl mx-auto">{siteConfig.cta.text}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button className="bg-white text-navy px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all">
                Apply Now
              </button>
              <button className="bg-transparent border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/5 transition-all">
                Explore Program
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 justify-between items-center gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-premium flex items-center justify-center font-sora font-bold text-white">S</div>
              <span className="font-sora font-bold text-xl">{siteConfig.academyName}</span>
            </div>
            <p className="text-gray-400 font-manrope">{siteConfig.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-6 md:justify-end font-manrope text-sm font-medium text-gray-400">
            {['Home', 'Courses', 'Curriculum', 'Career Center', 'About', 'Admissions'].map(link => (
              <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 font-manrope">
          <p>© 2026 Smart Skills Academy. All rights reserved.</p>
          <div className="flex gap-4">
             <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors">in</div>
             <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors">tw</div>
             <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors">fb</div>
          </div>
        </div>
      </div>
    </footer>
  );
}