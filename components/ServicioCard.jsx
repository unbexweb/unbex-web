'use client';

import { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function ServicioCard({ servicio, animDelay = 0 }) {
  const { nombre, desc, icono, color } = servicio;
  const [ref, isVisible] = useIntersectionObserver();
  const [effectiveDelay, setEffectiveDelay] = useState(animDelay);

  useEffect(() => {
    if (animDelay > 0 && window.matchMedia('(max-width: 768px)').matches) {
      setEffectiveDelay(0);
    }
  }, [animDelay]);

  return (
    <div
      ref={ref}
      className={`card ${color} anim-fade-up${isVisible ? ' is-visible' : ''}`}
      style={effectiveDelay ? { '--anim-delay': `${effectiveDelay}ms` } : undefined}
    >
      <div className="card__icon">{icono}</div>
      <h3 className="card__title">{nombre}</h3>
      <p className="card__desc">{desc}</p>
    </div>
  );
}
