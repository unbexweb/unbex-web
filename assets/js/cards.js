(function () {

  function renderFlipCards(data, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = data.map(item => `
      <div class="card-wrapper">
        <a href="${item.url}" class="card-inner">
          <div class="card-front" style="background-image: url('assets/img/disciplinas/${item.img}')">
            <span class="card-nombre">${item.nombre}</span>
          </div>
          <div class="card-back">
            <span class="card-nombre">${item.nombre}</span>
            <p class="card-desc">${item.desc}</p>
          </div>
        </a>
      </div>
    `).join('');
  }

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
    renderFlipCards(disciplinas, "disciplinasContainer");
    renderCards(servicios, "serviciosContainer");
  });

})();
