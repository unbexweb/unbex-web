import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsappFloat from '@/components/WhatsappFloat';
import Link from 'next/link';
import { WA_NUMBER } from '@/data/disciplines';
import { COMUNIDAD_VIDEOS } from '@/data/comunidad';
import { getSupabaseAdmin } from '@/lib/supabase';
import DirectorioProfesionales from './DirectorioProfesionales';
import FormProfesional from './FormProfesional';
import ScrollHint from '@/components/ScrollHint';

export const metadata = {
  title: 'Comunidad Unbex | Más que un centro deportivo',
  description: 'En Unbex somos una comunidad. Personas reales que se superan juntas cada día.',
};

export const revalidate = 60;

async function getProfesionalesAprobados() {
  const supabaseAdmin = getSupabaseAdmin();
  if (!supabaseAdmin) {
    console.error('Supabase no configurado: faltan variables de entorno.');
    return [];
  }

  const { data, error } = await supabaseAdmin
    .from('profesionales')
    .select('id, nombre, apellido, rubro, descripcion, telefono, instagram, zona')
    .eq('estado', 'aprobado')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error al obtener profesionales:', error);
    return [];
  }
  return data;
}

export default async function ComunidadUnbex() {
  const profesionales = await getProfesionalesAprobados();

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
              Un espacio donde el entrenamiento es el punto de partida, pero la comunidad es lo que te hace lograr tus objetivos.
            </p>
          </div>
        </section>

        <ScrollHint target=".comunidad-momentos" />

        {/* MOMENTOS */}
        <section className="comunidad-momentos">
          <div className="section__container">
            <span className="section__eyebrow">UNBEX EN ACCIÓN</span>
            <h2 className="section__title">Momentos que nos definen</h2>
            <p className="section__subtitle">
              Celebraciones, desafíos y todo lo que hace única a la comunidad Unbex.
            </p>
            <div className="comunidad-momentos__grid">

              <div className="comunidad-momento">
                <div className="comunidad-momento__video-wrap">
                  <iframe
                    className="comunidad-momento__iframe"
                    src="https://www.youtube-nocookie.com/embed/iZz8V3jFh9s?autoplay=1&mute=1&loop=1&playlist=iZz8V3jFh9s&controls=1&rel=0&modestbranding=1&playsinline=1&cc_load_policy=0&iv_load_policy=3"
                    title="Fiesta Unbex"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="comunidad-momento__texto">
                  <span className="comunidad-momento__tag">🎉 Fiesta</span>
                  <h3 className="comunidad-momento__titulo">Fiesta Unbex</h3>
                  <p className="comunidad-momento__desc">
                    Porque entrenar juntos es mucho más que sudar. Cada año celebramos
                    todo lo que logramos como comunidad — con música, energía y la familia
                    Unbex al completo.
                  </p>
                </div>
              </div>

              <div className="comunidad-momento comunidad-momento--invertido">
                <div className="comunidad-momento__video-wrap">
                  <iframe
                    className="comunidad-momento__iframe"
                    src="https://www.youtube-nocookie.com/embed/sKEs6BVCbhE?autoplay=1&mute=1&loop=1&playlist=sKEs6BVCbhE&controls=1&rel=0&modestbranding=1&playsinline=1&cc_load_policy=0&iv_load_policy=3"
                    title="Unbex Challenge"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="comunidad-momento__texto">
                  <span className="comunidad-momento__tag">💪 Challenge</span>
                  <h3 className="comunidad-momento__titulo">Unbex Challenge</h3>
                  <p className="comunidad-momento__desc">
                    Un desafío que pone a prueba los límites de toda la comunidad.
                    ¿Hasta dónde podés llegar? En Unbex, siempre más lejos de lo que creías.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* GALERÍA DE VIDEOS */}
        <section className="comunidad-galeria">
          <div className="section__container">
            <span className="section__eyebrow">UNBEX EN VIDEO</span>
            <h2 className="section__title">Así se vive Unbex</h2>
            <div className="comunidad-galeria__carrusel">
              {COMUNIDAD_VIDEOS.map(v => (
                <div key={v.id} className="comunidad-galeria__item">
                  <div className="comunidad-galeria__video-wrap">
                    <iframe
                      className="comunidad-galeria__iframe"
                      src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&mute=1&loop=1&playlist=${v.id}&controls=0&rel=0&modestbranding=1&playsinline=1&cc_load_policy=0&iv_load_policy=3`}
                      title={v.titulo}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <p className="comunidad-galeria__titulo">{v.titulo}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOLSA DE PROFESIONALES */}
        <section id="profesionales" className="comunidad-bolsa">
          <div className="section__container">
            <span className="section__eyebrow">RED DE PROFESIONALES</span>
            <h2 className="section__title comunidad-bolsa__title">RED DE PROFESIONALES</h2>
            <p className="section__subtitle comunidad-bolsa__subtitle">
              Porque en Unbex nos ayudamos entre todos, sumá tus servicios al portal para que otros socios puedan contactarte.
            </p>
            <DirectorioProfesionales profesionales={profesionales} />
          </div>
        </section>

        {/* PUBLICAR PERFIL */}
        <section id="publicar-perfil" className="trabaja-postulate comunidad-publicar">
          <div className="section__container">
            <h2 className="section__title comunidad-publicar__title">Sumá tu perfil</h2>
            <FormProfesional />
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
