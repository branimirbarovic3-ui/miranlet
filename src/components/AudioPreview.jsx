import React, { useState, useRef, useEffect } from 'react';

export default function AudioPreview() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(120); // Default placeholder 2:00
  const [audioAvailable, setAudioAvailable] = useState(false);
  const audioRef = useRef(null);

  // Audio source path: /audio/miran-let-preview.mp3
  // STAVKA ZA INTEGRACIJU: Staviti stvarnu audio snimku u public/audio/miran-let-preview.mp3
  const audioSrc = '/audio/miran-let-preview.mp3';

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 120);
      setAudioAvailable(true);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handleError = () => {
      // Audio file not yet placed in public/audio/miran-let-preview.mp3
      setAudioAvailable(false);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Fallback demo simulation if audio file is not yet uploaded
        setIsPlaying(!isPlaying);
      });
    }
  };

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    setCurrentTime(seekTime);
    if (audioRef.current && audioAvailable) {
      audioRef.current.currentTime = seekTime;
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section className="py-20 md:py-28 px-6 w-full bg-[#F7F5F0]">
      <div className="max-w-[850px] mx-auto text-center">
        
        {/* Section Header */}
        <span className="font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.14em] text-[#4A5A68] mb-3 block">
          AUDIO ISJEČAK
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#16232F] mb-4">
          Poslušaj kako Miran Let zvuči.
        </h2>
        <p className="font-sans text-base md:text-lg text-[#4A5A68] max-w-[620px] mx-auto mb-10">
          Bez kompliciranih uputa. Samo miran glas i jasan sljedeći korak.
        </p>

        {/* Custom Audio Player Card */}
        <div className="bg-[#16232F] text-white border-2 border-[#C8A84A] rounded-2xl p-6 md:p-8 shadow-xl">
          
          <audio ref={audioRef} src={audioSrc} preload="metadata" />

          <div className="flex flex-col md:flex-row items-center gap-6">
            
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="w-16 h-16 rounded-full bg-[#C8A84A] hover:bg-[#B8983A] text-[#16232F] flex items-center justify-center transition-all shadow-lg hover:scale-105 shrink-0 focus:outline-none focus:ring-4 focus:ring-[#C8A84A]/40"
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

            {/* Track Info & Progress */}
            <div className="w-full flex flex-col text-left">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <div className="font-semibold text-base text-white">Miran Let · Audio isječak za pripremu</div>
                  <div className="text-xs text-[#A8D4F7]">Glasovni protokol prije polijetanja</div>
                </div>
                <div className="text-xs font-mono text-[#C8A84A] font-semibold">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>

              {/* Progress Scrubber */}
              <input
                type="range"
                min="0"
                max={duration || 120}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#C8A84A] focus:outline-none"
                aria-label="Vremenska traka audija"
              />

              {/* Waveform Graphic Decoration */}
              <div className="flex items-center justify-between gap-1 mt-3 h-4 opacity-60">
                {[40, 65, 30, 80, 50, 90, 70, 45, 85, 60, 95, 40, 75, 55, 90, 35, 60, 80, 45, 70, 50, 85, 30, 65, 90, 55, 40, 75, 60, 85, 45].map((h, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-[#C8A84A] rounded-full transition-all duration-200" 
                    style={{ height: `${isPlaying ? Math.max(20, (h + (i % 3) * 10) % 100) : h * 0.4}%` }} 
                  />
                ))}
              </div>
            </div>

          </div>

          {!audioAvailable && (
            <div className="mt-4 pt-4 border-t border-white/10 text-xs text-[#8C9BA8] text-center">
              Audio isječak pripremljen za /audio/miran-let-preview.mp3
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
