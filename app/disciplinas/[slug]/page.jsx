import { notFound } from 'next/navigation';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import HorariosTable from '@/components/HorariosTable';
import WhatsappFloat from '@/components/WhatsappFloat';
import Footer from '@/components/Footer';
import HeroDisciplina from './HeroDisciplina';
import { disciplinas, DISCIPLINA_VIDEOS } from '@/data/disciplines';

export function generateStaticParams() {
  return disciplinas.map(d => ({ slug: d.clave }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const disciplina = disciplinas.find(d => d.clave === slug);
  if (!disciplina) return {};
  return {
    title: `${disciplina.nombre} | Unbex`,
    description: disciplina.desc,
  };
}

export default async function DisciplinaPage({ params }) {
  const { slug } = await params;
  const disciplina = disciplinas.find(d => d.clave === slug);

  if (!disciplina) notFound();

  const videoId  = DISCIPLINA_VIDEOS[slug] || null;
  const isMb     = disciplina.salon === 'mb';
  const isBlack  = disciplina.salon === 'black';

  return (
    <>
      <Topbar />
      <Navbar />
      <main className={isMb ? 'salon-mb' : isBlack ? 'salon-black' : ''}>

        <HeroDisciplina disciplina={disciplina} videoId={videoId} />

        {/* INFO — 2 columnas: descripción + horarios */}
        <section className="disciplina-info">
          <div className="section__container">
            <div className="disciplina-info__grid">

              <div className="disciplina-info__descripcion">
                <h2 className="section__title">¿Qué es {disciplina.nombre}?</h2>
                <p className="disciplina-info__texto">{disciplina.desc}</p>
                {disciplina.descLarga && (
                  <p className="disciplina-info__texto">{disciplina.descLarga}</p>
                )}
              </div>

              <div className="disciplina-info__horarios">
                <h2 className="section__title">Horarios</h2>
                <div className="horarios__tabla" id="horariosTabla">
                  {slug === 'open-box' ? (
                    <p className="disciplina-info__texto">
                      Reservas disponibles de 7 a 21hs. Elegí tu bloque horario al consultar.
                    </p>
                  ) : (
                    <HorariosTable clave={slug} nombreDisciplina={disciplina.nombre} />
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* BLOQUES — para quién, objetivos, duración */}
        <section className="disciplina-bloques">
          <div className="section__container">
            <div className="disciplina-bloques__grid">

              <div className="disciplina-bloque">
                <svg className="disciplina-bloque__icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                <h3 className="disciplina-bloque__titulo">¿Para quién es?</h3>
                <p className={`disciplina-bloque__texto${!disciplina.paraQuien ? ' disciplina-bloque__texto--placeholder' : ''}`}>
                  {disciplina.paraQuien ?? 'Información próximamente'}
                </p>
              </div>

              <div className="disciplina-bloque">
                <svg className="disciplina-bloque__icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <h3 className="disciplina-bloque__titulo">¿Qué vas a lograr?</h3>
                <p className={`disciplina-bloque__texto${!disciplina.objetivos ? ' disciplina-bloque__texto--placeholder' : ''}`}>
                  {disciplina.objetivos ?? 'Información próximamente'}
                </p>
              </div>

              <div className="disciplina-bloque">
                <svg className="disciplina-bloque__icono" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <h3 className="disciplina-bloque__titulo">Duración de la clase</h3>
                <p className={`disciplina-bloque__texto${!disciplina.duracion ? ' disciplina-bloque__texto--placeholder' : ''}`}>
                  {disciplina.duracion ?? 'Información próximamente'}
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsappFloat mensaje={`Hola! Quiero info sobre ${disciplina.nombre} en Unbex`} />
    </>
  );
}
