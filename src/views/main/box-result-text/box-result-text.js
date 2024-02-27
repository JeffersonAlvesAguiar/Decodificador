import { start__alert } from '../../../components/alert/start/start-alert.js'
import { textarea__result } from '../../../components/textarea/text-result/text-result.textarea.js';
import { btn__copy } from '../../../components/button/copy/copy.button.js';

const box__result__text = document.querySelector('.box__result__text');

export const box__button__result = document.createElement('div');
box__button__result.classList.add('box__button__result');

box__button__result.appendChild(btn__copy);

//-----------------------------------------------

box__result__text.appendChild(start__alert);
box__result__text.appendChild(textarea__result);
box__result__text.appendChild(box__button__result);