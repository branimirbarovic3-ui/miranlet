import React from 'react';

export default function Mechanism() {
  const steps = [
    {
      num: '1',
      title: 'PRIJE LETA',
      desc: 'Pripremi pažnju i tijelo prije nego što napetost počne rasti.'
    },
    {
      num: '2',
      title: 'TIJEKOM POLIJETANJA',
      desc: 'Pokreni audio i prati jednu uputu za drugom. Ne moraš pamtiti cijeli sistem.'
    },
    {
      num: '3',
      title: 'KADA OSJETIŠ DA GUBIŠ KONTROLU',
      desc: 'Vrati pažnju na glas, disanje i ono što možeš napraviti upravo sada.'
    }
  ];

  const handleCtaClick = (e) => {
    e.preventDefault();
    const target = document.querySelector('#kupnja');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="kako-radi" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 w-full bg-[#EAF4FD]">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Header */}
        <div className="max-w-[850px] mx-auto text-center mb-10 md:mb-14">
          <span className="font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.14em] text-[#4A5A68] mb-2.5 block">
            SLIJED KORAKA
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#16232F] leading-[1.2]">
            Ne treba ti još jedno uvjeravanje. Treba ti slijed koji možeš pratiti.
          </h2>
        </div>

        {/* 2-Column Grid on Desktop / Single Column Stack on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-5 flex flex-col items-center w-full">
            <div className="w-full max-w-[420px] bg-white p-3.5 sm:p-4 rounded-2xl border-2 border-[#C8A84A] shadow-md">
              <img 
                src="/images/miran-let-audio-u-avionu.png" 
                alt="Audio protokol tijekom leta u avionu"
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

          {/* Right Column: 3 Steps Stacked */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5 text-left w-full">
            {steps.map((step) => (
              <div 
                key={step.num}
                className="bg-white border-2 border-[#C8A84A] rounded-2xl p-5 sm:p-6 shadow-sm flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#16232F] text-[#C8A84A] font-bold text-base sm:text-lg flex items-center justify-center shrink-0 border border-[#C8A84A]">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#16232F] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[#4A5A68] text-sm sm:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-3 sm:pt-4">
              <a
                href="#kupnja"
                onClick={handleCtaClick}
                className="w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center bg-[#C8A84A] hover:bg-[#B8983A] text-[#16232F] font-bold text-base uppercase tracking-wider py-4 px-8 rounded-xl transition-all shadow-md shadow-[#C8A84A]/20 hover:-translate-y-0.5 text-center active:scale-[0.99]"
              >
                ŽELIM SVOJ PLAN ZA LET
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
