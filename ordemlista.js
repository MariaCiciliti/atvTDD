function ordenarNumeros(lista, crescente = true) {
    if (crescente) {
        return lista.sort((a, b) => a - b);
    } else {
        return lista.sort((a, b) => b - a);
    }
}
module.exports = ordenarNumeros;

