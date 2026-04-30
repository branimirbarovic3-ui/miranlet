import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="py-20 md:py-32 px-6 lg:px-16 w-full bg-white text-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-[#FAFAF8] p-10 md:p-16 rounded-[40px] border border-gray-100 shadow-sm relative"
      >
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full border border-gray-100 flex items-center justify-center shadow-md">
          <span className="text-3xl">🛡</span>
        </div>
        
        <h2 className="font-serif text-3xl md:text-5xl text-[#060A12] mb-6 font-bold leading-tight tracking-tight">
          Bez rizika
        </h2>
        
        <p className="text-[#060A12]/70 text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto italic">
          Ako ne osjetiš razliku već na prvom letu — vraćamo novac. Bez pitanja.
        </p>
        <p className="text-[#060A12]/40 text-sm md:text-base mt-4 max-w-xl mx-auto">
          Kupi danas, isprobaj na sljedećem letu. Ako protokol ne pomogne, napiši nam i vraćamo cijeli iznos.
        </p>
        
        <div className="mt-10 flex items-center justify-center gap-2 text-gold font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
          <ShieldCheck className="w-4 h-4" />
          <span>100% GARANCIJA ZADOVOLJSTVA</span>
        </div>
      </motion.div>
    </section>
  );
}
