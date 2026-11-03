// Music button
(function () {
  var audio = document.getElementById('bg-music');
  var btn = document.getElementById('music-btn');
  if (!audio || !btn) return;

  audio.volume = 0.3; 

  function setState(isPlaying) {
    btn.classList.toggle('playing', isPlaying);
    btn.setAttribute('aria-pressed', isPlaying);
    btn.setAttribute('aria-label', isPlaying ? 'Pause theme music' : 'Play theme music');
  }

  btn.addEventListener('click', function () {
    if (audio.paused) {
      audio.play().then(function () { setState(true); }).catch(function () { setState(false); });
    } else {
      audio.pause();
      setState(false);
    }
  });

  audio.addEventListener('error', function () {
    btn.disabled = true;
    btn.title = 'Audio file not found';
  });
})();
