const tags = ['html', 'head', 'body', 'div', 'h1', 'span'];
const resultado = tags
  .filter(tagAtual => {
    return tagAtual.startsWith('h');
  })
  .map(tagAtual => {
    return `<${tagAtual}>`;
  })
  .forEach(tagAtual => {
    console.log(tagAtual);
  });
