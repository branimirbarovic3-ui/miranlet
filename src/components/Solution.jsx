import React from 'react';
import { motion } from 'framer-motion';

export default function Solution() {
  return (
    <section className="py-16 md:py-36 px-4 md:px-16 w-full bg-white">
      <div className="max-w-[1140px] mx-auto">

        {/* Heading - Focused directly on the fix */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#D4AF37] uppercase tracking-[0.25em] text-[10px] font-bold mb-5 block">ZAŠTO LOGIKA NE POMAŽE</span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#060A12] mb-8 font-bold leading-[1.15]">
            Znanje je dobro,<br /><span className="italic text-[#D4AF37]">ali tvoje tijelo ne sluša.</span>
          </h2>
          <p className="text-[#060A12]/55 text-base md:text-[18px] leading-relaxed">
            Statistike su beskorisne kad srce počne lupati na 10.000 metara. Problem nije u nedostatku znanja, već u tome što tijelo ne reagira na logiku u kriznim momentima.
          </p>
        </div>

        {/* Action card - The main thing remains */}
        <div className="bg-[#FAFAF8] p-8 md:p-14 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm text-center max-w-3xl mx-auto">
          <p className="text-[#060A12]/75 leading-relaxed text-lg md:text-xl">
            <strong className="text-[#D4AF37] font-bold uppercase tracking-wider text-sm mb-4 block underline decoration-1 underline-offset-4">TREBA TI ALAT, NE JOŠ INFORMACIJA.</strong>
            <span className="text-2xl md:text-4xl font-serif text-[#060A12] block mb-6">Protokol koji "gasi" paniku u trenu.</span>
            Ovo je konkretan sistem koji služi kao oslonac <span className="font-bold underline italic text-[#D4AF37]">dok se stvari događaju</span>. Prekini najgore scenarije koje tvoj mozak vrti pri svakom zvuku ili turbulenciji.
          </p>
        </div>

      </div>
    </section>
  );
}
