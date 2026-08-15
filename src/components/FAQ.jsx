import React, { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Je li cijeli sadržaj na hrvatskom?',
      a: 'Da. Kompletan audio protokol, vođena vježba disanja, digitalni vodič od 43 stranice i svi alati napisani su i snimljeni na hrvatskom jeziku.'
    },
    {
      q: 'Kada trebam slušati audio?',
      a: 'Audio protokol slušaš prije polijetanja, tijekom uspona te u bilo kojem trenutku leta kada osjetiš da napetost raste.'
    },
    {
      q: 'Trebam li internet tijekom leta?',
      a: 'Ne. Nakon što jednom preuzmeš audio i materijale na telefon, sve radi u zrakoplovnom načinu rada (Airplane mode) bez internetske veze.'
    },
    {
      q: 'Mogu li sadržaj koristiti na mobitelu?',
      a: 'Da. Datoteke su standardnog formata (MP3 i PDF) i rade na svim pametnim telefonima (iPhone i Android) te na računalima bez instalacije posebnih aplikacija.'
    },
    {
      q: 'Kako dobivam pristup nakon kupnje?',
      a: 'Odmah nakon završene uplate dobivaš link za preuzimanje, a potvrda s trajnim pristupom automatski stiže i na tvoj email.'
    },
    {
      q: 'Što je uključeno u cijenu od 19,99 EUR?',
      a: 'U cijenu od 19,99 EUR uključen je vođeni audio protokol, vođena vježba disanja, digitalni vodič od 43 stranice, 9 alata i kartica za mobitel te trajni pristup bez dodatnih pretplata.'
    },
    {
      q: 'Kako funkcionira povrat novca?',
      a: 'Ako nakon leta zaključiš da ti protokol nije pomogao, javi se na naš email podrške i vraćamo novac u cijelosti, bez pitanja. Zakonskih 14 dana prava na povrat vrijedi uz to.'
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 w-full bg-[#F7F5F0]">
      <div className="max-w-[850px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.14em] text-[#4A5A68] mb-2.5 block">
            ODGOVORI NA PITANJA
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#16232F]">
            Česta pitanja
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5 sm:space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white border-2 border-[#C8A84A] rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 focus:outline-none focus:ring-2 focus:ring-[#C8A84A]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg md:text-xl font-bold text-[#16232F] leading-snug">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#EAF4FD] text-[#16232F] flex items-center justify-center shrink-0 text-lg font-bold transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#C8A84A]' : ''}`}>
                    {isOpen ? '−' : '+'}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 pt-1 text-[#4A5A68] text-base leading-relaxed border-t border-[#E4E9EF]/60">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
