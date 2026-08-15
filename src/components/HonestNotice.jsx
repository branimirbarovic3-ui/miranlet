import React from 'react';

export default function HonestNotice() {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 w-full bg-[#F7F5F0]">
      <div className="max-w-[780px] mx-auto">
        <div className="bg-white border-2 border-[#C8A84A] rounded-2xl p-5 sm:p-7 md:p-8 text-center shadow-sm">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-[#C8A84A] mb-2 block">
            TRANSPARENTNOST
          </span>
          <p className="font-sans text-base text-[#4A5A68] leading-relaxed">
            Miran Let je nov proizvod. Ne koristimo izmišljena iskustva kupaca. Zato možeš poslušati isječak, vidjeti što dobivaš i odlučiti na temelju samog proizvoda.
          </p>
        </div>
      </div>
    </section>
  );
}
