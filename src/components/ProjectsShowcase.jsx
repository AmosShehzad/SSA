import React, { useState } from 'react';
import { 
  Bot, 
  Zap, 
  Terminal, 
  ExternalLink, 
  Sparkles, 
  Code2, 
  Layers,
  Cpu
} from 'lucide-react';

const projects = [
  {
    id: 'ai-bot',
    category: 'AI & Python',
    title: 'Agentic AI Support Bot',
    description: 'Autonomous AI agent trained on company data handling customer queries 24/7.',
    tags: ['Python', 'OpenAI API', 'Claude 3.5', 'Streamlit'],
    deliverable: 'Live AI Web App',
    badgeIcon: Bot,
    glowColor: 'from-cyan-500/20 via-blue-500/20 to-purple-500/20',
    borderColor: 'group-hover:border-cyan-400/50',
    accentBadge: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/30',
    // Simulated GIF Preview Visuals
    previewType: 'terminal',
    lines: [
      '> Initializing Agentic Workflow...',
      '> Vector Store Connected [10,000+ Docs]',
      '> Query Received: "How to integrate API?"',
      '> Agent Confidence: 99.4% [Response Sent]'
    ]
  },
  {
    id: 'agency-app',
    category: 'Web Development',
    title: 'Agency Web Application',
    description: 'Lightning-fast responsive website optimized for client lead acquisition and conversions.',
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'Vercel'],
    deliverable: 'Live Portfolio Site',
    badgeIcon: Zap,
    glowColor: 'from-amber-500/20 via-orange-500/20 to-rose-500/20',
    borderColor: 'group-hover:border-amber-400/50',
    accentBadge: 'bg-amber-400/10 text-amber-400 border-amber-400/30',
    // Simulated GIF Preview Visuals
    previewType: 'app',
    lines: [
      '⚡ Next.js 15 Server Components Running',
      '📈 PageSpeed Score: 100/100 Mobile & Desktop',
      '🎨 Tailwind CSS v4 Design Tokens Injected',
      '🚀 Deployed on Vercel Edge Network'
    ]
  },
  {
    id: 'auto-pipeline',
    category: 'Automation & Workflow',
    title: 'Automated Lead Engine',
    description: 'Multi-platform scraper and email enrichment system generating qualified B2B leads.',
    tags: ['N8N', 'Python', 'Webhooks', 'Make.com'],
    deliverable: 'Production Automation Pipeline',
    badgeIcon: Cpu,
    glowColor: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
    borderColor: 'group-hover:border-emerald-400/50',
    accentBadge: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/30',
    // Simulated GIF Preview Visuals
    previewType: 'pipeline',
    lines: [
      '🔄 Webhook Triggered [Upwork & LinkedIn]',
      '🔍 Enriching Contact Data via API...',
      '📧 AI Draft Generated & Queued in CRM',
      '✅ 3 Retainer Pitch Calls Scheduled Today'
    ]
  }
];

export default function ProjectsShowcase() {
  const [activeTab, setActiveTab] = useState(projects[0].id);

  return (
    <section id="projects" className="py-12 md:py-20 bg-[#0b0f19] relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-cyan-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-xs font-mono font-semibold text-cyan-400 tracking-wider uppercase mb-2.5">
            CLIENT-READY PORTFOLIO
          </span>
          <h2 className="font-sora text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Real Projects You Will <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Build & Ship</span>
          </h2>
        </div>

        {/* ================= MOBILE VIEW (Tabbed View + Animated GIF Screen) ================= */}
        <div className="block lg:hidden">
          {/* Mobile Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-3 mb-5 scrollbar-none snap-x">
            {projects.map((item) => {
              const Icon = item.badgeIcon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`snap-start whitespace-nowrap flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-sora font-semibold transition-all border ${
                    isActive
                      ? 'bg-cyan-400 text-[#0b0f19] border-cyan-400 shadow-md shadow-cyan-400/20'
                      : 'bg-[#121827] text-gray-400 border-white/10'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {item.title}
                </button>
              );
            })}
          </div>

          {/* Active Mobile Project Display */}
          {projects.filter(p => p.id === activeTab).map((item) => {
            const Icon = item.badgeIcon;
            return (
              <div 
                key={item.id}
                className="rounded-2xl bg-[#121827]/90 border border-white/10 p-4 relative overflow-hidden"
              >
                {/* Simulated Animated GIF Preview Display */}
                <div className="relative h-36 rounded-xl bg-[#080c14] border border-white/10 p-3 overflow-hidden font-mono text-[11px] mb-4 flex flex-col justify-between">
                  {/* Moving Radar Scanline Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent animate-pulse pointer-events-none" />
                  
                  {/* Top Status Bar */}
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 z-10">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-emerald-400 text-[10px] font-bold tracking-wider uppercase">LIVE PREVIEW</span>
                    </div>
                    <span className="text-gray-500 text-[10px]">{item.category}</span>
                  </div>

                  {/* Animated Terminal / Code Output (GIF Simulator) */}
                  <div className="space-y-1 my-1 z-10 text-gray-300">
                    {item.lines.map((line, idx) => (
                      <p key={idx} className="truncate transition-all duration-300">
                        {line}
                      </p>
                    ))}
                  </div>

                  {/* Animated Cursor Footer */}
                  <div className="flex items-center gap-1 text-cyan-400 font-bold z-10 text-[10px]">
                    <span>STATUS: ACTIVE</span>
                    <span className="animate-pulse">▌</span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold border ${item.accentBadge}`}>
                    {item.category}
                  </span>
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                    <Icon className="w-4 h-4 text-cyan-400" />
                  </div>
                </div>

                <h3 className="font-sora text-lg font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="font-manrope text-xs text-gray-400 mb-3 line-clamp-2">
                  {item.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-[#182032] text-gray-300 font-mono text-[10px] border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Deliverable Footer */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-500">Deliverable:</span>
                  <span className="text-cyan-400 font-semibold">{item.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= DESKTOP VIEW (Grid Cards with Animated Previews) ================= */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {projects.map((item) => {
            const Icon = item.badgeIcon;
            return (
              <div
                key={item.id}
                className={`group flex flex-col justify-between rounded-2xl bg-[#121827]/90 border border-white/10 ${item.borderColor} p-5 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden`}
              >
                <div>
                  {/* Animated Simulated GIF Screen Header */}
                  <div className="relative h-36 rounded-xl bg-[#080c14] border border-white/10 p-3 overflow-hidden font-mono text-[11px] mb-5 flex flex-col justify-between group-hover:border-cyan-400/30 transition-colors">
                    {/* Background Scan Beam Animation */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent animate-pulse pointer-events-none" />
                    
                    {/* Visual Window Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-white/10 z-10">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span className="text-emerald-400 text-[10px] font-bold tracking-wider uppercase">SIMULATED DEMO</span>
                      </div>
                      <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                    </div>

                    {/* Animated Lines */}
                    <div className="space-y-1 my-1 z-10 text-gray-300">
                      {item.lines.map((line, idx) => (
                        <p key={idx} className="truncate group-hover:text-white transition-colors">
                          {line}
                        </p>
                      ))}
                    </div>

                    {/* Terminal Prompt Bar */}
                    <div className="flex items-center gap-1 text-cyan-400 font-bold z-10 text-[10px]">
                      <span>READY FOR DEPLOYMENT</span>
                      <span className="animate-pulse">▌</span>
                    </div>
                  </div>

                  {/* Header Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2.5 py-0.5 rounded-md text-xs font-mono font-bold border ${item.accentBadge}`}>
                      {item.category}
                    </span>
                    <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-400/30 transition-colors">
                      <Icon className="w-4 h-4 text-cyan-400" />
                    </div>
                  </div>

                  <h3 className="font-sora text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-manrope text-sm text-gray-400 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md bg-[#182032] text-gray-300 font-mono text-xs border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Deliverable */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-500">Deliverable:</span>
                  <span className="text-cyan-400 font-semibold">{item.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}