import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is included in Syncfusion's Essential Studio®?",
      a: "Essential Studio includes over 1,600 enterprise UI components spanning Web (Blazor, React, Angular, Vue, ASP.NET Core, JavaScript), Mobile (Flutter, .NET MAUI), and Desktop (WPF, WinForms, WinUI, UWP). It also includes the Document Processing suite (in-app PDF, DOCX, XLSX, and PPTX engines), Theme Studio, Figma UI Kits, and AI Code Studio MCP integrations."
    },
    {
      q: "Who qualifies for the free Syncfusion Community License?",
      a: "The Community License is 100% free and provides complete access to all 1,600+ components and Document SDKs. It is available to individual developers and organizations with gross annual revenue under $1 million USD and no more than five developers."
    },
    {
      q: "Are there any runtime royalties, per-server, or per-user fees?",
      a: "No. Syncfusion operates on a transparent, royalty-free licensing model. There are never any fees per customer deployment, per server, per core, or per end user. Shipping an application to one user or ten million users incurs zero additional licensing fees."
    },
    {
      q: "Can our engineers access the full component source code?",
      a: "Yes. Enterprise Unlimited licenses include full C# and TypeScript source code. You can step directly into our controls in your IDE (VS Code, Visual Studio, Rider), trace the actual call stack, set breakpoints, and extend components cleanly."
    },
    {
      q: "How do the AI Coding Agent Tools & MCP Servers work?",
      a: "Syncfusion publishes official Model Context Protocol (MCP) servers and agent skills. When connected to Cursor, VS Code, JetBrains, or Claude, the AI receives ground-truth API signatures, component lifecycles, and tested implementation examples — eliminating hallucinated parameters and generating verified, compilable code."
    },
    {
      q: "Do Document SDKs require Microsoft Office or Adobe Acrobat on the server?",
      a: "No. All Syncfusion Document Solutions (DocIO, XlsIO, Presentation, and PDF Viewer) are 100% standalone and native. They run completely in-process within your .NET, Java, or JavaScript runtimes on Linux, Windows, macOS, Docker containers, or air-gapped VPCs without any third-party desktop software."
    },
    {
      q: "What compliance and security standards does Syncfusion meet?",
      a: "Syncfusion is SOC 2 Type II certified with third-party audit reports available on request under NDA. All web and desktop components conform to WCAG 2.1 Level AA and Section 508 accessibility guidelines. Data stays strictly inside your client or backend environment with zero telemetry phone-home."
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-32 border-t border-white/[0.06] bg-[#0c0c10] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-text-muted font-medium mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-brand-violet" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            You asked, <span className="font-serif italic font-normal text-indigo-400">we answered.</span>
          </h2>
          <p className="text-base sm:text-lg text-text-muted">
            Everything you need to know about licensing, frameworks, document tools, and AI integration.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl bg-[#0f0f15] border border-white/[0.06] overflow-hidden transition-all duration-200 hover:border-white/15"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 transition-colors"
                >
                  <span className="text-base sm:text-lg font-semibold text-white">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-full bg-white/[0.04] text-text-muted transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-text-muted leading-relaxed border-t border-white/[0.04] mt-2 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-sm text-text-dim">
          Still have questions? Our enterprise architects are available 7 days a week.{' '}
          <a href="#demo" className="text-brand-violet font-semibold hover:underline">
            Talk to an Expert →
          </a>
        </div>

      </div>
    </section>
  );
};
