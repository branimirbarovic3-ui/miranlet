import React, { useState } from 'react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (val) => {
    return String(val)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email || !validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Molimo unesi valjanu email adresu.');
      return;
    }

    setStatus('loading');

    // STAVKA ZA INTEGRACIJU: Ovdje spojiti stvarni backend endpoint / webhook za newsletter / email automatizaciju
    // Primjer: await fetch('/api/lead-capture', { method: 'POST', body: JSON.stringify({ email }) })
    try {
      // Simulacija slanja
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
      setErrorMessage('Došlo je do greške pri slanju. Pokušaj ponovno.');
    }
  };

  return (
    <section className="py-20 md:py-28 px-6 w-full bg-[#EAF4FD]">
      <div className="max-w-[700px] mx-auto text-center">
        
        {/* Section Header */}
        <span className="font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.14em] text-[#4A5A68] mb-3 block">
          BESPLATNA VJEŽBA
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#16232F] mb-4">
          Prvo isprobaj jedan korak.
        </h2>
        <p className="font-sans text-base md:text-lg text-[#4A5A68] mb-8 max-w-[580px] mx-auto">
          Ostavi email i poslat ćemo ti kratku vježbu koju možeš spremiti na telefon prije sljedećeg leta.
        </p>

        {/* Email Form Box */}
        <div className="bg-white border-2 border-[#C8A84A] rounded-2xl p-6 md:p-8 shadow-sm">
          {status === 'success' ? (
            <div className="p-4 bg-[#F7F5F0] border border-[#C8A84A] rounded-xl text-[#16232F]">
              <div className="font-serif text-xl font-bold mb-1">Vježba je na putu!</div>
              <p className="text-sm text-[#4A5A68]">
                Provjeri svoj inbox (i mapu s neželjenom poštom) za nekoliko minuta.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  name="email"
                  id="lead-email-input"
                  autoComplete="email"
                  placeholder="Upiši svoju email adresu..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading'}
                  className="flex-1 px-4 py-4 rounded-xl border border-[#E4E9EF] focus:outline-none focus:ring-2 focus:ring-[#C8A84A] text-base text-[#16232F] bg-[#F7F5F0]"
                  required
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-[#C8A84A] hover:bg-[#B8983A] text-[#16232F] font-bold text-sm uppercase tracking-wider py-4 px-8 rounded-xl transition-all shadow-md shadow-[#C8A84A]/25 disabled:opacity-50 shrink-0"
                >
                  {status === 'loading' ? 'Šaljem...' : 'POŠALJI MI VJEŽBU'}
                </button>
              </div>

              {status === 'error' && (
                <div className="text-sm text-red-600 text-left mt-1 font-medium">
                  {errorMessage}
                </div>
              )}

              <p className="text-xs text-[#4A5A68] mt-3 text-left leading-normal">
                Slanjem adrese prihvaćaš da ti pošaljemo traženi sadržaj. Odjava je moguća u svakom trenutku.{' '}
                <a href="/privatnost" className="underline text-[#16232F] hover:text-[#C8A84A]">
                  Politika privatnosti
                </a>
              </p>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
