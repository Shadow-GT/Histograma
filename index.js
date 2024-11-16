function generarHistogramaTexto(arr) {
    const histograma = {};

    arr.forEach(elemento => {
        if (histograma[elemento]) {
            histograma[elemento]++;
        } else {
            histograma[elemento] = 1;
        }
    });

    let resultado = '';
    for (let clave in histograma) {
        resultado += `${clave}: ${'*'.repeat(histograma[clave])}\n`;
    }

    return resultado.trim();
}

const numeros = [1, 2, 3, 1, 2, 3, 4, 1, 5];
const histogramaTexto = generarHistogramaTexto(numeros);
console.log(histogramaTexto);
