let array = ['segundo', 'terceiro', 'quarto', 'quinto'];
function adicionarPrimeiro() {
  let array2 = ['primeiro', ...array];
  console.log(...array2);
}
adicionarPrimeiro();
