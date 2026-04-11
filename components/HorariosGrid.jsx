'use client';

import { useState } from 'react';
import { horarios, disciplinas, DIAS_SEMANA } from '@/data/disciplines';

const DIAS_ORDER = ['lun', 'mar', 'mie', 'jue', 'vie', 'sab'];

function buildTable(salon) {
  const filas = horarios.filter(h => h.salon === salon);
  const horas = [...new Set(filas.map(h => h.hora))].sort();

  return { filas, horas };
}

function getNombreCorto(clave) {
  const d = disciplinas.find(d => d.clave === clave);
  return d ? (d.short || d.nombre) : clave;
}

function getCell(filas, hora, dia) {
  const coincidentes = filas.filter(f => f.hora === hora && f.dias.includes(dia));
  if (!coincidentes.length) return null;
  return coincidentes;
}

function TablaHorarios({ salon }) {
  const { filas, horas } = buildTable(salon);

  return (
    <div className="horarios__table-wrap">
      <table className="horarios__table">
        <thead>
          <tr>
            <th className="horarios__th-hora">Hora</th>
            {DIAS_ORDER.map(dia => (
              <th key={dia}>{DIAS_SEMANA[dia]}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {horas.map(hora => (
            <tr key={hora}>
              <td className="horarios__hora">{hora}</td>
              {DIAS_ORDER.map(dia => {
                const cells = getCell(filas, hora, dia);
                if (!cells) return <td key={dia}><span className="horarios__empty">—</span></td>;

                return (
                  <td key={dia}>
                    <div className="horarios__cell">
                      {cells.map((cell, i) => {
                        const esCombinada = cell.claves.length > 1;
                        return cell.claves.filter(c => c !== 'oly').map(clave => (
                          <span
                            key={`${i}-${clave}`}
                            className={`horarios__badge ${esCombinada ? 'horarios__badge--combinada' : 'horarios__badge--especifica'}`}
                            title={cell.nota || ''}
                          >
                            {getNombreCorto(clave)}
                            {cell.nota && ' *'}
                          </span>
                        ));
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
    <section id="horarios">
      <div className="section__container">
        <span className="section__eyebrow">Planificá tu semana</span>
        <h2 className="section__title">Horarios</h2>
        <p className="section__subtitle">
          Encontrá el turno que mejor se adapta a tu rutina.
        </p>

        <div className="horarios__tabs">
          <button
            className={`horarios__tab${tab === 'black' ? ' horarios__tab--active' : ''}`}
            onClick={() => setTab('black')}
          >
            Salón Black
          </button>
          <button
            className={`horarios__tab${tab === 'mb' ? ' horarios__tab--active' : ''}`}
            onClick={() => setTab('mb')}
          >
            Salón M&amp;B
          </button>
        </div>

        <div className={`horarios__panel${tab === 'black' ? ' horarios__panel--active' : ''}`}>
          <TablaHorarios salon="black" />
        </div>
        <div className={`horarios__panel${tab === 'mb' ? ' horarios__panel--active' : ''}`}>
          <TablaHorarios salon="mb" />
        </div>
      </div>
    </section>
  );
}
