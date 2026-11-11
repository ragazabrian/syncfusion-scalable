import React from 'react';
import { Layers, Github, Twitter, Linkedin, Youtube, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#07070a] pt-16 pb-12 text-xs text-text-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-white/[0.06]">
          
          {/* Brand info (Span 2 on mobile, 1 on desktop) */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-deepViolet to-brand-violet flex items-center justify-center p-1.5 shadow-[0_0_15px_rgba(99,105,255,0.4)]">
                <Layers className="w-full h-full text-white" />
              </div>
              <div className="flex items-baseline">
                <span className="text-lg font-bold tracking-tight text-white">Syncfusion</span>
                <span className="text-xs text-brand-violet font-semibold ml-0.5">®</span>
              </div>
            </div>

            <p className="text-text-dim text-xs leading-relaxed max-w-sm">
              The unified UI component and document processing platform for business-critical applications. Built for enterprise scale with AI-native developer tooling.
            </p>

            {/* System Status Pill (Scalable Framer Style) */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono">
              <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse" />
              <span className="text-text-muted">All Systems Operational</span>
              <span className="text-text-dim">99.99% Uptime</span>
            </div>
          </div>

          {/* Column 1: UI Components */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase text-[11px] font-mono tracking-wider">UI Frameworks</h4>
            <ul className="space-y-2">
              <li><a href="#frameworks" className="hover:text-white transition-colors">Blazor Components</a></li>
              <li><a href="#frameworks" className="hover:text-white transition-colors">React 19 Components</a></li>
              <li><a href="#frameworks" className="hover:text-white transition-colors">Angular 18+ Signals</a></li>
              <li><a href="#frameworks" className="hover:text-white transition-colors">Vue 3 Controls</a></li>
              <li><a href="#frameworks" className="hover:text-white transition-colors">.NET MAUI Controls</a></li>
              <li><a href="#frameworks" className="hover:text-white transition-colors">Flutter Widgets</a></li>
            </ul>
          </div>

          {/* Column 2: Document Solutions */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase text-[11px] font-mono tracking-wider">Document SDKs</h4>
            <ul className="space-y-2">
              <li><a href="#document-solutions" className="hover:text-white transition-colors">PDF Viewer & Editor</a></li>
              <li><a href="#document-solutions" className="hover:text-white transition-colors">DocIO Word Processing</a></li>
              <li><a href="#document-solutions" className="hover:text-white transition-colors">XlsIO Excel Engine</a></li>
              <li><a href="#document-solutions" className="hover:text-white transition-colors">Presentation PPTX</a></li>
              <li><a href="#document-solutions" className="hover:text-white transition-colors">Document Form Signatures</a></li>
              <li><a href="#document-solutions" className="hover:text-white transition-colors">OCR & Redaction</a></li>
            </ul>
          </div>

          {/* Column 3: SaaS & Ecosystem */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase text-[11px] font-mono tracking-wider">SaaS Products</h4>
            <ul className="space-y-2">
              <li><a href="https://www.boldsign.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">BoldSign E-Sign <ArrowUpRight className="w-3 h-3 text-text-dim" /></a></li>
              <li><a href="https://www.bolddesk.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">BoldDesk HelpDesk <ArrowUpRight className="w-3 h-3 text-text-dim" /></a></li>
              <li><a href="https://www.boldbi.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">Bold BI Analytics <ArrowUpRight className="w-3 h-3 text-text-dim" /></a></li>
              <li><a href="https://www.boldreports.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">Bold Reports <ArrowUpRight className="w-3 h-3 text-text-dim" /></a></li>
              <li><a href="#code-studio" className="hover:text-white transition-colors text-brand-neon">Code Studio AI IDE</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Community License</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-dim">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} Syncfusion, Inc. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-text-muted">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-neon" />
              SOC 2 Type II Certified
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/ragazabrian/syncfusion-scalable" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 text-text-muted hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repo</span>
            </a>
            <span className="text-white/10">•</span>
            <span className="text-text-dim font-mono">Designed in the Scalable Framer Aesthetic</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
