import React from 'react';

export default function Content() {
  const items = [
    {
      title: 'VOĐENI AUDIO PROTOKOL',
      desc: 'Glavni sadržaj koji pratiš prije polijetanja i tijekom leta.'
    },
    {
      title: 'DIGITALNI VODIČ OD 43 STRANICE',
      desc: 'Jasno objašnjen sistem koji možeš otvoriti na telefonu ili računalu.'
    },
    {
      title: 'DEVET PRAKTIČNIH ALATA',
      desc: 'Vježba disanja, SOS kartica, protokol za polijetanje, kartica za turbulenciju, 30-dnevni plan, test tipa straha, avijacijski rječnik i dodatni alati.'
    },
    {
      title: 'TRAJNI PRISTUP',
      desc: 'Jednom preuzmeš i sadržaj ostaje tvoj.'
    },
    {
      title: 'DOSTUPNO BEZ INTERNETA',
      desc: 'Nakon preuzimanja sadržaj možeš koristiti i u avionu.'
    }
  ];

  return (
    <section id="sadrzaj" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 w-full bg-[#EAF4FD]">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Section Header */}
        <div className="max-w-[800px] mx-auto text-center mb-10 md:mb-14">
          <span className="font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.14em] text-[#4A5A68] mb-2.5 block">
            SADRŽAJ PAKETA
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#16232F] leading-[1.2]">
            Što dobivaš odmah nakon kupnje
          </h2>
        </div>

        {/* Grid on Desktop / Single Column Stack on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Flatlay Image */}
          <div className="lg:col-span-5 flex flex-col items-center w-full">
            <div className="w-full max-w-[440px] bg-white p-3.5 sm:p-4 rounded-2xl border-2 border-[#C8A84A] shadow-md">
              <img 
                src="/images/miran-let-alati-flatlay.png" 
                alt="Prikaz digitalnog vodiča i alata Miran Let"
                width="640"
                height="640"
                loading="lazy"
                className="w-full h-auto object-contain rounded-xl block max-h-[340px] sm:max-h-[380px] mx-auto"
              />
            </div>
            <p className="text-xs text-[#4A5A68] mt-2.5 italic text-center">
              Ilustrativni prikaz digitalnog proizvoda.
            </p>
          </div>

          {/* Right Column: 5 Feature Items */}
          <div className="lg:col-span-7 flex flex-col gap-3.5 sm:gap-4 text-left w-full">
            {items.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#C8A84A] rounded-xl p-4 sm:p-5 shadow-sm flex items-start gap-3.5 sm:gap-4 hover:border-[#C8A84A] transition-all"
              >
                <div className="w-7 h-7 rounded-full bg-[#16232F] text-[#C8A84A] font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#16232F] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#4A5A68] text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
