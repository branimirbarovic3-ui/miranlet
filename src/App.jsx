import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Mechanism from './components/Mechanism';
import Content from './components/Content';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Guarantee from './components/Guarantee';
import Footer from './components/Footer';
import SocialProofToast from './components/SocialProofToast';

export default function App() {
  return (
    <div className="bg-[#FAFAF8] min-h-screen font-sans text-[#060A12] antialiased selection:bg-[#D4AF37]/20 selection:text-navy relative overflow-x-hidden">
      
      {/* 1. HERO (HOOK) */}
      <Hero />

      {/* 2. PROBLEM / EMPATHY */}
      <Problem />

      {/* 3. MECHANISM (HOW IT WORKS) */}
      <Mechanism />

      {/* 4. WHAT'S INSIDE (CONTENT) */}
      <Content />

      {/* 5. TESTIMONIALS / PROOF */}
      <Testimonials />

      {/* 5.5 RISK REVERSAL (GUARANTEE) */}
      <Guarantee />

      {/* 6. FINAL CTA & GUARANTEE */}
      <FinalCTA />

      {/* 12. FOOTER */}
      <Footer />

      {/* 13. FLOATING TOASTS */}
      <SocialProofToast />
    </div>
  );
}
