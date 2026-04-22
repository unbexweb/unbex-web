'use client';

import { useState } from 'react';
import { FORMSPREE_ENDPOINT } from '@/data/disciplines';

export default function FormFranquicia() {
  const [estado, setEstado] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    setEstado('enviando');
    const data = new FormData(e.target);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) { setEstado('exito'); e.target.reset(); }
      else setEstado('error');
    } catch { setEstado('error'); }
  }

  if (estado === 'exito') {
    return (
      <div className="trabaja-form__success">
        ✅ ¡Consulta enviada! Nos ponemos en contacto a la brevedad.
      </div>
    );
  }

  return (
    <form className="trabaja-form" onSubmit={handleSubmit}>
      <div className="trabaja-form__row">
        <div className="trabaja-form__group">
          <label className="trabaja-form__label" htmlFor="nombre">Nombre</label>
          <input id="nombre" name="nombre" type="text" className="trabaja-form__input" placeholder="Tu nombre" required />
        </div>
        <div className="trabaja-form__group">
          <label className="trabaja-form__label" htmlFor="apellido">Apellido</label>
          <input id="apellido" name="apellido" type="text" className="trabaja-form__input" placeholder="Tu apellido" required />
        </div>
      </div>

      <div className="trabaja-form__row">
        <div className="trabaja-form__group">
          <label className="trabaja-form__label" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="trabaja-form__input" placeholder="tu@email.com" required />
        </div>
        <div className="trabaja-form__group">
          <label className="trabaja-form__label" htmlFor="telefono">Teléfono</label>
          <input id="telefono" name="telefono" type="tel" className="trabaja-form__input" placeholder="Tu teléfono" required />
        </div>
      </div>

      <div className="trabaja-form__group">
        <label className="trabaja-form__label" htmlFor="ciudad">Ciudad / Provincia</label>
        <input id="ciudad" name="ciudad" type="text" className="trabaja-form__input" placeholder="¿Dónde querés abrir?" required />
      </div>

      <div className="trabaja-form__group">
        <label className="trabaja-form__label" htmlFor="mensaje">Contanos más sobre tu proyecto</label>
        <textarea id="mensaje" name="mensaje" className="trabaja-form__input trabaja-form__textarea" placeholder="¿Tenés local? ¿Experiencia en el sector? ¿Preguntas?" rows={4} />
      </div>

      {estado === 'error' && (
        <p style={{ color: '#ff6b6b', fontSize: '0.875rem', textAlign: 'center' }}>
          Hubo un error al enviar. Intentá de nuevo.
        </p>
      )}

      <button type="submit" className="trabaja-form__btn" disabled={estado === 'enviando'}>
        {estado === 'enviando' ? 'Enviando...' : 'Enviar consulta'}
      </button>
    </form>
  );
}
