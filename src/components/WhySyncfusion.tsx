import React from 'react';
import { 
  Zap, 
  Layers, 
  ShieldCheck, 
  Clock, 
  DollarSign, 
  Headphones, 
  FileCode, 
  Accessibility, 
  Workflow, 
  RefreshCw 
} from 'lucide-react';

export const WhySyncfusion: React.FC = () => {
  const pillars = [
    {
      title: 'Build and Ship Faster',
      badge: 'Speed to Market',
      color: 'from-brand-violet to-indigo-500',
      description: 'Ship complex screens in days rather than quarters with pre-built, production-tested components.',
      points: [
        {
          head: 'From prompt to production UI',
          body: 'MCP servers make VS Code, Cursor, Code Studio, and JetBrains IDEs component-aware — so prompts compile into real code without hallucinated APIs.'
        },
        {
          head: 'One design system, every app',
          body: 'Fluent, Material 3, Bootstrap 5, and Tailwind themes, Theme Studio, and Figma kits apply your brand across every framework at once.'
        },
        {
          head: 'Solve complex UI requirements',
          body: 'Virtualized grids, pivot tables, schedulers, and gantt arrive production-ready — each one a multi-month build if your team owned it.'
        },
        {
          head: 'Four releases a year, patches weekly',
          body: 'Four major updates a year, weekly NuGet releases, and documented breaking changes make upgrading planned work instead of regression hunts.'
        }
      ]
    },
    {
      title: 'Standardize and Consolidate',
      badge: 'Vendor Optimization',
      color: 'from-emerald-400 to-teal-500',
      description: 'Consolidate multiple component and document library licenses into a single trusted partner.',
      points: [
        {
          head: 'One catalog for every team',
          body: 'Every team draws from the same components and Document SDKs — giving you one support relationship, one renewal date, and one security review.'
        },
        {
          head: 'The ROI of not building it yourself',
          body: 'Licensing a tested suite costs a fraction of building and maintaining controls in-house — savings that repeat on every project, every year.'
        },
        {
          head: 'Licensing finance can forecast',
          body: 'No royalties and zero per-server or per-user deployment charges — so scaling your customer base never increases your component invoice.'
        },
        {
          head: 'Support directly from the engineers',
          body: 'Support tickets reach the core software engineers who actually built the component — not a tier-one script-reading queue.'
        }
      ]
    },
    {
      title: 'Modernize and De-Risk',
      badge: 'Enterprise Assurance',
      color: 'from-purple-400 to-pink-500',
      description: 'Future-proof legacy systems with a seamless upgrade path and enterprise-grade compliance.',
      points: [
        {
          head: 'Modernize without a rewrite',
          body: 'Migrate WinForms, WPF, or Xamarin apps forward to Blazor or .NET MAUI with matching APIs and zero business disruption.'
        },
        {
          head: 'Accessibility built-in by default',
          body: 'Full Section 508, WCAG 2.1 AA, and WAI-ARIA keyboard navigation ship out-of-the-box — clearing compliance audits with zero retrofitting.'
        },
        {
          head: 'A security review that passes',
          body: 'SOC 2 Type 2 report on request, GDPR compliance, and document processing that stays strictly inside your own environment — offline if needed.'
        },
        {
          head: 'Full source code included',
          body: 'Step into the actual source code from your IDE, debug against real call stacks, and extend controls instead of hacking around them.'
        }
      ]
    }
  ];

  return (
    <section className="py-24 md:py-32 border-t border-white/[0.06] bg-[#09090d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-text-muted font-medium mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-neon" />
            <span>Built for Delivery at Scale</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-5">
            Why teams standardise on <span className="font-serif italic font-normal text-indigo-400">Syncfusion.</span>
          </h2>
          <p className="text-base sm:text-lg text-text-muted">
            The compliance evidence procurement demands, the modernization path your legacy systems need, and the velocity your product roadmap requires.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div 
              key={i} 
              className="rounded-3xl bg-[#0f0f15] border border-white/[0.08] p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-text-dim">Decision {i + 1}</span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] text-white border border-white/10">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-text-muted mb-8 leading-relaxed">{pillar.description}</p>

                {/* Sub points */}
                <div className="space-y-6">
                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="space-y-1.5">
                      <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-violet" />
                        {pt.head}
                      </h4>
                      <p className="text-xs text-text-dim leading-relaxed pl-3.5 border-l border-white/[0.06]">
                        {pt.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-text-muted">
                <span>Enterprise grade</span>
                <span className="text-brand-neon font-mono">100% SLA Available</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
