'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { disciplinas, consultorios } from '@/data/disciplines';

const DISC_BLACK = disciplinas.filter(d => d.salon === 'black');
const DISC_MB    = disciplinas.filter(d => d.salon === 'mb');

export default function Navbar({ onDisciplinaHover = null, estaEnHero = false }) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isDisciplinaPage = pathname.startsWith('/disciplinas/');
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(true); // true por defecto → SSR-safe: no monta lateral nav
  const [disciplinasLateralAbiertas, setDisciplinasLateralAbiertas] = useState(false);
  const [salonesFlyoutAbiertos, setSalonesFlyoutAbiertos] = useState({ black: false, mb: false });
  const [flyoutPos, setFlyoutPos] = useState({ top: 0, left: 0 });
  const navRef = useRef(null);
  const disciplinasFlyoutRef = useRef(null);
  const disciplinasBtnRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  function closeAll() {
    setMenuOpen(false);
    setOpenDropdown(null);
    setDisciplinasLateralAbiertas(false);
  }

  function toggleDropdown(name) {
    setOpenDropdown(prev => prev === name ? null : name);
  }

  function toggleSalonFlyout(salon) {
    setSalonesFlyoutAbiertos(prev => ({ ...prev, [salon]: !prev[salon] }));
  }

  function toggleDisciplinasLateral() {
    if (!disciplinasLateralAbiertas && disciplinasBtnRef.current) {
      const rect = disciplinasBtnRef.current.getBoundingClientRect();
      setFlyoutPos({ top: rect.top, left: rect.right + 8 });
    }
    setDisciplinasLateralAbiertas(prev => !prev);
  }

  function handleLogoClick(e) {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeAll();
  }

  // Cierra el dropdown al hacer click fuera del navbar
  useEffect(() => {
    if (!openDropdown) return;
    function onClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [openDropdown]);

  // Cierra el flyout de Disciplinas (nav lateral) al hacer click fuera
  useEffect(() => {
    if (!disciplinasLateralAbiertas) return;
    function onClickOutside(e) {
      if (
        disciplinasFlyoutRef.current?.contains(e.target) ||
        disciplinasBtnRef.current?.contains(e.target)
      ) return;
      setDisciplinasLateralAbiertas(false);
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [disciplinasLateralAbiertas]);

  return (
    <>
      {/* Overlay para el menú mobile — cierra al tocar fuera */}
      {menuOpen && (
        <div className="navbar__overlay" onClick={closeAll} aria-hidden="true" />
      )}

      {/* Logo flotante */}
      <Link href="/" className="navbar__logo" id="siteLogo" onClick={handleLogoClick}>
        <Image src="/img/logo.png" alt="Unbex" width={160} height={94} priority />
      </Link>

      {/* Nav lateral — solo home, solo desktop, no se monta en mobile */}
      {isHome && !isMobile && (
        <nav className="navbar-lateral navbar-lateral--activo" aria-label="Navegación lateral">
          <ul className="navbar-lateral__menu">
            <li>
              <Link href="/nosotros" className="navbar-lateral__link" onClick={closeAll}>Nosotros</Link>
            </li>
            <li onMouseEnter={() => onDisciplinaHover?.(null)} onMouseLeave={() => onDisciplinaHover?.(null)}>
              <a href="#disciplinas" className="navbar-lateral__link" onClick={closeAll}>Disciplinas</a>
            </li>
            <li onMouseEnter={() => onDisciplinaHover?.('consultorios')} onMouseLeave={() => onDisciplinaHover?.(null)}>
              <a href="#consultorios" className="navbar-lateral__link" onClick={closeAll}>Consultorios</a>
            </li>
            <li>
              <a href="#horarios" className="navbar-lateral__link" onClick={closeAll}>Horarios</a>
            </li>
            <li onMouseEnter={() => onDisciplinaHover?.('precios')} onMouseLeave={() => onDisciplinaHover?.(null)}>
              <a href="#precios" className="navbar-lateral__link" onClick={closeAll}>Precios</a>
            </li>
            <li>
              <Link href="/comunidad-unbex" className="navbar-lateral__link navbar-lateral__link--cta" onClick={closeAll}>
                Comunidad Unbex
              </Link>
            </li>
            <li>
              <Link href="/trabajar-con-nosotros" className="navbar-lateral__link navbar-lateral__link--cta" onClick={closeAll}>
                Trabajá con nosotros
              </Link>
            </li>
            <li>
              <Link href="/tene-tu-unbex" className="navbar-lateral__link navbar-lateral__link--cta" onClick={closeAll}>
                Tené tu Unbex
              </Link>
            </li>
            <li>
              <a href="#contacto" className="navbar-lateral__link" onClick={closeAll}>Contacto</a>
            </li>
          </ul>
        </nav>
      )}

      {/* Nav lateral — páginas de disciplinas, solo desktop */}
      {isDisciplinaPage && !isMobile && (
        <nav className="navbar-lateral navbar-lateral--activo" aria-label="Navegación lateral">
          <ul className="navbar-lateral__menu">
            <li>
              <Link href="/nosotros" className="navbar-lateral__link" onClick={closeAll}>Nosotros</Link>
            </li>

            <li>
              <button
                ref={disciplinasBtnRef}
                className="navbar-lateral__link navbar-lateral__link--toggle"
                onClick={toggleDisciplinasLateral}
                aria-expanded={disciplinasLateralAbiertas}
              >
                Disciplinas
                <span aria-hidden="true">{disciplinasLateralAbiertas ? '▴' : '▾'}</span>
              </button>
            </li>

            <li>
              <Link href="/#consultorios" className="navbar-lateral__link" onClick={closeAll}>Consultorios</Link>
            </li>
            <li>
              <Link href="/#horarios" className="navbar-lateral__link" onClick={closeAll}>Horarios</Link>
            </li>
            <li>
              <Link href="/#precios" className="navbar-lateral__link" onClick={closeAll}>Precios</Link>
            </li>
            <li>
              <Link href="/comunidad-unbex" className="navbar-lateral__link navbar-lateral__link--cta" onClick={closeAll}>
                Comunidad Unbex
              </Link>
            </li>
            <li>
              <Link href="/trabajar-con-nosotros" className="navbar-lateral__link navbar-lateral__link--cta" onClick={closeAll}>
                Trabajá con nosotros
              </Link>
            </li>
            <li>
              <Link href="/tene-tu-unbex" className="navbar-lateral__link navbar-lateral__link--cta" onClick={closeAll}>
                Tené tu Unbex
              </Link>
            </li>
            <li>
              <Link href="/#contacto" className="navbar-lateral__link" onClick={closeAll}>Contacto</Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Flyout de Disciplinas — fuera del sidebar (que tiene overflow-y:auto) para que no se recorte */}
      {isDisciplinaPage && !isMobile && disciplinasLateralAbiertas && (
        <ul
          className="navbar-lateral__flyout"
          ref={disciplinasFlyoutRef}
          style={{ top: flyoutPos.top, left: flyoutPos.left }}
        >
          <li>
            <button
              className="navbar-lateral__flyout-header"
              onClick={() => toggleSalonFlyout('black')}
              aria-expanded={salonesFlyoutAbiertos.black}
            >
              Salón Black
              <span aria-hidden="true">{salonesFlyoutAbiertos.black ? '▴' : '▾'}</span>
            </button>
          </li>
          {salonesFlyoutAbiertos.black && DISC_BLACK.map(d => (
            <li key={d.clave}>
              <Link href={`/disciplinas/${d.clave}`} className="navbar-lateral__link" onClick={closeAll}>{d.nombre}</Link>
            </li>
          ))}
          <li>
            <button
              className="navbar-lateral__flyout-header"
              onClick={() => toggleSalonFlyout('mb')}
              aria-expanded={salonesFlyoutAbiertos.mb}
            >
              Salón M&amp;B
              <span aria-hidden="true">{salonesFlyoutAbiertos.mb ? '▴' : '▾'}</span>
            </button>
          </li>
          {salonesFlyoutAbiertos.mb && DISC_MB.map(d => (
            <li key={d.clave}>
              <Link href={`/disciplinas/${d.clave}`} className="navbar-lateral__link" onClick={closeAll}>{d.nombre}</Link>
            </li>
          ))}
        </ul>
      )}

      <nav className={`navbar${isHome || isDisciplinaPage ? ' navbar--hero-mode' : ''}`} id="navbar" ref={navRef}>
        <div className="navbar__container">

          <button
            className="navbar__toggle"
            id="navbarToggle"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <span /><span /><span />
          </button>

          {/* Menú home — links directos sin dropdowns */}
          {isHome && (
            <ul className={`navbar__menu${menuOpen ? ' open' : ''}`} id="navbarMenu">
              <li><a href="#disciplinas" className="navbar__link" onClick={closeAll}>Disciplinas</a></li>
              <li><a href="#consultorios" className="navbar__link" onClick={closeAll}>Consultorios</a></li>
              <li><a href="#horarios"    className="navbar__link" onClick={closeAll}>Horarios</a></li>
              <li><a href="#precios"     className="navbar__link" onClick={closeAll}>Precios</a></li>
              <li><a href="#contacto"    className="navbar__link" onClick={closeAll}>Contacto</a></li>
              <li><Link href="/nosotros" className="navbar__link" onClick={closeAll}>Nosotros</Link></li>
              <li>
                <Link href="/comunidad-unbex" className="navbar__link navbar__link--cta" onClick={closeAll}>
                  Comunidad Unbex
                </Link>
              </li>
              <li>
                <Link href="/trabajar-con-nosotros" className="navbar__link navbar__link--cta" onClick={closeAll}>
                  Trabajá con nosotros
                </Link>
              </li>
              <li>
                <Link href="/tene-tu-unbex" className="navbar__link navbar__link--cta" onClick={closeAll}>
                  Tené tu Unbex
                </Link>
              </li>
            </ul>
          )}

          {/* Menú páginas internas — con dropdowns en Disciplinas y Consultorios */}
          {!isHome && (
            <ul className={`navbar__menu${menuOpen ? ' open' : ''}`} id="navbarMenu">

              <li className={`navbar__item navbar__item--dropdown${openDropdown === 'disciplinas' ? ' open' : ''}`}>
                <button
                  className="navbar__link"
                  onClick={() => toggleDropdown('disciplinas')}
                  aria-expanded={openDropdown === 'disciplinas'}
                >
                  Disciplinas ▾
                </button>
                <ul className="navbar__dropdown" id="disciplinasDropdown">
                  <li className="dropdown__salon-header">Salón Black</li>
                  {DISC_BLACK.map(d => (
                    <li key={d.clave}>
                      <Link href={`/disciplinas/${d.clave}`} onClick={closeAll}>{d.nombre}</Link>
                    </li>
                  ))}
                  <li className="dropdown__salon-header">Salón M&amp;B</li>
                  {DISC_MB.map(d => (
                    <li key={d.clave}>
                      <Link href={`/disciplinas/${d.clave}`} onClick={closeAll}>{d.nombre}</Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className={`navbar__item navbar__item--dropdown${openDropdown === 'consultorios' ? ' open' : ''}`}>
                <button
                  className="navbar__link"
                  onClick={() => toggleDropdown('consultorios')}
                  aria-expanded={openDropdown === 'consultorios'}
                >
                  Consultorios ▾
                </button>
                <ul className="navbar__dropdown">
                  {consultorios.map(c => (
                    <li key={c.nombre}>
                      <Link href="/#consultorios" onClick={closeAll}>
                        {c.icono} {c.nombre}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li><Link href="/#horarios"               className="navbar__link" onClick={closeAll}>Horarios</Link></li>
              <li><Link href="/#precios"                className="navbar__link" onClick={closeAll}>Precios</Link></li>
              <li><Link href="/#contacto"               className="navbar__link" onClick={closeAll}>Contacto</Link></li>
              <li><Link href="/nosotros"                className="navbar__link" onClick={closeAll}>Nosotros</Link></li>
              <li><Link href="/comunidad-unbex"         className="navbar__link navbar__link--cta" onClick={closeAll}>Comunidad Unbex</Link></li>
              <li><Link href="/trabajar-con-nosotros"   className="navbar__link navbar__link--cta" onClick={closeAll}>Trabajá con nosotros</Link></li>
              <li><Link href="/tene-tu-unbex"           className="navbar__link navbar__link--cta" onClick={closeAll}>Tené tu Unbex</Link></li>

            </ul>
          )}

        </div>
      </nav>
    </>
  );
}
