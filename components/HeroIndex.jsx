'use client';

import { useState, useRef, useEffect } from 'react';
import { DISCIPLINA_VIDEOS } from '@/data/disciplines';

const SRC_H = '/video/hero/hero_principal_Horizontal.mp4';
const SRC_V = '/video/hero/hero_principal_Vertical.mp4';

export default function HeroIndex({ videoActivo = null, estaEnHero = false }) {
  const [muted, setMuted] = useState(true);
  const [src, setSrc] = useState(SRC_H);
  const videoRef = useRef(null);

  const overlayVideoId = videoActivo ? (DISCIPLINA_VIDEOS[videoActivo] || null) : null;

  // Elegir video según orientación/tamaño
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = (mobile) => setSrc(mobile ? SRC_V : SRC_H);
    update(mq.matches);
    const handler = (e) => update(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Pausar al cambiar de pestaña, reanudar al volver
  useEffect(() => {
    const onVisibility = () => {
      if (!videoRef.current) return;
      document.hidden ? videoRef.current.pause() : videoRef.current.play();
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  function toggleMute() {
    if (!videoRef.current) return;
    const newMuted = !muted;
    videoRef.current.muted = newMuted;
    setMuted(newMuted);
  }

  return (
    <section className={`hero${estaEnHero ? ' hero--lateral-activo' : ''}`} id="hero">
      <div className="hero__video-container">

        <video
          key={src}
          ref={videoRef}
          className="hero__video"
          src={src}
          autoPlay
          muted
          loop
          playsInline
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
