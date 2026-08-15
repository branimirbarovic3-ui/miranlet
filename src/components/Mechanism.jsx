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
    <section id="kako-radi" className="py-20 md:py-28 px-6 w-full bg-[#EAF4FD]">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Header */}
        <div className="max-w-[850px] mx-auto text-center mb-14 md:mb-16">
          <span className="font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.14em] text-[#4A5A68] mb-3 block">
            SLIJED KORAKA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#16232F] leading-[1.2]">
            Ne treba ti još jedno uvjeravanje. Treba ti slijed koji možeš pratiti.
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full bg-white p-3 md:p-4 rounded-2xl border-2 border-[#C8A84A] shadow-md">
              <img 
                src="/images/miran-let-audio-u-avionu.png" 
                alt="Audio protokol tijekom leta u avionu"
                width="640"
                height="640"
                loading="lazy"
                className="w-full h-auto object-contain rounded-xl block max-h-[400px] mx-auto"
              />
            </div>
            <p className="text-xs text-[#4A5A68] mt-3 italic text-center">
              Ilustrativni prikaz digitalnog proizvoda.
            </p>
          </div>

          {/* Right Column: 3 Steps */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            {steps.map((step) => (
              <div 
                key={step.num}
                className="bg-white border-2 border-[#C8A84A] rounded-2xl p-6 md:p-7 shadow-sm flex items-start gap-5 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-[#16232F] text-[#C8A84A] font-bold text-lg flex items-center justify-center shrink-0 border border-[#C8A84A]">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-[#16232F] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#4A5A68] text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <a
                href="#kupnja"
                onClick={handleCtaClick}
                className="inline-flex items-center justify-center bg-[#C8A84A] hover:bg-[#B8983A] text-[#16232F] font-bold text-base uppercase tracking-wider py-4 px-8 rounded-xl transition-all shadow-md shadow-[#C8A84A]/20 hover:-translate-y-0.5"
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
