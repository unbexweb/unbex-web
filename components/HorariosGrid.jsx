'use client';

import { useState } from 'react';
import { horarios, disciplinas, DIAS_SEMANA } from '@/data/disciplines';

const ORDEN_DIAS = ['lun', 'mar', 'mie', 'jue', 'vie', 'sab'];
const LABEL_EXTRA = { oly: 'OLY', allout: 'Allout' };

function getDisciplinaMap() {
  return new Map(disciplinas.map(d => [d.clave, d]));
}

const DISC_MAP = getDisciplinaMap();

function labelDisciplina(clave, useShort) {
  const d = DISC_MAP.get(clave);
  if (d) return (useShort && d.short) ? d.short : d.nombre;
  if (LABEL_EXTRA[clave]) return LABEL_EXTRA[clave];
  return clave.charAt(0).toUpperCase() + clave.slice(1).replace(/-/g, ' ');
}

function badgeTexto(entry) {
  const combinada = entry.claves.length > 1;
  return entry.claves.map(c => labelDisciplina(c, combinada)).join('/');
}

function badgeTitulo(entry) {
  return entry.claves.map(c => labelDisciplina(c, false)).join(', ') +
    (entry.nota ? ' — ' + entry.nota : '');
}

function TablaHorarios({ salon }) {
  const entradas = horarios.filter(h => h.salon === salon);
  const horas = [...new Set(entradas.map(h => h.hora))].sort();

  // Solo días que tienen al menos una clase en este salón
  const dias = ORDEN_DIAS.filter(d => entradas.some(h => h.dias.includes(d)));

  return (
    <div className="horarios__table-wrap">
      <table className="horarios__table">
        <thead>
          <tr>
            <th className="horarios__th-hora">Hora</th>
            {dias.map(dia => (
              <th key={dia}>{DIAS_SEMANA[dia]}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {horas.map(hora => (
            <tr key={hora}>
              <td className="horarios__hora">{hora}</td>
              {dias.map(dia => {
                const matches = entradas.filter(h => h.hora === hora && h.dias.includes(dia));

                if (!matches.length) {
                  return (
                    <td key={dia}>
                      <span className="horarios__empty">—</span>
                    </td>
                  );
                }

                return (
                  <td key={dia}>
                    <div className="horarios__cell">
                      {matches.map((entry, i) => {
                        const combinada = entry.claves.length > 1;
                        return (
                          <span
                            key={i}
                            className={`horarios__badge ${combinada ? 'horarios__badge--combinada' : 'horarios__badge--especifica'}`}
                            title={badgeTitulo(entry)}
                          >
                            {badgeTexto(entry)}
                          </span>
                        );
                      })}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function HorariosGrid() {
  const [tab, setTab] = useState('black');

  return (
    <section className="horarios" id="horarios">
      <div className="section__container">
        <span className="section__eyebrow">CUÁNDO ENTRENAMOS</span>
        <h2 className="section__title">Horarios</h2>
        <p className="section__subtitle">Elegí tu salón y encontrá tu turno ideal</p>

        <div className="horarios__tabs" id="horariosTabs">
          <button
            className={`horarios__tab${tab === 'black' ? ' horarios__tab--active' : ''}`}
            data-salon="black"
            onClick={() => setTab('black')}
          >
            Salón Black
          </button>
          <button
            className={`horarios__tab${tab === 'mb' ? ' horarios__tab--active' : ''}`}
            data-salon="mb"
            onClick={() => setTab('mb')}
          >
            Salón M&amp;B
          </button>
        </div>

        <div className={`horarios__panel${tab === 'black' ? ' horarios__panel--active' : ''}`} id="horarios-black">
          <TablaHorarios salon="black" />
        </div>
        <div className={`horarios__panel${tab === 'mb' ? ' horarios__panel--active' : ''}`} id="horarios-mb">
          <TablaHorarios salon="mb" />
        </div>
      </div>
    </section>
  );
}
