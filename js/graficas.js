var contagiados = document.getElementById('contagiados').getContext('2d');

var lineaContagiados = new Chart( contagiados, {
    type: 'line',
    data: {
      labels: ['16-Marzo', '17-Marzo', '18-Marzo', '19-Marzo', '20-Marzo', '21-Marzo', '22-Marzo', '23-Marzo', '24-Marzo', '25-Marzo', '26-Marzo', '27-Marzo', '28-Marzo', '29-Marzo', '30-Marzo', '31-Marzo', '1-Abril'],
      datasets: [{
        label: 'Contagiados',
        data: [1, 1, 4, 4, 4, 4, 7, 9, 13, 25, 31, 31, 37, 37, 43, 46, 49 ],
        backgroundColor:'rgba(255, 0, 0, 0.3)',
        borderColor: 'rgb(255, 0, 0)',
        borderWidth: 3
      }]
    }, // data
});

var sospechosos = document.getElementById('sospechosos');

var lineaSospechosos = new Chart(sospechosos, {
  type: 'line',
  data: {
    labels: ['1-feb', '2-feb', '3-feb', '4-feb', '5-feb', '6-feb', '7-feb', '8-feb', '9-feb', '10-feb', '11-feb', '12-feb', '13-feb', '14-feb', '15-feb', '16-feb', '17-feb', '18-feb', '19-feb', '20-feb', '21-feb', '22-feb', '23-feb', '24-feb', '25-feb', '26-feb', '27-feb', '28-feb', '29-feb', '1-Marzo', '2-Marzo', '3-Marzo', '4-Marzo', '5-Marzo', '6-Marzo', '7-Marzo', '8-Marzo', '9-Marzo', '10-Marzo', '11-Marzo', '12-Marzo', '13-Marzo', '14-Marzo', '15-Marzo', '16-Marzo', '17-Marzo', '18-Marzo', '19-Marzo', '20-Marzo', '21-Marzo', '22-Marzo', '23-Marzo', '24-Marzo', '25-Marzo', '26-Marzo', '27-Marzo', '28-Marzo', '29-Marzo', '30-Marzo', '31-Marzo'],
    datasets: [{
      label: 'Casos Sospechosos',
      data: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 5, 7, 7, 7, 9, 10, 10, 13, 14, 15, 15, 16, 19, 21, 21, 25, 32, 45,56,62,95,111,131,156,190,226,268,299,357,384,443,490,523,568,633,661,677,688,690,691],
      backgroundColor: 'rgba(255, 195, 0, 0.3)',
      borderColor: '#ffc300',
      borderWidth: 3
    }]
  }
});

var ciudades = document.getElementById('ciudades').getContext('2d');

var lineaCiudades = new Chart( ciudades, {
  type: 'pie',
  data: {
    labels: ['Celaya', 'Guanajuato', 'Irapuato', 'León', 'Salamanca', 'San Luis de la Paz', 'San Miguel de Ayende', 'Silao', 'Valle de Santiago'],
    datasets: [{
      label: 'Contagiados',
      data: [4, 2, 6, 30, 2, 1, 2, 1, 1],
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
  }, // data
});
