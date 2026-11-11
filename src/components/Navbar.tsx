import React, { useState, useEffect } from 'react';
import { Layers, ChevronDown, ArrowRight, Menu, X, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

interface NavbarProps {
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-[#0a0a0a]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.6)]' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo (Scalable Framer style: Monogram + Wordmark) */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-deepViolet to-brand-violet flex items-center justify-center p-1.5 shadow-[0_0_20px_rgba(99,105,255,0.4)] group-hover:scale-105 transition-transform duration-200">
              <Layers className="w-full h-full text-white" />
            </div>
            <div className="flex items-baseline">
              <span className="text-xl font-bold tracking-tight text-white font-sans">{siteConfig.brand.name}</span>
              <span className="text-xs text-brand-violet font-semibold ml-0.5">{siteConfig.brand.symbol}</span>
            </div>
          </a>

          {/* Scalable Framer Center Nav Links: About, Blog, Changelog (New), Pricing, Pages */}
          <nav className="hidden md:flex items-center gap-1 text-[13px] font-medium text-text-muted">
            {siteConfig.navigation.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/[0.04] transition-colors"
              >
                <span>{link.label}</span>
                {link.hasBadge && (
                  <span className="px-1.5 py-0.2 text-[10px] font-mono font-semibold bg-brand-neonDim text-brand-neon rounded border border-brand-neon/30">
                    {link.badgeText}
                  </span>
                )}
              </a>
            ))}

            {/* Pages Dropdown (Exact Scalable Framer Item) */}
            <div 
              className="relative"
              onMouseEnter={() => setPagesDropdownOpen(true)}
              onMouseLeave={() => setPagesDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/[0.04] transition-colors">
                <span>Pages</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {pagesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 mt-2 p-2 rounded-2xl bg-[#0f0f12] border border-white/10 backdrop-blur-2xl shadow-2xl shadow-black/80 animate-in fade-in duration-150">
                  {siteConfig.navigation.pagesDropdown.map((p) => (
                    <a
                      key={p.label}
                      href={p.href}
                      className="block p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors"
                    >
                      <div className="text-xs font-semibold text-white">{p.label}</div>
                      <div className="text-[11px] text-text-dim mt-0.5">{p.desc}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Button (Scalable Framer Style) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenDemo}
              className="relative inline-flex items-center justify-center gap-1.5 px-5 py-2 text-xs font-semibold text-white rounded-full overflow-hidden transition-all duration-300 group shadow-[0_0_20px_rgba(99,105,255,0.35)] hover:shadow-[0_0_30px_rgba(99,105,255,0.6)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-violet via-indigo-600 to-brand-deepViolet group-hover:scale-105 transition-transform" />
              <span className="relative z-10 flex items-center gap-1.5">
                {siteConfig.navigation.ctaButton}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-muted hover:text-white rounded-lg hover:bg-white/[0.06]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 border-t border-white/10 mt-3 space-y-2 bg-[#0c0c10]/95 backdrop-blur-2xl rounded-2xl p-4">
            {siteConfig.navigation.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-white hover:bg-white/[0.06] rounded-xl"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
                className="w-full py-2.5 rounded-full bg-brand-violet text-white text-xs font-semibold text-center"
              >
                {siteConfig.navigation.ctaButton}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
