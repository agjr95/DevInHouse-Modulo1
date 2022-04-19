import { movimentoVetor, movimentoBtns } from './move.js';

let x = 0;
let y = 0;
let move = null;

const carregaPosicao = localStorage.getItem('coordenadas');
if (carregaPosicao != null) {
  const posicao = JSON.parse(carregaPosicao);
  x = posicao.x;
  y = posicao.y;
}

const personagem = document.querySelector('#personagem');
personagem.style.top = y + 'px';
personagem.style.left = x + 'px';

function stop() {
  move = false;
}
setInterval(() => {
  let novaPosicao = movimentoVetor(personagem, move, x, y);
  x = novaPosicao.x;
  y = novaPosicao.y;
}, 1);

window.addEventListener('keyup', e => {
  salvarPosicao();
  stop();
});
window.addEventListener('keydown', e => {
  move = movimentoBtns(e.key);
});

function salvarPosicao() {
  localStorage.setItem('coordenadas', JSON.stringify({ x: x, y: y }));
}
