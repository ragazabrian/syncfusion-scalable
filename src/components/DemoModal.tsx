import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, Layers, ShieldCheck, Mail, User, Building } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [platform, setPlatform] = useState('React');
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // keep open for feedback
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-[#0f0f16] border border-white/10 p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-brand-violet/20 blur-[80px] pointer-events-none rounded-full" />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.04] text-text-muted hover:text-white hover:bg-white/[0.1] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-brand-violet/20 text-brand-violet">
                <Sparkles className="w-4 h-4" />
              </span>
              <span className="text-xs font-mono uppercase text-brand-neon tracking-wider">Instant 30-Day Access</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Start your Syncfusion evaluation</h3>
            <p className="text-xs text-text-muted mb-6">
              Complete access to 1,600+ UI components, Document SDKs, and Code Studio AI tooling. No credit card required.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-text-muted mb-1.5">Work Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-dim" />
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-text-dim focus:outline-none focus:border-brand-violet"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-muted mb-1.5">Primary Framework</label>
                <select
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="w-full bg-[#14141e] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-violet"
                >
                  <option value="Blazor">Blazor (WebAssembly & Server)</option>
                  <option value="React">React 19 & Next.js</option>
                  <option value="Angular">Angular 18+ Signals</option>
                  <option value="Vue">Vue 3 Composition API</option>
                  <option value="MAUI">.NET MAUI (iOS, Android, Windows)</option>
                  <option value="Flutter">Flutter (Cross-Platform)</option>
                  <option value="DocumentSDK">Document Solutions Only (PDF, DOCX, XLSX)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-brand-violet via-indigo-600 to-brand-deepViolet text-white font-semibold text-xs sm:text-sm shadow-[0_0_20px_rgba(99,105,255,0.4)] hover:shadow-[0_0_30px_rgba(99,105,255,0.7)] transition-all flex items-center justify-center gap-2"
                >
                  <span>Generate Evaluation License Key</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-text-dim">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-neon" />
                Enterprise SOC 2 Encrypted
              </span>
              <span>Need sales assistance? <a href="mailto:support@syncfusion.com" className="text-brand-violet hover:underline">Contact sales</a></span>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-brand-neonDim border border-brand-neon/30 text-brand-neon flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Evaluation License Generated</h3>
            <p className="text-xs text-text-muted max-w-sm mx-auto">
              We've prepared your 30-day evaluation credentials for <strong>{platform}</strong> and sent the activation tokens to <strong>{email || 'your email'}</strong>.
            </p>
            <div className="p-3 bg-black/60 rounded-xl border border-white/[0.08] text-xs font-mono text-brand-neon select-all">
              SYNCFUSION-EVAL-2026-X94B-LIVE-KEY
            </div>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="px-6 py-2 rounded-xl bg-white/[0.06] text-white text-xs font-semibold hover:bg-white/10"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
