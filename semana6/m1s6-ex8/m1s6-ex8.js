async function pegarMediaIdade() {
  const pegarDados = await fetch(
    'https://api.agify.io/?country_id=BR&name=agnaldo'
  );
  const dadosJson = await pegarDados.json();
  console.log(
    `A média de idade de pessoas com o nome ${dadosJson.name} é de ${dadosJson.age} anos`
  );
}
pegarMediaIdade();
