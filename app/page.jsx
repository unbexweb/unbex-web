import Link from 'next/link';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import HeroIndex from '@/components/HeroIndex';
import DisciplinaCard from '@/components/DisciplinaCard';
import ServicioCard from '@/components/ServicioCard';
import HorariosGrid from '@/components/HorariosGrid';
import WhatsappFloat from '@/components/WhatsappFloat';
import Footer from '@/components/Footer';
import { disciplinas, servicios } from '@/data/disciplines';

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <HeroIndex />

        {/* DISCIPLINAS */}
        <section id="disciplinas" style={{ background: 'var(--color-background)' }}>
          <div className="section__container">
            <span className="section__eyebrow">Lo que ofrecemos</span>
            <h2 className="section__title">Disciplinas</h2>
            <p className="section__subtitle">
              Descubrí todas las actividades que tenemos para vos. Cupo limitado — ¡reservá tu lugar!
            </p>
            <div className="cards">
              {disciplinas.map(d => (
                <DisciplinaCard key={d.clave} disciplina={d} />
              ))}
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" style={{ background: 'var(--color-background-alt)' }}>
          <div className="section__container">
            <span className="section__eyebrow">Más en Unbex</span>
            <h2 className="section__title">Servicios</h2>
            <p className="section__subtitle">
              Además de entrenar, encontrás todo lo que necesitás en un solo lugar.
            </p>
            <div className="cards">
              {servicios.map(s => (
                <ServicioCard key={s.nombre} servicio={s} />
              ))}
            </div>
          </div>
        </section>

        {/* HORARIOS */}
        <HorariosGrid />

        {/* BANNER TRABAJÁ CON NOSOTROS */}
        <section className="trabaja-banner">
          <div className="trabaja-banner__content">
            <h2 className="trabaja-banner__title">¿Querés ser parte del equipo Unbex?</h2>
            <p className="trabaja-banner__sub">
              Buscamos profesores, instructores y personal comprometido con el bienestar y la comunidad.
            </p>
            <Link href="/trabajar-con-nosotros" className="trabaja-banner__btn">
              Ver oportunidades
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsappFloat />
    </>
  );
}
