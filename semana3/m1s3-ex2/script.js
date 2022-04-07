// Agora que entendemos parte da ligação entre o javascript e o navegador, podemos criar e remover ELEMENTOS HTML como bem entendermos.

// Para exercitar essa habilidade vamos criar um script JAVASCRIPT que crie:

// 1- Um Heading (<h1>) com o texto "Página dinamica";

// 2- Três imagens alinhadas com flexbox ou float;

// 3- Um artigo centralizado com um texto aleatório

// 4 - uma lista não ordenada (<ul>) com 3 itens de lista (<li>) --></li>


////// 1  - CRIAR H1
   criarTitulo()
    function criarTitulo(){
      const titulo = document.createElement("h1");
      const textoTitulo = document.createTextNode('Páginas dinâmicas');
      titulo.appendChild(textoTitulo);
      document.body.appendChild(titulo)
    }

  /////// 2 - INTRODUZIR IMGS E ESTILIZAR
  addImg();
  function addImg(){
    const style = document.createElement('style');
    style.innerText = ".container{display:flex;column-gap:2rem;justify-content:center;margin-top:10rem;} .imagem1,.imagem2,.imagem3{width:300px;height:300px;object-fit:cover;"
    const allImg = document.createElement('div');
    allImg.classList.add('container');
    

    const img1 = document.createElement('img');
    img1.classList.add('imagem1');
    img1.src = './img/88249115.jpg';

    const img2 = document.createElement('img');
    img2.classList.add('imagem2');
    img2.src = './img/índice.jpg';

    const img3 = document.createElement('img');
    img3.classList.add('imagem3');
    img3.src = './img/índice2.jpg';
    
    

    document.head.appendChild(style);
    document.body.appendChild(allImg);
    allImg.appendChild(img1);
    allImg.appendChild(img2);
    allImg.appendChild(img3);

  }

  ////// 3 - TEXTO CENTRALIZADO
  
  addText();
  function addText(){
    const textContainer = document.createElement('div');
    textContainer.style.display = 'flex';
    textContainer.style.justifyContent = 'center';
    textContainer.style.marginTop = '2rem';
    const text = document.createElement('p');
    text.innerText = "Lorem ipsum dolor sit amet. Accusantium repellendus ut enim commodi ab voluptatibus voluptate. In dolores quos est galisum suscipit non officia provident qui accusamus voluptatem quo perspiciatis possimus. Sed minus ratione ut voluptatem sint qui numquam inventore non delectus voluptatum. Rem sunt quisquam eum nobis dolorem  velit incidunt et enim modi sit quisquam alias ex facere perspiciatis!";
    text.style.textAlign = 'justify';
    text.style.width = '970px';
    document.body.appendChild(textContainer);
    textContainer.appendChild(text);
    

  }

  ////// 4 - CRIAR LI'S DENTRO DE UMA UL
  addList();
  function addList(){
    const arr = ["item 1", "item 2", "item 3"];
    const ul = document.createElement('ul');
    // for(i = 0;i<arr.length; i++ ){
    //   const li = document.createElement('li');
    //   li.innerHTML = arr[i];
    //   ul.appendChild(li);
    // }
    for(array of arr){
      const li = document.createElement('li');
      li.innerHTML = array;
      ul.appendChild(li);
    }
    document.body.appendChild(ul);


  }