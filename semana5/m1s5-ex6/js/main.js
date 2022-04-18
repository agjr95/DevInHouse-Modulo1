// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
function initMap() {
  const verticesTriangulo = [
    { lat: 32.311, lng: -64.735 },
    { lat: 25.804, lng: -80.197 },
    { lat: 18.226, lng: -66.708 }
  ];

  const trianguloDasBermudas = { lat: 26.374, lng: -70.531 };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: trianguloDasBermudas
  });

  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">Triangulo das Bermudas</h1>' +
    '<div id="bodyContent">' +
    '<p> O <b>Triangulo das Bermudas</b>, (ou Polígono das Bermudas) é uma área que varia, aproximadamente,' +
    ' de 1,1 milhão de km² até 3,95 milhões de km².' +
    ' Essa variação ocorre em virtude de fatores físicos, químicos, climáticos, geográficos e geofísicos da região' +
    ' que influem decisivamente no cálculo de sua área, situada no Oceano Atlântico entre as ilhas Bermudas, Porto Rico, Fort Lauderdale (na Flórida) e as Bahamas. ' +
    'A região notabilizou-se como palco de diversos desaparecimentos de aviões, barcos cargueiros e navios, ' +
    'para os quais se popularizaram explicações extrafísicas e/ou sobrenaturais.</p> ' +
    '<p>Link da referência: <a href="https://pt.wikipedia.org/wiki/Tri%C3%A2ngulo_das_Bermudas">' +
    'https://pt.wikipedia.org/wiki/Tri%C3%A2ngulo_das_Bermudas</a> </p>' +
    '</div>' +
    '</div>';

  const infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  const marker = new google.maps.Marker({
    position: trianguloDasBermudas,
    map,
    title: 'Triangulo das Bermudas'
  });

  verticesTriangulo.forEach(vertice => {
    new google.maps.Marker({
      position: vertice,
      map: map
    });
  });

  marker.addListener('mouseover', () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false
    });
  });
}

window.initMap = initMap;
