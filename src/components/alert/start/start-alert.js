export const start__alert = document.createElement('div');
start__alert.classList.add('start__alert');

const img = document.createElement('img');
img.src = './src/assets/img/High quality products 1 1.svg';
img.classList.add('img__box__text');

const span = document.createElement('span');
span.innerText = 'Nenhuma mensagem encontrada';

const p = document.createElement('p');
p.innerText = 'Digite um texto que você deseja criptografar ou descriptografar';

start__alert.appendChild(img);
start__alert.appendChild(span);
start__alert.appendChild(p);