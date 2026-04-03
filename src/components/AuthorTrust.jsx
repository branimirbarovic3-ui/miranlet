import React from 'react';
import { motion } from 'framer-motion';

export default function AuthorTrust() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-16 w-full bg-white relative">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-12 md:gap-20"
        >
          {/* Compact Avatar ID Card */}
          <div className="shrink-0 flex flex-col items-center">
            <div className="w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl relative border-4 border-white ring-1 ring-gray-100 flex items-center justify-center bg-gray-50">
              <img 
                src="/brane.png" 
                alt="Brane - Autor Protokola" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 text-center">
                <p className="text-[#060A12] font-black text-lg md:text-xl">Brane</p>
                <p className="text-[#D4AF37] text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-black">Autor Protokola</p>
            </div>
          </div>

          {/* Compact Aligned Story */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-[#060A12] font-serif italic text-xl md:text-3xl leading-[1.35] mb-6">
              "Godinama sam sjedio u tim sjedalima stežući naslon, protežući noge, prateći svaki šum i čekajući ono najgore. 
              Pokušao sam sve. Logiku, statistike, filmove. Nije pomoglo. 
              Onda sam shvatio da mi nije trebalo znanje. <span className="text-[#D4AF37] not-italic font-bold">Trebao mi je sistem koji radi."</span>
            </h3>
            <p className="text-[#060A12]/60 text-[15px] md:text-lg leading-relaxed max-w-2xl">
              Miran Let sam napravio iz tog mjesta. Ne iz udžbenika, nego iz sjedala 14F na letu za Kopenhagen za koji nisam bio siguran hoću li ga preživjeti. Želio sam da se nitko više ne osjeća onako kako sam se ja tada osjećao. Danas letim mirno. I srce se smiri u par minuta.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
