'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { disciplinas } from '@/data/disciplines';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [disciplinasOpen, setDisciplinasOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDisciplinasOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
          <li className={`navbar__item navbar__item--dropdown${disciplinasOpen ? ' open' : ''}`} ref={dropdownRef}>
            <button
              className="navbar__link"
              onClick={() => setDisciplinasOpen(prev => !prev)}
              aria-expanded={disciplinasOpen}
            >
              Disciplinas ▾
            </button>

            <ul className="navbar__dropdown" id="disciplinasDropdown">
              <li className="dropdown__salon-header">Salón Black</li>
              {black.map(d => (
                <li key={d.clave}>
                  <Link href={`/disciplinas/${d.clave}`} onClick={() => { setDisciplinasOpen(false); setMenuOpen(false); }}>
                    {d.nombre}
                  </Link>
                </li>
              ))}
              <li className="dropdown__salon-header">Salón M&amp;B</li>
              {mb.map(d => (
                <li key={d.clave}>
                  <Link href={`/disciplinas/${d.clave}`} onClick={() => { setDisciplinasOpen(false); setMenuOpen(false); }}>
                    {d.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="navbar__item">
            <Link href="/#horarios" className="navbar__link" onClick={() => setMenuOpen(false)}>
              Horarios
            </Link>
          </li>

          <li className="navbar__item">
            <Link href="/trabajar-con-nosotros" className="navbar__link navbar__link--cta" onClick={() => setMenuOpen(false)}>
              Trabajá con nosotros
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
