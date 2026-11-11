import React from 'react';
import { Layers, Github } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

export const Footer: React.FC = () => {
  const f = siteConfig.footer;

  return (
    <footer className="border-t border-white/[0.08] bg-[#07070a] pt-14 pb-12 text-xs text-text-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Scalable Framer Footer Top Area */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-white/[0.06]">
          
          <div className="space-y-1">
            <div className="text-[11px] font-mono text-text-dim uppercase tracking-wider">Created By</div>
            <div className="text-base font-bold text-white font-sans">{f.createdBy}</div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {f.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-muted hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

        </div>

        {/* Scalable Framer Bottom Copyright & Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-dim">
          <div>{f.copyright}</div>
          
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.brand.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-text-muted hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
