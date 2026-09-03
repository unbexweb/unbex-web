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
// ─────────────────────────────────────────────────────────────────────────────
// VIDEOS DE DISCIPLINAS — ID de YouTube por disciplina
// null = sin video → el hero mostrará solo el overlay con imagen de fondo
// ─────────────────────────────────────────────────────────────────────────────
// IDs de YouTube (horizontal 16:9) para el hero de cada página de disciplina
export const DISCIPLINA_HERO_VIDEOS = {
  'crosstraining':'SjZSSFfkaX0',
  'funcional':    'jePQAspEmCA',
  'musculacion':  '5k3hVLDBdK0',
  'tercera-edad': 'v_UDXEbgB7c',
  'open-box':     'NzMYHtFcEuA',
  'yoga':         'W6dfSrJZvCM',
  'stretching':   'IZIXX0GfMMw',
  'pilates':      'PKvrN2NZhw0',
  'zumba':        '9ZJEFNa7Gsg',
  'judo-kids':    '7_Y-ui7By48',
  'jiu-jitsu':    'NI4pXTfitzo',
  'fiit':         'iXYI17zQkwk',
  'localizada':   'IO0KEAT89kg',
  'body-pump':    'MeVekXTbmOY',
  // 'levantamiento-olimpico': pendiente — agregar el ID de YouTube (referencia: hero_disciplinas_levantamientoolimpico)
};

// IDs de YouTube para el overlay del hero principal
export const DISCIPLINA_VIDEOS = {
  'crosstraining':'rAFygka9w_o',
  'funcional':    null,
  'musculacion':  null,
  'tercera-edad': null,
  'open-box':     null,
  'yoga':         null,
  'stretching':   null,
  'pilates':      null,
  'zumba':        null,
  'judo-kids':    null,
  'jiu-jitsu':    null,
  'fiit':         null,
  'localizada':   null,
  'body-pump':    null,
  'servicios':    'KlvQq-FK9SQ',
  'precios':      'CatEXzcy3Uk',
};

// Videos del hero principal — array para el carrusel.
// Cada entrada: { desktop: 'ID_YT', mobile: 'ID_YT' | null }
// Si mobile es null, usa desktop como fallback en móvil.
export const HERO_VIDEOS = [
  { desktop: 'X_nWX1HN2qY', mobile: null }, // Dron
  { desktop: 'qXCb6Dj84IY', mobile: null }, // Tienda
  { desktop: '2-RuugIaXzM', mobile: null }, // Comunidad
  { desktop: 'e-50q3ZFXjE', mobile: null }, // Bar
  { desktop: 'VtptkYoi-6A', mobile: null }, // Accesorios Shop
  { desktop: '6LbyXWEsfYg', mobile: null }, // Indumentaria
];

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
    clave:     'crosstraining',
    nombre:    'Crosstraining',
    short:     'Cross',
    salon:     'black',
    img:       'card_disciplinas_crossfit.jpg',
    desc:      'Entrenamiento de alta intensidad basado en movimientos olímpicos. Fuerza, potencia y comunidad. Cupos limitados.',
    descLarga: 'Es un sistema de entrenamiento de alta intensidad basado en movimientos olímpicos y gimnásticos. Lo mejor de nuestro método es que es 100% adaptable: desde jóvenes que buscan su máximo potencial hasta adultos mayores que quieren mantener su independencia y vitalidad. Aquí, la intensidad se ajusta a vos, no vos a ella.',
    icono:  '⚡',
    color:  'card--blue',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre Crosstraining en Unbex ⚡'),
    paraQuien: 'Personas de todos los niveles que buscan superarse día a día. No importa tu punto de partida, las cargas y movimientos se adaptan a vos.',
    objetivos: 'Ganás fuerza, potencia, resistencia y mejorás tu condición física general en comunidad.',
    duracion:  '60 minutos',
  },
  {
    clave:  'funcional',
    nombre: 'Funcional',
    short:  'Funcional',
    salon:  'black',
    img:    'card_disciplinas_crossfuncional.jpg',
    desc:   'Entrenamiento funcional adaptado a tu nivel. Movimientos Funcionales, resultados reales. Cupos limitados.',
    descLarga: 'El entrenamiento funcional trabaja los patrones de movimiento del cuerpo humano: empujar, halar, agachar, rotar y cargar. Cada clase está diseñada para mejorar tu rendimiento en la vida cotidiana y en el deporte, con una metodología 100% adaptable a tu nivel y objetivos.',
    icono:  '🏃',
    color:  'card--blue',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre Funcional en Unbex 🏃'),
    paraQuien: 'Quienes quieren un entrenamiento dinámico y variado, de cualquier nivel y edad.',
    objetivos: 'Mejorás tu fuerza, agilidad y resistencia con movimientos naturales aplicables a tu vida diaria.',
    duracion:  '60 minutos',
  },
  {
    clave:  'musculacion',
    nombre: 'Musculación',
    short:  'Muscu',
    salon:  'black',
    img:    'card_disciplinas_musculacion.jpg',
    desc:   'El entrenamiento de fuerza es la medicina más efectiva para el cuerpo. Nuestras clases de musculación ofrecen un ambiente diseñado para que personas de todas las edades cumplan con sus objetivos individuales. Con rutinas personalizadas, te ayudamos a ganar fuerza funcional y confianza, adaptando cada ejercicio y su carga a tus capacidades actuales.',
    icono:  '💪',
    color:  'card--blue',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre Musculación en Unbex 💪'),
    paraQuien: 'Personas de todas las edades que quieran tonificar, ganar masa muscular o mejorar su salud, con rutinas adaptadas a cada uno.',
    objetivos: 'Desarrollo de fuerza, tonificación muscular y confianza con un plan personalizado y guiado.',
    duracion:  '60 minutos',
  },
  {
    clave:  'tercera-edad',
    nombre: '3ra Edad',
    salon:  'black',
    img:    'card_disciplinas_3raedad.jpg',
    desc:   'Nuestras clases para adultos mayores están diseñadas para mantener el cuerpo en movimiento y la mente ágil. Nos enfocamos en ejercicios que mejoran la autonomía diaria: equilibrio para prevenir caídas, fuerza para cargar las compras y flexibilidad para jugar con los nietos. Porque la edad es solo un número cuando el cuerpo se siente fuerte y vital.',
    icono:  '🌟',
    color:  'card--green',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre la clase de 3ra Edad en Unbex 🌟'),
    paraQuien: 'Adultos mayores que quieren mantenerse activos, fuertes y autónomos en un ambiente cuidado y amigable.',
    objetivos: 'Mejorás tu fuerza, equilibrio, flexibilidad y coordinación para vivir el día a día con más vitalidad.',
    duracion:  '60 minutos',
  },
  {
    clave:  'open-box',
    nombre: 'Open Box',
    salon:  'black',
    img:    'card_disciplinas_openbox.jpg',
    desc:   'Sesión libre en el salón Black para entrenar a tu ritmo con equipamiento completo. Cupos limitados.',
    icono:  '🏟️',
    color:  'card--blue',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre Open Box en Unbex 🏟️'),
    paraQuien: 'Quienes quieren entrenar a su ritmo y con libertad de horarios, eligiendo qué trabajar cada día.',
    objetivos: 'Entrenás de forma autónoma combinando los espacios y equipamiento según tus metas.',
    duracion:  'Reserva por hora',
  },
  {
    clave:     'all-out',
    nombre:    'All Out',
    salon:     'black',
    img:       'card_disciplinas_allout.jpg',
    desc:      'All Out es nuestra planificación de Crossfit pensada para un público avanzado con conocimientos previos en la disciplina. Ideal tanto para quienes quieren competir como para los que buscan llevar su nivel un paso más allá. No es un entrenamiento personalizado, pero contás con seguimiento de tu progreso en cada sesión.',
    icono:  '🏆',
    color:  'card--blue',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre All Out en Unbex 🏆'),
    paraQuien: 'Personal con experiencia en Crossfit que buscan competir o subir su nivel de entrenamiento.',
    objetivos: 'Elevás tu rendimiento con una planificación estructurada de alto nivel y seguimiento de tu progreso.',
    duracion:  '120 minutos aprox.',
    // Horarios propios: solo se muestran en /disciplinas/all-out, no en la grilla de Horarios del main.
    horarios: {
      lunes:     ['07:00 a 21:00'],
      martes:    ['07:00 a 21:00'],
      miercoles: ['07:00 a 21:00'],
      jueves:    ['07:00 a 21:00'],
      viernes:   ['07:00 a 21:00'],
      sabado:    ['09:00 a 13:00'],
      domingo:   [],
    },
    // Link "Conocé los planes de All Out" en su página → precios con este tab preseleccionado
    precioTab: 'all-out',
  },
  {
    clave:  'levantamiento-olimpico',
    nombre: 'Levantamiento Olímpico',
    short:  'Oly',
    salon:  'black',
    img:    'card_disciplinas_levantamientoolimpico.jpg', // pendiente: subir la imagen con este nombre
    desc:   'El Levantamiento Olímpico es una de las disciplinas más completas y técnicas del deporte, y en Unbex la ponemos a tu alcance sin importar tu punto de partida. Nuestras clases son 100% guiadas y están pensadas para que aprendas y perfecciones los dos movimientos clásicos: el arranque y el envión. No necesitás experiencia previa ni ser un atleta avanzado. Trabajamos paso a paso, desglosando cada fase del movimiento para que entiendas la técnica, ganes confianza y avances a tu ritmo. Ya sea que estés dando tus primeros levantamientos o que quieras pulir detalles para levantar mejor, nuestro entrenador te acompaña en cada repetición corrigiendo la postura, la movilidad y el timing. Vas a mejorar tu fuerza, tu coordinación y tu control corporal mientras dominás una técnica que te sirve para cualquier otra disciplina. Vení a descubrir de lo que sos capaz.',
    icono:  '🏋️',
    color:  'card--blue',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre Levantamiento Olímpico en Unbex 🏋️'),
    paraQuien: 'Cualquier persona que quiera aprender levantamiento olímpico desde cero o mejorar su técnica en arranque y envión. No requiere experiencia previa.',
    objetivos: 'Aprendés y perfeccionás la técnica de los levantamientos olímpicos ganando fuerza, coordinación y control, siempre con guía profesional.',
    duracion:  '60 minutos',
    // Horarios: usa la grilla compartida de `horarios` más abajo (jueves 20:00 combinado
    // con Cross/Func/Muscu, sábado 13:00 clase propia) — no necesita horariosSemana propio.
  },
  // ── SALÓN M&B ─────────────────────────────────────────────────────────────
  {
    clave:  'yoga',
    nombre: 'Yoga',
    salon:  'mb',
    img:    'card_disciplinas_yoga.jpg',
    desc:   'El Yoga es mucho más que estiramientos; es una disciplina integral que conecta tu respiración con el movimiento. En nuestras clases, trabajamos la flexibilidad, el tono muscular y la calma mental. Nuestras sesiones de Yoga están diseñadas para adaptarse a cada nivel y etapa de la vida.',
    icono:  '🧘',
    color:  'card--green',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre Yoga en Unbex 🧘'),
    paraQuien: 'Todas las personas y todas las edades que buscan conectar cuerpo y mente, sin importar su flexibilidad inicial.',
    objetivos: 'Ganarás flexibilidad, tono muscular y calma mental en un ambiente relajado.',
    duracion:  '60 minutos',
  },
  {
    clave:  'stretching',
    nombre: 'Stretching',
    salon:  'mb',
    img:    'card_disciplinas_stretching.jpg',
    desc:   'Nuestras clases de Stretching están diseñadas para liberar la tensión muscular, mejorar la postura y acelerar la recuperación de todo el cuerpo después del esfuerzo. Es el complemento indispensable para quienes hacen Crosstraining o Musculación y quieren evitar lesiones mientras ganan un rango de movimiento óptimo.',
    icono:  '🤸',
    color:  'card--green',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre Stretching en Unbex 🤸'),
    paraQuien: 'Cualquier persona que quiera mejorar su flexibilidad y recuperación, ideal como complemento de otras disciplinas.',
    objetivos: 'Liberás tensión muscular, mejorás tu postura y prevenís lesiones.',
    duracion:  '60 minutos',
  },
  {
    clave:  'pilates',
    nombre: 'Pilates Mat',
    salon:  'mb',
    img:    'card_disciplinas_pilates.jpg',
    desc:   'Basado en los principios de control, precisión y fluidez, el Pilates Mat utiliza el propio peso corporal y elementos pequeños para desafiar tu resistencia. Es el método perfecto para todas las edades, ya que no tiene impacto articular. Te ayudará a moverte con más elegancia y eficiencia en tu vida diaria, eliminando dolores posturales y ganando una fuerza real y funcional.',
    icono:  '🧘',
    color:  'card--green',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre Pilates Mat en Unbex 🧘'),
    paraQuien: 'Personas de todas las edades, incluso quienes buscan una actividad sin impacto articular.',
    objetivos: 'Fortalecés tu core, mejorás tu postura y te movés con más elegancia y eficiencia.',
    duracion:  '60 minutos',
  },
  {
    clave:  'zumba',
    nombre: 'Zumba',
    salon:  'mb',
    img:    'card_disciplinas_zumba.jpg',
    desc:   'Combinamos ritmos hipnóticos con movimientos fáciles de seguir para crear un entrenamiento cardiovascular increíble. Es la clase ideal para todas las edades: aquí no importa si sabés bailar o no, lo que importa es mover el cuerpo, liberar endorfinas y salir con una sonrisa. ¡Vení a quemar calorías mientras te divertís!',
    icono:  '💃',
    color:  'card--red',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre Zumba en Unbex 💃'),
    paraQuien: 'Todos los que quieran divertirse mientras entrenan, sepan bailar o no, de cualquier edad.',
    objetivos: 'Quemás calorías, mejorás tu resistencia cardiovascular y liberás endorfinas.',
    duracion:  '60 minutos',
  },
  {
    clave:  'judo-kids',
    nombre: 'Judo Kids',
    salon:  'mb',
    img:    'card_disciplinas_judokids.jpeg',
    desc:   'El Judo es una de las disciplinas más recomendadas para el desarrollo integral en la infancia. Para niños de 6 a 12 años. A través del juego y la técnica, los chicos aprenden valores fundamentales como el respeto, la disciplina y el compañerismo. Una actividad que les ayuda a canalizar su energía de forma positiva mientras construyen una base sólida de confianza en sí mismos.',
    icono:  '🥋',
    color:  'card--green',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre Judo Kids en Unbex 🥋'),
    paraQuien: 'Niños de 6 a 12 años que quieran aprender una disciplina formativa y divertida.',
    objetivos: 'Desarrollan respeto, disciplina, confianza y canalizan su energía de forma positiva.',
    duracion:  '60 minutos',
  },
  {
    clave:  'jiu-jitsu',
    nombre: 'Jiu Jitsu',
    salon:  'mb',
    img:    'card_disciplinas_jiujitsu.jpg',
    desc:   'Más que un sistema de defensa personal, el brazilian Jiu Jitsu es un estilo de vida que promueve la disciplina y la camaradería. Las clases están a cargo de la Academia Real Jiu Jitsu y ofrecen un ambiente seguro para aprender proyecciones, controles y escapes. Al ser un deporte de intensidad adaptable, es perfecto para jóvenes que buscan un desafío competitivo y para adultos que desean mantenerse en forma de una manera dinámica, estratégica y altamente efectiva.',
    descLarga: '¿Querés probarlo? Podés usar una de tus 3 clases de prueba para asistir a una clase de Jiu Jitsu. Te invitamos a probar cuando quieras.',
    icono:  '🥋',
    color:  'card--blue',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre Jiu Jitsu en Unbex 🥋'),
    paraQuien: 'Jóvenes y adultos que buscan defensa personal, un desafío competitivo o mantenerse en forma de manera dinámica.',
    objetivos: 'Aprendés técnica, defensa personal y ganás disciplina, fuerza y agilidad mental.',
    duracion:  '90 minutos',
  },
  {
    clave:  'fiit',
    nombre: 'FIIT',
    salon:  'mb',
    img:    'card_disciplinas_fiit.jpg',
    desc:   'Si buscás una clase donde el tiempo vuele, el funcional hiit es para vos. Diseñamos circuitos que desafían tu agilidad y resistencia cardiovascular. Al ser un método 100% escalable, adaptamos cada estación a tu nivel físico y edad, garantizando un entrenamiento seguro, divertido y sumamente efectivo para transformar tu composición corporal.',
    icono:  '🔥',
    color:  'card--red',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre FIIT en Unbex 🔥'),
    paraQuien: 'Todos los niveles y edades que buscan un entrenamiento intenso y dinámico, con ejercicios que se adaptan a tu ritmo.',
    objetivos: 'Mejorás tu resistencia y quemás grasa con trabajo de alta intensidad por tiempo, mayormente en formato Tabata.',
    duracion:  '60 minutos',
  },
  {
    clave:  'localizada',
    nombre: 'Localizada/GAP',
    salon:  'mb',
    img:    'card_disciplinas_localizada.jpg',
    desc:   'Concentramos toda la energía en las zonas que más te interesan. GAP es un entrenamiento de resistencia muscular diseñado para fortalecer y definir el tren inferior y el core, mientras que localizada complementa el tren superior. Es una clase apta para todas las edades, ya que cada ejercicio permite variantes de intensidad. Si buscás firmeza, mejor postura y resultados localizados, esta es tu clase.',
    icono:  '💪',
    color:  'card--red',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre Localizada/GAP en Unbex 💪'),
    paraQuien: 'Personas de todas las edades que quieran trabajar zonas específicas como glúteos, abdomen y piernas.',
    objetivos: 'Fortalecés y definís con resultados localizados.',
    duracion:  '60 minutos',
  },
  {
    clave:  'body-pump',
    nombre: 'Body Pump',
    salon:  'mb',
    img:    'card_disciplinas_bodypump.jpg',
    desc:   'Fortalecé todo tu cuerpo con el programa original con barra y discos. Al ritmo de los mejores hits, realizarás repeticiones de alta efectividad para tonificar y esculpir tus músculos. Gracias a que vos elegís el peso, es una actividad ideal para todas las edades y niveles de condición física: desde principiantes que buscan firmeza hasta atletas que quieren mejorar su resistencia muscular.',
    icono:  '🏋️',
    color:  'card--red',
    wa:     WA_BASE + encodeURIComponent('Hola! Quiero info sobre Body Pump en Unbex 🏋️'),
    paraQuien: 'Todos los niveles y edades, desde principiantes hasta quienes buscan mejorar su resistencia muscular.',
    objetivos: 'Tonificás y esculpís todo el cuerpo al ritmo de la música, eligiendo vos la carga.',
    duracion:  '60 minutos',
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
      desc: 'Musculación, Crosstraining, Funcional, 3ra Edad',
      planes: [
        { plan: '4 clases',  precio: 39000, efvo: 35500 },
        { plan: '8 clases',  precio: 54300, efvo: 49500 },
        { plan: '12 clases', precio: 61000, efvo: 55500, destacado: true },
        { plan: '16 clases', precio: 69000, efvo: 63000 },
        { plan: '20 clases', precio: 74500, efvo: 68000 },
        { plan: '24 clases', precio: 80000, efvo: 73000 },
      ],
    },
    {
      id: 'mb',
      nombre: 'Salón M&B',
      desc: 'Yoga, Stretching, Pilates Mat, Zumba, Localizada/GAP, FIIT, Body Pump, Judo Kids',
      planes: [
        { plan: '4 clases',  precio: 44000, efvo: 40000 },
        { plan: '8 clases',  precio: 56500, efvo: 51500 },
        { plan: '12 clases', precio: 66500, efvo: 60500 },
        { plan: '16 clases', precio: 75200, efvo: 68500 },
        { plan: '20 clases', precio: 82600, efvo: 75000 },
        { plan: '24 clases', precio: 87500, efvo: 79500 },
      ],
    },
    {
      id: 'full',
      nombre: 'Full Unbex',
      desc: 'Acceso ambos salones, combiná como quieras',
      planes: [
        { plan: '8 clases',  precio: 61000, efvo: 55500 },
        { plan: '12 clases', precio: 71500, efvo: 65000 },
        { plan: '16 clases', precio: 80000, efvo: 73000 },
        { plan: '20 clases', precio: 86300, efvo: 78500 },
        { plan: '24 clases', precio: 93600, efvo: 85000 },
        { plan: 'Ilimitado', precio: 101000, efvo: 92000, destacado: true },
      ],
    },
    {
      id: 'jiu-jitsu',
      nombre: 'Jiu Jitsu',
      desc: 'Academia Real Jiu Jitsu · Clases de 90 min',
      planes: [
        { plan: '4 clases', precio: 50000, efvo: 50000 },
        { plan: '8 clases', precio: 60000, efvo: 60000 },
      ],
    },
    {
      id: 'jubilados',
      nombre: 'Jubilados +70',
      desc: 'Acceso ambos salones',
      planes: [
        { plan: '8 clases',  precio: 37000, efvo: 33500 },
        { plan: '12 clases', precio: 42000, efvo: 38000 },
        { plan: '16 clases', precio: 49300, efvo: 45000 },
        { plan: '20 clases', precio: 56700, efvo: 51500 },
        { plan: '24 clases', precio: 64700, efvo: 59000 },
        { plan: 'Ilimitado', precio: 70300, efvo: 64000 },
      ],
    },
  ],
  espacio: [
    {
      id: 'open-box',
      nombre: 'Open Box',
      desc: 'Reservas de 7 a 21hs',
      planes: [
        { plan: '4 horas',  precio: 35200, efvo: 31500 },
        { plan: '12 horas', precio: 56500, efvo: 50500 },
        { plan: '24 horas', precio: 77200, efvo: 69000 },
        { plan: '48 horas', precio: 101600, efvo: 91000 },
      ],
    },
    {
      id: 'open-matutino',
      nombre: 'Open Box Matutino',
      desc: 'Reservas de 7 a 15hs',
      planes: [
        { plan: '4 horas',  precio: 24000, efvo: 21500 },
        { plan: '12 horas', precio: 40000, efvo: 35000 },
        { plan: '24 horas', precio: 53000, efvo: 47500 },
        { plan: '48 horas', precio: 71500, efvo: 64000 },
      ],
    },
    {
      id: 'all-out',
      nombre: 'All Out',
      desc: 'Los valores NO incluyen plani',
      planes: [
        { plan: '4 horas',  precio: 29200, efvo: 26000 },
        { plan: '12 horas', precio: 45200, efvo: 40500 },
        { plan: '24 horas', precio: 63400, efvo: 56500 },
        { plan: '48 horas', precio: 84000, efvo: 75000 },
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
  { nombre: 'Masajes',                 icono: '💆', desc: 'Descontracturantes, pre y pos competencia. Liberá la tensión muscular, recuperate más rápido y prepará tu cuerpo para rendir al máximo.',                                                                                                                                                wa: WA_BASE + encodeURIComponent('Hola! Quiero solicitar una reserva para Masajes en Unbex 💆') },
];

export const horarios = [
  // ═══════════════════════════════════════════════════════════════════════════
  // SALÓN BLACK
  // ═══════════════════════════════════════════════════════════════════════════

  // Turnos libres L-V (el alumno elige entre Cross / Func / Muscu)
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'07:00', claves:['crosstraining','funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'08:00', claves:['crosstraining','funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'10:00', claves:['crosstraining','funcional'], nota:'El alumno elige' },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'12:00', claves:['crosstraining','funcional'], nota:'El alumno elige' },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'16:00', claves:['crosstraining','funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'17:00', claves:['crosstraining','funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'18:00', claves:['crosstraining','funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'19:00', claves:['crosstraining','funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['lun','mar','mie','vie'],       hora:'20:00', claves:['crosstraining','funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['jue'],                         hora:'20:00', claves:['crosstraining','funcional','musculacion','levantamiento-olimpico'], nota:'El alumno elige · Se suma Olimpismo' },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'21:00', claves:['crosstraining','funcional','musculacion'], nota:'El alumno elige' },

  // Musculación exclusivo L-V
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'09:00', claves:['musculacion'], nota:null },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'11:00', claves:['musculacion'], nota:null },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'15:00', claves:['musculacion'], nota:null },

  // 3ra Edad — Salón Black
  { salon:'black', dias:['mar','jue'], hora:'09:00', claves:['tercera-edad'], nota:null },
  { salon:'black', dias:['mar','jue'], hora:'11:00', claves:['tercera-edad'], nota:null },

  // Sábado Black
  { salon:'black', dias:['sab'], hora:'09:00', claves:['crosstraining','funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['sab'], hora:'10:00', claves:['crosstraining','funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['sab'], hora:'11:00', claves:['crosstraining','funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['sab'], hora:'12:00', claves:['crosstraining','funcional','musculacion'], nota:'El alumno elige' },
  { salon:'black', dias:['sab'], hora:'13:00', claves:['levantamiento-olimpico'],                 nota:null },

  // Open Box — L-V 07:00–21:00 · Sábado 09:00–14:00 (badge junto a las demás clases)
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'07:00', claves:['open-box'], nota:null },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'08:00', claves:['open-box'], nota:null },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'09:00', claves:['open-box'], nota:null },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'10:00', claves:['open-box'], nota:null },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'11:00', claves:['open-box'], nota:null },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'12:00', claves:['open-box'], nota:null },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'13:00', claves:['open-box'], nota:null },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'14:00', claves:['open-box'], nota:null },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'15:00', claves:['open-box'], nota:null },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'16:00', claves:['open-box'], nota:null },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'17:00', claves:['open-box'], nota:null },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'18:00', claves:['open-box'], nota:null },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'19:00', claves:['open-box'], nota:null },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'20:00', claves:['open-box'], nota:null },
  { salon:'black', dias:['lun','mar','mie','jue','vie'], hora:'21:00', claves:['open-box'], nota:null },
  { salon:'black', dias:['sab'],                         hora:'09:00', claves:['open-box'], nota:null },
  { salon:'black', dias:['sab'],                         hora:'10:00', claves:['open-box'], nota:null },
  { salon:'black', dias:['sab'],                         hora:'11:00', claves:['open-box'], nota:null },
  { salon:'black', dias:['sab'],                         hora:'12:00', claves:['open-box'], nota:null },
  { salon:'black', dias:['sab'],                         hora:'13:00', claves:['open-box'], nota:null },
  { salon:'black', dias:['sab'],                         hora:'14:00', claves:['open-box'], nota:null },

  // ═══════════════════════════════════════════════════════════════════════════
  // SALÓN M&B
  // ═══════════════════════════════════════════════════════════════════════════
  { salon:'mb', dias:['lun','mie','vie'], hora:'09:00', claves:['fiit'] },
  { salon:'mb', dias:['mie'],             hora:'19:00', claves:['fiit'] },
  { salon:'mb', dias:['vie'],             hora:'20:00', claves:['fiit'] },
  { salon:'mb', dias:['jue'],             hora:'10:00', claves:['pilates'] },
  { salon:'mb', dias:['mar','jue'],       hora:'17:00', claves:['pilates'] },
  { salon:'mb', dias:['vie'],             hora:'11:00', claves:['stretching'] },
  { salon:'mb', dias:['lun'],             hora:'12:00', claves:['stretching'] },
  { salon:'mb', dias:['mar','jue'],       hora:'18:00', claves:['stretching'] },
  { salon:'mb', dias:['mie'],             hora:'18:00', claves:['yoga'] },
  { salon:'mb', dias:['mar','jue'],       hora:'09:00', claves:['tercera-edad'] },
  { salon:'mb', dias:['mar','jue'],       hora:'11:00', claves:['tercera-edad'] },
  { salon:'mb', dias:['mar','jue'],       hora:'16:00', claves:['tercera-edad'] },
  { salon:'mb', dias:['lun','vie'],       hora:'18:00', claves:['judo-kids'] },
  { salon:'mb', dias:['mar','jue'],       hora:'19:00', claves:['zumba'] },
  { salon:'mb', dias:['sab'],             hora:'11:00', claves:['zumba'] },
  { salon:'mb', dias:['vie'],             hora:'19:00', claves:['body-pump'] },
  { salon:'mb', dias:['mar','jue'],       hora:'20:00', claves:['localizada'] },
  { salon:'mb', dias:['sab'],             hora:'12:00', claves:['localizada'] },
  { salon:'mb', dias:['lun','mie'],       hora:'20:00', claves:['jiu-jitsu'] },
];
