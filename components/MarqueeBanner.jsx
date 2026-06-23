'use client';

export default function MarqueeBanner() {
  const texto = 'Vení y probá nuestras actividades  ·  3 clases de prueba gratis  ·  ';
  return (
    <div className="marquee-banner" aria-label="Vení y probá nuestras actividades — 3 clases de prueba gratis">
      <div className="marquee-banner__track">
        <span aria-hidden="false">{texto}</span>
        <span aria-hidden="true">{texto}</span>
        <span aria-hidden="true">{texto}</span>
        <span aria-hidden="true">{texto}</span>
      </div>
    </div>
  );
}
