import React, { useState } from 'react';

function FaqItem({ question, answer, last = false }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`group ${!last ? 'border-b border-gray-100' : ''}`}>
      <button
        className="w-full flex justify-between items-center py-6 px-7 text-left focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <span className="font-serif text-[16px] md:text-[17px] text-[#060A12] group-hover:text-gold transition-colors pr-6 font-bold leading-snug">{question}</span>
        <span className={`text-2xl text-[#D4AF37] font-light transition-transform duration-300 shrink-0 leading-none select-none ${open ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-[#060A12]/65 leading-relaxed font-light text-[15px] px-7 pr-12">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const questions = [
    {
      question: "Da li je audio na hrvatskom/srpskom/bosanskom?",
      answer: "Da, cijeli audio protokol je snimljen na hrvatskom jeziku, razumljiv svim govornicima hrvatskog, srpskog i bosanskog."
    },
    {
      question: "Treba li mi internet u avionu?",
      answer: "Ne. Sve materijale preuzimaš prije leta — PDF vodič i audio protokol rade offline, bez interneta, bez WiFi-a."
    },
    {
      question: "Koliko traje audio protokol?",
      answer: "Glavni audio protokol traje oko 20 minuta, što odgovara duljini većine letova na Balkanu. Dodatni audio materijali pokrivaju specifične situacije (turbulencija, slijetanje, čekanje na pisti)."
    },
    {
      question: "Pomaže li ovo kod teške fobije?",
      answer: "Miran Let je dizajniran za ljude koji se boje letenja — od blage nelagode do izraženog straha. Nije zamjena za stručnu psihološku pomoć. Ako tvoj strah sprječava svakodnevno funkcioniranje, preporučujemo da se posavjetuješ s licenciranim terapeutom."
    },
    {
      question: "Što ako ne pomogne?",
      answer: "Postoji garancija povrata novca. Ako nakon sljedećeg leta ne osjećaš nikakvo poboljšanje, javi se i vraćamo ti novac — bez pitanja."
    },
    {
      question: "Mogu li slušati s običnim slušalicama u avionu?",
      answer: "Da. Bilo koje žične ili bežične slušalice rade savršeno. Preporučujemo slušalice koje pokrivaju uši za bolje izoliranje od buke motora."
    },
    {
      question: "Radi li ovo za djecu?",
      answer: "Audio protokol je namijenjen odraslima. Djeca mogu slušati uz pratnju roditelja, ali vodič je pisan jezikom i tonom prilagođenim odraslima."
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 w-full bg-[#FAFAF8]" id="faq">
      <div className="max-w-[720px] mx-auto text-left">
        <div className="text-center mb-14">
          <span className="text-[#D4AF37] uppercase tracking-[0.25em] text-[10px] font-bold mb-5 block">ČESTA PITANJA</span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#060A12] font-bold leading-[1.15]">
            Često postavljana pitanja
          </h2>
        </div>

        <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden">
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
