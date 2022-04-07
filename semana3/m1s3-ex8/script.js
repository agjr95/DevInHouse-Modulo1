
const regioes = ['','Norte', 'Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste'];
const send = document.querySelector('#send');
send.addEventListener('click', function (event) {
  event.preventDefault();
  let select = document.querySelector('#select');
  let url = `https://servicodados.ibge.gov.br/api/v1/projecoes/populacao/${select.selectedIndex}`;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const title = document.querySelector('#title2');
      const population = json.projecao.populacao.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      title.innerText = `A população da região ${
        regioes[select.selectedIndex]
      } é de: ${population} pessoas`;
    });
});


