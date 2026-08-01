import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-16 w-full bg-white" id="testimonials">
      <div className="max-w-[760px] mx-auto text-center">
        <div className="mb-12">
          <span className="text-[#D4AF37] uppercase tracking-[0.25em] text-[10px] font-black mb-5 block">DOJMOVI I REZULTATI</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#060A12] font-bold leading-tight">
            Iskustva korisnika
          </h2>
        </div>

        {/* Premium Invitation Card */}
        <div className="bg-[#FAFAF8] border border-gray-100 p-8 md:p-12 rounded-[32px] shadow-sm flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-black text-xl mb-6 select-none">
            ★
          </div>
          
          <h3 className="font-serif text-xl md:text-2xl font-bold mb-4 text-[#060A12]">
            Ovo je novi proizvod · budite među prvima
          </h3>
          
          <p className="text-[#060A12]/60 text-base md:text-lg leading-relaxed max-w-xl mb-8 font-light">
            Miran Let je tek lansiran kako bi pomogao ljudima koji se bore sa strahom od letenja na našim prostorima. Umjesto lažnih recenzija, želimo prikupiti stvarna i autentična iskustva. 
          </p>

          <div className="bg-[#D4AF37]/5 rounded-2xl p-6 border border-[#D4AF37]/10 w-full text-left">
            <h4 className="font-bold text-sm md:text-base text-[#060A12] mb-2">🎁 Podijeli svoje iskustvo i preuzmi protokol besplatno:</h4>
            <p className="text-[#060A12]/70 text-xs md:text-sm leading-relaxed">
              Ako preuzmeš protokol, isprobaš ga na svom sljedećem letu i pošalješ nam kratku povratnu informaciju na <strong className="text-[#c5a133]">podrska@miranlet.com</strong>, vratit ćemo ti cjelokupan iznos uplate natrag kao zahvalu za tvoje iskreno mišljenje.
            </p>
          </div>
        </div>

        {/* Mandatory Testimonial Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-[#060A12]/40 text-[11px] md:text-xs italic leading-relaxed max-w-lg mx-auto">
            *Iskustva su individualna. Prikazani dojmovi su osobna mišljenja korisnika i ne jamče iste rezultate za sve.*
          </p>
        </div>
      </div>
    </section>
  );
}
