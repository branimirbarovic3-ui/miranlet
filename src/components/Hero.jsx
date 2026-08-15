import React from 'react';

export default function Hero() {
  return (
    <section 
      className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #DDEFFC 0%, #F2F8FC 55%, #FFFFFF 100%)'
      }}
    >
      {/* Subtle Abstract Flight Path / Contrail Vector in Background */}
      <svg 
        className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-40" 
        viewBox="0 0 1200 600" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path 
          d="M-50 450 C250 400, 500 200, 1250 80" 
          stroke="#176EA6" 
          strokeWidth="1.5" 
          strokeDasharray="6 6" 
          strokeOpacity="0.4"
        />
        <path 
          d="M-50 480 C300 420, 600 240, 1250 120" 
          stroke="#D4AF37" 
          strokeWidth="1" 
          strokeOpacity="0.3"
        />
      </svg>

      <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-7 text-left flex flex-col items-start w-full">
          <span className="inline-block font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] text-[#176EA6] bg-[#176EA6]/10 px-3 py-1.5 rounded-full mb-3 sm:mb-4">
            VOĐENI AUDIO ZA LET
          </span>

          <h1 className="font-serif text-[38px] sm:text-[44px] md:text-[56px] lg:text-[62px] font-bold leading-[1.12] text-[#0B1C2E] mb-4 sm:mb-5 max-w-[620px]">
            Uđi u avion s planom koji možeš pratiti.
          </h1>

          <p className="font-sans text-base sm:text-lg md:text-[19px] text-[#0B1C2E]/90 mb-6 sm:mb-8 font-normal leading-[1.6] max-w-[620px]">
            Miran Let je vođeni audio protokol koji slušaš prije polijetanja, tijekom leta i u trenucima kada osjetiš da gubiš kontrolu. Preuzmeš ga odmah i slušaš bez interneta.
          </p>

          {/* Primary CTA (1 of 3 on page) */}
          <div className="w-full sm:w-auto">
            <a 
              href="https://miranlet.lemonsqueezy.com/checkout/buy/63565eee-96d4-4d01-b339-ecfbe56cab97" 
              className="btn-gold w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center text-base md:text-lg uppercase tracking-[0.06em] py-4 px-8 sm:px-10 rounded-lg text-center"
            >
              PREUZMI MIRAN LET · 19,99 €
            </a>

            <div className="text-xs sm:text-sm text-[#526579] mt-3 font-medium text-left">
              Jednokratno plaćanje · Trajni pristup · Dostupno odmah
            </div>
          </div>
        </div>

        {/* Right Column: Hero Bundle Mockup in Aviation Navy/Gold Frame */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center w-full mt-2 lg:mt-0">
          <div className="w-full max-w-[460px] bg-[#0B1C2E] p-3.5 sm:p-5 rounded-2xl border border-[#D4AF37] shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1C2E] via-[#123F64] to-[#0B1C2E] opacity-90"></div>
            <img 
              src="/images/miran-let-hero-bundle.png" 
              alt="Miran Let komplet - audio protokol, digitalni vodič i alati"
              width="640"
              height="640"
              loading="eager"
              fetchpriority="high"
              className="w-full h-auto object-contain max-h-[340px] sm:max-h-[400px] block mx-auto relative z-10 drop-shadow-lg"
            />
          </div>
          <p className="text-xs text-[#526579] mt-2.5 italic text-center">
            Ilustrativni prikaz digitalnog proizvoda.
          </p>
        </div>

      </div>
    </section>
  );
}
