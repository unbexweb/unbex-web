'use client';

import { useState } from 'react';

export default function HeroDisciplina({ disciplina, videoId }) {
  const [muted, setMuted] = useState(true);
  const imgSrc = `/img/disciplinas/${disciplina.img}`;

  return (
    <section className="disciplina-hero">
      {/* Fondo: video o imagen */}
      <div className="disciplina-hero__video-container">
        {videoId ? (
          <iframe
            className="disciplina-hero__video"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${muted ? 1 : 0}&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
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
      </div>

      <div className="disciplina-hero__overlay" />

      <div className="disciplina-hero__content">
        <span className="disciplina-hero__salon">
          {disciplina.salon === 'black' ? 'Salón Black' : 'Salón M&B'}
        </span>
        <h1 className="disciplina-hero__title">
          {disciplina.icono} {disciplina.nombre}
        </h1>
        <p className="disciplina-hero__desc">{disciplina.desc}</p>
        <a
          href={disciplina.wa}
          className="disciplina-hero__whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 Consultar por WhatsApp
        </a>
      </div>

      {videoId && (
        <button
          className="hero__volume"
          onClick={() => setMuted(prev => !prev)}
          aria-label={muted ? 'Activar sonido' : 'Silenciar'}
        >
          {muted ? '🔇' : '🔊'}
        </button>
      )}
    </section>
  );
}
