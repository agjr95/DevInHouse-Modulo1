const arr1 = ['um', 2, 3, 'quatro', 5, 'seis', 'sete', 8, 9];
const arr2 = [1, 'dois', 'tres', 4, 'cinco', 6, 7, 'oito', 'nove'];
const arr3 = [900, 'novecentos e um'];

function adicionarSomenteNumeros(...arr) {
  const numeros = arr.filter(elemento => typeof elemento === 'number');
  console.log(...numeros);
  const nrosSomados = [...numeros].reduce(
    (acumulador, valorAtual) => acumulador + valorAtual
  );
  console.log(nrosSomados);
}
adicionarSomenteNumeros(...arr1, ...arr2, ...arr3);
