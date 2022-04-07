const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  const inputsArray = document.querySelectorAll('input');
  const inputs = Array.from(inputsArray);

  let grupo1 = inputs.filter(inputsElement =>
    parseFloat(inputsElement.value) > 0 && parseFloat(inputsElement.value) <= 1
      ? true
      : false
  );
  grupo1 = grupo1.map(inputsElement => {
    const span = document.createElement('span');
    const color = '#' + Math.floor(inputsElement.value * 16777215).toString(16);
    span.innerText = color;
    span.style.backgroundColor = color;
    document.querySelectorAll('span').forEach(item => item.remove());
    return [span, inputsElement];
    //o retorno será uma array dentro de outra, ou seja grupo1 = [[span,floatValue]]
  });
  grupo1.forEach(e => {
    console.log(e);
    const span = e[0];
    const input = e[1];
    input.insertAdjacentElement('afterend', span);
    input.style.border = '1px solid grey';
  });

  const grupo2 = inputs.filter(inputsElement =>
    !(
      parseFloat(inputsElement.value) > 0 &&
      parseFloat(inputsElement.value) <= 1
    )
      ? inputsElement
      : null
  );
  grupo2.forEach(e => {
    e.style.border = '3px solid red';
  });
});
