const nomes = ['kirk', 'spock', 'scott', 'mccoy', 'sulu'];
function upperCaseTransform(currentName) {
  const upperCase = currentName.toUpperCase();
  console.log(upperCase);
}
nomes.forEach(upperCaseTransform);
