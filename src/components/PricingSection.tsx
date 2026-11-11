import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

interface PricingProps {
  onOpenDemo: () => void;
}

export const PricingSection: React.FC<PricingProps> = ({ onOpenDemo }) => {
  const [annual, setAnnual] = useState(true);
  const p = siteConfig.pricing;

  return (
    <section id="pricing" className="py-20 md:py-28 relative border-t border-white/[0.06] bg-[#0b0b0f]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header (Scalable Framer Exact Layout) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-sans">
            {p.title}
          </h2>
          <p className="text-base sm:text-lg text-text-muted mb-8">
            {p.subtitle}
          </p>

          {/* Scalable Framer Annual Billing Switch: Annual | Save 40% */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                !annual ? 'bg-white/10 text-white' : 'text-text-muted hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                annual ? 'bg-brand-violet text-white shadow-md' : 'text-text-muted hover:text-white'
              }`}
            >
              <span>Annual</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-neon text-black font-bold uppercase">
                {p.annualSaveText}
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards (Scalable Framer Exact 2-Card Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {p.plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.isPopular
                  ? 'bg-[#12121c] border-2 border-brand-violet shadow-[0_0_50px_rgba(99,105,255,0.25)]'
                  : 'bg-[#0e0e14] border border-white/[0.08] hover:border-white/20'
              }`}
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 font-sans">{plan.name}</h3>
                
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight font-sans">
                    {annual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-xs text-text-dim font-mono">{plan.period}</span>
                </div>

                <p className="text-xs text-brand-neon font-medium mb-4">{plan.billedText}</p>
                <p className="text-xs sm:text-sm text-text-muted mb-8 leading-relaxed">
                  {plan.desc}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono uppercase text-text-dim tracking-wider mb-3">
                    {plan.featuresTitle}
                  </div>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-muted">
                      <Check className="w-4 h-4 text-brand-neon shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={onOpenDemo}
                  className={`w-full py-3.5 px-6 rounded-2xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                    plan.isPopular
                      ? 'bg-gradient-to-r from-brand-violet to-indigo-600 hover:from-brand-violet/90 hover:to-indigo-500 text-white shadow-[0_0_25px_rgba(99,105,255,0.4)]'
                      : 'bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
