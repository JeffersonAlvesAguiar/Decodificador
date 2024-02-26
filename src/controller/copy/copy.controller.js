export function copy(frase) {
    navigator.clipboard.writeText(frase);
    // .then(function() {
    //     alert('Texto copiado com sucesso!');
    // }).catch(function(err) {
    //     alert('Erro ao copiar o texto: ', err);
    // });

    return frase;
};