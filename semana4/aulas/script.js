// const nomes = ['floki', 'bjorn', 'ubbe', 'ragnar' , 'egbert', 'lagertha', 'athelstan', 'rollo'];

// const resultadoA = nomes.map( function(nome){
//     return nome.length;
// });
// console.log(resultadoA);

// const resultadoB = nomes.filter( function(nome){
//   return nome.startsWith('a') || nome.startsWith('e') || nome.startsWith('i') || nome.startsWith('o') || nome.startsWith('u');

// })
// console.log(resultadoB);

// const nomes = ['ragnar', 'lagertha', 'floki', 'bjorn', 'rollo'];

// const achou = nomes.find(function (achar) {
//   return achar.startsWith('flo');
// });
// console.log(achou);

// const arr = [0, 0, 0, 1, 0, 1, 0, 1, 0, 2, 1, 0, 1, 1, 1, 1, 0];
// const every = arr.every(function (nro) {
//   return nro === 0 || nro === 1;
// });
// console.log(every);
document.body.style.background = 'black';

const tags = ['html', 'body', 'h1', 'div', 'ul', 'h2'];
tags.filter(function (tag) {
  return tag !== 'h1' && tag !== 'h2';
});
console.log(tags);
