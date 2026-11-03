(function () {
  var dialog = document.getElementById('quiz-dialog');
  var openBtn = document.getElementById('quiz-open');
  var closeBtn = document.getElementById('quiz-close');
  if (!dialog || !openBtn) return;

  openBtn.addEventListener('click', function () { dialog.showModal(); });
  closeBtn.addEventListener('click', function () { dialog.close(); });

  dialog.addEventListener('click', function (e) {
    if (e.target === dialog) dialog.close();
  });
})();