'use client';

import { useState, useRef, useEffect } from 'react';
import { DISCIPLINA_VIDEOS } from '@/data/disciplines';

const HERO_VIDEO_ID = 'IpcjENOjZSQ';

export default function HeroIndex({ videoActivo = null, estaEnHero = false }) {
  const [muted, setMuted] = useState(true);
  const iframeRef = useRef(null);

  const overlayVideoId = videoActivo ? (DISCIPLINA_VIDEOS[videoActivo] || null) : null;

  const embedSrc = `https://www.youtube-nocookie.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&loop=1&playlist=${HERO_VIDEO_ID}`;

  // Pausar al cambiar de pestaña, reanudar al volver
  useEffect(() => {
    const onVisibility = () => {
      if (!iframeRef.current) return;
      const cmd = document.hidden ? 'pauseVideo' : 'playVideo';
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: cmd, args: [] }),
        '*'
      );
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  function toggleMute() {
    if (!iframeRef.current) return;
    const newMuted = !muted;
    const cmd = newMuted ? 'mute' : 'unMute';
    iframeRef.current.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func: cmd, args: [] }),
      '*'
    );
    setMuted(newMuted);
  }

  return (
    <section className={`hero${estaEnHero ? ' hero--lateral-activo' : ''}`} id="hero">
      <div className="hero__video-container">

        <iframe
          ref={iframeRef}
          className="hero__video"
          src={embedSrc}
          title="Unbex hero"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

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

      <button
        className="hero__volume"
        id="heroVolume"
        onClick={toggleMute}
        aria-label={muted ? 'Activar sonido' : 'Silenciar'}
      >
        {muted ? '🔇' : '🔊'}
      </button>
    </section>
  );
}
