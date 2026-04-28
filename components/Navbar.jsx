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
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  function closeAll() {
    setMenuOpen(false);
    setOpenDropdown(null);
  }

  function toggleDropdown(name) {
    setOpenDropdown(prev => prev === name ? null : name);
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

  return (
    <>
      {/* Logo flotante */}
      <Link href="/" className="navbar__logo" id="siteLogo">
        <Image src="/img/logo.png" alt="Unbex" width={160} height={94} priority />
      </Link>

      {/* Nav lateral — solo home, solo desktop, siempre visible */}
      {isHome && (
        <nav className="navbar-lateral navbar-lateral--activo" aria-label="Navegación lateral">
          <ul className="navbar-lateral__menu">
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
              <a href="#contacto" className="navbar-lateral__link" onClick={closeAll}>Contacto</a>
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
          </ul>
        </nav>
      )}

      <nav className={`navbar${isHome ? ' navbar--hero-mode' : ''}`} id="navbar" ref={navRef}>
        <div className="navbar__container">

          <button
            className="navbar__toggle"
            id="navbarToggle"
            aria-label="Abrir menú"
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
                      <a href={c.wa} target="_blank" rel="noopener noreferrer" onClick={closeAll}>
                        {c.icono} {c.nombre}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>

              <li><Link href="/#horarios"               className="navbar__link" onClick={closeAll}>Horarios</Link></li>
              <li><Link href="/#precios"                className="navbar__link" onClick={closeAll}>Precios</Link></li>
              <li><Link href="/#contacto"               className="navbar__link" onClick={closeAll}>Contacto</Link></li>
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
