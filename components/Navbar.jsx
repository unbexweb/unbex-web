'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { disciplinas, servicios } from '@/data/disciplines';

export default function Navbar({ onDisciplinaHover = null, estaEnHero = false }) {
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
    <>
      {/* Logo flotante — fuera del nav para no romper position:fixed con backdrop-filter */}
      <Link href="/" className="navbar__logo" id="siteLogo">
        <Image src="/img/logo.png" alt="Unbex" width={160} height={94} priority style={{ height: '100%', width: 'auto' }} />
      </Link>

      {/* Nav lateral — solo home, solo desktop, solo en hero */}
      {isHome && (
        <nav className={`navbar-lateral${estaEnHero ? ' navbar-lateral--activo' : ''}`} aria-label="Navegación lateral">
          <ul className="navbar-lateral__menu">

            <li
              onMouseEnter={() => onDisciplinaHover?.(black[0]?.clave ?? null)}
              onMouseLeave={() => onDisciplinaHover?.(null)}
            >
              <a href="#disciplinas" className="navbar-lateral__link" onClick={closeAll}>Disciplinas</a>
            </li>
            <li onMouseEnter={() => onDisciplinaHover?.('servicios')} onMouseLeave={() => onDisciplinaHover?.(null)}>
              <a href="#servicios" className="navbar-lateral__link" onClick={closeAll}>Servicios</a>
            </li>
            <li>
              <a href="#horarios" className="navbar-lateral__link" onClick={closeAll}>Horarios</a>
            </li>
            <li onMouseEnter={() => onDisciplinaHover?.('precios')} onMouseLeave={() => onDisciplinaHover?.(null)}>
              <a href="#precios" className="navbar-lateral__link" onClick={closeAll}>Precios</a>
            </li>
            <li>
              <a href="#contacto" className="navbar-lateral__link" onClick={closeAll}>Contacto</a>
            </li>
            <li>
              <Link href="/trabajar-con-nosotros" className="navbar-lateral__link navbar-lateral__link--cta" onClick={closeAll}>
                Trabajá con nosotros
              </Link>
            </li>

          </ul>
        </nav>
      )}

      <nav className={`navbar${isHome && estaEnHero ? ' navbar--hero-mode' : ''}`} id="navbar">
        <div className="navbar__container">

          <button
            className="navbar__toggle"
            id="navbarToggle"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <span /><span /><span />
          </button>

          {/* HOME: dropdown disciplinas con hover + anchors simples para el resto */}
          {isHome && (
            <ul className={`navbar__menu${menuOpen ? ' open' : ''}`} id="navbarMenu">

              <li
                className={`navbar__item navbar__item--dropdown${disciplinasOpen ? ' open' : ''}`}
                ref={discRef}
                onMouseEnter={() => setDisciplinasOpen(true)}
                onMouseLeave={() => { setDisciplinasOpen(false); onDisciplinaHover?.(null); }}
              >
                <a href="#disciplinas" className="navbar__link" onClick={closeAll}>Disciplinas ▾</a>
                <ul className="navbar__dropdown" id="disciplinasDropdown">
                  <li className="dropdown__salon-header">Salón Black</li>
                  {black.map(d => (
                    <li key={d.clave} onMouseEnter={() => onDisciplinaHover?.(d.clave)}>
                      <Link href={`/disciplinas/${d.clave}`} onClick={closeAll}>{d.nombre}</Link>
                    </li>
                  ))}
                  <li className="dropdown__salon-header">Salón M&amp;B</li>
                  {mb.map(d => (
                    <li key={d.clave} onMouseEnter={() => onDisciplinaHover?.(d.clave)}>
                      <Link href={`/disciplinas/${d.clave}`} onClick={closeAll}>{d.nombre}</Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li
                onMouseEnter={() => onDisciplinaHover?.('servicios')}
                onMouseLeave={() => onDisciplinaHover?.(null)}
              >
                <a href="#servicios" className="navbar__link" onClick={closeAll}>Servicios</a>
              </li>
              <li><a href="#horarios"    className="navbar__link" onClick={closeAll}>Horarios</a></li>
              <li
                onMouseEnter={() => onDisciplinaHover?.('precios')}
                onMouseLeave={() => onDisciplinaHover?.(null)}
              >
                <a href="#precios" className="navbar__link" onClick={closeAll}>Precios</a>
              </li>
              <li><a href="#contacto"    className="navbar__link" onClick={closeAll}>Contacto</a></li>
              <li>
                <Link href="/trabajar-con-nosotros" className="navbar__link navbar__link--cta" onClick={closeAll}>
                  Trabajá con nosotros
                </Link>
              </li>
            </ul>
          )}

          {/* OTRAS PÁGINAS: dropdowns */}
          {!isHome && (
            <ul className={`navbar__menu${menuOpen ? ' open' : ''}`} id="navbarMenu">

              <li className={`navbar__item navbar__item--dropdown${disciplinasOpen ? ' open' : ''}`} ref={discRef}>
                <a href="/#disciplinas" className="navbar__link"
                  onClick={e => { e.preventDefault(); setDisciplinasOpen(p => !p); setServiciosOpen(false); }}>
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

              <li className={`navbar__item navbar__item--dropdown${serviciosOpen ? ' open' : ''}`} ref={servRef}>
                <a href="/#servicios" className="navbar__link"
                  onClick={e => { e.preventDefault(); setServiciosOpen(p => !p); setDisciplinasOpen(false); }}>
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
    </>
  );
}
