var contagiados = document.getElementById('contagiados').getContext('2d');

var lineaContagiados = new Chart( contagiados, {
    type: 'line',
    data: {
      labels: ['15-Marzo','16-Marzo', '17-Marzo', '18-Marzo', '19-Marzo', '20-Marzo', '21-Marzo', '22-Marzo', '23-Marzo', '24-Marzo', '25-Marzo', '26-Marzo', '27-Marzo', '28-Marzo', '29-Marzo', '30-Marzo', '31-Marzo', '1-Abril', '2-Abril', '3-Abril', '4-Abril', '5-Abril', '6-Abril', '7-Abril', '8-Abril', '9-Abril', '10-Abril', '11-Abril', '12-Abril', '13-Abril', '14- Abril', '15-Abril', '16-Abril', '17-Abril', '18-Abril', '19-Abril', '20-Abril', '21-Abril', '22-Abril', '23-Abril', '24-Abril', '25-Abril', '26-Abril', '27-Abril'],
      datasets: [{
        label: 'Contagiados',
        data: [0, 1, 1, 4, 4, 4, 4, 7, 9, 13, 25, 31, 31, 37, 37, 43, 46, 49, 50, 52, 54, 54, 58, 62, 73, 78, 88, 92, 93, 102, 103, 108, 113, 140, 143, 164, 181, 198, 215, 236, 240, 246, 260, sumaContagiados ],
        backgroundColor:'rgba(255, 0, 0, 0.0)',
        borderColor: 'rgb(255, 0, 0)',
        borderWidth: 3
      }, // confirmados
      {
        label: 'Recuperados',
        data: [, , , , , , , , , , , , , , , , 0, 16, 16, 16, 17, 17, 17, 17, 19, 21, 28, 28, 29, 33, 35, 35, 36, 38, 40, 41, 44, 49, 50, 59, 59, 67, 74, sumaRecuperados],
        backgroundColor:'rgba(35, 155, 86, 0.0)',
        borderColor: 'rgb(35, 155, 86)',
        borderWidth: 3
      }, // recuperados
      {
        label: 'Fallecidos',
        data: [, , , , , , , , , , , , , , , , , , , , , 0, 2, 3, 3, 4, 5, 5, 5, 5, 6, 6, 7, 8, 9, 10, 10, 10, 12, 19, 19, 19, 22, sumaMuertes],
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
    labels: ['1-feb', '2-feb', '3-feb', '4-feb', '5-feb', '6-feb', '7-feb', '8-feb', '9-feb', '10-feb', '11-feb', '12-feb', '13-feb', '14-feb', '15-feb', '16-feb', '17-feb', '18-feb', '19-feb', '20-feb', '21-feb', '22-feb', '23-feb', '24-feb', '25-feb', '26-feb', '27-feb', '28-feb', '29-feb', '1-Marzo', '2-Marzo', '3-Marzo', '4-Marzo', '5-Marzo', '6-Marzo', '7-Marzo', '8-Marzo', '9-Marzo', '10-Marzo', '11-Marzo', '12-Marzo', '13-Marzo', '14-Marzo', '15-Marzo', '16-Marzo', '17-Marzo', '18-Marzo', '19-Marzo', '20-Marzo', '21-Marzo', '22-Marzo', '23-Marzo', '24-Marzo', '25-Marzo', '26-Marzo', '27-Marzo', '28-Marzo', '29-Marzo', '30-Marzo', '31-Marzo', '1-Abril', '2-Abril', '3-Abril', '4-Abril', '5-Abril', '6-Abril', '7-Abril', '8-Abril', '9-Abril', '10-Abril', '11-Abril', '12-Abril', '13-Abril', '14- Abril', '15-Abril', '16-Abril', '17-Abril', '18-Abril', '19-Abril', '20-Abril', '21-Abril', '22-Abril', '23-Abril', '24-Abril', '25-Abril', '26-Abril', '27-Abril'],
    datasets: [{
      label: 'Casos Sospechosos',
      data: [8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 11, 11, 11, 12, 15, 15, 15, 17, 19, 19, 24, 26, 30, 33, 34, 41, 44, 44, 52, 60, 72, 85, 91, 125, 143, 169, 197, 232, 273, 319, 352, 417, 454, 526, 602, 675, 771, 887, 1005, 1121, 1243, 1372, 1479, 1563, 1646, 1710, 1776, 1862, 1955, 2055, 2117, 2182, 2277, 2350, 2460, 2609, 2770, 2934, 3070, 3193, 3338, 3555, 3843, 4039, 4241, 4366, 4461 , 4538, 4600, 4613],
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
    labels: ['Abasolo', 'Acambaro', 'Celaya', 'Comonfort', 'Cortazar', 'Guanajuato', 'Irapuato', 'Jerecuaro', 'León', 'Moroleon', 'Penjamo', 'Romita', 'Salamanca', 'Salvatierra', 'San Luis de la Paz', 'San Miguel de Ayende', 'Juventino Rosas', 'Silao', 'Tarimoro', 'Uriangato', 'Valle de Santiago', 'Villagrán', 'Yuridia', 'Foraneos'],
    datasets: [{
      label: 'Contagiados',
      data: [
        abasolo.confirmados,
        acambaro.confirmados,
        celaya.confirmados,
        comonfort.confirmados,
        cortazar.confirmados,
        guanajuato.confirmados,
        irapuato.confirmados,
        jerecuaro.confirmados,
        leon.confirmados,
        moroleon.confirmados,
        penjamo.confirmados,
        romita.confirmados,
        salamanca.confirmados,
        salvaTierra.confirmados,
        sanLuis.confirmados,
        sanMiguel.confirmados,
        juventino.confirmados,
        silao.confirmados,
        tarimoro.confirmados,
        uriangato.confirmados,
        valle.confirmados,
        villagran.confirmados,
        yuriria.confirmados,
        foraneos.confirmados
      ],
      backgroundColor: 'rgba(255, 0, 0, .7)',
      borderColor: 'rgb(255, 0, 0)',
      borderWidth: 1
    },
    {
      label: 'Recuperados',
      data: [
        abasolo.recuperados,
        acambaro.recuperados,
        celaya.recuperados,
        comonfort.recuperados,
        cortazar.recuperados,
        guanajuato.recuperados,
        irapuato.recuperados,
        jerecuaro.recuperados,
        leon.recuperados,
        moroleon.recuperados,
        penjamo.recuperados,
        romita.recuperados,
        salamanca.recuperados,
        salvaTierra.recuperados,
        sanLuis.recuperados,
        sanMiguel.recuperados,
        juventino.recuperados,
        silao.recuperados,
        tarimoro.recuperados,
        uriangato.recuperados,
        valle.recuperados,
        villagran.recuperados,
        yuriria.recuperados,
        foraneos.recuperados
      ],
      backgroundColor: 'rgba(35, 155, 86, .7)',
      borderColor: 'rgb(35, 155, 86)',
      borderWidth: 1
    },
    {
      label: 'Fallecidos',
      data: [
        abasolo.fallecidos,
        acambaro.fallecidos,
        celaya.fallecidos,
        comonfort.fallecidos,
        cortazar.fallecidos,
        guanajuato.fallecidos,
        irapuato.fallecidos,
        jerecuaro.fallecidos,
        leon.fallecidos,
        moroleon.fallecidos,
        penjamo.fallecidos,
        romita.fallecidos,
        salamanca.fallecidos,
        salvaTierra.fallecidos,
        sanLuis.fallecidos,
        sanMiguel.fallecidos,
        juventino.fallecidos,
        silao.fallecidos,
        tarimoro.fallecidos,
        uriangato.fallecidos,
        valle.fallecidos,
        villagran.fallecidos,
        yuriria.fallecidos,
        foraneos.fallecidos
      ],
      backgroundColor: 'rgba(77, 77, 77, 0.5)',
      borderColor: 'rgb(77, 77, 77)',
    }
  ],

  }, // data
});
