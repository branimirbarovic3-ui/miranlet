import React, { useState, useEffect } from 'react';
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('miranlet_auth') === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'brano1957') {
      localStorage.setItem('miranlet_auth', 'true');
      setIsAuthenticated(true);
    } else {
      setError(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#060A12] flex items-center justify-center p-4 selection:bg-[#D4AF37]/20">
        <form onSubmit={handleLogin} className="bg-white/5 p-8 rounded-3xl border border-white/10 max-w-sm w-full text-center shadow-2xl backdrop-blur-md">
          <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-6">
            <span className="text-[#D4AF37] text-2xl">🔒</span>
          </div>
          <h2 className="text-2xl font-serif text-white font-bold mb-2 tracking-tight">Privatan pristup</h2>
          <p className="text-white/40 text-sm mb-8 font-light">Unesite lozinku za pregled stranice.</p>
          
          <input 
            type="password" 
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false); }}
            placeholder="Lozinka" 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all text-center tracking-widest mb-4"
            autoFocus
          />
          
          {error && <p className="text-red-400 text-xs mb-4 font-bold">Neispravna lozinka. Pokušajte ponovno.</p>}
          
          <button type="submit" className="w-full bg-[#D4AF37] hover:bg-[#c5a133] text-white font-bold uppercase tracking-widest py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/20">
            Otključaj
          </button>
        </form>
      </div>
    );
  }

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
