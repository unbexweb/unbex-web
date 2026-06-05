'use client';

import { useEffect, useRef } from 'react';

export default function HeroDisciplina({ disciplina, videoSrc }) {
  const videoRef = useRef(null);
  const imgSrc = `/img/cards/${disciplina.img}`;

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = true;
  }, []);

  return (
    <section className="disciplina-hero" id="disciplinaHero">
      <div className="disciplina-hero__video-container">
        {videoSrc ? (
          <video
            ref={videoRef}
            className="disciplina-hero__video"
            src={videoSrc}
            autoPlay
            loop
            playsInline
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
        <a
          className="disciplina-hero__whatsapp"
          href={disciplina.wa}
          target="_blank"
          rel="noopener noreferrer"
        >
          Quiero saber más
        </a>
      </div>
    </section>
  );
}
