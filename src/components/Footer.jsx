import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#121D27] text-white/70 py-12 px-6 text-center text-xs border-t border-white/10">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center gap-6">
        
        {/* Navigation / Legal Links */}
        <div className="flex flex-wrap justify-center gap-6 text-white/80 font-medium">
          <a href="/impressum" className="hover:text-[#C8A84A] transition-colors">
            Impressum
          </a>
          <a href="/uvjeti-kupnje" className="hover:text-[#C8A84A] transition-colors">
            Uvjeti kupnje
          </a>
          <a href="/povrat" className="hover:text-[#C8A84A] transition-colors">
            Politika povrata
          </a>
          <a href="/privatnost" className="hover:text-[#C8A84A] transition-colors">
            Politika privatnosti
          </a>
        </div>

        {/* AI Transparency & MoR Notice */}
        <div className="max-w-[700px] space-y-2 text-[#8C9BA8] leading-relaxed">
          <p>
            Prikazi proizvoda su ilustrativni i izrađeni pomoću umjetne inteligencije.
          </p>
          <p>
            Plaćanja i digitalnu isporuku sigurno obrađuje Lemon Squeezy (Merchant of Record).
          </p>
        </div>

        {/* Copyright */}
        <div className="text-[#5A6D7C] text-[11px] pt-4 border-t border-white/5 w-full">
          © {new Date().getFullYear()} Miran Let. Sva prava pridržana.
        </div>

      </div>
    </footer>
  );
}
