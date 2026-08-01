import React from 'react';

export default function HonestNotice() {
  return (
    <section className="py-16 md:py-24 px-6 w-full bg-white text-center">
      <div className="max-w-[760px] mx-auto">
        <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-4 text-[#16232F]">
          Ovo je nov proizvod
        </h3>
        <p className="text-[#4A5A68] text-base md:text-lg leading-relaxed mx-auto max-w-[65ch]">
          Nema stotine recenzija i neće ih biti dok ih ljudi stvarno ne napišu, izmišljati ih nećemo. Zato jamstvo stoji onako kako piše: leti s njim, i ako kažeš da nije pomoglo, novac se vraća.
        </p>
      </div>
    </section>
  );
}
