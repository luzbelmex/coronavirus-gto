var contagiados = document.getElementById('contagiados').getContext('2d');

var lineaContagiados = new Chart( contagiados, {
    type: 'line',
    data: {
      labels: ['15-Marzo','16-Marzo', '17-Marzo', '18-Marzo', '19-Marzo', '20-Marzo', '21-Marzo', '22-Marzo', '23-Marzo', '24-Marzo', '25-Marzo', '26-Marzo', '27-Marzo', '28-Marzo', '29-Marzo', '30-Marzo', '31-Marzo', '1-Abril', '2-Abril', '3-Abril', '4-Abril', '5-Abril', '6-Abril', '7-Abril', '8-Abril', '9-Abril', '10-Abril', '11-Abril', '12-Abril', '13-Abril', '14- Abril', '15-Abril', '16-Abril', '17-Abril', '18-Abril', '19-Abril', '20-Abril', '21-Abril'],
      datasets: [{
        label: 'Contagiados',
        data: [0, 1, 1, 4, 4, 4, 4, 7, 9, 13, 25, 31, 31, 37, 37, 43, 46, 49, 50, 52, 54, 54, 58, 62, 73, 78, 88, 92, 93, 102, 103, 108, 113, 140, 143, 164, 181, 198 ],
        backgroundColor:'rgba(255, 0, 0, 0.0)',
        borderColor: 'rgb(255, 0, 0)',
        borderWidth: 3
      }, // confirmados
      {
        label: 'Recuperados',
        data: [, , , , , , , , , , , , , , , , 0, 16, 16, 16, 17, 17, 17, 17, 19, 21, 28, 28, 29, 33, 35, 35, 36, 38, 40, 41, 44, 49 ],
        backgroundColor:'rgba(35, 155, 86, 0.0)',
        borderColor: 'rgb(35, 155, 86)',
        borderWidth: 3
      }, // recuperados
      {
        label: 'Fallecidos',
        data: [, , , , , , , , , , , , , , , , , , , , , 0, 2, 3, 3, 4, 5, 5, 5, 5, 6, 6, 7, 8, 9, 10, 10, 10],
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
    labels: ['1-feb', '2-feb', '3-feb', '4-feb', '5-feb', '6-feb', '7-feb', '8-feb', '9-feb', '10-feb', '11-feb', '12-feb', '13-feb', '14-feb', '15-feb', '16-feb', '17-feb', '18-feb', '19-feb', '20-feb', '21-feb', '22-feb', '23-feb', '24-feb', '25-feb', '26-feb', '27-feb', '28-feb', '29-feb', '1-Marzo', '2-Marzo', '3-Marzo', '4-Marzo', '5-Marzo', '6-Marzo', '7-Marzo', '8-Marzo', '9-Marzo', '10-Marzo', '11-Marzo', '12-Marzo', '13-Marzo', '14-Marzo', '15-Marzo', '16-Marzo', '17-Marzo', '18-Marzo', '19-Marzo', '20-Marzo', '21-Marzo', '22-Marzo', '23-Marzo', '24-Marzo', '25-Marzo', '26-Marzo', '27-Marzo', '28-Marzo', '29-Marzo', '30-Marzo', '31-Marzo', '1-Abril', '2-Abril', '3-Abril', '4-Abril', '5-Abril', '6-Abril', '7-Abril', '8-Abril', '9-Abril', '10-Abril', '11-Abril', '12-Abril', '13-Abril', '14- Abril', '15-Abril', '16-Abril', '17-Abril', '18-Abril', '19-Abril', '20-Abril'],
    datasets: [{
      label: 'Casos Sospechosos',
      data: [8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 11, 11, 11, 12, 15, 15, 15, 17, 19, 19, 24, 26, 30, 33, 34, 41, 44, 44, 52, 60, 72, 85, 91, 125, 143, 169, 197, 232, 272, 317, 350, 414, 451, 522, 592, 663, 757, 872, 985, 1100, 1220, 1343, 1448, 1527, 1609, 1676, 1740, 1825, 1910, 2001, 2062, 2125, 2217, 2285, 2385, 2526, 2672, 2802, 2906, 2971, 3023, 3064, 3075],
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
    labels: ['Abasolo', 'Acambaro', 'Celaya', 'Comonfort', 'Cortazar', 'Guanajuato', 'Irapuato', 'León', 'Moroleon', 'Penjamo', 'Romita', 'Salamanca', 'Salvatierra', 'San Luis de la Paz', 'San Miguel de Ayende', 'Juventino Rosas', 'Silao', 'Tarimoro', 'Uriangato', 'Valle de Santiago', 'Villagrán', 'Yuridia'],
    datasets: [{
      label: 'Contagiados',
      data: [
        2, // Abasolo
        8, // Acambaro
        9, // Celaya
        1, // Comonfort
        7, // Cortazar
        7, // Guanajuato
        25, // Irapuato
        50, // Leon
        4, // Moroleon
        6, // Penjamo
        2, // Romita
        41, // Salamanca
        1, // Salvatierra
        3, // San Luis de la Paz
        7, // San Miguel de Ayende
        2, // Juventino Rosas
        3, // Silao
        1, // Tarimoro
        10, // Uriangato
        3, // Valle de Santiago
        1, // Villagrán
        4 // Yuriria
      ],
      backgroundColor: 'rgba(255, 0, 0, .7)',
      borderColor: 'rgb(255, 0, 0)',
      borderWidth: 1
    },
    {
      label: 'Recuperados',
      data: [
        0, // Abasolo
        0, // Acambaro
        4, // Celaya
        0, // Comonfort
        0, // Cortazar
        3, // Guanajuato
        5, // Irapuato
        29, // Leon
        0, // Moroleon
        0, // Penjamo
        0, // Romita
        3, // Salamanca
        0, // Salvatierra
        1, // San Luis de la Paz
        2, // San Miguel de Ayende
        0, // Juventino Rosas
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
        0, // Comonfort
        0, // Cortazar
        1, // Guanajuato
        0, // Irapuato
        0, // Leon
        0, // Moroleon
        1, // Penjamo
        0, // Romita
        6, // Salamanca
        0, // Salvatierra
        0, // San Luis de la Paz
        0, // San Miguel de Ayende
        0, // Juventino Rosas
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
