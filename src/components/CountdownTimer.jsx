import React, { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 15 * 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <span className="font-mono font-bold text-lg bg-white/15 backdrop-blur-sm px-3 py-1 rounded-lg">
      {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
    </span>
  );
}
