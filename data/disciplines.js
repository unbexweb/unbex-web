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

export const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER || '5491123989560';
const WA_BASE = 'https://wa.me/' + WA_NUMBER + '?text=';

// ─────────────────────────────────────────────────────────────────────────────
// SERVICIOS EXTERNOS — cambiar acá si se migra de proveedor
// ─────────────────────────────────────────────────────────────────────────────
export const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE || '';

// ─────────────────────────────────────────────────────────────────────────────
// VIDEOS DE DISCIPLINAS — poner el ID de YouTube de cada disciplina acá
// null = sin video → el hero mostrará solo el overlay con imagen de fondo
// ─────────────────────────────────────────────────────────────────────────────
export const DISCIPLINA_VIDEOS = {
  'crossfit':           process.env.NEXT_PUBLIC_VIDEO_CROSSFIT    || null,
  'funcional':          process.env.NEXT_PUBLIC_VIDEO_FUNCIONAL   || null,
  'musculacion':        process.env.NEXT_PUBLIC_VIDEO_MUSCULACION || null,
  'tercera-edad':       process.env.NEXT_PUBLIC_VIDEO_TERCERA_EDAD || null,
  'open-box':           process.env.NEXT_PUBLIC_VIDEO_OPEN_BOX    || null,
  'yoga':               process.env.NEXT_PUBLIC_VIDEO_YOGA        || null,
  'stretching':         process.env.NEXT_PUBLIC_VIDEO_STRETCHING  || null,
  'pilates':            process.env.NEXT_PUBLIC_VIDEO_PILATES      || null,
  'zumba':              process.env.NEXT_PUBLIC_VIDEO_ZUMBA        || null,
  'judo-kids':          process.env.NEXT_PUBLIC_VIDEO_JUDO_KIDS    || null,
  'jiu-jitsu':          process.env.NEXT_PUBLIC_VIDEO_JIU_JITSU   || null,
  'fiit':               process.env.NEXT_PUBLIC_VIDEO_FIIT         || null,
  'localizada':         process.env.NEXT_PUBLIC_VIDEO_LOCALIZADA   || null,
  'body-pump':          process.env.NEXT_PUBLIC_VIDEO_BODY_PUMP    || null,
  'servicios':          process.env.NEXT_PUBLIC_VIDEO_SERVICIOS   || 'KlvQq-FK9SQ',
  'precios':            process.env.NEXT_PUBLIC_VIDEO_PRECIOS     || 'CatEXzcy3Uk',
};

export const CONTACTO = {
  whatsapp:  WA_NUMBER,
  waLink:    'https://wa.me/' + WA_NUMBER,
  email:     process.env.NEXT_PUBLIC_EMAIL     || '',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM || '',
  facebook:  process.env.NEXT_PUBLIC_FACEBOOK  || '',
  telefono:  process.env.NEXT_PUBLIC_TELEFONO  || '',
};

export const disciplinas = [
  // ── SALÓN BLACK ──────────────────────────────────────────────────────────
  {
    clave:     'crossfit',
    nombre:    'Crossfit',
    short:     'Crossfit',
    salon:     'black',
    img:       'crossfit-funcional.jpg',
    desc:      'Entrenamiento de alta intensidad basado en movimientos olímpicos. Fuerza, potencia y comunidad. Cupo limitado.',
    descLarga: 'Es un sistema de entrenamiento de alta intensidad basado en movimientos olímpicos y gimnásticos. Lo mejor de nuestro método es que es 100% adaptable: desde jóvenes que buscan su máximo potencial hasta adultos mayores que quieren mantener su independencia y vitalidad. Aquí, la intensidad se ajusta a ti, no tú a ella.',
    icono:  '⚡',
    color:  'card--blue',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre Crossfit en Unbex ⚡'),
  },
  {
    clave:  'funcional',
    nombre: 'Cross Funcional',
    short:  'Cross Funcional',
    salon:  'black',
    img:    'funcional.jpg',
    desc:   'Entrenamiento funcional adaptado a tu nivel. Movimientos reales, resultados reales. Cupo limitado.',
    descLarga: 'El entrenamiento funcional trabaja los patrones de movimiento del cuerpo humano: empujar, halar, agachar, rotar y cargar. Cada clase está diseñada para mejorar tu rendimiento en la vida cotidiana y en el deporte, con una metodología 100% adaptable a tu nivel y objetivos.',
    icono:  '🏃',
    color:  'card--blue',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre Cross Funcional en Unbex 🏃'),
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
    salon:  'black',
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

// ─────────────────────────────────────────────────────────────────────────────
// PRECIOS
// ─────────────────────────────────────────────────────────────────────────────
export const precios = {
  clases: [
    {
      id: 'black',
      nombre: 'Salón Black',
      desc: 'Musculación, Crossfit, Cross Funcional, 3ra Edad',
      planes: [
        { plan: '4 clases',  precio: 34650, efvo: 31500 },
        { plan: '8 clases',  precio: 48400, efvo: 44000 },
        { plan: '12 clases', precio: 54450, efvo: 49500, destacado: true },
        { plan: '16 clases', precio: 61600, efvo: 56000 },
        { plan: '20 clases', precio: 66550, efvo: 60500 },
        { plan: '24 clases', precio: 71500, efvo: 65000 },
      ],
    },
    {
      id: 'mb',
      nombre: 'Salón M&B',
      desc: 'Yoga, Stretching, Pilates Mat, Zumba, Localizada/GAP, FIIT, Judo Kids',
      planes: [
        { plan: '4 clases',  precio: 39050, efvo: 35500 },
        { plan: '8 clases',  precio: 50600, efvo: 46000 },
        { plan: '12 clases', precio: 59400, efvo: 54000 },
        { plan: '16 clases', precio: 67100, efvo: 61000 },
        { plan: '20 clases', precio: 73700, efvo: 67000 },
        { plan: '24 clases', precio: 78100, efvo: 71000 },
      ],
    },
    {
      id: 'full',
      nombre: 'Full Unbex',
      desc: 'Acceso ambos salones, combiná como quieras',
      planes: [
        { plan: '8 clases',  precio: 54450, efvo: 49500 },
        { plan: '12 clases', precio: 63800, efvo: 58000 },
        { plan: '16 clases', precio: 71500, efvo: 65000 },
        { plan: '20 clases', precio: 77000, efvo: 70000 },
        { plan: '24 clases', precio: 83600, efvo: 76000 },
        { plan: 'Ilimitado', precio: 90200, efvo: 82000, destacado: true },
      ],
    },
    {
      id: 'jubilados',
      nombre: 'Jubilados +70',
      desc: 'Acceso ambos salones',
      planes: [
        { plan: '8 clases',  precio: 33000, efvo: 30000 },
        { plan: '12 clases', precio: 37400, efvo: 34000 },
        { plan: '16 clases', precio: 44000, efvo: 40000 },
        { plan: '20 clases', precio: 50600, efvo: 46000 },
        { plan: '24 clases', precio: 57750, efvo: 52500 },
        { plan: 'Ilimitado', precio: 62700, efvo: 57000 },
      ],
    },
  ],
  espacio: [
    {
      id: 'open-box',
      nombre: 'Open Box',
      desc: 'Reservas de 7 a 21hs',
      planes: [
        { plan: '4 horas',  precio: 31350, efvo: 28000 },
        { plan: '12 horas', precio: 50400, efvo: 45000 },
        { plan: '24 horas', precio: 68900, efvo: 61500 },
        { plan: '48 horas', precio: 90700, efvo: 81000 },
      ],
    },
    {
      id: 'open-matutino',
      nombre: 'Open Matutino',
      desc: 'Reservas de 7 a 15hs',
      planes: [
        { plan: '4 horas',  precio: 21300, efvo: 19000 },
        { plan: '12 horas', precio: 35300, efvo: 31500 },
        { plan: '24 horas', precio: 47600, efvo: 42500 },
        { plan: '48 horas', precio: 63850, efvo: 57000 },
      ],
    },
    {
      id: 'all-out',
      nombre: 'All Out',
      desc: 'Los valores NO incluyen plani',
      planes: [
        { plan: '4 horas',  precio: 26000, efvo: 23000 },
        { plan: '12 horas', precio: 40300, efvo: 36000 },
        { plan: '24 horas', precio: 56550, efvo: 50500 },
        { plan: '48 horas', precio: 75000, efvo: 67000 },
      ],
    },
  ],
};

export const servicios = [
  { nombre: 'Kinesiología',           desc: 'Rehabilitación y recuperación física personalizada.',  icono: '🩺', color: 'card--blue'  },
  { nombre: 'Depilación',             desc: 'Servicio de depilación profesional.',                  icono: '✨', color: 'card--green' },
  { nombre: 'Entrenamiento personal', desc: 'Planificación adaptada a tus objetivos.',             icono: '👤', color: 'card--blue'  },
  { nombre: 'Evaluaciones físicas',   desc: 'Medición y seguimiento de tu progreso.',              icono: '📋', color: 'card--red'   },
];

export const consultorios = [
  { nombre: 'Kinesiología',            icono: '🩺', desc: 'Recuperación de lesiones y descarga muscular para mantenerte siempre en movimiento y evaluaciones de fuerza. Consultas, tratamientos y mediciones.',                                                                                                                                          wa: WA_BASE + encodeURIComponent('Hola! Quiero solicitar una reserva para Kinesiología en Unbex 🩺') },
  { nombre: 'Nutrición',               icono: '🥗', desc: 'Planes de alimentación personalizados de calidad según tus metas, mediciones antropométricas para que conozcas tu composición corporal y objetivos a corto, mediano y largo plazo con seguimiento profesional.',                                                                           wa: WA_BASE + encodeURIComponent('Hola! Quiero solicitar una reserva para Nutrición en Unbex 🥗') },
  { nombre: 'Psicología Deportiva',    icono: '🧠', desc: 'Fortalecé tu mentalidad para superar cualquier obstáculo. Gestión del estrés y motivación.',                                                                                                                                                                                              wa: WA_BASE + encodeURIComponent('Hola! Quiero solicitar una reserva para Psicología Deportiva en Unbex 🧠') },
  { nombre: 'Acupuntura',              icono: '🪡', desc: 'Alivio del dolor y equilibrio sistémico y energético.',                                                                                                                                                                                                                                    wa: WA_BASE + encodeURIComponent('Hola! Quiero solicitar una reserva para Acupuntura en Unbex 🪡') },
  { nombre: 'Detox Pedilúvico Iónico', icono: '💧', desc: 'Limpieza profunda de toxinas a través de los pies activando tu sistema linfático para mejorar tu circulación y energía.',                                                                                                                                                                 wa: WA_BASE + encodeURIComponent('Hola! Quiero solicitar una reserva para Detox Pedilúvico Iónico en Unbex 💧') },
  { nombre: 'Masaje Deportivo',        icono: '💆', desc: 'Recuperación post-entrenamiento. Descomprime tu contractura o libera tu sobrecarga muscular.',                                                                                                                                                                                             wa: WA_BASE + encodeURIComponent('Hola! Quiero solicitar una reserva para Masaje Deportivo en Unbex 💆') },
];

export const horarios = [
  // ═══════════════════════════════════════════════════════════════════════════
  // SALÓN BLACK
  // ═══════════════════════════════════════════════════════════════════════════
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'07:00', claves:['crossfit','funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'08:00', claves:['crossfit','funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'09:00', claves:['musculacion'],                      nota:null },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'10:00', claves:['crossfit','funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'11:00', claves:['musculacion'],                      nota:null },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'12:00', claves:['crossfit','funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'13:00', claves:['crossfit','funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'14:00', claves:['crossfit','funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'15:00', claves:['musculacion'],                      nota:null },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'16:00', claves:['crossfit','funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'17:00', claves:['crossfit','funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'18:00', claves:['crossfit','funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'19:00', claves:['crossfit','funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['lun','mar','mie','vie'],       hora:'20:00', claves:['crossfit','funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['jue'],                         hora:'20:00', claves:['crossfit','funcional','musculacion'], nota:'El alumno elige · Se suma Olimpismo' },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'21:00', claves:['crossfit','funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['sab'], hora:'09:00', claves:['crossfit','funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['sab'], hora:'10:00', claves:['crossfit','funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['sab'], hora:'11:00', claves:['crossfit','funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['sab'], hora:'12:00', claves:['musculacion'], nota:'Allout / El alumno elige' },

  // ═══════════════════════════════════════════════════════════════════════════
  // SALÓN M&B
  // ═══════════════════════════════════════════════════════════════════════════
  { salon:'mb', dias:['lun','mie','vie'], hora:'09:00', claves:['fiit'] },
  { salon:'mb', dias:['mie','vie'],       hora:'19:00', claves:['fiit'] },
  { salon:'mb', dias:['mie','vie'],       hora:'20:00', claves:['fiit'] },
  { salon:'mb', dias:['jue'],       hora:'10:00', claves:['pilates'] },
  { salon:'mb', dias:['mar','jue'], hora:'17:00', claves:['pilates'] },
  { salon:'mb', dias:['vie'],       hora:'11:00', claves:['stretching'] },
  { salon:'mb', dias:['lun'],       hora:'12:00', claves:['stretching'] },
  { salon:'mb', dias:['mar','jue'], hora:'18:00', claves:['stretching'] },
  { salon:'mb', dias:['lun'], hora:'16:00', claves:['yoga'] },
  { salon:'mb', dias:['mie'], hora:'18:00', claves:['yoga'] },
  { salon:'mb', dias:['mar','jue'], hora:'16:00', claves:['tercera-edad'] },
  { salon:'mb', dias:['lun','vie'], hora:'18:00', claves:['judo-kids'] },
  { salon:'mb', dias:['mar','jue'], hora:'19:00', claves:['zumba'] },
  { salon:'mb', dias:['sab'],       hora:'11:00', claves:['zumba'] },
  { salon:'mb', dias:['vie'], hora:'19:00', claves:['body-pump'] },
  { salon:'mb', dias:['mar','jue'], hora:'20:00', claves:['localizada'] },
  { salon:'mb', dias:['sab'],       hora:'12:00', claves:['localizada'] },
  { salon:'mb', dias:['lun','mie'], hora:'20:00', claves:['jiu-jitsu'] },
];
