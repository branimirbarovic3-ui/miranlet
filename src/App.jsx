import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Mechanism from './components/Mechanism';
import AuthorTrust from './components/AuthorTrust';
import Content from './components/Content';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import EmailCapture from './components/EmailCapture';
import FinalCTA from './components/FinalCTA';
import Guarantee from './components/Guarantee';
import Footer from './components/Footer';
import SocialProofToast from './components/SocialProofToast';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  React.useEffect(() => {
    const handleGlobalClick = (e) => {
      const anchor = e.target.closest('a');
      if (anchor && anchor.href && anchor.href.includes('lemonsqueezy.com/checkout/buy')) {
        if (window.fbq) {
          window.fbq('track', 'InitiateCheckout');
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return (
    <div className="bg-[#FAFAF8] min-h-screen font-sans text-[#060A12] antialiased selection:bg-[#D4AF37]/20 selection:text-navy relative overflow-x-hidden">
      
      {/* 1. HERO (HOOK) */}
      <Hero />

      {/* 2. PROBLEM / EMPATHY */}
      <Problem />

      {/* 3. MECHANISM (HOW IT WORKS) */}
      <Mechanism />

      {/* 3.5 AUTHOR STORY */}
      <AuthorTrust />

      {/* 4. WHAT'S INSIDE (CONTENT / BONUS) */}
      <Content />

      {/* 4.5 FAQ ACCORDION */}
      <FAQ />

      {/* 5. TESTIMONIALS / PROOF */}
      <Testimonials />

      {/* 5.2 SOS GUIDE EMAIL CAPTURE */}
      <EmailCapture />

      {/* 5.5 RISK REVERSAL (GUARANTEE) */}
      <Guarantee />

      {/* 6. FINAL CTA & GUARANTEE */}
      <FinalCTA />

      {/* 12. FOOTER */}
      <Footer />

      {/* 13. FLOATING TOASTS */}
      <SocialProofToast />
      <Analytics />
    </div>
  );
}
