import React from 'react';
import { Download, FileText, CheckCircle2, UserPlus, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

export const ProductBento: React.FC = () => {
  const bento = siteConfig.productBento;

  return (
    <section id="product" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header (Scalable Framer Exact Layout) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-text-muted font-medium mb-3">
            <span>{bento.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-sans">
            {bento.title}
          </h2>
          <p className="text-base sm:text-lg text-text-muted">
            {bento.subtitle}
          </p>
        </div>

        {/* 4 Bento Cards (Scalable Framer Exact 2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Simple Analytics (Scalable Framer Exact Layout) */}
          <div className="rounded-3xl bg-[#0d0d0d]/80 border border-white/10 p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-sans">{bento.card1.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{bento.card1.desc}</p>
            </div>

            {/* Graphic: Website Visitors Card with Curve */}
            <div className="p-5 rounded-2xl bg-[#141414]/90 border border-white/10 backdrop-blur-md relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-white">{bento.card1.badgeText}</span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-brand-neonDim text-brand-neon">
                  +34.2%
                </span>
              </div>

              {/* Chart line SVG */}
              <div className="h-32 w-full relative flex flex-col justify-end">
                <svg className="w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="visitorGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#49c2a9" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#49c2a9" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,90 Q100,20 200,60 T400,25 L400,120 L0,120 Z"
                    fill="url(#visitorGlow)"
                  />
                  <path
                    d="M0,90 Q100,20 200,60 T400,25"
                    fill="none"
                    stroke="#49c2a9"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="200" cy="60" r="4" fill="#ffffff" stroke="#49c2a9" strokeWidth="2" />
                </svg>
                <div className="flex justify-between text-[10px] font-mono text-text-dim border-t border-white/[0.06] pt-2">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Generate Reports with Ease (Scalable Framer Exact Layout) */}
          <div className="rounded-3xl bg-[#0d0d0d]/80 border border-white/10 p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-sans">{bento.card2.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{bento.card2.desc}</p>
            </div>

            {/* Graphic: Sales Report Card with downloadable files */}
            <div className="p-5 rounded-2xl bg-[#141414]/90 border border-white/10 backdrop-blur-md space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                <span className="text-xs font-semibold text-white">{bento.card2.badgeText}</span>
                <span className="text-[10px] font-mono text-text-dim">Ready for export</span>
              </div>

              {bento.card2.reports.map((report) => (
                <div 
                  key={report.name}
                  className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/[0.06] hover:border-white/15 transition-colors cursor-pointer group/row"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-brand-violet group-hover/row:text-brand-neon transition-colors" />
                    <div>
                      <div className="text-xs font-medium text-white">{report.name}</div>
                      <div className="text-[10px] text-text-dim">{report.size} • {report.date}</div>
                    </div>
                  </div>
                  <Download className="w-3.5 h-3.5 text-text-dim group-hover/row:text-white transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Transparent Sales Tracking (Scalable Framer Exact Layout) */}
          <div className="rounded-3xl bg-[#0d0d0d]/80 border border-white/10 p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-sans">{bento.card3.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{bento.card3.desc}</p>
            </div>

            {/* Graphic: Team member sales list */}
            <div className="p-5 rounded-2xl bg-[#141414]/90 border border-white/10 backdrop-blur-md space-y-2.5">
              <div className="text-xs font-semibold text-white pb-2 border-b border-white/[0.06]">
                Team Leaderboard
              </div>

              {bento.card3.members.map((m) => (
                <div key={m.name} className="flex items-center justify-between p-2.5 rounded-xl bg-black/30 border border-white/[0.04]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-brand-violet/20 border border-brand-violet/30 flex items-center justify-center text-xs font-bold text-brand-violet">
                      {m.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-medium text-white">{m.name}</div>
                      <div className="text-[10px] text-text-dim">{m.quarter}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono font-bold text-white">{m.amount}</div>
                    <span className="text-[9px] font-mono text-brand-neon bg-brand-neonDim px-1.5 py-0.2 rounded">
                      {m.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Invite Unlimited Team Members (Scalable Framer Exact Layout) */}
          <div className="rounded-3xl bg-[#0d0d0d]/80 border border-white/10 p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-sans">{bento.card4.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{bento.card4.desc}</p>
            </div>

            {/* Graphic: Pending Invitations & Invite Prompt Notification */}
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-[#141414]/90 border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-semibold text-white">{bento.card4.pendingInvite.title}</span>
                  <span className="text-[10px] font-mono text-brand-neon">1 Pending</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-white/[0.04]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-brand-neon flex items-center justify-center text-xs font-bold font-mono">
                      RB
                    </div>
                    <div>
                      <div className="text-xs font-medium text-white">{bento.card4.pendingInvite.name}</div>
                      <div className="text-[10px] text-text-dim">{bento.card4.pendingInvite.email}</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-text-dim">{bento.card4.pendingInvite.date}</span>
                </div>
              </div>

              {/* Notification Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-brand-violet/20 via-brand-deepViolet/10 to-transparent border border-brand-violet/30 text-xs">
                <p className="text-white/90 leading-relaxed italic mb-3">
                  "{bento.card4.pendingInvite.prompt}"
                </p>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1 rounded-lg bg-brand-violet text-white font-semibold text-[11px] shadow-sm">
                    Accept Invitation
                  </button>
                  <button className="px-3 py-1 rounded-lg bg-white/[0.04] text-text-muted hover:text-white text-[11px]">
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
