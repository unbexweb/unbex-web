'use client';

export default function HeroDisciplina({ disciplina, videoId }) {
  const imgSrc = `/img/cards/${disciplina.img}`;
  const embedSrc = videoId
    ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0&modestbranding=1&playsinline=1&cc_load_policy=0&iv_load_policy=3`
    : null;

  return (
    <section className="disciplina-hero" id="disciplinaHero">
      <h1 className="sr-only">{disciplina.nombre}</h1>

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
      </div>

      <p className="disciplina-hero__salon disciplina-hero__salon--overlay">
        {disciplina.salon === 'black' ? 'Salón Black' : 'Salón M&B'}
      </p>

      <div
        className="disciplina-hero__scroll-hint"
        onClick={() => document.querySelector('.disciplina-info')?.scrollIntoView({ behavior: 'smooth' })}
        role="button"
        aria-label="Bajar"
      >
        <span className="hero-scroll-hint__chevrons" aria-hidden="true" />
      </div>
    </section>
  );
}
