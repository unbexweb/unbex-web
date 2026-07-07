import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsappFloat from '@/components/WhatsappFloat';
import Link from 'next/link';
import { WA_NUMBER } from '@/data/disciplines';
import { getSupabaseAdmin } from '@/lib/supabase';
import DirectorioProfesionales from './DirectorioProfesionales';
import FormProfesional from './FormProfesional';
import ScrollHint from '@/components/ScrollHint';

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
  { numero: '14',   label: 'Disciplinas disponibles' },
  { numero: '6',    label: 'Días a la semana' },
  { numero: '2',    label: 'Años de comunidad' },
];

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
              Un espacio donde el entrenamiento es el punto de partida, pero la comunidad es lo que te hace volver.
            </p>
          </div>
        </section>

        <ScrollHint target=".trabaja-info" />

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

        {/* BOLSA DE PROFESIONALES */}
        <section id="profesionales" className="comunidad-bolsa">
          <div className="section__container">
            <span className="section__eyebrow">RED DE PROFESIONALES</span>
            <h2 className="section__title comunidad-bolsa__title">Bolsa de profesionales Unbex</h2>
            <p className="section__subtitle comunidad-bolsa__subtitle">
              Profesionales de la comunidad Unbex ofreciendo sus servicios: entrenadores, nutricionistas,
              kinesiólogos y mucho más.
            </p>
            <DirectorioProfesionales profesionales={profesionales} />
          </div>
        </section>

        {/* PUBLICAR PERFIL */}
        <section id="publicar-perfil" className="trabaja-postulate comunidad-publicar">
          <div className="section__container">
            <span className="section__eyebrow">SUMÁ TU PERFIL</span>
            <h2 className="section__title comunidad-publicar__title">¿Sos profesional del fitness o bienestar?</h2>
            <p className="section__subtitle comunidad-publicar__subtitle">
              Publicá tus datos y ofrecé tus servicios a toda la comunidad Unbex. Tu publicación se revisa
              antes de mostrarse en el directorio.
            </p>
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
