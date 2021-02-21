const NUMBER_OF_PARTICLES = 30;
const MAX_SIZE = 30;
const MIN_SIZE = 10;

const MAX_DURATION = 600;
const MIN_DURATION = 500;

const MAX_DELAY = 80;
const MIN_DELAY = 50;

const END_OFFSET = 80;

const button = document.querySelector('#button');

getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

generateParticles = (x, y) => {
  const { top, left } = button.getBoundingClientRect();

  for (let i = 0; i < NUMBER_OF_PARTICLES; i++) {
    const particle = document.createElement('div');

    const size = getRandomValue(MIN_SIZE, MAX_SIZE);
    const endPositionX = getRandomValue(x - END_OFFSET, x + END_OFFSET);
    const endPositionY = getRandomValue(y - END_OFFSET, y + END_OFFSET);
    const backgroundColor = `hsl(${getRandomValue(160, 200)}, 100%, 50%)`;
    const duration = getRandomValue(MIN_DURATION, MAX_DURATION);
    const delay = getRandomValue(MIN_DELAY, MAX_DELAY);

    particle.classList.add('particle');

    particle.style.top = `${y - top}px`;
    particle.style.left = `${x - left}px`;
    particle.style.height = `${size}px`;
    particle.style.width = `${size}px`;
    particle.style.backgroundColor = backgroundColor;

    particle.animate(
      [
        { top: `${y - top}px`, left: `${x - left}px`, opacity: 1 },
        {
          top: `${endPositionY - top}px`,
          left: `${endPositionX - left}px`,
          opacity: 0,
        },
      ],
      { duration, delay, easing: 'ease-out', fill: 'forwards' }
    );

    button.appendChild(particle);
  }
};

removeParticles = () => {
  const particles = document.querySelectorAll('.particle');

  particles.forEach((particle) => {
    button.removeChild(particle);
  });
};

button.addEventListener('click', (e) => {
  const { clientX, clientY } = e;

  removeParticles();
  generateParticles(clientX, clientY);
});
