'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function DisciplinaCard({ disciplina, animDelay = 0 }) {
  const { clave, nombre, desc, img } = disciplina;
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
          <p className="card-desc">{desc}</p>
        </div>
      </Link>
    </div>
  );
}
