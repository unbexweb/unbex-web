let player = null;

function onYouTubeIframeAPIReady() {
  const iframe =
    document.getElementById('disciplinaVideo') ||
    document.getElementById('heroVideo');

  if (!iframe) return;

  player = new YT.Player(iframe.id, {
    events: {
      onReady: function (event) {
        event.target.mute();
        event.target.playVideo();
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  // Inyectar src del video desde DISCIPLINA_VIDEOS (data/disciplines.js)
  var iframe = document.getElementById('disciplinaVideo');
  if (iframe && typeof DISCIPLINA_VIDEOS !== 'undefined') {
    var clave = window.location.pathname.split('/').pop().replace('.html', '');
    var videoId = DISCIPLINA_VIDEOS[clave];
    if (videoId) {
      iframe.src = 'https://www.youtube.com/embed/' + videoId +
        '?autoplay=1&mute=1&loop=1&playlist=' + videoId + '&controls=0&enablejsapi=1';
    } else {
      // Sin video: ocultar contenedor para que solo quede el overlay
      var container = iframe.closest('.disciplina-hero__video-container');
      if (container) container.style.display = 'none';
    }
  }

  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  document.body.appendChild(tag);

  var heroVolume = document.getElementById('heroVolume');
  if (heroVolume) {
    heroVolume.addEventListener('click', function () {
      if (!player) return;
      if (player.isMuted()) {
        player.unMute();
        heroVolume.textContent = '🔊';
      } else {
        player.mute();
        heroVolume.textContent = '🔇';
      }
    });
  }
});
