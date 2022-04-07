var div = document.createElement('div');
document.body.appendChild(div);
var input = document.querySelector('.input');
div.appendChild(input);
div.style.display = 'flex';
div.style.justifyContent = 'center';
div.style.marginTop = '10rem';

input.style.width = '30rem';
input.style.padding = '1rem';
input.style.borderRadius = '0.5rem';
input.style.border = 'none';
input.style.background = '#f1f1f1';




function teclaPressionada(event){
  if(event.key === "a"){
    document.body.style.background = "yellow";
  }else if(event.key === "p"){
    document.body.style.background = "black";
  }else if(event.key === " "){
    input.style.padding = "20px";
    input.style.fontSize = "22px";
  }else if(event.key === "Enter"){
    document.body.style.background = "none";
    input.style.padding = "1rem";
    input.style.textSize = "16px"
  };

}


input.addEventListener('keypress', teclaPressionada);