import React, { useState } from 'react';
import { 
  Brain, 
  Sparkles, 
  Bot, 
  Code2, 
  Layout, 
  TrendingUp, 
  Terminal, 
  Cpu, 
  Globe, 
  Layers 
} from 'lucide-react';

const categories = [
  "All Skills", 
  "AI & Automation", 
  "Development", 
  "Design & Marketing"
];

const skills = [
  { id: 1, name: "Artificial Intelligence", category: "AI & Automation", icon: Brain, color: "from-pink-500/20 to-purple-500/20 text-pink-400 border-pink-500/30" },
  { id: 2, name: "Generative AI", category: "AI & Automation", icon: Sparkles, color: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30" },
  { id: 3, name: "Agentic AI", category: "AI & Automation", icon: Bot, color: "from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30" },
  { id: 4, name: "Workflow Automation", category: "AI & Automation", icon: Cpu, color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30" },
  { id: 5, name: "React & Next.js", category: "Development", icon: Code2, color: "from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30" },
  { id: 6, name: "Full-Stack Web Dev", category: "Development", icon: Terminal, color: "from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/30" },
  { id: 7, name: "API & Web Systems", category: "Development", icon: Globe, color: "from-sky-500/20 to-blue-500/20 text-sky-400 border-sky-500/30" },
  { id: 8, name: "UI/UX Design", category: "Design & Marketing", icon: Layout, color: "from-rose-500/20 to-pink-500/20 text-rose-400 border-rose-500/30" },
  { id: 9, name: "Digital Marketing", category: "Design & Marketing", icon: TrendingUp, color: "from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/30" },
  { id: 10, name: "Brand Strategy", category: "Design & Marketing", icon: Layers, color: "from-violet-500/20 to-purple-500/20 text-violet-400 border-violet-500/30" },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All Skills");

  const filteredSkills = activeCategory === "All Skills" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-12 md:py-20 bg-[#0b0f19] relative overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[250px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-xs font-mono font-semibold text-cyan-400 tracking-wider uppercase mb-3">
            TECHNICAL MASTERY
          </span>
          <h2 className="font-sora text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            High-Demand <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Digital Capabilities</span>
          </h2>
        </div>

        {/* Category Tabs (Horizontally Scrollable on Mobile) */}
        <div className="mb-8 sm:mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center sm:justify-center gap-2 overflow-x-auto pb-3 sm:pb-0 scrollbar-none snap-x">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`snap-start whitespace-nowrap px-4 py-2.5 rounded-xl font-sora text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                    isActive
                      ? 'bg-cyan-400 text-[#0b0f19] border-cyan-400 shadow-lg shadow-cyan-400/20 scale-105'
                      : 'bg-[#121827]/80 text-gray-400 border-white/10 hover:border-cyan-400/40 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid (2 Columns on Mobile, 3 on Tablet, 4 on Desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filteredSkills.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group flex flex-col sm:flex-row items-center sm:items-center gap-2.5 sm:gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#121827]/90 border border-white/10 hover:border-cyan-400/40 hover:bg-[#161f33] transition-all duration-300 text-center sm:text-left cursor-default"
              >
                {/* Icon Box */}
                <div className={`p-2.5 sm:p-3 rounded-xl bg-gradient-to-br ${item.color} border shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Skill Name */}
                <span className="font-sora text-xs sm:text-sm font-bold text-gray-200 group-hover:text-white transition-colors leading-tight">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}