import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-24 md:py-36 px-4 md:px-16 w-full bg-white" id="testimonials">
      <div className="max-w-[1140px] mx-auto text-left">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[#D4AF37] uppercase tracking-[0.25em] text-[10px] font-bold mb-4 block">ISKUSTVA</span>
          <h2 className="font-serif text-3xl md:text-[2.8rem] text-[#060A12] font-bold leading-[1.15]">
            Što ljudi primijete već<br /><span className="italic text-[#D4AF37]">na prvom letu.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {[
            {
              text: 'Prije bih već na ukrcaju osjećala knedlu u grlu. Ovaj put sam pustila audio čim sam sjela i samo pratila korake. Nije nestao sav strah, ali prvi put nisam provela cijeli let u grču.',
              name: 'Ana P., Rijeka',
              sub: 'Pobjeda nad nelagodom',
              featured: false,
              img: '/avatars/ana.png'
            },
            {
              text: 'Najviše mi je pomoglo što nisam morala razmišljati što da radim. Kad su misli krenule, samo sam se vratila na glas i disanje. Let mi je i dalje bio izazov, ali sam imala osjećaj kontrole.',
              name: 'Ivana M., Zagreb',
              sub: 'Let bez iscrpljenosti',
              featured: false,
              img: '/avatar2.png',
              isGrayscale: true
            },
            {
              text: 'Koristio sam protokol prije polijetanja i tokom turbulencije. Nije bilo magično, ali je bilo dovoljno da ostanem miran i ne ulazim u onu spiralu kao ranije.',
              name: 'Mario L., Split',
              sub: 'Poslovni putnik',
              featured: true,
              img: '/avatars/mario.png'
            }
          ]
.map((t, idx) => (
            <div
              key={idx}
              className={`flex flex-col p-8 md:p-12 rounded-3xl relative transition-all duration-300 hover:-translate-y-1 text-center lg:text-left items-center lg:items-start ${
                t.featured
                  ? 'bg-[#060A12] shadow-2xl md:-translate-y-4 hover:-translate-y-5'
                  : 'bg-white border border-gray-100 shadow-sm hover:shadow-xl'
              }`}
            >
              <div className={`absolute top-6 right-8 font-serif text-5xl md:text-7xl italic leading-none h-10 ${t.featured ? 'text-white/5' : 'text-[#D4AF37]/10'}`}>"</div>
              <div className="flex gap-0.5 mb-6 mt-1 text-[#D4AF37] text-xs">★★★★★</div>
              <p className={`text-[16px] md:text-[17px] leading-[1.8] mb-10 flex-1 italic relative z-10 ${
                t.featured ? 'text-white/90 font-serif text-xl md:text-2xl' : 'text-[#060A12]/70 font-light'
              }`}>
                {t.text}
              </p>
              <div className={`border-t pt-6 flex flex-col lg:flex-row items-center gap-5 w-full ${t.featured ? 'border-white/10' : 'border-gray-100'}`}>
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden shrink-0 shadow-lg border-2 ${
                   t.featured ? 'border-[#D4AF37]/50 ring-4 ring-[#D4AF37]/10' : 'border-white ring-4 ring-gray-50'
                }`}>
                  <img src={t.img} alt={t.name} draggable="false" onContextMenu={(e) => e.preventDefault()} className={`w-full h-full object-cover pointer-events-none select-none ${t.isGrayscale ? 'grayscale' : ''}`} />
                </div>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <span className={`font-bold block text-[15px] mb-0.5 ${t.featured ? 'text-white' : 'text-[#060A12]'}`}>{t.name}</span>
                  <span className={`font-medium text-[11px] md:text-xs uppercase tracking-wider ${t.featured ? 'text-[#D4AF37]' : 'text-gray-400'}`}>{t.sub}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
