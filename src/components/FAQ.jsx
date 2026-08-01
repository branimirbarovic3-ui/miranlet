import React, { useState } from 'react';

function FaqItem({ question, answer, last = false }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`group ${!last ? 'border-b border-[#E4E9EF]' : ''}`}>
      <button
        className="w-full flex justify-between items-center py-5 px-6 text-left focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <span className="font-sans text-[17px] text-[#16232F] font-semibold pr-6">{question}</span>
        <span className={`text-xl text-[#4A5A68] transition-transform duration-300 shrink-0 select-none ${open ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100 pb-5 px-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-[#4A5A68] leading-relaxed text-[15px]">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const questions = [
    {
      question: "Je li audio na hrvatskom jeziku?",
      answer: "Da, cijeli audio protokol je snimljen na hrvatskom jeziku, razumljiv svim govornicima u regiji."
    },
    {
      question: "Treba li mi internet u avionu?",
      answer: "Ne. Sve materijale preuzimaš prije leta. digitalni vodič i audio protokol rade offline na tvom mobitelu, bez interneta i bez WiFi mreže."
    },
    {
      question: "Koliko traje audio protokol?",
      answer: "Glavni audio protokol traje oko 20 minuta. Dodatni audio materijali pokrivaju specifične situacije kao što su turbulencija, polijetanje i čekanje na pisti."
    },
    {
      question: "Pomaže li ovo kod teške fobije?",
      answer: "Miran Let je dizajniran za ljude koji se boje letenja, od blage nelagode do izraženog straha. Nije zamjena za stručnu psihološku pomoć. Ako tvoj strah sprječava svakodnevno funkcioniranje, preporučujemo posjet licenciranom terapeutu."
    },
    {
      question: "Što ako ne pomogne?",
      answer: "Postoji jamstvo povrata novca. Ako nakon sljedećeg leta kažeš da ti nije pomoglo, javi se i novac se vraća, bez pitanja."
    },
    {
      question: "Mogu li slušati s običnim slušalicama u avionu?",
      answer: "Da. Bilo koje žične ili bežične slušalice rade savršeno čim preuzmeš MP3 zvučne zapise."
    }
  ];

  return (
    <section className="py-20 md:py-28 px-6 w-full bg-[#F7F5F0]" id="faq">
      <div className="max-w-[720px] mx-auto text-left">
        <div className="text-center mb-10">
          <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-[#4A5A68] mb-3 block">ČESTA PITANJA</span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#16232F] font-semibold">
            Često postavljana pitanja
          </h2>
        </div>

        <div className="bg-white rounded-xl border border-[#E4E9EF] overflow-hidden">
          {questions.map((q, idx) => (
            <FaqItem
              key={idx}
              question={q.question}
              answer={q.answer}
              last={idx === questions.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
