import { textarea__result } from "../../../components/textarea/text-result/text-result.textarea.js";
import { copy } from "../../../controller/copy/copy.controller.js";
import { btn__copy } from "../../../components/button/copy/copy.button.js";

btn__copy.addEventListener('click', () => {
    copy(textarea__result.value);
});