import React, { useState } from 'react';

export default function OfferPricing() {
  const [showFreeStep, setShowFreeStep] = useState(false);
  const [email, setEmail] = useState('');
  const [emailStatus, setEmailStatus] = useState('idle');

  const features = [
    'Vođeni audio protokol za let',
    'Vođena vježba disanja',
    'Digitalni vodič od 43 stranice',
    '9 praktičnih alata i kartica za mobitel',
    'Trajni pristup i korištenje bez interneta'
  ];

  const handleFreeSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setEmailStatus('loading');
    // STAVKA ZA INTEGRACIJU: Backend email newsletter webhook
    await new Promise((r) => setTimeout(r, 500));
    setEmailStatus('success');
    setEmail('');
  };

  return (
    <section id="ponuda" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 w-full bg-white border-b border-[#E1EAF2]">
      <div className="max-w-[850px] mx-auto text-left sm:text-center">
        
        {/* Section Header */}
        <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] text-[#176EA6] mb-2 block">
          JEDNOKRATNA PONUDA
        </span>
        <h2 className="font-serif text-[30px] sm:text-[38px] md:text-[46px] font-bold text-[#0B1C2E] mb-3 leading-[1.18]">
          Tvoj komplet za mirniji let
        </h2>
        <p className="font-sans text-base sm:text-[18px] text-[#526579] mb-8 sm:mb-12 max-w-[580px] mx-auto">
          Jednom preuzmeš na telefon i sadržaj ostaje tvoj za svaki sljedeći let.
        </p>

        {/* Pricing Card with Navy Header & Gold Divider */}
        <div className="bg-white border-2 border-[#D4AF37] rounded-2xl overflow-hidden shadow-xl max-w-[560px] mx-auto text-left sm:text-center">
          
          {/* Navy Header Banner */}
          <div className="bg-[#0B1C2E] text-white p-6 sm:p-8 text-center border-b border-[#D4AF37]">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37] mb-2">
              DIGITALNI PROTOKOL
            </div>
            <div className="font-serif text-5xl sm:text-6xl font-bold text-white mb-2">
              19,99 €
            </div>
            <div className="text-xs sm:text-sm text-[#E8F0FA]/80">
              Jednokratno plaćanje · Bez pretplate
            </div>
          </div>

          {/* White Card Body */}
          <div className="p-6 sm:p-8 md:p-10">
            <ul className="space-y-3.5 text-left max-w-[360px] mx-auto list-none p-0 mb-8">
              {features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-base sm:text-[17px] font-semibold text-[#0B1C2E]">
                  <span className="text-[#D4AF37] font-bold text-base shrink-0 mt-0.5">✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            {/* CTA #3 (Final CTA on page) */}
            <a 
              href="https://miranlet.lemonsqueezy.com/checkout/buy/63565eee-96d4-4d01-b339-ecfbe56cab97"
              className="btn-gold w-full min-h-[52px] inline-flex items-center justify-center text-base sm:text-lg uppercase tracking-[0.06em] py-4 px-6 rounded-lg text-center"
            >
              PREUZMI MIRAN LET · 19,99 €
            </a>

            <div className="text-xs text-[#526579] mt-3.5 text-center">
              Pristup odmah nakon uplate · Sigurno plaćanje putem Lemon Squeezyja
            </div>
          </div>

        </div>

        {/* Discreet Free Step Link */}
        <div className="mt-8 text-center">
          {!showFreeStep ? (
            <button
              onClick={() => setShowFreeStep(true)}
              className="text-xs sm:text-sm font-semibold text-[#176EA6] hover:text-[#0B1C2E] underline underline-offset-4 focus:outline-none"
            >
              Želiš prvo isprobati jedan korak? Preuzmi besplatnu vježbu disanja
            </button>
          ) : (
            <div className="max-w-[480px] mx-auto p-4 sm:p-5 rounded-xl bg-[#F2F8FC] border border-[#E1EAF2] text-left animate-in fade-in">
              <div className="text-sm font-bold text-[#0B1C2E] mb-1">Besplatna vježba disanja 4-6</div>
              <p className="text-xs text-[#526579] mb-3">Ostavi email i poslat ćemo ti kratku vježbu za mobitel.</p>
              
              {emailStatus === 'success' ? (
                <div className="text-xs font-semibold text-[#176EA6]">Vježba je poslana na tvoj email!</div>
              ) : (
                <form onSubmit={handleFreeSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Tvoja email adresa..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-3 py-2 text-xs rounded-lg border border-[#E1EAF2] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                  />
                  <button type="submit" className="btn-gold text-xs px-3 py-2 rounded-lg shrink-0">
                    {emailStatus === 'loading' ? '...' : 'Pošalji'}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
