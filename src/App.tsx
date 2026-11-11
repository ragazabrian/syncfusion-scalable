import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoMarquee } from './components/LogoMarquee';
import { BentoFeatures } from './components/BentoFeatures';
import { FrameworkSelector } from './components/FrameworkSelector';
import { InteractivePlayground } from './components/InteractivePlayground';
import { WhySyncfusion } from './components/WhySyncfusion';
import { CustomerStories } from './components/CustomerStories';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';

export const App: React.FC = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f8] overflow-x-hidden selection:bg-brand-violet/30 selection:text-white font-sans">
      <Navbar onOpenDemo={() => setDemoOpen(true)} />
      
      <main>
        <Hero onOpenDemo={() => setDemoOpen(true)} />
        <LogoMarquee />
        <BentoFeatures />
        <FrameworkSelector />
        <InteractivePlayground />
        <WhySyncfusion />
        <CustomerStories />
        <PricingSection onOpenDemo={() => setDemoOpen(true)} />
        <FaqSection />
        <CtaBanner onOpenDemo={() => setDemoOpen(true)} />
      </main>

      <Footer />
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
};

export default App;
