async function fetchApi() {
  const bitCoinApi = await fetch('https://api.coincap.io/v2/assets/bitcoin');
  const infoTreated = await bitCoinApi.json();
  const simbolo = infoTreated.data.symbol;
  const usd = parseFloat(infoTreated.data.priceUsd);
  console.log(infoTreated.data);
  console.log(
    `O preço do Bitcoin ${simbolo} hoje em dólars é de $${usd.toFixed(2)}`
  );
}
fetchApi();
