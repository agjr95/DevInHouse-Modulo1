const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  const inputsArray = document.querySelectorAll('input');
  const inputs = Array.from(inputsArray);

  let span;
  let grupo1 = inputs.filter(inputsElement => {
    const inputFloatValue = parseFloat(inputsElement.value);
    if (inputFloatValue >= 0 && inputFloatValue <= 1) {
      return true;
    } else {
      return false;
    }
  });
  grupo1 = grupo1.map(inputsElement => {
    console.log(grupo1);
    const inputFloatValue = parseFloat(inputsElement.value);
    document.querySelectorAll('span').forEach(item => {
      item.remove();
    });
    span = document.createElement('span');
    const color = '#' + Math.floor(inputFloatValue * 16777215).toString(16);
    span.innerText = color;
    span.style.backgroundColor = color;
    return [span, inputFloatValue];
    //o retorno será uma array dentro de outra, ou seja grupo1 = [[span,floatValue]]
  });
  grupo1.forEach(e => {
    console.log(e);
    const span = e[0];
    const input = e[1];
    input.insertAdjacentElement('afterend', span);
  });

  const grupo2 = inputs.filter(inputsElement => {
    const inputFloatValue = parseFloat(inputsElement.value);
    if (!(inputFloatValue >= 0 && inputFloatValue <= 1)) {
      return inputsElement;
    }
  });
  grupo2.forEach(e => {
    e.style.border = '1px solid red';
  });
});
