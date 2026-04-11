'use client';

import { useState, useRef } from 'react';
import { FORMSPREE_ENDPOINT } from '@/data/disciplines';

const PUESTOS = [
  'Profesor/a de Crossfit & Funcional',
  'Profesor/a de Musculación',
  'Profesor/a de Yoga',
  'Profesor/a de Pilates Mat',
  'Profesor/a de Zumba',
  'Profesor/a de Stretching',
  'Profesor/a de FIIT',
  'Profesor/a de Body Pump',
  'Profesor/a de Localizada/GAP',
  'Instructor/a de Judo Kids',
  'Instructor/a de Jiu Jitsu',
  'Kinesiólogo/a',
  'Recepción / Atención al cliente',
  'Otro',
];

export default function FormPostulacion() {
  const [estado, setEstado] = useState('idle'); // idle | enviando | exito | error
  const [fileName, setFileName] = useState('');
  const fileRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setEstado('enviando');

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setEstado('exito');
        form.reset();
        setFileName('');
      } else {
        setEstado('error');
      }
    } catch {
      setEstado('error');
    }
  }

  if (estado === 'exito') {
    return (
      <div className="trabaja-form__success">
        ✅ ¡Postulación enviada! Nos pondremos en contacto a la brevedad.
      </div>
    );
  }

  return (
    <form className="trabaja-form" onSubmit={handleSubmit}>
      <div className="trabaja-form__row">
        <div className="trabaja-form__group">
          <label className="trabaja-form__label" htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            className="trabaja-form__input"
            placeholder="Tu nombre"
            required
          />
        </div>
        <div className="trabaja-form__group">
          <label className="trabaja-form__label" htmlFor="apellido">Apellido</label>
          <input
            id="apellido"
            name="apellido"
            type="text"
            className="trabaja-form__input"
            placeholder="Tu apellido"
            required
          />
        </div>
      </div>

      <div className="trabaja-form__group">
        <label className="trabaja-form__label" htmlFor="puesto">Puesto</label>
        <select
          id="puesto"
          name="puesto"
          className="trabaja-form__input trabaja-form__select"
          required
          defaultValue=""
        >
          <option value="" disabled>Seleccioná un puesto</option>
          {PUESTOS.map(p => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      <div className="trabaja-form__group">
        <label className="trabaja-form__label">CV (PDF)</label>
        <input
          id="cv"
          name="cv"
          type="file"
          accept=".pdf,.doc,.docx"
          className="trabaja-form__file"
          ref={fileRef}
          onChange={e => setFileName(e.target.files[0]?.name || '')}
        />
        <label htmlFor="cv" className="trabaja-form__file-label">
          📎 {fileName || 'Adjuntar CV'}
        </label>
      </div>

      {estado === 'error' && (
        <p style={{ color: '#ff6b6b', fontSize: '0.875rem', textAlign: 'center' }}>
          Hubo un error al enviar. Intentá de nuevo.
        </p>
      )}

      <button
        type="submit"
        className="trabaja-form__btn"
        disabled={estado === 'enviando'}
      >
        {estado === 'enviando' ? 'Enviando...' : 'Enviar postulación'}
      </button>
    </form>
  );
}
