'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import HeroIndex from '@/components/HeroIndex';
import DisciplinaCard from '@/components/DisciplinaCard';
import HorariosGrid from '@/components/HorariosGrid';
import PreciosSection from '@/components/PreciosSection';
import AnimatedSection from '@/components/AnimatedSection';
import WhatsappFloat from '@/components/WhatsappFloat';
import Footer from '@/components/Footer';
import ConsultoriosGrid from '@/components/ConsultoriosGrid';
import { disciplinas, consultorios } from '@/data/disciplines';

export default function Home() {
  const [videoActivo, setVideoActivo] = useState(null);
  const [estaEnHero, setEstaEnHero] = useState(true);

  useEffect(() => {
    function onScroll() {
      const hero = document.getElementById('hero');
      if (!hero) return;
      setEstaEnHero(window.scrollY < hero.offsetHeight * 0.85);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Topbar oculto={estaEnHero} />
      <Navbar onDisciplinaHover={setVideoActivo} estaEnHero={estaEnHero} />
      <main>
        <HeroIndex videoActivo={videoActivo} estaEnHero={estaEnHero} />

        {/* DISCIPLINAS */}
        <section className="disciplinas" id="disciplinas">

          {/* SALÓN BLACK */}
          <section className="section">
            <div className="section__container">
              <span className="section__eyebrow">SALÓN BLACK</span>
              <AnimatedSection as="h2" className="section__title">Fuerza y rendimiento</AnimatedSection>
              <AnimatedSection as="p" className="section__subtitle" animation="anim-fade" delay={100}>Entrenamiento de alta intensidad, musculación y disciplinas de potencia</AnimatedSection>
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
              <AnimatedSection as="p" className="section__subtitle" animation="anim-fade" delay={100}>Yoga, pilates, zumba, artes marciales y más actividades grupales</AnimatedSection>
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
                En nuestro consultorio entendemos que el entrenamiento es solo una parte del éxito. Ofrecemos un abordaje interdisciplinario único con profesionales dedicados a optimizar tu cuerpo y mente.
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
              Estamos en el corazón de Buenos Aires, listos para recibirte.
            </AnimatedSection>

            <div className="contacto__layout">
              <div className="contacto__info">
                <div className="contacto__dato">
                  <span className="contacto__dato-icono">📍</span>
                  <div>
                    <p className="contacto__dato-titulo">Dirección</p>
                    <p className="contacto__dato-texto">Pacheco 1956, C1431<br />Ciudad Autónoma de Buenos Aires</p>
                  </div>
                </div>
                <div className="contacto__dato">
                  <span className="contacto__dato-icono">🕐</span>
                  <div>
                    <p className="contacto__dato-titulo">Horarios</p>
                    <p className="contacto__dato-texto">Lunes a Viernes: 7:00 – 21:00<br />Sábados: 9:00 – 12:00</p>
                  </div>
                </div>
                <div className="contacto__dato">
                  <span className="contacto__dato-icono">💬</span>
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
