const div = document.createElement('div');
document.body.appendChild(div);
div.style.display = 'flex';
div.style.justifyContent = 'center';
const div2 = document.createElement('div');
div.appendChild(div2)
div2.style.width = '514px';
div2.style.display = 'flex';
div2.style.flexWrap = 'wrap';
div2.style.columnGap = '2rem';
div2.style.rowGap = ' 2rem';
div2.style.marginTop = '2rem';

// guarda na vairavel a url
const url = "https://dog.ceo/api/breeds/image/random";
//repete 10 vezes a requisição para obter 10 imagens diferentes
for(var i = 0; i<10; i++){
    fetch(url).then(function(naoFormatado){
      return naoFormatado.json()
    }).then(function(json){
      manipulaAposRequisicao(json);
    })
  }

    function manipulaAposRequisicao(json){
      const imagemUrl = json.message;
        let img = document.createElement('img');
        img.src = imagemUrl;
        img.style.width = '150px';
        img.style.height = '150px';
        img.style.objectFit = 'cover';
        div2.appendChild(img);
    
    }