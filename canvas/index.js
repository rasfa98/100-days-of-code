const canvas = document.querySelector('#canvas');
const canvasRect = canvas.getBoundingClientRect();
const ctx = canvas.getContext('2d');

let mouseDown = false;

ctx.fillStyle = '#000000';

canvas.addEventListener('mousedown', () => {
  mouseDown = true;
});

canvas.addEventListener('mouseup', () => {
  mouseDown = false;
});

canvas.addEventListener('mouseleave', () => {
  mouseDown = false;
});

canvas.addEventListener('mousemove', (event) => {
  if (mouseDown) {
    const x = event.clientX - canvasRect.left;
    const y = event.clientY - canvasRect.top;

    console.log(`X: ${x}, Y: ${y}`);
  }
});
