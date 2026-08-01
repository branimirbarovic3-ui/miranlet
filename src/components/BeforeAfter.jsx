import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, X, Check } from 'lucide-react';

export default function BeforeAfter() {
  return (
    <section className="py-16 md:py-36 px-4 md:px-16 w-full bg-[#FAFAF8] relative overflow-hidden">
      {/* Background accents - subtle gold shadow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full -mr-48 -mt-48 blur-3xl opacity-30" />

      <div className="max-w-[1140px] mx-auto relative z-10 text-center">
        <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-[9px] font-bold mb-6 block">PROMJENA JE STVARNA</span>
        <h2 className="font-serif text-3xl md:text-5xl text-[#060A12] mb-12 md:mb-16 font-bold leading-tight tracking-tight">
          Što ćeš primijetiti već<br />
          <span className="text-[#D4AF37] italic underline decoration-1 underline-offset-8 font-light italic">nakon prvog leta.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
          
          {/* POSLIJE - Now on the left */}
          <div className="bg-white p-8 md:p-16 text-left relative group order-1">
             <div className="absolute inset-0 bg-[#D4AF37]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
             
            <h4 className="flex items-center gap-3 text-[#D4AF37] font-bold uppercase tracking-widest text-[11px] mb-8 md:mb-12 relative z-10">
              <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20">
                <Check className="w-4 h-4" strokeWidth={3} />
              </div>
              POSLIJE PROTOKOLA
            </h4>
            <ul className="space-y-6 md:space-y-8 relative z-10">
              {[
                { title: 'Tijelo se smiri u minuti', desc: 'Reguliraš živčani sustav čim nelagoda postane jaka. Srce napokon uspori.' },
                { title: 'Znaš što se događa', desc: 'Slušaš miran glas koji ti objašnjava svaku turbulenciju i šum.' },
                { title: 'Sjedenje bez nelagode', desc: 'Možeš gledati film, razgovarati ili napokon pogledati kroz prozor.' }
              ].map((item, i) => (
                <li key={i} className="flex flex-col gap-1.5">
                  <span className="text-[#060A12] text-lg md:text-xl font-bold underline decoration-[#D4AF37]/30 decoration-1 underline-offset-4">{item.title}</span>
                  <span className="text-[#060A12]/70 text-[15px] leading-relaxed">{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* PRIJE - Now on the right */}
          <div className="bg-[#FAFAF8] p-8 md:p-16 text-left group order-2 border-t md:border-t-0 md:border-l border-gray-100">
            <h4 className="flex items-center gap-3 text-[#060A12]/40 font-bold uppercase tracking-widest text-[11px] mb-8 md:mb-12">
              <div className="w-8 h-8 rounded-full bg-gray-200/30 flex items-center justify-center border border-gray-200/50">
                <X className="w-4 h-4 text-[#060A12]/30" />
              </div>
              PRIJE PROTOKOLA
            </h4>
            <ul className="space-y-6 md:space-y-8">
              {[
                { title: 'Lupanje srca', desc: 'Srce ubrzava čim stupiš na aerodrom ili sjedneš u sjedalo.' },
                { title: 'Praćenje zvukova', desc: 'Svaki trzaj stjuardese ili zvuk motora te izbacuje iz takta.' },
                { title: 'Cjelodnevna napetost', desc: 'Napetost cijelo vrijeme leta, bez sekunde opuštanja.' }
              ].map((item, i) => (
                <li key={i} className="flex flex-col gap-1.5">
                  <span className="text-[#060A12]/60 text-lg md:text-xl font-bold">{item.title}</span>
                  <span className="text-[#060A12]/30 text-[15px] leading-relaxed">{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-12 md:mt-20 flex flex-col items-center">
            <a 
              href="https://miranlet.lemonsqueezy.com/checkout/buy/63565eee-96d4-4d01-b339-ecfbe56cab97" 
              className="group inline-flex items-center justify-center bg-[#060A12] text-white font-bold uppercase tracking-[0.1em] py-6 px-12 md:px-20 rounded-xl transition-all duration-500 hover:bg-[#D4AF37] hover:-translate-y-1 shadow-2xl text-[14px]"
            >
              PREUZMI MIRAN LET · 19.99€
            </a>
            <p className="mt-6 text-[#060A12]/30 text-[10px] uppercase font-bold tracking-widest text-center">
                Preuzmi protokol i vodič odmah nakon uplate
            </p>
        </div>
      </div>
    </section>
  );
}
