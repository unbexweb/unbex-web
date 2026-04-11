'use client';

import { useState, useRef } from 'react';

export default function HeroDisciplina({ disciplina, videoId }) {
  const [muted, setMuted] = useState(true);
  const iframeRef = useRef(null);
  const imgSrc = `/img/disciplinas/${disciplina.img}`;

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
    <section className="disciplina-hero" id="disciplinaHero">
      <div className="disciplina-hero__video-container">
        {videoId ? (
          <iframe
            ref={iframeRef}
            className="disciplina-hero__video"
            id="disciplinaVideo"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
            title={disciplina.nombre}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        )}
        <div className="disciplina-hero__overlay" />
      </div>

      <div className="disciplina-hero__content">
        <p className="disciplina-hero__salon">
          {disciplina.salon === 'black' ? 'Salón Black' : 'Salón M&B'}
        </p>
        <h1 className="disciplina-hero__title">{disciplina.nombre}</h1>
        <p className="disciplina-hero__desc">{disciplina.desc}</p>
        <a
          className="disciplina-hero__whatsapp"
          id="disciplinaWhatsapp"
          href={disciplina.wa}
          target="_blank"
          rel="noopener noreferrer"
        >
          Quiero saber más
        </a>
      </div>

      {videoId && (
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
