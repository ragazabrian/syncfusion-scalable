import React from 'react';
import { Layers, BarChart2, Workflow, FileText, Database, Bell } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

export const Features: React.FC = () => {
  const feat = siteConfig.features;

  const icons = [
    <Layers className="w-5 h-5 text-brand-violet" />,
    <BarChart2 className="w-5 h-5 text-emerald-400" />,
    <Workflow className="w-5 h-5 text-blue-400" />,
    <FileText className="w-5 h-5 text-amber-400" />,
    <Database className="w-5 h-5 text-purple-400" />,
    <Bell className="w-5 h-5 text-red-400" />
  ];

  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header (Scalable Framer Exact Layout) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-text-muted font-medium mb-3">
            <span>{feat.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-sans">
            {feat.title}
          </h2>
          <p className="text-base sm:text-lg text-text-muted">
            {feat.subtitle}
          </p>
        </div>

        {/* 6 Feature Boxes (Scalable Framer Exact 2x3 or 3x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feat.list.map((item, idx) => (
            <div
              key={item.title}
              className="p-7 rounded-3xl bg-[#0e0e14] border border-white/[0.08] hover:border-brand-violet/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {icons[idx]}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-sans">{item.title}</h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs text-text-dim">
                <span className="font-mono text-[11px]">Syncfusion Core</span>
                <span className="text-brand-violet group-hover:text-brand-neon transition-colors">Enabled →</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
