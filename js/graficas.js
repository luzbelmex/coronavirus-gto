var contagiados = document.getElementById('contagiados').getContext('2d');

var lineaContagiados = new Chart( contagiados, {
    type: 'line',
    data: {
      labels: ['16-Marzo', '17-Marzo', '18-Marzo', '19-Marzo', '20-Marzo', '21-Marzo', '22-Marzo', '23-Marzo', '24-Marzo', '25-Marzo', '26-Marzo', '27-Marzo', '28-Marzo', '29-Marzo', '30-Marzo', '31-Marzo'],
      datasets: [{
        label: 'Contagiados',
        data: [1, 1, 4, 4, 4, 4, 7, 9, 13, 25, 31, 31, 37, 37, 43, 46 ],
        backgroundColor:'rgba(255, 0, 0, 0.3)',
        borderColor: 'rgb(255, 0, 0)',
        borderWidth: 3
      }]
    }, // data
});

var ciudades = document.getElementById('ciudades').getContext('2d');

var lineaCiudades = new Chart( ciudades, {
  type: 'bar',
  data: {
    labels: ['Celaya', 'Guanajuato', 'Irapuato', 'León', 'Salamanca', 'San Luis de la Paz', 'San Miguel de Ayende', 'Silao', 'Valle de Santiago'],
    datasets: [{
      label: 'Contagiados',
      data: [4, 2, 6, 28, 2, 1, 1, 1, 1],
      backgroundColor: [
        'rgba(10, 200, 230, 0.6)',
        'rgba(230, 100, 15, 0.6)',
        'rgba(230, 230, 10, 0.6)',
        'rgba(80, 200, 10, 0.6)',
        'rgba(200, 10, 230, 0.6)',
        'rgba(10, 90, 230, 0.6)',
        'rgba(230, 50, 10, 0.6)',
        'rgba(10, 230, 150, 0.6)',
        'rgba(230, 10, 177, 0.6)'
      ],
      borderColor: [
        'rgb(10, 200, 230)',
        'rgb(230, 100, 15)',
        'rgb(230, 230, 10)',
        'rgb(80, 200, 10)',
        'rgb(200, 10, 230)',
        'rgb(10, 90, 230)',
        'rgb(230, 50, 10)',
        'rgb(10, 230, 150)',
        'rgb(230, 10, 177)'
      ],
      borderWidth: 1
    }]
  } // data
});
