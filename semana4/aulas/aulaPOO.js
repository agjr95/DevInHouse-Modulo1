// class Pessoa {
//   constructor(nome, endereco) {
//     this.nome = nome;
//     this.endereco = endereco;
//   }
// }
// class PessoaFisica extends Pessoa {
//   constructor(nome, endereco, cpf) {
//     super(nome, endereco);
//     this.cpf = cpf;
//   }
// }
// class PessoaJuridica extends Pessoa {
//   constructor(nome,endereco,cnpj){
//     super(nome,endereco)
//     this.cnpj=cnpj
//   }
// }

class Veiculo {
  constructor(
    tipoVeiculo,
    marca,
    modelo,
    ano,
    placa,
    qtdMultas,
    velocidadeMaxima
  ) {
    this.tipoVeiculo = tipoVeiculo;
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.placa = placa;
    this.qtdMultas = qtdMultas;
    this.velocidadeMaxima = velocidadeMaxima;
  }
  get tipoModelo() {
    return this.tipoVeiculo + ' - ' + this.velocidadeMaxima;
  }
  adicionarMulta(nroPlaca) {
    if (nroPlaca === this.placa) {
      this.qtdMultas++;
    }
    return this.qtdMultas;
  }
}

const carro = new Veiculo('carro', 'ford', 'escort', 2000, 'ABC-1234', 0, 180);
console.log(carro.tipoModelo);
