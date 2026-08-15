import React from 'react';

export default function AuthorTrust() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 w-full bg-[#EAF4FD]">
      <div className="max-w-[850px] mx-auto">
        <div className="bg-white border-2 border-[#C8A84A] rounded-2xl p-6 sm:p-8 md:p-12 shadow-md text-left">
          
          <span className="font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.14em] text-[#4A5A68] mb-2.5 block">
            RIJEČ AUTORA
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#16232F] mb-4 sm:mb-6 leading-snug">
            Zašto je nastao Miran Let
          </h2>

          <div className="space-y-4 text-base md:text-lg text-[#4A5A68] leading-relaxed mb-6 sm:mb-8">
            <p>
              Napravio sam Miran Let jer mi još jedno uvjeravanje da je let siguran nije pomagalo. Trebao mi je jasan slijed koji mogu pratiti kad tijelo i misli krenu svojim putem. Od toga je nastao ovaj audio, jednostavan alat koji ide sa mnom na svaki let.
            </p>
          </div>

          <div className="pt-5 border-t border-[#E4E9EF] flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#16232F] border-2 border-[#C8A84A] flex items-center justify-center text-[#C8A84A] font-serif font-bold text-lg shrink-0">
              BB
            </div>
            <div>
              <div className="font-serif text-lg font-bold text-[#16232F]">Brane Barović</div>
              <div className="text-xs sm:text-sm text-[#4A5A68] font-medium">Autor Protokola Miran Let</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
