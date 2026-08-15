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
    <section className="py-20 md:py-28 px-6 w-full bg-[#F7F5F0]">
      <div className="max-w-[1100px] mx-auto text-center">
        
        {/* Section Header */}
        <div className="max-w-[700px] mx-auto mb-14 md:mb-16">
          <span className="font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.14em] text-[#4A5A68] mb-3 block">
            JEDNOSTAVAN PROCES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#16232F]">
            Jedna kupnja. Sve ti ostaje.
          </h2>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left">
          {steps.map((step) => (
            <div 
              key={step.num}
              className="bg-white border-2 border-[#C8A84A] rounded-2xl p-7 md:p-8 shadow-sm relative flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#16232F] text-[#C8A84A] font-bold text-xl flex items-center justify-center mb-6 border border-[#C8A84A]">
                  {step.num}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#16232F] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#4A5A68] text-sm md:text-base leading-relaxed">
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
