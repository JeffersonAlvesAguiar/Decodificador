export function encrypt(frase) {
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