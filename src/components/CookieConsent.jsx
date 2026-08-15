import React, { useState, useEffect } from 'react';
import { initMetaPixel } from '../utils/metaPixel';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(true);

  useEffect(() => {
    const savedConsent = localStorage.getItem('miranlet_cookie_consent');
    if (!savedConsent) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    } else if (savedConsent === 'accepted' || savedConsent === 'custom_marketing') {
      initMetaPixel();
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('miranlet_cookie_consent', 'accepted');
    setVisible(false);
    setShowSettings(false);
    initMetaPixel();
  };

  const handleDecline = () => {
    localStorage.setItem('miranlet_cookie_consent', 'declined');
    setVisible(false);
    setShowSettings(false);
  };

  const handleSaveCustom = () => {
    if (marketingEnabled) {
      localStorage.setItem('miranlet_cookie_consent', 'custom_marketing');
      initMetaPixel();
    } else {
      localStorage.setItem('miranlet_cookie_consent', 'declined');
    }
    setVisible(false);
    setShowSettings(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* Main Banner */}
      <div 
        role="region" 
        aria-label="Obavijest o kolačićima"
        className="fixed bottom-0 left-0 right-0 z-50 bg-[#0B1C2E] text-white border-t border-[#D4AF37]/30 p-4 md:p-5 shadow-2xl transition-all duration-300"
      >
        <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
          <div className="text-xs sm:text-sm text-[#E8F0FA]/90 leading-relaxed max-w-[720px]">
            <p>
              Koristimo nužne kolačiće za funkcioniranje stranice te marketinške kolačiće za mjerenje učinkovitosti oglašavanja. Marketinški kolačići aktiviraju se isključivo uz tvoj pristanak.{' '}
              <a href="/privatnost" className="underline text-[#D4AF37] hover:text-white transition-colors">
                Politika privatnosti
              </a>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto shrink-0">
            <button
              onClick={handleAcceptAll}
              className="btn-gold flex-1 md:flex-initial text-xs uppercase tracking-wider py-2.5 px-4 rounded-lg"
            >
              Prihvati
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 md:flex-initial bg-white/10 hover:bg-white/20 text-white font-medium text-xs uppercase tracking-wider py-2.5 px-4 rounded-lg transition-all border border-white/20"
            >
              Odbij
            </button>
            <button
              onClick={() => setShowSettings(true)}
              className="w-full md:w-auto text-xs text-[#E8F0FA] hover:text-white underline py-1 px-2 text-center"
            >
              Postavke
            </button>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 bg-[#0B1C2E]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-[#0B1C2E] rounded-2xl max-w-[500px] w-full p-6 md:p-8 shadow-2xl border border-[#E1EAF2] relative">
            <h3 className="font-serif text-2xl font-bold mb-2">Postavke privatnosti</h3>
            <p className="text-sm text-[#526579] mb-6">
              Odaberi koje vrste kolačića želiš dopustiti na ovoj stranici.
            </p>

            <div className="space-y-4 mb-6">
              {/* Necessary */}
              <div className="p-3.5 bg-[#F2F8FC] rounded-xl flex items-center justify-between border border-[#E1EAF2]">
                <div>
                  <div className="font-bold text-sm text-[#0B1C2E]">Nužni kolačići</div>
                  <div className="text-xs text-[#526579]">Potrebni za osnovni rad stranice i sigurnost.</div>
                </div>
                <span className="text-xs font-bold text-[#526579] uppercase bg-white px-2.5 py-1 rounded-md border border-[#E1EAF2]">
                  Uvijek aktivno
                </span>
              </div>

              {/* Marketing */}
              <div className="p-3.5 bg-[#F2F8FC] rounded-xl flex items-center justify-between border border-[#E1EAF2]">
                <div>
                  <div className="font-bold text-sm text-[#0B1C2E]">Marketinški kolačići (Meta Pixel)</div>
                  <div className="text-xs text-[#526579]">Pomažu nam mjeriti posjećenost i učinak oglasa.</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={marketingEnabled} 
                    onChange={(e) => setMarketingEnabled(e.target.checked)}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#D4AF37]"></div>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setShowSettings(false)}
                className="text-xs uppercase tracking-wider font-semibold text-[#526579] px-4 py-2 hover:text-[#0B1C2E]"
              >
                Odustani
              </button>
              <button
                onClick={handleSaveCustom}
                className="btn-gold text-xs uppercase tracking-wider py-2.5 px-5 rounded-lg"
              >
                Spremi odabir
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
