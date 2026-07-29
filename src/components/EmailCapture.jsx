import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      // Send the email to Zapier Catch Hook
      const response = await fetch('https://hooks.zapier.com/hooks/catch/28397556/44vco84/', {
        method: 'POST',
        mode: 'no-cors', // standard mode for cross-origin webhooks without CORS headers
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          source: 'miran_let_landing'
        }),
      });

      // Note: with no-cors, the response type is 'opaque', meaning we won't see the status code
      // but it will successfully transmit to Zapier.
      setStatus('success');
      setEmail('');
      setMessage('Hvala ti! SOS vodič je poslan na tvoj email.');
    } catch (error) {
      console.error('Došlo je do greške:', error);
      setStatus('error');
      setMessage('Ups! Došlo je do greške. Molimo te pokušaj ponovno kasnije.');
    }
  };

  return (
    <section className="py-24 px-6 md:px-16 w-full bg-[#060A12] text-white relative overflow-hidden" id="sos-guide">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[640px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-gold uppercase tracking-[0.25em] text-[10px] font-black mb-5 block">BESPLATAN SOS VODIČ</span>
          
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
            Nisi siguran? Počni malo.
          </h2>
          
          <p className="text-white/60 text-base md:text-lg font-light leading-relaxed mb-10 max-w-lg mx-auto">
            Ne moraš odmah kupiti. Preuzmi besplatni SOS vodič za smirenje prije leta — jednu stranicu s tri tehnike koje možeš isprobati već danas.
          </p>

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 flex flex-col items-center gap-3"
              >
                <CheckCircle className="w-10 h-10 text-emerald-400" />
                <p className="font-bold text-emerald-300 text-lg">{message}</p>
                <p className="text-white/50 text-sm">Provjeri svoj inbox (i spam mapu) kroz nekoliko trenutaka.</p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full flex flex-col gap-4"
              >
                <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/30">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="Unesi svoj email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === 'loading'}
                      className="w-full min-h-[50px] pl-12 pr-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all text-base font-light"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="min-h-[50px] bg-[#D4AF37] hover:bg-[#c5a133] disabled:bg-gray-600 text-white font-bold px-8 rounded-xl uppercase tracking-wider text-sm transition-all duration-300 shadow-lg shadow-gold/10 hover:shadow-xl hover:-translate-y-[1px] shrink-0"
                  >
                    {status === 'loading' ? 'Slanje...' : 'POŠALJI MI SOS VODIČ'}
                  </button>
                </div>

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-rose-400 text-xs font-bold flex items-center justify-center gap-1.5 mt-2"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {message}
                  </motion.div>
                )}

                <p className="text-white/40 text-[10px] md:text-[11px] font-bold uppercase tracking-wider mt-4">
                  Bez spama. Šaljemo samo korisne stvari vezane za letenje.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
