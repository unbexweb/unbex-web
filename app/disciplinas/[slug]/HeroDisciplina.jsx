'use client';

export default function HeroDisciplina({ disciplina, videoId }) {
  const imgSrc = `/img/cards/${disciplina.img}`;
  const embedSrc = videoId
    ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0&modestbranding=1&playsinline=1`
    : null;

  return (
    <section className="disciplina-hero" id="disciplinaHero">
      <div className="disciplina-hero__video-container">
        {embedSrc ? (
          <iframe
            className="disciplina-hero__iframe"
            src={embedSrc}
            title={disciplina.nombre}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        )}
        <div className="disciplina-hero__overlay" />
      </div>

      <div className="disciplina-hero__content">
        <p className="disciplina-hero__salon">
          {disciplina.salon === 'black' ? 'Salón Black' : 'Salón M&B'}
        </p>
        <h1 className="disciplina-hero__title">{disciplina.nombre}</h1>
      </div>
    </section>
  );
}
