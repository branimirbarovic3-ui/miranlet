import React from 'react';

export default function Content() {
  return (
    <section id="kupnja" className="py-20 md:py-28 px-6 w-full bg-[#EAF4FD]">
      <div className="max-w-[1100px] mx-auto text-center">
        <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-[#4A5A68] mb-4 block">
          KOMPLETAN PAKET
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-6 text-[#16232F]">
          Tvoj komplet za mirniji let
        </h2>

        {/* Bundle Mockup */}
        <div className="max-w-[540px] mx-auto my-8 border border-[#E4E9EF] bg-white p-3 rounded-xl shadow-sm">
          <img src="/bundle.png" alt="Miran Let Bundle Digital Mockup" className="w-full h-auto block rounded-lg" />
        </div>

        {/* Restructured Offer Card */}
        <div className="max-w-[650px] mx-auto bg-white border border-[#E4E9EF] rounded-2xl p-8 md:p-12 text-center shadow-sm">
          <p className="text-sm text-[#4A5A68] mb-5 text-center">
            Seminari protiv straha od letenja koštaju 300–500 €. Jedan sat kod terapeuta 40–60 €.
          </p>

          <div className="font-sans text-[44px] font-semibold text-[#16232F] leading-none mb-2">
            19,99 €
          </div>

          <p className="text-[15px] text-[#4A5A68] mb-8 text-center">
            Jednokratno plaćanje. Bez pretplate.
          </p>

          <ul className="text-left max-w-[440px] mx-auto mb-8 space-y-4">
            {[
              'PDF vodič (43 stranice)',
              '9 bonus materijala: kartice, planovi, rječnik i audio protokol',
              'Trenutačan pristup nakon uplate',
              'Trajna, doživotna licenca'
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 items-center font-semibold text-[#16232F] text-base md:text-lg">
                <span className="text-[#16232F] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a 
            href="https://miranlet.lemonsqueezy.com/checkout/buy/63565eee-96d4-4d01-b339-ecfbe56cab97" 
            className="inline-flex items-center justify-center bg-[#C8A84A] hover:bg-[#B8983A] text-[#16232F] font-bold text-base md:text-lg uppercase tracking-[0.08em] py-5 px-8 rounded-xl transition-all duration-300 shadow-md shadow-[#C8A84A]/25 hover:-translate-y-0.5 w-full"
          >
            PREUZMI MIRAN LET · 19,99 €
          </a>
        </div>

        {/* Standalone Guarantee Card */}
        <div className="max-w-[650px] mx-auto mt-8 bg-white border border-[#E4E9EF] rounded-2xl p-8 text-left shadow-sm">
          <h3 className="font-serif text-2xl font-semibold text-[#16232F] mb-3">
            Leti s njim
          </h3>
          <p className="text-base text-[#16232F] font-medium mb-2">
            Leti s njim. Ako nakon leta kažeš da nije pomoglo, novac se vraća, bez pitanja.
          </p>
          <p className="text-sm text-[#4A5A68]">
            Zakonskih 14 dana vrijedi uz to.
          </p>
        </div>
      </div>
    </section>
  );
}
