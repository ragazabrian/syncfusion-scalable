import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

interface CtaBannerProps {
  onOpenDemo: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenDemo }) => {
  const cta = siteConfig.ctaBanner;

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#09090c]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        
        {/* Glow Container (Scalable Framer Exact Layout) */}
        <div className="relative rounded-3xl p-8 sm:p-14 border border-white/10 bg-gradient-to-b from-[#141420] via-[#0d0d14] to-[#0a0a0e] shadow-[0_0_80px_rgba(99,105,255,0.18)] overflow-hidden text-center">
          
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-violet/25 blur-[120px] pointer-events-none rounded-full" />

          {/* Heading */}
          <h2 className="relative z-10 text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 max-w-2xl mx-auto font-sans">
            {cta.title}
          </h2>

          <p className="relative z-10 text-base sm:text-lg text-text-muted max-w-xl mx-auto mb-8 leading-relaxed">
            {cta.subtitle}
          </p>

          {/* CTA Button */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white rounded-full overflow-hidden transition-all duration-300 group shadow-[0_0_35px_rgba(99,105,255,0.5)] hover:shadow-[0_0_50px_rgba(99,105,255,0.8)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-violet via-indigo-600 to-brand-deepViolet group-hover:scale-105 transition-transform" />
              <span className="relative z-10 flex items-center gap-1.5">
                {cta.ctaButton}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
