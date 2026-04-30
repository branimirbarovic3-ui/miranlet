import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Zap, ShieldCheck, Brain, Plane, Users, UserCheck } from 'lucide-react';

export default function Mechanism() {
  const steps = [
    {
      title: "1. Smiriš tijelo",
      desc: "Prva minuta je kritična. Specifična tehnika disanja signalizira mozgu da opasnosti nema. Srce usporava odmah.",
      icon: Wind
    },
    {
      title: "2. Prekineš spiralu misli",
      desc: "Uključuješ audio protokol koji te 'vadi' iz crnih scenarija. Više ne nagađaš što je taj zvuk – znaš.",
      icon: Zap
    },
    {
      title: "3. Vratiš kontrolu",
      desc: "Iz stanja jake nelagode prelaziš u stanje promatrača. Ti kontroliraš svoju reakciju, umjesto da ona kontrolira tebe.",
      icon: ShieldCheck
    }
  ];

  const pillars = [
    {
      title: "Smiruje reakciju tijela u stvarnom trenutku",
      desc: "(ne samo \"razmišljanje pozitivno\")",
      icon: Brain,
      tag: "BIOLOGIJA"
    },
    {
      title: "Daje ti realan osjećaj sigurnosti",
      desc: "Umjesto nagađanja što se događa. Imaš točne podatke o letu.",
      icon: Plane,
      tag: "LOGIKA"
    },
    {
      title: "Temeljeno na stvarnim situacijama",
      desc: "Razvijeno u suradnji s pilotima i osobljem za realne uvjete leta.",
      icon: Users,
      tag: "PRAKSA"
    },
    {
      title: "Testirano s osobama poput tebe",
      desc: "Pristupi provjereni s ljudima koji su imali isti problem kao ti.",
      icon: UserCheck,
      tag: "REZULTAT"
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
            Ne razmišljaš što trebaš napraviti. Imaš jasan slijed koji te vodi kroz najteže trenutke.
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
              title: "📖 Vodič", 
              text: "Pročitaj prije leta kako bi točno razumio što se događa s avionom i tvojim tijelom." 
            },
            { 
              title: "🎧 Audio protokol", 
              text: "Slušaj večer prije za miran san ili direktno u avionu čim sjedneš u sjedalo." 
            },
            { 
              title: "🫁 Vježbe disanja", 
              text: "Tvoj SOS alat u trenutku turbulencije ili polijetanja koji smiruje srce u 60 sekundi." 
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
          <p className="text-[#060A12]/40 text-sm md:text-lg font-bold tracking-tight mb-10">
            Sve ovo dobivaš za <span className="text-[#060A12]">47€</span> · Bez pretplate · Pristup odmah
          </p>
          
          <a href="#kupi" className="group inline-flex items-center justify-center bg-[#D4AF37] text-white font-bold uppercase tracking-[0.08em] py-5 px-10 md:px-14 rounded-xl transition-all duration-500 shadow-lg shadow-gold/25 hover:shadow-2xl hover:shadow-gold/40 hover:bg-[#c5a133] hover:-translate-y-1 text-[14px] md:text-base">
            <span>Želim miran let</span>
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
          <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-black mb-4 block">TEMELJ METODE</span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
            Zašto ovaj protokol <span className="text-gold italic font-light">stvarno djeluje</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center mb-16 md:mb-20">
          {pillars.map((pillar, i) => (
            <motion.div
              key={`pillar-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-10 rounded-[40px] relative group hover:bg-white/[0.08] transition-all duration-500 flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <pillar.icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
              </div>
              
              <span className="text-gold text-[10px] font-black tracking-[0.25em] uppercase mb-4 leading-none">
                {pillar.tag}
              </span>
              
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-white">
                {pillar.title}
              </h3>
              
              <p className="text-white/50 text-sm md:text-base leading-relaxed">
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
            Zato djeluje i kad je osjećaj već jak. Ne samo prije leta.
          </p>
        </motion.div>

      </div>
    </section>
    </>
  );
}
