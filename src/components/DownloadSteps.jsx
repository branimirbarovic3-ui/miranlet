import React from 'react';

export default function DownloadSteps() {
  const steps = [
    {
      num: '1',
      title: 'ZAVRŠIŠ SIGURNU KUPNJU',
      desc: 'Plaćanje se obrađuje preko Lemon Squeezyja.'
    },
    {
      num: '2',
      title: 'ODMAH DOBIVAŠ PRISTUP',
      desc: 'Link za preuzimanje stiže nakon završene kupnje.'
    },
    {
      num: '3',
      title: 'SPREMIŠ SADRŽAJ NA TELEFON',
      desc: 'Audio i alate nosiš sa sobom na sljedeći let.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 w-full bg-[#F7F5F0]">
      <div className="max-w-[1100px] mx-auto text-center">
        
        {/* Section Header */}
        <div className="max-w-[700px] mx-auto mb-10 md:mb-14">
          <span className="font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.14em] text-[#4A5A68] mb-2.5 block">
            JEDNOSTAVAN PROCES
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#16232F]">
            Jedna kupnja. Sve ti ostaje.
          </h2>
        </div>

        {/* 3 Step Cards - Stacked Vertically on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-left">
          {steps.map((step) => (
            <div 
              key={step.num}
              className="bg-white border-2 border-[#C8A84A] rounded-2xl p-6 sm:p-7 md:p-8 shadow-sm relative flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#16232F] text-[#C8A84A] font-bold text-lg sm:text-xl flex items-center justify-center mb-4 sm:mb-6 border border-[#C8A84A]">
                  {step.num}
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#16232F] mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-[#4A5A68] text-sm sm:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
