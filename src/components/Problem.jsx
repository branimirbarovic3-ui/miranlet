import React from 'react';

export default function Problem() {
  return (
    <section className="py-20 md:py-28 px-6 w-full bg-[#F7F5F0]">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <div className="order-1 text-left">
          <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-[#4A5A68] mb-4 block">
            PROBLEM I PRITISAK
          </span>

          <h2 className="font-serif text-3xl md:text-5xl text-[#16232F] mb-6 font-semibold leading-[1.2]">
            Ako te strah uhvati čim se vrata zatvore...
          </h2>

          <div className="space-y-4 text-[#4A5A68] text-lg leading-relaxed mb-6">
            <p>Tijelo se napne, misli krenu ubrzano, a ti pokušavaš ostati smiren iako znaš da je let siguran.</p>
            <p>Iscrpljujuće je glumiti staloženost dok iznutra proživljavaš unutrašnju oluju i brojiš minute do slijetanja.</p>
          </div>

          <ul className="space-y-3 mb-8">
            {[
              'Pratiš svaki nepoznati zvuk u avionu',
              'Teško se opuštaš u sjedalu',
              'Stalno tražiš znak da je sve u redu',
              'Želiš samo da let što prije završi'
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 items-center text-[#16232F] font-semibold text-lg">
                <span className="text-[#16232F] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-[#EAF4FD] border-l-4 border-[#C8A84A] p-6 rounded-r-xl font-semibold text-lg text-[#16232F] leading-relaxed">
            Nije problem u tome što se bojiš. Problem je što način na koji rješavaš strah uzima previše od tvog putovanja.
          </div>
        </div>

        <div className="order-2 relative border-2 border-[#C8A84A] bg-white p-2 rounded-xl shadow-lg">
          <img
            src="/problem.png"
            alt="Iskustvo leta"
            className="w-full h-auto object-cover rounded-lg block"
          />
        </div>

      </div>
    </section>
  );
}
