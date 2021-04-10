const buttons = document.querySelectorAll('button');
const notification = document.querySelector('.notification');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (notification.classList.contains('show')) {
      notification.classList.remove('show');
    } else {
      notification.classList.add('show');
    }
  });
});
