(function () {

  function renderCards(data, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = data.map(item => `
      <a href="${item.url}" class="card ${item.color}">
        <div class="card__icon">${item.icono}</div>
        <h3 class="card__title">${item.nombre}</h3>
        <p class="card__desc">${item.desc}</p>
        <span class="card__hover">Ver más</span>
      </a>
    `).join('');
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderCards(disciplinas, "disciplinasContainer");
    renderCards(servicios, "serviciosContainer");
  });

})();
