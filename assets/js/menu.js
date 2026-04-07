document.addEventListener("DOMContentLoaded", () => {
  // HAMBURGUESA MOBILE
  const navbarToggle = document.getElementById('navbarToggle');
  const navbarMenu = document.getElementById('navbarMenu');
  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', () => {
      navbarMenu.classList.toggle('open');
    });
  }

  const disciplinasDropdown = document.getElementById("disciplinasDropdown");
  const serviciosDropdown   = document.getElementById("serviciosDropdown");

  const enSubcarpeta = window.location.pathname.includes("/disciplinas/");
  const base = enSubcarpeta ? "../" : "";

  // DROPDOWN DISCIPLINAS — agrupado por salón
  if (disciplinasDropdown) {
    const grupos = [
      { label: "Salón Black", items: disciplinas.filter(d => d.salon === "black") },
      { label: "Salón M&B",   items: disciplinas.filter(d => d.salon === "mb")    },
    ];

    grupos.forEach(grupo => {
      const header = document.createElement("li");
      header.className = "dropdown__salon-header";
      header.textContent = grupo.label;
      disciplinasDropdown.appendChild(header);

      grupo.items.forEach(d => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${base + d.url}">${d.nombre}</a>`;
        disciplinasDropdown.appendChild(li);
      });
    });
  }

  // DROPDOWN SERVICIOS
  if (serviciosDropdown) {
    servicios.forEach(s => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${s.url}">${s.nombre}</a>`;
      serviciosDropdown.appendChild(li);
    });
  }

  // DROPDOWN CONTROL
  const dropdowns = document.querySelectorAll('.navbar__item--dropdown');

  dropdowns.forEach(item => {
    const link = item.querySelector('a');

    link.addEventListener('click', (e) => {
      e.preventDefault();
      dropdowns.forEach(i => { if (i !== item) i.classList.remove('open'); });
      item.classList.toggle('open');
    });
  });

  // CERRAR AL HACER CLICK AFUERA
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar__item--dropdown')) {
      dropdowns.forEach(item => item.classList.remove('open'));
    }
  });
});
