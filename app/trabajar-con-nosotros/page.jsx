import FormPostulacion from './FormPostulacion';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsappFloat from '@/components/WhatsappFloat';

export const metadata = {
  title: 'Trabajá con nosotros — Unbex Argentina',
  description: 'Unite al equipo Unbex. Buscamos profesores e instructores comprometidos con el bienestar.',
};

const beneficios = [
  {
    icono: '💼',
    titulo: 'Ambiente profesional',
    desc: 'Trabajá en un espacio moderno, con equipamiento de primera y un equipo comprometido con la excelencia.',
  },
  {
    icono: '🌱',
    titulo: 'Crecimiento real',
    desc: 'Te apoyamos en tu desarrollo profesional con capacitaciones, feedback constante y oportunidades de crecimiento.',
  },
  {
    icono: '🤝',
    titulo: 'Comunidad Unbex',
    desc: 'Formá parte de una comunidad que valora el bienestar, la motivación y el trabajo en equipo.',
  },
];

export default function TrabajarConNosotros() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        {/* HERO */}
        <section className="trabaja-hero">
          <div className="trabaja-hero__bg" />
          <div className="trabaja-hero__overlay" />
          <div className="trabaja-hero__content">
            <h1 className="hero__title">Trabajá con nosotros</h1>
            <p className="hero__subtitle">Sumate al equipo que mueve a Unbex</p>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="trabaja-info">
          <div className="section__container">
            <span className="section__eyebrow">Por qué elegirnos</span>
            <h2 className="section__title">¿Por qué Unbex?</h2>
            <div className="trabaja-beneficios">
              {beneficios.map(b => (
                <div key={b.titulo} className="trabaja-card">
                  <span className="trabaja-card__icon">{b.icono}</span>
                  <h3 className="trabaja-card__title">{b.titulo}</h3>
                  <p className="trabaja-card__desc">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORMULARIO */}
        <section className="trabaja-postulate">
          <div className="section__container">
            <span className="section__eyebrow">Unite al equipo</span>
            <h2 className="section__title">Postulate</h2>
            <p className="section__subtitle">
              Completá el formulario y nos ponemos en contacto a la brevedad.
            </p>
            <FormPostulacion />
          </div>
        </section>
      </main>

      <Footer />
      <WhatsappFloat mensaje="Hola, quiero trabajar en Unbex" />
    </>
  );
}
