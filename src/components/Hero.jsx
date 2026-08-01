import React from 'react';

export default function Hero() {
  return (
    <header className="relative pt-32 pb-20 md:pt-40 md:pb-24 px-6 text-center overflow-hidden bg-gradient-to-b from-[#A8D4F7] via-[#EAF4FD] to-[#F7F5F0]">
      {/* Header Logo */}
      <div className="absolute top-8 left-8 md:left-12 flex items-center gap-3">
        <img src="/logo-ml.jpg" alt="Miran Let Logo" className="h-[52px] w-auto rounded-xl shadow-md" />
      </div>

      <div className="max-w-[1100px] mx-auto flex flex-col items-center">
        <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-[#4A5A68] mb-4 block">
          VODIČ ZA SIGURNO PUTOVANJE
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.15] text-[#16232F] mb-5 max-w-[900px] mx-auto text-center">
          Uđi u avion s osjećajem kontrole.
        </h1>

        <p className="font-sans text-lg sm:text-xl md:text-2xl text-[#4A5A68] max-w-[750px] mx-auto mb-8 font-normal leading-[1.65] text-center">
          Audio protokol i vodič koji ti normalno objašnjava što se događa u avionu, i daje alat koji koristiš u trenutku straha. Bez tableta. Bez terapije. Bez čekanja.
        </p>

        <div className="font-sans text-3xl md:text-4xl font-semibold text-[#16232F] mb-4">
          Samo 19,99 €
        </div>

        <a 
          href="https://miranlet.lemonsqueezy.com/checkout/buy/63565eee-96d4-4d01-b339-ecfbe56cab97" 
          className="inline-flex items-center justify-center bg-[#C8A84A] hover:bg-[#B8983A] text-[#16232F] font-bold text-lg uppercase tracking-[0.08em] py-5 px-10 md:px-12 rounded-xl transition-all duration-300 shadow-lg shadow-[#C8A84A]/25 hover:-translate-y-0.5 w-full sm:w-auto"
        >
          PREUZMI MIRAN LET · 19,99 €
        </a>

        <div className="text-sm text-[#4A5A68] mt-3.5 font-medium">
          Pristup odmah nakon uplate · Jamstvo do tvog leta
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm font-semibold text-[#4A5A68]">
          <span><span className="text-[#16232F]">✓</span> Pristup odmah</span>
          <span>·</span>
          <span><span className="text-[#16232F]">✓</span> PDF + MP3</span>
          <span>·</span>
          <span><span class="text-[#16232F]">✓</span> Sigurno plaćanje</span>
        </div>

        <div className="max-w-[680px] w-full mt-12 rounded-xl overflow-hidden shadow-xl border border-[#E4E9EF] bg-white p-2">
          <img src="/landing-pages/bez-tableta/hero-bez-tableta.jpg" alt="Miran Let Hero" className="w-full h-auto block rounded-lg object-cover" />
        </div>
      </div>
    </header>
  );
}
