import { BookOpen, Cpu, Layers, Briefcase } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const iconMap = [BookOpen, Cpu, Layers, Briefcase];

export default function TrustStrip() {
  return (
    <section className="border-y border-white/5 bg-white/[0.015] py-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.trustStrip.map((item, idx) => {
            const Icon = iconMap[idx];
            return (
              <div key={idx} className="flex items-start gap-4 p-2">
                <div className="w-12 h-12 rounded-xl bg-royal/10 border border-royal/20 flex items-center justify-center text-royal shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-sora font-semibold text-white text-base mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm font-manrope leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}