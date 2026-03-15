/* ===================================================== */
/* MERCADITOSH - SCRIPT PRINCIPAL */
/* Este archivo controla:
   - navegación entre vistas
   - menú móvil
   - generación dinámica de tablas
   - datos simulados del sistema
/* ===================================================== */


/* ===================================================== */
/* CAMBIO DE VISTAS */
/* Permite mostrar u ocultar secciones del sistema */
/* Se ejecuta cuando el usuario da clic en el navbar */
/* ===================================================== */

function mostrarVista(id) {

    const vistas = document.querySelectorAll(".vista");

    // Oculta todas las vistas
    vistas.forEach(vista => vista.style.display = "none");

    // La vista de inicio muestra también los módulos
    if (id === "inicio") {
        document.getElementById("inicio").style.display = "block";
        document.getElementById("modulos").style.display = "block";
    } else {
        document.getElementById(id).style.display = "block";
    }
}


/* ===================================================== */
/* MENÚ RESPONSIVO */
/* Activa o desactiva el menú en dispositivos móviles */
/* ===================================================== */

function toggleMenu() {

    const menu = document.getElementById("menu");
    menu.classList.toggle("active");

}


/* ===================================================== */
/* BASE DE DATOS SIMULADA */
/* Datos estáticos para simular información del sistema */
/* En un sistema real vendrían de una base de datos */
/* ===================================================== */

const mercados = [
    { id: 1, nombre: "Mercado La Dalia", alcaldia: "Cuauhtémoc" },
    { id: 2, nombre: "Mercado Bugambilia", alcaldia: "Cuauhtémoc" },
    { id: 3, nombre: "Mercado San Juan", alcaldia: "Cuauhtémoc" }
];

const locales = [
    { id: 1, numero: 12, tipo: "Frutas", estado: "Ocupado" },
    { id: 2, numero: 20, tipo: "Carnes", estado: "Disponible" }
];

const locatarios = [
    { id: 1, nombre: "Juan Pérez", telefono: "5512345678" },
    { id: 2, nombre: "María López", telefono: "5587654321" }
];

const pagos = [
    { id: 1, fecha: "2024-05-01", monto: "1500" },
    { id: 2, fecha: "2024-05-15", monto: "1500" }
];

const inspecciones = [
    { id: 1, fecha: "2024-06-10", resultado: "Aprobado" },
    { id: 2, fecha: "2024-06-15", resultado: "Condicionado" }
];


/* ===================================================== */
/* GENERADOR DE TABLAS */
/* Convierte un arreglo de objetos en una tabla HTML */
/* Se usa para mostrar los datos del sistema */
/* ===================================================== */

function crearTabla(datos) {

    let html = "<table>";

    // Crear encabezados de la tabla
    html += "<tr>";

    Object.keys(datos[0]).forEach(columna => {
        html += `<th>${columna}</th>`;
    });

    html += "</tr>";

    // Crear filas con los datos
    datos.forEach(fila => {

        html += "<tr>";

        Object.values(fila).forEach(valor => {
            html += `<td>${valor}</td>`;
        });

        html += "</tr>";

    });

    html += "</table>";

    return html;

}


/* ===================================================== */
/* CARGA INICIAL DE DATOS */
/* Genera las tablas cuando la página se carga */
/* ===================================================== */

document.getElementById("tablaMercados").innerHTML = crearTabla(mercados);
document.getElementById("tablaLocales").innerHTML = crearTabla(locales);
document.getElementById("tablaLocatarios").innerHTML = crearTabla(locatarios);
document.getElementById("tablaPagos").innerHTML = crearTabla(pagos);
document.getElementById("tablaInspecciones").innerHTML = crearTabla(inspecciones);