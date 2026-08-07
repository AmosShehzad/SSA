import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Home, 
  BookOpen, 
  Sparkles, 
  Award, 
  HelpCircle, 
  Info 
} from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Master smooth scroll handler for all links and buttons
  const handleScroll = (e, target) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile drawer on link click

    if (target === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'bottom') {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      return;
    }

    // Scroll to specific section ID
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Nav items from code 1
  const navLinks = [
    { name: 'Home', target: 'top', icon: Home },
    { name: 'Courses', target: 'courses', icon: BookOpen },
    { name: 'Most Popular', target: 'most-popular', icon: Sparkles },
    { name: 'Curriculum', target: 'curriculum', icon: Award },
    { name: 'Why Us', target: 'why-us', icon: HelpCircle },
    { name: 'About Us', target: 'bottom', icon: Info },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#0b0f19]/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl h-24 sm:h-28 flex items-center justify-between">
          
          {/* Brand Logo - Uses /logo.png with large size */}
          <a 
            href="#top" 
            onClick={(e) => handleScroll(e, 'top')} 
            className="flex items-center cursor-pointer"
          >
            <img 
              src="/logo.png" 
              alt="Smart Skills Academy" 
              className="h-20 sm:h-28 md:h-30 lg:h-36 w-auto object-contain transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]" 
            />
          </a>

          {/* DESKTOP NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center gap-7 font-manrope text-base font-semibold">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={`#${link.target}`} 
                onClick={(e) => handleScroll(e, link.target)} 
                className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* DESKTOP ACTION BUTTON (TARGETS #apply) */}
          <div className="hidden lg:flex items-center">
            <a
              href="#apply"
              onClick={(e) => handleScroll(e, 'apply')}
              className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-[#0b0f19] font-sora font-bold text-sm px-6 py-2.5 rounded-xl transition-all shadow-md shadow-cyan-400/20 hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2.5 rounded-xl bg-[#121827] border border-white/10 text-gray-300 hover:text-white hover:border-cyan-400/40 transition-all"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* MOBILE SIDEBAR NAVIGATION DRAWER */}
      {/* Backdrop Overlay */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Sliding Mobile Sidebar Panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-[80%] max-w-xs bg-[#0d1322] border-l border-white/10 z-50 p-6 flex flex-col justify-between transition-transform duration-300 ease-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Mobile Drawer Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
            <img 
              src="/logo.png" 
              alt="Smart Skills Academy" 
              className="h-12 w-auto object-contain" 
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={`#${link.target}`}
                  onClick={(e) => handleScroll(e, link.target)}
                  className="flex items-center gap-3.5 px-4 py-3 rounded-xl font-sora text-sm font-semibold text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all cursor-pointer"
                >
                  <Icon className="w-5 h-5 text-cyan-400" />
                  {link.name}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Mobile Drawer Footer CTA (TARGETS #apply) */}
        <div className="pt-6 border-t border-white/10">
          <a
            href="#apply"
            onClick={(e) => handleScroll(e, 'apply')}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-cyan-400 text-[#0b0f19] font-sora font-bold text-sm shadow-lg shadow-cyan-400/20 active:scale-95 transition-all cursor-pointer"
          >
            Apply Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </aside>
    </>
  );
}