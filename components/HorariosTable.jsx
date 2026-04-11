import { horarios, DIAS_SEMANA, WA_NUMBER } from '@/data/disciplines';

const ORDEN_DIAS = ['lun', 'mar', 'mie', 'jue', 'vie', 'sab'];

export default function HorariosTable({ clave, nombreDisciplina }) {
  const turnos = horarios.filter(h => h.claves.includes(clave));

  // Agrupar por día: { lun: [{hora, nota}, ...], ... }
  const porDia = {};
  ORDEN_DIAS.forEach(cod => { porDia[cod] = []; });

  turnos.forEach(t => {
    t.dias.forEach(cod => {
      if (porDia[cod] !== undefined) {
        porDia[cod].push({ hora: t.hora, nota: t.nota });
      }
    });
  });

  // Ordenar horas dentro de cada día
  ORDEN_DIAS.forEach(cod => {
    porDia[cod].sort((a, b) => a.hora.localeCompare(b.hora));
  });

  // Solo días con turnos
  const diasConTurnos = ORDEN_DIAS.filter(cod => porDia[cod].length > 0);

  if (!diasConTurnos.length) {
    return (
      <p style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center', padding: '1rem' }}>
        Próximamente
      </p>
    );
  }

  return (
    <div className="horario-grid">
      {diasConTurnos.map(cod => {
        const diaNombre = DIAS_SEMANA[cod];
        return (
          <div key={cod} className="horario-card">
            <div className="horario-card__dia">{diaNombre}</div>
            <div className="horario-card__turnos">
              {porDia[cod].map(({ hora, nota }) => {
                const msg = encodeURIComponent(
                  `Hola! Quiero reservar un lugar en ${nombreDisciplina} el ${diaNombre} a las ${hora} 💪`
                );
                const href = `https://wa.me/${WA_NUMBER}?text=${msg}`;
                return (
                  <a
                    key={hora}
                    className="horario-turno"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={nota || undefined}
                  >
                    {hora}
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
