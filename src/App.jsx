import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Mechanism from './components/Mechanism';
import Content from './components/Content';
import HonestNotice from './components/HonestNotice';
import AuthorTrust from './components/AuthorTrust';
import FAQ from './components/FAQ';
import EmailCapture from './components/EmailCapture';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
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
    <div className="bg-[#F7F5F0] min-h-screen font-sans text-[#16232F] antialiased relative overflow-x-hidden">
      {/* 1. HERO */}
      <Hero />

      {/* 2. PROBLEM */}
      <Problem />

      {/* 3. MECHANISM (THREE SYSTEMS) */}
      <Mechanism />

      {/* 4. OFFER & GUARANTEE */}
      <Content />

      {/* 5. HONEST NOTICE */}
      <HonestNotice />

      {/* 6. AUTHOR STORY */}
      <AuthorTrust />

      {/* 7. FAQ */}
      <FAQ />

      {/* 8. EMAIL CAPTURE */}
      <EmailCapture />

      {/* 9. FINAL CTA */}
      <FinalCTA />

      {/* 10. FOOTER */}
      <Footer />

      <Analytics />
    </div>
  );
}
