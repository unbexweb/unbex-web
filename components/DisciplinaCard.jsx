'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function DisciplinaCard({ disciplina, animDelay = 0 }) {
  const { clave, nombre, img, paraQuien, objetivos, duracion } = disciplina;
  const tieneInfo = paraQuien || objetivos || duracion;
  const [ref, isVisible] = useIntersectionObserver();
  const [effectiveDelay, setEffectiveDelay] = useState(animDelay);
  const [flipped, setFlipped] = useState(false);
  const isTouch = useRef(false);

  useEffect(() => {
    isTouch.current = window.matchMedia('(hover: none)').matches;
    if (animDelay > 0 && window.matchMedia('(max-width: 768px)').matches) {
      setEffectiveDelay(0);
    }
  }, [animDelay]);

  function handleClick(e) {
    if (!isTouch.current) return;
    if (!flipped) {
      e.preventDefault();
      setFlipped(true);
    }
  }

  return (
    <div
      ref={ref}
      className={`card-wrapper anim-fade-up${isVisible ? ' is-visible' : ''}${flipped ? ' card-wrapper--flipped' : ''}`}
      style={effectiveDelay ? { '--anim-delay': `${effectiveDelay}ms` } : undefined}
    >
      <Link href={`/disciplinas/${clave}`} className="card-inner" onClick={handleClick}>
        <div
          className="card-front"
          style={{ backgroundImage: `url(/img/disciplinas/${img})` }}
        >
          <span className="card-nombre">{nombre}</span>
        </div>
        <div className="card-back">
          <span className="card-nombre">{nombre}</span>
          {tieneInfo ? (
            <ul className="card-back__info">
              {paraQuien && (
                <li className="card-back__item">
                  <span className="card-back__label">¿Para quién?</span>
                  <span className="card-back__valor">{paraQuien}</span>
                </li>
              )}
              {objetivos && (
                <li className="card-back__item">
                  <span className="card-back__label">Objetivo</span>
                  <span className="card-back__valor">{objetivos}</span>
                </li>
              )}
              {duracion && (
                <li className="card-back__item">
                  <span className="card-back__label">Duración</span>
                  <span className="card-back__valor">{duracion}</span>
                </li>
              )}
            </ul>
          ) : (
            <p className="card-desc card-desc--soon">Más info próximamente</p>
          )}
        </div>
      </Link>
    </div>
  );
}
