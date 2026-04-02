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
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  document.body.appendChild(tag);

  const heroVolume = document.getElementById('heroVolume');

  if (heroVolume) {
    heroVolume.addEventListener('click', () => {
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
