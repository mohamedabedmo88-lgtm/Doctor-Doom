
var RELEASE_DATE = new Date(2026, 11, 18, 0, 0, 0);

(function () {
  var timer = document.getElementById('timer');
  var done = document.getElementById('cd-done');
  var days = document.getElementById('cd-days');
  var hours = document.getElementById('cd-hours');
  var minutes = document.getElementById('cd-minutes');
  var seconds = document.getElementById('cd-seconds');

  document.getElementById('cd-date').textContent =
    RELEASE_DATE.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    var diff = RELEASE_DATE - new Date();
    if (diff <= 0) {           
      timer.hidden = true;
      done.hidden = false;
      clearInterval(id);
      return;
    }
    var s = Math.floor(diff / 1000);
    days.textContent = pad(Math.floor(s / 86400));
    hours.textContent = pad(Math.floor((s % 86400) / 3600));
    minutes.textContent = pad(Math.floor((s % 3600) / 60));
    seconds.textContent = pad(s % 60);
  }

  var id = setInterval(tick, 1000);
  tick();
})();
