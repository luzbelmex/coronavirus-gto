// Mapa

var map = L.map('map').setView([21.0108, -101.1546], 8); // posisionar el mapa

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); // agregar el mapa de openstreetmap

var hospital = L.icon({
  iconUrl: 'images/hospital.png', // ubicacion del archivo
  iconSize: [25, 25], // Tamaño del icono
}) // crear el icono

var marcador = L.marker(
  [21.132859, -101.680049], // cordenadas para ubicar el icono
  {icon: hospital} // seleccionar el icono
).addTo(map).bindPopup('Calle 20 de Enero <br> Col. Obregon <br> León, Gto'); // Imprimir el icono del hospital
