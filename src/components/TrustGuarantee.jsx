import React from 'react';

export default function TrustGuarantee() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 w-full bg-[#F5F5F2] border-b border-[#E1EAF2]">
      <div className="max-w-[850px] mx-auto">
        <div className="bg-white border-t-4 border-t-[#D4AF37] border-x border-b border-[#E1EAF2] rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm text-left">
          
          <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] text-[#176EA6] mb-2 block">
            POVJERENJE I NASTANAK
          </span>

          <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[40px] font-bold text-[#0B1C2E] mb-4 leading-snug">
            Zašto je nastao Miran Let
          </h2>

          <p className="font-sans text-base sm:text-[18px] text-[#0B1C2E]/90 leading-[1.65] mb-6">
            Napravio sam Miran Let jer mi još jedno uvjeravanje da je let siguran nije pomagalo. Trebao mi je jasan slijed koji mogu pratiti kad tijelo i misli krenu svojim putem. Od toga je nastao ovaj audio, jednostavan alat koji ide sa mnom na svaki let.
          </p>

          <div className="pt-4 border-t border-[#E1EAF2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0B1C2E] text-[#D4AF37] font-serif font-bold text-base flex items-center justify-center border border-[#D4AF37] shrink-0">
                BB
              </div>
              <div>
                <div className="font-serif text-base font-bold text-[#0B1C2E]">Brane Barović</div>
                <div className="text-xs text-[#526579]">Autor Protokola Miran Let</div>
              </div>
            </div>

            <div className="text-xs text-[#526579] sm:text-right max-w-[340px] leading-relaxed">
              Bez izmišljenih iskustava kupaca. Kupnju pokrivaju stvarni uvjeti povrata (100% povrat ako nakon leta zaključiš da nije pomoglo).
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
