import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function WhoItIsFor() {
  return (
    <section className="py-28 md:py-36 w-full bg-[#060A12] relative overflow-hidden text-left">
      <div className="absolute inset-0 bg-gradient-to-br from-[#060A12] via-[#060A12] to-[#0d1f3c]" />
      <div className="relative z-10 max-w-[1140px] mx-auto px-6 lg:px-16 w-full">
        <div className="max-w-xl">
          <span className="text-[#D4AF37] uppercase tracking-[0.25em] text-[10px] font-bold mb-5 block">ZA KOGA JE OVO</span>
          <h2 className="font-serif text-4xl md:text-[2.8rem] text-white mb-12 font-bold leading-[1.15]">
            Za putnike koji znaju da problem nije u informacijama.
          </h2>
          <ul className="space-y-5">
            {[
              'Izbjegavaš letove ili ih prihvaćaš s tjednima straha unaprijed.',
              'Za putnike koji znaju da nije problem u dalekim destinacijama.',
              'Čest si putnik, ali svaki let prolazi u napetosti - i to je dovoljno loše.',
              'Rekli su ti "samo se opusti" - znao si da to ne pomaže.',
              'Nisi siguran imaš li strah ili samo nelagodu - Miran Let je za oboje.',
              'Želiš alate koji rade u trenutku panike, ne samo dok čitaš.'
            ].map((item, idx) => (
              <li key={idx} className="flex gap-4 items-start text-white/70 text-[16px] font-light leading-relaxed">
                <ArrowRight className="w-5 h-5 text-[#D4AF37]/80 shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
