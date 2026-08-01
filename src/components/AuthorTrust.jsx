import React, { useState } from 'react';

export default function AuthorTrust() {
  const [openChapter, setOpenChapter] = useState(0);

  const chapters = [
    {
      title: "Kako je sve počelo: Sjedalo 14F i pritisak pri polijetanju",
      subtitle: "Ovo nije nastalo iz tečaja. Niti iz diplome.",
      content: "Nastalo je zato što sam godinama sjedio u sjedalu 14F i posezao za svime što bi mi moglo utrnuti osjetila pri polijetanju. Pomislio sam: zašto nitko nikad normalno nije objasnio što se tu zapravo događa? Ja sam tip koji mora razumjeti stvari da bi funkcionirao. Kad nešto ne razumijem, mozak vrti i gradi scenarije koje nitko nije tražio."
    },
    {
      title: "Potraga za odgovorima: Znanost umjesto kemije",
      subtitle: "Istraživanje neurobiologije straha i avijacijske psihologije.",
      content: "Počeo sam istraživati neurobiologiju straha, percepciju rizika i razloge zašto racionalni um zna jednu stvar, a tijelo radi suprotno. Čitao sam materijale pilota, programe aviokompanija i istraživanja psihologa kako bih pronašao konkretan alat koji stišava reakciju živčanog sustava."
    },
    {
      title: "Spoznaja koja mijenja sve: Nelagoda nije opasnost",
      subtitle: "Strah od letenja nije problem znanja ili statistike.",
      content: "Shvatio sam ključnu stvar: stalna nelagoda koju osjećaš nije strah od opasnosti, nego strah od nepoznatog. Statistički podaci ne pomažu jer amigdala ne čita statistiku, ona uči kroz tijelo i reakciju. Zato je nastao ovaj vodič: da ti ponudi konkretan alat koji možeš primijeniti već na sljedećem letu."
    },
    {
      title: "Glavni cilj: Naučiti letjeti sa strahom",
      subtitle: "Ostati prisutan, staložen i miran bez obzira na fazu leta.",
      content: "Cilj ovog protokola nije eliminirati strah magijom ili lažnim obećanjima. Cilj je naučiti letjeti s njim, ostati prisutan, staložen i čist u svakom trenutku putovanja."
    }
  ];

  return (
    <section className="py-20 md:py-28 px-6 w-full bg-white" id="autor">
      <div className="max-w-[800px] mx-auto text-left">
        <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-[#4A5A68] mb-4 block text-center">
          TKO STOJI IZA PROJEKTA
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-[#16232F] mb-10 font-semibold text-center">
          Zašto postoji Miran Let
        </h2>

        {/* Author Bio Header */}
        <div className="flex items-center gap-5 p-6 mb-8 bg-[#F7F5F0] rounded-2xl border border-[#E4E9EF]">
          <div className="w-20 h-20 rounded-full overflow-hidden border border-[#E4E9EF] shrink-0">
            <img 
              src="/brane.png" 
              alt="Brane - Autor Protokola" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-[#16232F] font-bold text-xl">Brane</h3>
            <p className="text-[#4A5A68] text-xs font-semibold uppercase tracking-wider">Autor Protokola · Priča iz prve ruke</p>
          </div>
        </div>

        {/* Interactive Story Accordion */}
        <div className="space-y-4">
          {chapters.map((chapter, idx) => {
            const isOpen = openChapter === idx;
            return (
              <div 
                key={idx}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-[#16232F] bg-[#F7F5F0]/50 shadow-sm' : 'border-[#E4E9EF] bg-white hover:border-[#16232F]/40'
                }`}
              >
                <button
                  onClick={() => setOpenChapter(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-start gap-4 focus:outline-none"
                >
                  <div>
                    <span className="text-xs font-semibold text-[#4A5A68] uppercase tracking-wider block mb-1">
                      POGLAVLJE 0{idx + 1}
                    </span>
                    <h4 className="font-serif text-xl md:text-2xl font-semibold text-[#16232F] leading-snug">
                      {chapter.title}
                    </h4>
                    <p className="text-sm text-[#4A5A68] font-medium mt-1">
                      {chapter.subtitle}
                    </p>
                  </div>

                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-lg font-semibold shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-[#16232F] text-white rotate-45' : 'bg-[#EAF4FD] text-[#16232F]'
                  }`}>
                    +
                  </span>
                </button>

                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 px-6 pb-6 pt-2' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-[#4A5A68] text-base md:text-lg leading-relaxed border-t border-[#E4E9EF] pt-4">
                    {chapter.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="border-t border-[#E4E9EF] pt-6 mt-10">
          <p className="text-[#4A5A68] text-xs italic leading-relaxed text-center">
            *Napomena: Miran Let je edukativni alat baziran na osobnom istraživanju i iskustvu autora. Nije medicinski tretman, psihološka terapija ni zamjena za stručnu pomoć. Ako tvoj strah značajno utječe na svakodnevni život, preporučujemo da se posavjetuješ s licenciranim stručnjakom.*
          </p>
        </div>
      </div>
    </section>
  );
}
