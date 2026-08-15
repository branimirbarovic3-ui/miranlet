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
    { label: 'Audio isječak', href: '#audio' },
    { label: 'Što dobivaš', href: '#sadrzaj' },
    { label: 'Pitanja', href: '#faq' },
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
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#0B1C2E]/10 py-2.5 sm:py-3' 
          : 'bg-white/90 backdrop-blur-sm border-b border-[#0B1C2E]/5 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 flex items-center justify-between h-[52px] sm:h-[58px]">
        {/* Brand Circular Logo + Wordmark */}
        <a 
          href="/" 
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-lg p-1 shrink-0"
          aria-label="Miran Let Početna"
        >
          <img 
            src="/logo-ml.png" 
            alt="Miran Let Logo" 
            className="w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] rounded-full object-cover shadow-sm border border-[#D4AF37]/50 group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col text-left">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-[#0B1C2E] leading-tight">
              MIRAN LET
            </span>
            <span className="font-sans text-[10px] font-bold tracking-[0.16em] text-[#176EA6] uppercase">
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
              className="text-sm font-semibold text-[#0B1C2E] hover:text-[#176EA6] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded px-2 py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://miranlet.lemonsqueezy.com/checkout/buy/63565eee-96d4-4d01-b339-ecfbe56cab97"
            className="btn-gold text-xs uppercase tracking-wider py-2.5 px-5 rounded-lg transition-all text-[#0B1C2E]"
          >
            PREUZMI MIRAN LET
          </a>
        </nav>

        {/* Mobile Nav Button */}
        <div className="flex md:hidden items-center gap-2.5">
          <a
            href="https://miranlet.lemonsqueezy.com/checkout/buy/63565eee-96d4-4d01-b339-ecfbe56cab97"
            className="btn-gold text-[11px] uppercase tracking-wider py-2 px-3.5 rounded-lg shadow-sm"
          >
            PREUZMI
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0B1C2E] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-lg"
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

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B1C2E] text-white border-t border-[#176EA6]/30 px-5 py-5 shadow-2xl animate-in slide-in-from-top">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-medium text-white/90 hover:text-[#D4AF37] py-2 transition-colors border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://miranlet.lemonsqueezy.com/checkout/buy/63565eee-96d4-4d01-b339-ecfbe56cab97"
              className="btn-gold min-h-[52px] text-sm uppercase tracking-wider py-3.5 px-6 rounded-lg text-center transition-all mt-2 flex items-center justify-center"
            >
              PREUZMI MIRAN LET · 19,99 €
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
