import React from 'react';
import { ArrowRight, Code, Cpu, LineChart, Megaphone, Briefcase, Database } from 'lucide-react';

const allCourses = [
  {
    title: "Smart Freelancer Program",
    icon: Briefcase,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/30",
    desc: "A complete 3-month masterclass combining in-demand digital skills with proven client acquisition strategies to launch your freelance career.",
    tools: ["Upwork", "Fiverr", "LinkedIn", "Cold Email"]
  },
  {
    title: "Generative & Agentic AI",
    icon: Cpu,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/30",
    desc: "Build intelligent autonomous agents and automated workflows. Construct custom chatbots and AI-powered business solutions from scratch.",
    tools: ["GPT-4o", "Claude 3.5", "n8n", "LangChain"]
  },
  {
    title: "Advance Digital Marketing",
    icon: Megaphone,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    border: "border-pink-400/30",
    desc: "Launch high-ROI ad campaigns, build conversion-focused sales funnels, and master advanced SEO for sustained business growth.",
    tools: ["Meta Ads", "Google Ads", "GA4", "Semrush"]
  },
  {
    title: "Python Automation",
    icon: Code,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/30",
    desc: "Write powerful scripts to automate repetitive tasks, scrape live web data, and streamline complex business operations.",
    tools: ["Python", "Selenium", "BeautifulSoup", "APIs"]
  },
  {
    title: "Full-Stack Web Dev",
    icon: Database,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/30",
    desc: "Develop responsive, high-performance web applications and interactive agency websites using modern JavaScript frameworks.",
    tools: ["React", "Next.js", "Tailwind CSS", "Vercel"]
  },
  {
    title: "Data Analytics",
    icon: LineChart,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/30",
    desc: "Transform raw data into actionable insights. Build interactive executive dashboards and comprehensive reporting systems.",
    tools: ["Pandas", "Streamlit", "Jupyter", "Excel"]
  }
];

export default function AllCoursesSection() {
  return (
    <section id="courses" className="py-24 bg-[#0b0f19] scroll-mt-24 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-sora text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Explore Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Premium Courses</span>
          </h2>
          <p className="text-gray-400 font-manrope text-lg">
            Master the most in-demand digital skills of 2026. Choose a specialized track or take the complete Freelancer masterclass.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCourses.map((course, idx) => {
            const Icon = course.icon;
            return (
              <div 
                key={idx} 
                className="group p-8 rounded-2xl bg-[#111827]/80 border border-white/10 hover:border-cyan-400/40 hover:bg-[#151e32] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${course.bg} ${course.border} border`}>
                    <Icon className={`w-6 h-6 ${course.color}`} />
                  </div>
                  
                  <h3 className="font-sora text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-400 font-manrope text-sm leading-relaxed mb-6">
                    {course.desc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {course.tools.map((tool, i) => (
                      <span key={i} className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300 font-mono">
                        {tool}
                      </span>
                    ))}
                  </div>
                  
                  <button className="flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors group/btn">
                    View Course Details 
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}