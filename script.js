// Animated Hero Text (Optional)
const heroText = document.querySelector('h1');
let animationIndex = 0;
const textArray = heroText.textContent.split('');

function animateHeroText() {
  heroText.textContent = textArray.slice(0, animationIndex).join('');
  animationIndex++;
  if (animationIndex > textArray.length) {
    animationIndex = 0;
  }
  requestAnimationFrame(animateHeroText);
}

animateHeroText();  // Start the animation

// Scroll Reveal Animation (Optional)
const sections = document.querySelectorAll('section');

function revealSections(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    } else {
      entry.target.classList.remove('reveal');
    }
  });
}

const options = {
  root: null,
  threshold: 0.5,
};

const observer = new IntersectionObserver(revealSections, options);

sections.forEach(section => observer.observe(section));
