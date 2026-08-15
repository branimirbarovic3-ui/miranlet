import React, { useState, useEffect } from 'react';

export default function ProductProof() {
  const [selectedPreview, setSelectedPreview] = useState(null);

  // STAVKA ZA INTEGRACIJU: Zamijeniti placeholder slike stvarnim snimkama stranica vodiča i SOS kartice
  const previews = [
    {
      id: 'vodic-01',
      src: '/images/vodic-preview-01.svg',
      fallback: '/images/vodic-preview-01.webp',
      alt: 'Uvid u digitalni vodič - Fiziologija i regulacija reakcije',
      tag: 'DIGITALNI VODIČ · POGLAVLJE 1',
      title: 'Fiziologija i regulacija reakcije',
      desc: 'Detaljno objašnjenje zašto pokušaj smirivanja na silu stvara veći pritisak i kako tijelo usmjeriti u mirniji ritam.'
    },
    {
      id: 'vodic-02',
      src: '/images/vodic-preview-02.svg',
      fallback: '/images/vodic-preview-02.webp',
      alt: 'Uvid u digitalni vodič - Protokol polijetanja',
      tag: 'DIGITALNI VODIČ · PROTOKOL POLIJETANJA',
      title: 'Prvih 10 minuta u zraku',
      desc: 'Jasno razloženi koraci i zvukovi od zatvaranja vrata i rulanja do postizanja visine krstarenja.'
    },
    {
      id: 'sos-kartica',
      src: '/images/sos-kartica-preview.svg',
      fallback: '/images/sos-kartica-preview.webp',
      alt: 'Uvid u SOS karticu za mobitel',
      tag: 'BRZI ALAT ZA MOBITEL',
      title: 'SOS kartica za sjedalo',
      desc: 'Četiri sažeta koraka (uzemljenje, 4-6 disanje, fokus i audio) pripremljena za trenutni pregled na zaslonu.'
    }
  ];

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedPreview(null);
    };
    if (selectedPreview) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedPreview]);

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 w-full bg-[#EAF4FD]">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Section Header */}
        <div className="max-w-[800px] mx-auto text-center mb-10 md:mb-14">
          <span className="font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.14em] text-[#4A5A68] mb-2.5 block">
            UVID U MATERIJALE
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#16232F] leading-[1.2] mb-3.5">
            Pogledaj kako izgledaju materijali
          </h2>
          <p className="font-sans text-base md:text-lg text-[#4A5A68]">
            Jasno strukturirane stranice i sažete kartice prilagođene brzom čitanju na mobitelu. Dodirni karticu za prikaz preko cijelog ekrana.
          </p>
        </div>

        {/* 3 Previews Grid - Stacked on Mobile, 3 Columns on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {previews.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedPreview(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedPreview(item); }}
              aria-label={`Otvori prikaz za ${item.title}`}
              className="bg-white border-2 border-[#C8A84A] rounded-2xl overflow-hidden shadow-md flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl cursor-pointer group focus:outline-none focus:ring-4 focus:ring-[#C8A84A]/40"
            >
              {/* Preview Thumbnail Container */}
              <div className="p-3.5 sm:p-4 bg-[#F7F5F0] border-b border-[#E4E9EF] relative overflow-hidden flex items-center justify-center">
                <picture className="w-full">
                  <source srcSet={item.src} type="image/svg+xml" />
                  <img 
                    src={item.fallback} 
                    alt={item.alt}
                    width="600"
                    height="800"
                    loading="lazy"
                    className="w-full h-auto object-contain rounded-lg shadow-sm border border-[#E4E9EF] max-h-[320px] sm:max-h-[360px] block mx-auto group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </picture>
                
                {/* Tap to expand badge on mobile/hover */}
                <div className="absolute inset-0 bg-[#16232F]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-[#16232F]/90 text-[#C8A84A] text-xs font-bold uppercase tracking-wider py-2 px-3.5 rounded-lg shadow-md flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                    Povećaj prikaz
                  </span>
                </div>
              </div>

              {/* Text Meta */}
              <div className="p-5 text-left flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#C8A84A] tracking-wider uppercase block mb-1">
                    {item.tag}
                  </span>
                  <div className="font-serif text-lg sm:text-xl font-bold text-[#16232F] mb-1.5">
                    {item.title}
                  </div>
                  <p className="text-sm text-[#4A5A68] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E4E9EF] flex items-center justify-between text-xs font-semibold text-[#16232F] group-hover:text-[#C8A84A]">
                  <span>Dodirni za cijeli ekran</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPreview && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedPreview(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedPreview.title}
        >
          <div 
            className="relative bg-white rounded-2xl max-w-[650px] w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl border-2 border-[#C8A84A]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header */}
            <div className="bg-[#16232F] text-white p-4 sm:p-5 flex items-center justify-between border-b border-[#C8A84A]/30 shrink-0">
              <div>
                <span className="text-[10px] sm:text-xs font-bold text-[#C8A84A] uppercase tracking-wider block">
                  {selectedPreview.tag}
                </span>
                <h3 className="font-serif text-base sm:text-xl font-bold text-white">
                  {selectedPreview.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPreview(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xl font-bold transition-all focus:outline-none focus:ring-2 focus:ring-[#C8A84A]"
                aria-label="Zatvori pregled"
              >
                ✕
              </button>
            </div>

            {/* Lightbox Image Container */}
            <div className="p-3 sm:p-6 overflow-y-auto bg-[#F7F5F0] flex items-center justify-center">
              <picture className="w-full">
                <source srcSet={selectedPreview.src} type="image/svg+xml" />
                <img 
                  src={selectedPreview.fallback} 
                  alt={selectedPreview.alt}
                  className="w-full h-auto max-h-[68vh] object-contain rounded-xl shadow-md border border-[#E4E9EF] mx-auto block"
                />
              </picture>
            </div>

            {/* Lightbox Footer */}
            <div className="p-3 sm:p-4 bg-white border-t border-[#E4E9EF] text-center text-xs text-[#4A5A68] shrink-0">
              {selectedPreview.desc}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
