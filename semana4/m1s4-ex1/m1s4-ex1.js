// function retrnaIndiceMaiorValor() {
//   //aqui ele bota o primeiro indice que será comparado com outros em sequência
//   let maior = array[0];
//   //aqui ele percorre a array a parttir do segundo elemento
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > maior) {
//       maior = array[i];
//     }
//   }
//   //aqui retorna o maior valor depois de toda a verificação for
//   return maior;
// }
// let array = [10, 3, 6, 7, 5, 1];
// console.log(retrnaIndiceMaiorValor(array));
const arr1 = [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47];
const arr2 = [];
const arr3 = [1];
const arr4 = [1, -1];
const arr5 = null;
const arr6 = [-2, -2, -2, -2];
const arr7 = [20, 10, 30];

function calcular(array) {
  if (array != null) {
    let maior = array[0];
    let menor = array[0];
    if (array.length == 0 || array.length == 1) {
      console.log('Não foi possível calcular');
    } else {
      for (let i = 0; i < array.length; i++) {
        maior = Math.max(maior, array[i]);
        menor = Math.min(menor, array[i]);
      }
      console.log(`O maior valor foi ${maior} e o menor foi ${menor}`);
    }
  } else {
    console.log('Valor é null');
  }
}

calcular(arr7);
