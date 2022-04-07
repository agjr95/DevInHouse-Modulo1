const r = envolver('<body>', '<div>', '<h1>', '</h1>', '</div>', '</body>');

function envolver(...tags) {
  let array = ['<html>', ...tags, '</html>'];
  return array;
}
console.log(r);
// saida esperada: ['<html>', '<body>','<div>','<h1>','</h1>','</div>','</body>', '</html>']
