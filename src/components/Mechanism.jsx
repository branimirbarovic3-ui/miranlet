import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Zap, ShieldCheck, Brain, Plane, Users, UserCheck, UserCircle } from 'lucide-react';

export default function Mechanism() {
  const steps = [
    {
      title: "Smiruješ tijelo",
      desc: "Ne pokušavaš na silu smiriti sebe. Prvo spustaš fizičku napetost kroz disanje, ritam i vođeni fokus.",
      icon: Wind
    },
    {
      title: "Prekidaš spiralu misli",
      desc: "Kad krene \"\u0161to ako...\", protokol ti daje sljedeći konkretan korak umjesto da ostaneš zarobljen u vlastitim mislima.",
      icon: Zap
    },
    {
      title: "Vraćaš kontrolu",
      desc: "Dobivaš jednostavnu rutinu koju pratiš prije polijetanja, tokom leta i kad osjetiš da napetost raste.",
      icon: ShieldCheck
    }
  ];

  const pillars = [
    {
      tag: "Biologija",
      title: "Smiruješ tijelo u samom trenutku",
      desc: "Prvo radiš s tijelom, ne logikom. Nema čekanja da te netko 'uvjeri' da je sve u redu.",
      icon: Brain
    },
    {
      tag: "Logika",
      title: "Imaš jasan i fiksan plan koraka",
      desc: "Ne moraš improvizirati u avionu. Samo pratiš protokol i jasan plan korak po korak.",
      icon: Plane
    },
    {
      tag: "Praksa",
      title: "Koristiš posve nevidljive alate",
      desc: "Kratke mentalne upute i disanje. Radiš ih na sjedalu, bez da itko išta primijeti.",
      icon: UserCheck
    },
    {
      tag: "Rezultat",
      title: "Testirano u stvarnim letovima",
      desc: "Sada te ništa ne može iznenaditi: od ukrcaja i polijetanja do turbulencije i rasta napetosti.",
      icon: UserCircle
    }
  ];

  return (
    <>
    <section className="py-24 md:py-36 px-6 lg:px-16 w-full bg-[#060A12] text-white overflow-hidden">
      <div className="max-w-[1140px] mx-auto text-center">
        
        {/* HOW IT WORKS PART */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="mb-16 md:mb-24"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-black mb-4 block">KRAĆI PUT DO MIRA</span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            Kako točno<br /><span className="text-gold italic font-light">funkcionira protokol</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto italic">
            Ne moraš razmišljati što trebaš napraviti. Imaš jasan slijed koji te vodi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center lg:text-left mb-20 md:mb-32">
          {steps.map((step, i) => (
            <motion.div
              key={`step-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-10 rounded-[40px] relative group hover:bg-white/[0.08] transition-all duration-500 flex flex-col items-center lg:items-start"
            >
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <step.icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-white">
                {step.title}
              </h3>
              
              <p className="text-white/50 text-sm md:text-base leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* SREDNJA SEKCIJA - ŠTO DOBIVAŠ */}
    <section 
      className="py-20 md:py-32 px-4 md:px-16 w-full relative overflow-hidden border-y border-gray-100/50 shadow-inner bg-[#FAFAF8]"
    >
      <div className="max-w-[1140px] mx-auto relative z-10 text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#060A12] mb-12 md:mb-16 font-bold leading-[1.1] tracking-tight">
          Tvoj komplet za mirniji let
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 md:mb-20">
          {[
            { 
              title: "📖 PDF vodič", 
              text: "Razumiješ što se događa u tijelu kad krene strah i kako se pripremiti prije nego sjedneš u avion." 
            },
            { 
              title: "🎧 Audio protokol", 
              text: "Vođeno slušanje koje pratiš u avionu kad osjetiš napetost, ubrzane misli ili potrebu da se smiriš." 
            },
            { 
              title: "🫁 Vježbe disanja", 
              text: "Kratke tehnike koje možeš koristiti na sjedalu, bez da itko oko tebe primijeti." 
            }
          ].map((card, idx) => (
            <div key={idx} className="bg-white p-8 md:p-10 rounded-[32px] shadow-xl border border-gray-100 text-center lg:text-left transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center lg:items-start">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-5 text-[#060A12] leading-tight">
                {card.title}
              </h3>
              <p className="text-[#060A12]/60 text-base md:text-lg leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <p className="text-[#060A12]/40 text-sm md:text-lg font-bold tracking-tight mb-8">
            Dobivaš odmah nakon kupnje. Koristiš na mobitelu, prije i tokom leta.
          </p>

          <div className="mb-10 flex flex-col items-center">
            <span className="text-[#060A12] text-5xl md:text-6xl font-serif font-bold tracking-tighter">
              47€
            </span>
            <span className="text-gold text-[10px] font-black tracking-[0.2em] uppercase mt-2">jednokratna uplata</span>
          </div>
          
          <a href="#kupi" className="group inline-flex items-center justify-center bg-[#D4AF37] text-white font-bold uppercase tracking-[0.08em] py-5 px-10 md:px-14 rounded-xl transition-all duration-500 shadow-lg shadow-gold/25 hover:shadow-2xl hover:shadow-gold/40 hover:bg-[#c5a133] hover:-translate-y-1 text-[14px] md:text-base">
            <span>Želim mirniji let</span>
          </a>
        </div>
      </div>
    </section>

    {/* NASTAVAK - METODOLOGIJA */}
    <section className="py-24 md:py-36 px-6 lg:px-16 w-full bg-[#060A12] text-white overflow-hidden">
      <div className="max-w-[1140px] mx-auto text-center">

        {/* METHODOLOGY PART */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="mb-12 md:mb-16"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-black mb-4 block">ZAŠTO POMAŽE</span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
            Zašto ovaj pristup <span className="text-gold italic font-light">stvarno pomaže</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-center mb-16 md:mb-20 items-stretch">
          {pillars.map((pillar, i) => (
            <motion.div
              key={`pillar-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[40px] relative group hover:bg-white/[0.08] transition-all duration-500 flex flex-col items-center h-full"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500 shrink-0">
                <pillar.icon className="w-7 h-7 md:w-8 md:h-8 text-gold" strokeWidth={1.5} />
              </div>
              
              <span className="text-gold text-[10px] font-black tracking-[0.25em] uppercase mb-4 leading-none">
                {pillar.tag}
              </span>
              
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-white leading-tight">
                {pillar.title}
              </h3>
              
              <p className="text-white/50 text-sm md:text-base leading-relaxed mt-auto">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ delay: 0.4 }}
           viewport={{ once: true }}
           className="mt-8 md:mt-16 p-8 md:p-12 bg-gold/5 rounded-[40px] border border-gold/20 inline-block"
        >
          <p className="text-gold text-lg md:text-2xl font-bold italic leading-relaxed text-center">
            Zato djeluje i kada ti obični savjeti već ne pomažu.
          </p>
        </motion.div>

      </div>
    </section>
    </>
  );
}
