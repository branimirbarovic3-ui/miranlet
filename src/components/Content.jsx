import React from 'react';

export default function Content() {
  return (
    <section id="kupnja" className="py-20 md:py-28 px-6 text-center bg-[#EAF4FD]">
      <div className="max-w-[1100px] mx-auto">
        <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-[#4A5A68] mb-4 block">
          KOMPLETAN PAKET
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-8 text-[#16232F]">
          Tvoj komplet za mirniji let
        </h2>

        {/* Bundle Mockup */}
        <div className="max-w-[540px] mx-auto my-6 border-2 border-[#C8A84A] bg-white p-3 rounded-xl shadow-sm">
          <img src="/bundle.png" alt="Miran Let Bundle Digital Mockup" className="w-full h-auto block rounded-lg" />
        </div>

        {/* 4. SIDRO - Relocated Outside and Above Offer Card (14px --ink-soft) */}
        <p className="text-[14px] text-[#4A5A68] max-w-[580px] mx-auto text-center mt-6 mb-4">
          Seminari protiv straha od letenja koštaju 300–500 €. Jedan sat kod terapeuta 40–60 €.
        </p>

        {/* Restructured Offer Card */}
        <div className="max-w-[650px] mx-auto bg-white border-2 border-[#C8A84A] rounded-2xl p-8 md:p-12 text-center shadow-sm">
          <div className="font-sans text-[44px] font-semibold text-[#16232F] leading-none mb-2">
            19,99 €
          </div>

          <p className="text-[15px] text-[#4A5A68] mb-1 text-center">
            Jednokratno plaćanje. Bez pretplate.
          </p>

          <p className="text-[15px] text-[#4A5A68] mb-7 text-center">
            Slušaš u trenutku. Vodič je tu kad te zanima zašto.
          </p>

          {/* 1. POPIS & 2. NEW ORDER */}
          <ul className="text-left max-w-[320px] mx-auto mb-6 space-y-[14px] p-0 list-none">
            {[
              'Audio protokol za let',
              'Vođena vježba disanja',
              'Digitalni vodič, 43 stranice',
              '9 alata i kartica za mobitel',
              'Trenutačan pristup, doživotna licenca'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 font-semibold text-[#16232F] text-base leading-snug">
                <span className="text-[#C8A84A] font-bold text-base leading-snug shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-[13px] text-[#4A5A68] mb-8 text-center font-medium">
            Skini prije leta · audio radi bez interneta.
          </p>

          <a 
            href="https://miranlet.lemonsqueezy.com/checkout/buy/63565eee-96d4-4d01-b339-ecfbe56cab97" 
            className="inline-flex items-center justify-center bg-[#C8A84A] hover:bg-[#B8983A] text-[#16232F] font-bold text-base md:text-lg uppercase tracking-[0.08em] py-5 px-8 rounded-xl transition-all duration-300 shadow-md shadow-[#C8A84A]/25 hover:-translate-y-0.5 w-full"
          >
            PREUZMI MIRAN LET · 19,99 €
          </a>
        </div>

        {/* 3. STANDALONE GUARANTEE CARD */}
        <div className="max-w-[650px] mx-auto mt-8 bg-white border-2 border-[#C8A84A] rounded-2xl p-8 text-left shadow-sm">
          <h3 className="font-serif text-2xl font-semibold text-[#16232F] mb-2">
            Leti s njim
          </h3>
          <p className="text-[#16232F] text-base md:text-lg font-medium mb-2 leading-relaxed">
            Ako nakon leta kažeš da nije pomoglo, novac se vraća. Bez pitanja.
          </p>
          <p className="text-[#4A5A68] text-sm">
            Zakonskih 14 dana vrijedi uz to.
          </p>
        </div>
      </div>
    </section>
  );
}
