import React from 'react';

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 px-6 text-center bg-gradient-to-b from-[#A8D4F7] to-[#F7F5F0]">
      <div className="max-w-[800px] mx-auto flex flex-col items-center">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#16232F] mb-4">
          Sljedeći let ne mora biti isti.
        </h2>
        <p className="font-sans text-lg text-[#4A5A68] mb-8">
          Dovoljno je da imaš plan za trenutke kada se strah pojavi.
        </p>
        <a 
          href="https://miranlet.lemonsqueezy.com/checkout/buy/63565eee-96d4-4d01-b339-ecfbe56cab97" 
          className="inline-flex items-center justify-center bg-[#C8A84A] hover:bg-[#B8983A] text-[#16232F] font-bold text-lg uppercase tracking-[0.08em] py-5 px-10 md:px-12 rounded-xl transition-all duration-300 shadow-lg shadow-[#C8A84A]/25 hover:-translate-y-0.5 w-full sm:w-auto"
        >
          PREUZMI MIRAN LET · 19,99 €
        </a>
      </div>
    </section>
  );
}
