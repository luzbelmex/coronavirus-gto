var contagiados = document.getElementById('contagiados').getContext('2d');

var lineaContagiados = new Chart( contagiados, {
    type: 'line',
    data: {
      labels: ['15-Marzo','16-Marzo', '17-Marzo', '18-Marzo', '19-Marzo', '20-Marzo', '21-Marzo', '22-Marzo', '23-Marzo', '24-Marzo', '25-Marzo', '26-Marzo', '27-Marzo', '28-Marzo', '29-Marzo', '30-Marzo', '31-Marzo', '1-Abril', '2-Abril', '3-Abril', '4-Abril', '5-Abril', '6-Abril', '7-Abril', '8-Abril', '9-Abril', '10-Abril', '11-Abril', '12-Abril', '13-Abril', '14- Abril', '15-Abril', '16-Abril', '17-Abril', '18-Abril'],
      datasets: [{
        label: 'Contagiados',
        data: [0, 1, 1, 4, 4, 4, 4, 7, 9, 13, 25, 31, 31, 37, 37, 43, 46, 49, 50, 52, 54, 54, 58, 62, 73, 78, 88, 92, 93, 102, 103, 108, 113, 140, 143 ],
        backgroundColor:'rgba(255, 0, 0, 0.0)',
        borderColor: 'rgb(255, 0, 0)',
        borderWidth: 3
      }, // confirmados
      {
        label: 'Recuperados',
        data: [, , , , , , , , , , , , , , , , 0, 16, 16, 16, 17, 17, 17, 17, 19, 21, 28, 28, 29, 33, 35, 35, 36, 38, 40 ],
        backgroundColor:'rgba(35, 155, 86, 0.0)',
        borderColor: 'rgb(35, 155, 86)',
        borderWidth: 3
      }, // recuperados
      {
        label: 'Fallecidos',
        data: [, , , , , , , , , , , , , , , , , , , , , 0, 2, 3, 3, 4, 5, 5, 5, 5, 6, 6, 7, 8, 9],
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
    labels: ['1-feb', '2-feb', '3-feb', '4-feb', '5-feb', '6-feb', '7-feb', '8-feb', '9-feb', '10-feb', '11-feb', '12-feb', '13-feb', '14-feb', '15-feb', '16-feb', '17-feb', '18-feb', '19-feb', '20-feb', '21-feb', '22-feb', '23-feb', '24-feb', '25-feb', '26-feb', '27-feb', '28-feb', '29-feb', '1-Marzo', '2-Marzo', '3-Marzo', '4-Marzo', '5-Marzo', '6-Marzo', '7-Marzo', '8-Marzo', '9-Marzo', '10-Marzo', '11-Marzo', '12-Marzo', '13-Marzo', '14-Marzo', '15-Marzo', '16-Marzo', '17-Marzo', '18-Marzo', '19-Marzo', '20-Marzo', '21-Marzo', '22-Marzo', '23-Marzo', '24-Marzo', '25-Marzo', '26-Marzo', '27-Marzo', '28-Marzo', '29-Marzo', '30-Marzo', '31-Marzo', '1-Abril', '2-Abril', '3-Abril', '4-Abril', '5-Abril', '6-Abril', '7-Abril', '8-Abril', '9-Abril', '10-Abril', '11-Abril', '12-Abril', '13-Abril', '14- Abril', '15-Abril', '16-Abril', '17-Abril', '18-Abril'],
    datasets: [{
      label: 'Casos Sospechosos',
      data: [8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 11, 11, 11, 12, 15, 15, 15, 17, 19, 19, 24, 26, 30, 33, 34, 41, 44, 44, 52, 60, 72, 85, 91, 125, 143, 169, 197, 232, 272, 317, 348, 412, 449, 520, 589, 660, 752, 868, 980, 1095, 1215, 1338, 1443, 1520, 1601, 1669, 1733, 1818, 1902, 1992, 2052, 2116, 2206, 2273, 2367, 2486, 2595, 2694, 2740, 2752, 2753],
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
    labels: ['Abasolo', 'Acambaro', 'Celaya', 'Cortazar', 'Guanajuato', 'Irapuato', 'León', 'Moroleon', 'Penjamo', 'Salamanca', 'San Luis de la Paz', 'San Miguel de Ayende', 'Silao', 'Tarimoro', 'Uriangato', 'Valle de Santiago', 'Villagrán', 'Yuridia'],
    datasets: [{
      label: 'Contagiados',
      data: [
        2, // Abasolo
        1, // Acambaro
        9, // Celaya
        3, // Cortazar
        7, // Guanajuato
        20, // Irapuato
        42, // Leon
        4, // Moroleon
        2, // Penjamo
        35, // Salamanca
        1, // San Luis de la Paz
        3, // San Miguel de Ayende
        1, // Silao
        1, // Tarimoro
        5, // Uriangato
        1, // Valle de Santiago
        1, // Villagrán
        3 // Yuriria
      ],
      backgroundColor: 'rgba(255, 0, 0, .7)',
      borderColor: 'rgb(255, 0, 0)',
      borderWidth: 1
    },
    {
      label: 'Recuperados',
      data: [
        0, // Abasolo
        1, // Acambaro
        4, // Celaya
        0, // Cortazar
        2, // Guanajuato
        5, // Irapuato
        23, // Leon
        0, // Moroleon
        0, // Penjamo
        2, // Salamanca
        1, // San Luis de la Paz
        1, // San Miguel de Ayende
        1, // Silao
        0, // Tarimoro
        0, // Uriangato
        1, // Valle de Santiago
        0, // Villagrán
        0 // Yuriria
      ],
      backgroundColor: 'rgba(35, 155, 86, .7)',
      borderColor: 'rgb(35, 155, 86)',
      borderWidth: 1
    },
    {
      label: 'Fallecidos',
      data: [
        0, // Abasolo
        1, // Acambaro
        1, // Celaya
        0, // Cortazar
        1, // Guanajuato
        0, // Irapuato
        0, // Leon
        0, // Moroleon
        1, // Penjamo
        5, // Salamanca
        0, // San Luis de la Paz
        0, // San Miguel de Ayende
        0, // Silao
        0, // Tarimoro
        0, // Uriangato
        0, // Valle de Santiago
        0, // Villagrán
        0 // Yuriria
      ],
      backgroundColor: 'rgba(77, 77, 77, 0.5)',
      borderColor: 'rgb(77, 77, 77)',
    }
  ],

  }, // data
});
