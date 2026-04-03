import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell } from 'lucide-react';

export default function SocialProofToast() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('Marko, Split');
  
  const buyers = [
    { text: 'Ivana, Rijeka', gender: 'f' },
    { text: 'Marko, Split', gender: 'm' },
    { text: 'Marija, Zagreb', gender: 'f' },
    { text: 'Hrvoje, Varaždin', gender: 'm' },
    { text: 'Ana, Pula', gender: 'f' },
    { text: 'Luka, Zadar', gender: 'm' },
    { text: 'Maja, Rijeka', gender: 'f' },
    { text: 'Ivan, Zagreb', gender: 'm' },
    { text: 'Doris, Osijek', gender: 'f' },
    { text: 'Petar, Varaždin', gender: 'm' },
    { text: 'Elena, Pula', gender: 'f' }
  ];

  useEffect(() => {
    const showInterval = setInterval(() => {
      const idx = Math.floor(Math.random() * buyers.length);
      setName(buyers[idx]);
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 5000);
    }, 12000);

    return () => clearInterval(showInterval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -50, scale: 0.9 }}
          className="fixed bottom-6 left-6 z-[9999] bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-4 max-w-[280px]"
        >
          <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0 border border-[#D4AF37]/20">
            <Bell className="w-5 h-5 text-[#D4AF37]" strokeWidth={2} />
          </div>
          <div>
            <span className="block text-[10px] uppercase font-black tracking-widest text-[#060A12]/30 mb-0.5">
              UPRAVO KUPLJENO
            </span>
            <p className="text-[13px] font-bold text-[#060A12] leading-tight">
              {typeof name === 'object' ? name.text : name} je {typeof name === 'object' && name.gender === 'f' ? 'preuzela' : 'preuzeo'} protokol
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
