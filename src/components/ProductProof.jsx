import React from 'react';

export default function ProductProof() {
  // STAVKA ZA INTEGRACIJU: Zamijeniti placeholder slike stvarnim snimkama stranica vodiča i SOS kartice
  const previews = [
    {
      src: '/images/vodic-preview-01.svg',
      fallback: '/images/vodic-preview-01.webp',
      alt: 'Uvid u digitalni vodič - Fiziologija i regulacija reakcije',
      title: 'Digitalni vodič · Poglavlje 1',
      subtitle: 'Fiziologija i regulacija reakcije'
    },
    {
      src: '/images/vodic-preview-02.svg',
      fallback: '/images/vodic-preview-02.webp',
      alt: 'Uvid u digitalni vodič - Protokol polijetanja',
      title: 'Digitalni vodič · Protokol polijetanja',
      subtitle: 'Prvih 10 minuta u zraku'
    },
    {
      src: '/images/sos-kartica-preview.svg',
      fallback: '/images/sos-kartica-preview.webp',
      alt: 'Uvid u SOS karticu za mobitel',
      title: 'Brzi alat · SOS kartica za sjedalo',
      subtitle: 'Četiri koraka za trenutnu stabilizaciju'
    }
  ];

  return (
    <section className="py-20 md:py-28 px-6 w-full bg-[#EAF4FD]">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Section Header */}
        <div className="max-w-[800px] mx-auto text-center mb-14 md:mb-16">
          <span className="font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.14em] text-[#4A5A68] mb-3 block">
            UVID U MATERIJALE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#16232F] leading-[1.2] mb-4">
            Pogledaj kako izgledaju materijali
          </h2>
          <p className="font-sans text-base md:text-lg text-[#4A5A68]">
            Jasno strukturirane stranice i sažete kartice prilagođene brzom čitanju na mobitelu.
          </p>
        </div>

        {/* 3 Previews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previews.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border-2 border-[#C8A84A] rounded-2xl overflow-hidden shadow-md flex flex-col transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="p-3 bg-[#F7F5F0] border-b border-[#E4E9EF]">
                <picture>
                  <source srcSet={item.src} type="image/svg+xml" />
                  <img 
                    src={item.fallback} 
                    alt={item.alt}
                    width="600"
                    height="800"
                    loading="lazy"
                    className="w-full h-auto object-contain rounded-lg shadow-sm border border-[#E4E9EF] max-h-[380px] block mx-auto"
                  />
                </picture>
              </div>

              <div className="p-5 text-left flex-1 flex flex-col justify-center">
                <div className="font-serif text-lg font-bold text-[#16232F] mb-1">
                  {item.title}
                </div>
                <div className="text-xs text-[#4A5A68]">
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
