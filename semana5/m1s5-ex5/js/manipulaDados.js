export function manipulaDados(dados) {
  const input = document.querySelector('.input__rank');
  const divContainer = document.querySelector('.mainContainer');
  document.querySelectorAll('h2').forEach(e => {
    e.remove();
  });
  const rankFiltrado = dados.find(elemento => {
    if (elemento.rank == input.value) {
      let divH2 = document.createElement('div');
      divH2.classList.add('container__h2');
      divContainer.appendChild(divH2);
      let h2 = document.createElement('h2');
      divH2.appendChild(h2);
      h2.innerText = `Rank ${elemento.rank}
       Nome: ${elemento.nome}`;
    }
  });

  return rankFiltrado;
}
