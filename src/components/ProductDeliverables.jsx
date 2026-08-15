import React, { useState, useEffect } from 'react';

export default function ProductDeliverables() {
  const [showToolsList, setShowToolsList] = useState(false);
  const [selectedPreview, setSelectedPreview] = useState(null);

  const mainDeliverables = [
    'Vođeni audio za let',
    'Digitalni vodič od 43 stranice',
    'Devet praktičnih alata',
    'Korištenje bez interneta',
    'Trajni pristup'
  ];

  const nineTools = [
    '1. Vježba disanja 4-6 za stabilizaciju pulsa',
    '2. SOS kartica za sjedalo i brzi fokus',
    '3. Protokol za polijetanje i prvih 10 minuta uspona',
    '4. Kartica za turbulenciju i razumijevanje strujanja zraka',
    '5. 30-dnevni plan postupne pripreme prije putovanja',
    '6. Test tipa reakcije na let',
    '7. Avijacijski rječnik zvukova i operativnih faza',
    '8. Kontrolna lista prije polaska na aerodrom',
    '9. Protokol za mirno slijetanje i prilaz pisti'
  ];

  const previews = [
    {
      id: 'vodic-01',
      src: '/images/vodic-preview-01.svg',
      fallback: '/images/vodic-preview-01.webp',
      alt: 'Digitalni vodič - Poglavlje 1',
      tag: 'DIGITALNI VODIČ · POGLAVLJE 1',
      title: 'Fiziologija i regulacija reakcije',
      desc: 'Zašto pokušaj smirivanja na silu stvara veći pritisak i kako tijelo usmjeriti u miran ritam.'
    },
    {
      id: 'vodic-02',
      src: '/images/vodic-preview-02.svg',
      fallback: '/images/vodic-preview-02.webp',
      alt: 'Digitalni vodič - Protokol polijetanja',
      tag: 'DIGITALNI VODIČ · PROTOKOL POLIJETANJA',
      title: 'Prvih 10 minuta u zraku',
      desc: 'Razloženi koraci i zvukovi od zatvaranja vrata do penjanja na visinu krstarenja.'
    },
    {
      id: 'sos-kartica',
      src: '/images/sos-kartica-preview.svg',
      fallback: '/images/sos-kartica-preview.webp',
      alt: 'SOS kartica za mobitel',
      tag: 'BRZI ALAT ZA MOBITEL',
      title: 'SOS kartica za sjedalo',
      desc: 'Četiri sažeta koraka pripremljena za trenutačno otvaranje na zaslonu telefona.'
    }
  ];

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
    <section id="sadrzaj" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 w-full bg-white border-b border-[#E1EAF2]">
      <div className="max-w-[1120px] mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-8 sm:mb-12">
          <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] text-[#176EA6] mb-2 block">
            KOMPLETAN SADRŽAJ
          </span>
          <h2 className="font-serif text-[30px] sm:text-[36px] md:text-[44px] font-bold text-[#0B1C2E] leading-[1.18]">
            Što dobivaš
          </h2>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          
          {/* Left Column: Flatlay Mockup in Aviation Frame */}
          <div className="lg:col-span-6 flex flex-col items-center w-full">
            <div className="w-full bg-[#0B1C2E] p-3 sm:p-5 rounded-2xl border border-[#D4AF37] shadow-lg relative overflow-hidden">
              <img 
                src="/images/miran-let-alati-flatlay.png" 
                alt="Miran Let digitalni komplet - vodič i praktični alati"
                width="640"
                height="640"
                loading="lazy"
                className="w-full h-auto object-contain rounded-xl block max-h-[340px] sm:max-h-[380px] mx-auto drop-shadow-md"
              />
            </div>
            <p className="text-xs text-[#526579] mt-2 italic text-center">
              Ilustrativni prikaz digitalnog proizvoda.
            </p>
          </div>

          {/* Right Column: 5 Deliverables List + 9 Tools Toggle */}
          <div className="lg:col-span-6 flex flex-col items-start text-left w-full">
            <div className="flex flex-col gap-3 w-full mb-5">
              {mainDeliverables.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-xl bg-[#F2F8FC] border border-[#E1EAF2]"
                >
                  <div className="w-6 h-6 rounded-full bg-[#0B1C2E] text-[#D4AF37] font-bold text-xs flex items-center justify-center shrink-0 border border-[#D4AF37]">
                    ✓
                  </div>
                  <span className="font-sans text-base sm:text-[17px] font-semibold text-[#0B1C2E]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Concise Summary Line */}
            <p className="font-sans text-sm sm:text-base text-[#526579] mb-4 leading-relaxed">
              Preuzmeš sadržaj odmah, spremiš ga na telefon i ostaje ti trajno dostupan.
            </p>

            {/* Interactive Accordion for 9 Tools */}
            <button
              onClick={() => setShowToolsList(!showToolsList)}
              className="text-sm font-bold text-[#176EA6] hover:text-[#0B1C2E] flex items-center gap-2 underline underline-offset-4 focus:outline-none"
            >
              <span>{showToolsList ? 'Sakrij popis devet alata' : 'Pogledaj svih devet alata'}</span>
              <span>{showToolsList ? '↑' : '↓'}</span>
            </button>

            {showToolsList && (
              <div className="mt-4 p-4 rounded-xl bg-[#F5F5F2] border border-[#E1EAF2] w-full text-xs sm:text-sm text-[#0B1C2E] space-y-2 animate-in fade-in">
                {nineTools.map((tool, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-[#D4AF37] font-bold">·</span>
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Actual Guide & SOS Card Previews */}
        <div className="pt-8 border-t border-[#E1EAF2]">
          <div className="text-left mb-6">
            <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] text-[#176EA6] mb-1 block">
              STVARNI UVID U MATERIJALE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1C2E]">
              Pregled stranica vodiča i kartica
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previews.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedPreview(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedPreview(item); }}
                className="bg-[#F2F8FC] border border-[#E1EAF2] hover:border-[#D4AF37] rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                <div className="p-3 bg-white border-b border-[#E1EAF2]">
                  <picture className="w-full">
                    <source srcSet={item.src} type="image/svg+xml" />
                    <img 
                      src={item.fallback} 
                      alt={item.alt}
                      width="600"
                      height="800"
                      loading="lazy"
                      className="w-full h-auto object-contain rounded border border-[#E1EAF2] max-h-[260px] block mx-auto group-hover:scale-[1.02] transition-transform duration-200"
                    />
                  </picture>
                </div>
                <div className="p-4 text-left">
                  <span className="text-[10px] font-bold text-[#176EA6] tracking-wider uppercase block mb-1">
                    {item.tag}
                  </span>
                  <div className="font-serif text-base font-bold text-[#0B1C2E] mb-1">
                    {item.title}
                  </div>
                  <p className="text-xs text-[#526579] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPreview && (
        <div 
          className="fixed inset-0 z-50 bg-[#0B1C2E]/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedPreview(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative bg-white rounded-2xl max-w-[620px] w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-[#D4AF37]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#0B1C2E] text-white p-4 flex items-center justify-between border-b border-[#D4AF37]/30">
              <div>
                <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider block">
                  {selectedPreview.tag}
                </span>
                <h4 className="font-serif text-base sm:text-lg font-bold text-white">
                  {selectedPreview.title}
                </h4>
              </div>
              <button
                onClick={() => setSelectedPreview(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-lg font-bold"
                aria-label="Zatvori pregled"
              >
                ✕
              </button>
            </div>
            <div className="p-3 sm:p-5 overflow-y-auto bg-[#F5F5F2] flex items-center justify-center">
              <picture className="w-full">
                <source srcSet={selectedPreview.src} type="image/svg+xml" />
                <img 
                  src={selectedPreview.fallback} 
                  alt={selectedPreview.alt}
                  className="w-full h-auto max-h-[65vh] object-contain rounded-lg shadow-sm border border-[#E1EAF2] mx-auto block"
                />
              </picture>
            </div>
            <div className="p-3 bg-white border-t border-[#E1EAF2] text-center text-xs text-[#526579]">
              {selectedPreview.desc}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
