// Mobile menu
var toggle = document.querySelector('.menu-toggle');
var links = document.getElementById('nav-links');
toggle.addEventListener('click', function () {
  var open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
links.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') { links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
});
