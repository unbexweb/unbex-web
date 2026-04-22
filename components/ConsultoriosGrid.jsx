'use client';

import { useState } from 'react';

function ConsultorioCard({ item, isOpen, onToggle }) {
  return (
    <div
      className={`consultorio-card${isOpen ? ' consultorio-card--open' : ''}`}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onToggle()}
      aria-expanded={isOpen}
    >
      <div className="consultorio-card__header">
        <span className="consultorio-card__icono">{item.icono}</span>
        <span className="consultorio-card__nombre">{item.nombre}</span>
        <span className="consultorio-card__chevron">{isOpen ? '−' : '+'}</span>
      </div>
      <div className="consultorio-card__body">
        <p className="consultorio-card__desc">{item.desc}</p>
        <a
          href={item.wa}
          target="_blank"
          rel="noopener noreferrer"
          className="consultorio-card__btn"
          onClick={e => e.stopPropagation()}
        >
          Solicitar reserva
        </a>
      </div>
    </div>
  );
}

export default function ConsultoriosGrid({ items }) {
  const [openId, setOpenId] = useState(null);

  function toggle(nombre) {
    setOpenId(prev => (prev === nombre ? null : nombre));
  }

  return (
    <div className="consultorios-grid">
      {items.map(item => (
        <ConsultorioCard
          key={item.nombre}
          item={item}
          isOpen={openId === item.nombre}
          onToggle={() => toggle(item.nombre)}
        />
      ))}
    </div>
  );
}
