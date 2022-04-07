const pontos = [10, 8, 5, 4, 9, 1, 9, 10, 2, 10];
const totalPts = pontos
  .filter(pontoAtual => {
    return pontoAtual > 5;
  })
  .reduce((totalPts, pontoAtual) => {
    return totalPts + pontoAtual;
  }, 0);

console.log(totalPts);
