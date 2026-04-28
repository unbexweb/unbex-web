'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { precios, WA_NUMBER } from '@/data/disciplines';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import TabHint from '@/components/TabHint';

const WA_BASE = 'https://wa.me/' + WA_NUMBER + '?text=';

const TABS = [
  { id: 'black',          label: 'Salón Black'    },
  { id: 'mb',             label: 'Salón M&B'      },
  { id: 'full',           label: 'Full Unbex'     },
  { id: 'jubilados',      label: 'Jubilados +70'  },
  { id: 'open-box',       label: 'Open Box'       },
  { id: 'open-matutino',  label: 'Open Matutino'  },
  { id: 'all-out',        label: 'All Out'        },
];

const BLOQUES_POR_TAB = {
  black:           [precios.clases.find(b => b.id === 'black')],
  mb:              [precios.clases.find(b => b.id === 'mb')],
  full:            [precios.clases.find(b => b.id === 'full')],
  jubilados:       [precios.clases.find(b => b.id === 'jubilados')],
  'open-box':      [precios.espacio.find(b => b.id === 'open-box')],
  'open-matutino': [precios.espacio.find(b => b.id === 'open-matutino')],
  'all-out':       [precios.espacio.find(b => b.id === 'all-out')],
};

function fmt(n) {
  return '$' + n.toLocaleString('es-AR');
}

function PlanCard({ plan, nombre, animDelay = 0 }) {
  const [ref, isVisible] = useIntersectionObserver();
  const [effectiveDelay, setEffectiveDelay] = useState(animDelay);
  useEffect(() => {
    if (animDelay > 0 && window.matchMedia('(max-width: 768px)').matches) setEffectiveDelay(0);
  }, [animDelay]);
  const waLink = WA_BASE + encodeURIComponent(`Hola! Quiero consultar sobre el plan ${plan.plan} de ${nombre} en Unbex 💪`);
  return (
    <div
      ref={ref}
      className={`precio-card anim-scale${isVisible ? ' is-visible' : ''}${plan.destacado ? ' precio-card--destacado' : ''}`}
      style={effectiveDelay ? { '--anim-delay': `${effectiveDelay}ms` } : undefined}
    >
      {plan.destacado && <span className="precio-card__badge">Más elegido</span>}
      <p className="precio-card__plan">{plan.plan}</p>
      <p className="precio-card__precio">{fmt(plan.precio)}</p>
      <div className="precio-card__efvo">
        <span className="precio-card__efvo-label">Efectivo</span>
        <span className="precio-card__efvo-valor">{fmt(plan.efvo)}</span>
      </div>
      <a href={waLink} target="_blank" rel="noopener noreferrer" className="precio-card__btn">
        Consultanos
      </a>
    </div>
  );
}

function BloquePrecios({ bloque }) {
  return (
    <div className="precio-bloque">
      <div className="precio-bloque__header">
        <h3 className="precio-bloque__nombre">{bloque.nombre}</h3>
        <p className="precio-bloque__desc">{bloque.desc}</p>
      </div>
      <div className="precio-bloque__cards">
        {bloque.planes.map((p, i) => (
          <PlanCard key={p.plan} plan={p} nombre={bloque.nombre} animDelay={i * 60} />
        ))}
      </div>
    </div>
  );
}

function PreciosAcordeon() {
  const [openIds, setOpenIds] = useState([]);

  function toggle(id) {
    setOpenIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  }

  return (
    <div className="precios-acordeon">
      {TABS.map(t => {
        const isOpen = openIds.includes(t.id);
        const bloque = BLOQUES_POR_TAB[t.id][0];
        return (
          <div key={t.id} className={`precios-acordeon__item${isOpen ? ' precios-acordeon__item--open' : ''}`}>
            <button className="precios-acordeon__header" onClick={() => toggle(t.id)}>
              <span className="precios-acordeon__label">{t.label}</span>
              <span className="precios-acordeon__chevron">{isOpen ? '−' : '+'}</span>
            </button>
            <div className="precios-acordeon__body">
              <div className="precios-acordeon__cards">
                {bloque.planes.map((p, i) => (
                  <PlanCard key={p.plan} plan={p} nombre={bloque.nombre} animDelay={0} />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function PreciosSection() {
  const [tab, setTab] = useState('black');
  const [isMobile, setIsMobile] = useState(false);
  const tabsRef = useRef([]);
  const activeIndex = TABS.findIndex(t => t.id === tab);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    setIsMobile(mq.matches);
    const handler = e => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const waInicio  = WA_BASE + encodeURIComponent('Hola! Quiero empezar con las 3 clases de prueba en Unbex 🎉');
  const waConsulta = WA_BASE + encodeURIComponent('Hola! Quiero consultar sobre los planes de Unbex 💪');

  return (
    <section className="precios" id="precios">
      <div className="section__container">

        <div className="precios__cta-top">
          <p className="precios__cta-top-text">3 clases de prueba — Empezá hoy</p>
          <a href={waInicio} target="_blank" rel="noopener noreferrer" className="precios__cta-top-btn">
            Escribinos por WhatsApp
          </a>
        </div>

        <h2 className="section__title">Planes y Precios</h2>
        <p className="precios__como-link">
          <Link href="/como-funcionan-los-abonos">
            Conocé cómo funcionan nuestros planes antes de elegir
          </Link>
        </p>

        {isMobile ? (
          <PreciosAcordeon />
        ) : (
          <>
            <div className="tab-hint-wrap">
              <div className="horarios__tabs">
                <TabHint activeIndex={activeIndex} tabsRef={tabsRef} />
                {TABS.map((t, i) => (
                  <button
                    key={t.id}
                    ref={el => tabsRef.current[i] = el}
                    className={`horarios__tab${tab === t.id ? ' horarios__tab--active' : ''}`}
                    onClick={() => setTab(t.id)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {TABS.map(t => (
              <div key={t.id} className={`horarios__panel${tab === t.id ? ' horarios__panel--active' : ''}`}>
                <div className="precios__contenido">
                  {BLOQUES_POR_TAB[t.id].map(bloque => (
                    <BloquePrecios key={bloque.id} bloque={bloque} />
                  ))}
                </div>
              </div>
            ))}
          </>
        )}

        <div className="precios__cta-bottom">
          <p className="precios__cta-bottom-text">¿No encontrás tu plan? Consultanos</p>
          <a href={waConsulta} target="_blank" rel="noopener noreferrer" className="precios__cta-bottom-btn">
            Hablar por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
