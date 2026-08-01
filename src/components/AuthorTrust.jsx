import React from 'react';

export default function AuthorTrust() {
  return (
    <section className="py-20 md:py-28 px-6 w-full bg-white" id="autor">
      <div className="max-w-[780px] mx-auto text-left">
        <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-[#4A5A68] mb-4 block text-center">
          TKO STOJI IZA PROJEKTA
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-[#16232F] mb-12 font-semibold text-center">
          Zašto postoji Miran Let
        </h2>

        {/* Author Bio Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6 p-6 mb-10 bg-[#F7F5F0] rounded-2xl border-2 border-[#C8A84A]">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#C8A84A] shrink-0 shadow-md">
            <img 
              src="/brane.png" 
              alt="Brane - Autor Protokola" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-[#16232F] font-serif text-2xl font-semibold mb-1">Brane</h3>
            <p className="text-[#4A5A68] text-xs font-semibold uppercase tracking-wider">Autor Protokola</p>
          </div>
        </div>

        {/* Main Narrative Text */}
        <div className="space-y-6 text-[#16232F] text-base md:text-lg leading-relaxed">
          <blockquote className="border-l-4 border-[#C8A84A] pl-5 italic font-serif text-xl md:text-2xl text-[#16232F] my-6">
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

          <h3 className="font-serif text-2xl font-semibold text-[#16232F] pt-4">
            I shvatio nešto što mijenja sve.
          </h3>

          <p className="font-semibold italic text-[#C8A84A] text-lg md:text-xl">
            Stalna nelagoda koju osjećaš nije strah od opasnosti. To je strah od nepoznatog.
          </p>

          <p>
            Vjerojatno već znaš da je letenje sigurno. Možda si stotinu puta pročitao da je statistički sigurnije od vožnje. I nije ti pomoglo. To nije tvoja greška, to je dokaz da strah od letenja nije problem znanja. Tvoja amigdala ne čita statistiku. Ona uči kroz tijelo, kroz ritam i kroz osjećaj kontrole.
          </p>

          <p>
            Zato sam složio ovaj protokol. Ne kao teoriju, nego kao praktičan vodič koji držiš u rukama ili slušaš u slušalicama u trenutku kad uđeš u avion. Sve što je meni pomoglo da sjednem na let bez grča u želucu, složeno na jedno mjesto.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-[#E4E9EF] pt-6 mt-12">
          <p className="text-[#4A5A68] text-xs italic leading-relaxed text-center">
            *Napomena: Miran Let je edukativni alat baziran na osobnom istraživanju i iskustvu autora. Nije medicinski tretman, psihološka terapija ni zamjena za stručnu pomoć. Ako tvoj strah značajno utječe na svakodnevni život, preporučujemo da se posavjetuješ s licenciranim stručnjakom.*
          </p>
        </div>
      </div>
    </section>
  );
}
