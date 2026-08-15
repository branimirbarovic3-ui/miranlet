import React from 'react';

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 px-6 text-center bg-[#16232F] text-white border-t border-[#C8A84A]/30">
      <div className="max-w-[800px] mx-auto flex flex-col items-center">
        
        <span className="font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.14em] text-[#C8A84A] mb-3 block">
          SPREMAN ZA SLJEDEĆI LET
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mb-5 leading-tight">
          Na sljedeći let ponesi plan, ne još jedno uvjeravanje.
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-[#E4E9EF] mb-10 max-w-[600px] leading-relaxed">
          Preuzmi audio, spremi ga na telefon i prati ga onda kada ti je najpotrebniji.
        </p>

        <a 
          href="https://miranlet.lemonsqueezy.com/checkout/buy/63565eee-96d4-4d01-b339-ecfbe56cab97"
          className="inline-flex items-center justify-center bg-[#C8A84A] hover:bg-[#B8983A] text-[#16232F] font-bold text-base md:text-lg uppercase tracking-[0.08em] py-5 px-10 md:px-12 rounded-xl transition-all duration-300 shadow-xl shadow-[#C8A84A]/30 hover:-translate-y-0.5 w-full sm:w-auto text-center"
        >
          PREUZMI MIRAN LET · 19,99 €
        </a>

        <div className="text-xs md:text-sm text-[#8C9BA8] mt-4 font-medium">
          Jednokratno plaćanje · Trajni pristup · Dostupno odmah
        </div>

      </div>
    </section>
  );
}
