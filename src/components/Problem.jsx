import React from 'react';
import { motion } from 'framer-motion';

export default function Problem() {
  return (
    <section className="py-16 md:py-36 px-6 lg:px-16 w-full bg-white relative">
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Image - Moved to left on desktop */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1 relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-navy/15 relative aspect-[3/4] max-h-[500px]">
            <img
              src="/problem.png"
              alt="Intimno, emocionalno iskustvo leta"
              className="w-full h-full object-cover grayscale-[30%] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-navy/10" />
          </div>
        </motion.div>

        {/* Text */}
        <div className="order-1 lg:order-2 text-center lg:text-left">
          <h2 className="font-serif text-3xl md:text-5xl text-[#060A12] mb-10 font-bold leading-[1.15] tracking-tight">
            Ako te strah uhvati čim se vrata zatvore...
          </h2>

          <p className="text-[#060A12]/80 text-xl font-medium mb-12 italic border-l-0 lg:border-l-4 lg:pl-6 leading-relaxed">
            Tijelo se napne, misli krenu ubrzano, a ti pokušavaš ostati smiren iako znaš da je let siguran.
          </p>

          <div className="space-y-8 flex flex-col items-center lg:items-start">
            <div className="w-full">
              <span className="text-gold uppercase tracking-[0.25em] text-[11px] font-black mb-6 block text-center lg:text-left">VJEROJATNO TI JE POZNATO:</span>
              <ul className="space-y-4 flex flex-col items-center lg:items-start">
                {['pratiš svaki zvuk u avionu', 'teško se opuštaš u sjedalu', 'stalno tražiš znak da je sve u redu', 'želiš samo da let što prije završi'].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-center text-[#060A12]/80 text-lg font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[#060A12] text-xl md:text-2xl leading-relaxed font-bold mt-12 bg-gold/10 p-8 rounded-2xl border border-gold/20 w-full text-center lg:text-left">
              Ali to nije znak slabosti.<br />
              <span className="text-gold italic underline decoration-1 underline-offset-8">Znači da tvoje tijelo treba jasan signal sigurnosti u pravom trenutku.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
