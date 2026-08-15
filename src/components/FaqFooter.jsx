import React, { useState } from 'react';

export default function FaqFooter() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Kada slušam audio?',
      a: 'Audio protokol slušaš prije polijetanja, tijekom uspona te u bilo kojem trenutku leta kada osjetiš da napetost raste.'
    },
    {
      q: 'Trebam li internet?',
      a: 'Ne. Nakon što jednom preuzmeš audio i materijale na telefon, sve funkcionira offline u zrakoplovnom načinu rada.'
    },
    {
      q: 'Što dobivam nakon kupnje?',
      a: 'Odmah dobivaš pristup audio protokolu, vođenoj vježbi disanja, digitalnom vodiču od 43 stranice i devet alata za mobitel.'
    },
    {
      q: 'Mogu li sadržaj koristiti na mobitelu?',
      a: 'Da. Datoteke su standardnog MP3 i PDF formata te se jednostavno otvaraju na svim iPhone i Android uređajima.'
    },
    {
      q: 'Kako funkcionira povrat?',
      a: 'Ako nakon leta zaključiš da ti protokol nije pomogao, javi nam se i vraćamo novac u cijelosti, bez pitanja.'
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      {/* FAQ Section */}
      <section id="faq" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 w-full bg-[#F2F8FC]">
        <div className="max-w-[750px] mx-auto">
          
          <div className="text-left sm:text-center mb-8 sm:mb-12">
            <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] text-[#176EA6] mb-2 block">
              ODGOVORI
            </span>
            <h2 className="font-serif text-[30px] sm:text-[36px] md:text-[44px] font-bold text-[#0B1C2E] leading-[1.18]">
              Česta pitanja
            </h2>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-[#E1EAF2] hover:border-[#D4AF37] rounded-xl overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-[#0B1C2E] leading-snug">
                      {faq.q}
                    </span>
                    <div className={`w-7 h-7 rounded-full bg-[#E8F0FA] text-[#0B1C2E] flex items-center justify-center shrink-0 text-base font-bold transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#D4AF37]' : ''}`}>
                      {isOpen ? '−' : '+'}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-[#526579] text-sm sm:text-base leading-relaxed border-t border-[#E1EAF2]/60">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Footer with Navy Aviation Styling */}
      <footer 
        className="text-white/80 py-12 sm:py-16 px-4 sm:px-6 text-xs border-t border-white/10"
        style={{
          background: 'linear-gradient(135deg, #0B1C2E 0%, #123F64 100%)'
        }}
      >
        <div className="max-w-[1120px] mx-auto flex flex-col items-center gap-6 text-center">
          
          {/* Circular ML Logo in Footer */}
          <div className="flex items-center gap-3">
            <img 
              src="/logo-ml.png" 
              alt="Miran Let Logo" 
              className="w-12 h-12 rounded-full border border-[#D4AF37] object-cover shadow-md"
            />
            <div className="flex flex-col text-left">
              <span className="font-serif text-lg font-bold text-white leading-tight">MIRAN LET</span>
              <span className="text-[10px] text-[#D4AF37] font-bold tracking-widest uppercase">Aviation Protocol</span>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-5 text-white/90 font-medium pt-2">
            <a href="/impressum" className="hover:text-[#D4AF37] transition-colors">
              Impressum
            </a>
            <a href="/uvjeti-kupnje" className="hover:text-[#D4AF37] transition-colors">
              Uvjeti kupnje
            </a>
            <a href="/povrat" className="hover:text-[#D4AF37] transition-colors">
              Politika povrata
            </a>
            <a href="/privatnost" className="hover:text-[#D4AF37] transition-colors">
              Politika privatnosti
            </a>
          </div>

          {/* Transparency Notices */}
          <div className="max-w-[680px] space-y-1.5 text-[#E8F0FA]/70 text-[11px] sm:text-xs leading-relaxed">
            <p>
              Prikazi proizvoda su ilustrativni i izrađeni pomoću umjetne inteligencije.
            </p>
            <p>
              Plaćanja i digitalnu isporuku sigurno obrađuje Lemon Squeezy (Merchant of Record).
            </p>
          </div>

          {/* Copyright */}
          <div className="text-[#8C9BA8] text-[11px] pt-4 border-t border-white/10 w-full max-w-[680px]">
            © {new Date().getFullYear()} Miran Let. Sva prava pridržana.
          </div>

        </div>
      </footer>
    </>
  );
}
