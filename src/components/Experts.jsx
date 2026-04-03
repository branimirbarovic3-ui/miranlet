import React from 'react';
import { Brain, Plane, Users, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Experts() {
  const pillars = [
    {
      title: "Kognitivne tehnike (CBT & ACT)",
      desc: "Klinički validirane metode koje se koriste za specifične fobije i anksioznost. Primijenjene na situacije tijekom leta.",
      icon: Brain,
      tag: "ZNANOST"
    },
    {
      title: "Stvarna avijacijska sigurnost",
      desc: "Temeljeno na podacima industrije (IATA, Aviation Safety Network) koji jasno pokazuju realnu razinu sigurnosti.",
      icon: Plane,
      tag: "PODACI"
    },
    {
      title: "Iskustva iz kabine i kokpita",
      desc: "Uvidi osoblja i pilota koji se svakodnevno susreću s putnicima koji osjećaju strah tijekom leta.",
      icon: Users,
      tag: "PRAKSA"
    },
    {
      title: "Terenska psihološka praksa",
      desc: "Pristupi razvijeni kroz rad s osobama koje imaju strah od letenja. Fokus na ono što djeluje u stvarnoj situaciji.",
      icon: UserCheck,
      tag: "REZULTAT"
    }
  ];

  return (
    <section className="py-24 px-4 md:px-16 w-full bg-[#FAFAF8] text-[#060A12] overflow-hidden text-center">
      <div className="max-w-[1240px] mx-auto relative z-10">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="mb-16 md:mb-20"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-black mb-4 block">METODOLOGIJA</span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold font-bold mb-6 leading-tight tracking-tight">
            Na čemu se temelji <span className="text-gold italic font-light italic">ovaj protokol</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20 text-left">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[32px] shadow-[0_20px_50px_rgba(6,10,18,0.05)] border border-gray-100 flex flex-col items-start transition-all duration-500 hover:shadow-[0_30px_70px_rgba(6,10,18,0.08)] group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#060A12]/[0.03] flex items-center justify-center mb-8 group-hover:bg-gold/10 transition-colors duration-500">
                <pillar.icon className="w-7 h-7 text-gold" strokeWidth={1} />
              </div>
              
              <span className="text-gold text-[10px] font-black tracking-[0.25em] uppercase mb-3 leading-none opacity-65">
                {pillar.tag}
              </span>
              
              <h3 className="font-serif text-xl md:text-2xl font-bold mb-4 leading-snug text-[#060A12]">
                {pillar.title}
              </h3>
              
              <p className="text-[#060A12]/75 text-sm md:text-base leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
