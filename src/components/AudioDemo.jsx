import React, { useState, useRef, useEffect } from 'react';

export default function AudioDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(8);
  const audioRef = useRef(null);
  const synthContextRef = useRef(null);
  const timerRef = useRef(null);

  const audioWavSrc = '/audio/miran-let-preview.wav';
  const audioMp3Src = '/audio/miran-let-preview.mp3';

  // Calming tone synthesizer fallback
  const startSynthSound = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      synthContextRef.current = ctx;
      if (ctx.state === 'suspended') ctx.resume();

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.15, ctx.currentTime);
      masterGain.connect(ctx.destination);

      const freqs = [220.0, 261.63, 329.63, 440.0];
      freqs.forEach((freq) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.setValueAtTime(0.01, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 1.5);
        gain.gain.exponentialRampToValueAtTime(0.02, ctx.currentTime + 4.0);
        gain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 6.5);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 8.0);
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start();
      });
    } catch {
      // Audio fallback
    }
  };

  const stopSynthSound = () => {
    try {
      if (synthContextRef.current) {
        synthContextRef.current.close();
        synthContextRef.current = null;
      }
    } catch {
      // Cleanup
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration)) setDuration(audio.duration);
    };
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      stopSynthSound();
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      stopSynthSound();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      stopSynthSound();
      if (timerRef.current) clearInterval(timerRef.current);
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        startSynthSound();
        setIsPlaying(true);
        setCurrentTime(0);
        timerRef.current = setInterval(() => {
          setCurrentTime((prev) => {
            if (prev >= duration) {
              clearInterval(timerRef.current);
              stopSynthSound();
              setIsPlaying(false);
              return 0;
            }
            return prev + 0.2;
          });
        }, 200);
      });
    }
  };

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    setCurrentTime(seekTime);
    if (audioRef.current) audioRef.current.currentTime = seekTime;
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleCtaClick = (e) => {
    e.preventDefault();
    const target = document.querySelector('#ponuda');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="audio" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 w-full bg-[#F2F8FC] border-b border-[#E1EAF2]">
      <div className="max-w-[850px] mx-auto text-left sm:text-center">
        
        {/* Section Header */}
        <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] text-[#176EA6] mb-2 block">
          AUDIO DEMONSTRACIJA
        </span>
        <h2 className="font-serif text-[30px] sm:text-[36px] md:text-[44px] font-bold text-[#0B1C2E] mb-3 leading-[1.18]">
          Poslušaj kako Miran Let zvuči.
        </h2>
        <p className="font-sans text-base sm:text-[18px] text-[#526579] max-w-[620px] mx-auto mb-8 sm:mb-10 leading-relaxed">
          Pokreni kratki isječak i provjeri odgovara li ti način vođenja.
        </p>

        {/* Large Navy Audio Player */}
        <div className="bg-[#0B1C2E] text-white border border-[#D4AF37] rounded-2xl p-5 sm:p-7 md:p-8 shadow-xl mb-8">
          
          <audio ref={audioRef} preload="auto">
            <source src={audioWavSrc} type="audio/wav" />
            <source src={audioMp3Src} type="audio/mpeg" />
          </audio>

          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
            
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="w-16 h-16 rounded-full bg-[#D4AF37] hover:bg-[#176EA6] hover:text-white text-[#0B1C2E] flex items-center justify-center transition-all shadow-lg hover:scale-105 shrink-0 focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/40 active:scale-95"
              aria-label={isPlaying ? 'Zaustavi audio isječak' : 'Pokreni audio isječak'}
            >
              {isPlaying ? (
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="w-7 h-7 fill-current ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Track Info & Scrubber */}
            <div className="w-full flex flex-col text-left">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <div className="font-semibold text-base sm:text-lg text-white leading-tight">Miran Let · Zvučni isječak</div>
                  <div className="text-xs sm:text-sm text-[#E8F0FA]">Glasovni protokol prije polijetanja</div>
                </div>
                <div className="text-xs sm:text-sm font-mono text-[#D4AF37] font-bold">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>

              <input
                type="range"
                min="0"
                max={duration || 8}
                step="0.1"
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-2.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#D4AF37] focus:outline-none"
                aria-label="Vremenska traka audija"
              />

              {/* Animated Waveform */}
              <div className="flex items-center justify-between gap-1 mt-3.5 h-4 opacity-70">
                {[35, 60, 30, 85, 50, 95, 70, 45, 80, 60, 90, 40, 75, 55, 85, 35, 60, 80, 45, 70, 50, 85, 30, 65, 90, 55, 40, 75, 60, 85, 45].map((h, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-[#D4AF37] rounded-full transition-all duration-200" 
                    style={{ height: `${isPlaying ? Math.max(25, (h + (i % 4) * 8) % 100) : h * 0.35}%` }} 
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* CTA (2 of 3 on page) */}
        <div className="flex justify-center">
          <a
            href="#ponuda"
            onClick={handleCtaClick}
            className="btn-gold w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center text-base uppercase tracking-[0.06em] py-4 px-8 rounded-lg text-center"
          >
            ŽELIM SVOJ PLAN ZA LET
          </a>
        </div>

      </div>
    </section>
  );
}
