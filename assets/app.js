// =========================
// CAMBIO DE VISTAS
// =========================
function mostrarVista(id){

const vistas = document.querySelectorAll(".vista");

vistas.forEach(v => v.style.display="none");

if(id === "inicio"){
document.getElementById("inicio").style.display="block";
document.getElementById("modulos").style.display="block";
}else{
document.getElementById(id).style.display="block";
}

}
// =========================
// BASE DE DATOS SIMULADA
// =========================

const mercados = [
{ id:1, nombre:"Mercado La Dalia", alcaldia:"Cuauhtémoc"},
{ id:2, nombre:"Mercado Bugambilia", alcaldia:"Cuauhtémoc"},
{ id:3, nombre:"Mercado San Juan", alcaldia:"Cuauhtémoc"}
];

const locales = [
{ id:1, numero:12, tipo:"Frutas", estado:"Ocupado"},
{ id:2, numero:20, tipo:"Carnes", estado:"Disponible"}
];

const locatarios = [
{ id:1, nombre:"Juan Pérez", telefono:"5512345678"},
{ id:2, nombre:"María López", telefono:"5587654321"}
];

const pagos = [
{ id:1, fecha:"2024-05-01", monto:"1500"},
{ id:2, fecha:"2024-05-15", monto:"1500"}
];

const inspecciones = [
{ id:1, fecha:"2024-06-10", resultado:"Aprobado"},
{ id:2, fecha:"2024-06-15", resultado:"Condicionado"}
];


// =========================
// CREAR TABLAS DINÁMICAS
// =========================

function crearTabla(datos){

let html = "<table>";

html += "<tr>";

Object.keys(datos[0]).forEach(col=>{
html += `<th>${col}</th>`;
});

html += "</tr>";

datos.forEach(fila=>{

html += "<tr>";

Object.values(fila).forEach(valor=>{
html += `<td>${valor}</td>`;
});

html += "</tr>";

});

html += "</table>";

return html;

}


// =========================
// CARGAR DATOS EN LA PAGINA
// =========================

document.getElementById("tablaMercados").innerHTML = crearTabla(mercados);

document.getElementById("tablaLocales").innerHTML = crearTabla(locales);

document.getElementById("tablaLocatarios").innerHTML = crearTabla(locatarios);

document.getElementById("tablaPagos").innerHTML = crearTabla(pagos);

document.getElementById("tablaInspecciones").innerHTML = crearTabla(inspecciones);