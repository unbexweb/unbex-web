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
                  <HorariosTable clave={slug} nombreDisciplina={disciplina.nombre} />
                </div>
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
