function obterClienteNoBancoDeDados(idCliente) {
  return new Promise((resolve, reject) => {
    if (idCliente === 7) {
      const cliente = { nome: 'bruce wayne', id: idCliente };
      resolve(cliente);
    } else {
      reject(
        new Error('Cliente não encontrado. Coincidentemente o batman está aqui')
      );
    }
  });
}

async function processar() {
  try {
    const cliente = await obterClienteNoBancoDeDados(7);
    console.log(cliente);
  } catch (error) {
    console.log(error.message);
  }
}

processar();
