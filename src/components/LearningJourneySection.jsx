import React, { useState } from 'react';
import { 
  Bot, 
  Megaphone, 
  Globe, 
  Code2, 
  Palette, 
  Check, 
  Copy, 
  Terminal, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

const modules = [
  {
    id: '01',
    badge: 'MODULE_01',
    cmd: 'cat ~/curriculum/01_agentic_ai.json',
    title: 'Agentic AI & Automation',
    shortTitle: '01. Agentic AI',
    icon: Bot,
    description: 'Build autonomous AI agents, intelligent chatbots, and multi-app workflow automation systems.',
    skills: [
      'Agentic AI & Autonomous Multi-Agent Workflows',
      'Generative AI (GPT-4o, Claude 3.5 Sonnet)',
      'Custom Knowledge-Base AI Chatbots',
      'Automated Workflows (n8n, Make & Zapier)',
      'Advanced Prompt Engineering Strategies'
    ],
    tools: ['Python', 'OpenAI API', 'Claude 3.5', 'n8n', 'LangChain', 'Streamlit']
  },
  {
    id: '02',
    badge: 'MODULE_02',
    cmd: 'cat ~/curriculum/02_digital_marketing.json',
    title: 'Digital Marketing & Ads',
    shortTitle: '02. Marketing',
    icon: Megaphone,
    description: 'Master data-driven Facebook, Instagram & Google Ad campaigns to scale real businesses.',
    skills: [
      'Meta Ads Manager & Audience Targeting',
      'Google Search & Display Campaign Setup',
      'High-Converting Funnel Copywriting',
      'Client Pitching & Proposal Frameworks',
      'ROAS Optimization & Analytics'
    ],
    tools: ['Meta Business Suite', 'Google Ads', 'GA4', 'Canva Pro', 'Zapier']
  },
  {
    id: '03',
    badge: 'MODULE_03',
    cmd: 'cat ~/curriculum/03_fullstack_dev.json',
    title: 'Full-Stack Web Dev',
    shortTitle: '03. Web Dev',
    icon: Globe,
    description: 'Construct modern, high-speed web apps with React, Next.js, Tailwind, and REST APIs.',
    skills: [
      'Modern React, JSX & Custom Hooks',
      'Tailwind CSS v4 & Responsive Layouts',
      'Next.js App Router & Server Components',
      'RESTful APIs & Backend Integration',
      'Deployment on Vercel & Netlify'
    ],
    tools: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Git/GitHub', 'Vercel']
  },
  {
    id: '04',
    badge: 'MODULE_04',
    cmd: 'cat ~/curriculum/04_python_analytics.json',
    title: 'Python & Data Analytics',
    shortTitle: '04. Python',
    icon: Code2,
    description: 'Automate repetitive tasks, scrape web data, and build custom data processing scripts.',
    skills: [
      'Python Syntax & Object-Oriented Logic',
      'Web Scraping with BeautifulSoup & Selenium',
      'Automated Data Processing with Pandas',
      'API Integrations & Custom Webhooks',
      'Database Operations & Storage'
    ],
    tools: ['Python 3', 'Pandas', 'Jupyter', 'BeautifulSoup', 'PostgreSQL', 'FastAPI']
  },
  {
    id: '05',
    badge: 'MODULE_05',
    cmd: 'cat ~/curriculum/05_uiux_design.json',
    title: 'AI Media & UI/UX Design',
    shortTitle: '05. UI/UX',
    icon: Palette,
    description: 'Design world-class user interfaces, prototypes, and generative AI media assets.',
    skills: [
      'Figma UI Design & Component Systems',
      'Wireframing & Interactive Prototyping',
      'Midjourney & DALL-E Visual Generation',
      'Client Case Study Portfolio Creation',
      'UX Research & User Flow Mapping'
    ],
    tools: ['Figma', 'Midjourney', 'DALL-E 3', 'Adobe CC', 'Relume']
  }
];

export default function CurriculumTerminal() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeModule = modules[selectedIdx];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeModule.cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="curriculum" className="py-12 md:py-20 bg-[#0b0f19] text-gray-200">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        
        {/* Terminal Wrapper Window */}
        <div className="rounded-2xl bg-[#0d1322] border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 overflow-hidden">
          
          {/* macOS Top Bar */}
          <div className="bg-[#121827] px-4 py-3 border-b border-white/10 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 shrink-0">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-gray-400 truncate max-w-[200px] sm:max-w-none">
              <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="truncate">smart-skills-cli — bash</span>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-300 hover:text-white transition-all active:scale-95 shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 hidden sm:inline">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-gray-400" />
                  <span className="hidden sm:inline">Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Tab Switcher (Horizontal Scrollbar on Small Screens) */}
          <div className="md:hidden border-b border-white/10 bg-[#0a0e1a] p-2">
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1">
              {modules.map((m, idx) => {
                const Icon = m.icon;
                const isActive = selectedIdx === idx;
                return (
                  <button
                    key={m.id}
                    onClick={() => setSelectedIdx(idx)}
                    className={`whitespace-nowrap flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono transition-all ${
                      isActive
                        ? 'bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 font-bold'
                        : 'bg-white/5 border border-white/5 text-gray-400 hover:text-white'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-gray-400'}`} />
                    <span>{m.shortTitle}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Layout Grid */}
          <div className="flex flex-col md:flex-row">
            
            {/* Desktop Sidebar Navigation */}
            <div className="hidden md:flex flex-col w-72 border-r border-white/10 bg-[#0a0e1a] p-4 shrink-0">
              <span className="font-mono text-[10px] tracking-wider uppercase text-gray-500 font-bold mb-3 px-2">
                SELECT SKILL MODULE:
              </span>

              <div className="space-y-1.5">
                {modules.map((m, idx) => {
                  const Icon = m.icon;
                  const isActive = selectedIdx === idx;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setSelectedIdx(idx)}
                      className={`w-full text-left flex items-center justify-between p-3 rounded-xl font-sora text-xs transition-all border ${
                        isActive
                          ? 'bg-cyan-500/10 border-cyan-400/40 text-white shadow-lg shadow-cyan-500/5'
                          : 'border-transparent text-gray-400 hover:bg-white/5 hover:text-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-3 truncate">
                        <div className={`p-2 rounded-lg ${isActive ? 'bg-cyan-400/20 text-cyan-400' : 'bg-white/5 text-gray-400'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="truncate">
                          <p className="font-mono text-[10px] text-cyan-400/80 font-semibold">{m.badge}</p>
                          <p className="font-bold truncate text-xs">{m.title}</p>
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'text-cyan-400 translate-x-1' : 'text-gray-600'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Terminal Main Content Area */}
            <div className="flex-1 p-4 sm:p-6 md:p-8 font-mono bg-[#0d1322] overflow-x-hidden">
              
              {/* Command Prompt Line */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 pb-4 border-b border-white/10 mb-6 flex-wrap">
                <span className="text-emerald-400 font-bold">student@smart-academy:~$</span>
                <span className="text-cyan-300 font-semibold break-all">{activeModule.cmd}</span>
                <span className="w-2 h-4 bg-cyan-400 animate-pulse inline-block shrink-0" />
              </div>

              {/* Module Header */}
              <div className="mb-6">
                <span className="inline-block px-2.5 py-1 rounded bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-bold mb-2">
                  {activeModule.badge}
                </span>
                <h3 className="font-sora text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  {activeModule.title}
                </h3>
                <p className="font-manrope text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">
                  {activeModule.description}
                </p>
              </div>

              {/* Core Skills Checklist */}
              <div className="mb-6">
                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-3">
                  // CORE SKILLS COVERED:
                </p>
                <div className="space-y-2">
                  {activeModule.skills.map((skill, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-tight">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack & Tools */}
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-3">
                  // STACK & TOOLS MASTERED:
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeModule.tools.map((tool, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-[#161f33] border border-cyan-500/20 text-cyan-300 text-xs font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}