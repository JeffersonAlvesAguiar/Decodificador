export function dencrypt(frase) {
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

    // Substituir letras por palavras
    result = result.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u').trim();

    return result;
}