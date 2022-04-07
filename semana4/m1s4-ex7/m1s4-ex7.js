const numeros = [0, 2, 88, 56, 33, 42, 67, 3, 9, 0, 2];
const nroMaiorQ50 = numeros.find(function (nro) {
  return nro > 50;
});
console.log(nroMaiorQ50);
