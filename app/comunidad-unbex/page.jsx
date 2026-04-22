import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsappFloat from '@/components/WhatsappFloat';
import Link from 'next/link';
import { WA_NUMBER } from '@/data/disciplines';

export const metadata = {
  title: 'Comunidad Unbex | Más que un gimnasio',
  description: 'En Unbex somos una comunidad. Personas reales que se superan juntas cada día.',
};

const valores = [
  {
    icono: '🤝',
    titulo: 'Pertenencia real',
    desc: 'No sos un número. Acá te conocemos, te acompañamos y celebramos cada logro tuyo.',
  },
  {
    icono: '🔥',
    titulo: 'Superación colectiva',
    desc: 'Cuando uno se esfuerza, todos se inspiran. El progreso de cada miembro impulsa al grupo.',
  },
  {
    icono: '💜',
    titulo: 'Inclusión y respeto',
    desc: 'Todos los niveles, todas las edades, todos los cuerpos. Unbex es para vos, sin excusas.',
  },
  {
    icono: '🌱',
    titulo: 'Crecimiento constante',
    desc: 'Entrenamos el cuerpo, pero también la mente. Cada clase es una oportunidad de crecer.',
  },
];

const pilares = [
  { numero: '500+', label: 'Miembros activos' },
  { numero: '6',    label: 'Disciplinas disponibles' },
  { numero: '7',    label: 'Días a la semana' },
  { numero: '10+',  label: 'Años de comunidad' },
];

export default function ComunidadUnbex() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main className="salon-mb">

        {/* HERO */}
        <section className="trabaja-hero comunidad-hero">
          <div className="trabaja-hero__bg comunidad-hero__bg" />
          <div className="trabaja-hero__overlay" />
          <div className="trabaja-hero__content">
            <p className="disciplina-hero__salon">MÁS QUE UN GIMNASIO</p>
            <h1 className="disciplina-hero__title">Comunidad Unbex</h1>
            <p className="disciplina-hero__desc">
              Un espacio donde el entrenamiento es el punto de partida, pero la comunidad es lo que te hace volver.
            </p>
          </div>
        </section>

        {/* VALORES */}
        <section className="trabaja-info">
          <div className="section__container">
            <span className="section__eyebrow">LO QUE NOS UNE</span>
            <h2 className="section__title">Nuestros valores</h2>
            <p className="section__subtitle">
              En Unbex creemos que el bienestar real se construye en comunidad.
            </p>
            <div className="trabaja-beneficios comunidad-valores">
              {valores.map(v => (
                <div key={v.titulo} className="trabaja-card comunidad-card">
                  <span className="trabaja-card__icon">{v.icono}</span>
                  <h3 className="trabaja-card__title">{v.titulo}</h3>
                  <p className="trabaja-card__desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NÚMEROS */}
        <section className="comunidad-numeros">
          <div className="section__container">
            <span className="section__eyebrow">UNBEX EN NÚMEROS</span>
            <h2 className="section__title">Una comunidad que crece</h2>
            <div className="comunidad-stats">
              {pilares.map(p => (
                <div key={p.label} className="comunidad-stat">
                  <span className="comunidad-stat__numero">{p.numero}</span>
                  <span className="comunidad-stat__label">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="trabaja-postulate">
          <div className="section__container">
            <span className="section__eyebrow">SUMATE</span>
            <h2 className="section__title">¿Querés ser parte?</h2>
            <p className="section__subtitle">
              Empezá con 3 clases de prueba y viví la experiencia Unbex desde adentro.
            </p>
            <div className="comunidad-cta-btns">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola! Quiero sumarme a la Comunidad Unbex 💪')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="trabaja-form__btn"
              >
                Escribinos por WhatsApp
              </a>
              <Link href="/#precios" className="comunidad-cta-secondary">
                Ver planes y precios
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsappFloat mensaje="Hola, quiero saber más sobre la Comunidad Unbex 💜" />
    </>
  );
}
