'use client';

export default function ScrollHint({ target }) {
  return (
    <div
      className="hero-scroll-hint"
      onClick={() => document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })}
      role="button"
      aria-label="Bajar"
    >
      <span className="hero-scroll-hint__chevrons" aria-hidden="true" />
    </div>
  );
}
