var contagiados = document.getElementById('contagiados').getContext('2d');

var lineaContagiados = new Chart( contagiados, {
    type: 'line',
    data: {
      labels: ['15-Marzo','16-Marzo', '17-Marzo', '18-Marzo', '19-Marzo', '20-Marzo', '21-Marzo', '22-Marzo', '23-Marzo', '24-Marzo', '25-Marzo', '26-Marzo', '27-Marzo', '28-Marzo', '29-Marzo', '30-Marzo', '31-Marzo', '1-Abril', '2-Abril', '3-Abril', '4-Abril', '5-Abril', '6-Abril', '7-Abril', '8-Abril', '9-Abril', '10-Abril', '11-Abril', '12-Abril', '13-Abril', '14- Abril', '15-Abril', '16-Abril'],
      datasets: [{
        label: 'Contagiados',
        data: [0, 1, 1, 4, 4, 4, 4, 7, 9, 13, 25, 31, 31, 37, 37, 43, 46, 49, 50, 52, 54, 54, 58, 62, 73, 78, 88, 92, 93, 102, 103, 108, 113 ],
        backgroundColor:'rgba(255, 0, 0, 0.0)',
        borderColor: 'rgb(255, 0, 0)',
        borderWidth: 3
      }, // confirmados
      {
        label: 'Recuperados',
        data: [, , , , , , , , , , , , , , , , 0, 16, 16, 16, 17, 17, 17, 17, 19, 21, 28, 28, 29, 33, 35, 35, 36 ],
        backgroundColor:'rgba(35, 155, 86, 0.0)',
        borderColor: 'rgb(35, 155, 86)',
        borderWidth: 3
      }, // recuperados
      {
        label: 'Fallecidos',
        data: [, , , , , , , , , , , , , , , , , , , , , 0, 2, 3, 3, 4, 5, 5, 5, 5, 6, 6, 7],
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
    labels: ['1-feb', '2-feb', '3-feb', '4-feb', '5-feb', '6-feb', '7-feb', '8-feb', '9-feb', '10-feb', '11-feb', '12-feb', '13-feb', '14-feb', '15-feb', '16-feb', '17-feb', '18-feb', '19-feb', '20-feb', '21-feb', '22-feb', '23-feb', '24-feb', '25-feb', '26-feb', '27-feb', '28-feb', '29-feb', '1-Marzo', '2-Marzo', '3-Marzo', '4-Marzo', '5-Marzo', '6-Marzo', '7-Marzo', '8-Marzo', '9-Marzo', '10-Marzo', '11-Marzo', '12-Marzo', '13-Marzo', '14-Marzo', '15-Marzo', '16-Marzo', '17-Marzo', '18-Marzo', '19-Marzo', '20-Marzo', '21-Marzo', '22-Marzo', '23-Marzo', '24-Marzo', '25-Marzo', '26-Marzo', '27-Marzo', '28-Marzo', '29-Marzo', '30-Marzo', '31-Marzo', '1-Abril', '2-Abril', '3-Abril', '4-Abril', '5-Abril', '6-Abril', '7-Abril', '8-Abril', '9-Abril', '10-Abril', '11-Abril', '12-Abril', '13-Abril', '14- Abril', '15-Abril', '16-Abril'],
    datasets: [{
      label: 'Casos Sospechosos',
      data: [2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 6, 9, 9, 9, 11, 13, 13, 18, 20, 24, 27, 28, 35, 38, 38, 46, 54, 66, 79, 85, 119, 137, 162, 190, 226, 266, 311, 344, 407, 443, 510, 575, 641, 727, 839, 949, 1058, 1172, 1291, 1390, 1494, 1541, 1602, 1665, 1745, 1822, 1908, 1966, 2022, 2100, 2153, 2219, 2272, 2295, 2304],
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
    labels: ['Abasolo', 'Acambaro', 'Celaya', 'Cortazar', 'Guanajuato', 'Irapuato', 'León', 'Moroleon', 'Salamanca', 'San Luis de la Paz', 'San Miguel de Ayende', 'Silao', 'Uriangato', 'Valle de Santiago', 'Villagrán', 'Yuridia'],
    datasets: [{
      label: 'Contagiados',
      data: [2, 1, 7, 1, 7, 10, 38, 4, 30, 1, 3, 1, 4, 1, 1, 2],
      backgroundColor: 'rgba(255, 0, 0, .7)',
      borderColor: 'rgb(255, 0, 0)',
      borderWidth: 1
    },
    {
      label: 'Recuperados',
      data: [0, 0, 3, 0, 1, 4, 23, 0, 1, 1, 1, 1, 0, 1, 0, 0],
      backgroundColor: 'rgba(35, 155, 86, .7)',
      borderColor: 'rgb(35, 155, 86)',
      borderWidth: 1
    },
    {
      label: 'Sospechosos',
      data: [0, 8, 32, 1, 8, 9, 97, 2, 7, 5, 4, 4, 4, 2, 0, 2],
      backgroundColor: 'rgba(255, 205, 43, 0.5)',
      borderColor: 'rgb(255, 205, 43)',
    },
    {
      label: 'Fallecidos',
      data: [0, 1, 1, 0, 1, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: 'rgba(77, 77, 77, 0.5)',
      borderColor: 'rgb(77, 77, 77)',
    }
  ],

  }, // data
});
