import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import AudioDemo from './components/AudioDemo';
import ProductDeliverables from './components/ProductDeliverables';
import TrustGuarantee from './components/TrustGuarantee';
import OfferPricing from './components/OfferPricing';
import FaqFooter from './components/FaqFooter';
import CookieConsent from './components/CookieConsent';
import { trackInitiateCheckout, trackViewContent } from './utils/metaPixel';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  useEffect(() => {
    // Track ViewContent after consent / page mount
    trackViewContent();

    // Global listener for Lemon Squeezy checkout links
    const handleGlobalClick = (e) => {
      const anchor = e.target.closest('a');
      if (anchor && anchor.href && anchor.href.includes('lemonsqueezy.com/checkout/buy')) {
        trackInitiateCheckout();
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans text-[#0B1C2E] antialiased relative overflow-x-hidden">
      {/* 0. NAVIGATION */}
      <Navbar />

      {/* 1. HERO */}
      <Hero />

      {/* 2. PROBLEM I RJEŠENJE (MERGED) */}
      <ProblemSolution />

      {/* 3. AUDIO DEMONSTRACIJA */}
      <AudioDemo />

      {/* 4. ŠTO KUPAC DOBIJA + UVID U MATERIJALE (MERGED) */}
      <ProductDeliverables />

      {/* 5. ZAŠTO JE NASTAO MIRAN LET, JAMSTVO I TRANSPARENTNOST (MERGED TRUST BLOCK) */}
      <TrustGuarantee />

      {/* 6. PONUDA I CIJENA */}
      <OfferPricing />

      {/* 7. SKRAĆENI FAQ I FOOTER */}
      <FaqFooter />

      {/* GDPR COOKIE BANNER & META PIXEL */}
      <CookieConsent />

      <Analytics />
    </div>
  );
}
