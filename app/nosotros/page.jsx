import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsappFloat from '@/components/WhatsappFloat';
import Link from 'next/link';
import { WA_NUMBER } from '@/data/disciplines';
import { MISION_TEXTO, VISION_TEXTO, VALORES } from '@/data/nosotros';
import ScrollHint from '@/components/ScrollHint';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: 'Nosotros | Unbex Argentina',
  description: 'Conocé quiénes somos, nuestra historia, misión y el equipo detrás de Unbex Argentina.',
};

const WA_BASE = `https://wa.me/${WA_NUMBER}?text=`;

const diferenciadores = [
  {
    icono: '🏆',
    titulo: 'Profesionales certificados',
    desc: 'Cada instructor tiene formación específica y pasión real por lo que enseña. Tu progreso está en buenas manos.',
  },
  {
    icono: '🎯',
    titulo: 'Adaptado a cada persona',
    desc: 'No hay rutinas genéricas. Cada plan se ajusta a tu nivel, objetivos y condición física.',
  },
  {
    icono: '🏛️',
    titulo: 'Instalaciones de primer nivel',
    desc: 'Equipamiento moderno, salones amplios y espacios diseñados para que des lo mejor de vos.',
  },
  {
    icono: '💜',
    titulo: 'Comunidad de verdad',
    desc: 'En Unbex te vas a sentir parte de algo. Un espacio de respeto, motivación y superación colectiva.',
  },
];

export default function NosotrosPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main className="salon-mb">

        {/* HERO */}
        <section className="trabaja-hero">
          <div className="trabaja-hero__bg nosotros-hero__bg" />
          <div className="trabaja-hero__overlay" />
          <div className="trabaja-hero__content">
            <p className="disciplina-hero__salon">QUIÉNES SOMOS</p>
            <h1 className="disciplina-hero__title">Nosotros</h1>
            <p className="disciplina-hero__desc">
              Más de dos años transformando vidas en Buenos Aires.
            </p>
          </div>
        </section>

        <ScrollHint target=".trabaja-info" />

        {/* HISTORIA */}
        <section className="trabaja-info">
          <div className="section__container">
            <span className="section__eyebrow">NUESTRA HISTORIA</span>
            <h2 className="section__title">¿Cómo nació Unbex?</h2>
            <p className="section__subtitle" style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
              Unbex nació con una convicción simple: el deporte y el bienestar deben estar al alcance de todos.
              Desde nuestros inicios en Pacheco 1956, CABA, construimos un espacio donde el entrenamiento de alto
              nivel convive con la calidez de una comunidad real. Hoy somos más de 500 miembros activos,
              14 disciplinas disponibles y un equipo de profesionales dedicado a sacar lo mejor de cada persona.
            </p>
          </div>
        </section>

        {/* MISIÓN */}
        <section className="trabaja-info">
          <div className="section__container">
            <span className="section__eyebrow">NUESTRO PROPÓSITO</span>
            <h2 className="section__title">Misión</h2>
            <p className="nosotros-texto">{MISION_TEXTO}</p>
          </div>
        </section>

        {/* VISIÓN */}
        <section className="trabaja-info">
          <div className="section__container">
            <span className="section__eyebrow">HACIA DÓNDE VAMOS</span>
            <h2 className="section__title">Visión</h2>
            <p className="nosotros-texto">{VISION_TEXTO}</p>
          </div>
        </section>

        {/* VALORES */}
        <section className="trabaja-info">
          <div className="section__container">
            <span className="section__eyebrow">LO QUE NOS DEFINE</span>
            <h2 className="section__title">Valores</h2>
            <div className="nosotros-valores">
              {VALORES.map((valor, i) => (
                <AnimatedSection key={valor.titulo} className="valores-card" delay={i * 80}>
                  <span className="valores-card__icon">{valor.icono}</span>
                  <h3 className="valores-card__title">{valor.titulo}</h3>
                  <p className="valores-card__desc">{valor.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* POR QUÉ ELEGIRNOS */}
        <section className="trabaja-info">
          <div className="section__container">
            <span className="section__eyebrow">POR QUÉ ELEGIRNOS</span>
            <h2 className="section__title">Lo que nos hace diferentes</h2>
            <div className="trabaja-beneficios">
              {diferenciadores.map(item => (
                <div key={item.titulo} className="trabaja-card">
                  <span className="trabaja-card__icon">{item.icono}</span>
                  <h3 className="trabaja-card__title">{item.titulo}</h3>
                  <p className="trabaja-card__desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA PRUEBA */}
        <section className="trabaja-postulate">
          <div className="section__container">
            <span className="section__eyebrow">EMPEZÁ HOY</span>
            <h2 className="section__title">¿Querés conocernos?</h2>
            <p className="section__subtitle">
              Vení y realizá 3 clases de prueba. Sin compromiso, sin excusas.
            </p>
            <div className="comunidad-cta-btns">
              <a
                href={`${WA_BASE}${encodeURIComponent('Hola! Quiero conocer Unbex y hacer las clases de prueba 💪')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="trabaja-form__btn"
              >
                Escribinos por WhatsApp
              </a>
              <Link href="/#disciplinas" className="comunidad-cta-secondary">
                Ver disciplinas
              </Link>
            </div>
          </div>
        </section>

        {/* GANCHO TENÉ TU UNBEX */}
        <section className="trabaja-banner">
          <div className="trabaja-banner__content">
            <h2 className="trabaja-banner__title">¿Querés tener tu propio Unbex?</h2>
            <p className="trabaja-banner__sub">
              Llevá el modelo Unbex a tu zona. Franquicia, metodología y comunidad — todo el sistema listo para vos.
            </p>
            <Link href="/tene-tu-unbex" className="trabaja-banner__btn">
              Quiero saber más
            </Link>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsappFloat mensaje="Hola! Quiero saber más sobre Unbex 💜" />
    </>
  );
}
