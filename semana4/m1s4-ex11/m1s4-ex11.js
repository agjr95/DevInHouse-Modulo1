class Usuario {
  constructor(login, senha) {
    this.login = login;
    this.senha = senha;
  }
  autenticar(senhaTestada) {
    return senhaTestada === this.senha;
  }
}
const user = new Usuario('admin', 'segredo');
// console.log(user.autenticar('segredo')); //true
console.log(user.autenticar('senha errada')); //false
