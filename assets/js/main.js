var player;
var muted = true;

function onYouTubeIframeAPIReady() {
  const iframeId = document.getElementById('disciplinaVideo')
    ? 'disciplinaVideo'
    : document.getElementById('heroVideo')
    ? 'heroVideo'
    : null;

  if (!iframeId) return;

  player = new YT.Player(iframeId, {
    events: {
      'onReady': function(event) {
        event.target.mute();
        event.target.playVideo();
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {

  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  const heroVolume = document.getElementById('heroVolume');

  if (heroVolume) {
    heroVolume.addEventListener('click', () => {
      if (!player) return;
      muted = !muted;
      if (muted) {
        player.mute();
        heroVolume.textContent = '🔇';
      } else {
        player.unMute();
        heroVolume.textContent = '🔊';
      }
    });
  }

  const navbarToggle = document.getElementById('navbarToggle');
  const navbarMenu = document.getElementById('navbarMenu');

  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', () => {
      navbarMenu.classList.toggle('open');
    });
  }

});