'use client';

import { useState } from 'react';
import Link from 'next/link';

const VIDEO_ID = 'rAFygka9w_o';

export default function HeroIndex() {
  const [muted, setMuted] = useState(true);

  const videoSrc = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=${muted ? 1 : 0}&loop=1&playlist=${VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`;

  return (
    <section className="hero">
      <div className="hero__video-container">
        <iframe
          className="hero__video"
          src={videoSrc}
          title="Unbex Hero"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
      <div className="hero__overlay" />

      <div className="hero__content">
        <h1 className="hero__title">Unbex Argentina</h1>
        <p className="hero__subtitle">Tu lugar para entrenar, crecer y superar límites</p>
        <Link href="/#disciplinas" className="hero__cta">
          Ver disciplinas
        </Link>
      </div>

      <button
        className="hero__volume"
        onClick={() => setMuted(prev => !prev)}
        aria-label={muted ? 'Activar sonido' : 'Silenciar'}
        title={muted ? 'Activar sonido' : 'Silenciar'}
      >
        {muted ? '🔇' : '🔊'}
      </button>
    </section>
  );
}
