import React, { useState } from 'react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      await fetch('https://hooks.zapier.com/hooks/catch/28397556/44vco84/', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          source: 'miran_let_landing'
        }),
      });

      setStatus('success');
      setEmail('');
      setMessage('Hvala ti! SOS vodič je poslan na tvoj email.');
    } catch (error) {
      console.error('Došlo je do greške:', error);
      setStatus('error');
      setMessage('Došlo je do greške. Molimo pokušaj ponovno kasnije.');
    }
  };

  return (
    <section className="py-20 md:py-28 px-6 w-full bg-[#EAF4FD]" id="sos-guide">
      <div className="max-w-[580px] mx-auto text-center">
        <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-[#4A5A68] mb-3 block">
          BESPLATAN SOS VODIČ
        </span>
        
        <h3 className="font-serif text-3xl font-semibold mb-4 text-[#16232F]">
          Nisi siguran? Počni malo.
        </h3>
        
        <p className="text-[#4A5A68] text-base mb-6 leading-relaxed">
          Preuzmi besplatni SOS vodič za smirenje prije leta: jednu stranicu s tri tehnike koje možeš isprobati već danas.
        </p>

        {status === 'success' ? (
          <div className="bg-white border border-[#E4E9EF] rounded-xl p-6 text-center">
            <p className="font-bold text-[#16232F] text-base">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
            <input
              type="email"
              required
              placeholder="Unesi svoj email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading'}
              className="w-full min-h-[48px] px-4 bg-white border border-[#E4E9EF] rounded-xl text-[#16232F] placeholder-[#4A5A68] outline-none text-base font-normal"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="min-h-[48px] bg-[#C8A84A] hover:bg-[#B8983A] text-[#16232F] font-bold px-6 rounded-xl uppercase tracking-wider text-sm transition-all duration-300 shadow-md shadow-[#C8A84A]/25"
            >
              {status === 'loading' ? 'Slanje...' : 'POŠALJI MI SOS VODIČ'}
            </button>

            {status === 'error' && (
              <p className="text-red-500 text-xs font-semibold mt-1">{message}</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
