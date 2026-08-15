import React from 'react';

export default function ProblemSolution() {
  const steps = [
    'Prije leta pripremiš pažnju i tijelo.',
    'Tijekom polijetanja pokreneš audio.',
    'Kada napetost poraste, pratiš jednu uputu za drugom.'
  ];

  return (
    <section id="kako-radi" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 w-full bg-white border-b border-[#E1EAF2]">
      <div className="max-w-[1120px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Image in Aviation Frame */}
          <div className="lg:col-span-5 flex flex-col items-center w-full order-2 lg:order-1">
            <div className="w-full max-w-[440px] bg-[#0B1C2E] p-3 sm:p-4 rounded-2xl border border-[#D4AF37] shadow-md relative overflow-hidden">
              <img 
                src="/images/miran-let-audio-u-avionu.png" 
                alt="Slušanje vođenog audija u zrakoplovu"
                width="640"
                height="640"
                loading="lazy"
                className="w-full h-auto object-contain rounded-xl block max-h-[340px] sm:max-h-[380px] mx-auto"
              />
            </div>
            <p className="text-xs text-[#526579] mt-2 italic text-center">
              Ilustrativni prikaz digitalnog proizvoda.
            </p>
          </div>

          {/* Right Column: Title, Intro & 3 Clear Steps */}
          <div className="lg:col-span-7 text-left flex flex-col items-start w-full order-1 lg:order-2">
            <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] text-[#176EA6] mb-2 block">
              JASAN SLIJED ZA LET
            </span>

            <h2 className="font-serif text-[30px] sm:text-[36px] md:text-[44px] font-bold text-[#0B1C2E] leading-[1.18] mb-4">
              Ne treba ti još jedno uvjeravanje. Treba ti jasan sljedeći korak.
            </h2>

            <p className="font-sans text-base sm:text-[17px] text-[#526579] leading-[1.6] mb-6 max-w-[620px]">
              Let ne postaje težak tek kad sjedneš u avion. Problem nije u tome što ne znaš dovoljno o avionima, nego što u tom trenutku nemaš sistem koji te vodi.
            </p>

            <div className="flex flex-col gap-3.5 w-full max-w-[620px]">
              {steps.map((step, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#F2F8FC] border border-[#E1EAF2]"
                >
                  <div className="w-8 h-8 rounded-full bg-[#0B1C2E] text-[#D4AF37] font-bold text-sm flex items-center justify-center shrink-0 border border-[#D4AF37]">
                    {idx + 1}
                  </div>
                  <span className="font-sans text-base sm:text-[17px] font-medium text-[#0B1C2E]">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
