# DOOM — The Man Behind the Mask (fan project)

Open `index.html` in a browser. No build step, no dependencies.

doom/
├── index.html          page structure + all text
├── css/
│   ├── variables.css   colors and fonts (start here to restyle)
│   ├── base.css        reset, typography, shared helpers, hero animation
│   ├── layout.css      navigation bar and footer
│   ├── components.css  buttons, image placeholders, power cards
│   ├── sections.css    hero, origin, powers, Latveria, legacy
│   └── responsive.css  tablet/mobile + reduced-motion rules
├── js/
│   ├── nav.js          mobile menu
│   ├── scrollspy.js    highlights the active nav link
│   └── back-to-top.js  "Back to the Beginning" button
└── assets/images/      put your artwork here

Replacing a placeholder: find the comment (HERO / ORIGIN / LATVERIA ARTWORK PLACEHOLDER)
in index.html and swap the <figure> for an <img> pointing to assets/images/your-file.jpg.
