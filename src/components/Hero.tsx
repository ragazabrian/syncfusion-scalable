import React, { useState } from 'react';
import { ArrowRight, ChevronRight, TrendingUp, ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  const [timeframe, setTimeframe] = useState<'Daily' | 'Weekly' | 'Monthly' | 'Yearly'>('Daily');
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const hero = siteConfig.hero;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glow effects matching Scalable Framer */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[480px] bg-gradient-to-tr from-brand-violet/20 via-indigo-600/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[320px] h-[320px] bg-brand-neon/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Scalable Exact Top Announcement Pill */}
        <div className="flex justify-center mb-6">
          <a 
            href={hero.announcementBadge.href}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/20 backdrop-blur-md text-xs text-text-primary transition-all duration-300 group shadow-[0_0_15px_rgba(255,255,255,0.03)]"
          >
            <span className="text-text-muted">{hero.announcementBadge.tag}</span>
            <span className="font-medium text-white">{hero.announcementBadge.title}</span>
            <span className="text-brand-violet flex items-center font-medium group-hover:translate-x-0.5 transition-transform">
              {hero.announcementBadge.actionText} <ChevronRight className="w-3 h-3 ml-0.5" />
            </span>
          </a>
        </div>

        {/* Scalable Exact Headline Layout */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-bold tracking-tight text-white leading-[1.08] mb-6 font-sans">
            {hero.titleLine1}{' '}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-brand-violet to-purple-300">
              {hero.titleItalicWord}
            </span>
            {hero.titleLine2Part2}
          </h1>
          <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto font-normal leading-relaxed">
            {hero.subtitle}
          </p>
        </div>

        {/* Scalable Exact Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto relative inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-full overflow-hidden transition-all duration-300 group shadow-[0_0_28px_rgba(99,105,255,0.45)] hover:shadow-[0_0_40px_rgba(99,105,255,0.7)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-violet via-indigo-600 to-brand-deepViolet group-hover:scale-105 transition-transform" />
            <span className="relative z-10 flex items-center gap-1.5">
              {hero.primaryCta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </button>

          <a
            href="#product"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-text-primary rounded-full bg-white/[0.04] border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all backdrop-blur-sm"
          >
            {hero.secondaryCta}
          </a>
        </div>

        {/* Scalable Exact Social Proof Ticker: "Used by global powerhouses like" */}
        <div className="text-center mb-12">
          <p className="text-xs text-text-dim mb-4 font-medium tracking-wide">
            {hero.socialProofIntro}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-70">
            {hero.powerhouses.map((p) => (
              <span key={p.name} className="text-sm sm:text-base font-semibold text-white/80 hover:text-white transition-colors cursor-default tracking-wider">
                {p.name}
              </span>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SCALABLE EXACT HERO DASHBOARD MOCKUP                                       */}
        {/* ========================================================================= */}
        <div className="relative max-w-5xl mx-auto">
          {/* Subtle Outer Frame Glow */}
          <div className="absolute -inset-1 bg-gradient-to-b from-brand-violet/25 via-white/5 to-transparent rounded-3xl blur-2xl opacity-60" />

          <div className="relative rounded-3xl border border-white/10 bg-[#0d0d0d]/80 backdrop-blur-2xl p-5 sm:p-7 shadow-2xl overflow-hidden space-y-5">
            
            {/* Top Row: 3 Metric Cards side by side (Scalable Framer Exact Layout) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Metric 1 */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#141414]/80 border border-white/10 relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-text-muted font-medium">{hero.dashboardMetrics.stat1.title}</span>
                  <span className="px-2 py-0.5 rounded-full bg-brand-neonDim text-brand-neon text-[10px] font-bold font-mono">
                    {hero.dashboardMetrics.stat1.change}
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
                  {hero.dashboardMetrics.stat1.value}
                </div>
              </div>

              {/* Metric 2 */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#141414]/80 border border-white/10 relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-text-muted font-medium">{hero.dashboardMetrics.stat2.title}</span>
                  <span className="px-2 py-0.5 rounded-full bg-brand-neonDim text-brand-neon text-[10px] font-bold font-mono">
                    {hero.dashboardMetrics.stat2.change}
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
                  {hero.dashboardMetrics.stat2.value}
                </div>
              </div>

              {/* Metric 3 */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#141414]/80 border border-white/10 relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-text-muted font-medium">{hero.dashboardMetrics.stat3.title}</span>
                  <span className="px-2 py-0.5 rounded-full bg-brand-neonDim text-brand-neon text-[10px] font-bold font-mono">
                    {hero.dashboardMetrics.stat3.change}
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
                  {hero.dashboardMetrics.stat3.value}
                </div>
              </div>

            </div>

            {/* Bottom Row: Large Chart + Total Balance Card (Scalable Framer Exact Layout) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              
              {/* Left / Center: Revenue Overview Chart (Span 8) */}
              <div className="lg:col-span-8 p-5 rounded-2xl bg-[#141414]/80 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-2 border-b border-white/[0.06]">
                    <div className="text-sm font-semibold text-white">Revenue Overview</div>
                    
                    {/* Timeframe switcher (Daily, Weekly, Monthly, Yearly) */}
                    <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-xl border border-white/[0.08] text-xs">
                      {(['Daily', 'Weekly', 'Monthly', 'Yearly'] as const).map((t) => (
                        <button
                          key={t}
                          onClick={() => setTimeframe(t)}
                          className={`px-2.5 py-1 rounded-lg transition-colors ${
                            timeframe === t 
                              ? 'bg-brand-violet text-white font-medium' 
                              : 'text-text-muted hover:text-white'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Chart Graph SVG with Y-Axis and X-Axis */}
                  <div className="flex gap-3 pt-3">
                    {/* Y-Axis */}
                    <div className="flex flex-col justify-between text-[10px] font-mono text-text-dim pr-1">
                      {hero.dashboardMetrics.revenueOverview.yAxisLabels.map((lbl) => (
                        <span key={lbl}>{lbl}</span>
                      ))}
                    </div>

                    {/* Chart Canvas / SVG */}
                    <div className="flex-1 h-44 relative overflow-hidden flex flex-col justify-end">
                      <svg className="w-full h-full" viewBox="0 0 500 140" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="scalableWaveGlow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#49c2a9" stopOpacity="0.35" />
                            <stop offset="100%" stopColor="#49c2a9" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,110 C80,120 120,40 220,70 C320,100 380,20 500,45 L500,140 L0,140 Z"
                          fill="url(#scalableWaveGlow)"
                        />
                        <path
                          d="M0,110 C80,120 120,40 220,70 C320,100 380,20 500,45"
                          fill="none"
                          stroke="#49c2a9"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <circle cx="220" cy="70" r="4.5" fill="#ffffff" stroke="#49c2a9" strokeWidth="2" className="animate-ping" />
                        <circle cx="220" cy="70" r="4" fill="#ffffff" stroke="#49c2a9" strokeWidth="2" />
                      </svg>

                      {/* X-Axis */}
                      <div className="flex justify-between text-[10px] font-mono text-text-dim border-t border-white/[0.06] pt-2">
                        {hero.dashboardMetrics.revenueOverview.xAxisLabels.map((xlbl) => (
                          <span key={xlbl}>{xlbl}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Categories Below Chart (Scalable Framer Exact Layout) */}
                <div className="flex flex-wrap items-center gap-2 pt-4 mt-2 border-t border-white/[0.06]">
                  {hero.dashboardMetrics.revenueOverview.categories.map((cat, idx) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(idx)}
                      className={`text-xs px-3 py-1 rounded-full transition-colors ${
                        activeCategory === idx
                          ? 'bg-white/10 text-white font-medium border border-white/20'
                          : 'bg-white/[0.03] text-text-dim hover:text-white border border-transparent'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: Total Balance Card (Span 4) (Scalable Framer Exact Layout) */}
              <div className="lg:col-span-4 p-5 rounded-2xl bg-[#141414]/80 border border-white/10 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs text-text-muted font-medium mb-1">Total Balance</div>
                  <div className="text-3xl font-bold text-white tracking-tight font-sans mb-3">$675,931</div>
                  
                  <button 
                    onClick={onOpenDemo}
                    className="w-full py-2.5 rounded-xl bg-brand-violet text-white text-xs font-semibold hover:bg-brand-violet/90 transition-colors shadow-sm"
                  >
                    Withdraw
                  </button>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/[0.06]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-text-dim">Total Expense</span>
                    <span className="font-semibold text-white font-mono">$9,627</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-text-dim">Total Income</span>
                    <span className="font-semibold text-brand-neon font-mono">$21,478</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
