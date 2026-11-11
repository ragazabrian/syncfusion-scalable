import React, { useState, useEffect } from 'react';
import { Layers, ChevronDown, Sparkles, ArrowRight, Menu, X, Shield, Terminal, BookOpen, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)]' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-deepViolet to-brand-violet flex items-center justify-center p-2 shadow-[0_0_20px_rgba(99,105,255,0.4)] group-hover:scale-105 transition-transform duration-200">
              <Layers className="w-full h-full text-white" />
            </div>
            <div className="flex items-baseline">
              <span className="text-xl font-bold tracking-tight text-white font-sans">Syncfusion</span>
              <span className="text-xs text-brand-violet font-semibold ml-0.5">®</span>
            </div>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 text-[10px] font-semibold tracking-wider text-brand-neon bg-brand-neonDim border border-brand-neon/30 rounded-full uppercase ml-1">
              v2026.3
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-text-muted">
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:text-white hover:bg-white/[0.04] transition-colors">
                Products <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>
              
              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 w-80 mt-1 p-2 rounded-2xl bg-[#0f0f11] border border-white/10 backdrop-blur-2xl shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="p-2 space-y-1">
                    <a href="#ui-suite" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group">
                      <div className="p-2 rounded-lg bg-brand-violet/10 text-brand-violet group-hover:bg-brand-violet group-hover:text-white transition-colors">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Essential Studio®</div>
                        <div className="text-xs text-text-dim">1,600+ UI components for Web, Desktop & Mobile</div>
                      </div>
                    </a>
                    <a href="#document-solutions" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group">
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-brand-neon group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Document Solutions</div>
                        <div className="text-xs text-text-dim">In-app PDF, DOCX, XLSX & PPTX processing</div>
                      </div>
                    </a>
                    <a href="#code-studio" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group">
                      <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white flex items-center gap-1.5">
                          Code Studio <span className="text-[10px] text-brand-neon bg-brand-neonDim px-1.5 py-0.2 rounded font-mono">AI</span>
                        </div>
                        <div className="text-xs text-text-dim">AI-native IDE & MCP server integration</div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a href="#frameworks" className="px-3 py-2 rounded-lg hover:text-white hover:bg-white/[0.04] transition-colors">
              Frameworks
            </a>
            <a href="#code-studio" className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:text-white hover:bg-white/[0.04] transition-colors">
              <Sparkles className="w-3.5 h-3.5 text-brand-neon" />
              AI Studio
            </a>
            <a href="#customers" className="px-3 py-2 rounded-lg hover:text-white hover:bg-white/[0.04] transition-colors">
              Customers
            </a>
            <a href="#pricing" className="px-3 py-2 rounded-lg hover:text-white hover:bg-white/[0.04] transition-colors">
              Pricing
            </a>
            <a href="#faq" className="px-3 py-2 rounded-lg hover:text-white hover:bg-white/[0.04] transition-colors">
              FAQ
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button 
              onClick={onOpenDemo}
              className="text-sm font-medium text-text-muted hover:text-white px-3.5 py-2 rounded-full hover:bg-white/[0.06] transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={onOpenDemo}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-full overflow-hidden transition-all duration-300 group shadow-[0_0_24px_rgba(99,105,255,0.35)] hover:shadow-[0_0_32px_rgba(99,105,255,0.6)]"
            >
              {/* Button gradient border and surface */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-violet via-indigo-500 to-brand-deepViolet transition-all duration-300 group-hover:scale-105" />
              <div className="absolute inset-0.5 rounded-full bg-[#0d0d12]/40 backdrop-blur-sm" />
              <span className="relative z-10 flex items-center gap-1.5">
                Free 30-Day Trial
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-muted hover:text-white rounded-lg hover:bg-white/[0.06]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 border-t border-white/10 mt-3 space-y-2 bg-[#0a0a0a]/95 backdrop-blur-2xl rounded-2xl p-4">
            <a 
              href="#ui-suite" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-white hover:bg-white/[0.06] rounded-xl"
            >
              UI Component Suite
            </a>
            <a 
              href="#document-solutions" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-white hover:bg-white/[0.06] rounded-xl"
            >
              Document Solutions
            </a>
            <a 
              href="#frameworks" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-white hover:bg-white/[0.06] rounded-xl"
            >
              Frameworks & Platforms
            </a>
            <a 
              href="#code-studio" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-brand-neon hover:bg-white/[0.06] rounded-xl"
            >
              Code Studio & AI
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-white hover:bg-white/[0.06] rounded-xl"
            >
              Pricing & Community License
            </a>
            <div className="pt-4 flex flex-col gap-2">
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
                className="w-full py-3 rounded-full bg-brand-violet text-white font-semibold text-center"
              >
                Start Free Trial
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
