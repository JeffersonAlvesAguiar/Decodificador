export function encrypt(frase) {
    // Substituir letras maiúsculas por minúsculas
    let result = frase.toLowerCase();

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
    };

    result = result.replace(/[áéíóúâêîôûãõç]/g, function (match) {
        return mapaAcentos[match];
    });

    // Remover caracteres especiais
    result = result.replace(/[^a-z0-9]/g, ' ');

    // Remover espaços extras
    result = result.replace(/\s+/g, ' ').trim();

    // Substituir palavras por letras
    result = result.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat').trim();

    return result;
}