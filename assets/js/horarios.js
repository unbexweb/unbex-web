(function () {
  'use strict';

  const ORDEN_DIAS = ['lun', 'mar', 'mie', 'jue', 'vie', 'sab'];

  const LABEL_EXTRA = { oly: 'OLY', allout: 'Allout' };

  // Lookup O(1) en lugar de find() en cada render
  const DISCIPLINAS_MAP = new Map(disciplinas.map(function (d) { return [d.clave, d]; }));

  // ─────────────────────────────────────────────────────────────────────────
  // PÁGINAS DE DISCIPLINAS — tabla por día para la disciplina actual
  // ─────────────────────────────────────────────────────────────────────────
  function renderHorarios() {
    const tabla = document.getElementById('horariosTabla');
    if (!tabla) return;

    const archivo = window.location.pathname.split('/').pop().replace('.html', '');
    const disciplina = DISCIPLINAS_MAP.get(archivo);
    if (!disciplina) return;

    const turnos = horarios.filter(h => h.claves.includes(disciplina.clave));
    if (!turnos.length) return;

    const porDia = {};
    ORDEN_DIAS.forEach(cod => { porDia[cod] = []; });

    turnos.forEach(function (t) {
      t.dias.forEach(function (cod) {
        if (porDia[cod]) porDia[cod].push({ hora: t.hora, nota: t.nota });
      });
    });

    ORDEN_DIAS.forEach(function (cod) {
      porDia[cod].sort(function (a, b) { return a.hora.localeCompare(b.hora); });
    });

    const cards = ORDEN_DIAS
      .filter(function (cod) { return porDia[cod].length > 0; })
      .map(function (cod) {
        const diaNombre = DIAS_SEMANA[cod];
        const chips = porDia[cod].map(function (t) {
          const msg = encodeURIComponent(
            'Hola! Quiero reservar un lugar en ' + disciplina.nombre +
            ' el ' + diaNombre + ' a las ' + t.hora + ' 💪'
          );
          const href = 'https://wa.me/' + WA_NUMBER + '?text=' + msg;
          return '<a class="horario-turno" href="' + href + '" target="_blank" rel="noopener">' +
            t.hora + '</a>';
        }).join('');
        return '<div class="horario-card">' +
          '<div class="horario-card__dia">' + diaNombre + '</div>' +
          '<div class="horario-card__turnos">' + chips + '</div>' +
          '</div>';
      });

    tabla.innerHTML = '<div class="horario-grid">' + cards.join('') + '</div>';
  }

  // ─────────────────────────────────────────────────────────────────────────
  // INDEX — grilla completa con tabs por salón
  // ─────────────────────────────────────────────────────────────────────────
  function labelDisciplina(clave, useShort) {
    const d = DISCIPLINAS_MAP.get(clave);
    if (d) return (useShort && d.short) ? d.short : d.nombre;
    if (LABEL_EXTRA[clave]) return LABEL_EXTRA[clave];
    return clave.charAt(0).toUpperCase() + clave.slice(1).replace(/-/g, ' ');
  }

  function badgeTexto(entry) {
    const combinada = entry.claves.length > 1;
    return entry.claves.map(function (c) {
      return labelDisciplina(c, combinada);
    }).join('/');
  }

  function buildTable(salon) {
    const entradas = horarios.filter(function (h) { return h.salon === salon; });

    const horas = [...new Set(entradas.map(function (h) { return h.hora; }))].sort();
    const dias  = ORDEN_DIAS.filter(function (d) {
      return entradas.some(function (h) { return h.dias.includes(d); });
    });

    const table = document.createElement('table');
    table.className = 'horarios__table';

    // thead
    const thead  = table.createTHead();
    const trHead = thead.insertRow();
    const thHora = document.createElement('th');
    thHora.textContent = 'Hora';
    thHora.className   = 'horarios__th-hora';
    trHead.appendChild(thHora);

    dias.forEach(function (dia) {
      const th = document.createElement('th');
      th.textContent = DIAS_SEMANA[dia];
      trHead.appendChild(th);
    });

    // tbody
    const tbody = table.createTBody();
    horas.forEach(function (hora) {
      const tr     = tbody.insertRow();
      const tdHora = document.createElement('td');
      tdHora.textContent = hora;
      tdHora.className   = 'horarios__hora';
      tr.appendChild(tdHora);

      dias.forEach(function (dia) {
        const td      = document.createElement('td');
        const matches = entradas.filter(function (h) {
          return h.hora === hora && h.dias.includes(dia);
        });

        if (matches.length === 0) {
          const empty = document.createElement('span');
          empty.className   = 'horarios__empty';
          empty.textContent = '—';
          td.appendChild(empty);
        } else {
          const cell = document.createElement('div');
          cell.className = 'horarios__cell';
          matches.forEach(function (entry) {
            const badge     = document.createElement('span');
            const combinada = entry.claves.length > 1;
            badge.className   = 'horarios__badge ' +
              (combinada ? 'horarios__badge--combinada' : 'horarios__badge--especifica');
            badge.textContent = badgeTexto(entry);
            badge.title = entry.claves.map(function (c) { return labelDisciplina(c, false); }).join(', ')
              + (entry.nota ? ' — ' + entry.nota : '');
            cell.appendChild(badge);
          });
          td.appendChild(cell);
        }

        tr.appendChild(td);
      });
    });

    return table;
  }

  function initTabs() {
    document.querySelectorAll('.horarios__tab').forEach(function (tab) {
      tab.addEventListener('click', function () {
        document.querySelectorAll('.horarios__tab').forEach(function (t) {
          t.classList.remove('horarios__tab--active');
        });
        document.querySelectorAll('.horarios__panel').forEach(function (p) {
          p.classList.remove('horarios__panel--active');
        });
        tab.classList.add('horarios__tab--active');
        document.getElementById('horarios-' + tab.dataset.salon)
          .classList.add('horarios__panel--active');
      });
    });
  }

  function renderHorariosIndex() {
    const panelBlack = document.getElementById('horarios-black');
    const panelMb    = document.getElementById('horarios-mb');
    if (!panelBlack && !panelMb) return;

    ['black', 'mb'].forEach(function (salon) {
      const panel = document.getElementById('horarios-' + salon);
      if (!panel) return;
      const wrap = document.createElement('div');
      wrap.className = 'horarios__table-wrap';
      wrap.appendChild(buildTable(salon));
      panel.appendChild(wrap);
    });

    initTabs();

    // Activar salón Black por defecto
    if (panelBlack) panelBlack.classList.add('horarios__panel--active');
  }

  // ─────────────────────────────────────────────────────────────────────────
  // INIT
  // ─────────────────────────────────────────────────────────────────────────
  function init() {
    renderHorarios();       // páginas de disciplinas
    renderHorariosIndex();  // index
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
