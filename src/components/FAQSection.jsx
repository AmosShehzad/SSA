import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

const faqs = [
  {
    question: "Do I need prior coding or technical experience?",
    answer: "No prior experience is required. We start from ground zero and build up to advanced Agentic AI, full-stack web development, and workflow automation step-by-step."
  },
  {
    question: "What kind of projects will I build during the program?",
    answer: "You will build production-ready projects including custom AI support agents, multi-platform scrapers, high-converting React/Next.js web apps, and automated marketing funnels."
  },
  {
    question: "How are the classes structured?",
    answer: "Classes are hands-on and project-based. You get live interactive sessions, direct mentorship code reviews, lifetime access to recorded modules, and CLI resources."
  },
  {
    question: "Will I receive job assistance or portfolio support?",
    answer: "Yes! We work directly on building your live portfolio website, personal branding, and client outreach pipelines so you can start acquiring freelance clients or land tech roles."
  },
  {
    question: "How long do I have access to the curriculum and updates?",
    answer: "You get lifetime access to all course materials, code repositories, and future updates to tools like OpenAI, Claude, Next.js, and n8n at no extra cost."
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-12 md:py-20 bg-[#0b0f19] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-xs font-mono font-semibold text-cyan-400 tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            GOT QUESTIONS?
          </span>
          <h2 className="font-sora text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Questions</span>
          </h2>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => toggleFaq(idx)}
                className={`group rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                  isOpen
                    ? 'bg-[#121a2e] border-cyan-400/60 shadow-lg shadow-cyan-500/10'
                    : 'bg-[#121827]/80 border-white/10 hover:border-cyan-400/40 hover:bg-[#161f33] hover:-translate-y-0.5 hover:shadow-md hover:shadow-cyan-400/5'
                }`}
              >
                {/* Question Row */}
                <div className="p-4 sm:p-5 flex items-center justify-between gap-4">
                  <span className={`font-sora text-sm sm:text-base font-semibold transition-colors duration-200 ${
                    isOpen ? 'text-cyan-300' : 'text-gray-200 group-hover:text-white'
                  }`}>
                    {faq.question}
                  </span>

                  <div className={`p-2 rounded-xl transition-all duration-300 shrink-0 ${
                    isOpen 
                      ? 'bg-cyan-400 text-[#0b0f19] rotate-180' 
                      : 'bg-white/5 text-gray-400 group-hover:bg-cyan-400/20 group-hover:text-cyan-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                {/* Answer Expandable Area */}
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 pt-0 font-manrope text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-cyan-500/10 mt-1">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}