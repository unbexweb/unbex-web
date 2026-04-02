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
  const serviciosDropdown = document.getElementById("serviciosDropdown");

  const enSubcarpeta = window.location.pathname.includes("/disciplinas/");
  const base = enSubcarpeta ? "../" : "";

  // CARGA DINÁMICA
  if (disciplinasDropdown) {
    disciplinas.forEach(d => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${base + d.url}">${d.nombre}</a>`;
      disciplinasDropdown.appendChild(li);
    });
  }

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

      // cerrar otros
      dropdowns.forEach(i => {
        if (i !== item) i.classList.remove('open');
      });

      // toggle actual
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