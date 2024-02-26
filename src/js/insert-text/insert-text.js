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
});

btn__dencrypt.addEventListener('click', () => {
    text__alert.style.display = 'none';
    textarea__result.style.display = 'flex';
    button__result.style.display = 'flex';

    text__result.innerHTML = dencrypt(text__insert.value);
});

btn__copy.addEventListener('click', () => {    
    navigator.clipboard.writeText(text__result.value)
    // .then(function() {
    //     alert('Texto copiado com sucesso!');
    // }).catch(function(err) {
    //     alert('Erro ao copiar o texto: ', err);
    // });
});

function encrypt(frase) {
    // Substituir letras maiúsculas por minúsculas
    let resultado = frase.toLowerCase();

    // Substituir letras acentuadas por não acentuadas
    const mapaAcentos = {
        'á': 'a',
        'é': 'e',
        'í': 'i',
        'ó': 'o',
        'ú': 'u',
        'â': 'a',
        'ê': 'e',
        'î': 'i',
        'ô': 'o',
        'û': 'u',
        'ã': 'a',
        'õ': 'o',
        'ç': 'c',
        // Adicione outras letras acentuadas e suas substituições conforme necessário
    };

    resultado = resultado.replace(/[áéíóúâêîôûãõç]/g, function (match) {
        return mapaAcentos[match];
    });

    // Remover caracteres especiais
    resultado = resultado.replace(/[^a-z0-9]/g, ' ');

    // Remover espaços extras
    resultado = resultado.replace(/\s+/g, ' ').trim();

    resultado = resultado.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat').trim();

    return resultado;
}

function dencrypt(frase) {
    // Substituir letras maiúsculas por minúsculas
    let resultado = frase.toLowerCase();

    // Substituir letras acentuadas por não acentuadas
    const mapaAcentos = {
        'á': 'a',
        'é': 'e',
        'í': 'i',
        'ó': 'o',
        'ú': 'u',
        'â': 'a',
        'ê': 'e',
        'î': 'i',
        'ô': 'o',
        'û': 'u',
        'ã': 'a',
        'õ': 'o',
        'ç': 'c',
        // Adicione outras letras acentuadas e suas substituições conforme necessário
    };

    resultado = resultado.replace(/[áéíóúâêîôûãõç]/g, function (match) {
        return mapaAcentos[match];
    });

    // Remover caracteres especiais
    resultado = resultado.replace(/[^a-z0-9]/g, ' ');

    // Remover espaços extras
    resultado = resultado.replace(/\s+/g, ' ').trim();

    resultado = resultado.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u').trim();

    return resultado;
}