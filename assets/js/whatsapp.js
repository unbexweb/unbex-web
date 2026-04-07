document.addEventListener("DOMContentLoaded", () => {
  const WA_URL = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent('Hola! Quiero info sobre Unbex 👋');

  const bubble = document.getElementById('whatsappFloat');
  if (bubble && bubble.getAttribute('href') === '#') {
    bubble.setAttribute('href', WA_URL);
  }
});
