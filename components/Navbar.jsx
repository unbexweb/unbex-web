'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { disciplinas, servicios } from '@/data/disciplines';

export default function Navbar() {
  const [menuOpen, setMenuOpen]         = useState(false);
  const [disciplinasOpen, setDisciplinasOpen] = useState(false);
  const [serviciosOpen, setServiciosOpen]     = useState(false);

  const discRef = useRef(null);
  const servRef = useRef(null);

  // Cerrar dropdowns al click fuera
  useEffect(() => {
    function handleClick(e) {
      if (discRef.current && !discRef.current.contains(e.target)) setDisciplinasOpen(false);
      if (servRef.current && !servRef.current.contains(e.target)) setServiciosOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const closeAll = () => { setDisciplinasOpen(false); setServiciosOpen(false); setMenuOpen(false); };

  const black = disciplinas.filter(d => d.salon === 'black');
  const mb    = disciplinas.filter(d => d.salon === 'mb');

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link href="/" className="navbar__logo">
          <Image src="/img/logo.png" alt="Unbex" width={120} height={64} priority />
        </Link>

        {/* Hamburguesa */}
        <button
          className="navbar__toggle"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span /><span /><span />
        </button>

        {/* Menú */}
        <ul className={`navbar__menu${menuOpen ? ' open' : ''}`}>

          {/* DISCIPLINAS */}
          <li
            className={`navbar__item navbar__item--dropdown${disciplinasOpen ? ' open' : ''}`}
            ref={discRef}
          >
            <button
              className="navbar__link"
              onClick={() => { setDisciplinasOpen(prev => !prev); setServiciosOpen(false); }}
              aria-expanded={disciplinasOpen}
            >
              Disciplinas ▾
            </button>
            <ul className="navbar__dropdown" id="disciplinasDropdown">
              <li className="dropdown__salon-header">Salón Black</li>
              {black.map(d => (
                <li key={d.clave}>
                  <Link href={`/disciplinas/${d.clave}`} onClick={closeAll}>{d.nombre}</Link>
                </li>
              ))}
              <li className="dropdown__salon-header">Salón M&amp;B</li>
              {mb.map(d => (
                <li key={d.clave}>
                  <Link href={`/disciplinas/${d.clave}`} onClick={closeAll}>{d.nombre}</Link>
                </li>
              ))}
            </ul>
          </li>

          {/* SERVICIOS */}
          <li
            className={`navbar__item navbar__item--dropdown${serviciosOpen ? ' open' : ''}`}
            ref={servRef}
          >
            <button
              className="navbar__link"
              onClick={() => { setServiciosOpen(prev => !prev); setDisciplinasOpen(false); }}
              aria-expanded={serviciosOpen}
            >
              Servicios ▾
            </button>
            <ul className="navbar__dropdown">
              {servicios.map(s => (
                <li key={s.nombre}>
                  <Link href="/#servicios" onClick={closeAll}>
                    {s.icono} {s.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* HORARIOS */}
          <li className="navbar__item">
            <Link href="/#horarios" className="navbar__link" onClick={closeAll}>
              Horarios
            </Link>
          </li>

          {/* CTA */}
          <li className="navbar__item">
            <Link href="/trabajar-con-nosotros" className="navbar__link navbar__link--cta" onClick={closeAll}>
              Trabajá con nosotros
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
