const notas = [10, 9, 10, 7, 6, 8, 9, 10, 7, 9];
const aprovados = notas.every(function () {
  return notas >= 7;
});

function aprovadosOuNao() {
  if (aprovados == true) {
    console.log(`A turma toda foi aprovada`);
  } else {
    console.log(`Alguém da turma não foi aprovado`);
  }
}
aprovadosOuNao();
// function apavorados(){
//   if
// }
