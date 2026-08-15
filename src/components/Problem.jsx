import React from 'react';

export default function Problem() {
  const cards = [
    {
      title: 'PRATIŠ SVE OKO SEBE',
      desc: 'Svaki zvuk i pokret postaju nešto što moraš provjeriti.',
      number: '01'
    },
    {
      title: 'POKUŠAVAŠ SE SMIRITI NA SILU',
      desc: 'Što se više trudiš zaustaviti reakciju, to više pažnje daješ upravo njoj.',
      number: '02'
    },
    {
      title: 'ČEKAŠ DA LET ZAVRŠI',
      desc: 'Ne putuješ, samo izdržavaš dok ponovno ne budeš na zemlji.',
      number: '03'
    }
  ];

  return (
    <section className="py-20 md:py-28 px-6 w-full bg-[#F7F5F0]">
      <div className="max-w-[1100px] mx-auto text-left">
        
        {/* Section Header */}
        <div className="max-w-[800px] mb-12 md:mb-16">
          <span className="font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.14em] text-[#4A5A68] mb-3 block">
            TRENUTAK KADA KRENE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#16232F] font-semibold leading-[1.2] mb-6">
            Let ne postaje težak tek kad sjedneš u avion.
          </h2>
          <p className="font-sans text-base md:text-lg text-[#4A5A68] leading-relaxed">
            Možda počne nekoliko dana ranije. Možda tek kad se vrata zatvore ili avion počne tresti. Problem nije u tome što ne znaš dovoljno o avionima. Problem je što u tom trenutku nemaš jasan sljedeći korak.
          </p>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div 
              key={card.number} 
              className="bg-white border-2 border-[#C8A84A] rounded-2xl p-7 md:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="text-xs font-mono font-bold text-[#C8A84A] tracking-wider mb-4">
                  FAZA {card.number}
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-[#16232F] mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-[#4A5A68] text-base leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
