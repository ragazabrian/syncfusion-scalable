import React, { useState } from 'react';
import { Quote, ArrowUpRight, TrendingUp, Clock, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

export const CustomerStories: React.FC = () => {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      company: 'Igniatek Consultancy',
      industry: 'Software Development',
      metric: '75%',
      metricLabel: 'Cost Reduction',
      subMetric: '50% faster time-to-market',
      quote: "Syncfusion gave us the horsepower of an entire in-house UI team. We delivered enterprise dashboards in half the estimated time.",
      author: 'Managing Director, Igniatek',
    },
    {
      company: 'McDaniel & Associates Consultants Ltd',
      industry: 'Utilities / Energy',
      metric: '450+',
      metricLabel: 'Engineering Hours Saved',
      subMetric: 'Complex WPF & Excel report automation',
      quote: "Essential Studio eliminated hundreds of hours of manual grid and charting code. Features we thought would take months arrived production-ready.",
      author: 'Lead Software Architect, McDaniel',
    },
    {
      company: 'Sistemi',
      industry: 'Software & Technology',
      metric: '1,000+',
      metricLabel: 'Hours Saved Annually',
      subMetric: 'Efficient document and file pipelines',
      quote: "The Document SDKs for PDF and Word processing allowed us to bypass third-party dependencies completely and keep data 100% on-premises.",
      author: 'VP of Engineering, Sistemi',
    },
    {
      company: 'Synchrony Digital',
      industry: 'FinTech & Banking',
      metric: '2 Years',
      metricLabel: 'Release Delay Avoided',
      subMetric: 'Community License to Enterprise Scale',
      quote: "We avoided two full years of custom UI engineering by adopting Syncfusion early. It scaled seamlessly as our transaction volume exploded.",
      author: 'Chief Technology Officer, Synchrony',
    },
  ];

  const devQuotes = [
    {
      quote: "Syncfusion is a product that makes life easier! I use it to create Blazor applications and the controls speed up development immensely. Support direct from their engineers is second to none.",
      author: "Andrea Scarpante",
      role: "Sydea srl",
    },
    {
      quote: "It is flawless, simple code, and great docs. We use the Image Editor and DataGrid to really make our applications much more user-friendly.",
      author: "Cliff Agius",
      role: "Medical IT Pty Ltd",
    },
    {
      quote: "It is the most complete component set available. The community edition gave us the ability to prototype rapidly, and the enterprise upgrade was seamless.",
      author: "Johan Visser",
      role: "H and T Pawnbrokers",
    },
    {
      quote: "I use a lot of their DocIO Word toolkit. The engineering support they provide for that is something to aspire to — truly exceptional.",
      author: "Ian Yates",
      role: "Medical IT Systems",
    }
  ];

  return (
    <section id="customers" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-neonDim border border-brand-neon/20 text-xs text-brand-neon font-medium mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Proven Customer Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            From 450 hours saved to <span className="font-serif italic font-normal text-indigo-400">"flawless, simple code."</span>
          </h2>
          <p className="text-base sm:text-lg text-text-muted">
            Measured ROI from enterprise engineering leaders and independent developers shipping business-critical apps worldwide.
          </p>
        </div>

        {/* Featured Case Study Carousel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stories.map((story, i) => (
            <div 
              key={i}
              className="p-6 rounded-3xl bg-[#0e0e14] border border-white/[0.08] hover:border-brand-violet/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-text-dim">{story.industry}</span>
                  <span className="w-2 h-2 rounded-full bg-brand-neon" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white font-sans group-hover:text-brand-violet transition-colors mb-1">
                  {story.metric}
                </div>
                <div className="text-sm font-semibold text-white/90 mb-3">{story.metricLabel}</div>
                <p className="text-xs text-text-muted italic mb-6 leading-relaxed">
                  "{story.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-white">{story.company}</div>
                  <div className="text-[11px] text-text-dim">{story.author}</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-dim group-hover:text-white transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Developer Wall of Love (Scalable Framer Style) */}
        <div className="rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 p-8 sm:p-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase text-brand-violet tracking-wider">Engineering Feedback</span>
              <h3 className="text-2xl font-bold text-white mt-1">Straight from the developers in the trenches</h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-text-muted">
              <span className="font-mono text-white font-semibold">4.5 / 5.0</span>
              <span>across 1,650+ verified G2 & Capterra reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {devQuotes.map((q, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-black/40 border border-white/[0.06] hover:border-white/15 transition-all relative"
              >
                <Quote className="w-6 h-6 text-white/10 absolute top-4 right-4" />
                <p className="text-sm text-text-muted leading-relaxed mb-6 italic">
                  "{q.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-violet/20 border border-brand-violet/30 flex items-center justify-center text-xs font-bold text-brand-violet font-mono">
                    {q.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">{q.author}</div>
                    <div className="text-[11px] text-text-dim">{q.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
