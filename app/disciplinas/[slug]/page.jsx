import { notFound } from 'next/navigation';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import HorariosTable from '@/components/HorariosTable';
import WhatsappFloat from '@/components/WhatsappFloat';
import Footer from '@/components/Footer';
import HeroDisciplina from './HeroDisciplina';
import { disciplinas, DISCIPLINA_VIDEOS, CONTACTO } from '@/data/disciplines';

// Genera las rutas estáticas en build time
export function generateStaticParams() {
  return disciplinas.map(d => ({ slug: d.clave }));
}

export function generateMetadata({ params }) {
  const disciplina = disciplinas.find(d => d.clave === params.slug);
  if (!disciplina) return {};
  return {
    title: `${disciplina.nombre} — Unbex Argentina`,
    description: disciplina.desc,
  };
}

export default function DisciplinaPage({ params }) {
  const { slug } = params;
  const disciplina = disciplinas.find(d => d.clave === slug);

  if (!disciplina) notFound();

  const videoId = DISCIPLINA_VIDEOS[slug] || null;
  const isMb = disciplina.salon === 'mb';
  const waMsg = `Hola! Quiero info sobre ${disciplina.nombre} en Unbex`;

  return (
    <>
      <Topbar />
      <Navbar />
      <main className={isMb ? 'salon-mb' : ''}>
        <HeroDisciplina disciplina={disciplina} videoId={videoId} />

        {/* INFO */}
        <section style={{ background: isMb ? 'var(--color-rose-pale)' : 'var(--color-background)' }}>
          <div className="section__container">
            <h2 className="section__title">{disciplina.nombre}</h2>
            <p className="section__subtitle">{disciplina.desc}</p>
          </div>
        </section>

        {/* HORARIOS */}
        <section style={{ background: isMb ? 'var(--color-rose-light)' : 'var(--color-background-alt)' }}>
          <div className="section__container">
            <span className="section__eyebrow">Planificá tu semana</span>
            <h2 className="section__title">Horarios</h2>
            <HorariosTable clave={slug} />
          </div>
        </section>
      </main>

      <Footer />
      <WhatsappFloat mensaje={waMsg} />
    </>
  );
}
