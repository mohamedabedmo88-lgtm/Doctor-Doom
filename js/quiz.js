// doom lore quiz feature
var QUESTIONS = [
  {
    q: "Which comic introduced Doctor Doom to the world?",
    options: ["Fantastic Four #1 (1961)", "Fantastic Four #5 (1962)", "Avengers #1 (1963)", "Tales of Suspense #39 (1963)"],
    answer: 1,
    right: "Stan Lee and Jack Kirby brought Doom in just a few issues after the Fantastic Four debuted, and Marvel’s greatest villain never left.",
    wrong: "It was Fantastic Four #5 (1962). Tales of Suspense #39 is Iron Man’s first appearance, which is a fun mix-up, given what the movie is doing."
  },
  {
    q: "Where did Victor von Doom first meet Reed Richards?",
    options: ["Empire State University", "Horizon University", "MIT", "The Baxter Building"],
    answer: 0,
    right: "Empire State University. Two geniuses, one campus, and a rivalry that has outlived everyone’s patience.",
    wrong: "Empire State University. That’s where Victor’s experiment went wrong, and he has blamed Reed for it ever since."
  },
  {
    q: "In his classic origin, where was Doom’s armor forged?",
    options: ["Latveria", "Siberia", "Tibet", "Wakanda"],
    answer: 2,
    right: "Tibet. And he put the mask on while it was still hot. Patience is for other people.",
    wrong: "Tibet, after monks took him in. And no, he didn’t wait for the mask to cool down."
  },
  {
    q: "In Triumph and Torment (1989), who travels into Hell with Doom to rescue his mother’s soul?",
    options: ["Reed Richards", "Mephisto", "Namor", "Doctor Strange"],
    answer: 3,
    right: "Doctor Strange. The Sorcerer Supreme and the Sorcerer-King on the same road trip, with Mike Mignola drawing it.",
    wrong: "Doctor Strange. Mephisto is the one who rules that realm and holds Cynthia’s soul. He’s the problem, not the help."
  },
  {
    q: "In Secret Wars (2015), what title does Doom claim for himself?",
    options: ["God Emperor Doom", "Supreme Overlord", "Eternal Regent", "Lord Protector"],
    answer: 0,
    right: "God Emperor Doom. He took the Beyonders’ power and built Battleworld around his throne. Humble as always.",
    wrong: "God Emperor Doom. He took the Beyonders’ power and made Battleworld his kingdom. Modesty was never his thing."
  }
];

var RANKS = [
  { min: 0, title: "Latverian Peasant", text: "Doom did not notice you. Perhaps that is for the best." },
  { min: 2, title: "Malfunctioning Doombot", text: "Some circuits work. Most of them are smoking." },
  { min: 3, title: "Court Scholar", text: "Doom tolerates your presence. Read the Origin section once more." },
  { min: 4, title: "Royal Advisor", text: "Impressive. Even Reed Richards would grumble about it." },
  { min: 5, title: "Master of Doom Lore", text: "Flawless. Doom is displeased only because he didn’t write the questions himself." }
];

(function () {
  var card = document.getElementById('quiz-card');
  if (!card) return;
  var current = 0, score = 0;
  var letters = ['A', 'B', 'C', 'D'];

  function start() { current = 0; score = 0; showQuestion(); }

  function showQuestion() {
    var q = QUESTIONS[current];
    var dots = QUESTIONS.map(function (_, i) {
      return '<span class="dot' + (i < current ? ' done' : '') + (i === current ? ' now' : '') + '"></span>';
    }).join('');
    var opts = q.options.map(function (o, i) {
      return '<button class="opt" type="button" data-i="' + i + '"><span class="key">' + letters[i] + '</span>' + o + '</button>';
    }).join('');
    card.innerHTML =
      '<div class="q-top"><span class="q-count">Question ' + (current + 1) + ' / ' + QUESTIONS.length + '</span>' +
      '<span class="dots" aria-hidden="true">' + dots + '</span></div>' +
      '<h3 class="q-text" tabindex="-1">' + q.q + '</h3>' +
      '<div class="opts">' + opts + '</div>' +
      '<div class="q-feedback" hidden></div>';
    card.querySelector('.q-text').focus({ preventScroll: true });
  }

  function answer(i) {
    var q = QUESTIONS[current];
    var ok = (i === q.answer);
    if (ok) score++;
    var buttons = card.querySelectorAll('.opt');
    buttons.forEach(function (b, n) {
      b.disabled = true;
      if (n === q.answer) b.classList.add('correct');
      else if (n === i) b.classList.add('wrong');
    });
    var last = (current === QUESTIONS.length - 1);
    var fb = card.querySelector('.q-feedback');
    fb.innerHTML =
      '<p><strong>' + (ok ? 'Correct. ' : 'Not quite. ') + '</strong>' + (ok ? q.right : q.wrong) + '</p>' +
      '<button class="btn" id="quiz-next" type="button">' + (last ? 'See Your Verdict' : 'Next Question') + '</button>';
    fb.hidden = false;
    document.getElementById('quiz-next').focus();
  }

  function showResult() {
    var rank = RANKS[0];
    RANKS.forEach(function (r) { if (score >= r.min) rank = r; });
    card.innerHTML =
      '<span class="q-count">Your verdict · ' + score + ' / ' + QUESTIONS.length + '</span>' +
      '<h3 class="q-text rank" tabindex="-1">' + rank.title + '</h3>' +
      '<p class="rank-text">' + rank.text + '</p>' +
      '<div><button class="btn" id="quiz-retry" type="button">Try Again</button></div>';
    card.querySelector('.rank').focus({ preventScroll: true });
  }

  card.addEventListener('click', function (e) {
    var opt = e.target.closest('.opt');
    if (opt && !opt.disabled) return answer(Number(opt.dataset.i));
    if (e.target.closest('#quiz-start') || e.target.closest('#quiz-retry')) return start();
    if (e.target.closest('#quiz-next')) {
      current++;
      if (current < QUESTIONS.length) showQuestion(); else showResult();
    }
  });
})();