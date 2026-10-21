// Highlight the nav link for the section in view
var navLinks = document.querySelectorAll('.nav-links a:not(.btn)');
var sections = ['overview', 'origin', 'powers', 'latveria'].map(function (id) { return document.getElementById(id); });
function setActive() {
  var y = window.scrollY + 140, current = 'overview';
  sections.forEach(function (s) { if (s.offsetTop <= y) current = s.id; });
  navLinks.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + current); });
}
window.addEventListener('scroll', setActive, { passive: true });
setActive();
