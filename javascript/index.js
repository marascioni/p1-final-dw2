/*
 *  APELLIDOS
 *  Saurrales, Carolina
 *  Rascioni, Miguel
 */
/* document.addEventListener("DOMContentLoaded",() => {}); */


'use strict';

var timerOferta=null // timer de la oferta
var catalogoProductos = [];
var carrito=[];
var categoriaVisualizar='Todos';
var elementosEnCarrito=0;
var montoTotalCarrito=0;
var costoEnvio=0;
var intCuotas=0;
var costoTotalCompra=0;
var ofertas=[
    '10% de descuento + 3 cuotas sin interes',
    '30% de descuento pagando en efectivo o tarjeta en un pago',
    '2x1 en productos seleccionados',
    '50% de descuento en la segunda unidad llevando 2 productos iguales',
    '80% de descuento en la segunda unidad llevando 2 productos iguales',
    '30% de descuento en el total de la compra en montos superiores a $20000',
    '40% de descuento en tu próxima compra para compras superiores a $30000'
];

var ofertaImg=[
    'banner01.jpg',
    'banner02.webp',
    'banner03.jpg',
    'banner04.jpg',
    'banner05.jpg'
];


guardaProductos();
cargaInicial();
cargarProducto();
mostrarInventario(catalogoProductos);
creaFiltros();


document.getElementById('imgCarritoCompra').addEventListener ('click',mostrarCarrito);

