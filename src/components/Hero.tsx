import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight, Search, Filter, Download, Zap, Database, FileSpreadsheet, FileText, Code2 } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState<'grid' | 'chart' | 'document' | 'ai'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const sampleRows = [
    { id: 'ORD-9841', client: 'Morgan Stanley', platform: 'Blazor Server', amount: '$42,500', status: 'Completed', latency: '0.8ms' },
    { id: 'ORD-9842', client: 'Siemens AG', platform: 'React 19', amount: '$118,200', status: 'Completed', latency: '1.1ms' },
    { id: 'ORD-9843', client: 'Pfizer Global', platform: '.NET MAUI', amount: '$85,750', status: 'Processing', latency: '0.9ms' },
    { id: 'ORD-9844', client: 'Deloitte Tech', platform: 'Angular 18', amount: '$64,100', status: 'Completed', latency: '0.7ms' },
    { id: 'ORD-9845', client: 'Amazon Web', platform: 'Flutter Web', amount: '$230,000', status: 'Completed', latency: '1.2ms' },
  ];

  const filteredRows = sampleRows.filter(r => 
    r.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.platform.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background glow effects matching Scalable template */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-brand-violet/20 via-indigo-600/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-brand-neon/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-6">
          <a 
            href="#code-studio"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-brand-violet/50 backdrop-blur-md text-xs sm:text-sm text-text-primary transition-all duration-300 group shadow-[0_0_15px_rgba(255,255,255,0.03)]"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-neon opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-neon"></span>
            </span>
            <span className="text-text-muted">New:</span>
            <span className="font-medium text-white">AI-Native Code Studio & MCP Servers</span>
            <ChevronRight className="w-3.5 h-3.5 text-text-muted group-hover:translate-x-0.5 group-hover:text-white transition-all" />
          </a>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
            Build business-critical apps{' '}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-brand-violet to-purple-300">
              faster
            </span>{' '}
            on one unified platform.
          </h1>
          <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto font-normal leading-relaxed">
            <strong className="text-white font-medium">UI Components + Document Solutions + AI Tooling.</strong>{' '}
            Ship data-rich screens and document workflows without building from scratch or stitching multiple vendors together.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto relative inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white rounded-full overflow-hidden transition-all duration-300 group shadow-[0_0_30px_rgba(99,105,255,0.45)] hover:shadow-[0_0_45px_rgba(99,105,255,0.7)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-violet via-indigo-600 to-brand-deepViolet group-hover:scale-105 transition-transform" />
            <span className="relative z-10 flex items-center gap-2">
              Start 30-Day Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <a
            href="#playground"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-text-primary rounded-full bg-white/[0.04] border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all backdrop-blur-sm"
          >
            Explore Interactive Sandbox
          </a>
        </div>

        {/* Micro Social Proof Under CTA */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-text-dim mb-16">
          <div className="flex items-center gap-1.5 text-text-muted">
            <CheckCircle2 className="w-4 h-4 text-brand-neon" />
            <span>No credit card required</span>
          </div>
          <span className="hidden sm:inline text-white/20">•</span>
          <div className="flex items-center gap-1.5 text-text-muted">
            <span className="font-semibold text-white">4.5 / 5</span> on G2 & Capterra (1,650+ reviews)
          </div>
          <span className="hidden sm:inline text-white/20">•</span>
          <div className="flex items-center gap-1.5 text-brand-neon font-medium">
            <span>🏆 96 G2 Badges in 2026</span>
          </div>
        </div>

        {/* Hero Interactive App Window (Scalable Framer Style) */}
        <div className="relative max-w-5xl mx-auto">
          {/* Subtle frame glow */}
          <div className="absolute -inset-1 bg-gradient-to-b from-brand-violet/30 via-white/5 to-transparent rounded-3xl blur-xl opacity-60" />
          
          <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0d0d12]/80 backdrop-blur-2xl p-4 sm:p-6 shadow-2xl overflow-hidden">
            
            {/* Top Bar of the Mockup */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
              
              {/* Window controls & Title */}
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="h-4 w-px bg-white/10 ml-1" />
                <span className="text-xs font-mono text-text-dim flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-brand-violet" />
                  syncfusion-essential-studio-v2026.app
                </span>
              </div>

              {/* View Switcher Tabs */}
              <div className="flex items-center gap-1 p-1 rounded-xl bg-white/[0.04] border border-white/10 text-xs">
                <button
                  onClick={() => setActiveTab('grid')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === 'grid' 
                      ? 'bg-brand-violet text-white font-medium shadow-sm' 
                      : 'text-text-muted hover:text-white'
                  }`}
                >
                  <Database className="w-3.5 h-3.5" />
                  DataGrid SDK
                </button>
                <button
                  onClick={() => setActiveTab('chart')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === 'chart' 
                      ? 'bg-brand-violet text-white font-medium shadow-sm' 
                      : 'text-text-muted hover:text-white'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" />
                  Realtime Chart
                </button>
                <button
                  onClick={() => setActiveTab('document')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === 'document' 
                      ? 'bg-brand-violet text-white font-medium shadow-sm' 
                      : 'text-text-muted hover:text-white'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  PDF / Word
                </button>
                <button
                  onClick={() => setActiveTab('ai')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === 'ai' 
                      ? 'bg-brand-violet text-white font-medium shadow-sm' 
                      : 'text-text-muted hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-brand-neon" />
                  Code Studio
                </button>
              </div>

              {/* Framework Tag */}
              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-text-dim">
                <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse" />
                <span>Virtual Engine: 60 FPS</span>
              </div>
            </div>

            {/* Inner Content Area */}
            <div className="pt-5">
              {activeTab === 'grid' && (
                <div className="space-y-4">
                  {/* Grid Toolbar */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <div className="relative flex-1 max-w-sm">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-dim" />
                      <input
                        type="text"
                        placeholder="Search 1,000,000 virtual rows..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-text-dim focus:outline-none focus:border-brand-violet/50"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-text-muted hover:text-white transition-colors">
                        <Filter className="w-3.5 h-3.5" /> Group By
                      </button>
                      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-text-muted hover:text-white transition-colors">
                        <Download className="w-3.5 h-3.5" /> Export XLSX
                      </button>
                    </div>
                  </div>

                  {/* Interactive Table Preview */}
                  <div className="rounded-xl border border-white/[0.08] overflow-hidden bg-black/40">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-white/[0.03] text-text-dim uppercase tracking-wider font-mono border-b border-white/[0.08]">
                          <tr>
                            <th className="py-2.5 px-4">Transaction ID</th>
                            <th className="py-2.5 px-4">Enterprise Client</th>
                            <th className="py-2.5 px-4">Syncfusion Stack</th>
                            <th className="py-2.5 px-4">Processed Volume</th>
                            <th className="py-2.5 px-4">Status</th>
                            <th className="py-2.5 px-4 text-right">Render Latency</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/[0.04] font-sans">
                          {filteredRows.map((row) => (
                            <tr key={row.id} className="hover:bg-white/[0.02] transition-colors group">
                              <td className="py-3 px-4 font-mono font-medium text-brand-violet">{row.id}</td>
                              <td className="py-3 px-4 font-medium text-white">{row.client}</td>
                              <td className="py-3 px-4 text-text-muted">{row.platform}</td>
                              <td className="py-3 px-4 font-mono text-white">{row.amount}</td>
                              <td className="py-3 px-4">
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-brand-neonDim text-brand-neon border border-brand-neon/20">
                                  {row.status}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-right font-mono text-brand-neon">{row.latency}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-text-dim px-1">
                    <span>Showing {filteredRows.length} active enterprise records with zero DOM thrashing</span>
                    <span className="font-mono text-text-muted">Total memory usage: 14.2 MB</span>
                  </div>
                </div>
              )}

              {activeTab === 'chart' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-white">High-Frequency Telemetry Stream</div>
                      <div className="text-xs text-text-dim">Rendering 50,000 dynamic datapoints/sec with WebGL hardware acceleration</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-brand-neonDim text-brand-neon text-xs font-mono">Live: 60 FPS</span>
                    </div>
                  </div>

                  {/* Simulated Chart Graphic */}
                  <div className="h-60 w-full rounded-xl bg-black/40 border border-white/[0.08] p-4 flex flex-col justify-end relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-violet/10 via-transparent to-transparent" />
                    <svg className="w-full h-full" viewBox="0 0 600 160" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#6369ff" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#6369ff" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,130 Q75,70 150,90 T300,50 T450,75 T600,20 L600,160 L0,160 Z"
                        fill="url(#chartGradient)"
                      />
                      <path
                        d="M0,130 Q75,70 150,90 T300,50 T450,75 T600,20"
                        fill="none"
                        stroke="#6369ff"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <circle cx="450" cy="75" r="5" fill="#1aff75" className="animate-ping" />
                      <circle cx="450" cy="75" r="4" fill="#1aff75" />
                    </svg>
                    <div className="flex justify-between text-[11px] font-mono text-text-dim border-t border-white/[0.06] pt-2">
                      <span>00:00:01</span>
                      <span>00:00:15</span>
                      <span>00:00:30</span>
                      <span>00:00:45</span>
                      <span>00:01:00 (Live)</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'document' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08] space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-red-400" />
                        <span className="text-xs font-semibold text-white">Client_Contract_v4.pdf</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-text-muted">PDF Viewer SDK</span>
                    </div>
                    <div className="p-3 bg-white/[0.02] rounded-lg border border-white/[0.04] text-xs text-text-muted space-y-2">
                      <div className="h-3 w-3/4 bg-white/10 rounded" />
                      <div className="h-3 w-5/6 bg-white/10 rounded" />
                      <div className="h-3 w-1/2 bg-white/10 rounded" />
                      <div className="pt-2 flex items-center justify-between text-[11px] text-brand-neon">
                        <span>Digital Signature Verified</span>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="text-[11px] text-text-dim">In-browser annotation, fillable forms, redaction, and conversion. No Acrobat needed.</div>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08] space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-semibold text-white">Financial_Model_2026.xlsx</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-text-muted">Spreadsheet SDK</span>
                    </div>
                    <div className="p-3 bg-white/[0.02] rounded-lg border border-white/[0.04] text-xs text-text-muted space-y-2">
                      <div className="grid grid-cols-3 gap-2 font-mono text-[10px]">
                        <div className="p-1 bg-white/[0.04] rounded text-white">SUM(B2:B12)</div>
                        <div className="p-1 bg-white/[0.04] rounded text-white">$1,450,200</div>
                        <div className="p-1 bg-brand-neonDim text-brand-neon rounded">+24.5%</div>
                      </div>
                    </div>
                    <div className="text-[11px] text-text-dim">400+ Excel formulas, pivot tables, chart integration, and formatting directly in the browser.</div>
                  </div>
                </div>
              )}

              {activeTab === 'ai' && (
                <div className="p-4 rounded-xl bg-black/50 border border-brand-violet/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-brand-neon">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Code Studio AI Agent Terminal</span>
                    </div>
                    <span className="text-[10px] font-mono text-text-dim">MCP Server Active</span>
                  </div>
                  <div className="font-mono text-xs bg-[#09090d] p-3 rounded-lg border border-white/[0.06] text-text-muted space-y-1">
                    <p className="text-white/60"><span className="text-brand-violet font-semibold">&gt; User:</span> "Create a virtualized grid for 500k rows with column filtering and Excel export in React 19."</p>
                    <p className="text-brand-neon"><span className="text-brand-neon font-semibold">&gt; Agent:</span> Generating verified Syncfusion GridComponent JSX with lazy-scroll virtualization and export binding...</p>
                    <p className="text-xs text-text-dim pt-1 font-sans">✓ Code compiles · Zero API hallucinations · Complete type-safety</p>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Platform Pills */}
            <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-2 text-xs text-text-dim">
              <span className="font-mono text-[11px]">One suite for:</span>
              <div className="flex flex-wrap gap-1.5">
                {['Blazor', 'React', 'Angular', 'Vue', '.NET MAUI', 'Flutter', 'WinUI', 'WPF'].map((fw) => (
                  <span key={fw} className="px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-text-muted hover:text-white transition-colors cursor-default">
                    {fw}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
