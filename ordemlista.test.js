
const ordenarNumeros = require('./ordemlista');

test('Ordenar lista em ordem crescente', () => {
  const lista = [5, 2, 9, 1, 7];
  const listaOrdenada = ordenarNumeros(lista);
  expect(listaOrdenada).toEqual([1, 2, 5, 7, 9]);
});

test('Ordenar lista em ordem decrescente', () => {
  const lista = [5, 2, 9, 1, 7];
  const listaOrdenada = ordenarNumeros(lista, false);
  expect(listaOrdenada).toEqual([9, 7, 5, 2, 1]);
});
