function Municipio(nombre, sospechosos, confirmados, recuperados, fallecidos) {
  this.nombre = nombre;
  this.sospechosos = sospechosos;
  this.confirmados = confirmados;
  this.recuperados = recuperados;
  this.fallecidos = fallecidos;
}

var abasolo = new Municipio('Abasolo', 12, 2, 0, 0);
var acambaro = new Municipio('Acambaro', 17, 10, 0, 3 );
var apaseoA = new Municipio('Apaseo el Alto', 3, 0, 0, 0);
var apaseoG = new Municipio('Apaseo el Grande', 11, 0, 0, 0);
var atargea = new Municipio('Atargea', 0, 0, 0, 0);
var celaya = new Municipio('Celaya', 37, 13, 5, 3);
var comonfort = new Municipio('Comonfort', 5, 1, 0, 0);
var coroneo = new Municipio('Coroneo', 15, 0, 0, 0);
var cortazar = new Municipio('Cortazar', 16, 9, 0, 1);
var cueramaro = new Municipio('Cueramaro', 8, 0, 0, 0);
var doctorM = new Municipio ('Doctor Mora', 0, 0, 0, 0);
var doloresH = new Municipio('Dolores Hidalgo', 8, 2, 0, 0);
var guanajuato = new Municipio('Guanajuato', 13, 8, 3, 1);
var huanimaro = new Municipio('Huanimaro', 4, 0, 0, 0);
var irapuato = new Municipio('Irapuato', 41, 28, 9, 0);
var jaral = new Municipio('Jaral del Progreso', 4, 0, 0, 0);
var jerecuaro = new Municipio('Jérecuaro', 19, 1, 0, 0);
var leon = new Municipio('Leon', 106, 66, 31, 2);
var manuel = new Municipio('Manuel Doblado', 0, 0, 0, 0);
var moroleon = new Municipio('Moroleon', 5, 6, 3, 1);
var ocampo = new Municipio('Ocampo', 5, 0, 0, 0);
var penjamo = new Municipio('Pénjamo', 22, 8, 0, 1);
var pueblo = new Municipio('Pueblo Nuevo', 1, 0, 0, 0);
var purisima = new Municipio('Purísima del Rincón', 2, 0, 0, 0);
var romita = new Municipio('Romita', 3, 4, 0, 1);
var salamanca = new Municipio('Salamanca', 10, 51, 14, 6);
var salvaTierra = new Municipio('Salvatierra', 30, 5, 0, 0);
var sanDiego = new Municipio('San Diego de la Unión', 7, 0, 0, 0);
var sanFelipe = new Municipio('San Felipe', 10, 0, 0, 0);
var sanFrancisco = new Municipio('San Francisco del Rincón', 0, 0, 0, 0);
var sanJose = new Municipio('San Jose de Iturbide', 1, 0, 0, 0);
var sanLuis = new Municipio('San Luis de la Paz', 9, 3, 1, 0);
var sanMiguel = new Municipio('San Miguel de Ayende', 4, 7, 3, 0);
var santaC = new Municipio('Santa Catarina', 0, 0, 0, 0);
var juventino = new Municipio('Juventino Rosas', 4, 2, 0, 0);
var santiago = new Municipio('Santiago Maravatío', 9, 0, 0, 0);
var silao = new Municipio('Silao', 2, 9, 1, 1);
var tarandacuao = new Municipio('Tarandacuao', 7, 0, 0, 0);
var tarimoro = new Municipio('Tarimoro', 11, 1, 0, 0);
var tierraB = new Municipio('Tierra Blanca', 0, 0, 0, 0);
var uriangato = new Municipio('Uriangato', 5, 11, 0, 0);
var valle = new Municipio('Valle de Santiago', 4, 4, 1, 0);
var victoria = new Municipio('Victoria', 0, 0, 0, 0);
var villagran = new Municipio('Villagrán', 7, 1, 0, 0);
var xichu = new Municipio('Xichu', 0, 0, 0, 0);
var yuriria = new Municipio('Yuriria', 1, 6, 1, 0);
var foraneos = new Municipio('Foraneos', 8, 2, 0, 0);

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
