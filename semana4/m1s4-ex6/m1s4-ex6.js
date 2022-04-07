const notas = [8.5, 7.5, 6, 3, 8.5, 10, 10, 9, 4, 7];

function validaNotas(notaAtual) {
  return notaAtual >= 7;
}
let aprovados = notas.filter(validaNotas);
console.log(aprovados);
