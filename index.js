const bulbLigtning = document.querySelector('.bulb');
document.addEventListener('keydown', () => {
  bulbLigtning.classList.toggle('bulb--on');
});
