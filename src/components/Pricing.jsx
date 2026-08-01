import React from 'react';
import { Check, ShieldCheck, Download, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const ButtonGold = ({ children, className = '', href = 'https://miranlet.lemonsqueezy.com/checkout/buy/63565eee-96d4-4d01-b339-ecfbe56cab97' }) => (
  <a href={href} className={`group inline-flex items-center justify-center bg-[#D4AF37] text-[#060A12] font-bold uppercase tracking-[0.1em] py-5 px-10 rounded-xl transition-all duration-500 shadow-xl shadow-gold/10 hover:shadow-gold/30 hover:bg-[#c5a133] hover:-translate-y-1 ${className}`}>
    <span>{children}</span>
  </a>
);

export default function Pricing() {
  return (
    <section id="kupi" className="py-16 md:py-24 px-4 md:px-16 w-full bg-[#FAFAF8] text-[#060A12] relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -mr-64 -mt-64 opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy/5 rounded-full blur-[120px] -ml-64 -mb-64 opacity-30" />

      <div className="max-w-[1240px] mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Visual Side - NOW FIRST ON MOBILE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-1"
          >
            <div className="relative group max-w-[540px] mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gold/10 rounded-[32px] blur-3xl group-hover:bg-gold/15 transition-all duration-700 -z-10 scale-95" />
              <div className="rounded-[32px] overflow-hidden shadow-[0_50px_100px_rgba(6,10,18,0.12)] border border-white p-2 bg-white/50 backdrop-blur-sm">
                <img 
                  src="/bundle.png" 
                  alt="Miran Let Kompletan Paket" 
                  className="w-full h-auto rounded-[24px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 md:p-5 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[10px] font-bold text-[#060A12]/40 uppercase tracking-widest leading-none">Vrijednost</span>
                  <span className="text-xl font-serif font-black text-gold">40€</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Details Side - Second on mobile */}
          <div className="flex flex-col order-2 lg:order-2 text-left">
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-[#060A12] tracking-tight">
              Kad krene strah u avionu. <span className="text-gold italic">Ovo koristiš.</span>
            </h2>

            <div className="text-[#060A12]/60 text-base md:text-lg leading-relaxed mb-10 max-w-xl font-light italic space-y-4">
              <p>Radi čak i kad znaš da nema razloga za strah.</p>
              <p>Miran Let te vodi korak-po-korak kroz trenutke jakog straha. Vraća kontrolu u par minuta.</p>
              <p>Bez analiziranja. Samo pratiš i tijelo se smiruje.</p>
            </div>

            <div className="space-y-6 mb-10">
              {[
                { 
                  title: 'PROTOKOL ZA AVION (AUDIO + PDF)', 
                  desc: (
                    <>
                      <strong>Pusti i prati</strong>. Čak i kad ne možeš jasno razmišljati.
                    </>
                  ),
                  icon: Download 
                },
                { 
                  title: 'SMIRIVANJE U 60 SEKUNDI', 
                  desc: (
                    <>
                      Kad strah krene. Spuštaš ga <strong>odmah</strong>.
                    </>
                  ),
                  icon: Smartphone 
                },
                { 
                  title: 'PRIPREMA PRIJE LETA', 
                  desc: 'Da ne uđeš u avion već napet.',
                  icon: ShieldCheck 
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 md:gap-5 items-start group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0 group-hover:border-gold/30 group-hover:shadow-lg transition-all duration-300">
                    <item.icon className="w-5 h-5 text-gold/60 group-hover:text-gold transition-colors" strokeWidth={1.2} />
                  </div>
                  <div className="pt-1.5">
                    <h3 className="text-[13px] md:text-[15px] font-black text-[#060A12] mb-0.5 tracking-wider uppercase">{item.title}</h3>
                    <div className="text-[#060A12]/45 text-[13px] md:text-[14px] leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dark Guarantee Box - Updated Copy */}
            <div className="bg-[#060A12] rounded-[20px] p-6 md:p-8 mb-10 relative overflow-hidden group shadow-2xl border border-white/5">
               <div className="relative flex flex-col sm:flex-row gap-5 md:gap-6 items-center sm:items-start text-center sm:text-left">
                 <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-gold" strokeWidth={1.5} />
                 </div>
                 <div>
                    <h4 className="text-gold text-[9px] font-black uppercase tracking-[0.25em] mb-1.5">GARANCIJA KONTROLE</h4>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed italic">
                      Ako ne osjetiš razliku već na prvom letu. Vraćamo novac. Bez pitanja.
                    </p>
                 </div>
               </div>
            </div>

            <div className="flex flex-col items-center sm:items-start pt-10 border-t border-gray-100">
              <span className="text-[#060A12]/40 text-[11px] font-black tracking-widest uppercase mb-4">Jednokratni pristup protokolu</span>
              
              <div className="flex flex-col sm:flex-row items-center gap-8 w-full">
                <div className="flex flex-col items-center sm:items-start shrink-0">
                  <span className="bg-[#D4AF37]/10 text-[#c5a133] text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 self-center sm:self-start">Rani Pristup (Early Bird)</span>
                  <span className="text-5xl md:text-6xl font-serif font-black text-gold tracking-tight mt-1">19.99€</span>
                </div>
                <div className="flex-1 w-full">
                  <ButtonGold className="w-full text-[13px] md:text-[15px] py-5 tracking-[0.12em] font-black mb-4" href="https://miranlet.lemonsqueezy.com/checkout/buy/63565eee-96d4-4d01-b339-ecfbe56cab97">
                    PREUZMI MIRAN LET · 19.99€
                  </ButtonGold>
                  <p className="text-[#060A12]/40 text-[10px] font-bold tracking-widest uppercase text-center sm:text-left">
                    Bez pretplate. Bez dodatnih troškova.
                  </p>
                </div>
              </div>

              <p className="mt-16 text-[#060A12]/60 text-sm md:text-base italic leading-relaxed text-center sm:text-left font-light">
                Manje od cijene jedne avionske karte. Za osjećaj kontrole svaki put kad letiš.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
