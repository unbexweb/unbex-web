'use client';

import { useState, useRef, useEffect } from 'react';
import { DISCIPLINA_VIDEOS, HERO_VIDEOS } from '@/data/disciplines';

const VIDEO_DEFAULT = HERO_VIDEOS.desktop;
const VIDEO_MOBILE  = HERO_VIDEOS.mobile;

export default function HeroIndex({ videoActivo = null, estaEnHero = false, onListo }) {
  const [muted, setMuted] = useState(true);
  const [esMobile, setEsMobile] = useState(false);
  const iframeRef = useRef(null);
  const listoLlamado = useRef(false);

  useEffect(() => {
    const check = () => setEsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  function handleIframeLoad() {
    if (listoLlamado.current || !onListo) return;
    listoLlamado.current = true;
    onListo();
  }

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

  const overlayVideoId = videoActivo ? (DISCIPLINA_VIDEOS[videoActivo] || null) : null;
  const videoActual = (esMobile && VIDEO_MOBILE) ? VIDEO_MOBILE : VIDEO_DEFAULT;
  const embedSrc = `https://www.youtube-nocookie.com/embed/${videoActual}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&loop=1&playlist=${videoActual}&cc_load_policy=0`;

  return (
    <section className={`hero${estaEnHero ? ' hero--lateral-activo' : ''}`} id="hero">
      <div className="hero__video-container">

        <iframe
          key={videoActual}
          ref={iframeRef}
          className="hero__video"
          src={embedSrc}
          title="Unbex hero"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={handleIframeLoad}
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
