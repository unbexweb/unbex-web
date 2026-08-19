'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import dynamic from 'next/dynamic';
import HeroIndex from '@/components/HeroIndex';
import DisciplinaCard from '@/components/DisciplinaCard';
import HorariosGrid from '@/components/HorariosGrid';
const PreciosSection = dynamic(() => import('@/components/PreciosSection'), { ssr: false });
import AnimatedSection from '@/components/AnimatedSection';
import WhatsappFloat from '@/components/WhatsappFloat';
import Footer from '@/components/Footer';
import ConsultoriosGrid from '@/components/ConsultoriosGrid';
import MarqueeBanner from '@/components/MarqueeBanner';
import { disciplinas, consultorios } from '@/data/disciplines';

export default function Home() {
  const [videoActivo, setVideoActivo] = useState(null);
  const [estaEnHero, setEstaEnHero] = useState(true);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [cargando, setCargando] = useState(true);
  const [saliendo, setSaliendo] = useState(false);
  const listoRef = useRef(false);

  function handleVideoListo() {
    if (listoRef.current) return;
    listoRef.current = true;
    setSaliendo(true);
    setTimeout(() => setCargando(false), 400);
  }

  useEffect(() => {
    const yaVisto = sessionStorage.getItem('heroLoaderVisto');
    if (yaVisto) {
      setCargando(false);
      return;
    }
    sessionStorage.setItem('heroLoaderVisto', 'true');
    const timer = setTimeout(handleVideoListo, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      const hero = document.getElementById('hero');
      if (hero) setEstaEnHero(y < hero.offsetHeight * 0.85);
      setBannerVisible(y < 20);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <MarqueeBanner visible={bannerVisible} />
      {cargando && (
        <div className={`page-loader${saliendo ? ' page-loader--saliendo' : ''}`}>
          <Image
            src="/img/logo.png"
            alt="Unbex"
            width={180}
            height={80}
            className="page-loader__logo"
            priority
          />
        </div>
      )}
      <Topbar oculto={true} />
      <Navbar onDisciplinaHover={setVideoActivo} estaEnHero={estaEnHero} />
      <main className="home-main">
        <HeroIndex videoActivo={videoActivo} estaEnHero={estaEnHero} onListo={handleVideoListo} />

        <div
          className={`hero-scroll-hint${bannerVisible ? '' : ' hero-scroll-hint--oculto'}`}
          onClick={() => document.getElementById('disciplinas')?.scrollIntoView({ behavior: 'smooth' })}
          role="button"
          aria-label="Ir a disciplinas"
        >
          <span className="hero-scroll-hint__chevrons" aria-hidden="true" />
        </div>

        {/* DISCIPLINAS */}
        <section className="disciplinas" id="disciplinas">

          {/* SALÓN BLACK */}
          <section className="section">
            <div className="section__container">
              <span className="section__eyebrow">SALÓN BLACK</span>
              <AnimatedSection as="h2" className="section__title">Fuerza y rendimiento</AnimatedSection>
              <AnimatedSection as="p" className="section__subtitle" animation="anim-fade" delay={100}>Entrenamiento de Fuerza y disciplinas de alta intensidad y potencia</AnimatedSection>
              <div className="cards">
                {disciplinas.filter(d => d.salon === 'black').map((d, i) => (
                  <DisciplinaCard key={d.clave} disciplina={d} animDelay={i * 80} />
                ))}
              </div>
            </div>
          </section>

          {/* SALÓN M&B */}
          <section className="section">
            <div className="section__container">
              <span className="section__eyebrow">SALÓN M&amp;B</span>
              <AnimatedSection as="h2" className="section__title">Movimiento y bienestar</AnimatedSection>
              <AnimatedSection as="p" className="section__subtitle" animation="anim-fade" delay={100}>Yoga, Pilates Mat, Zumba, artes marciales y más actividades grupales</AnimatedSection>
              <div className="cards">
                {disciplinas.filter(d => d.salon === 'mb').map((d, i) => (
                  <DisciplinaCard key={d.clave} disciplina={d} animDelay={i * 80} />
                ))}
              </div>
            </div>
          </section>

          {/* CONSULTORIOS */}
          <section className="section" id="consultorios">
            <div className="section__container">
              <span className="section__eyebrow">CONSULTORIO INTERDISCIPLINARIO</span>
              <AnimatedSection as="h2" className="section__title">Consultorios</AnimatedSection>
              <AnimatedSection as="p" className="section__subtitle" animation="anim-fade" delay={100}>
                En Unbex creemos que el entrenamiento es solo una parte del éxito, para complementarlo ofrecemos un abordaje interdisciplinario único con profesionales dedicados a optimizar tu cuerpo y mente.
              </AnimatedSection>
              <ConsultoriosGrid items={consultorios} />
            </div>
          </section>
        </section>

        {/* HORARIOS */}
        <HorariosGrid />

        {/* PRECIOS */}
        <PreciosSection />

        {/* CONTACTO */}
        <section className="contacto" id="contacto">
          <div className="section__container">
            <span className="section__eyebrow">ENCONTRANOS</span>
            <AnimatedSection as="h2" className="section__title">Contacto</AnimatedSection>
            <AnimatedSection as="p" className="section__subtitle" animation="anim-fade" delay={100}>
              Estamos en Villa Uruiza, listos para recibirte.
            </AnimatedSection>

            <div className="contacto__layout">
              <div className="contacto__info">
                <div className="contacto__dato">
                  <img src="/img/cards/Iconos_Ubicacion.png" alt="Ubicación" className="contacto__dato-icono" />
                  <div>
                    <p className="contacto__dato-titulo">Dirección</p>
                    <p className="contacto__dato-texto">Pacheco 1956, C1431<br />Ciudad Autónoma de Buenos Aires</p>
                  </div>
                </div>
                <div className="contacto__dato">
                  <img src="/img/cards/Iconos_Horarios.png" alt="Horarios" className="contacto__dato-icono" />
                  <div>
                    <p className="contacto__dato-titulo">Horarios</p>
                    <p className="contacto__dato-texto">Lunes a Viernes: 7:00 – 21:00<br />Sábados: 9:00 – 12:00</p>
                  </div>
                </div>
                <div className="contacto__dato">
                  <img src="/img/cards/wsp.png" alt="WhatsApp" className="contacto__dato-icono" />
                  <div>
                    <p className="contacto__dato-titulo">WhatsApp</p>
                    <a
                      href="https://wa.me/5491123989560"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contacto__dato-texto contacto__wa-link"
                    >
                      +54 9 11 2398-9560
                    </a>
                  </div>
                </div>

                <div className="contacto__dato">
                  <img src="/img/cards/Iconos_Calificacion de google.png" alt="Calificación Google" className="contacto__dato-icono" />
                  <div>
                    <p className="contacto__dato-titulo">Calificación en Google</p>
                    <a
                      href="https://search.google.com/local/writereview?placeid=ChIJw1OQBje3vJUR7CRv_4oo6tA&source=g.page.m.ia._&utm_source=gbp&laa=nmx-review-solicitation-ia2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contacto__dato-texto contacto__google-link"
                    >
                      <span className="contacto__estrellas">★★★★★</span>
                      <span> Ver reseñas en Google</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="contacto__mapa">
                <iframe
                  title="Ubicación Unbex"
                  src="https://maps.google.com/maps?q=Pacheco+1956%2C+C1431+Buenos+Aires%2C+Argentina&output=embed&z=16"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* BANNER TRABAJÁ CON NOSOTROS */}
        <section className="trabaja-banner">
          <div className="trabaja-banner__content">
            <h2 className="trabaja-banner__title">¿Querés ser parte del equipo Unbex?</h2>
            <p className="trabaja-banner__sub">
              Sumate a nuestro staff. Siempre estamos abiertos a incorporar nuevos integrantes al equipo.
            </p>
            <Link href="/trabajar-con-nosotros" className="trabaja-banner__btn">
              Ver más
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsappFloat />
    </>
  );
}
