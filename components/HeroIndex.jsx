'use client';

import { useState, useRef } from 'react';

const VIDEO_ID = process.env.NEXT_PUBLIC_VIDEO_HERO || null;

export default function HeroIndex() {
  const [muted, setMuted] = useState(true);
  const iframeRef = useRef(null);

  function toggleMute() {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const comando = muted ? 'unMute' : 'mute';
    iframe.contentWindow.postMessage(
      JSON.stringify({ event: 'command', func: comando, args: [] }),
      '*'
    );
    setMuted(prev => !prev);
  }

  return (
    <section className="hero" id="hero">
      <div className="hero__video-container">
        {VIDEO_ID ? (
          <iframe
            ref={iframeRef}
            className="hero__video"
            id="heroVideo"
            src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
            title="Unbex Hero"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <div className="hero__video hero__video--fallback" />
        )}
        <div className="hero__overlay" />
      </div>

      <div className="hero__content">
        <h1 className="hero__title">Bienvenido a Unbex</h1>
        <p className="hero__subtitle">Entrenamiento. Bienestar. Comunidad.</p>
        <a href="#disciplinas" className="hero__cta">
          Conocé nuestras disciplinas
        </a>
      </div>

      {VIDEO_ID && (
        <button
          className="hero__volume"
          id="heroVolume"
          onClick={toggleMute}
          aria-label={muted ? 'Activar sonido' : 'Silenciar'}
        >
          {muted ? '🔇' : '🔊'}
        </button>
      )}
    </section>
  );
}
