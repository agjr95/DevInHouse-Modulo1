const url =
  'https://servicodados.ibge.gov.br/api/v1/censos/nomes/ranking?qtd=100000';
const input = document.querySelector('input');
let ul;
fetch(url)
  .then(resposta => {
    return resposta.json();
  })
  .then(dados => {
    input.addEventListener('keyup', () => {
      manipulaDados(dados);
    });
  });

function manipulaDados(dados) {
  const nomeFiltrado = dados.filter(elemento => {
    return elemento.nome.includes(input.value.toUpperCase()); //.includes() irá procurar dentro de cada  objeto  a propriedade .nome e retornará verdadeiro ou falso
  });
  console.log(nomeFiltrado);
  if (ul != null) {
    ul.remove();
  }

  ul = document.createElement('ul');
  ul.classList.add('lista__nomes');
  const divLista = document.querySelector('.lista');
  divLista.setAttribute('style', 'padding: 1rem 0;');
  divLista.appendChild(ul);

  nomeFiltrado.forEach(elemento => {
    const li = document.createElement('li');
    li.classList.add('lista__nomes--ele');
    li.innerText = elemento.nome;
    ul.appendChild(li);
  });
}
