var contagiados = document.getElementById('contagiados').getContext('2d');

var lineaContagiados = new Chart( contagiados, {
    type: 'line',
    data: {
      labels: ['15-Marzo','16-Marzo', '17-Marzo', '18-Marzo', '19-Marzo', '20-Marzo', '21-Marzo', '22-Marzo', '23-Marzo', '24-Marzo', '25-Marzo', '26-Marzo', '27-Marzo', '28-Marzo', '29-Marzo', '30-Marzo', '31-Marzo', '1-Abril', '2-Abril', '3-Abril', '4-Abril', '5-Abril', '6-Abril', '7-Abril'],
      datasets: [{
        label: 'Contagiados',
        data: [0, 1, 1, 4, 4, 4, 4, 7, 9, 13, 25, 31, 31, 37, 37, 43, 46, 49, 50, 52, 54, 54, 58 ],
        backgroundColor:'rgba(255, 0, 0, 0.0)',
        borderColor: 'rgb(255, 0, 0)',
        borderWidth: 3
      }, // confirmados
      {
        label: 'Recuperados',
        data: [, , , , , , , , , , , , , , , , 0, 16, 16, 16, 17, 17, 17 ],
        backgroundColor:'rgba(35, 155, 86, 0.0)',
        borderColor: 'rgb(35, 155, 86)',
        borderWidth: 3
      }, // recuperados
      {
        label: 'Fallecidos',
        data: [, , , , , , , , , , , , , , , , , , , , , 0, 2, 3 ],
        backgroundColor: 'rgba(77, 77, 77, 0.0)',
        borderColor: 'rgb(77, 77, 77)',
        borderWidth: 3
      }
    ]
    }, // data
});

var sospechosos = document.getElementById('sospechosos').getContext('2d');

var lineaSospechosos = new Chart(sospechosos, {
  type: 'line',
  data: {
    labels: ['1-feb', '2-feb', '3-feb', '4-feb', '5-feb', '6-feb', '7-feb', '8-feb', '9-feb', '10-feb', '11-feb', '12-feb', '13-feb', '14-feb', '15-feb', '16-feb', '17-feb', '18-feb', '19-feb', '20-feb', '21-feb', '22-feb', '23-feb', '24-feb', '25-feb', '26-feb', '27-feb', '28-feb', '29-feb', '1-Marzo', '2-Marzo', '3-Marzo', '4-Marzo', '5-Marzo', '6-Marzo', '7-Marzo', '8-Marzo', '9-Marzo', '10-Marzo', '11-Marzo', '12-Marzo', '13-Marzo', '14-Marzo', '15-Marzo', '16-Marzo', '17-Marzo', '18-Marzo', '19-Marzo', '20-Marzo', '21-Marzo', '22-Marzo', '23-Marzo', '24-Marzo', '25-Marzo', '26-Marzo', '27-Marzo', '28-Marzo', '29-Marzo', '30-Marzo', '31-Marzo', '1-Abril', '2-Abril', '3-Abril', '4-Abril', '5-Abril', '6-Abril', '7-Abril'],
    datasets: [{
      label: 'Casos Sospechosos',
      data: [2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 6, 8, 8, 8, 10, 11, 11, 14, 15, 16, 17, 18, 21, 23, 24, 28, 35, 48, 61, 67, 101, 117, 139, 164, 198, 234, 277, 308, 369, 398, 460, 513, 564, 622, 709, 788, 860, 947, 1031, 1091, 1114, 1129, 1133, 1134, 1134, 1148, 1157],
      backgroundColor: 'rgba(255, 195, 0, 0.3)',
      borderColor: '#ffc300',
      borderWidth: 3
    }] // datasets
  }
});

var ciudades = document.getElementById('ciudades').getContext('2d');

var lineaCiudades = new Chart( ciudades, {
  type: 'bar',
  data: {
    labels: ['Abasolo', 'Celaya', 'Cortazar', 'Guanajuato', 'Irapuato', 'León', 'Salamanca', 'San Luis de la Paz', 'San Miguel de Ayende', 'Silao', 'Valle de Santiago'],
    datasets: [{
      label: 'Contagiados',
      data: [1, 5, 1, 4, 8, 30, 7, 1, 3, 1, 1],
      backgroundColor: 'rgba(255, 0, 0, .7)',
      borderColor: 'rgb(255, 0, 0)',
      borderWidth: 1
    },
    {
      label: 'Recuperados',
      data: [0, 0, 0,  0, 1, 16, 0, 0, 0, 0, 0],
      backgroundColor: 'rgba(35, 155, 86, .7)',
      borderColor: 'rgb(35, 155, 86)',
      borderWidth: 1
    },
    {
      label: 'Sospechosos',
      data: [2, 43, 1, 7, 15, 80, 21, 1, 1, 6, 1],
      backgroundColor: 'rgba(255, 205, 43, 0.5)',
      borderColor: 'rgb(255, 205, 43)',
    },
    {
      label: 'Fallecidos',
      data: [0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0],
      backgroundColor: 'rgba(77, 77, 77, 0.5)',
      borderColor: 'rgb(77, 77, 77)',
    }
  ],

  }, // data

});
