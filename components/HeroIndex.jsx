'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { DISCIPLINA_VIDEOS, HERO_VIDEOS } from '@/data/disciplines';

// Carga el script oficial de la IFrame Player API de YouTube una sola vez,
// sin importar cuántos componentes la necesiten.
let ytApiPromise = null;
function cargarYouTubeAPI() {
  if (typeof window === 'undefined') return Promise.resolve(null);
  if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
  if (ytApiPromise) return ytApiPromise;

  ytApiPromise = new Promise(resolve => {
    const previo = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previo?.();
      resolve(window.YT);
    };
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);
  });
  return ytApiPromise;
}

export default function HeroIndex({ videoActivo = null, estaEnHero = false, onListo }) {
  const [muted, setMuted] = useState(true);
  const [esMobile, setEsMobile] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);
  const playerContainerRef = useRef(null);
  const playerRef = useRef(null);
  const listoLlamado = useRef(false);
  const avanzarRef = useRef(() => {});

  useEffect(() => {
    const check = () => setEsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    setVideoIndex(0);
  }, [esMobile]);

  function handleListo() {
    if (listoLlamado.current || !onListo) return;
    listoLlamado.current = true;
    onListo();
  }

  // En mobile los videos 3 a 6 (índices 2 a 5) se ven mal recortados, se excluyen del carrusel
  const videos = esMobile ? HERO_VIDEOS.slice(0, 2) : HERO_VIDEOS;
  const totalVideos = videos.length;

  avanzarRef.current = () => {
    setVideoIndex(prev => (prev + 1) % totalVideos);
  };

  const entry = videos[videoIndex] || videos[0];
  const videoActual = (esMobile && entry.mobile) ? entry.mobile : entry.desktop;

  // Crea (o recrea) el player de YouTube para el video actual. El avance al
  // siguiente video ocurre cuando el estado del player pasa a ENDED (fin real
  // del video), no por un tiempo fijo — así nunca se corta antes de terminar.
  useEffect(() => {
    let destruido = false;

    cargarYouTubeAPI().then(YT => {
      if (destruido || !YT || !playerContainerRef.current) return;

      playerRef.current = new YT.Player(playerContainerRef.current, {
        videoId: videoActual,
        host: 'https://www.youtube-nocookie.com',
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          cc_load_policy: 0,
          iv_load_policy: 3,
          origin: window.location.origin,
        },
        events: {
          onReady: event => {
            event.target.getIframe().classList.add('hero__video');
            event.target.mute();
            event.target.playVideo();
            handleListo();
          },
          onStateChange: event => {
            if (event.data === YT.PlayerState.ENDED && totalVideos > 1) {
              avanzarRef.current();
            }
          },
        },
      });
    });

    return () => {
      destruido = true;
      playerRef.current?.destroy?.();
      playerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoActual]);

  useEffect(() => {
    const onVisibility = () => {
      const player = playerRef.current;
      if (!player) return;
      if (document.hidden) player.pauseVideo?.();
      else player.playVideo?.();
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  const irA = useCallback((idx) => {
    setVideoIndex(((idx % totalVideos) + totalVideos) % totalVideos);
  }, [totalVideos]);

  function toggleMute() {
    const player = playerRef.current;
    if (!player) return;
    const newMuted = !muted;
    if (newMuted) player.mute();
    else player.unMute();
    setMuted(newMuted);
  }

  const overlayVideoId = videoActivo ? (DISCIPLINA_VIDEOS[videoActivo] || null) : null;

  return (
    <section className={`hero${estaEnHero ? ' hero--lateral-activo' : ''}`} id="hero">
      <h1 className="sr-only">Unbex</h1>

      <div className="hero__video-container">

        <div ref={playerContainerRef} />

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
            {videos.map((_, i) => (
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
