import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Mechanism from './components/Mechanism';
import AudioPreview from './components/AudioPreview';
import Content from './components/Content';
import DownloadSteps from './components/DownloadSteps';
import ProductProof from './components/ProductProof';
import HonestNotice from './components/HonestNotice';
import AuthorTrust from './components/AuthorTrust';
import FAQ from './components/FAQ';
import EmailCapture from './components/EmailCapture';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
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
    <div className="bg-[#F7F5F0] min-h-screen font-sans text-[#16232F] antialiased relative overflow-x-hidden">
      {/* 0. NAVIGATION */}
      <Navbar />

      {/* 1. HERO */}
      <Hero />

      {/* 2. PROBLEM */}
      <Problem />

      {/* 3. KAKO RADI (MECHANISM) */}
      <Mechanism />

      {/* 4. AUDIO PREVIEW */}
      <AudioPreview />

      {/* 5. SADRŽAJ PROIZVODA */}
      <Content />

      {/* 6. KAKO PREUZIMANJE RADI */}
      <DownloadSteps />

      {/* 7. DOKAZ PROIZVODA */}
      <ProductProof />

      {/* 8. NOV PROIZVOD (HONEST NOTICE) */}
      <HonestNotice />

      {/* 9. AUTOR */}
      <AuthorTrust />

      {/* 10. ČESTA PITANJA */}
      <FAQ />

      {/* 11. BESPLATNI KORAK / EMAIL CAPTURE */}
      <EmailCapture />

      {/* 12. PONUDA & JAMSTVO */}
      <Pricing />

      {/* 13. ZAVRŠNA SEKCIJA */}
      <FinalCTA />

      {/* 14. FOOTER */}
      <Footer />

      {/* 15. COOKIE CONSENT & PIXEL */}
      <CookieConsent />

      <Analytics />
    </div>
  );
}
