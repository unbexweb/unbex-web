// scripts/assets-pendientes.js
// Reporte de assets multimedia pendientes para el sitio Unbex Web.
// Ejecutar con: node --no-warnings scripts/assets-pendientes.js

const fs   = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const VIDEO_HERO_MAIN_ID = 'rAFygka9w_o'; // hardcoded en HeroIndex.jsx
const ROOT = path.resolve(__dirname, '..');

// ─── helpers de formato ────────────────────────────────────────────────────────

const PAD = '   ';
const SEP_GRUESO = '═'.repeat(70);
const SEP_FINO   = '─'.repeat(70);

function titulo(texto) {
  console.log('\n' + SEP_GRUESO);
  console.log(`  ${texto}`);
  console.log(SEP_GRUESO);
}

function seccion(num, texto) {
  console.log(`\n${num}. ${texto}`);
  console.log(SEP_FINO);
}

function subseccion(num, texto) {
  console.log(`\n${PAD}${num}  ${texto}`);
  console.log(`${PAD}${'-'.repeat(60)}`);
}

function imgExiste(nombre) {
  return fs.existsSync(path.join(ROOT, 'public', 'img', 'disciplinas', nombre));
}

// ─── main ─────────────────────────────────────────────────────────────────────

(async () => {
  const disciplinesPath = pathToFileURL(path.resolve(__dirname, '../data/disciplines.js')).href;
  const { disciplinas, DISCIPLINA_VIDEOS } = await import(disciplinesPath);

  const fecha = new Date().toLocaleDateString('es-AR', {
    day:   '2-digit',
    month: '2-digit',
    year:  'numeric',
  });

  titulo(`REPORTE DE ASSETS PENDIENTES — UNBEX WEB   |   ${fecha}`);

  // ── SECCIÓN 1: IMÁGENES ────────────────────────────────────────────────────

  seccion(1, 'IMÁGENES');
  console.log(`
${PAD}Ruta esperada en el repo:  public/img/disciplinas/<archivo>.jpg
${PAD}Usos por imagen:
${PAD}  (A) Cara frontal de la flip card en la grilla del main
${PAD}  (B) Fondo del hero de la página individual (fallback cuando no hay
${PAD}      video de YouTube asignado en DISCIPLINA_VIDEOS)
`);

  let imgCargadas   = 0;
  let imgPendientes = 0;

  for (const d of disciplinas) {
    const existe   = imgExiste(d.img);
    const icono    = existe ? '✅ CARGADA  ' : '❌ PENDIENTE';
    const varRef   = `disciplinas["${d.clave}"].img`;
    const usosStr  = `(A) Card flip main  +  (B) Hero /disciplinas/${d.clave}`;

    if (existe) imgCargadas++; else imgPendientes++;

    console.log(`${PAD}${icono}  ${d.img}`);
    console.log(`${PAD}             Variable : ${varRef}`);
    console.log(`${PAD}             Usos     : ${usosStr}`);
    console.log(`${PAD}             Formato  : JPG`);
    console.log();
  }

  console.log(`${SEP_FINO}`);
  console.log(`${PAD}RESUMEN IMÁGENES: ${imgCargadas} cargadas — ${imgPendientes} PENDIENTES  (total: ${disciplinas.length})`);

  // ── SECCIÓN 2: VIDEOS ─────────────────────────────────────────────────────

  seccion(2, 'VIDEOS');
  console.log(`
${PAD}Formato esperado: ID de YouTube (sin URL completa)
${PAD}Ejemplo:          rAFygka9w_o  →  https://youtu.be/rAFygka9w_o
`);

  // 2.1 Video principal del hero del main
  subseccion('2.1', 'VIDEO PRINCIPAL — Hero del main');
  console.log();
  console.log(`${PAD}${PAD}✅ CARGADO   ${VIDEO_HERO_MAIN_ID}`);
  console.log(`${PAD}${PAD}   Variable : VIDEO_DEFAULT  (HeroIndex.jsx, línea 6)`);
  console.log(`${PAD}${PAD}   Uso      : Video de fondo del hero en la página principal`);
  console.log(`${PAD}${PAD}   Formato  : ID de YouTube`);

  // 2.2 Videos por disciplina
  subseccion('2.2', 'VIDEOS POR DISCIPLINA (un ID de YouTube por disciplina)');
  console.log(`
${PAD}${PAD}El mismo ID se usa en DOS lugares:
${PAD}${PAD}  (A) Overlay que aparece en el hero del main al pasar el cursor
${PAD}${PAD}      sobre la disciplina en el menú lateral
${PAD}${PAD}  (B) Video de fondo del hero en la página individual
${PAD}${PAD}      /disciplinas/<clave>
${PAD}${PAD}Si el ID es null, el hero de la página usa la imagen JPG como fondo.
`);

  let vidAsignados  = 0;
  let vidPendientes = 0;

  const clavesDisciplinas = new Set(disciplinas.map(d => d.clave));

  for (const d of disciplinas) {
    const id    = DISCIPLINA_VIDEOS[d.clave];
    const icono = id ? '✅ ASIGNADO ' : '❌ PENDIENTE';
    const idStr = id ?? '(sin asignar — null)';
    const varRef = `DISCIPLINA_VIDEOS["${d.clave}"]`;

    if (id) vidAsignados++; else vidPendientes++;

    console.log(`${PAD}${PAD}${icono}  ${d.nombre}`);
    console.log(`${PAD}${PAD}             Variable : ${varRef}`);
    console.log(`${PAD}${PAD}             ID       : ${idStr}`);
    console.log(`${PAD}${PAD}             Usos     : (A) Nav lateral overlay  +  (B) Hero /disciplinas/${d.clave}`);
    console.log(`${PAD}${PAD}             Formato  : ID de YouTube`);
    console.log();
  }

  // 2.3 Páginas especiales (servicios, precios — en DISCIPLINA_VIDEOS pero sin flip card)
  const especiales = Object.entries(DISCIPLINA_VIDEOS).filter(([k]) => !clavesDisciplinas.has(k));

  if (especiales.length > 0) {
    subseccion('2.3', 'PÁGINAS ESPECIALES (en DISCIPLINA_VIDEOS, sin flip card en el main)');
    console.log(`
${PAD}${PAD}Estas páginas NO tienen flip card en el main; el video solo se usa
${PAD}${PAD}como fondo del hero de su página individual.
`);

    for (const [clave, id] of especiales) {
      const icono  = id ? '✅ ASIGNADO ' : '❌ PENDIENTE';
      const idStr  = id ?? '(sin asignar — null)';
      const varRef = `DISCIPLINA_VIDEOS["${clave}"]`;

      if (id) vidAsignados++; else vidPendientes++;

      console.log(`${PAD}${PAD}${icono}  /${clave}`);
      console.log(`${PAD}${PAD}             Variable : ${varRef}`);
      console.log(`${PAD}${PAD}             ID       : ${idStr}`);
      console.log(`${PAD}${PAD}             Usos     : Hero de la página /${clave}`);
      console.log(`${PAD}${PAD}             Formato  : ID de YouTube`);
      console.log();
    }
  }

  const totalVids = disciplinas.length + especiales.length;
  console.log(`${SEP_FINO}`);
  console.log(`${PAD}RESUMEN VIDEOS: ${vidAsignados + 1} asignados (incluye hero principal) — ${vidPendientes} PENDIENTES  (total: ${totalVids + 1})`);

  // ── RESUMEN FINAL ──────────────────────────────────────────────────────────

  console.log('\n' + SEP_GRUESO);
  console.log('  RESUMEN FINAL');
  console.log(SEP_FINO);
  console.log(`${PAD}Imágenes : ${imgCargadas} cargadas     | ${String(imgPendientes).padStart(2)} PENDIENTES  (de ${disciplinas.length} totales)`);
  console.log(`${PAD}Videos   : ${vidAsignados + 1} asignados   | ${String(vidPendientes).padStart(2)} PENDIENTES  (de ${totalVids + 1} totales, incl. hero principal)`);
  console.log(SEP_GRUESO + '\n');

})().catch(err => {
  console.error('Error al generar el reporte:', err.message);
  process.exit(1);
});
