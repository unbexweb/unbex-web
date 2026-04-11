import { horarios, DIAS_SEMANA } from '@/data/disciplines';

const DIAS_ORDER = ['lun', 'mar', 'mie', 'jue', 'vie', 'sab'];

export default function HorariosTable({ clave }) {
  // Filtrar horarios de esta disciplina
  const mios = horarios.filter(h => h.claves.includes(clave));

  // Agrupar por día
  const porDia = DIAS_ORDER.reduce((acc, dia) => {
    const turnos = mios
      .filter(h => h.dias.includes(dia))
      .map(h => h.hora)
      .sort();
    if (turnos.length) acc[dia] = turnos;
    return acc;
  }, {});

  if (!Object.keys(porDia).length) {
    return (
      <p style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center', padding: '1rem' }}>
        Próximamente
      </p>
    );
  }

  return (
    <div className="horario-grid">
      {Object.entries(porDia).map(([dia, turnos]) => (
        <div key={dia} className="horario-card">
          <div className="horario-card__dia">{DIAS_SEMANA[dia]}</div>
          <div className="horario-card__turnos">
            {turnos.map(hora => (
              <span key={hora} className="horario-turno">{hora}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
