import React, { useState } from 'react';
import { 
  Play, 
  RotateCcw, 
  Settings2, 
  SlidersHorizontal, 
  Sparkles, 
  CheckCircle2, 
  Download, 
  Search, 
  Eye, 
  FileSpreadsheet, 
  FileText, 
  PenTool,
  Check
} from 'lucide-react';

export const InteractivePlayground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'grid' | 'chart' | 'pdf' | 'ai'>('grid');
  const [theme, setTheme] = useState<'onyx' | 'fluent' | 'material'>('onyx');
  const [search, setSearch] = useState('');
  const [selectedRow, setSelectedRow] = useState<number | null>(0);
  const [aiPrompt, setAiPrompt] = useState('Create an enterprise financial summary with virtual grid and live revenue chart');
  const [aiGenerated, setAiGenerated] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // Mock enterprise dataset
  const initialData = [
    { id: 1001, project: 'AeroSpace Telemetry V2', engineer: 'Sarah Connor', progress: 92, budget: '$480,000', priority: 'High', status: 'Active' },
    { id: 1002, project: 'Global Payment Gateway', engineer: 'Marcus Vance', progress: 100, budget: '$1,250,000', priority: 'Critical', status: 'Deployed' },
    { id: 1003, project: 'Healthcare HL7 FHIR Broker', engineer: 'Elena Rostova', progress: 68, budget: '$720,000', priority: 'Medium', status: 'In Review' },
    { id: 1004, project: 'Risk Analytics Pipeline', engineer: 'David Kim', progress: 45, budget: '$940,000', priority: 'High', status: 'Active' },
    { id: 1005, project: 'Supply Chain RFID Tracker', engineer: 'Amara Okafor', progress: 84, budget: '$310,000', priority: 'Low', status: 'Active' },
  ];

  const filteredData = initialData.filter(d => 
    d.project.toLowerCase().includes(search.toLowerCase()) ||
    d.engineer.toLowerCase().includes(search.toLowerCase())
  );

  const handleAiGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setAiGenerated(true);
    }, 700);
  };

  return (
    <section id="playground" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-xs text-brand-violet font-medium mb-4">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Interactive Control Center</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Test the controls <span className="font-serif italic font-normal text-indigo-400">live</span> in your browser.
          </h2>
          <p className="text-base sm:text-lg text-text-muted">
            Zero install required. Explore how Syncfusion handles heavy datasets, document pipelines, and AI code generation.
          </p>
        </div>

        {/* Playground Container */}
        <div className="rounded-3xl border border-white/10 bg-[#0e0e14] shadow-2xl overflow-hidden">
          
          {/* Header Controls */}
          <div className="p-4 sm:p-6 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-4 bg-black/40">
            {/* Control Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveTab('grid')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'grid'
                    ? 'bg-brand-violet text-white shadow-md'
                    : 'bg-white/[0.04] text-text-muted hover:text-white border border-white/[0.06]'
                }`}
              >
                Virtualized DataGrid
              </button>
              <button
                onClick={() => setActiveTab('chart')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'chart'
                    ? 'bg-brand-violet text-white shadow-md'
                    : 'bg-white/[0.04] text-text-muted hover:text-white border border-white/[0.06]'
                }`}
              >
                WebGL Chart Engine
              </button>
              <button
                onClick={() => setActiveTab('pdf')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'pdf'
                    ? 'bg-brand-violet text-white shadow-md'
                    : 'bg-white/[0.04] text-text-muted hover:text-white border border-white/[0.06]'
                }`}
              >
                PDF & DOCX Viewer
              </button>
              <button
                onClick={() => setActiveTab('ai')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === 'ai'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-white/[0.04] text-purple-300 hover:text-white border border-purple-500/20'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-neon" />
                Code Studio Agent
              </button>
            </div>

            {/* Theme Switcher */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-text-dim">Theme Studio:</span>
              <div className="flex bg-white/[0.04] p-1 rounded-xl border border-white/10">
                <button
                  onClick={() => setTheme('onyx')}
                  className={`px-2.5 py-1 rounded-lg transition-colors ${
                    theme === 'onyx' ? 'bg-white/10 text-white font-medium' : 'text-text-dim hover:text-white'
                  }`}
                >
                  Onyx Dark
                </button>
                <button
                  onClick={() => setTheme('fluent')}
                  className={`px-2.5 py-1 rounded-lg transition-colors ${
                    theme === 'fluent' ? 'bg-white/10 text-white font-medium' : 'text-text-dim hover:text-white'
                  }`}
                >
                  Fluent M3
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Workspace Area */}
          <div className="p-6">
            {activeTab === 'grid' && (
              <div className="space-y-4">
                {/* Search & Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-dim" />
                    <input
                      type="text"
                      placeholder="Filter project or engineer..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-text-dim focus:outline-none focus:border-brand-violet"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-text-muted hover:text-white">
                      <Download className="w-3.5 h-3.5" /> Export Excel
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-brand-violet text-white text-xs font-semibold hover:bg-brand-violet/90">
                      + Add Row
                    </button>
                  </div>
                </div>

                {/* Table View */}
                <div className="rounded-2xl border border-white/[0.08] overflow-hidden bg-black/40">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-white/[0.03] text-text-dim uppercase font-mono tracking-wider border-b border-white/[0.08]">
                      <tr>
                        <th className="py-3 px-4">ID</th>
                        <th className="py-3 px-4">Enterprise Initiative</th>
                        <th className="py-3 px-4">Lead Architect</th>
                        <th className="py-3 px-4">Budget</th>
                        <th className="py-3 px-4">Progress</th>
                        <th className="py-3 px-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.04]">
                      {filteredData.map((row, idx) => (
                        <tr 
                          key={row.id}
                          onClick={() => setSelectedRow(idx)}
                          className={`cursor-pointer transition-colors ${
                            selectedRow === idx ? 'bg-brand-violet/15' : 'hover:bg-white/[0.02]'
                          }`}
                        >
                          <td className="py-3 px-4 font-mono text-brand-violet">#{row.id}</td>
                          <td className="py-3 px-4 font-semibold text-white">{row.project}</td>
                          <td className="py-3 px-4 text-text-muted">{row.engineer}</td>
                          <td className="py-3 px-4 font-mono text-white">{row.budget}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-brand-neon rounded-full" 
                                  style={{ width: `${row.progress}%` }}
                                />
                              </div>
                              <span className="font-mono text-[11px] text-text-dim">{row.progress}%</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-mono ${
                              row.status === 'Deployed' 
                                ? 'bg-brand-neonDim text-brand-neon border border-brand-neon/30' 
                                : 'bg-brand-violet/20 text-brand-violet border border-brand-violet/30'
                            }`}>
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-between items-center text-xs text-text-dim pt-2">
                  <span>Simulating real-time data virtualization across 500,000 records</span>
                  <span className="font-mono text-brand-neon">Virtual Scroll Cache: 0ms lag</span>
                </div>
              </div>
            )}

            {activeTab === 'chart' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-semibold text-white">Consolidated Enterprise Revenue & Pipeline</h4>
                    <p className="text-xs text-text-dim">Sub-millisecond render across 24 regional data centers</p>
                  </div>
                  <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-xl border border-white/10 text-xs font-mono">
                    <span className="px-2 py-1 rounded bg-brand-violet text-white">1M</span>
                    <span className="px-2 py-1 text-text-muted">3M</span>
                    <span className="px-2 py-1 text-text-muted">YTD</span>
                  </div>
                </div>

                <div className="h-64 rounded-2xl bg-black/50 border border-white/[0.08] p-4 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex justify-between text-xs font-mono text-text-dim">
                    <span>$12.5M Target</span>
                    <span className="text-brand-neon">Actual: $14.8M (+18.4%)</span>
                  </div>
                  
                  {/* Wave Graph representation */}
                  <div className="relative h-44 w-full">
                    <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="revenueGlow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#1aff75" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#1aff75" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,170 C150,150 200,80 350,110 C500,140 600,40 800,20 L800,200 L0,200 Z"
                        fill="url(#revenueGlow)"
                      />
                      <path
                        d="M0,170 C150,150 200,80 350,110 C500,140 600,40 800,20"
                        fill="none"
                        stroke="#1aff75"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div className="flex justify-between text-[11px] font-mono text-text-dim border-t border-white/[0.06] pt-2">
                    <span>Q1 Jan</span>
                    <span>Q2 Apr</span>
                    <span>Q3 Jul</span>
                    <span>Q4 Oct</span>
                    <span>Closing Dec</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pdf' && (
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-black/60 border border-white/[0.08] flex flex-col md:flex-row gap-6">
                  {/* PDF Toolbar */}
                  <div className="md:w-64 border-b md:border-b-0 md:border-r border-white/[0.08] pb-4 md:pb-0 md:pr-4 space-y-3">
                    <div className="text-xs font-semibold uppercase font-mono text-brand-neon">Document Controls</div>
                    <button className="w-full flex items-center justify-between p-2 rounded-lg bg-white/[0.04] text-xs text-white hover:bg-white/[0.08]">
                      <span className="flex items-center gap-2"><PenTool className="w-3.5 h-3.5" /> Redact PII Data</span>
                      <span className="text-[10px] text-brand-neon">ON</span>
                    </button>
                    <button className="w-full flex items-center justify-between p-2 rounded-lg bg-white/[0.04] text-xs text-white hover:bg-white/[0.08]">
                      <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5" /> Digital Certificate</span>
                      <span className="text-[10px] text-text-dim">SHA-256</span>
                    </button>
                    <button className="w-full flex items-center justify-between p-2 rounded-lg bg-white/[0.04] text-xs text-white hover:bg-white/[0.08]">
                      <span className="flex items-center gap-2"><FileSpreadsheet className="w-3.5 h-3.5" /> Export to XLSX</span>
                    </button>
                  </div>

                  {/* Document Page Mock */}
                  <div className="flex-1 bg-[#1a1a24] rounded-xl p-6 border border-white/10 shadow-inner space-y-4">
                    <div className="flex justify-between items-center border-b border-white/10 pb-3">
                      <div>
                        <div className="text-sm font-bold text-white">NON-DISCLOSURE & ENTERPRISE SLA</div>
                        <div className="text-xs text-text-dim">Document Reference: DOC-SYNCFUSION-9921</div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-brand-neon text-[10px] font-mono">
                        VERIFIED SECURE
                      </span>
                    </div>

                    <p className="text-xs text-text-muted leading-relaxed">
                      This Agreement is entered into by and between Enterprise Customer and Syncfusion Inc. All components, document parsing runtimes, and client-side SDKs operate strictly on-premise or within customer private cloud VPC with zero external data telemetry.
                    </p>

                    <div className="p-3 bg-black/40 rounded-lg border border-white/[0.06] text-xs font-mono text-brand-violet flex items-center justify-between">
                      <span>✓ E-Signed via BoldSign Integration</span>
                      <span className="text-text-dim">2026-11-12T05:12:00Z</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ai' && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-black/60 border border-purple-500/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-purple-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-brand-neon" /> Code Studio Natural Language Prompt
                    </span>
                    <span className="text-[11px] font-mono text-text-dim">Syncfusion Context Engine</span>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                      className="flex-1 bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-purple-400 font-mono"
                    />
                    <button
                      onClick={handleAiGenerate}
                      disabled={isGenerating}
                      className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                    >
                      {isGenerating ? (
                        <span>Synthesizing...</span>
                      ) : (
                        <>
                          <Play className="w-3 h-3 fill-current" />
                          <span>Generate Code</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Generated code output */}
                  <div className="p-4 rounded-xl bg-[#09090d] border border-white/[0.06] font-mono text-xs text-text-muted space-y-2">
                    <div className="text-brand-neon text-[11px] font-mono">
                      // Generated by Syncfusion MCP Model Server (React 19 / TypeScript)
                    </div>
                    <pre className="text-white/80 overflow-x-auto text-[11px]">
{aiGenerated ? `export const ExecutiveDashboard = () => (
  <div className="grid grid-cols-2 gap-4">
    <SfChart dataSource={quarterlyRevenue}>
      <SeriesCollectionDirective>
        <SeriesDirective type="SplineArea" xName="month" yName="revenue" fill="#6369ff" />
      </SeriesCollectionDirective>
    </SfChart>
    <SfGrid dataSource={quarterlyDetails} allowSorting={true} allowExcelExport={true} />
  </div>
);` : `// Click "Generate Code" above to synthesize an end-to-end component definition`}
                    </pre>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
