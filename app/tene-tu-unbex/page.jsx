import FormFranquicia from './FormFranquicia';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsappFloat from '@/components/WhatsappFloat';

export const metadata = {
  title: 'Tené tu Unbex | Franquicias',
  description: 'Abrí tu propio Unbex. Un modelo probado, soporte total y una marca con identidad propia.',
};

const beneficios = [
  {
    icono: '🏢',
    titulo: 'Modelo probado',
    desc: 'Accedé a un sistema de gestión y entrenamiento que ya funciona, con procesos claros desde el primer día.',
  },
  {
    icono: '📊',
    titulo: 'Soporte total',
    desc: 'Te acompañamos en la apertura, el equipamiento, la comunicación y el día a día de tu gimnasio.',
  },
  {
    icono: '💡',
    titulo: 'Marca con identidad',
    desc: 'Sumate a una comunidad con estética, valores y filosofía propios que generan pertenencia real.',
  },
];

export default function TeneTuUnbex() {
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
            <p className="disciplina-hero__salon">FRANQUICIAS</p>
            <h1 className="disciplina-hero__title">Tené tu Unbex</h1>
            <p className="disciplina-hero__desc">
              Abrí tu propio gimnasio con el respaldo de una marca que ya funciona.
            </p>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="trabaja-info">
          <div className="section__container">
            <span className="section__eyebrow">POR QUÉ UNBEX</span>
            <h2 className="section__title">Un negocio con respaldo</h2>
            <p className="section__subtitle">
              No arrancás de cero — arrancás con todo lo que aprendimos.
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
            <span className="section__eyebrow">EMPEZÁ HOY</span>
            <h2 className="section__title">Consultanos</h2>
            <p className="section__subtitle">
              Completá el formulario y te contamos todo sobre la franquicia.
            </p>
            <FormFranquicia />
          </div>
        </section>
      </main>

      <Footer />
      <WhatsappFloat mensaje="Hola, quiero información sobre la franquicia Unbex" />
    </>
  );
}
