'use client';

export default function Error({ error, reset }) {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '2rem', textAlign: 'center' }}>
      <h2 style={{ color: '#e53e3e', fontSize: '1.5rem' }}>Algo salió mal</h2>
      <p style={{ color: '#666' }}>{error?.message || 'Ocurrió un error inesperado.'}</p>
      <button
        onClick={reset}
        style={{ padding: '0.75rem 1.5rem', background: '#e53e3e', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Reintentar
      </button>
    </div>
  );
}
