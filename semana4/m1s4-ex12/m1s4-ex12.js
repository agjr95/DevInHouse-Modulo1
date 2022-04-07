class Personagem {
  constructor(nome) {
    this.nome = nome;
    this.percentualDeVida = 100;
  }
  danoSofrido(percentualDano) {
    if (this.percentualDeVida - percentualDano < 0) {
      this.percentualDeVida = 0;
    } else {
      this.percentualDeVida -= percentualDano;
    }
  }
  kitMedico() {
    const percentualCura = 10;
    if (this.percentualDeVida + percentualCura > 100) {
      this.percentualDeVida = 100;
    } else {
      this.percentualDeVida += percentualCura;
    }
  }
}
const jogador = new Personagem('Mr. Shooter');
jogador.danoSofrido(30);
jogador.kitMedico();
console.log(jogador);
