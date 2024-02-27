import { btn__encrypt } from "../../../components/button/encrypt/encrypt.button.js";
import { btn__decrypt } from "../../../components/button/decrypt/decrypt.button.js";
import { textarea__insert } from "../../../components/textarea/text-insert/text-insert.textarea.js";

const box__insert__text = document.querySelector('.box__insert__text');

const box__text__insert = document.createElement('div');
box__text__insert.classList.add('box__text__insert');

const div = document.createElement('div');
const img = document.createElement('img');
img.src = "./src/assets/icon/bi_exclamation-circle-fill.png";

const label = document.createElement('label');
label.for = 'text';
label.textContent = 'Apenas letras minúsculas e sem acento.';

div.appendChild(img);
div.appendChild(label);

box__text__insert.appendChild(div);
box__text__insert.appendChild(textarea__insert);

//-----------------------------------

const box__button__insert = document.createElement('div');
box__button__insert.classList.add('box__button__insert');

box__button__insert.appendChild(btn__encrypt);
box__button__insert.appendChild(btn__decrypt);

//-----------------------------------

box__insert__text.appendChild(box__text__insert);
box__insert__text.appendChild(box__button__insert);