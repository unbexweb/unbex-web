'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { disciplinas, servicios } from '@/data/disciplines';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [menuOpen, setMenuOpen]               = useState(false);
  const [disciplinasOpen, setDisciplinasOpen] = useState(false);
  const [serviciosOpen, setServiciosOpen]     = useState(false);

  const discRef = useRef(null);
  const servRef = useRef(null);

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
    <nav className="navbar" id="navbar">
      <div className="navbar__container">

        <Link href="/" className="navbar__logo" id="siteLogo">
          <Image src="/img/logo.png" alt="Unbex" width={120} height={64} priority />
        </Link>

        {/* Hamburguesa */}
        <button
          className="navbar__toggle"
          id="navbarToggle"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span /><span /><span />
        </button>

        {/* ── HOME: anchors simples ── */}
        {isHome && (
          <ul className={`navbar__menu${menuOpen ? ' open' : ''}`} id="navbarMenu">
            <li><a href="#disciplinas" className="navbar__link" onClick={closeAll}>Disciplinas</a></li>
            <li><a href="#servicios"   className="navbar__link" onClick={closeAll}>Servicios</a></li>
            <li><a href="#horarios"    className="navbar__link" onClick={closeAll}>Horarios</a></li>
            <li><a href="#precios"     className="navbar__link" onClick={closeAll}>Precios</a></li>
            <li><a href="#contacto"    className="navbar__link" onClick={closeAll}>Contacto</a></li>
            <li>
              <Link href="/trabajar-con-nosotros" className="navbar__link navbar__link--cta" onClick={closeAll}>
                Trabajá con nosotros
              </Link>
            </li>
          </ul>
        )}

        {/* ── OTRAS PÁGINAS: dropdowns ── */}
        {!isHome && (
          <ul className={`navbar__menu${menuOpen ? ' open' : ''}`} id="navbarMenu">

            {/* Disciplinas dropdown */}
            <li
              className={`navbar__item navbar__item--dropdown${disciplinasOpen ? ' open' : ''}`}
              ref={discRef}
            >
              <a
                href="/#disciplinas"
                className="navbar__link"
                onClick={e => { e.preventDefault(); setDisciplinasOpen(prev => !prev); setServiciosOpen(false); }}
              >
                Disciplinas ▾
              </a>
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

            {/* Servicios dropdown */}
            <li
              className={`navbar__item navbar__item--dropdown${serviciosOpen ? ' open' : ''}`}
              ref={servRef}
            >
              <a
                href="/#servicios"
                className="navbar__link"
                onClick={e => { e.preventDefault(); setServiciosOpen(prev => !prev); setDisciplinasOpen(false); }}
              >
                Servicios ▾
              </a>
              <ul className="navbar__dropdown" id="serviciosDropdown">
                {servicios.map(s => (
                  <li key={s.nombre}>
                    <Link href="/#servicios" onClick={closeAll}>{s.icono} {s.nombre}</Link>
                  </li>
                ))}
              </ul>
            </li>

            <li><Link href="/#precios"  className="navbar__link" onClick={closeAll}>Precios</Link></li>
            <li><Link href="/#contacto" className="navbar__link" onClick={closeAll}>Contacto</Link></li>
          </ul>
        )}

      </div>
    </nav>
  );
}
