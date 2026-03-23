// ========== VOLUMEN HERO ==========
const heroVolume = document.getElementById('heroVolume');
const disciplinaVideo = document.getElementById('disciplinaVideo');
let muted = true;

if (heroVolume) {
  heroVolume.addEventListener('click', () => {
    muted = !muted;

    const iframe = disciplinaVideo || document.querySelector('.hero__video');
    if (!iframe) return;

    const src = iframe.src;

    if (muted) {
      iframe.src = src.replace('&mute=0', '&mute=1');
      heroVolume.textContent = '🔇';
    } else {
      iframe.src = src.replace('&mute=1', '&mute=0');
      heroVolume.textContent = '🔊';
    }
  });
}

// ========== NAVBAR TOGGLE MOBILE ==========
const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu = document.getElementById('navbarMenu');

if (navbarToggle && navbarMenu) {
  navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
  });
}