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
        <section className="disciplinas" id="disciplinas">
          <section className="section">
            <div className="section__container">
              <span className="section__eyebrow">LO QUE HACEMOS</span>
              <h2 className="section__title">Nuestras disciplinas</h2>
              <p className="section__subtitle">Encontrá la actividad que se adapta a vos</p>
              <div className="cards" id="disciplinasContainer">
                {disciplinas.map(d => (
                  <DisciplinaCard key={d.clave} disciplina={d} />
                ))}
              </div>
            </div>
          </section>

          {/* SERVICIOS */}
          <section className="section" id="servicios">
            <div className="section__container">
              <span className="section__eyebrow">MÁS ALLÁ DEL ENTRENAMIENTO</span>
              <h2 className="section__title">Nuestros servicios</h2>
              <p className="section__subtitle">Atención profesional e individual</p>
              <div className="cards" id="serviciosContainer">
                {servicios.map(s => (
                  <ServicioCard key={s.nombre} servicio={s} />
                ))}
              </div>
            </div>
          </section>
        </section>

        {/* HORARIOS */}
        <HorariosGrid />

        {/* PRECIOS (placeholder) */}
        <section className="precios" id="precios">
          <div className="section__container">
            <h2 className="section__title">Planes y Precios</h2>
            <div className="precios__grid" id="preciosGrid"></div>
          </div>
        </section>

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
