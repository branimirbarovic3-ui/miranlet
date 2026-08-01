import React from 'react';

export default function Mechanism() {
  const steps = [
    {
      num: "01 / PRIJE LETA",
      title: "Priprema i disanje",
      desc: "Brzi test tipa straha, 30-dnevni plan pripreme i vođena audio vježba disanja za regulaciju vagusnog živca danima unaprijed."
    },
    {
      num: "02 / NA DAN LETA",
      title: "CORE-7 SOS i Takeoff",
      desc: "Takeoff protokol za preživljavanje najtežih prvih 10 minuta i CORE-7 SOS kartica s fizičkim alatima za trenutno smanjenje pulsa."
    },
    {
      num: "03 / U ZRAKU",
      title: "Objašnjenje i turbulencija",
      desc: "Avijacijska objašnjenja faza leta, sigurnosna statistika i turbulencijska kartica koja ti daje mir u trenutku kad avion počne podrhtavati."
    }
  ];

  return (
    <section className="py-20 md:py-28 px-6 w-full bg-[#EAF4FD]">
      <div className="max-w-[1100px] mx-auto text-center">
        <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-[#4A5A68] mb-4 block">
          STRUKTURA RJEŠENJA
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-6 text-[#16232F]">
          Tri sustava za let bez straha
        </h2>
        <p className="text-[#4A5A68] text-lg max-w-2xl mx-auto mb-12 text-center">
          Protokol koji uči tvoje tijelo sigurnosti i daje ti jasne korake za svaku fazu putovanja:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white border border-[#E4E9EF] p-8 rounded-xl shadow-sm"
            >
              <span className="text-[#4A5A68] font-sans font-semibold text-xs tracking-wider block mb-4">
                {step.num}
              </span>
              <h3 className="font-serif text-2xl font-semibold mb-3 text-[#16232F]">
                {step.title}
              </h3>
              <p className="text-[#4A5A68] text-base leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
