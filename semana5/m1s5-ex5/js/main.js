import { manipulaDados } from './manipulaDados.js';
const url =
  'https://servicodados.ibge.gov.br/api/v1/censos/nomes/ranking?qtd=100000';
const input = document.querySelector('.input__rank');
fetch(url)
  .then(resposta => {
    return resposta.json();
  })
  .then(dados => {
    console.log(dados);
    input.addEventListener('input', () => {
      manipulaDados(dados);
    });
  });
