import React from 'react';

export default function AuthorTrust() {
  return (
    <section className="py-20 md:py-28 px-6 w-full bg-white" id="autor">
      <div className="max-w-[760px] mx-auto text-left">
        <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-[#4A5A68] mb-4 block text-center">
          TKO STOJI IZA PROJEKTA
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-[#16232F] mb-10 font-semibold text-center">
          Zašto postoji Miran Let
        </h2>

        <div className="flex flex-col items-center gap-8 mb-10">
          <div className="text-center">
            <div className="w-28 h-28 rounded-full overflow-hidden border border-[#E4E9EF] mx-auto mb-3">
              <img 
                src="/brane.png" 
                alt="Brane - Autor Protokola" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[#16232F] font-bold text-lg">Brane</p>
            <p className="text-[#4A5A68] text-xs font-semibold uppercase tracking-wider">Autor Protokola</p>
          </div>

          <div className="text-[#4A5A68] text-lg leading-[1.8] space-y-6 text-left">
            <p className="font-serif italic text-xl text-[#16232F] border-l-4 border-[#16232F] pl-4">
              Ovo nije nastalo iz tečaja. Niti iz diplome.
            </p>
            
            <p>
              Nastalo je zato što sam godinama sjedio u sjedalu 14F i posezao za svime što bi mi moglo utrnuti osjetila pri polijetanju.
            </p>

            <p>
              Shvatio sam da kemija ne rješava problem jer amigdala uči da si preživio let samo zato što si bio pod utjecajem. Želio sam alat s kojim mogu ostati čist, prisutan i miran.
            </p>

            <p className="font-bold text-[#16232F]">
              Cilj nije eliminirati strah. Cilj je naučiti letjeti s njim.
            </p>
          </div>
        </div>

        <div className="border-t border-[#E4E9EF] pt-6 mt-8">
          <p className="text-[#4A5A68] text-xs italic leading-relaxed text-center">
            *Napomena: Miran Let je edukativni alat baziran na osobnom istraživanju i iskustvu autora. Nije medicinski tretman, psihološka terapija ni zamjena za stručnu pomoć. Ako tvoj strah značajno utječe na svakodnevni život, preporučujemo da se posavjetuješ s licenciranim stručnjakom.*
          </p>
        </div>
      </div>
    </section>
  );
}
