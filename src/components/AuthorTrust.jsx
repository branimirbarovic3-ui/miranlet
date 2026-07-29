import React from 'react';
import { motion } from 'framer-motion';

export default function AuthorTrust() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-16 w-full bg-white relative" id="autor">
      <div className="max-w-[760px] mx-auto text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-[#D4AF37] uppercase tracking-[0.25em] text-[10px] font-black mb-5 block text-center md:text-left">TKO STOJI IZA PROJEKTA</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#060A12] mb-10 font-bold leading-tight text-center md:text-left">
            Zašto postoji Miran Let
          </h2>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-12">
            {/* Author Avatar Card */}
            <div className="shrink-0 flex flex-col items-center">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden shadow-xl relative border-4 border-white ring-1 ring-gray-100 flex items-center justify-center bg-gray-50">
                <img 
                  src="/brane.png" 
                  alt="Brane - Autor Protokola" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-[#060A12] font-black text-base md:text-lg">Brane</p>
                <p className="text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-black">Autor Protokola</p>
              </div>
            </div>

            {/* Narrative text block */}
            <div className="flex-1 text-[#060A12]/80 text-[15px] md:text-[17px] leading-[1.8] font-light space-y-6">
              <p className="font-serif italic text-lg md:text-xl text-[#060A12] leading-relaxed border-l-4 border-[#D4AF37] pl-4">
                Ovo nije nastalo iz tečaja. Niti iz diplome.
              </p>
              
              <p>
                Nastalo je zato što sam jednom sjedio u avionu i osjetio onu nelagodu u grudima pri polijetanju. Pomislio sam: zašto nitko nikad normalno nije objasnio što se tu zapravo događa?
              </p>
              
              <p>
                Ja sam tip koji mora razumjeti stvari da bi funkcionirao. Kad nešto ne razumijem, mozak ne staje — vrti, analizira, gradi scenarije koje nitko nije tražio. Letenje je bio savršen problem za takav um. Zatvoren prostor, zvukovi koje nisam znao protumačiti, pokreti koje nisam mogao predvidjeti. Ona tiha stalna misao: ako nešto krene po krivu, ja ne mogu ništa.
              </p>

              <p>
                Počeo sam čitati. O neurobiologiji straha, o percepciji rizika, o tome zašto racionalni um zna jednu stvar, a tijelo radi suprotno. Čitao sam materijale pilota, programe aviokompanija, istraživanja psihologa.
              </p>

              <p className="font-serif font-bold text-[#060A12] text-lg md:text-xl">
                I shvatio nešto što mijenja sve.
              </p>

              <p className="font-serif italic text-lg md:text-xl text-[#D4AF37] leading-relaxed">
                Stalna nelagoda koju osjećaš nije strah od opasnosti. To je strah od nepoznatog.
              </p>

              <p>
                Vjerojatno već znaš da je letenje sigurno. Možda si stotinu puta pročitao da je statistički sigurnije od vožnje. I nije ti pomoglo. To nije tvoja greška — to je dokaz da strah od letenja nije problem znanja. Tvoja amigdala ne čita statistike. Ona uči kroz iskustvo, kroz tijelo, kroz ponavljanje.
              </p>

              <p>
                Zato ovaj vodič nije još jedna lista činjenica. To je ono što sam tada tražio, a nisam mogao naći — netko tko ti normalno objasni što se događa i ponudi alat koji možeš koristiti već na sljedećem letu.
              </p>

              <p className="font-bold text-[#060A12]">
                Cilj nije eliminirati strah. Cilj je naučiti letjeti s njim.
              </p>
            </div>
          </div>

          {/* Mandatory compliance disclaimer */}
          <div className="border-t border-gray-100 pt-8 mt-8">
            <p className="text-[#060A12]/50 text-xs italic leading-relaxed text-center md:text-left">
              *Napomena: Miran Let je edukativni alat baziran na osobnom istraživanju i iskustvu autora. Nije medicinski tretman, psihološka terapija ni zamjena za stručnu pomoć. Ako tvoj strah značajno utječe na svakodnevni život, preporučujemo da se posavjetuješ s licenciranim stručnjakom.*
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
