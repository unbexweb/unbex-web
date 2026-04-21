'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import HeroIndex from '@/components/HeroIndex';
import DisciplinaCard from '@/components/DisciplinaCard';
import ServicioCard from '@/components/ServicioCard';
import HorariosGrid from '@/components/HorariosGrid';
import PreciosSection from '@/components/PreciosSection';
import AnimatedSection from '@/components/AnimatedSection';
import WhatsappFloat from '@/components/WhatsappFloat';
import Footer from '@/components/Footer';
import { disciplinas, servicios } from '@/data/disciplines';

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

          {/* SERVICIOS */}
          <section className="section" id="servicios">
            <div className="section__container">
              <span className="section__eyebrow">MÁS ALLÁ DEL ENTRENAMIENTO</span>
              <AnimatedSection as="h2" className="section__title">Nuestros servicios</AnimatedSection>
              <AnimatedSection as="p" className="section__subtitle" animation="anim-fade" delay={100}>Atención profesional e individual</AnimatedSection>
              <div className="cards" id="serviciosContainer">
                {servicios.map((s, i) => (
                  <ServicioCard key={s.nombre} servicio={s} animDelay={i * 80} />
                ))}
              </div>
            </div>
          </section>
        </section>

        {/* HORARIOS */}
        <HorariosGrid />

        {/* PRECIOS */}
        <PreciosSection />

        {/* CONTACTO (placeholder) */}
        <section className="contacto" id="contacto">
          <div className="section__container">
            <h2 className="section__title">Contacto</h2>
            <div className="contacto__redes" id="contactoRedes"></div>
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
