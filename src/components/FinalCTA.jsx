import React from 'react';
import { motion } from 'framer-motion';

const ButtonGold = ({ children, className = '', href = 'https://miranlet.lemonsqueezy.com/checkout/buy/63565eee-96d4-4d01-b339-ecfbe56cab97' }) => (
  <a href={href} className={`group inline-flex items-center justify-center bg-[#D4AF37] text-white font-bold uppercase tracking-[0.08em] py-5 px-10 md:px-14 rounded-xl transition-all duration-500 shadow-lg shadow-gold/25 hover:shadow-2xl hover:shadow-gold/40 hover:bg-[#c5a133] hover:-translate-y-1 ${className}`}>
    <span>{children}</span>
  </a>
);

export default function FinalCTA() {
  return (
    <section
      className="py-20 md:py-48 px-6 flex flex-col items-center text-center relative overflow-hidden bg-[#FAFAF8]"
    >
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/cta.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) brightness(1.2) contrast(0.8)',
          opacity: 0.15
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-white" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 w-full flex flex-col items-center max-w-2xl px-2 md:px-4"
      >
        <div className="w-10 md:w-12 h-[1px] bg-[#D4AF37] mb-8" />
        <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-[9px] md:text-[11px] font-bold mb-6 block">VRIJEME JE ZA MIRNIJI LET</span>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl text-[#060A12] font-bold mb-8 md:mb-10 leading-[1.1] md:leading-[1.1] tracking-tight">
          Uđi u avion<br />
          <span className="text-[#D4AF37] italic underline decoration-1 underline-offset-8 font-light lowercase">s osjećajem kontrole.</span>
        </h2>
        <p className="text-[#060A12]/40 mb-10 text-sm md:text-base font-bold italic tracking-tight">
          Preuzmi audio + PDF protokol i imaj jasan plan prije i tokom leta.
        </p>
        <ButtonGold className="w-full sm:w-auto px-12 md:px-16 py-6 md:py-7 text-[14px] md:text-base tracking-widest font-extrabold uppercase" href="https://miranlet.lemonsqueezy.com/checkout/buy/63565eee-96d4-4d01-b339-ecfbe56cab97">
          Preuzmi Miran Let
        </ButtonGold>
      </motion.div>
    </section>
  );
}
