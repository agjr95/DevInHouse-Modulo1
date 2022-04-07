Para aprovação de um empréstimo, um banco usa as funções descritas abaixo para aprovação do cadastro pessoal e outra função para aprovação do valor solicitado, onde ambas retornam uma promise para fazer o processamento em segundo plano (no código, este processamento está simulado).

Para o cliente instanciado no código abaixo, foram executadas ambas as funções e criadas variáveis para armazenar este retorno.

Usando o método '**Promise.all()**', recupere o resultado de ambas as promises e imprima no console 'APROVADO' ou 'REPROVADO', conforme os resultados das promises forem resolvidos ou rejeitados.

Por fim, imprima no console a frase 'Fim do Processamento', qualquer que seja o resultado (resolve ou reject) das promises ('finally').

```javascript
function aprovarDadosCadastrais(cliente) {
  return new Promise((resolve, reject) => {
    if (cliente.cpf === 11111111111) resolve(true);
    else reject(false);
  });
}

function aprovarValorSolicitado(cliente, valor) {
  return new Promise((resolve, reject) => {
    if (cliente.margem >= valor) resolve(true);
    else reject(false);
  });
}

const cliente = { cpf: 11111111111, nome: 'Calleri', margem: 1000.0 };
const aprovacaoCadastro = aprovarDadosCadastrais(cliente);
const aprovacaoValor = aprovarValorSolicitado(cliente, 300.0);

// continue com o tratamento dos resultados de ambas as promises...
```
