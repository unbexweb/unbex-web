'use client';

import { useState, useRef, useEffect } from 'react';
import { DISCIPLINA_VIDEOS, HERO_VIDEOS } from '@/data/disciplines';

export default function HeroIndex({ videoActivo = null, estaEnHero = false }) {
  const [muted, setMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const overlayVideoId = videoActivo ? (DISCIPLINA_VIDEOS[videoActivo] || null) : null;

  const videoId = (isMobile && HERO_VIDEOS.mobile) ? HERO_VIDEOS.mobile : HERO_VIDEOS.desktop;
  const embedSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&loop=1&playlist=${videoId}`;

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
