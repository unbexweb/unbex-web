'use client';

import { useState, useEffect, useRef } from 'react';
import { precios, WA_NUMBER } from '@/data/disciplines';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import TabHint from '@/components/TabHint';

const WA_BASE = 'https://wa.me/' + WA_NUMBER + '?text=';

const TABS = [
  { id: 'black',          label: 'Salón Black'    },
  { id: 'mb',             label: 'Salón M&B'      },
  { id: 'full',           label: 'Full Unbex'     },
  { id: 'jiu-jitsu',      label: 'Jiu Jitsu'      },
  { id: 'jubilados',      label: 'Jubilados +70'  },
  { id: 'open-box',       label: 'Open Box'       },
  { id: 'open-matutino',  label: 'Open Matutino'  },
  { id: 'all-out',        label: 'All Out'        },
];

const BLOQUES_POR_TAB = {
  black:           [precios.clases.find(b => b.id === 'black')],
  mb:              [precios.clases.find(b => b.id === 'mb')],
  full:            [precios.clases.find(b => b.id === 'full')],
  'jiu-jitsu':     [precios.clases.find(b => b.id === 'jiu-jitsu')],
  jubilados:       [precios.clases.find(b => b.id === 'jubilados')],
  'open-box':      [precios.espacio.find(b => b.id === 'open-box')],
  'open-matutino': [precios.espacio.find(b => b.id === 'open-matutino')],
  'all-out':       [precios.espacio.find(b => b.id === 'all-out')],
};

const MEDIOS_PAGO = [
  { icono: '💵', nombre: 'Efectivo' },
  { icono: '🔄', nombre: 'Transferencia / CVU' },
  { icono: '📱', nombre: 'Mercado Pago' },
  { icono: '💳', nombre: 'MODO' },
  { icono: '💳', nombre: 'Tarjetas de débito y crédito' },
];

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
        <span className="precio-card__efvo-label">Promo efectivo</span>
        <span className="precio-card__efvo-valor">{fmt(plan.efvo)}</span>
      </div>
      <a href={waLink} target="_blank" rel="noopener noreferrer" className="precio-card__btn">
        Consultanos
      </a>
    </div>
  );
}

function BloquePrecios({ bloque }) {
  const count = bloque.planes.length;
  return (
    <div className="precio-bloque">
      <div className="precio-bloque__header">
        <h3 className="precio-bloque__nombre">{bloque.nombre}</h3>
        <p className="precio-bloque__desc">{bloque.desc}</p>
      </div>
      <div className={`precio-bloque__cards precio-bloque__cards--${count}`}>
        {bloque.planes.map((p, i) => (
          <PlanCard key={p.plan} plan={p} nombre={bloque.nombre} animDelay={i * 60} />
        ))}
      </div>
    </div>
  );
}

function PreciosAcordeon({ initialOpenId = null }) {
  // PreciosAcordeon recién se monta cuando el padre ya resolvió isMobile y el tab
  // de la URL (ambos se setean en efectos del padre dentro del mismo commit), así
  // que initialOpenId ya viene correcto en el primer render.
  const [openIds, setOpenIds] = useState(initialOpenId ? [initialOpenId] : []);

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
  const [tabDesdeUrl, setTabDesdeUrl] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const tabsRef = useRef([]);
  const sectionRef = useRef(null);
  const activeIndex = TABS.findIndex(t => t.id === tab);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    setIsMobile(mq.matches);
    const handler = e => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const tabParam = new URLSearchParams(window.location.search).get('tab');
    if (TABS.some(t => t.id === tabParam)) {
      setTab(tabParam);
      setTabDesdeUrl(tabParam);
    }
  }, []);

  // PreciosSection se carga con dynamic(ssr:false), así que id="precios" no existe
  // en el HTML inicial: el scroll nativo del navegador al hash puede no encontrarlo.
  // Lo hacemos a mano una vez que la sección ya está montada.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const debeScrollear = TABS.some(t => t.id === params.get('tab')) || window.location.hash === '#precios';
    if (!debeScrollear) return;

    const timer = setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const waInicio  = WA_BASE + encodeURIComponent('Hola! Quiero empezar con las 3 clases de prueba en Unbex 🎉');
  const waConsulta = WA_BASE + encodeURIComponent('Hola! Quiero consultar sobre los planes de Unbex 💪');

  return (
    <section className="precios" id="precios" ref={sectionRef}>
      <div className="section__container">

        <div className="precios__cta-top">
          <p className="precios__cta-top-text">3 clases de prueba — Empezá hoy</p>
          <a href={waInicio} target="_blank" rel="noopener noreferrer" className="precios__cta-top-btn">
            Escribinos por WhatsApp
          </a>
        </div>

        <h2 className="section__title">Planes y Precios</h2>

        {isMobile ? (
          <PreciosAcordeon initialOpenId={tabDesdeUrl} />
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

        <div className="precios__medios-pago">
          <p className="precios__medios-titulo">Medios de pago</p>
          <div className="precios__medios-grid">
            {MEDIOS_PAGO.map(m => (
              <span key={m.nombre} className="precios__medio">
                <span className="precios__medio-icon">{m.icono}</span>
                <span className="precios__medio-nombre">{m.nombre}</span>
              </span>
            ))}
          </div>
        </div>

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
