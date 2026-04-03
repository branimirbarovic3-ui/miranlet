import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function FaqItem({ question, answer, last = false }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`group ${!last ? 'border-b border-gray-100' : ''}`}>
      <button
        className="w-full flex justify-between items-center py-6 px-7 text-left focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <span className="font-serif text-[16px] md:text-[17px] text-[#060A12] group-hover:text-gold transition-colors pr-6 font-bold leading-snug">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[#D4AF37]/40 transition-transform duration-500 shrink-0 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-[#060A12]/55 leading-relaxed font-light text-[15px] px-7 pr-12">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-28 md:py-36 px-6 w-full bg-[#FAFAF8]">
      <div className="max-w-[720px] mx-auto text-left">
        <div className="text-center mb-14">
          <span className="text-[#D4AF37] uppercase tracking-[0.25em] text-[10px] font-bold mb-5 block">PITANJA I ODGOVORI</span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#060A12] font-bold leading-[1.15]">
            Brzi odgovori.
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <FaqItem
            question="Imam nelagodu, ne pravi strah - je li ovo za mene?"
            answer="Posebno je za tebe. Česti putnici s blagom nelagodom najviše profitiraju jer već lete - samo lošije nego što trebaju. Sve tehnike rade jednako dobro za nelagodu 3/10 kao i za strah 8/10."
          />
          <FaqItem
            question="Kada čitati - tjedan dana prije ili tijekom leta?"
            answer="Idealno tjedan dana prije - imaš dovoljno vremena da prođeš sve i da se vježbe usidre. Ali referentne kartice i brze tehnike funkcioniraju i u čekaonici i u zraku."
          />
          <FaqItem
            question="Je li ovo zamjena za terapiju?"
            answer="Nije. Ako strah od letenja ozbiljno narušava kvalitetu života, razgovor s CBT ili ACT terapeutom je vrijedno ulaganje. Miran Let je odlična osnova i mnogi ga koriste paralelno s terapijom."
          />
          <FaqItem
            question="Mogu li koristiti ovo dok letim čak i bez interneta?"
            answer="Da, i upravo za to je napravljeno. Poslije kupnje dobivaš instant download. MP3 datoteke i PDF možeš preuzeti na mobitel unaprijed. Sve radi offline, bez ikakve veze. Uključiš slušalice u trenutku kad počne napetost i pustiš audio vođenje. Radi na 10.000 metara jednako kao i u kauču kod kuće."
          />
          <FaqItem
            question="Što ako mi ne pomogne? Postoji li jamstvo?"
            answer="Da. Imamo 100% jamstvo povrata novca u prvih 30 dana. Ako osjećaš da metodologija ne radi za tebe, samo pošalji mail na podrska@miranlet.com i vraćamo puni iznos. Bez pitanja i bez komplikacija."
            last
          />
        </div>
      </div>
    </section>
  );
}
