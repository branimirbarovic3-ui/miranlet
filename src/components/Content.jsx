import React from 'react';

export default function Content() {
  return (
    <section className="py-16 md:py-36 px-4 md:px-16 w-full bg-[#FAFAF8] relative overflow-hidden text-left">
      <div className="max-w-[1140px] mx-auto relative z-10">
        <div className="bg-[#060A12] p-8 md:p-20 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
          
          <div className="relative z-10">
            <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-[9px] font-bold mb-6 block text-center md:text-left">EKSKLUZIVNI DODACI</span>
            <h3 className="font-serif text-2xl md:text-5xl text-white mb-10 md:mb-14 font-bold leading-tight text-center md:text-left">
              Uz glavni protokol dobivaš i:<br />
              <span className="text-[#D4AF37] italic font-light">Tvoj "šalabahter" za krizne situacije.</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5 md:gap-y-8">
              {[
                'Tehnike za turbulenciju (Brzo gašenje nelagode)',
                'Činjenice koje amigdala napokon prihvaća',
                'Plan izgradnje samopouzdanja za let',
                'Kako odabrati sjedalo (Psihološki mir)',
                'Odgovori na tvoja najgora pitanja o letu'
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center border-b border-white/5 pb-4 md:pb-6 group hover:border-[#D4AF37]/50 transition-colors">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#D4AF37] group-hover:scale-125 transition-transform" />
                  <span className="text-white/80 text-[14px] md:text-[16px] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
