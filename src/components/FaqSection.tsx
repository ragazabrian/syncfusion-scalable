import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = siteConfig.faqs;

  return (
    <section id="faq" className="py-20 md:py-28 relative border-t border-white/[0.06] bg-[#0c0c10]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header (Scalable Framer Exact Layout) */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-text-muted font-medium mb-3">
            <span>{faqs.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-sans">
            {faqs.title}
          </h2>
          <p className="text-base sm:text-lg text-text-muted">
            {faqs.subtitle}
          </p>
        </div>

        {/* Scalable Framer Accordion */}
        <div className="space-y-4">
          {faqs.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl bg-[#0f0f15] border border-white/[0.06] overflow-hidden transition-all duration-200 hover:border-white/15"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 transition-colors"
                >
                  <span className="text-base sm:text-lg font-semibold text-white font-sans">
                    {item.q}
                  </span>
                  <div className={`p-1.5 rounded-full bg-white/[0.04] text-text-muted transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-text-muted leading-relaxed border-t border-white/[0.04] mt-2 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
