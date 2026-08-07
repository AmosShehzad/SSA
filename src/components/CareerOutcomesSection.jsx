import { ArrowUpRight, Sparkles } from 'lucide-react';

const outcomes = [
  {
    emoji: "🌐",
    title: "Global Freelancing",
    badge: "Upwork & Fiverr",
    desc: "Master profile optimization, gig setup, and battle-tested cold proposal scripts to win international clients."
  },
  {
    emoji: "⚡",
    title: "5x AI Productivity",
    badge: "Workflow Speed",
    desc: "Use state-of-the-art AI automation tools to complete high-paying client deliverables in half the time."
  },
  {
    emoji: "🚀",
    title: "Client-Ready Portfolio",
    badge: "Live Projects",
    desc: "Replace empty resumes with 4+ live, verified project links that immediately prove your technical skills."
  },
  {
    emoji: "👨‍🏫",
    title: "1-on-1 Mentorship",
    badge: "Direct Guidance",
    desc: "Get your code reviewed, questions answered, and freelancing strategies refined by expert instructors."
  }
];

export default function CareerOutcomesSection() {
  return (
    <section className="py-20 bg-[#080c16] border-y border-white/10 relative overflow-hidden" id="career">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Concise Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Career & Monetization
          </div>
          
          <h2 className="font-sora text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Where Your Skills <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Take You</span>
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base font-manrope max-w-xl mx-auto">
            From learning to earning—equip yourself with client outreach scripts, profile optimization, and remote work strategies.
          </p>
        </div>

        {/* 4 Crisp High-Impact Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((item, idx) => (
            <div 
              key={idx}
              className="group relative rounded-2xl bg-[#0f172a] border border-white/10 p-6 flex flex-col justify-between hover:border-cyan-400/60 hover:bg-[#131d31] hover:shadow-[0_0_30px_rgba(0,229,255,0.15)] hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Emoji + Badge Bar */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {item.emoji}
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2.5 py-1 rounded-md">
                    {item.badge}
                  </span>
                </div>

                {/* Title & Micro-Copy */}
                <div>
                  <h3 className="font-sora font-bold text-white text-lg group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                    {item.title}
                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-manrope leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}