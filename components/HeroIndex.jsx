'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { DISCIPLINA_VIDEOS, HERO_VIDEOS } from '@/data/disciplines';

export default function HeroIndex({ videoActivo = null, estaEnHero = false, onListo }) {
  const [muted, setMuted] = useState(true);
  const [esMobile, setEsMobile] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);
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

  const totalVideos = HERO_VIDEOS.length;

  // Auto-avance: espera que el video termine (YouTube dispara state=0 al final, incluso con loop=1)
  // Fallback: si infoDelivery trae la duración, programa un timer de respaldo
  useEffect(() => {
    if (totalVideos <= 1) return;

    let timer = null;
    let timerSet = false;

    function onMessage(e) {
      if (!e.origin.includes('youtube')) return;
      try {
        const data = JSON.parse(e.data);

        // state 0 = video terminó → avanzar al siguiente
        if (data.event === 'onStateChange' && data.info === 0) {
          clearTimeout(timer);
          setVideoIndex(prev => (prev + 1) % totalVideos);
          return;
        }

        // Fallback: infoDelivery incluye duración → programar avance al final del video
        if (!timerSet && data.event === 'infoDelivery' && data.info?.duration > 0) {
          timerSet = true;
          const remaining = (data.info.duration - (data.info.currentTime || 0)) * 1000;
          if (remaining > 1000) {
            timer = setTimeout(() => setVideoIndex(prev => (prev + 1) % totalVideos), remaining);
          }
        }
      } catch {}
    }

    window.addEventListener('message', onMessage);
    return () => {
      window.removeEventListener('message', onMessage);
      clearTimeout(timer);
    };
  }, [videoIndex, totalVideos]);

  const irA = useCallback((idx) => {
    setVideoIndex(((idx % totalVideos) + totalVideos) % totalVideos);
  }, [totalVideos]);

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
  const entry = HERO_VIDEOS[videoIndex];
  const videoActual = (esMobile && entry.mobile) ? entry.mobile : entry.desktop;
  const embedSrc = `https://www.youtube-nocookie.com/embed/${videoActual}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&loop=1&playlist=${videoActual}&cc_load_policy=0&iv_load_policy=3`;

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
            src={`https://www.youtube-nocookie.com/embed/${overlayVideoId}?autoplay=1&mute=1&loop=1&playlist=${overlayVideoId}&controls=0&rel=0&modestbranding=1&playsinline=1&cc_load_policy=0&iv_load_policy=3`}
            title="Preview disciplina"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}

        {/* <div className="hero__overlay" /> */}
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

      {totalVideos > 1 && (
        <>
          <button
            className="hero__carousel-btn hero__carousel-btn--prev"
            onClick={() => irA(videoIndex - 1)}
            aria-label="Video anterior"
          >
            ❮
          </button>

          <button
            className="hero__carousel-btn hero__carousel-btn--next"
            onClick={() => irA(videoIndex + 1)}
            aria-label="Video siguiente"
          >
            ❯
          </button>

          <div className="hero__carousel-dots">
            {HERO_VIDEOS.map((_, i) => (
              <button
                key={i}
                className={`hero__carousel-dot${i === videoIndex ? ' hero__carousel-dot--active' : ''}`}
                onClick={() => irA(i)}
                aria-label={`Video ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
