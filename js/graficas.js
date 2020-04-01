var contagiados = document.getElementById('contagiados').getContext('2d');

var lineaContagiados = new Chart( contagiados, {
    type: 'line',
    data: {
      labels: ['16-Marzo', '17-Marzo', '18-Marzo', '19-Marzo', '20-Marzo', '21-Marzo', '22-Marzo', '23-Marzo', '24-Marzo', '25-Marzo', '26-Marzo', '27-Marzo', '28-Marzo', '29-Marzo', '30-Marzo', '31-Marzo',],
      datasets: [{
        label: 'Contagiados',
        data: [1, 1, 4, 4, 4, 4, 7, 9, 13, 25, 31, 31, 37, 37, 43, 46 ],
        backgroundColor:'rgba(255, 0, 0, 0.3)',
        borderColor: 'rgb(255, 0, 0)',
        borderWidth: 3
      }]
    },
    options:{
      scales: {
        yAxes: [{
          ticks: {
            beginAtzero: true
          }
        }]
      }
    }
});
