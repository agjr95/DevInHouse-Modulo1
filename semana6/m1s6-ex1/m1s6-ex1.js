const nobre1 = {
  nome: 'Charles',
  titulos: [
    'Príncipe de Gales',
    'Duque de Edimburgo',
    'Duque da Cornualha',
    'Duque de Rothesay',
    'Conde de Merioneth',
    'Conde de Carrick',
    'Conde de Chester',
    'Barão Greenwich',
    'Barão de Renfrew',
    'Lorde das Ilhas',
    'Príncipe e Grande Intendente da Escócia',
    'Cavaleiro da Ordem da Austrália'
  ]
};

const nobre2 = {
  nome: 'Daenerys Targaryen',
  titulos: [
    'Rainha dos Ândalos',
    'Protetora dos Sete Reinos',
    'Khaleesi do Grande Mar de Grama',
    'Mãe de Dragões',
    'Quebradora de Correntes'
  ]
};

function saudar(nome, ...titulos) {
  titulos.forEach(e => {
    console.log(`Olá ${nome}, ${e}`);
  });
}
saudar(nobre1.nome, nobre1.titulos, nobre2.titulos);
