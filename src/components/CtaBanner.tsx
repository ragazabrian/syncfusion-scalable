import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Shield } from 'lucide-react';

interface CtaBannerProps {
  onOpenDemo: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#09090c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Glow container */}
        <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 border border-white/10 bg-gradient-to-b from-[#141420] via-[#0d0d14] to-[#0a0a0e] shadow-[0_0_80px_rgba(99,105,255,0.18)] overflow-hidden text-center">
          
          {/* Subtle lighting circles */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-violet/25 blur-[120px] pointer-events-none rounded-full" />
          <div className="absolute -bottom-20 right-10 w-72 h-72 bg-brand-neon/15 blur-[120px] pointer-events-none rounded-full" />

          {/* Badge */}
          <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-brand-neon font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>30-Day Full Evaluation · Zero Risk</span>
          </div>

          {/* Heading */}
          <h2 className="relative z-10 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 max-w-3xl mx-auto leading-[1.12]">
            See it running in your app{' '}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-brand-violet to-emerald-300">
              today.
            </span>
          </h2>

          <p className="relative z-10 text-base sm:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Put Syncfusion UI components, Document SDKs, and AI tooling to work with your real data and workflows. Get answers directly from the engineers who build the controls.
          </p>

          {/* CTA Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto relative inline-flex items-center justify-center gap-2 px-9 py-4 text-base font-semibold text-white rounded-full overflow-hidden transition-all duration-300 group shadow-[0_0_35px_rgba(99,105,255,0.5)] hover:shadow-[0_0_50px_rgba(99,105,255,0.8)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-violet via-indigo-600 to-brand-deepViolet group-hover:scale-105 transition-transform" />
              <span className="relative z-10 flex items-center gap-2">
                Start 30-Day Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full bg-white/[0.04] border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all backdrop-blur-sm"
            >
              Book Architecture Demo
            </button>
          </div>

          {/* Guarantees */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs sm:text-sm text-text-dim">
            <span className="flex items-center gap-1.5 text-text-muted">
              <CheckCircle2 className="w-4 h-4 text-brand-neon" />
              Instant NuGet & npm access
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="flex items-center gap-1.5 text-text-muted">
              <Shield className="w-4 h-4 text-brand-neon" />
              Direct access to core engineering team
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-text-muted">
              No credit card required
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
