import React from 'react';
import { ShieldCheck, Award, Star, Quote } from 'lucide-react';

export const LogoMarquee: React.FC = () => {
  const clients = [
    { name: 'Microsoft', tag: 'Strategic Partner' },
    { name: 'Siemens', tag: 'Industrial' },
    { name: 'Pfizer', tag: 'Biopharma' },
    { name: 'Deloitte', tag: 'Consulting' },
    { name: 'Bosch', tag: 'Engineering' },
    { name: 'Morgan Stanley', tag: 'Financial' },
    { name: 'Amazon', tag: 'Cloud' },
    { name: 'Capita', tag: 'Enterprise IT' },
  ];

  const stats = [
    { value: '41,000+', label: 'Enterprise Customers', sub: 'Across 120+ countries' },
    { value: '1,000,000+', label: 'Active Developers', sub: 'Worldwide community' },
    { value: '1,600+', label: 'UI Components', sub: 'Web, desktop & mobile' },
    { value: '400+', label: 'Fortune 500 Companies', sub: 'Standardized on Essential Studio' },
  ];

  return (
    <section className="py-16 md:py-24 border-y border-white/[0.06] bg-[#0c0c0f]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Section Title */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-text-dim font-mono font-medium">
            Trusted by the world's most demanding engineering teams
          </p>
        </div>

        {/* Client Logos / Pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-16 opacity-80">
          {clients.map((client) => (
            <div 
              key={client.name}
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/20 transition-all hover:bg-white/[0.06] group"
            >
              <span className="font-semibold text-sm sm:text-base text-white tracking-wide group-hover:text-brand-violet transition-colors">
                {client.name}
              </span>
              <span className="text-[10px] font-mono text-text-dim px-1.5 py-0.5 rounded bg-white/[0.04]">
                {client.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Large Stat Counters (Scalable Framer Style) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-brand-violet/30 transition-all relative group"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2 font-sans group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-violet transition-all">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white/90 mb-1">{stat.label}</div>
              <div className="text-xs text-text-dim font-mono">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Microsoft Quote Card */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-violet/10 via-black/40 to-brand-neonDim/5 border border-white/10 backdrop-blur-xl relative">
          <Quote className="w-8 h-8 text-brand-violet/40 absolute top-6 right-6" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-12 h-12 rounded-2xl bg-[#14141d] border border-white/10 flex items-center justify-center font-bold text-white shrink-0 text-xl font-serif italic text-brand-violet">
              MS
            </div>
            <div className="space-y-2">
              <p className="text-base sm:text-lg text-white font-normal italic leading-relaxed">
                "Syncfusion's commitment to the success of .NET MAUI is incredible and their expertise in this space invaluable."
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="font-semibold text-white">David Ortinau</span>
                <span className="text-text-dim">— Principal Product Manager, .NET MAUI at Microsoft</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-neonDim text-brand-neon border border-brand-neon/30 font-mono">
                  Official Contributor
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-text-muted">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-brand-neon" />
            <span>SOC 2 Type II Certified</span>
          </div>
          <span className="text-white/20">•</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-brand-neon" />
            <span>GDPR Compliant</span>
          </div>
          <span className="text-white/20">•</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-brand-neon" />
            <span>WCAG 2.1 AA & Section 508 Accessible</span>
          </div>
          <span className="text-white/20">•</span>
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-brand-violet" />
            <span>Full Source Code Available</span>
          </div>
        </div>

      </div>
    </section>
  );
};
