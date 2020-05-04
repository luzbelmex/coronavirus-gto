var verde = '#1e8449';
var amarillo = '#ffc300';
var rojo = 'red';

function Municipio(nombre, sospechosos, confirmados, recuperados, fallecidos) {
  this.nombre = nombre;
  this.sospechosos = sospechosos;
  this.confirmados = confirmados;
  this.recuperados = recuperados;
  this.fallecidos = fallecidos;
}

var abasolo = new Municipio('Abasolo', 2, 2, 1, 0);
var acambaro = new Municipio('Acambaro', 5, 16, 4, 3 );
var apaseoA = new Municipio('Apaseo el Alto', 1, 2, 0, 0);
var apaseoG = new Municipio('Apaseo el Grande', 7, 3, 0, 0);
var atargea = new Municipio('Atargea', 0, 0, 0, 0);
var celaya = new Municipio('Celaya', 40, 27, 6, 5);
var comonfort = new Municipio('Comonfort', 1, 1, 0, 0);
var coroneo = new Municipio('Coroneo', 7, 1, 0, 0);
var cortazar = new Municipio('Cortazar', 2, 9, 0, 3);
var cueramaro = new Municipio('Cueramaro', 2, 0, 0, 0);
var doctorM = new Municipio ('Doctor Mora', 2, 1, 0, 0);
var doloresH = new Municipio('Dolores Hidalgo', 2, 2, 0, 0);
var guanajuato = new Municipio('Guanajuato', 15, 10, 7, 2);
var huanimaro = new Municipio('Huanimaro', 2, 0, 0, 0);
var irapuato = new Municipio('Irapuato', 28, 42, 18, 0);
var jaral = new Municipio('Jaral del Progreso', 4, 2, 0, 1);
var jerecuaro = new Municipio('Jérecuaro', 13, 1, 0, 0);
var leon = new Municipio('Leon', 388, 101, 38, 2);
var manuel = new Municipio('Manuel Doblado', 1, 0, 0, 0);
var moroleon = new Municipio('Moroleon', 7, 14, 4, 3);
var ocampo = new Municipio('Ocampo', 2, 0, 0, 0);
var penjamo = new Municipio('Pénjamo', 21, 8, 3, 1);
var pueblo = new Municipio('Pueblo Nuevo', 5, 0, 0, 0);
var purisima = new Municipio('Purísima del Rincón', 0, 0, 0, 0);
var romita = new Municipio('Romita', 4, 16, 1, 1);
var salamanca = new Municipio('Salamanca', 9, 63, 24, 6);
var salvaTierra = new Municipio('Salvatierra', 18, 6, 0, 1);
var sanDiego = new Municipio('San Diego de la Unión', 9, 1, 0, 0);
var sanFelipe = new Municipio('San Felipe', 5, 3, 0, 0);
var sanFrancisco = new Municipio('San Francisco del Rincón', 5, 2, 0, 0);
var sanJose = new Municipio('San Jose de Iturbide', 0, 0, 0, 0);
var sanLuis = new Municipio('San Luis de la Paz', 8, 7, 1, 2);
var sanMiguel = new Municipio('San Miguel de Ayende', 2, 8, 3, 0);
var santaC = new Municipio('Santa Catarina', 0, 0, 0, 0);
var juventino = new Municipio('Juventino Rosas', 5, 3, 0, 1);
var santiago = new Municipio('Santiago Maravatío', 1, 1, 0, 0);
var silao = new Municipio('Silao', 2, 9, 3, 1);
var tarandacuao = new Municipio('Tarandacuao', 3, 0, 0, 0);
var tarimoro = new Municipio('Tarimoro', 5, 1, 0, 0);
var tierraB = new Municipio('Tierra Blanca', 0, 0, 0, 0);
var uriangato = new Municipio('Uriangato', 1, 12, 5, 0);
var valle = new Municipio('Valle de Santiago', 3, 7, 1, 1);
var victoria = new Municipio('Victoria', 1, 0, 0, 0);
var villagran = new Municipio('Villagrán', 2, 1, 1, 0);
var xichu = new Municipio('Xichu', 0, 0, 0, 0);
var yuriria = new Municipio('Yuriria', 1, 7, 1, 0);
var foraneos = new Municipio('Foraneos', 5, 2, 0, 0);

var confirmados = document.getElementById('confirmados');
var sumaContagiados =  abasolo.confirmados + acambaro.confirmados + apaseoA.confirmados + apaseoG.confirmados + atargea.confirmados + celaya.confirmados + comonfort.confirmados + coroneo.confirmados + cortazar.confirmados + cueramaro.confirmados + doctorM.confirmados + doloresH.confirmados + guanajuato.confirmados + huanimaro.confirmados + irapuato.confirmados + jaral.confirmados + jerecuaro.confirmados + leon.confirmados + manuel.confirmados + moroleon.confirmados + ocampo.confirmados + penjamo.confirmados + pueblo.confirmados + purisima.confirmados + romita.confirmados + salamanca.confirmados + salvaTierra.confirmados + sanDiego.confirmados + sanFelipe.confirmados + sanFrancisco.confirmados + sanJose.confirmados + sanLuis.confirmados + sanMiguel.confirmados + santaC.confirmados + juventino.confirmados + santiago.confirmados + silao.confirmados + tarandacuao.confirmados + tarimoro.confirmados + tierraB.confirmados + uriangato.confirmados + valle.confirmados + victoria.confirmados + villagran.confirmados + xichu.confirmados + yuriria.confirmados + foraneos.confirmados;

confirmados.innerHTML = sumaContagiados;

var investigaciones = document.getElementById('investigaciones');
var sumaSospechosos =  abasolo.sospechosos + acambaro.sospechosos + apaseoA.sospechosos + apaseoG.sospechosos + atargea.sospechosos + celaya.sospechosos + comonfort.sospechosos + coroneo.sospechosos + cortazar.sospechosos + cueramaro.sospechosos + doctorM.sospechosos + doloresH.sospechosos + guanajuato.sospechosos + huanimaro.sospechosos + irapuato.sospechosos + jaral.sospechosos + jerecuaro.sospechosos + leon.sospechosos + manuel.sospechosos + moroleon.sospechosos + ocampo.sospechosos + penjamo.sospechosos + pueblo.sospechosos + purisima.sospechosos + romita.sospechosos + salamanca.sospechosos + salvaTierra.sospechosos + sanDiego.sospechosos + sanFelipe.sospechosos + sanFrancisco.sospechosos + sanJose.sospechosos + sanLuis.sospechosos + sanMiguel.sospechosos + santaC.sospechosos + juventino.sospechosos + santiago.sospechosos + silao.sospechosos + tarandacuao.sospechosos + tarimoro.sospechosos + tierraB.sospechosos + uriangato.sospechosos + valle.sospechosos + victoria.sospechosos + villagran.sospechosos + xichu.sospechosos + yuriria.sospechosos + foraneos.sospechosos;

investigaciones.innerHTML = sumaSospechosos;

var recuperaciones = document.getElementById('recuperaciones');
var sumaRecuperados =  abasolo.recuperados + acambaro.recuperados + apaseoA.recuperados + apaseoG.recuperados + atargea.recuperados + celaya.recuperados + comonfort.recuperados + coroneo.recuperados + cortazar.recuperados + cueramaro.recuperados + doctorM.recuperados + doloresH.recuperados + guanajuato.recuperados + huanimaro.recuperados + irapuato.recuperados + jaral.recuperados + jerecuaro.recuperados + leon.recuperados + manuel.recuperados + moroleon.recuperados + ocampo.recuperados + penjamo.recuperados + pueblo.recuperados + purisima.recuperados + romita.recuperados + salamanca.recuperados + salvaTierra.recuperados + sanDiego.recuperados + sanFelipe.recuperados + sanFrancisco.recuperados + sanJose.recuperados + sanLuis.recuperados + sanMiguel.recuperados + santaC.recuperados + juventino.recuperados + santiago.recuperados + silao.recuperados + tarandacuao.recuperados + tarimoro.recuperados + tierraB.recuperados + uriangato.recuperados + valle.recuperados + victoria.recuperados + villagran.recuperados + xichu.recuperados + yuriria.recuperados + foraneos.recuperados;

recuperaciones.innerHTML = sumaRecuperados;

var difuntos = document.getElementById('difuntos');
var sumaMuertes =  abasolo.fallecidos + acambaro.fallecidos + apaseoA.fallecidos + apaseoG.fallecidos + atargea.fallecidos + celaya.fallecidos + comonfort.fallecidos + coroneo.fallecidos + cortazar.fallecidos + cueramaro.fallecidos + doctorM.fallecidos + doloresH.fallecidos + guanajuato.fallecidos + huanimaro.fallecidos + irapuato.fallecidos + jaral.fallecidos + jerecuaro.fallecidos + leon.fallecidos + manuel.fallecidos + moroleon.fallecidos + ocampo.fallecidos + penjamo.fallecidos + pueblo.fallecidos + purisima.fallecidos + romita.fallecidos + salamanca.fallecidos + salvaTierra.fallecidos + sanDiego.fallecidos + sanFelipe.fallecidos + sanFrancisco.fallecidos + sanJose.fallecidos + sanLuis.fallecidos + sanMiguel.fallecidos + santaC.fallecidos + juventino.fallecidos + santiago.fallecidos + silao.fallecidos + tarandacuao.fallecidos + tarimoro.fallecidos + tierraB.fallecidos + uriangato.fallecidos + valle.fallecidos + victoria.fallecidos + villagran.fallecidos + xichu.fallecidos + yuriria.fallecidos + foraneos.fallecidos;

difuntos.innerHTML = sumaMuertes;

var abasoloMap = L.circle([20.452199, -101.529024],{
    color: rojo,
    fillColor: rojo,
    fillOpacity: 0.5,
    radius: abasolo.confirmados * 100
}).addTo(map).bindPopup('Abasolo');

var acambaroMap = L.circle([20.035770, -100.716935],{
    color: rojo,
    fillColor: rojo,
    fillOpacity: 0.5,
    radius: acambaro.confirmados * 100
}).addTo(map).bindPopup('Acámbaro');

var apaseoAMap = L.circle([20.458464, -100.621415],{
    color: rojo,
    fillColor: rojo,
    fillOpacity: 0.5,
    radius: apaseoA.confirmados * 100
}).addTo(map).bindPopup('Apaseo el Alto');

var apaseoGMap = L.circle([20.545219, -100.686487],{
    color: rojo,
    fillColor: rojo,
    fillOpacity: 0.5,
    radius: apaseoG.confirmados * 100
}).addTo(map).bindPopup('Apaseo el Grande');

var atargeaMap = L.circle([21.266927, -99.719153],{
    color: verde,
    fillColor: verde,
    fillOpacity: 0.5,
    radius: 0 * 100
}).addTo(map).bindPopup('Atargea');

var celayaMap = L.circle([20.525643, -100.813928],{
    color: rojo,
    fillColor: rojo,
    fillOpacity: 0.5,
    radius: celaya.confirmados * 100
}).addTo(map).bindPopup('Celaya');

var comonfortMap = L.circle([20.714684, -100.758431],{
    color: rojo,
    fillColor: rojo,
    fillOpacity: 0.5,
    radius: comonfort.confirmados * 100
}).addTo(map).bindPopup('Comonfort');

var coroneoMap = L.circle([20.201288, -100.368406],{
    color: rojo,
    fillColor: rojo,
    fillOpacity: 0.5,
    radius: coroneo.confirmados * 100
}).addTo(map).bindPopup('Coroneo');

var cortazarMap = L.circle([20.478907, -100.959399],{
    color: rojo,
    fillColor: rojo,
    fillOpacity: 0.5,
    radius: cortazar.confirmados * 100
}).addTo(map).bindPopup('Cortazar');

 var cueramaroMap = L.circle([20.626446, -101.671127],{
     color: amarillo,
     fillColor: amarillo,
     fillOpacity: 0.5,
     radius: cueramaro.sospechosos * 100
}).addTo(map).bindPopup('Cueramaro');

 var doctorMap = L.circle([21.142381, -100.319464],{
    color: rojo,
    fillColor: rojo,
    fillOpacity: 0.5,
    radius: doctorM.confirmados * 100
}).addTo(map).bindPopup('Doctor Mora');

var doloresMap = L.circle([21.156256, -100.934015],{
    color: rojo,
    fillColor: rojo,
    fillOpacity: 0.5,
    radius: doloresH.confirmados * 100
}).addTo(map).bindPopup('Dolores Hidalgo');

var guanajuatoMap = L.circle([21.018412, -101.255928],{
    color: rojo,
    fillColor: rojo,
    fillOpacity: 0.5,
    radius: guanajuato.confirmados * 100
}).addTo(map).bindPopup('Guanajuato');

 var huanimaroMap = L.circle([20.368187, -101.496742],{
     color: amarillo,
     fillColor: amarillo,
     fillOpacity: 0.5,
     radius: huanimaro.sospechosos * 100
}).addTo(map).bindPopup('Huanimaro');

var irapuatoMap = L.circle([20.675245, -101.344379],{
    color: rojo,
    fillColor: rojo,
    fillOpacity: 0.5,
    radius: irapuato.confirmados * 100
}).addTo(map).bindPopup('Irapuato');

 var jaralMap = L.circle([20.371957, -101.064334],{
     color: rojo,
     fillColor: rojo,
     fillOpacity: 0.5,
     radius: jaral.confirmados * 100
}).addTo(map).bindPopup('Jaral del Progreso');

 var jerecuaroMap = L.circle([20.150831, -100.508798],{
     color: rojo,
     fillColor: rojo,
     fillOpacity: 0.5,
     radius: jerecuaro.confirmados * 100
}).addTo(map).bindPopup('Jerecuaro');

var leonMap = L.circle([21.121830, -101.682481],{
    color: rojo,
    fillColor: rojo,
    fillOpacity: 0.5,
    radius: leon.confirmados * 100
}).addTo(map).bindPopup('León');

 var manuelDobladoMap = L.circle([20.729548, -101.953144],{
     color: amarillo,
     fillColor: amarillo,
     fillOpacity: 0.5,
     radius: manuel.sospechosos * 100
}).addTo(map).bindPopup('Manuel Doblado');

 var moroleonMap = L.circle([20.125079, -101.196217],{
     color: rojo,
     fillColor: rojo,
     fillOpacity: 0.5,
     radius: moroleon.confirmados * 100
}).addTo(map).bindPopup('Moroleon');

var ocampoMap = L.circle([21.647678, -101.478420],{
    color: amarillo,
    fillColor: amarillo,
    fillOpacity: 0.5,
    radius: ocampo.sospechosos * 100
}).addTo(map).bindPopup('Ocampo');

var penjamoMap = L.circle([20.431298, -101.722123],{
    color: rojo,
    fillColor: rojo,
    fillOpacity: 0.5,
    radius: penjamo.confirmados * 100
}).addTo(map).bindPopup('Pénjamo');

 var puebloMap = L.circle([20.526844, -101.371324],{
     color: amarillo,
     fillColor: amarillo,
     fillOpacity: 0.5,
     radius: pueblo.sospechosos
}).addTo(map).bindPopup('Pueblo Nuevo');

 var purisimaMap = L.circle([20.889676, -101.912435],{
     color: verde,
     fillColor: verde,
     fillOpacity: 0.5,
     radius: 0 * 100
}).addTo(map).bindPopup('Purisima del Rincon');

 var romitaMap = L.circle([20.872123, -101.51667],{
     color: rojo,
     fillColor: rojo,
     fillOpacity: 0.5,
     radius: romita.confirmados * 100
}).addTo(map).bindPopup('Romita');

var salamancaMap = L.circle([20.572517, -101.191197],{
    color: rojo,
    fillColor: rojo,
    fillOpacity: 0.5,
    radius: salamanca.confirmados * 100
}).addTo(map).bindPopup('Salamanca');

var salvatierraMap = L.circle([20.211976, -100.880958],{
    color: rojo,
    fillColor: rojo,
    fillOpacity: 0.5,
    radius: salvaTierra.confirmados * 100
}).addTo(map).bindPopup('Salvatierra');

 var sanDiegoMap = L.circle([21.467901, -100.872875],{
     color: rojo,
     fillColor: rojo,
     fillOpacity: 0.5,
     radius: sanDiego.confirmados * 100
}).addTo(map).bindPopup('San Diego de la Unión');

 var sanFelipeMap = L.circle([21.478435, -101.213493],{
     color: rojo,
     fillColor: rojo,
     fillOpacity: 0.5,
     radius: sanFelipe.confirmados * 100
}).addTo(map).bindPopup('San Felipe');

var sfrMap = L.circle([21.018723, -101.857413],{
    color: rojo,
    fillColor: rojo,
    fillOpacity: 0.5,
    radius: sanFrancisco.confirmados * 100
}).addTo(map).bindPopup('San Fancisco del Rincón');

 var sanJoseMap = L.circle([20.998587, -100.385738],{
     color: verde,
     fillColor: verde,
     fillOpacity: 0.5,
     radius: 0
}).addTo(map).bindPopup('San Jose Iturbide');

var slpMap = L.circle([21.297578, -100.517204],{
    color: rojo,
    fillColor: rojo,
    fillOpacity: 0.5,
    radius: sanLuis.confirmados * 100
}).addTo(map).bindPopup('San Luis de la Paz');

var smaMap = L.circle([20.913036, -100.745744],{
    color: rojo,
    fillColor: rojo,
    fillOpacity: 0.5,
    radius: sanMiguel.confirmados * 100
}).addTo(map).bindPopup('San Miguel de Ayende');

 var santaMap = L.circle([21.142705, -100.071756],{
    color: verde,
    fillColor: verde,
    fillOpacity: 0.5,
    radius: 0 * 100
}).addTo(map).bindPopup('Santa Catarina');

 var santaCJRMap = L.circle([20.644057, -100.993401],{
     color: rojo,
     fillColor: rojo,
     fillOpacity: 0.5,
     radius: juventino.confirmados * 100
}).addTo(map).bindPopup('Santa Cruz de Juventino Rosas');

 var santiagoMap = L.circle([20.172562, -100.993369],{
    color: rojo,
    fillColor: rojo,
    fillOpacity: 0.5,
    radius: santiago.confirmados * 100
}).addTo(map).bindPopup('Santiago Maravatío');

var silaoMap = L.circle([20.947407, -101.425863],{
    color: rojo,
    fillColor: rojo,
    fillOpacity: 0.5,
    radius: silao.confirmados * 100
}).addTo(map).bindPopup('Silao');

 var tarandacuaoMap = L.circle([20.003777, -100.519427],{
     color: amarillo,
     fillColor: amarillo,
     fillOpacity: 0.5,
     radius: tarandacuao.sospechosos * 100
}).addTo(map).bindPopup('Tarandacuao');

 var tarimoroMap = L.circle([20.284702, -100.754054],{
     color: rojo,
     fillColor: rojo,
     fillOpacity: 0.5,
     radius: tarimoro.confirmados * 100
}).addTo(map).bindPopup('Tarimoro');

 var tierraBlancaMap = L.circle([21.098564, -100.16056],{
     color: verde,
     fillColor: verde,
     fillOpacity: 0.5,
     radius: 0 * 100
}).addTo(map).bindPopup('Tierra Blanca');

 var uriangatoMap = L.circle([20.141507, -101.173776],{
     color: rojo,
     fillColor: rojo,
     fillOpacity: 0.5,
     radius: uriangato.confirmados * 100
}).addTo(map).bindPopup('Uriangato');

var vdsMap = L.circle([20.390977, -101.193464],{
    color: rojo,
    fillColor: rojo,
    fillOpacity: 0.5,
    radius: valle.confirmados * 100
}).addTo(map).bindPopup('Valle de Santiago');

 var victoriaMap = L.circle([21.211494, -100.216496],{
     color: amarillo,
     fillColor: amarillo,
     fillOpacity: 0.5,
     radius: victoria.sospechosos * 100
}).addTo(map).bindPopup('Victoria');

 var villagranMap = L.circle([20.516307, -100.997578],{
     color: rojo,
     fillColor: rojo,
     fillOpacity: 0.5,
     radius: villagran.confirmados * 100
}).addTo(map).bindPopup('Villagrán');

 var xichuMap = L.circle([21.299218, -100.056449],{
     color: verde,
     fillColor: verde,
     fillOpacity: 0.5,
     radius: 0 * 100
}).addTo(map).bindPopup('Xichú');

 var yuririaMap = L.circle([20.211997, -101.131539],{
    color: rojo,
    fillColor: rojo,
    fillOpacity: 0.5,
    radius: yuriria.confirmados * 100
}).addTo(map).bindPopup('Yuriria');
