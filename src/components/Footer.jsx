import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#16232F] text-[#8C9BA8] py-14 px-6 text-center text-sm leading-relaxed">
      <div className="max-w-[800px] mx-auto">
        <p className="text-xs color-[#8C9BA8] mb-4">
          Fotografije na ovoj stranici izrađene su pomoću umjetne inteligencije. Kapetan Miran je ilustrirani lik, nije stvarna osoba.
        </p>

        <p className="mb-3 space-x-3">
          <a href="/impressum" className="text-white hover:text-[#A8D4F7]">Impressum</a>
          <span>·</span>
          <a href="/uvjeti-kupnje" className="text-white hover:text-[#A8D4F7]">Uvjeti kupnje</a>
          <span>·</span>
          <a href="/povrat" className="text-white hover:text-[#A8D4F7]">Povrat</a>
          <span>·</span>
          <a href="/privatnost" className="text-white hover:text-[#A8D4F7]">Privatnost</a>
        </p>

        <p className="text-xs color-[#8C9BA8] mb-1">
          Prodaju obavlja Lemon Squeezy kao Merchant of Record.
        </p>
        <p className="text-xs color-[#8C9BA8]">
          &copy; 2026 Miran Let. Sva prava pridržana.
        </p>
      </div>
    </footer>
  );
}
