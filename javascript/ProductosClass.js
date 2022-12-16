/**
 * Clase para representar un Producto
 */
class Producto {
  /* Propiedad static  */
  static listCat = ["Plantas", "Sustratos", "Químicos", "Macetas"];  

  /**
   * Inicializador de instancia de clase
   * @param {String} nombre Nombre del producto
   * @param {String} descripcion Descripcion
   * @param {String} categoria Categoria
   */
  constructor(codigo,nombre, descripcion, categoria,descLarga,stock,precio,listImagen) {
    /* Inicializo las propiedades publicas con los parametros que entran */
    this.codigo = codigo ;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.categoria = categoria;    
    this.descLarga = descLarga;
    this.stock = stock;
    this.precio = precio;        
    this.listImagen = listImagen;  
  }


  /**
   * Muestra un producto del inventario
   */
  mostrarProducto() {
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var img = document.createElement("img");
    var h3 = document.createElement("h3");
    var p1 = document.createElement("p");
    var vermas=document.createElement("button");
    var hr = document.createElement('hr');
    var p2 = document.createElement("h5");
    var p3 = document.createElement("h4");
    var p4 = document.createElement("p");
    var button = document.createElement("button");

    div1.className = "contItem";
    div2.className = "contTexto";


    var div11 = document.createElement("div");
    div11.id='imgCarrousel';

    div11.append(this.carrusel());
    vermas.setAttribute('data-target', '#CodModalDescripcion');
    vermas.setAttribute('data-toggle', 'modal');
    vermas.className='btn-vermas';
    vermas.innerText='Ver +'
    vermas.addEventListener("click", (e) => {
      var target = e.target;
      mostrarDescripcion(target.parentElement.firstChild.innerText);
    }); 

    h3.innerText = this.nombre;
    h3.addEventListener("click", (e) => {
      var target = e.target;
      mostrarDescripcion(target.innerText);
    }); 

    p1.innerText = this.descripcion;
    p2.innerText = this.categoria;
    p3.innerText = `Precio: $ ${this.precio}`;
    p4.innerText = `Stock: ${this.stock} un.`;
    div2.append(h3);
    div2.append(p1);
    div2.append(vermas);
    div2.append(hr);
    div2.append(p2);
    div2.append(p3);
    div2.append(p4);
    if (this.stock > 0) {
      button.innerText = "Agregar";
      button.style.disabled = false;
      button.addEventListener("click", (e) => {
        var target = e.target;
        agregarCarrito(target.parentElement.children[0].innerText);
      });
    }
    else {
      button.innerText = "Sin stock";
      button.disabled = true;
      button.className = 'btn-disabled';
    }
    div2.append(button);
    div1.append(div11);
    /* div1.append(img); */
    div1.append(div2);
    return div1;
  }

  actualizarStock(sentido,cant) {
    sentido == 'Compra' ? this.stock-=cant : this.stock+=cant;
  }





  /**
   * Muestra el carrousel de las img de cada producto
   */
  carrusel() {

    var divL1 = document.createElement('div');    
    divL1.id = `carrouselProd${this.getCodigo}`;
    divL1.className = 'carousel slide';
    divL1.setAttribute('data-ride', 'carousel');

    var ol = document.createElement('ol');
    ol.className = 'carousel-indicators';
    for (let i = 0; i < this.listImagen.length; i++) {
      var li = document.createElement('li');      
      li.setAttribute('data-target', `#carrouselProd${this.getCodigo}`);
      li.setAttribute('data-slide-to', i);
      i == 0 ? li.className = 'active' : null;
      ol.append(li);
    }

    divL1.append(ol);

    var divL2 = document.createElement('div');
    divL2.className = 'carousel-inner';

    for (let i = 0; i < this.listImagen.length; i++) {
      var divL21 = document.createElement('div');
      i == 0 ? divL21.className = 'carousel-item active' : divL21.className = 'carousel-item';

      var img = document.createElement('img');
      img.className = 'd-block w-100';
      img.setAttribute('src', this.listImagen[i]);
      img.setAttribute('alt', `Img ${0}`);
      divL21.append(img);
      divL2.append(divL21);
    }

    divL1.append(divL2);

    for (let i = 0; i < 2; i++) {
      var a = document.createElement('a');
      a.setAttribute('href', `#carrouselProd${this.getCodigo}`);
      a.role = 'button';
      var span1 = document.createElement('span');      
      span1.ariaHidden = 'true';
     
      if (i == 0) {
        a.className = 'carousel-control-prev';
        a.setAttribute('data-slide', 'prev');
        span1.className = 'carousel-control-prev-icon';        
      }
      else {
        a.className = 'carousel-control-next';
        a.setAttribute('data-slide', 'next');
        span1.className = 'carousel-control-next-icon'; 
      }
      a.append(span1);
      
      divL1.append(a);
    }
    return divL1;
  }
}