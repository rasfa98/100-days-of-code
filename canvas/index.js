const canvas = document.querySelector('#canvas');
const canvasRect = canvas.getBoundingClientRect();
const ctx = canvas.getContext('2d');

let isDrawing = false;

ctx.fillStyle = 'black';

canvas.addEventListener('mousedown', () => {
  isDrawing = true;
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
});

canvas.addEventListener('mouseleave', () => {
  isDrawing = false;
});

canvas.addEventListener('mousemove', (event) => {
  if (isDrawing) {
    const x = event.clientX - canvasRect.left;
    const y = event.clientY - canvasRect.top;

    ctx.fillRect(x, y, 6, 6);
  }
});
