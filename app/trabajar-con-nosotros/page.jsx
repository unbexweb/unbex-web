import FormPostulacion from './FormPostulacion';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsappFloat from '@/components/WhatsappFloat';

export const metadata = {
  title: 'Trabajá con nosotros | Unbex',
  description: 'Si te apasiona el movimiento, el bienestar y ayudar a otros a superarse, este es tu lugar.',
};

const beneficios = [
  {
    icono: '🏋️',
    titulo: 'Pasión compartida',
    desc: 'Trabajá rodeado de personas que viven el deporte y el bienestar como un estilo de vida.',
  },
  {
    icono: '🤝',
    titulo: 'Comunidad real',
    desc: 'Formá parte de un equipo unido, con buen clima de trabajo y valores genuinos.',
  },
  {
    icono: '📈',
    titulo: 'Crecimiento profesional',
    desc: 'Desarrollá tu carrera en un espacio en expansión con oportunidades reales.',
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
            <p className="disciplina-hero__salon">ÚNETE AL EQUIPO</p>
            <h1 className="disciplina-hero__title">Trabajá con nosotros</h1>
            <p className="disciplina-hero__desc">
              Si te apasiona el movimiento, el bienestar y ayudar a otros a superarse, este es tu lugar.
            </p>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="trabaja-info">
          <div className="section__container">
            <span className="section__eyebrow">POR QUÉ ELEGIRNOS</span>
            <h2 className="section__title">Un lugar donde crecer</h2>
            <p className="section__subtitle">
              En Unbex valoramos a las personas tanto como al entrenamiento.
            </p>
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
            <span className="section__eyebrow">UNITE AL EQUIPO</span>
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
