const senhas = ['abc123', 'super-secreta', '42', 'senha', '007'];
let password = senhas.map(function (currentPassword) {
  if (currentPassword.length < 4 || currentPassword.length > 10) {
    return false;
  } else {
    return true;
  }
});
console.log(password);
