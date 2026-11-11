import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface PricingProps {
  onOpenDemo: () => void;
}

export const PricingSection: React.FC<PricingProps> = ({ onOpenDemo }) => {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: 'Community Edition',
      badge: 'Free Forever',
      price: '$0',
      period: 'free forever',
      description: 'Full-featured access for independent developers, startups, and small teams under $1M gross annual revenue.',
      highlight: false,
      features: [
        'All 1,600+ Essential Studio UI components',
        'Complete Document SDKs (PDF, Word, Excel, PPTX)',
        'Web, desktop & mobile frameworks',
        'Standard community support forums',
        'Weekly bug fix releases',
        'Commercial deployment permitted'
      ],
      cta: 'Claim Community License',
      ctaSecondary: false
    },
    {
      name: 'Developer Suite',
      badge: 'Most Popular',
      price: annual ? '$99' : '$149',
      period: 'per developer / month',
      description: 'Comprehensive UI suite and document processing engine for scaling SaaS companies and engineering teams.',
      highlight: true,
      features: [
        'Everything in Community Edition',
        'Royalty-free unlimited distribution',
        'Zero per-server or per-user runtime charges',
        'Direct 24x5 priority ticket support with core engineers',
        'Theme Studio & Figma Design Tokens',
        'Code Studio AI Agent tools & MCP server access',
        'Standard enterprise SLA guarantee'
      ],
      cta: 'Start 30-Day Free Trial',
      ctaSecondary: false
    },
    {
      name: 'Enterprise Unlimited',
      badge: 'Full Source Code',
      price: annual ? '$199' : '$249',
      period: 'per developer / month',
      description: 'Mission-critical enterprise tier with full source code access, dedicated engineer assignment, and custom security compliance.',
      highlight: false,
      features: [
        'Everything in Developer Suite',
        '100% C# & TypeScript Source Code included',
        'Dedicated Named Support Engineer & custom Slack/Teams channel',
        'Air-gapped offline VPC deployment licenses',
        'SOC 2 Type II compliance audit packet',
        'Custom legal terms, MSA & procurement reviews',
        '24/7/365 Emergency outage escalation'
      ],
      cta: 'Talk to Enterprise Team',
      ctaSecondary: true
    }
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 border-t border-white/[0.06] bg-[#0b0b0f] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-violet/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-xs text-brand-violet font-medium mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Transparent Predictable Licensing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Pricing that <span className="font-serif italic font-normal text-indigo-400">scales</span> with your business.
          </h2>
          <p className="text-base sm:text-lg text-text-muted mb-8">
            No runtime royalties. No per-server fees. Deploy to 1 user or 10,000,000 users without unpredictable costs.
          </p>

          {/* Billing Toggle (Scalable Framer Style) */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                !annual ? 'bg-white/10 text-white' : 'text-text-muted hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                annual ? 'bg-brand-violet text-white shadow-md' : 'text-text-muted hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-neon text-black font-bold uppercase">
                Save 35%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.highlight
                  ? 'bg-[#12121c] border-2 border-brand-violet shadow-[0_0_50px_rgba(99,105,255,0.25)] scale-100 lg:-translate-y-2'
                  : 'bg-[#0e0e14] border border-white/[0.08] hover:border-white/20'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-violet to-indigo-500 text-white text-[11px] font-bold tracking-wider uppercase shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-brand-neon" />
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  {!plan.highlight && (
                    <span className="text-xs font-mono text-text-dim px-2 py-0.5 rounded bg-white/[0.04]">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight font-sans">{plan.price}</span>
                  <span className="text-xs text-text-dim font-mono">{plan.period}</span>
                </div>

                <p className="text-xs sm:text-sm text-text-muted mb-8 leading-relaxed">
                  {plan.description}
                </p>

                {/* Features list */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono uppercase text-text-dim tracking-wider mb-2">What's included:</div>
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
                    plan.highlight
                      ? 'bg-gradient-to-r from-brand-violet to-indigo-600 hover:from-brand-violet/90 hover:to-indigo-500 text-white shadow-[0_0_25px_rgba(99,105,255,0.4)]'
                      : 'bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Footnote on Dogfooding */}
        <div className="mt-16 text-center text-xs text-text-dim max-w-2xl mx-auto">
          Syncfusion also powers commercial products including <strong className="text-text-muted">BoldSign</strong>, <strong className="text-text-muted">BoldDesk</strong>, <strong className="text-text-muted">Bold BI</strong>, and <strong className="text-text-muted">Bold Reports</strong>. We run our own mission-critical SaaS on the exact same codebase you license.
        </div>

      </div>
    </section>
  );
};
