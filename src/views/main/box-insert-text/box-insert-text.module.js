import { encrypt } from '../../../controller/encrypt/encrypt.controller.js';
import { dencrypt } from '../../../controller/decrypt/decrypt.controller.js';
import { btn__encrypt } from "../../../components/button/encrypt/encrypt.button.js";
import { btn__decrypt } from '../../../components/button/decrypt/decrypt.button.js';
import { start__alert } from '../../../components/alert/start/start-alert.js';
import { textarea__result } from '../../../components/textarea/text-result/text-result.textarea.js';
import { textarea__insert } from "../../../components/textarea/text-insert/text-insert.textarea.js";
import { box__button__result } from "../box-result-text/box-result-text.js";

btn__encrypt.addEventListener('click', () => {
    start__alert.style.display = 'none';
    textarea__result.style.display = 'flex';
    box__button__result.style.display = 'flex';

    textarea__result.innerHTML = encrypt(textarea__insert.value);
});

btn__decrypt.addEventListener('click', () => {
    start__alert.style.display = 'none';
    textarea__result.style.display = 'flex';
    box__button__result.style.display = 'flex';

    textarea__result.innerHTML = dencrypt(textarea__insert.value);
});