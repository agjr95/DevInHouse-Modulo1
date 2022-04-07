const btn = document.querySelector('.btn');
let total = 0;
btn.addEventListener('click', () => {
  const inputs = document.querySelectorAll('input');
  // const inputsArray = Array.from(inputs);
  inputs.forEach(e => {
    e.disabled = true;
    const valor = parseInt(e.value);
    if (!isNaN(valor)) {
      total += valor;
    }
  });
  const h1 = document.createElement('h1');
  h1.innerText = total;
  document.body.appendChild(h1);
});
