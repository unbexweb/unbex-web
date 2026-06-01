'use client';

import { useState, useRef } from 'react';
import { DISCIPLINA_VIDEOS, VIDEO_HERO_DEFAULT as VIDEO_DEFAULT } from '@/data/disciplines';

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
      'https://www.youtube-nocookie.com'
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
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_DEFAULT}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_DEFAULT}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
            title="Unbex Hero"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}

        {/* VIDEO OVERLAY — aparece al hacer hover sobre una disciplina */}
        {overlayVideoId && (
          <iframe
            key={overlayVideoId}
            className="hero__video hero__video--overlay"
            src={`https://www.youtube-nocookie.com/embed/${overlayVideoId}?autoplay=1&mute=1&loop=1&playlist=${overlayVideoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
            title="Preview disciplina"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}

        <div className="hero__overlay" />
      </div>

      <div className="hero__content">
        <h1 className="hero__title">Unbex</h1>
        <p className="hero__subtitle">It's not about training, it's about unlocking yourself</p>
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
