import { siteConfig } from '../data/siteConfig';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070a12] pt-16 pb-12 font-manrope">
      <div className="container mx-auto px-6 max-w-7xl space-y-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-3">
            <a href="#">
              <img 
                src="/logo.png" 
                alt="Smart Skills Academy Logo" 
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </a>
            <p className="text-gray-400 text-sm max-w-sm">{siteConfig.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-8 text-sm font-semibold text-gray-400">
            {siteConfig.navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-cyan transition-colors">{link.name}</a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 {siteConfig.academyName}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}