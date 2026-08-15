import React, { useState, useRef, useEffect } from 'react';

export default function AudioPreview() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(8); // 8 second sample loop
  const audioRef = useRef(null);
  const synthContextRef = useRef(null);
  const synthNodesRef = useRef([]);
  const timerRef = useRef(null);

  // Audio source files: /audio/miran-let-preview.wav and .mp3
  // STAVKA ZA INTEGRACIJU: Dodati konačni audio isječak u public/audio/miran-let-preview.mp3
  const audioWavSrc = '/audio/miran-let-preview.wav';
  const audioMp3Src = '/audio/miran-let-preview.mp3';

  // Web Audio Synthesizer fallback for 100% reliable sound playback
  const startSynthSound = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      
      const ctx = new AudioCtx();
      synthContextRef.current = ctx;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.15, ctx.currentTime);
      masterGain.connect(ctx.destination);

      // Calming harmonic frequencies (A minor warm chord)
      const freqs = [220.0, 261.63, 329.63, 440.0];
      const nodes = [];

      freqs.forEach((freq) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        
        // Gentle breathing modulation
        gain.gain.setValueAtTime(0.01, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 1.5);
        gain.gain.exponentialRampToValueAtTime(0.02, ctx.currentTime + 4.0);
        gain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 6.5);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 8.0);

        osc.connect(gain);
        gain.connect(masterGain);
        osc.start();
        nodes.push({ osc, gain });
      });

      synthNodesRef.current = nodes;
    } catch {
      // Audio context restricted or unavailable
    }
  };

  const stopSynthSound = () => {
    try {
      if (synthContextRef.current) {
        synthContextRef.current.close();
        synthContextRef.current = null;
      }
      synthNodesRef.current = [];
    } catch {
      // Cleanup
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

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
      // Try playing standard audio element
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Fallback to Web Audio synthesis
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
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 w-full bg-[#F7F5F0]">
      <div className="max-w-[850px] mx-auto text-center">
        
        {/* Section Header */}
        <span className="font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.14em] text-[#4A5A68] mb-2.5 block">
          AUDIO ISJEČAK
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#16232F] mb-3.5 leading-[1.2]">
          Poslušaj kako Miran Let zvuči.
        </h2>
        <p className="font-sans text-base md:text-lg text-[#4A5A68] max-w-[620px] mx-auto mb-8 md:mb-10">
          Bez kompliciranih uputa. Samo miran glas i jasan sljedeći korak.
        </p>

        {/* Custom Audio Player Card */}
        <div className="bg-[#16232F] text-white border-2 border-[#C8A84A] rounded-2xl p-5 sm:p-7 md:p-8 shadow-xl">
          
          <audio ref={audioRef} preload="auto">
            <source src={audioWavSrc} type="audio/wav" />
            <source src={audioMp3Src} type="audio/mpeg" />
          </audio>

          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
            
            {/* Play/Pause Button - Min 52px touch target */}
            <button
              onClick={togglePlay}
              className="w-16 h-16 sm:w-16 sm:h-16 rounded-full bg-[#C8A84A] hover:bg-[#B8983A] text-[#16232F] flex items-center justify-center transition-all shadow-lg hover:scale-105 shrink-0 focus:outline-none focus:ring-4 focus:ring-[#C8A84A]/40 active:scale-95"
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

            {/* Track Info & Progress Bar */}
            <div className="w-full flex flex-col text-left">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <div className="font-semibold text-base sm:text-lg text-white leading-tight">Miran Let · Zvučni isječak</div>
                  <div className="text-xs sm:text-sm text-[#A8D4F7]">Vođeni glasovni protokol prije polijetanja</div>
                </div>
                <div className="text-xs sm:text-sm font-mono text-[#C8A84A] font-bold">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>

              {/* Progress Scrubber */}
              <input
                type="range"
                min="0"
                max={duration || 8}
                step="0.1"
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-2.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#C8A84A] focus:outline-none"
                aria-label="Vremenska traka audija"
              />

              {/* Animated Waveform Visualizer */}
              <div className="flex items-center justify-between gap-1 mt-3.5 h-4 opacity-70">
                {[35, 60, 30, 85, 50, 95, 70, 45, 80, 60, 90, 40, 75, 55, 85, 35, 60, 80, 45, 70, 50, 85, 30, 65, 90, 55, 40, 75, 60, 85, 45].map((h, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-[#C8A84A] rounded-full transition-all duration-200" 
                    style={{ height: `${isPlaying ? Math.max(25, (h + (i % 4) * 8) % 100) : h * 0.35}%` }} 
                  />
                ))}
              </div>
            </div>

          </div>

          <div className="mt-4 pt-3.5 border-t border-white/10 text-xs text-[#8C9BA8] text-center">
            Pritiskom na tipku pokrećeš kratki zvučni isječak.
          </div>

        </div>

      </div>
    </section>
  );
}
