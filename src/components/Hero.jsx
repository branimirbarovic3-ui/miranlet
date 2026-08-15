import React from 'react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#A8D4F7] via-[#EAF4FD] to-[#F7F5F0]">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left / Top Column: Kicker, Title (>= 34px), Description, Full-Width CTA */}
        <div className="lg:col-span-7 text-left flex flex-col items-start w-full">
          <span className="inline-block font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.14em] text-[#4A5A68] bg-[#16232F]/5 px-3 py-1.5 rounded-full mb-3.5">
            VOĐENI AUDIO ZA LET
          </span>

          <h1 className="font-serif text-[34px] sm:text-4xl md:text-5xl lg:text-[54px] font-semibold leading-[1.15] text-[#16232F] mb-4 sm:mb-5">
            Uđi u avion s planom koji možeš pratiti.
          </h1>

          <p className="font-sans text-base sm:text-lg md:text-xl text-[#4A5A68] mb-6 sm:mb-8 font-normal leading-[1.65] max-w-[620px]">
            Miran Let je vođeni audio protokol koji slušaš prije polijetanja, tijekom leta i u trenucima kada osjetiš da gubiš kontrolu. Preuzmeš ga odmah i slušaš bez interneta.
          </p>

          {/* Primary CTA Button (min 52px, full width on mobile) */}
          <div className="w-full sm:w-auto">
            <a 
              href="https://miranlet.lemonsqueezy.com/checkout/buy/63565eee-96d4-4d01-b339-ecfbe56cab97" 
              className="w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center bg-[#C8A84A] hover:bg-[#B8983A] text-[#16232F] font-bold text-base md:text-lg uppercase tracking-[0.08em] py-4 px-6 sm:px-10 rounded-xl transition-all duration-300 shadow-lg shadow-[#C8A84A]/25 hover:-translate-y-0.5 text-center active:scale-[0.99]"
            >
              PREUZMI MIRAN LET · 19,99 €
            </a>

            <div className="text-xs sm:text-sm text-[#4A5A68] mt-3 font-medium text-left">
              Jednokratno plaćanje · Trajni pristup · Dostupno odmah
            </div>
          </div>
        </div>

        {/* Right / Bottom Column: Hero Bundle Mockup */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center w-full mt-4 lg:mt-0">
          <div className="w-full max-w-[480px] bg-white/80 backdrop-blur-sm p-3.5 sm:p-5 rounded-2xl border-2 border-[#C8A84A] shadow-xl">
            <img 
              src="/images/miran-let-hero-bundle.png" 
              alt="Miran Let komplet - audio protokol, digitalni vodič i alati"
              width="640"
              height="640"
              loading="eager"
              fetchpriority="high"
              className="w-full h-auto object-contain max-h-[340px] sm:max-h-[420px] block mx-auto drop-shadow-md"
            />
          </div>
          <p className="text-xs text-[#4A5A68] mt-2.5 italic text-center">
            Ilustrativni prikaz digitalnog proizvoda.
          </p>
        </div>

      </div>
    </section>
  );
}
