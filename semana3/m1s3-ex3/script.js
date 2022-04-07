// Agora que entendemos parte da ligação entre o javascript e o navegador, podemos criar e remover ELEMENTOS HTML como bem entendermos.

// Para exercitar essa habilidade vamos criar um script JAVASCRIPT que:


// 1- tendo em vista o exercício anterior, crie um código que remova os itens da lista (<li>)e os substituam por 5 novos.

// list()
// function list(){
//   var arr = ["item 1", "item 2", "item 3"];
//   const ul = document.createElement('ul');
  
//   addList(arr, ul);
//   function addList(){
    
//     for(array of arr){
//       var li = document.createElement('li');
//       li.innerHTML = array;
//       ul.appendChild(li);
//     }

//      document.body.appendChild(ul);
//   }

//   const btnChangeList = document.createElement('button');
//   btnChangeList.innerText = "Substituir Itens";
//   ul.appendChild(btnChangeList);
//   btnChangeList.addEventListener('click', function replaceList(){
//     var arr2 = arr;
//     arr2 = ["item NOVO 1", "item NOVO 2", "item NOVO 3", "item NOVO 4", "item NOVO 5"];
    
//     for(array of arr2){
//       var li = document.createElement('li');
//       li.innerHTML = array;
//       ul.appendChild(li);
//     }
//   })
// }
const listContainer = document.createElement('div');
document.body.appendChild(listContainer);
const ul = document.createElement('ul');
listContainer.appendChild(ul);


var arr = ["item 1", "item 2", "item 3"];
  for(array of arr){
      var li = document.createElement('li');
      li.innerHTML = array;
      ul.appendChild(li);
    }


const btnChangeList = document.createElement('button');
btnChangeList.innerText = "Modificar Lista";
listContainer.appendChild(btnChangeList);
function changeList(){
  var numeroN = 1;
  ul.remove();
  const novaUl = document.createElement('ul');
   listContainer.appendChild(novaUl);
  while(numeroN<=5){
   var li = document.createElement('li');
   li.innerText = numeroN + ' novo item';
   novaUl.append(li);
    numeroN++;
  }  
}

btnChangeList.addEventListener('click',changeList);

// 2- remova o elemento H1 e crie um elemento h6 no mesmo lugar

var containerTitle = document.createElement('div');
document.body.appendChild(containerTitle);

var h1 = document.createElement('h1');
h1.innerText = "Titulo 1";
containerTitle.appendChild(h1);

var btnChangeH1 =  document.createElement('button');
btnChangeH1.innerText = "Modificar Titulo";
containerTitle.appendChild(btnChangeH1);

function changeH1(){
  h1.remove();
  let h6 = document.createElement('h6');
  h6.innerText = "Titulo 6";
  containerTitle.append(h6);
  btnChangeH1.before(h6);
}

btnChangeH1.addEventListener('click',changeH1);


// 3- adicione uma sombra no artigo

var containerArtigo = document.createElement('div');
document.body.appendChild(containerArtigo);
var artigo = document.createElement('p');
artigo.innerText = "Hinc augue causae eam no. Esse ridens volumus sit at, ea errem fabellas cum, his partem viderer et. Ius ne tempor molestie, ornatus eleifend laboramus mel in, ubique urbanitas sit at. Cum no voluptatum definitiones. Ea cibo conceptam qui, ornatus mentitum deterruisset per ut.";
artigo.style.background= 'grey';
artigo.style.color = 'white';
containerArtigo.appendChild(artigo);
var btnSombra = document.createElement('button');
btnSombra.innerText = "Colocar Somba no texto";
containerArtigo.appendChild(btnSombra);
function addShadow(){
  artigo.style.boxShadow = '16px 12px 27px 1px rgba(0,0,0,0.40)';
}
btnSombra.addEventListener('click', addShadow);






