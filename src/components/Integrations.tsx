import React from 'react';
import { Check, Code2, Terminal, Cloud, Zap, Layers, Github } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

export const Integrations: React.FC = () => {
  const integrations = siteConfig.integrations;

  const iconMap: Record<string, React.ReactNode> = {
    Code: <Code2 className="w-5 h-5 text-brand-violet" />,
    Terminal: <Terminal className="w-5 h-5 text-emerald-400" />,
    Cloud: <Cloud className="w-5 h-5 text-blue-400" />,
    Zap: <Zap className="w-5 h-5 text-amber-400" />,
    Figma: <Layers className="w-5 h-5 text-purple-400" />,
    Github: <Github className="w-5 h-5 text-white" />
  };

  return (
    <section id="integrations" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header (Scalable Framer Exact Layout) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-text-muted font-medium mb-3">
            <span>{integrations.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-sans">
            {integrations.title}
          </h2>
          <p className="text-base sm:text-lg text-text-muted">
            {integrations.subtitle}
          </p>
        </div>

        {/* Integration Grid Cards (Scalable Framer Exact Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {integrations.tools.map((tool) => (
            <div
              key={tool.name}
              className="p-5 rounded-3xl bg-[#0e0e14] border border-white/[0.08] hover:border-brand-violet/40 transition-all duration-300 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center p-2 group-hover:scale-105 transition-transform">
                  {iconMap[tool.icon] || <Zap className="w-5 h-5 text-brand-violet" />}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{tool.name}</h4>
                  <p className="text-xs text-text-dim">{tool.desc}</p>
                </div>
              </div>

              {/* Scalable Framer Status Checkbox indicator */}
              <div className="w-5 h-5 rounded-full bg-brand-neonDim border border-brand-neon/30 flex items-center justify-center text-brand-neon shrink-0">
                <Check className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
