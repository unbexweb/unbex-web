'use client';

import { useState } from 'react';
import { ZONAS } from '@/data/zonas';

const RUBROS_SUGERIDOS = [
  'Personal Trainer',
  'Nutricionista',
  'Kinesiólogo/a',
  'Masajista',
  'Preparador/a físico/a',
  'Psicólogo/a deportivo/a',
  'Fotógrafo/a deportivo/a',
  'Coach nutricional',
  'Podólogo/a deportivo/a',
  'Entrenador/a de running',
];

const MAX_DESCRIPCION = 200;

export default function FormProfesional() {
  const [estado, setEstado] = useState('idle'); // idle | enviando | exito | error
  const [descripcion, setDescripcion] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setEstado('enviando');

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch('/api/comunidad/publicar', {
        method: 'POST',
        body: data,
      });
      const json = await res.json();

      if (json.success) {
        setEstado('exito');
        form.reset();
        setDescripcion('');
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
        ¡Gracias! Tu publicación está pendiente de aprobación.
      </div>
    );
  }

  return (
    <form className="trabaja-form" onSubmit={handleSubmit}>
      <div className="trabaja-form__row">
        <div className="trabaja-form__group">
          <label className="trabaja-form__label" htmlFor="prof-nombre">Nombre</label>
          <input
            id="prof-nombre"
            name="nombre"
            type="text"
            className="trabaja-form__input"
            placeholder="Tu nombre"
            maxLength={60}
            required
          />
        </div>
        <div className="trabaja-form__group">
          <label className="trabaja-form__label" htmlFor="prof-apellido">Apellido</label>
          <input
            id="prof-apellido"
            name="apellido"
            type="text"
            className="trabaja-form__input"
            placeholder="Tu apellido"
            maxLength={60}
            required
          />
        </div>
      </div>

      <div className="trabaja-form__group">
        <label className="trabaja-form__label" htmlFor="prof-rubro">Rubro</label>
        <input
          id="prof-rubro"
          name="rubro"
          type="text"
          className="trabaja-form__input"
          placeholder="Ej: Personal Trainer"
          list="rubros-sugeridos"
          maxLength={60}
          required
        />
        <datalist id="rubros-sugeridos">
          {RUBROS_SUGERIDOS.map(r => (
            <option key={r} value={r} />
          ))}
        </datalist>
      </div>

      <div className="trabaja-form__group">
        <label className="trabaja-form__label" htmlFor="prof-zona">Zona</label>
        <select
          id="prof-zona"
          name="zona"
          className="trabaja-form__input trabaja-form__select"
          required
          defaultValue=""
        >
          <option value="" disabled>Seleccioná tu zona</option>
          {ZONAS.map(z => (
            <option key={z} value={z}>{z}</option>
          ))}
        </select>
      </div>

      <div className="trabaja-form__group">
        <label className="trabaja-form__label" htmlFor="prof-descripcion">
          Descripción corta
          <span className="trabaja-form__counter"> ({descripcion.length}/{MAX_DESCRIPCION})</span>
        </label>
        <textarea
          id="prof-descripcion"
          name="descripcion"
          className="trabaja-form__input trabaja-form__textarea"
          placeholder="Contá brevemente qué ofrecés"
          maxLength={MAX_DESCRIPCION}
          rows={3}
          value={descripcion}
          onChange={e => setDescripcion(e.target.value)}
        />
      </div>

      <div className="trabaja-form__row">
        <div className="trabaja-form__group">
          <label className="trabaja-form__label" htmlFor="prof-telefono">Teléfono / WhatsApp</label>
          <input
            id="prof-telefono"
            name="telefono"
            type="tel"
            className="trabaja-form__input"
            placeholder="11 2345-6789"
            maxLength={30}
            required
          />
        </div>
        <div className="trabaja-form__group">
          <label className="trabaja-form__label" htmlFor="prof-instagram">Instagram (opcional)</label>
          <input
            id="prof-instagram"
            name="instagram"
            type="text"
            className="trabaja-form__input"
            placeholder="@tu_usuario"
            maxLength={60}
          />
        </div>
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
        {estado === 'enviando' ? 'Enviando...' : 'Publicar mi perfil'}
      </button>
    </form>
  );
}
