'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar({ onDisciplinaHover = null, estaEnHero = false }) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);
  const closeAll = () => setMenuOpen(false);

  return (
    <>
      {/* Logo flotante */}
      <Link href="/" className="navbar__logo" id="siteLogo">
        <Image src="/img/logo.png" alt="Unbex" width={160} height={94} priority style={{ height: '100%', width: 'auto' }} />
      </Link>

      {/* Nav lateral — solo home, solo desktop, solo en hero */}
      {isHome && (
        <nav className={`navbar-lateral${estaEnHero ? ' navbar-lateral--activo' : ''}`} aria-label="Navegación lateral">
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

          {isHome && (
            <ul className={`navbar__menu${menuOpen ? ' open' : ''}`} id="navbarMenu">
              <li><a href="#disciplinas" className="navbar__link" onClick={closeAll}>Disciplinas</a></li>
              <li><a href="#consultorios"   className="navbar__link" onClick={closeAll}>Consultorios</a></li>
              <li><a href="#horarios"    className="navbar__link" onClick={closeAll}>Horarios</a></li>
              <li><a href="#precios"     className="navbar__link" onClick={closeAll}>Precios</a></li>
              <li><a href="#contacto"    className="navbar__link" onClick={closeAll}>Contacto</a></li>
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

          {!isHome && (
            <ul className={`navbar__menu${menuOpen ? ' open' : ''}`} id="navbarMenu">
              <li><Link href="/#disciplinas" className="navbar__link" onClick={closeAll}>Disciplinas</Link></li>
              <li><Link href="/#consultorios"   className="navbar__link" onClick={closeAll}>Consultorios</Link></li>
              <li><Link href="/#horarios"    className="navbar__link" onClick={closeAll}>Horarios</Link></li>
              <li><Link href="/#precios"     className="navbar__link" onClick={closeAll}>Precios</Link></li>
              <li><Link href="/#contacto"           className="navbar__link" onClick={closeAll}>Contacto</Link></li>
              <li><Link href="/trabajar-con-nosotros" className="navbar__link navbar__link--cta" onClick={closeAll}>Trabajá con nosotros</Link></li>
              <li><Link href="/tene-tu-unbex"         className="navbar__link navbar__link--cta" onClick={closeAll}>Tené tu Unbex</Link></li>
            </ul>
          )}

        </div>
      </nav>
    </>
  );
}
