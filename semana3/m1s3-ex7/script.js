const body = document.querySelector ('body');
body.style.background = '#E1E1E1' ;
const div = document.createElement('div');
document.body.appendChild(div);
div.style.display = 'flex';
div.style.justifyContent = 'center';
const div2 = document.createElement('div');
div.appendChild(div2);
div2.style.display = 'flex';
div2.style.flexDirection = 'column';
div2.style.alignItems = 'center'
div2.style.marginTop = '10rem';
div2.style.background = '#DEDE79';
div2.style.width = '400px'
div2.style.height = '200px';
div2.style.borderRadius = '20px'
div2.style.boxShadow = '11px 14px 7px -9px rgba(91,89,133,0.94)';
const h1 = document.createElement('h1');
div2.appendChild(h1);
h1.innerText = "População do Brasil:";
h1.style.fontFamily = 'Arial, Helvetica, sans-serif';
h1.style.color = '#86919E';

////////////////////////////////////////////////////////////////////////
const url = "https://servicodados.ibge.gov.br/api/v1/projecoes/populacao";

fetch(url).then(function(naoFormatado){
  return naoFormatado.json()
}).then(function(json){
  manipulacaoAposRequisicao(json);
});

function manipulacaoAposRequisicao(json){
  const info = json.projecao.populacao.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  const p = document.createElement('p');
  div2.appendChild(p);
  p.style.fontFamily ='Arial, Helvetica, sans-serif';
  p.style.fontSize = '32px';
  p.style.color = '#273C53';
  p.innerText = info;
  
  
  
}