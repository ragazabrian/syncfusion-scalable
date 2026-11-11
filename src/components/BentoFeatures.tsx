import React, { useState } from 'react';
import { 
  Table, 
  BarChart3, 
  Calendar, 
  FileText, 
  FileSpreadsheet, 
  Sparkles, 
  Bot, 
  Cpu, 
  Layers, 
  ArrowUpRight, 
  FileCode2, 
  Check, 
  Copy,
  Workflow
} from 'lucide-react';

export const BentoFeatures: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [selectedSdk, setSelectedSdk] = useState<'grid' | 'chart' | 'scheduler' | 'diagram'>('grid');

  const copyPrompt = () => {
    navigator.clipboard.writeText("@syncfusion generate DataGrid with sorting, filtering and PDF export");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ui-suite" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-xs text-brand-violet font-medium mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Product Divisions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-5 leading-tight">
            Start where you save the{' '}
            <span className="font-serif italic font-normal text-indigo-400">most.</span>
          </h2>
          <p className="text-base sm:text-lg text-text-muted">
            One vendor across your whole app development lifecycle. Take a focused SDK, complete document tools, or the entire Essential Studio enterprise suite.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Standalone UI SDKs (Span 7) */}
          <div className="md:col-span-7 rounded-3xl bg-[#0e0e12]/80 border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between hover:border-brand-violet/40 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-violet/10 blur-[100px] pointer-events-none rounded-full" />
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase text-brand-violet tracking-wider">01 — Standalone UI SDKs</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-text-dim border border-white/[0.06]">
                  Virtualized Engine
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Build complex, data-dense application UI</h3>
              <p className="text-sm text-text-muted mb-6">
                Take just the control your application needs — or embed deep analytics screens with zero external dependencies.
              </p>

              {/* Sub-selector pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { id: 'grid', label: 'DataGrid', icon: Table },
                  { id: 'chart', label: 'Charts (50+ types)', icon: BarChart3 },
                  { id: 'scheduler', label: 'Scheduler', icon: Calendar },
                  { id: 'diagram', label: 'Flow Diagrams', icon: Workflow },
                ].map((sdk) => {
                  const Icon = sdk.icon;
                  return (
                    <button
                      key={sdk.id}
                      onClick={() => setSelectedSdk(sdk.id as any)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                        selectedSdk === sdk.id
                          ? 'bg-brand-violet text-white shadow-md'
                          : 'bg-white/[0.04] text-text-muted hover:text-white border border-white/[0.06]'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {sdk.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Visual Interactive Sandbox inside Bento Card */}
            <div className="p-4 rounded-2xl bg-black/60 border border-white/[0.06] backdrop-blur-md">
              {selectedSdk === 'grid' && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-white/[0.06] text-text-dim font-mono">
                    <span>Syncfusion.Grid.Virtualization</span>
                    <span className="text-brand-neon">FPS: 60 (Pinned)</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs py-1.5 px-2 bg-white/[0.02] rounded-lg border border-white/[0.04] font-mono">
                    <span className="text-white">Account#</span>
                    <span className="text-white">Equity</span>
                    <span className="text-white">Exposure</span>
                    <span className="text-right text-brand-neon">Delta</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs py-1 px-2 text-text-muted font-mono">
                    <span>ACC-0021</span>
                    <span className="text-white">$8,450,000</span>
                    <span>12.4%</span>
                    <span className="text-right text-brand-neon">+1.84%</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs py-1 px-2 text-text-muted font-mono">
                    <span>ACC-0022</span>
                    <span className="text-white">$14,210,500</span>
                    <span>8.2%</span>
                    <span className="text-right text-brand-neon">+3.12%</span>
                  </div>
                </div>
              )}

              {selectedSdk === 'chart' && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-white/[0.06] text-text-dim font-mono">
                    <span>50+ Chart Types · High Performance Canvas & SVG</span>
                    <span className="text-brand-violet">Candlestick & Spline</span>
                  </div>
                  <div className="h-28 flex items-end gap-1.5 pt-2">
                    {[45, 60, 30, 85, 95, 75, 110, 80, 120, 140, 130, 160, 185].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1 group/bar">
                        <div 
                          className="w-full bg-gradient-to-t from-brand-violet to-indigo-400 rounded-t-sm group-hover/bar:bg-brand-neon transition-all"
                          style={{ height: `${(h / 190) * 100}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedSdk === 'scheduler' && (
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-text-dim font-mono pb-2 border-b border-white/[0.06]">
                    <span>Outlook & Google Calendar Sync</span>
                    <span className="text-brand-neon">Timezone Aware</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2 rounded-lg bg-brand-violet/20 border border-brand-violet/30 text-white">
                      <div className="font-semibold">09:00 AM</div>
                      <div className="text-[11px] text-text-muted">Sprint Review (MAUI)</div>
                    </div>
                    <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-white">
                      <div className="font-semibold">11:30 AM</div>
                      <div className="text-[11px] text-text-muted">Executive Board Demo</div>
                    </div>
                    <div className="p-2 rounded-lg bg-indigo-500/20 border border-indigo-500/30 text-white">
                      <div className="font-semibold">03:00 PM</div>
                      <div className="text-[11px] text-text-muted">Security Audit Signoff</div>
                    </div>
                  </div>
                </div>
              )}

              {selectedSdk === 'diagram' && (
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-text-dim font-mono pb-2 border-b border-white/[0.06]">
                    <span>Interactive Visio-Like Diagram Engine</span>
                    <span className="text-brand-violet">BPMN 2.0</span>
                  </div>
                  <div className="flex items-center justify-around py-3">
                    <span className="px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/10 text-white font-mono">User Prompt</span>
                    <span className="text-brand-violet">──&gt;</span>
                    <span className="px-3 py-1.5 rounded-lg bg-brand-violet/30 border border-brand-violet text-white font-mono">MCP Agent</span>
                    <span className="text-brand-neon">──&gt;</span>
                    <span className="px-3 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500 text-white font-mono">Compiled App</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Card 2: Document Solutions (Span 5) */}
          <div id="document-solutions" className="md:col-span-5 rounded-3xl bg-[#0e0e12]/80 border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[90px] pointer-events-none rounded-full" />
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase text-brand-neon tracking-wider">02 — Document Solutions</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-neonDim text-brand-neon border border-brand-neon/20">
                  Zero MS Office Dependency
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Process PDF, Word, Excel & PPTX in-app</h3>
              <p className="text-sm text-text-muted mb-6">
                Create, view, annotate, convert, and sign enterprise documents without requiring Adobe Acrobat or Microsoft Office installed.
              </p>
            </div>

            {/* Document preview list */}
            <div className="space-y-2.5">
              {[
                { name: 'PDF Viewer & Editor SDK', badge: 'Forms, Redaction & OCR', color: 'text-red-400' },
                { name: 'DocIO Word Processor', badge: 'Mail Merge & Conversions', color: 'text-blue-400' },
                { name: 'XlsIO Spreadsheet Engine', badge: '400+ Formulas & Charts', color: 'text-emerald-400' },
                { name: 'Presentation PowerPoint SDK', badge: 'Slide Generation & Export', color: 'text-amber-400' },
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/[0.06] hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <FileText className={`w-4 h-4 ${doc.color}`} />
                    <span className="text-xs font-medium text-white">{doc.name}</span>
                  </div>
                  <span className="text-[10px] font-mono text-text-dim">{doc.badge}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-brand-neon">
              <span>Supports .NET, Java, Python & JavaScript</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 3: Code Studio & MCP Servers (Span 6) */}
          <div id="code-studio" className="md:col-span-6 rounded-3xl bg-[#0e0e12]/80 border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[90px] pointer-events-none rounded-full" />
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase text-purple-400 tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> AI Tooling & MCP
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  AI-Native IDE
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Build faster with Syncfusion-aware AI</h3>
              <p className="text-sm text-text-muted mb-6">
                MCP servers connect your favorite coding assistant (Cursor, VS Code, JetBrains, Claude) directly to Syncfusion’s verified API models and types.
              </p>
            </div>

            {/* Code Generator Interactive Box */}
            <div className="p-4 rounded-2xl bg-black/70 border border-white/[0.08] font-mono text-xs">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.06] text-text-dim">
                <span className="flex items-center gap-1.5 text-purple-400">
                  <Bot className="w-3.5 h-3.5" /> mcp.syncfusion.com
                </span>
                <button 
                  onClick={copyPrompt}
                  className="flex items-center gap-1 text-[11px] text-text-muted hover:text-white transition-colors"
                >
                  {copied ? <Check className="w-3 h-3 text-brand-neon" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy prompt'}</span>
                </button>
              </div>
              <div className="text-text-muted space-y-1.5">
                <p className="text-white/80">&gt; Prompt: "Add an AI-assisted smart scheduler with drag & drop and multi-resource grouping"</p>
                <div className="p-2 rounded bg-white/[0.03] text-brand-neon font-mono text-[11px] leading-relaxed">
                  ✓ Injected @syncfusion/ej2-react-schedule<br />
                  ✓ Configured ResourceDirective with 12 specialists<br />
                  ✓ Zero hallucinations · 100% Type-checked
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-purple-400">
              <span>Included free with Essential Studio</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 4: Essential Studio UI Suite (Span 6) */}
          <div className="md:col-span-6 rounded-3xl bg-[#0e0e12]/80 border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between hover:border-brand-violet/40 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[90px] pointer-events-none rounded-full" />
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider">03 — Essential Studio Suite</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-text-dim border border-white/[0.06]">
                  1,600+ Components
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Every component family under one license</h3>
              <p className="text-sm text-text-muted mb-6">
                When your app needs more than one control, the suite gives your entire team the whole toolbox across Web, Desktop, and Mobile.
              </p>
            </div>

            {/* Component Count Metrics */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] text-center">
                <div className="text-xl font-bold text-white font-mono">110+</div>
                <div className="text-[11px] text-text-dim">Blazor Controls</div>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] text-center">
                <div className="text-xl font-bold text-white font-mono">100+</div>
                <div className="text-[11px] text-text-dim">React Components</div>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] text-center">
                <div className="text-xl font-bold text-white font-mono">60+</div>
                <div className="text-[11px] text-text-dim">.NET MAUI Controls</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs text-text-muted flex items-center justify-between">
              <span>Theme Studio: Fluent, Material 3, Bootstrap 5 & Tailwind</span>
              <span className="text-brand-neon font-mono">Figma Kits Included</span>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-brand-violet">
              <span>Explore 1,600+ UI controls catalog</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
