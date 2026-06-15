import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const ButtonGold = ({ children, className = '', href = 'https://miranlet.lemonsqueezy.com/checkout/buy/63565eee-96d4-4d01-b339-ecfbe56cab97' }) => (
  <a href={href} className={`group inline-flex items-center justify-center bg-[#D4AF37] text-white font-bold uppercase tracking-[0.08em] py-5 px-10 md:px-12 rounded-xl transition-all duration-500 shadow-lg shadow-gold/25 hover:shadow-2xl hover:shadow-gold/40 hover:bg-[#c5a133] hover:-translate-y-1 ${className}`}>
    <span>{children}</span>
  </a>
);

export default function Hero() {
  return (
    <section
      className="relative min-h-[95vh] md:min-h-[100vh] flex flex-col items-center px-4 md:px-6 text-center overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(6,10,18,0.72) 0%, rgba(6,10,18,0.58) 40%, rgba(6,10,18,0.85) 100%),
          url(/hero.png)
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      }}
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-4xl flex-1 flex flex-col items-center justify-between pt-24 md:pt-40 pb-12 md:pb-20"
      >
        {/* TOP BLOCK */}
        <div className="flex flex-col items-center mb-auto">
          <span className="text-gold uppercase tracking-[0.25em] md:tracking-[0.35em] text-[10px] md:text-[12px] font-black mb-10 md:mb-12 inline-block">
            MIRAN LET PROTOKOL
          </span>

          <div className="flex flex-col gap-10 md:gap-12 max-w-3xl mx-auto text-center px-2">
            <h1 className="font-serif text-white text-3xl md:text-5xl lg:text-7xl font-bold leading-[1.3] md:leading-[1.15] tracking-tight drop-shadow-xl max-w-[320px] md:max-w-none mx-auto">
              Uđi u avion s osjećajem kontrole.<br />
              <span className="text-gold text-lg md:text-2xl font-light italic mt-8 md:mt-8 block tracking-wide normal-case drop-shadow-none leading-relaxed">
                Audio + PDF protokol koji pratiš prije i tokom leta kad se tijelo napne, misli ubrzaju i treba ti jasan korak dalje.
              </span>
            </h1>
          </div>
        </div>

        {/* BOTTOM BLOCK */}
        <div className="flex flex-col items-center w-full max-w-[320px] md:max-w-none mt-12 md:mt-24">
          <ButtonGold className="w-full sm:w-auto text-[14px] md:text-[16px] py-6 px-12 md:px-20 uppercase tracking-[0.2em] font-black" href="https://miranlet.lemonsqueezy.com/checkout/buy/63565eee-96d4-4d01-b339-ecfbe56cab97">
            Preuzmi Miran Let
          </ButtonGold>
          
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-white/60 text-[10px] md:text-[11px] font-bold tracking-widest uppercase">
            <span className="flex items-center gap-3">
              <span className="text-gold text-lg">✔</span> Koristiš čim osjetiš da napetost raste
            </span>
            <span className="flex items-center gap-3">
              <span className="text-gold text-lg">✔</span> Smiruje tijelo bez forsiranja
            </span>
            <span className="flex items-center gap-3">
              <span className="text-gold text-lg">✔</span> Pristup odmah na mobitel
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
