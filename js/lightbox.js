
var Lightbox = document.getElementById('lightbox');
var Lightbox_Img = document.getElementById('lightbox-img');
var Lightbox_Close = document.getElementById('lightbox-close');
var Zoom_Buttons = document.querySelectorAll('.zoom-btn');

function Open_Lightbox(button) {
  var small_img = button.querySelector('img');
  Lightbox_Img.src = small_img.src;
  Lightbox_Img.alt = small_img.alt;
  Lightbox.showModal();
}

Zoom_Buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    Open_Lightbox(button);
  });
});

Lightbox_Close.addEventListener('click', function () {
  Lightbox.close();
});

Lightbox.addEventListener('click', function (e) {
  if (e.target === Lightbox) Lightbox.close();
});