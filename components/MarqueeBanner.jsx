'use client';

export default function MarqueeBanner({ visible = true }) {
  const texto = 'Vení y probá nuestras actividades  ·  3 clases de prueba gratis  ·  ';
  return (
    <div
      className={`marquee-banner${visible ? '' : ' marquee-banner--oculto'}`}
      aria-label="Vení y probá nuestras actividades — 3 clases de prueba gratis"
      aria-hidden={!visible}
    >
      <div className="marquee-banner__track">
        <span aria-hidden="false">{texto}</span>
        <span aria-hidden="true">{texto}</span>
        <span aria-hidden="true">{texto}</span>
        <span aria-hidden="true">{texto}</span>
      </div>
    </div>
  );
}
