import React from 'react';
import { Quote } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

export const CustomerStories: React.FC = () => {
  const stories = siteConfig.customerStories;

  return (
    <section id="stories" className="py-20 md:py-28 relative border-t border-white/[0.06] bg-[#0c0c0f]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header (Scalable Framer Exact Layout) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-text-muted font-medium mb-3">
            <span>{stories.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-sans">
            {stories.title}
          </h2>
          <p className="text-base sm:text-lg text-text-muted">
            {stories.subtitle}
          </p>
        </div>

        {/* Testimonials Grid (Scalable Framer Exact Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stories.testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-[#0f0f14] border border-white/[0.08] hover:border-brand-violet/40 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="mb-6">
                <Quote className="w-5 h-5 text-brand-violet/40 mb-3" />
                <p className="text-sm text-text-muted leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-violet/20 border border-brand-violet/30 flex items-center justify-center text-xs font-bold text-brand-violet font-mono">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">{t.author}</div>
                  <div className="text-[11px] text-text-dim">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
