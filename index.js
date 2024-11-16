function generarHistogramaTexto(arr) {
    const histograma = {};

    arr.forEach(elemento => {
        if (histograma[elemento]) {
            histograma[elemento]++;
        } else {
            histograma[elemento] = 1;
        }
    });

    const histogramaTexto = {};
    for (let clave in histograma) {
        histogramaTexto[clave] = '*'.repeat(histograma[clave]);
    }

    return histogramaTexto;
}

const numeros = [1, 2, 3, 1, 2, 3, 4, 1, 5];
const histogramaTexto = generarHistogramaTexto(numeros);
console.log(histogramaTexto);
// Imprime: { '1': '***', '2': '**', '3': '**', '4': '*', '5': '*' }

