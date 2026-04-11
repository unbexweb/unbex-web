// ─────────────────────────────────────────────────────────────────────────────
// DÍAS DE LA SEMANA — helper para mostrar nombres legibles en las páginas
// ─────────────────────────────────────────────────────────────────────────────
export const DIAS_SEMANA = {
  lun: 'Lunes',
  mar: 'Martes',
  mie: 'Miércoles',
  jue: 'Jueves',
  vie: 'Viernes',
  sab: 'Sábado',
};

export const WA_NUMBER = '5491123989560';
const WA_BASE = 'https://wa.me/' + WA_NUMBER + '?text=';

// ─────────────────────────────────────────────────────────────────────────────
// SERVICIOS EXTERNOS — cambiar acá si se migra de proveedor
// ─────────────────────────────────────────────────────────────────────────────
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/meepnevk';

// ─────────────────────────────────────────────────────────────────────────────
// VIDEOS DE DISCIPLINAS — poner el ID de YouTube de cada disciplina acá
// null = sin video → el hero mostrará solo el overlay con imagen de fondo
// ─────────────────────────────────────────────────────────────────────────────
export const DISCIPLINA_VIDEOS = {
  'crossfit-funcional': 'rAFygka9w_o',
  'musculacion':        null,
  'tercera-edad':       null,
  'open-box':           null,
  'yoga':               null,
  'stretching':         null,
  'pilates':            null,
  'zumba':              null,
  'judo-kids':          null,
  'jiu-jitsu':          null,
  'fiit':               null,
  'localizada':         null,
  'body-pump':          null,
};

export const CONTACTO = {
  whatsapp:  WA_NUMBER,
  waLink:    'https://wa.me/' + WA_NUMBER,
  email:     'frandb@unbexargentina.com.ar',
  instagram: 'https://instagram.com/unbex.ar',
  facebook:  'https://facebook.com/unbex.ar',
  telefono:  '11 2398-9560',
};

export const disciplinas = [
  // ── SALÓN BLACK ──────────────────────────────────────────────────────────
  {
    clave:  'crossfit-funcional',
    nombre: 'Crossfit & Funcional',
    short:  'Cross/Funcional',
    salon:  'black',
    img:    'crossfit-funcional.jpg',
    desc:   'Entrenamiento funcional de alta intensidad. Fuerza, resistencia y comunidad. Cupo limitado.',
    icono:  '⚡',
    color:  'card--blue',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre Crossfit & Funcional en Unbex 💪'),
  },
  {
    clave:  'musculacion',
    nombre: 'Musculación',
    short:  'Muscu',
    salon:  'black',
    img:    'musculacion.jpg',
    desc:   'Entrenamiento de fuerza con peso libre y máquinas. Cupo limitado.',
    icono:  '💪',
    color:  'card--blue',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre Musculación en Unbex 💪'),
  },
  {
    clave:  'tercera-edad',
    nombre: '3ra Edad',
    salon:  'mb',
    img:    'tercera-edad.jpg',
    desc:   'Actividad física segura y adaptada para adultos mayores. Cupo limitado.',
    icono:  '🌟',
    color:  'card--green',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre la clase de 3ra Edad en Unbex 🌟'),
  },
  {
    clave:  'open-box',
    nombre: 'Open Box',
    salon:  'black',
    img:    'open-box.jpg',
    desc:   'Sesión libre en el salón Black para entrenar a tu ritmo con equipamiento completo. Cupo limitado.',
    icono:  '🏟️',
    color:  'card--blue',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre Open Box en Unbex 🏟️'),
  },
  // ── SALÓN M&B ─────────────────────────────────────────────────────────────
  {
    clave:  'yoga',
    nombre: 'Yoga',
    salon:  'mb',
    img:    'yoga.jpg',
    desc:   'Equilibrio entre cuerpo y mente. Respiración, postura y bienestar. Cupo limitado.',
    icono:  '🧘',
    color:  'card--green',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre Yoga en Unbex 🧘'),
  },
  {
    clave:  'stretching',
    nombre: 'Stretching',
    salon:  'mb',
    img:    'stretching.jpg',
    desc:   'Flexibilidad y movilidad para un cuerpo más sano y sin tensiones. Cupo limitado.',
    icono:  '🤸',
    color:  'card--green',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre Stretching en Unbex 🤸'),
  },
  {
    clave:  'pilates',
    nombre: 'Pilates Mat',
    salon:  'mb',
    img:    'pilates.jpg',
    desc:   'Control corporal, postura y fuerza desde el centro. Sin aparatos, solo colchoneta. Cupo limitado.',
    icono:  '🧘',
    color:  'card--green',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre Pilates Mat en Unbex 🧘'),
  },
  {
    clave:  'zumba',
    nombre: 'Zumba',
    salon:  'mb',
    img:    'zumba.jpg',
    desc:   'Fitness con baile latino. Divertido, efectivo y con mucha energía. Cupo limitado.',
    icono:  '💃',
    color:  'card--red',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre Zumba en Unbex 💃'),
  },
  {
    clave:  'judo-kids',
    nombre: 'Judo Kids',
    salon:  'mb',
    img:    'judo-kids.jpg',
    desc:   'Judo adaptado para niños, valores, disciplina y respeto. Cupo limitado.',
    icono:  '🥋',
    color:  'card--green',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre Judo Kids en Unbex 🥋'),
  },
  {
    clave:  'jiu-jitsu',
    nombre: 'Jiu Jitsu',
    salon:  'mb',
    img:    'jiu-jitsu.jpg',
    desc:   'Arte marcial brasileña de lucha en el piso. Técnica, defensa y confianza. Cupo limitado.',
    icono:  '🥋',
    color:  'card--blue',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre Jiu Jitsu en Unbex 🥋'),
  },
  {
    clave:  'fiit',
    nombre: 'FIIT',
    salon:  'mb',
    img:    'fiit.jpg',
    desc:   'Intervalos de alta intensidad para quemar calorías al máximo. Cupo limitado.',
    icono:  '🔥',
    color:  'card--red',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre FIIT en Unbex 🔥'),
  },
  {
    clave:  'localizada',
    nombre: 'Localizada/GAP',
    salon:  'mb',
    img:    'localizada.jpg',
    desc:   'Trabajo muscular específico en glúteos, abdomen y piernas. Cupo limitado.',
    icono:  '💪',
    color:  'card--red',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre Localizada/GAP en Unbex 💪'),
  },
  {
    clave:  'body-pump',
    nombre: 'Body Pump',
    salon:  'mb',
    img:    'body-pump.jpg',
    desc:   'Tonificá todo el cuerpo con barra y discos al ritmo de la música. Cupo limitado.',
    icono:  '🏋️',
    color:  'card--red',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre Body Pump en Unbex 🏋️'),
  },
];

export const servicios = [
  { nombre: 'Kinesiología',           desc: 'Rehabilitación y recuperación física personalizada.',  icono: '🩺', color: 'card--blue'  },
  { nombre: 'Depilación',             desc: 'Servicio de depilación profesional.',                  icono: '✨', color: 'card--green' },
  { nombre: 'Entrenamiento personal', desc: 'Planificación adaptada a tus objetivos.',             icono: '👤', color: 'card--blue'  },
  { nombre: 'Evaluaciones físicas',   desc: 'Medición y seguimiento de tu progreso.',              icono: '📋', color: 'card--red'   },
];

export const horarios = [
  // ═══════════════════════════════════════════════════════════════════════════
  // SALÓN BLACK
  // ═══════════════════════════════════════════════════════════════════════════
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'07:00', claves:['crossfit-funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'08:00', claves:['crossfit-funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'09:00', claves:['musculacion'],                      nota:null },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'10:00', claves:['crossfit-funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'11:00', claves:['musculacion'],                      nota:null },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'12:00', claves:['crossfit-funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'13:00', claves:['crossfit-funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'14:00', claves:['crossfit-funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'15:00', claves:['musculacion'],                      nota:null },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'16:00', claves:['crossfit-funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'17:00', claves:['crossfit-funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'18:00', claves:['crossfit-funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'19:00', claves:['crossfit-funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['lun','mar','mie','vie'],       hora:'20:00', claves:['crossfit-funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['jue'],                         hora:'20:00', claves:['crossfit-funcional','musculacion','oly'], nota:'El alumno elige · Se suma Levantamiento Olímpico' },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'21:00', claves:['crossfit-funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['sab'], hora:'09:00', claves:['crossfit-funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['sab'], hora:'10:00', claves:['crossfit-funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['sab'], hora:'11:00', claves:['crossfit-funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['sab'], hora:'12:00', claves:['musculacion'],                      nota:null },

  // ═══════════════════════════════════════════════════════════════════════════
  // SALÓN M&B
  // ═══════════════════════════════════════════════════════════════════════════
  { salon:'mb', dias:['lun','mie','vie'], hora:'09:00', claves:['fiit'] },
  { salon:'mb', dias:['mie'],            hora:'19:00', claves:['fiit'] },
  { salon:'mb', dias:['vie'],            hora:'20:00', claves:['fiit'] },
  { salon:'mb', dias:['jue'],       hora:'10:00', claves:['pilates'] },
  { salon:'mb', dias:['mar','jue'], hora:'17:00', claves:['pilates'] },
  { salon:'mb', dias:['vie'],       hora:'11:00', claves:['stretching'] },
  { salon:'mb', dias:['lun'],       hora:'12:00', claves:['stretching'] },
  { salon:'mb', dias:['mar','jue'], hora:'18:00', claves:['stretching'] },
  { salon:'mb', dias:['lun'], hora:'16:00', claves:['yoga'] },
  { salon:'mb', dias:['mie'], hora:'18:00', claves:['yoga'] },
  { salon:'mb', dias:['mar','jue'], hora:'11:00', claves:['tercera-edad'] },
  { salon:'mb', dias:['mar','jue'], hora:'16:00', claves:['tercera-edad'] },
  { salon:'mb', dias:['lun','vie'], hora:'18:00', claves:['judo-kids'] },
  { salon:'mb', dias:['mar','jue'], hora:'19:00', claves:['zumba'] },
  { salon:'mb', dias:['sab'],       hora:'11:00', claves:['zumba'] },
  { salon:'mb', dias:['vie'], hora:'19:00', claves:['body-pump'] },
  { salon:'mb', dias:['mar','jue'], hora:'20:00', claves:['localizada'] },
  { salon:'mb', dias:['sab'],       hora:'12:00', claves:['localizada'] },
  { salon:'mb', dias:['lun','mie'], hora:'20:00', claves:['jiu-jitsu'] },
];
