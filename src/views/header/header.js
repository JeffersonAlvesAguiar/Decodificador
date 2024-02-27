const nav__bar = document.querySelector('.nav__bar');

const img = document.createElement('img');
img.src = './src/assets/icon/icons8-cool-64 (1).png';

const title = document.createElement('h1');
title.classList.add('title');
title.innerText = 'Decodificador de textos';

nav__bar.appendChild(img);
nav__bar.appendChild(title);