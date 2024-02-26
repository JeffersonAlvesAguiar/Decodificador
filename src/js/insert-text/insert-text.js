import { encrypt } from "../../controller/encrypt/encrypt.controller.js";
import { dencrypt } from "../../controller/decrypt/decrypt.controller.js";
import { copy } from "../../controller/copy/copy.controller.js"

const btn__encrypt = document.querySelector('.btn__encrypt');
const btn__dencrypt = document.querySelector('.btn__dencrypt');
const btn__copy = document.querySelector('.btn__copy');
const text__insert = document.querySelector('.text__insert');
const text__result = document.querySelector('.text__result');
const text__alert = document.querySelector('.text__alert');
const textarea__result = document.querySelector('.textarea__result');
const button__result = document.querySelector('.button__result');

btn__encrypt.addEventListener('click', () => {
    text__alert.style.display = 'none';
    textarea__result.style.display = 'flex';
    button__result.style.display = 'flex';

    text__result.innerHTML = encrypt(text__insert.value);

    console.log('eitaaaa porraaaa!!!');
});

btn__dencrypt.addEventListener('click', () => {
    text__alert.style.display = 'none';
    textarea__result.style.display = 'flex';
    button__result.style.display = 'flex';

    text__result.innerHTML = dencrypt(text__insert.value);
});

btn__copy.addEventListener('click', () => {
    copy(text__result.value);
});


