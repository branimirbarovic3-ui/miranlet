import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Kako radi', href: '#kako-radi' },
    { label: 'Što dobivaš', href: '#sadrzaj' },
    { label: 'Česta pitanja', href: '#faq' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#16232F]/95 backdrop-blur-md shadow-md py-2.5 sm:py-3' 
          : 'bg-gradient-to-b from-[#16232F]/30 to-transparent py-3.5 sm:py-5'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="/" 
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C8A84A] rounded-lg p-1 shrink-0"
          aria-label="Miran Let Početna"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#16232F] border-2 border-[#C8A84A] flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 48 48" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4 L38 9 V22 C38 31 32 38 24 41 C16 38 10 31 10 22 V9 Z" fill="#C8A84A" />
              <path d="M24 6.5 L36 10.8 V22 C36 29.5 31 35.8 24 38.5 C17 35.8 12 29.5 12 22 V10.8 Z" fill="#16232F" />
              {/* Plane Silhouette */}
              <path d="M23 15 L25 15 L26 21 L32 23.5 L32 25.5 L26 24.5 L26 29 L28 31 L28 32.5 L24 31.5 L20 32.5 L20 31 L22 29 L22 24.5 L16 25.5 L16 23.5 L22 21 Z" fill="#C8A84A" />
            </svg>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif text-base sm:text-xl font-bold tracking-wide text-[#16232F] group-hover:text-[#C8A84A] transition-colors leading-tight">
              MIRAN LET
            </span>
            <span className="font-sans text-[9px] sm:text-[10px] font-semibold tracking-widest text-[#4A5A68] uppercase">
              Audio protokol
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Glavna navigacija">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-semibold text-[#16232F] hover:text-[#C8A84A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C8A84A] rounded px-2 py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://miranlet.lemonsqueezy.com/checkout/buy/63565eee-96d4-4d01-b339-ecfbe56cab97"
            className="bg-[#C8A84A] hover:bg-[#B8983A] text-[#16232F] font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-xl transition-all shadow-md shadow-[#C8A84A]/25 hover:-translate-y-0.5"
          >
            PREUZMI MIRAN LET
          </a>
        </nav>

        {/* Mobile Nav Button */}
        <div className="flex md:hidden items-center gap-2 sm:gap-3">
          <a
            href="https://miranlet.lemonsqueezy.com/checkout/buy/63565eee-96d4-4d01-b339-ecfbe56cab97"
            className="bg-[#C8A84A] hover:bg-[#B8983A] text-[#16232F] font-bold text-[11px] uppercase tracking-wider py-2 px-3 rounded-lg shadow-sm"
          >
            PREUZMI
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#16232F] focus:outline-none focus:ring-2 focus:ring-[#C8A84A] rounded-lg"
            aria-label={mobileMenuOpen ? 'Zatvori izbornik' : 'Otvori izbornik'}
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#16232F] text-white border-t border-white/10 px-5 py-5 shadow-2xl animate-in slide-in-from-top">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-medium text-white/90 hover:text-[#C8A84A] py-2 transition-colors border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://miranlet.lemonsqueezy.com/checkout/buy/63565eee-96d4-4d01-b339-ecfbe56cab97"
              className="min-h-[52px] bg-[#C8A84A] hover:bg-[#B8983A] text-[#16232F] font-bold text-sm uppercase tracking-wider py-3.5 px-6 rounded-xl text-center transition-all mt-2 flex items-center justify-center"
            >
              PREUZMI MIRAN LET · 19,99 €
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
