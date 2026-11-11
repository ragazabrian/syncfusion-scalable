import React from 'react';
import { Activity, Clock, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

export const RealTimeData: React.FC = () => {
  const rtd = siteConfig.realTimeData;

  return (
    <section className="py-20 md:py-28 relative border-t border-white/[0.06] bg-[#0c0c10]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header (Scalable Framer Exact Layout) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-text-muted font-medium mb-3">
            <span>{rtd.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-sans">
            {rtd.title}
          </h2>
          <p className="text-base sm:text-lg text-text-muted">
            {rtd.subtitle}
          </p>
        </div>

        {/* Real-Time Showcase Card (Scalable Framer Style) */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#0f0f16] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-neon animate-ping" />
              <h3 className="text-base font-semibold text-white">Live Event Stream</h3>
            </div>
            <span className="text-xs font-mono text-brand-neon bg-brand-neonDim px-2.5 py-1 rounded-full border border-brand-neon/20">
              Synced: 60 FPS WebSockets
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] space-y-2">
              <div className="text-xs text-text-muted">{rtd.profitText}</div>
              <div className="text-2xl font-bold text-white font-sans">$9,432.25</div>
              <div className="text-[11px] text-text-dim flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>1 min ago</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] space-y-2">
              <div className="text-xs text-text-muted">Active Data Pipelines</div>
              <div className="text-2xl font-bold text-brand-neon font-sans">1,457,800 records</div>
              <div className="text-[11px] text-text-dim flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>3 mins ago</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#14141d] border border-white/[0.06] text-xs font-mono text-text-muted flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-neon" />
              <span>{rtd.activity1}</span>
            </div>
            <span className="text-text-dim">Latency: 0.9ms</span>
          </div>
        </div>

      </div>
    </section>
  );
};
