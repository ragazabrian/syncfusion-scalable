import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductBento } from './components/ProductBento';
import { CustomerStories } from './components/CustomerStories';
import { Integrations } from './components/Integrations';
import { RealTimeData } from './components/RealTimeData';
import { Features } from './components/Features';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';

export const App: React.FC = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f8] overflow-x-hidden selection:bg-brand-violet/30 selection:text-white font-sans">
      {/* 1. Header Navigation */}
      <Navbar onOpenDemo={() => setDemoOpen(true)} />
      
      <main>
        {/* 2. Hero Section with Exact Dashboard Mockup */}
        <Hero onOpenDemo={() => setDemoOpen(true)} />
        
        {/* 3. Product Bento Grid ("Track the things that matter most to you.") */}
        <ProductBento />
        
        {/* 4. Customer Stories ("Scale faster than ever.") */}
        <CustomerStories />
        
        {/* 5. Integrations ("Integrate seamlessly.") */}
        <Integrations />
        
        {/* 6. Real-Time Data ("Your data in real-time.") */}
        <RealTimeData />
        
        {/* 7. Features ("Features that make a difference.") */}
        <Features />
        
        {/* 8. Pricing ("Pricing that makes sense.") */}
        <PricingSection onOpenDemo={() => setDemoOpen(true)} />
        
        {/* 9. FAQs ("You asked, we answered.") */}
        <FaqSection />
        
        {/* 10. Bottom CTA ("Book your demo today.") */}
        <CtaBanner onOpenDemo={() => setDemoOpen(true)} />
      </main>

      {/* 11. Footer */}
      <Footer />
      
      {/* 12. Interactive Booking / Evaluation Modal */}
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
};

export default App;
