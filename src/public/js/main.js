const h1 = document.querySelector('h1');
const image = document.querySelector('.image1');

h1.addEventListener('animationend', function () {
  image.style.display = 'block';
});
