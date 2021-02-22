const NUMBER_OF_DROPS = 40;
const MIN_SIZE = 5;
const MAX_HEIGHT = 20;
const MIN_HEIGHT = 5;
const WIDTH = 3;
const MIN_DELAY = 600;
const MAX_DELAY = 1500;

const generateRainDrops = () => {
  const windowWidth = document.body.clientWidth;
  const windowHeight = document.body.clientHeight;

  for (let i = 0; i < NUMBER_OF_DROPS; i++) {
    const drop = document.createElement('div');

    const delay = getRandomValue(MIN_DELAY, MAX_DELAY);
    const backgroundColor = `hsl(${getRandomValue(58, 36)}, 100%, 50%)`;
    const boxShadow = `2px 2px 2px 2px ${backgroundColor}`;
    const height = getRandomValue(MIN_HEIGHT, MAX_HEIGHT);

    const dropStart = `${height}px`;
    const dropEnd = `${(windowHeight + height) * -1}px`;

    drop.classList.add('drop');
    drop.style.width = `${WIDTH}px`;
    drop.style.height = `${height}px`;

    drop.style.transform = `translateY(${dropStart})`;
    drop.style.left = `${getRandomValue(0, windowWidth)}px`;
    drop.style.backgroundColor = backgroundColor;
    drop.style.boxShadow = boxShadow;

    drop.animate(
      [
        { transform: `translateY(${dropStart})` },
        { transform: `translateY(${dropEnd})` },
      ],
      {
        iterations: Infinity,
        duration: 400,
        direction: 'reverse',
        easing: 'linear',
        delay: delay,
      }
    );

    document.body.appendChild(drop);
  }
};

getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

generateRainDrops();
