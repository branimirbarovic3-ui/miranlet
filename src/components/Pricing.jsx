import React from 'react';

export default function Pricing() {
  const features = [
    'Vođeni audio protokol za let',
    'Vođena vježba disanja',
    'Digitalni vodič od 43 stranice',
    '9 praktičnih alata i kartica za mobitel',
    'Trenutačan pristup i trajna licenca',
    'Korištenje bez interneta u avionu'
  ];

  return (
    <section id="kupnja" className="py-20 md:py-28 px-6 w-full bg-[#F7F5F0]">
      <div className="max-w-[850px] mx-auto text-center">
        
        {/* Section Header */}
        <span className="font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.14em] text-[#4A5A68] mb-3 block">
          JEDNOKRATNA KUPOVINA
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#16232F] mb-4">
          Tvoj komplet za mirniji let
        </h2>
        <p className="font-sans text-base md:text-lg text-[#4A5A68] mb-12">
          Jednom preuzmeš na svoj telefon i sadržaj ostaje tvoj za svaki sljedeći let.
        </p>

        {/* Pricing Offer Card */}
        <div className="bg-white border-2 border-[#C8A84A] rounded-2xl p-8 md:p-12 shadow-lg text-center max-w-[620px] mx-auto mb-8">
          
          <div className="font-serif text-5xl md:text-6xl font-bold text-[#16232F] mb-2">
            19,99 €
          </div>
          
          <div className="text-sm font-medium text-[#4A5A68] mb-1">
            Jednokratno plaćanje · Bez pretplate
          </div>
          <div className="text-xs text-[#4A5A68] mb-8">
            Slušaš u trenutku. Vodič je tu kad te zanima zašto.
          </div>

          <div className="border-t border-b border-[#E4E9EF] py-6 mb-8">
            <ul className="space-y-3.5 text-left max-w-[340px] mx-auto list-none p-0">
              {features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm md:text-base font-semibold text-[#16232F]">
                  <span className="text-[#C8A84A] font-bold text-base shrink-0">✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-xs text-[#4A5A68] mb-6 font-medium">
            Preuzmi prije leta · audio radi bez interneta
          </div>

          <a 
            href="https://miranlet.lemonsqueezy.com/checkout/buy/63565eee-96d4-4d01-b339-ecfbe56cab97"
            className="inline-flex items-center justify-center bg-[#C8A84A] hover:bg-[#B8983A] text-[#16232F] font-bold text-base md:text-lg uppercase tracking-[0.08em] py-5 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-[#C8A84A]/25 hover:-translate-y-0.5 w-full text-center"
          >
            PREUZMI MIRAN LET · 19,99 €
          </a>

          <div className="text-xs text-[#4A5A68] mt-3.5">
            Pristup odmah nakon uplate · Sigurno plaćanje putem Lemon Squeezyja
          </div>

        </div>

        {/* Short Guarantee Block */}
        <div className="max-w-[620px] mx-auto bg-[#EAF4FD] border-2 border-[#C8A84A] rounded-2xl p-6 md:p-8 text-left shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#16232F] text-[#C8A84A] font-bold flex items-center justify-center shrink-0 border border-[#C8A84A]">
              ✓
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#16232F] mb-1">
                Leti s njim
              </h3>
              <p className="text-sm md:text-base text-[#4A5A68] leading-relaxed mb-2">
                Ako nakon leta zaključiš da ti nije pomoglo, javi nam se i novac se vraća u cijelosti. Bez pitanja.
              </p>
              <div className="text-xs text-[#8C9BA8] font-medium">
                Zakonskih 14 dana prava na povrat vrijedi uz to.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
