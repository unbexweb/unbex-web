'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: 'sans-serif', background: '#1a1a1a', color: '#fff' }}>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '2rem', textAlign: 'center' }}>
          <h1 style={{ color: '#e53e3e', fontSize: '2rem' }}>Error crítico</h1>
          <p style={{ color: '#999' }}>{error?.message || 'La aplicación encontró un error grave.'}</p>
          <button
            onClick={reset}
            style={{ padding: '0.75rem 1.5rem', background: '#e53e3e', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Recargar
          </button>
        </div>
      </body>
    </html>
  );
}
