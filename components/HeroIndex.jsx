'use client';

import { useState, useRef } from 'react';
import { DISCIPLINA_VIDEOS } from '@/data/disciplines';

const VIDEO_DEFAULT = process.env.NEXT_PUBLIC_VIDEO_HERO || null;

export default function HeroIndex({ videoActivo = null, estaEnHero = false }) {
  const [muted, setMuted] = useState(true);
  const iframeRef = useRef(null);

  const overlayVideoId = videoActivo ? (DISCIPLINA_VIDEOS[videoActivo] || null) : null;

  function toggleMute() {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const comando = muted ? 'unMute' : 'mute';
    iframe.contentWindow.postMessage(
      JSON.stringify({ event: 'command', func: comando, args: [] }),
      'https://www.youtube.com'
    );
    setMuted(prev => !prev);
  }

  return (
    <section className={`hero${estaEnHero ? ' hero--lateral-activo' : ''}`} id="hero">
      <div className="hero__video-container">

        {/* VIDEO DEFAULT — siempre presente */}
        {VIDEO_DEFAULT && (
          <iframe
            ref={iframeRef}
            className="hero__video"
            id="heroVideo"
            src={`https://www.youtube.com/embed/${VIDEO_DEFAULT}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_DEFAULT}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
            title="Unbex Hero"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}

        {/* VIDEO OVERLAY — aparece al hacer hover sobre una disciplina */}
        {overlayVideoId && (
          <iframe
            key={overlayVideoId}
            className="hero__video hero__video--overlay"
            src={`https://www.youtube.com/embed/${overlayVideoId}?autoplay=1&mute=1&loop=1&playlist=${overlayVideoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
            title="Preview disciplina"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
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

      {VIDEO_DEFAULT && (
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
