import React from 'react';

export default function Mechanism() {
  const steps = [
    {
      title: "Smiruješ tijelo",
      desc: "Ne pokušavaš na silu smiriti sebe. Prvo spuštaš fizičku napetost kroz disanje, ritam i vođeni fokus."
    },
    {
      title: "Prekidaš spiralu misli",
      desc: "Kad krene \"što ako...\", protokol ti daje sljedeći konkretan korak umjesto da ostaneš zarobljen u vlastitim mislima."
    },
    {
      title: "Vraćaš kontrolu",
      desc: "Dobivaš jednostavnu rutinu koju pratiš prije polijetanja, tokom leta i kad osjetiš da napetost raste."
    }
  ];

  return (
    <section className="py-20 md:py-28 px-6 w-full bg-[#EAF4FD]">
      <div className="max-w-[1100px] mx-auto text-center">
        <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-[#4A5A68] mb-4 block">
          KRAĆI PUT DO MIRA
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-4 text-[#16232F]">
          Kako točno funkcionira protokol
        </h2>
        <p className="text-[#4A5A68] text-lg max-w-2xl mx-auto mb-12 text-center">
          Ne moraš razmišljati što trebaš napraviti. Imaš jasan slijed koji te vodi.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white border border-[#C8A84A] p-8 rounded-xl shadow-sm"
            >
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
