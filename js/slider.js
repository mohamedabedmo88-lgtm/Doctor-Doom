var audio = document.getElementById('bg-music');
var slider = document.getElementById('Volume_Slider');

function SetVolume(value) {
  audio.volume = Number(value);
}

function ListenToSlider() {
  slider.addEventListener('input', function () {
    SetVolume(slider.value);
  });
}
ListenToSlider();