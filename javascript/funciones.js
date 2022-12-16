/**
 * Guarda los productos del carrito en el localStorage
 */
const guardaProductos = (element, index) => {
  if (index != undefined) {    
    window.localStorage.setItem(`CMPI_HG_pr${index}`, JSON.stringify(element));
  }
}

window.addEventListener("beforeunload", () => {
  carrito.forEach(guardaProductos);
});


/**
 * Carga los productos al carrito desde el localStorage
 */
const cargarProducto = () => {
  var producto, totalLS;  
  totalLS=window.localStorage.length;
  if (totalLS) {
    Object.keys(localStorage).forEach(function(key){    
    if(key.slice(0,10)==='CMPI_HG_pr'){
      producto = window.localStorage.getItem(key);
      window.localStorage.removeItem(key);
      agregarCarrito(JSON.parse(producto).nombre, JSON.parse(producto).cantidad);
    }
 });
}
}


/**
 * Realiza la carga inicial de los productos 
 */
const cargaInicial = () => {
  productos.forEach(item => {
    var prod = new Producto(
      item.codigo,
      item.nombre,
      item.descripcion,
      item.categoria,
      item.descLarga,
      item.stock,
      item.precio,
      item.listImagen
    )
    catalogoProductos.push(prod);
  });
}

/**
 * Muestra todos los productos del listado pasado
 * @param {Array} Listado Listado de productos a mostrar
 */
const mostrarInventario = (Listado) => {
  var unProducto;
  var html;
  html = document.getElementById("productos");
  html.innerHTML = "";
  for (unProducto of Listado) {
    html.append(unProducto.mostrarProducto());
  }
};

/**
 * Filtra las categorias
 * @param {Element} target Elemento cliqueado
 * @param {Array} categoria Categoria
 */
const filtrarCategoria = (target = null, categoria = null) => {
  var producto;
  var prodFiltrado = [];
  if (target)
    categoriaVisualizar = categoria;
  if (categoriaVisualizar == "Todos") {
    mostrarInventario(catalogoProductos);
  } else {
    for (producto of catalogoProductos) {
      if (producto.categoria == categoriaVisualizar) {
        prodFiltrado.push(producto);
      }
      mostrarInventario(prodFiltrado);
    }
  }
  mostrarOferta();
};

/**
 * Crea los botones de las categorias
 */
const creaFiltros = () => {
  var listCategorias = Producto.listCat;
  var categoria;
  var button = document.createElement("button");
  button.innerText = "Todos";
  button.setAttribute("id", "Todos");
  button.setAttribute('data-target', '#oferta');
  button.setAttribute('data-toggle', 'modal');

  button.addEventListener("click", (e) => {
    var target = e.target;
    categoriaVisualizar = "Todos";
    if (timerOferta != null)
      clearTimeout(timerOferta);
    timerOferta = setTimeout(() => { document.getElementById('cerrarModal').click(); }, 10000);

    filtrarCategoria();
  });
  html = document.getElementById("minicarrito");
  html.append(button);

  for (categoria of listCategorias) {
    button = document.createElement("button");
    button.innerText = categoria;
    button.setAttribute("id", `${categoria}`);
    button.setAttribute('data-target', '#oferta');
    button.setAttribute('data-toggle', 'modal');
    button.addEventListener("click", (e) => {
      var target = e.target;
      categoriaVisualizar = target.id;
      if (timerOferta != null)
        clearTimeout(timerOferta);
      timerOferta = setTimeout(() => { document.getElementById('cerrarModal').click(); }, 10000);

      filtrarCategoria();

    });
    html.append(button);
  }
};

/**
 * Agrega un elemento al carrito
 */
const agregarCarrito = (productoAgregado, cant = null) => {
  var elemento;
  var flag = 1;
  for (elemento of carrito) {
    if (elemento.nombre == productoAgregado) {
      elemento.cantidad++;
      flag = 0;
    }
  }
  if (flag) {
    cant === null ? cant = 1 : '';
    elemento = new Elemento(productoAgregado, cant);
    carrito.push(elemento);
  }

  var producto;
  for (producto of catalogoProductos) {
    if (producto.nombre == productoAgregado) {
      cant === null ? producto.actualizarStock("Compra", 1) : producto.actualizarStock("Compra", cant);
      break;
    }
  }
  filtrarCategoria();
  cant===null? elementosEnCarrito++:elementosEnCarrito+=cant;
  cant===null? montoTotalCarrito += parseFloat(producto.precio):montoTotalCarrito += parseFloat(producto.precio)*cant;
  document.getElementById(
    "txtCarrito"
  ).firstElementChild.innerText = `Total: $ ${montoTotalCarrito}`;
  document.getElementById(
    "txtCarrito"
  ).lastElementChild.innerText = `Cantidad: ${elementosEnCarrito}`;
  document.getElementById("artCarrito").lastElementChild.setAttribute("src", "./img/carritoLleno.png");
};

/**
 * Muestra el contenido del carrito
 */
const mostrarCarrito = () => {
  //div del padre en el HTML
  var divPadre = document.getElementById("CodModal");
  //estructura del modal de bootstrap
  divPadre.innerHTML = "";
  var divLevel1 = document.createElement("div");
  divLevel1.id = "verCarrito";
  divLevel1.className = "modal fade";
  divLevel1.tabIndex = "-1";
  divLevel1.role = "dialog";
  divLevel1.setAttribute("aria-labelledby", "exampleModalLabel");
  divLevel1.ariaHidden = "true";

  var divLevel2 = document.createElement("div");
  divLevel2.className = "modal-dialog";
  divLevel2.role = "document";

  var divLevel3 = document.createElement("div");
  divLevel3.className = "modal-content";

  var divLevel4 = document.createElement("div");
  divLevel4.className = "modal-header";

  var h5 = document.createElement("h5");
  h5.className = "modal-title";
  h5.id = "exampleModalLabel";
  h5.innerText = "Carrito de compras";

  var btn1 = document.createElement("button");
  btn1.type = "button";
  btn1.className = "close";
  btn1.setAttribute("data-dismiss", "modal");
  btn1.ariaLabel = "Close";

  var span1 = document.createElement("span");
  span1.ariaHidden = "true";
  span1.innerText = "X";
  //inicio - div del body
  var divLevel5 = document.createElement("div");
  divLevel5.className = "modal-body";
  //divs para mostrar los productos del carrito

  var divLevel51 = document.createElement("div");
  divLevel51.className = "modal-cabecera";

  var h6Producto = document.createElement("h6");
  h6Producto.className = "modal-subtitle";
  h6Producto.id = "cabeceraProducto";
  h6Producto.innerText = "Producto";

  var h6Total = document.createElement("h6");
  h6Total.className = "modal-subtitle";
  h6Total.id = "cabeceraTotal";
  h6Total.innerText = "Sub-Total";

  divLevel51.append(h6Producto);
  divLevel51.append(h6Total);

  divLevel5.append(divLevel51);

  cargarProdCarrito(divLevel5);

  //fin - div del body

  var divLevel6 = document.createElement("div");
  divLevel6.className = "modal-footer";

  var divLevel61 = document.createElement("div");
  divLevel61.className = "modal-total";

  var h6TotalCompra = document.createElement("h6");
  h6TotalCompra.id = "montoTotal";
  h6TotalCompra.innerText = `Total (sin envío): $${montoTotalCarrito}`;

  divLevel61.append(h6TotalCompra);

  var divLevel62 = document.createElement("div");
  divLevel62.className = "modal-btn";

  var btn2 = document.createElement("button");
  btn2.type = "button";
  btn2.className = "btn btn-secondary";
  btn2.setAttribute("data-dismiss", "modal");
  btn2.innerText = "Continuar Compra";

  var btn3 = document.createElement("button");
  btn3.type = "button";
  btn3.className = "btn btn-primary";
  btn3.innerText = "Finalizar Compra";
  btn3.id = 'finCompras'
  btn3.setAttribute('data-target', '#checkOut');
  btn3.setAttribute('data-toggle', 'modal');
  if (elementosEnCarrito) {
    btn3.addEventListener("click", () => {
      if (elementosEnCarrito)
        checkOut();
    })

  }

  var papelera = document.createElement("img");
  papelera.className = "modal-item-imgPapelera";
  papelera.setAttribute("src", "./img/bin.png");
  papelera.setAttribute("alt", "Imagen de papelera");
  papelera.id = 'vaciarCarrito'

  var msgPapelera = document.createElement('p');
  msgPapelera.id = 'msgVaciarCarrito';
  msgPapelera.innerText = 'Vaciar carrito';

  papelera.addEventListener("click", (e) => {
    var target = e.target;
    if (carrito.length) {
      document.querySelector('.modal-body').firstChild.remove();
      var item;
      elementosEnCarrito = 0;
      montoTotalCarrito = 0;
      for (item of carrito) {
        buscarProducto(item.nombre).stock += item.cantidad;
      }
      carrito = [];
      /* for (var nodo of document.querySelector('.modal-body').childNodes)
          document.querySelector('.modal-body').removeChild(nodo); */
      var cantNodos = document.querySelector('.modal-body').childElementCount;
      for (var i = 0; i < cantNodos; i++)
        document.querySelector('.modal-body').firstChild.remove();
      carritoVacio();
    }
  });

  divLevel62.append(msgPapelera);
  divLevel62.append(papelera);
  divLevel62.append(btn2);
  divLevel62.append(btn3);

  divLevel6.append(divLevel61);
  divLevel6.append(divLevel62);

  divLevel4.append(h5);
  btn1.append(span1);
  divLevel4.append(btn1);

  divLevel3.append(divLevel4);
  divLevel3.append(divLevel5);
  divLevel3.append(divLevel6);

  divLevel2.append(divLevel3);

  divLevel1.append(divLevel2);

  divPadre.append(divLevel1);
  carrito.length == 0 ? carritoVacio() : null;
};

/**
 * Genera el listado de productos en el carrito
 * @param {Object} div Contenedor de los items del carrito
 */
const cargarProdCarrito = (divLevel5) => {
  var itemCarrito,
    cont = 1;
  for (itemCarrito of carrito) {
    var divLevel52 = document.createElement("div");
    divLevel52.className = "modal-item";
    divLevel52.id = `itemDelCarrito${cont++}`;

    var imgProd = document.createElement("img");
    imgProd.className = "modal-item-imgProd";

    imgProd.src = buscarImagen(itemCarrito.nombre);
    imgProd.setAttribute("alt", "Imagen de planta");

    var divLevel521 = document.createElement("div");
    divLevel521.id = "descPrecio";

    var nombreItem = document.createElement("p");
    nombreItem.id = "nombreItem";
    nombreItem.innerText = `${itemCarrito.nombre}`;

    var precioItem = document.createElement("p");
    precioItem.id = "precioItem";
    var importe = buscarImporte(itemCarrito.nombre);
    precioItem.innerText = `$ ${importe}`;

    var montoTotalItem = document.createElement("p");
    montoTotalItem.id = "montoTotalItem";
    var total = importe * itemCarrito.cantidad;
    montoTotalItem.innerText = `$ ${total}`;

    var papelera = document.createElement("img");
    papelera.className = "modal-item-imgPapelera";
    papelera.setAttribute("src", "./img/bin.png");
    papelera.setAttribute("alt", "Imagen de papelera");
    papelera.addEventListener("click", (e) => {
      var target = e.target;
      borrarItemCarrito(
        target,
        target.parentElement.childNodes[1].childNodes[0].innerText,
        target.parentElement.childNodes[1].childNodes[2].childNodes[1].innerText
      );
    });
    divLevel521.append(nombreItem);
    divLevel521.append(precioItem);

    var divLevel53 = document.createElement("div");
    divLevel53.className = "modal-item-cant";

    var btnMas = document.createElement("img");
    btnMas.setAttribute("src", "./img/plus.png");
    btnMas.setAttribute("alt", "Img de signo más");
    btnMas.addEventListener("click", (e) => {
      carritoActCant("+", e.target);
    });

    var producto;
    for (producto of catalogoProductos) {
      if (producto.nombre == itemCarrito.nombre && producto.stock == 0) {
        btnMas.style.visibility = "hidden";
        break;
      }
    }

    var cantItem = document.createElement("p");
    cantItem.id = "cantItem";
    cantItem.innerText = itemCarrito.cantidad;

    var btnMenos = document.createElement("img");
    btnMenos.setAttribute("src", "./img/minus.png");
    btnMenos.setAttribute("alt", "Img de signo menos");

    btnMenos.addEventListener("click", (e) => {
      carritoActCant("-", e.target);
    });

    divLevel53.append(btnMenos);
    divLevel53.append(cantItem);
    divLevel53.append(btnMas);

    divLevel521.append(divLevel53);

    divLevel52.append(imgProd);
    divLevel52.append(divLevel521);

    divLevel52.append(montoTotalItem);
    divLevel52.append(papelera);

    divLevel5.append(divLevel52);

    var hr = document.createElement("hr");
    divLevel5.append(hr);
  }
  divLevel5.lastElementChild.remove();
  return divLevel5;
};

/**
 * Actualiza la cantidad de item en el carrito
 * @param {String} operador Operador de + o -
 * @param {Object} target Elemento donde aplicar la operacion
 */
const carritoActCant = (operador, target) => {
  var producto, tipoOper;
  var total,
    flag = 1;

  for (producto of catalogoProductos) {
    if (
      producto.nombre ==
      target.parentElement.parentElement.childNodes[0].innerText
    )
      break;
  }

  if (operador == "+") {
    target.parentElement.querySelector("p").innerText =
      parseInt(target.parentElement.querySelector("p").innerText) + 1;
    tipoOper = "Compra";
    elementosEnCarrito++;
    montoTotalCarrito += parseFloat(producto.precio);
  } else {
    target.parentElement.querySelector("p").innerText =
      parseInt(target.parentElement.querySelector("p").innerText) - 1;
    tipoOper = "Venta";
    montoTotalCarrito -= producto.precio;

    if (!parseInt(target.parentElement.querySelector("p").innerText)) {
      flag = 0;
      carrito.forEach((valor, indice) => {
        valor.nombre == producto.nombre ? carrito.splice(indice, 1) : "";
      });
      if (
        target.parentElement.parentElement.parentElement.nextElementSibling !=
        null
      )
        target.parentElement.parentElement.parentElement.nextElementSibling.remove();
      target.parentElement.parentElement.parentElement.remove();
      producto.actualizarStock(tipoOper, 1);
    }

    if (carrito.length === 0) {
      document.getElementById("cabeceraProducto").parentElement.remove();
      carritoVacio();
    } else {
      elementosEnCarrito--;
    }
  }

  if (flag) {
    carrito.forEach((valor, indice) => {
      valor.nombre == producto.nombre
        ? (valor.cantidad = parseInt(
          target.parentElement.querySelector("p").innerText
        ))
        : "";
    });

    producto.actualizarStock(tipoOper, 1);
    if (producto.stock == 0) {
      target.className = "hidden";
    } else {
      operador == "-"
        ? (target.nextElementSibling.nextElementSibling.className = "visible")
        : null;
    }
    total =
      producto.precio *
      parseInt(target.parentElement.querySelector("p").innerText);
    target.parentElement.parentElement.parentElement.getElementsByTagName(
      "p"
    )[3].innerText = `$ ${total}`;
  }
  document.getElementById(
    "txtCarrito"
  ).firstElementChild.innerText = `Total: $ ${montoTotalCarrito}`;
  document.getElementById(
    "txtCarrito"
  ).lastElementChild.innerText = `Cantidad: ${elementosEnCarrito}`;
  document.getElementById('montoTotal').innerText = `Total (sin envío): $${montoTotalCarrito}`;
  filtrarCategoria();
};

/**
 * Busca el precio del producto
 * @param {String} nombreProducto Nombre del producto
 */
const buscarImporte = (nombreProducto) => {
  var producto;
  for (producto of catalogoProductos) {
    if (nombreProducto == producto.nombre) {
      return producto.precio;
    }
  }
};

/**
 * Busca el stock del producto
 * @param {String} nombreProducto Nombre del producto
 */
const buscarStock = (nombreProducto) => {
  var producto;
  for (producto of catalogoProductos) {
    if (nombreProducto == producto.nombre) {
      return producto.stock;
    }
  }
};

/**
 * Busca un producto
 * @param {String} nombreProducto Nombre del producto
 */
const buscarProducto = (nombreProducto) => {
  var producto;
  for (producto of catalogoProductos) {
    if (nombreProducto == producto.nombre) {
      return producto;
    }
  }
};

/**
 * Busca la imagen del producto
 * @param {String} nombreProducto Nombre del producto
 */
const buscarImagen = (nombreProducto) => {
  var producto;
  for (producto of catalogoProductos) {
    if (nombreProducto == producto.nombre) {
      return producto.listImagen[0];
    }
  }
};

/**
 * Borra un producto del carrito
 * @param {Object} target Elemento a borrar
 * @param {String} nombreProducto Nombre del producto
 * @param {Number} cantidad Cantidad de elementos
 */
const borrarItemCarrito = (target, nombreProducto, cantidad) => {
  if (target.parentElement.nextElementSibling != null)
    target.parentElement.nextElementSibling.remove();
  target.parentElement.remove();
  var producto;
  for (producto of catalogoProductos) {
    if (nombreProducto == producto.nombre) {
      producto.stock += parseInt(cantidad);
      montoTotalCarrito -= producto.precio * parseInt(cantidad);
      break;
    }
  }
  carrito.forEach((valor, indice) => {
    valor.nombre == nombreProducto ? carrito.splice(indice, 1) : "";
  });
  if (carrito.length === 0) {
    carritoVacio();
    document.getElementById('cabeceraProducto').parentElement.remove();
  } else {
    elementosEnCarrito -= parseInt(cantidad);
  }
  document.getElementById(
    "txtCarrito"
  ).firstElementChild.innerText = `Total: $ ${montoTotalCarrito}`;
  document.getElementById(
    "txtCarrito"
  ).lastElementChild.innerText = `Cantidad: ${elementosEnCarrito}`;
  document.getElementById('montoTotal').innerText = `Total (sin envío): $${montoTotalCarrito}`;
  filtrarCategoria();
};

/**
 * Muestra el modal del carrito con la leyenda de carrito vacío
 */
const carritoVacio = () => {
  elementosEnCarrito = 0;
  var p = document.createElement('p');
  p.id = 'vacio';
  p.innerText = 'Carrito Vacío';
  document.querySelector(".modal-body").append(p);
  document.getElementById('montoTotal').innerText = `Total (sin envío): $${montoTotalCarrito}`;
  document.getElementById('finCompras').classList.add('btn-deshabilitar');
  filtrarCategoria();
  document.getElementById(
    "txtCarrito"
  ).firstElementChild.innerText = `Total: $ ${montoTotalCarrito}`;
  document.getElementById(
    "txtCarrito"
  ).lastElementChild.innerText = `Cantidad: ${elementosEnCarrito}`;
  document.getElementById("artCarrito").lastElementChild.setAttribute("src", "./img/carritoVacio.png");
}


/**
 * Muestra el modal de la descripción del producto
 * @param {String} Producto Elemento a mostrar la descripción
 */
const mostrarDescripcion = (producto) => {
  //div del padre en el HTML  
  var divPadre = document.getElementById("ModalDesc");
  divPadre.innerHTML = '';
  var divL1 = document.createElement('div');
  divL1.className = "modal fade";
  divL1.id = "CodModalDescripcion";
  divL1.tabIndex = '-1';
  divL1.role = "dialog";
  divL1.setAttribute('aria-labelledby', "exampleModalLabel");
  divL1.ariaHidden = "true";

  var divL2 = document.createElement('div');
  divL2.className = "modal-dialog";
  divL2.role = "document";

  var divL3 = document.createElement('div');
  divL3.className = "modal-content";

  var divL4 = document.createElement('div');
  divL4.className = "modal-header";

  var h5 = document.createElement('h5');
  h5.className = "modal-title";
  h5.id = "exampleModalLabel";
  h5.innerText = `Descripción de ${producto}`;

  var button = document.createElement('button');
  button.className = "close";
  button.type = "button";
  button.setAttribute('data-dismiss', "modal");
  button.ariaLabel = "Close";

  var span = document.createElement('span');
  span.ariaHidden = "true";
  span.innerText = 'X'

  divL4.append(h5);
  button.append(span);
  divL4.append(button);

  var divL5 = document.createElement('div');
  divL5.className = "modal-body";

  var prodDesc = document.createElement('p');
  var descripcionProd = buscarProducto(producto).descLarga;
  prodDesc.innerText = descripcionProd;
  divL5.append(prodDesc);

  var divL6 = document.createElement('div');
  divL6.className = "modal-footer";


  var div62 = document.createElement("div");
  div62.className = "modal-btn";


  var btn1 = document.createElement('button');
  btn1.className = "btn btn-secondary";
  btn1.type = "button";
  btn1.setAttribute('data-dismiss', "modal");
  btn1.innerText = "Volver";

  var btn2 = document.createElement('button');
  btn2.className = "btn btn-primary";
  btn2.type = "button";
  btn2.setAttribute('data-dismiss', "modal");
  
  if (buscarStock(producto) > 0) {
    btn2.innerText = "Agregar";
    btn2.style.disabled = false;
    btn2.addEventListener("click", (e) => {
      var target = e.target;
      agregarCarrito(producto,null);
    });
  }
  else {
    btn2.innerText = "Sin stock";
    btn2.disabled = true;
    btn2.className = 'btn-disabled';
  }
  
  div62.append(btn1); 
  div62.append(btn2); 
  divL6.append(div62);

  divL3.append(divL4);
  divL3.append(divL5);
  divL3.append(divL6);

  divL2.append(divL3);

  divL1.append(divL2);

  divPadre.append(divL1);

};


/**
 * Muestra el modal de la oferta
 */
const mostrarOferta = () => {
  var padre = document.getElementById('ofertas');
  padre.innerText = '';
  var div1 = document.createElement('div');
  div1.className = 'modal fade';
  div1.id = 'oferta';
  div1.tabIndex = '-1';
  div1.role = 'dialog';
  div1.setAttribute('aria-labelledby', 'ModalOferta');
  div1.ariaHidden = true;

  var div2 = document.createElement('div');
  div2.className = 'modal-dialog';
  div2.role = 'document';

  var div3 = document.createElement('div');
  div3.className = 'modal-content';

  var div4 = document.createElement('div');
  div4.className = 'modal-header';

  var h51 = document.createElement('h5');
  h51.className = 'modal-title';
  h51.id = 'Happy';
  h51.innerText = 'Happy';

  var h52 = document.createElement('h5');
  h52.className = 'modal-title';
  h52.id = 'Garden';
  h52.innerText = 'Garden';

  var button1 = document.createElement('button');
  button1.type = 'button';
  button1.className = 'close';
  button1.setAttribute('data-dismiss', 'modal');
  button1.ariaLabel = 'Cerrar';

  var span = document.createElement('span');
  span.ariaHidden = true;
  span.innerText = 'X'
  button1.append(span);
  div4.append(h51);
  div4.append(h52);
  div4.append(button1);

  div3.append(div4);

  var div5 = document.createElement('div');
  div5.className = 'modal-body';

  var texto = document.createElement('h6');
  texto.className = 'ofertasTexto';
  texto.innerText = ofertas[Math.floor(Math.random() * ofertas.length)];
  div5.append(texto);

  var img = document.createElement('img');
  img.className = 'ofertaImg';
  img.setAttribute('src', `./img/${ofertaImg[Math.floor(Math.random() * ofertaImg.length)]}`);

  div5.append(img);

  div3.append(div5);

  var div6 = document.createElement('div');
  div6.className = 'modal-footer';
  div6.id = 'ofertaContenedor'

  var button2 = document.createElement('button');
  button2.type = 'button';
  button2.id = 'cerrarModal';
  button2.className = 'btn btn-secondary';
  button2.setAttribute('data-dismiss', 'modal');
  button2.ariaLabel = 'Cerrar';
  button2.innerText = 'Cerrar';

  var button3 = document.createElement('button');
  button3.type = 'button';
  button3.className = 'btn btn-primary';
  button3.ariaLabel = 'Ir a categoria';
  var categoriaOferta = Producto.listCat[Math.floor(Math.random() * Producto.listCat.length)];
  button3.innerText = `ir a ${categoriaOferta}`;
  button3.addEventListener("click", (e) => {
    document.getElementById('cerrarModal').click();
    filtrarCategoria(e, categoriaOferta);
  });

  div6.append(button2);
  div6.append(button3);

  div3.append(div6);
  div2.append(div3);
  div1.append(div2);

  padre.append(div1)
}


/**
 * Muestra el modal del checkout
 */
const checkOut = () => {
  costoEnvio=0;
  intCuotas=0;
  document.getElementById('CodModal').children[0].children[0].children[0].children[0].children[1].click()

  var padre = document.getElementById('finCompra');
  padre.innerText = ''; 

  var div1 = document.createElement('div');
  div1.className = 'modal fade';
  div1.id = 'checkOut';
  div1.tabIndex = '-1';
  div1.role = 'dialog';
  div1.setAttribute('aria-labelledby', 'ModalCheckOut');
  div1.ariaHidden = true;

  var div2 = document.createElement('div');
  div2.className = 'modal-dialog';
  div2.role = 'document';

  var div3 = document.createElement('div');
  div3.className = 'modal-content';

  var div4 = document.createElement('div');
  div4.className = 'modal-header';
  div4.id='mhFinalizarCompra';

  var h51 = document.createElement('h5');
  h51.className = 'modal-title';
  h51.id = 'ModalCheckOut';
  h51.innerText = 'Finalizar la Compra';
 
  var divLeyenda = document.createElement('div');  
  divLeyenda.id='LeyendaCompra';

  var h6LabelSubtotal = document.createElement('h6');
  h6LabelSubtotal.innerText=`Subtotal`;
  var h6LabelEnvio = document.createElement('h6');
  h6LabelEnvio.innerText=`Envío`;
  var h6LabelInteres = document.createElement('h6');
  h6LabelInteres.innerText=`Interes`;
  var h6LabelTotal = document.createElement('h6');
  h6LabelTotal.innerText=`Total`;

  var divImporte = document.createElement('div');  
  divImporte.id='totalCompra';

  var h6Subtotal = document.createElement('h6');
  h6Subtotal.innerText=`$ ${montoTotalCarrito}`;
  var h6Envio = document.createElement('h6');
  h6Envio.id='costoEnvio';
  h6Envio.innerText=`$ ${costoEnvio}`;
  var h6Interes = document.createElement('h6');
  h6Interes.id='intCuotas';
  h6Interes.innerText=`$ ${intCuotas}`;  
  var h6Total = document.createElement('h6');
  h6Total.id='costoTotalCompra';
  costoTotalCompra=parseFloat(montoTotalCarrito) + intCuotas + parseFloat(costoEnvio);
  h6Total.innerText=`$ ${costoTotalCompra}`;

  var hr=document.createElement('hr');
  hr.id='hrFinalizarCompra';

  var button1 = document.createElement('button');
  button1.type = 'button';
  button1.className = 'close close-fc';
  button1.setAttribute('data-dismiss', 'modal');
  button1.ariaLabel = 'Cerrar';

  var span = document.createElement('span');
  span.ariaHidden = true;
  span.innerText = 'X'

  button1.append(span);  
  div4.append(h51);
  div4.append(button1);
  div4.append(hr);

  divLeyenda.append(h6LabelSubtotal);
  divLeyenda.append(h6LabelEnvio);
  divLeyenda.append(h6LabelInteres);
  divLeyenda.append(h6LabelTotal);
  div4.append(divLeyenda);

  divImporte.append(h6Subtotal);
  divImporte.append(h6Envio);
  divImporte.append(h6Interes);
  divImporte.append(h6Total);
  div4.append(divImporte);
  
  div3.append(div4);

  var div5 = document.createElement('div');
  div5.className = 'modal-body';

  var texto = document.createElement('h6');
  texto.className = 'checkOut';
  //texto.innerText = 'CheckOut'
  div5.append(texto);

  div5.append(acordeon());

  div3.append(div5);

  var div6 = document.createElement('div');
  div6.className = 'modal-footer';
  div6.id = 'checkOutContenedor'

  var div62 = document.createElement("div");
  div62.className = "modal-btn";

  var button2 = document.createElement('button');
  button2.type = 'button';
  button2.id = 'cerrarModal';
  button2.className = 'btn btn-secondary';
  button2.setAttribute('data-dismiss', 'modal');
  button2.ariaLabel = 'Cancelar';
  button2.innerText = 'Cancelar';

  var button3 = document.createElement('button');
  button3.type = 'button';
  button3.className = 'btn btn-primary';
  button3.ariaLabel = 'Finalizar';
  button3.innerText = 'Finalizar';

   button3.addEventListener("click", (e) => {
    var target = e.target;
    finalizarCompra();
 
  });

  div62.append(button2);
  div62.append(button3);

  div6.append(div62);

  div3.append(div6);
  div2.append(div3);
  div1.append(div2);

  padre.append(div1);

}

/**
 * Acordeon del checkout
 */
const acordeon = () => {

  var div1 = document.createElement('div');
  div1.className = 'accordion';
  div1.id = 'acordeon';

  var div2 = document.createElement('div');
  div2.className = 'card';

  var div3 = document.createElement('div');
  div3.className = 'card-header';
  div3.id = 'headingOne';

  var h2 = document.createElement('h2');
  h2.className = 'mb-0';

  var button1 = document.createElement('button');
  button1.className = 'btn btn-link btn-block text-left';
  button1.type = 'button';
  button1.setAttribute('data-toggle', 'collapse');
  button1.setAttribute('data-target', '#datosFactu');
  button1.ariaExpanded = true;
  button1.setAttribute('aria-controls', 'datosFactu');
  button1.innerText = 'Datos de Facturación';

  h2.append(button1);  
  div3.append(h2);
  var span=document.createElement('span');
  span.id='datosFacturacion';
  span.className='error';

  div3.append(span);
  div2.append(div3);

  var div4 = document.createElement('div');
  div4.className = 'collapse show';
  div4.id = 'datosFactu';
  div4.setAttribute('aria-labelledby', 'headingOne');
  div4.setAttribute('data-parent', '#acordeon');

  var div5 = document.createElement('div');
  div5.className = 'card-body';
  div5.append(formulario());

  div4.append(div5);
  
  div2.append(div4);
  div1.append(div2);

  var div5 = document.createElement('div');
  div5.className = 'card';

  var div6 = document.createElement('div');
  div6.className = 'card-header';
  div6.id = 'headingTwo';

  var h21 = document.createElement('h2');
  h21.className = 'mb-0';

  var button2 = document.createElement('button');
  button2.className = 'btn btn-link btn-block text-left collapsed" ';
  button2.type = 'button';
  button2.setAttribute('data-toggle', 'collapse');
  button2.setAttribute('data-target', '#metEnvio');
  button2.ariaExpanded = false;
  button2.setAttribute('aria-controls', 'metEnvio');
  button2.innerText = 'Método de Entrega';
   

  h21.append(button2);  
  div6.append(h21);
  var span=document.createElement('span');
  span.id='metodoEntrega';
  span.className='error';
  div6.append(span);
  div5.append(div6);

  var div7 = document.createElement('div');
  div7.className = 'collapse';
  div7.id = 'metEnvio';
  div7.setAttribute('aria-labelledby', 'headingTwo');
  div7.setAttribute('data-parent', '#acordeon');

  var div8 = document.createElement('div');
  div8.className = 'card-body';
  
  div8.append(metEnvio());

  div7.append(div8);
  div5.append(div7);
  div1.append(div5);

  var div9 = document.createElement('div');
  div9.className = 'card';

  var div10 = document.createElement('div');
  div10.className = 'card-header';
  div10.id = 'headingThree';
 
  var h22 = document.createElement('h2');
  h22.className = 'mb-0';

  var button3 = document.createElement('button');
  button3.className = 'btn btn-link btn-block text-left collapsed" ';
  button3.type = 'button';
  button3.setAttribute('data-toggle', 'collapse');
  button3.setAttribute('data-target', '#metPago');
  button3.ariaExpanded = false;
  button3.setAttribute('aria-controls', 'metPago');
  button3.innerText = 'Método de Pago';


  h22.append(button3);
  div10.append(h22);
  var span=document.createElement('span');
  span.id='metodoPago';
  span.className='error';
  div10.append(span);
  div9.append(div10);

  var div11 = document.createElement('div');
  div11.className = 'collapse';
  div11.id = 'metPago';
  div11.setAttribute('aria-labelledby', 'headingThree');
  div11.setAttribute('data-parent', '#acordeon');

  var div12 = document.createElement('div');
  div12.className = 'card-body';  

  var divcont = document.createElement('div');
  divcont.className = 'container';  
  
  var divcontL1 = document.createElement('div');
  divcontL1.className = 'grupo';  
  divcontL1.id = 'grupo1';  

  var divcheck = document.createElement('div');
  divcheck.className = 'form-check'; 
  
  var inputcheck=document.createElement('input');
  inputcheck.type='radio';
  inputcheck.className='form-check-input';
  inputcheck.name='metodoPago';
  inputcheck.id='pagoEfectivo';

  inputcheck.addEventListener("click", () => {    
      fnEfectivo('grupo2');
  })

  var labelcheck=document.createElement('label');
  labelcheck.setAttribute('for','pagoEfectivo');
  labelcheck.className='form-check-label';
  labelcheck.innerText='Efectivo en local';

  divcheck.append(inputcheck);
  divcheck.append(labelcheck);
  divcontL1.append(divcheck);
  
  /****************** */

  var divcheck = document.createElement('div');
  divcheck.className = 'form-check'; 
  
  var inputcheck=document.createElement('input');
  inputcheck.type='radio';
  inputcheck.className='form-check-input';
  inputcheck.name='metodoPago';
  inputcheck.id='pagoTC';

  inputcheck.addEventListener("click", () => {    
    fnTarjetaTC();
})

  var labelcheck=document.createElement('label');
  labelcheck.setAttribute('for','pagoTC');
  labelcheck.className='form-check-label';
  labelcheck.innerText='Tarjeta de crédito';

  divcheck.append(inputcheck);
  divcheck.append(labelcheck);
  divcontL1.append(divcheck);

  divcont.append(divcontL1);
/************************ */

var divcontL1 = document.createElement('div');
divcontL1.className = 'grupo';  
divcontL1.id = 'grupo2';  


divcont.append(divcontL1);

div12.append(divcont);

  div11.append(div12);
  div9.append(div11);
  div1.append(div9);
  return div1;
}


/**
 * Formulario del checkout para los datos de facturación
 */
const formulario = () => {

  var form = document.createElement('form');
  form.action = '';
  form.method = 'post';

  var div = document.createElement('div');
  div.className = 'form-floating';

  var input = document.createElement('input');
  input.type = 'text';
  input.className = 'form-control';
  input.id = 'Nombre';
  input.placeholder = 'Carolina';  
  input.minLength = '3';

  var label = document.createElement('label');
  label.setAttribute('for','Nombre');
  label.innerText = 'Nombre';

  var span = document.createElement('span');
  span.id='dfNombre';
  span.className='error';

  div.append(input);
  div.append(label);
  div.append(span);
  form.append(div);

  var div = document.createElement('div');
  div.className = 'form-floating';

  var input = document.createElement('input');
  input.type = 'text';
  input.className = 'form-control';
  input.id = 'Apellido';
  input.placeholder = 'Saurrales';  
  input.minLength = '3';

  var label = document.createElement('label');  
  label.setAttribute('for','Apellido');
  label.innerText = 'Apellido';

  var span = document.createElement('span');
  span.id='dfApellido';
  span.className='error';

  div.append(input);
  div.append(label);
  div.append(span);
  form.append(div);

  var div = document.createElement('div');
  div.className = 'form-floating';

  var input = document.createElement('input');
  input.type = 'text';
  input.className = 'form-control';
  input.id = 'numDocumento';
  input.placeholder = '4444444444';
  input.minLength = '7';
  input.maxLength = '10';

  var label = document.createElement('label');  
  label.setAttribute('for','numDocumento');
  label.innerText = 'Documento';
  
  var span = document.createElement('span');
  span.id='dfDocumento';
  span.className='error';

  div.append(input);
  div.append(label);
  div.append(span);
  form.append(div);

  var div = document.createElement('div');
  div.className = 'form-floating';

  var input = document.createElement('input');
  input.type = 'email';
  input.className = 'form-control';
  input.id = 'floatingemail';
  input.placeholder = 'carolina.saurrales@davinci.edu.ar';

  var label = document.createElement('label');  
  label.setAttribute('for','floatingemail');
  label.innerText = 'Email';

  var span = document.createElement('span');
  span.id='dfemail';
  span.className='error';

  div.append(input);
  div.append(label);
  div.append(span);
  form.append(div);

  var div = document.createElement('div');
  div.className = 'form-floating';

  var input = document.createElement('input');
  input.type = 'tel';
  input.className = 'form-control';
  input.id = 'floatingTel';
  input.placeholder = '1122334455';

  var label = document.createElement('label');  
  label.setAttribute('for','floatingTel');
  label.innerText = 'Teléfono';

  div.append(input);
  div.append(label);
  form.append(div);
  return form;

}

/**
 * Formulario del checkout para los datos de envío
 */
const metEnvio = () => {






var divcont = document.createElement('div');
divcont.className = 'container';  

var divcontL1 = document.createElement('div');
divcontL1.className = 'grupo';  
divcontL1.id = 'grupo1'; 

var div=document.createElement('div');
div.className='form-check';

var input=document.createElement('input');
input.type='radio';
input.className='form-check-input';
input.name='envios';
input.id='local';
input.value='0';
input.addEventListener("click", (e) => {
  costoEnvio=document.getElementById('local').value;
  document.getElementById('costoEnvio').innerText=`$ ${costoEnvio}`;
  costoTotalCompra=parseFloat(montoTotalCarrito) + intCuotas + parseFloat(costoEnvio);
  document.getElementById('costoTotalCompra').innerText=`$ ${costoTotalCompra}`;
  fnEfectivo('grupo3');
});

div.append(input);

var label=document.createElement('label');

label.setAttribute('for','local');
label.className='form-check-label';
label.innerText='Retiro por el local (sin cargo)';

div.append(label);
divcontL1.append(div); 

divcont.append(divcontL1);

/********* */
var div=document.createElement('div');
div.className='form-check';

var input=document.createElement('input');
input.type='radio';
input.className='form-check-input';
input.name='envios';
input.id='mayor';
input.value='1200';
input.addEventListener("click", (e) => {
  costoEnvio=document.getElementById('mayor').value;
  document.getElementById('costoEnvio').innerText=`$ ${costoEnvio}`;
  costoTotalCompra=parseFloat(montoTotalCarrito) + intCuotas + parseFloat(costoEnvio);
  document.getElementById('costoTotalCompra').innerText=`$ ${costoTotalCompra}`;
  fnEnvioDom();
});

var label=document.createElement('label');
label.setAttribute('for','mayor');
label.className='form-check-label';
label.innerText=`Envío a domicilio $${input.value}`;

div.append(input);
div.append(label);

divcontL1.append(div); 
divcont.append(divcontL1);

/************************ */

var divcontL1 = document.createElement('div');
divcontL1.className = 'grupo';  
divcontL1.id = 'grupo3';  

divcont.append(divcontL1);

/********************************* */
return divcont;
}

 /**
 * Muestra la dirección del local
 * @param {String} destino Parametro para saber donde poner la leyenda
 */
 const fnEfectivo=(destino)=>{
  var grupo2=document.getElementById(destino);
  grupo2.innerHTML=''
  var p=document.createElement('p');
  p.innerText='Av. Beiró 3210 - CP 1419';
  grupo2.append(p);
  var p=document.createElement('p');
  p.innerText='HORARIO DE ATENCIÓN: Lunes a Viernes de 8 a 19hs, Sábado de 8 a 13 hs';
  grupo2.append(p);
 }

 /**
 * Formulario de la tarjeta de crédito
 */
 const fnTarjetaTC=()=>{
  document.getElementById('grupo2').innerHTML='';

  var form = document.createElement('form');
form.action = '';
form.method = 'post';

var divf1=document.createElement('div');
  divf1.className='form-floating';
  
  var inputf1=document.createElement('input');
  inputf1.type='text';
  inputf1.className='form-control';
  inputf1.id='numero';
  inputf1.placeholder='4456 5892 0042 0058';
  
  var labelf1=document.createElement('label');  
  labelf1.setAttribute('for','numero');
  labelf1.innerText='Número de tarjeta';
  divf1.append(inputf1);
  divf1.append(labelf1);

  var span = document.createElement('span');
  span.id='mpNumero';
  span.className='error';
  divf1.append(span);

  form.append(divf1);
//
  var divf1=document.createElement('div');
  divf1.className='form-floating';

  var inputf1=document.createElement('input');
  inputf1.type='text';
  inputf1.className='form-control';
  inputf1.id='floatingNombre';
  inputf1.placeholder='MIGUEL A RASCIONI';

  var labelf1=document.createElement('label');  
  labelf1.setAttribute('for','floatingNombre');
  labelf1.innerText='Titular';
  divf1.append(inputf1);
  divf1.append(labelf1);

  var span = document.createElement('span');
  span.id='mpTitular';
  span.className='error';
  divf1.append(span);

  form.append(divf1);

  //
  var divf1=document.createElement('div');
  divf1.className='form-floating';

  var divfecha=document.createElement('div');  
  divfecha.id='divFechaVenc';

  var divfecha1=document.createElement('div');  
  divfecha1.id='divLabel';

  var labelf1=document.createElement('label');
  labelf1.innerText='Fecha de vencimiento';
  labelf1.id='labelFecVenc'
  divfecha1.append(labelf1);  

  var select=document.createElement('select');
  select.name='meses';
  select.id='meses';

  for(var i=0;i< 12;i++)
  {
    var option=document.createElement('option');
    option.value=i+1;
    option.innerText=i+1;
    select.append(option);  
  }

  divfecha1.append(select);

  var select=document.createElement('select');
  select.name='anios';
  select.id='anios';

  for(var i=2023;i< 2030;i++)
  {
    var option=document.createElement('option');
    option.value=i;
    option.innerText=i;
    select.append(option);  
  }

  divfecha1.append(select);
  divfecha.append(divfecha1);
  
  divf1.append(divfecha);

  var span = document.createElement('span');
  span.id='mpFecha';
  span.className='error';
  divf1.append(span);

  form.append(divf1);

//
  var divf1=document.createElement('div');
  divf1.className='form-floating';

  var inputf1=document.createElement('input');
  inputf1.type='text';
  inputf1.className='form-control';
  inputf1.id='codigo';
  inputf1.placeholder='000';

  var labelf1=document.createElement('label');  
  labelf1.setAttribute('for','codigo');
  labelf1.innerText='Código de seguridad';
  divf1.append(inputf1);
  divf1.append(labelf1);
  
  var span = document.createElement('span');
  span.id='mpCodigo';
  span.className='error';
  divf1.append(span);

  form.append(divf1);

//
var divf1=document.createElement('div');
divf1.className='form-floating';

var inputf1=document.createElement('input');
inputf1.type='text';
inputf1.className='form-control';
inputf1.id='intDocumento';
inputf1.placeholder='444444444';

var labelf1=document.createElement('label');
labelf1.setAttribute('for','intDocumento');
labelf1.innerText='Documento';
divf1.append(inputf1);
divf1.append(labelf1);

var span = document.createElement('span');
span.id='mpDocumento';
span.className='error';
divf1.append(span);

form.append(divf1);

var divf1=document.createElement('div');
var labelf1=document.createElement('label');
labelf1.setAttribute('for','cuotas');
labelf1.className='cuotas';
labelf1.innerText='Elija cant de cuotas';
var select=document.createElement('select');
select.name='cuotas';
select.id='cuotas';

select.addEventListener("change", (e) => {
  var target = e.target;  
  intCuotas=parseFloat(montoTotalCarrito)*target.value/100;
  document.getElementById('intCuotas').innerText=`$ ${intCuotas}`;
  costoTotalCompra=parseFloat(montoTotalCarrito) + intCuotas + parseFloat(costoEnvio);
  document.getElementById('costoTotalCompra').innerText=`$ ${costoTotalCompra}`; 
});

cuotas=['1 cuota - sin interés','3 cuotas - 10% de interés','6 cuotas - 20% de interés','12 cuotas - 30% de interés'];
interes=[0,10,20,30];

for(var i=0;i< cuotas.length;i++)
{
  var option=document.createElement('option');
  option.value=interes[i];
  option.id=`cuota${i}`;
  option.innerText=cuotas[i];
  select.append(option);  
}
divf1.append(labelf1);
divf1.append(select);

form.append(divf1);

document.getElementById('grupo2').append(form);
 }



/**
 * Control de los campos para terminar el proceso de compra
 */
const  finalizarCompra =()=>{
  
  /*Datos facturación */
  var flagDF=0,flagME=0,flagMP=0;
  
  flagDF+=validarCamposTXT(document.getElementById('Nombre').value,'Nombre','dfNombre','El campo no puede quedar vacío');
  flagDF+=validarCamposTXT(document.getElementById('Apellido').value,'Apellido','dfApellido','El campo no puede quedar vacío');
  flagDF+=validarCamposNUM(document.getElementById('numDocumento').value,'numDocumento','dfDocumento',1,99999999);
  flagDF+=validarCamposTXT(document.getElementById('floatingemail').value,'floatingemail','dfemail','El campo no puede quedar vacío');
  flagDF!=4?document.getElementById('datosFacturacion').innerText='Verificar los datos que están incorrectos':document.getElementById('datosFacturacion').innerText='';

  /*Método de envío */
  if(document.getElementById('local').checked || document.getElementById('mayor').checked){
    flagME=1;
    document.getElementById('metodoEntrega').innerText='';
  }
  else {    
    document.getElementById('metodoEntrega').innerText='Debe seleccionar uno de los items';
  }

  if(document.getElementById('mayor').checked){
    flagME=validarCamposTXT(document.getElementById('calle').value,'calle','meCalle','El campo no puede quedar vacío');        
    flagME+=validarCamposNUM(document.getElementById('altura').value,'altura','meAltura',1,19999);
    flagME+=validarCamposNUM(document.getElementById('codPostal').value,'codPostal','meCP',1,9999);
    flagME+=validarCamposTXT(document.getElementById('ciudad').value,'ciudad','meCiudad','El campo no puede quedar vacío');        
    flagME+=validarCamposTXT(document.getElementById('fechaEntrega').value,'fechaEntrega','meFechaEntrega','El campo no puede quedar vacío');        
    flagME+=validarCamposTXT(document.getElementById('HoraEntrega').value,'HoraEntrega','meHoraEntrega','El campo no puede quedar vacío');        
    flagME!=6?document.getElementById('metodoEntrega').innerText='Verificar los datos que están incorrectos':document.getElementById('metodoEntrega').innerText='';
  }
  
  /*Método de pago */
  if(document.getElementById('pagoEfectivo').checked || document.getElementById('pagoTC').checked){
    flagMP=1;
    document.getElementById('metodoPago').innerText='';
  }
  else {    
    document.getElementById('metodoPago').innerText='Debe seleccionar uno de los items';
  }

  if(document.getElementById('pagoTC').checked){
    flagMP=validarTC(document.getElementById('numero').value,'numero','mpNumero');
    flagMP+=validarCamposTXT(document.getElementById('floatingNombre').value,'floatingNombre','mpTitular','El campo no puede quedar vacío');    
    flagMP+=validarCamposNUM(document.getElementById('codigo').value,'codigo','mpCodigo',100,999);
    flagMP+=validarCamposNUM(document.getElementById('intDocumento').value,'intDocumento','mpDocumento',1,99999999);
    flagMP!=4?document.getElementById('metodoPago').innerText='Verificar los datos que están incorrectos':document.getElementById('metodoPago').innerText='';
  }

  if(flagDF==4 && (flagME==6 || flagME==1) && (flagMP==4 || flagMP==1)){   

    padre=document.getElementById('mhFinalizarCompra').parentElement.children[1];
    var divResumen=document.createElement('div');
    divResumen.id='idResumen';

    var img=document.createElement('img');
    img.id='imgLogoResumen';
    img.setAttribute('src','./img/Logo.png');
    divResumen.append(img);

    var h4Msg=document.createElement('h3');
    h4Msg.innerText='Agradece por su compra.'
    divResumen.append(h4Msg);
    
    var hr=document.createElement('hr');
    divResumen.append(hr);
   
    if(document.getElementById('pagoEfectivo').checked){
      var h4Msg=document.createElement('h4');
      h4Msg.innerText=`Su producto será entregado en 
      nuestro local de Av. Beiró 3210 - CP 1419`
    }else{
      var h4Msg=document.createElement('h4');
      h4Msg.innerText=`Su producto será entregado en la
      Calle: ${document.getElementById('calle').value} ${document.getElementById('altura').value} 
      CP: ${document.getElementById('codPostal').value}
      Ciudad: ${document.getElementById('ciudad').value}
      El día ${document.getElementById('fechaEntrega').value} 
      a las ${document.getElementById('HoraEntrega').value}`;
    }
    divResumen.append(h4Msg);

    var hr=document.createElement('hr');
    divResumen.append(hr);

    var h4Msg=document.createElement('h4');
    h4Msg.innerText=`El monto final por su compra es de $ ${costoTotalCompra}`
    divResumen.append(h4Msg);

    if(document.getElementById('pagoEfectivo').checked){
      var h4Msg=document.createElement('h4');
      h4Msg.innerText=`Será abonado en nuestro local
      HORARIO DE ATENCIÓN: Lunes a Viernes de 8 a 19hs, Sábado de 8 a 13 hs`
    }else{
      var h4Msg=document.createElement('h4');
      h4Msg.innerText=`Fue abonado con Tarjeta de Crédito de
      ${document.getElementById('floatingNombre').value}`;  
    }
    divResumen.append(h4Msg);
    padre.innerText='';
    document.getElementById('ModalCheckOut').innerText='Resumen de Compra';
    document.getElementById('LeyendaCompra').innerText='';
    document.getElementById('totalCompra').innerText='';
    document.getElementById('checkOutContenedor').children[0].children[0].innerText='Volver';
    document.getElementById('checkOutContenedor').children[0].children[1].remove();
    document.getElementById('hrFinalizarCompra').remove();
    elementosEnCarrito = 0;
    montoTotalCarrito = 0;
    carrito = [];
    document.getElementById('txtCarrito').children[0].innerText='Total: $ 0';
    document.getElementById('txtCarrito').children[1].innerText='Cantidad: 0';
    document.getElementById("imgCarritoCompra").setAttribute("src", "./img/carritoVacio.png");
    padre.append(divResumen);

  } 

 }


/**
 * Fn para validar el campo de texto
 * @param {String} campo Campo que se va a validar
 * @param {String} id Id del input donde se produjo el error
 * @param {String} span Id del span donde poner el error
 * @param {String} msg Mensaje de la validación
 */
 const validarCamposTXT=(campo,id,span,msg)=> {
  var flag=0;
  if (campo.trim().length===0){
    document.getElementById(span).innerText=msg;
    document.getElementById(id).innerText='';    
  }
  else{
    flag=1;
    document.getElementById(span).innerText='';
  }
  return flag;
 }

 /**
 * Fn para validar el campo numérico
 * @param {String} campo Campo que se va a validar
 * @param {String} id Id del input donde se produjo el error
 * @param {String} span Id del span donde poner el error 
 * @param {Number} min Valor mínimo aceptado
 * @param {Number} max Valor máximo aceptado
 */
 const validarCamposNUM=(campo,id,span,min,max)=> {
  var flag=0;
  var msg;
  if(campo.trim().length ===0){
    msg='El campo no puede quedar vacío';
    document.getElementById(id).value='';
  }else if(isNaN(parseInt(campo))){
    msg='El campo debe ser numérico';
    document.getElementById(id).value='';
  }
  else{
    if(parseInt(campo)>=min && parseInt(campo)<max){
      msg='';
      flag=1;
    }
    else{
      msg=`El valor debe estar entre ${min} y ${max}`;
      document.getElementById(id).value='';
    }
  }
  document.getElementById(span).innerText=msg;
  return flag;
 }

 /**
 * Fn para validar el campo numérico
 * @param {String} campo Campo que se va a validar
 * @param {String} id Id del input donde se produjo el error
 * @param {String} span Id del span donde poner el error 
 */
 const validarTC=(campo,id,span)=> {
  var flag=0;
  var msg;
  if(campo.trim().length ===0){
    msg='El campo no puede quedar vacío';
    document.getElementById(id).value='';
  }else if(isNaN(parseInt(campo))){
    msg='El campo debe ser numérico';
    document.getElementById(id).value='';
  }
  else{
    if(parseInt(campo)>999999999999999 && parseInt(campo)<9999999999999999){
      msg='';
      flag=1;
    }
    else{
      msg=`El número de TC debe tener 16 carácteres`;
      document.getElementById(id).value='';
    }
  }
  document.getElementById(span).innerText=msg;
  return flag;
 }



/**
 * Fn envío a domicilio
 */
const fnEnvioDom=()=>{

  document.getElementById('grupo3').innerHTML='';

  var form = document.createElement('form');
form.action = '';
form.method = 'post';

var divf1=document.createElement('div');
  divf1.className='form-floating';
  
  var inputf1=document.createElement('input');
  inputf1.type='text';
  inputf1.className='form-control';
  inputf1.id='calle';
  inputf1.placeholder='Catamarca';
  
  var labelf1=document.createElement('label');  
  labelf1.setAttribute('for','calle');
  labelf1.innerText='Calle';
  divf1.append(inputf1);
  divf1.append(labelf1);

  var span = document.createElement('span');
  span.id='meCalle';
  span.className='error';
  divf1.append(span);

  form.append(divf1);

  var div=document.createElement('div');
  div.className='container2';

//
  var divf1=document.createElement('div');
  divf1.className='form-floating';

  var inputf1=document.createElement('input');
  inputf1.type='text';
  inputf1.className='form-control';
  inputf1.id='altura';
  inputf1.placeholder='1200';

  var labelf1=document.createElement('label');  
  labelf1.setAttribute('for','altura');
  labelf1.innerText='Altura';
  divf1.append(inputf1);
  divf1.append(labelf1);

  var span = document.createElement('span');
  span.id='meAltura';
  span.className='error';
  divf1.append(span);

  div.append(divf1);  
  //
  var divf1=document.createElement('div');
  divf1.className='form-floating';

  var inputf1=document.createElement('input');
  inputf1.type='text';
  inputf1.className='form-control';
  inputf1.id='codPostal';
  inputf1.placeholder='1425';

  var labelf1=document.createElement('label');  
  labelf1.setAttribute('for','codPostal');
  labelf1.innerText='CP';
  divf1.append(inputf1);
  divf1.append(labelf1);
  
  var span = document.createElement('span');
  span.id='meCP';
  span.className='error';
  divf1.append(span);

  div.append(divf1);
  form.append(div);
//
var divf1=document.createElement('div');
divf1.className='form-floating';

var inputf1=document.createElement('input');
inputf1.type='text';
inputf1.className='form-control';
inputf1.id='ciudad';
inputf1.placeholder='CABA';

var labelf1=document.createElement('label');
labelf1.setAttribute('for','ciudad');
labelf1.innerText='Ciudad';
divf1.append(inputf1);
divf1.append(labelf1);

var span = document.createElement('span');
span.id='meCiudad';
span.className='error';
divf1.append(span);

form.append(divf1);

//
var div=document.createElement('div');
div.className='container2';

var divf1=document.createElement('div');
divf1.className='form-floating';

var inputf1=document.createElement('input');
inputf1.type='date';
inputf1.className='form-control';
inputf1.id='fechaEntrega';
inputf1.placeholder='21/12/2022';

var labelf1=document.createElement('label');
labelf1.setAttribute('for','fechaEntrega');
labelf1.innerText='Fecha Entrega';
divf1.append(inputf1);
divf1.append(labelf1);

var span = document.createElement('span');
span.id='meFechaEntrega';
span.className='error';
divf1.append(span);

div.append(divf1);

//
var divf1=document.createElement('div');
divf1.className='form-floating';

var inputf1=document.createElement('input');
inputf1.type='time';
inputf1.className='form-control';
inputf1.id='HoraEntrega';
inputf1.placeholder='21/12/2022';

var labelf1=document.createElement('label');
labelf1.setAttribute('for','HoraEntrega');
labelf1.innerText='Hora Entrega';
divf1.append(inputf1);
divf1.append(labelf1);

var span = document.createElement('span');
span.id='meHoraEntrega';
span.className='error';
divf1.append(span);

div.append(divf1);

form.append(div);
document.getElementById('grupo3').append(form);
 }

