function movimentoVetor(personagem, move, x, y) {
  switch (move) {
    case 'desce':
      personagem.style.top = ++y + 'px';
      break;

    case 'sobe':
      personagem.style.top = --y + 'px';
      break;

    case 'direita':
      personagem.style.left = ++x + 'px';
      break;

    case 'esquerda':
      personagem.style.left = --x + 'px';
      break;
  }
  return { x: x, y: y };
}

function movimentoBtns(tecla) {
  if (tecla == 'ArrowDown') {
    return 'desce';
  }

  if (tecla == 'ArrowUp') {
    return 'sobe';
  }

  if (tecla == 'ArrowLeft') {
    return 'esquerda';
  }

  if (tecla == 'ArrowRight') {
    return 'direita';
  }
}
export { movimentoVetor, movimentoBtns };
