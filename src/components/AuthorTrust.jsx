import React, { useState } from 'react';

export default function AuthorTrust() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 px-6 w-full bg-white" id="autor">
      <div className="max-w-[800px] mx-auto text-left">
        <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-[#4A5A68] mb-3 block text-center">
          TKO STOJI IZA PROJEKTA
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-[#16232F] mb-8 font-semibold text-center">
          Zašto postoji Miran Let
        </h2>

        {/* Single Dropdown Card for the Entire Section */}
        <div className="border-2 border-[#C8A84A] bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300">
          {/* Card Header (Clickable Toggle) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full p-6 md:p-8 text-left flex flex-col sm:flex-row items-center sm:items-center justify-between gap-6 hover:bg-[#F7F5F0]/60 transition-colors focus:outline-none"
          >
            <div className="flex items-center gap-5 w-full sm:w-auto">
              <div>
                <h3 className="text-[#16232F] font-serif text-xl md:text-2xl font-semibold">
                  Brane Barović <span className="text-sm font-sans font-normal text-[#4A5A68]">· Autor Protokola</span>
                </h3>
                <p className="text-[#4A5A68] text-sm italic mt-0.5">
                  "Ovo nije nastalo iz tečaja. Niti iz diplome..."
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-[#EAF4FD] text-[#16232F] px-4 py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider shrink-0 w-full sm:w-auto justify-center">
              <span>{isOpen ? 'Zatvori priču' : 'Pročitaj priču autora'}</span>
              <span className={`text-base font-bold transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                +
              </span>
            </div>
          </button>

          {/* Collapsible Story Body */}
          <div className={`transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-[2000px] opacity-100 p-6 md:p-8 border-t border-[#E4E9EF]' : 'max-h-0 opacity-0 overflow-hidden p-0'
          }`}>
            <div className="space-y-6 text-[#16232F] text-base md:text-lg leading-relaxed">
              <blockquote className="border-l-4 border-[#C8A84A] pl-5 italic font-serif text-xl md:text-2xl text-[#16232F] my-4">
                Ovo nije nastalo iz tečaja. Niti iz diplome.
              </blockquote>

              <p>
                Nastalo je zato što sam godinama sjedio u avionu i osjetio onu nelagodu u grudima pri polijetanju. Pomislio sam: zašto nitko nikad normalno nije objasnio što se tu zapravo događa?
              </p>

              <p>
                Ja sam tip koji mora razumjeti stvari da bi funkcionirao. Kad nešto ne razumijem, mozak ne staje: vrti, analizira, gradi scenarije koje nitko nije tražio. Letenje je bio savršen problem za takav um. Zatvoren prostor, zvukovi koje nisam znao protumačiti, pokreti koje nisam mogao predvidjeti. Ona tiha stalna misao: ako nešto krene po krivu, ja ne mogu ništa.
              </p>

              <p>
                Počeo sam čitati. O neurobiologiji straha, o percepciji rizika, o tome zašto racionalni um zna jednu stvar, a tijelo radi suprotno. Čitao sam materijale pilota, programe aviokompanija, istraživanja psihologa.
              </p>

              <h4 className="font-serif text-2xl font-semibold text-[#16232F] pt-2">
                I shvatio nešto što mijenja sve.
              </h4>

              <p className="font-semibold italic text-[#C8A84A] text-lg md:text-xl">
                Stalna nelagoda koju osjećaš nije strah od opasnosti. To je strah od nepoznatog.
              </p>

              <p>
                Vjerojatno već znaš da je letenje sigurno. Možda si stotinu puta pročitao da je statistički sigurnije od vožnje. I nije ti pomoglo. To nije tvoja greška, to je dokaz da strah od letenja nije problem znanja. Tvoja amigdala ne čita statistiku. Ona uči kroz tijelo, kroz ritam i kroz osjećaj kontrole.
              </p>

              <p>
                Zato sam složio ovaj protokol. Ne kao teoriju, nego kao praktičan vodič koji držiš u rukama ili slušaš u slušalicama u trenutku kad uđeš u avion. Sve što je meni pomoglo da sjednem na let bez grča u želucu, složeno na jedno mjesto.
              </p>

              {/* Disclaimer */}
              <div className="border-t border-[#E4E9EF] pt-6 mt-8">
                <p className="text-[#4A5A68] text-xs italic leading-relaxed">
                  *Napomena: Miran Let je edukativni alat baziran na osobnom istraživanju i iskustvu autora. Nije medicinski tretman, psihološka terapija ni zamjena za stručnu pomoć. Ako tvoj strah značajno utječe na svakodnevni život, preporučujemo da se posavjetuješ s licenciranim stručnjakom.*
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
