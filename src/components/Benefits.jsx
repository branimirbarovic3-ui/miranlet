import React from 'react';
import { Plane, Heart, Sun, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Benefits() {
  const benefits = [
    {
      title: 'Manje panike',
      desc: 'Tijelo će i dalje možda reagirati, ali intenzitet straha više neće biti paralizirajući. Moći ćeš prodisati.',
      icon: Heart
    },
    {
      title: 'Više kontrole',
      desc: 'Znat ćeš točno što trebaš raditi u trenutku kad krenu turbulencije ili uzlijetanje. Nema više gubljenja u mislima.',
      icon: Sun
    },
    {
      title: 'Mirniji let',
      desc: 'Umjesto pukog preživljavanja, po prvi put ćeš moći otvoriti oči, pogledati film ili razgovarati s osobom do sebe.',
      icon: Plane
    },
    {
      title: 'Više energije',
      desc: 'Strah iscrpljuje. Sa Mirnim Letom putovanje završava s više energije i bez onog prepoznatljivog umora od stresa.',
      icon: Clock
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 lg:px-16 w-full bg-white relative overflow-hidden">
      <div className="max-w-[1140px] mx-auto text-left lg:text-center">
        
        <div className="max-w-2xl mx-auto mb-20 lg:text-center">
          <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">REALNO, NE HYPE</span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#060A12] font-bold mb-8 leading-[1.1] tracking-tight">
            Cilj nije magija.<br />
            <span className="text-[#D4AF37] italic">Cilj je kontrola.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col lg:items-center lg:text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#060A12]/[0.02] border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-[#060A12] transition-all duration-500 group-hover:shadow-xl group-hover:shadow-navy/10">
                <b.icon className="w-6 h-6 text-[#D4AF37] transition-all duration-500 group-hover:scale-110" strokeWidth={1.5} />
              </div>
              <h4 className="font-serif text-[20px] font-bold text-[#060A12] mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                {b.title}
              </h4>
              <p className="text-[#060A12]/50 text-[14px] leading-relaxed max-w-[260px] lg:mx-auto">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
