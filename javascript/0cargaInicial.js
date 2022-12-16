


/**
 * Carga inicial de productos
 */
const cargaInicia = () => {
  var producto1 = new Producto(
    "Anturio",
    "Es una planta de interior con doble interés decorativo: posee unas atractivas, llamativas, duraderas y singulares flores",
    "Plantas"
  );
  producto1.precio = 2690;
  producto1.stock = 3;
  producto1.listImagen[0] = "./img/plantas/anturio1.jpg";
  producto1.listImagen[1] = "./img/plantas/anturio2.jpg";
  producto1.listImagen[2] = "./img/plantas/anturio3.jfif";
  producto1.descLarga=`
  Descripción general del Anturio o Anthurium andreanum
Nombre común: Anturio
Nombre científico: Anthurium andreanum
Familia: Aráceas
Origen: Sudamérica
Ubicación: Interior
Floración: Verano
Luz: Muy luminoso
Riego: Moderado, evitar encharcamientos
Abono: Abono de floración en primavera y verano cada 15 días`;
  catalogoProductos.push(producto1);

  var producto2 = new Producto(
    "Crotón",
    "Posee la mayor gama de colores vivos en sus hojas. Sus nervaduras con colores que van desde el amarillo hasta los tonos rojizos.",
    "Plantas"
  );
  producto2.precio = 4990;
  producto2.stock = 10;
  producto2.listImagen[0] = "./img/plantas/croton1.webp";
  producto2.listImagen[1] = "./img/plantas/croton2.webp";
  producto2.listImagen[2] = "./img/plantas/croton3.jpg";
  producto2.descLarga=`
  Características generales:
Nombre común: Crotón
Nombre científico: Codiaeum Variegatum Pictum
Familia: Euforbiáceas (Euphorbiaceae)
Origen: Sur de Pacífico
Ubicación: Interior
Luz: Muy luminoso, algo de sol directo
Temperatura: Ideal 18º-24º, mín.5º-9º
Riego: En periodo de crecimiento moderado, en desarrollo dejar secar la capa superficial entre riegos
Abono: En primavera y verano fertilizante líquido cada 15 días
  `;
  catalogoProductos.push(producto2);

  var producto3 = new Producto(
    "Helecho",
    "Es una de las plantas de interior más populares porque es fácil de cuidar (siempre que dispongan de suficiente humedad)",
    "Plantas"
  );
  producto3.precio = 1100;
  producto3.stock = 10;
  producto3.listImagen[0] = "./img/plantas/helecho1.jpg";
  producto3.listImagen[1] = "./img/plantas/helecho2.jfif";
  producto3.listImagen[2] = "./img/plantas/helecho3.jpg";
  producto3.descLarga=`
  Características generales:
Nombre común: Helecho
Nombre científico: Pteridium aquilinum
Familia: Dennstaedtiaceae
Origen: Sur de Ecuador
Ubicación: Interior
Luz: Prefieren la sombra
Temperatura: Ideal 18º-20º
Riego: Riego moderado, regarlo cada 2 días en epoca de calor.
Abono: En primavera y verano fertilizar al menos una vez por mes.
  `;
  catalogoProductos.push(producto3);

  var producto4 = new Producto(
    "Maranta",
    "Son plantas siempreverdes, herbáceas y su particularidad son las hojas, con arabescos irregulares y formas y colores extraordinarios",
    "Plantas"
  );
  producto4.precio = 1500;
  producto4.stock = 10;
  producto4.listImagen[0] = "./img/plantas/maranta1.webp";
  producto4.listImagen[1] = "./img/plantas/maranta2.jpg";
  producto4.listImagen[2] = "./img/plantas/maranta3.jpg";
  producto4.descLarga=`
  Características generales
Origen: Brasil
Luz: de luminoso a muy luminoso, nunca sol directo
Temperatura ideal: 15-19 ºC
Temperatura mínima: 3-5 ºC
Riego: pc. moderado; pd. dejar secar capa superficial entre riegos
Fertilización: pc. cada 3 semanas; pd. cada dos meses
  `;
  catalogoProductos.push(producto4);

  var producto5 = new Producto(
    "Planta del dolar",
    "Es una especie siempre verde (perenne) caracterizada por alcanzar unos 50 cm de altura, tener raíces fibrosas y ramas suculentas",
    "Plantas"
  );
  producto5.precio = 2500;
  producto5.stock = 10;
  producto5.listImagen[0] = "./img/plantas/planta_dolar1.jpg";
  producto5.listImagen[1] = "./img/plantas/planta_dolar2.jpg";
  producto5.listImagen[2] = "./img/plantas/planta_dolar3.jfif";
  producto5.descLarga=`
  Características generales
Nombre común: Planta del dinero china, Planta del misionero
Nombre científico: Pilea peperomioides
Familia: Urticaceae
Origen: Sur de China
Ubicación: Interior
Luz: zonas sombrías
Riego: Riego bajo dejando secar el sustrato entre riego y riego
  `;
  catalogoProductos.push(producto5);

  var producto6 = new Producto(
    "Spathiphyllum",
    "Es una planta que se cultiva para su uso ornamental en interior, ya que posee una inflorescencia casi ininterrumpida durante todo el año",
    "Plantas"
  );
  producto6.precio = 2200;
  producto6.stock = 10;
  producto6.listImagen[0] = "./img/plantas/spathiphyllum1.jpg";
  producto6.listImagen[1] = "./img/plantas/spathiphyllum2.webp";
  producto6.listImagen[2] = "./img/plantas/spathiphyllum3.jpg";
  producto6.descLarga=`
  Características generales:
Nombre común: Espatifilo, Bandera Blanca
Nombre científico: Spathiphyllum Wallasii
Familia: Araceae
Origen: América Tropical
Ubicación: Interior
Floración: Todo el año
Luz: Sol indirecto
Temperatura: Ideal de 16-21 ºC
Riego: En crecimiento y floración dos veces por semana o cuando la tierra no esté húmeda.
Abono: Durante la floración, cada 20 días
  `;
  catalogoProductos.push(producto6);

  //Macetas

  var producto7 = new Producto(
    "Maceta N° 14",
    "Maceta 14 cm. Capri Taupe",
    "Macetas"
  );
  producto7.precio = 262;
  producto7.stock = 20;
  producto7.listImagen[0] = "./img/macetas/maceta141.webp";
  producto7.listImagen[1] = "./img/macetas/maceta142.webp";
  producto7.listImagen[2] = "./img/macetas/maceta143.webp";
  producto7.descLarga=`
  Estas macetas son perfectas para interior, son duraderas y resistentes. También se pueden utilizar para jardines de exterior dependiendo de la decoración y el espacio de que se dispone.
Las macetas TA clásica están fabricadas en plástico resistente. Tenemos a disposición variedad de diseños y tamaños para lograr las mejores decoraciones en su hogar.
  `;
  catalogoProductos.push(producto7);

  var producto8 = new Producto(
    "Maceta N° 12",
    "Maceta Terracota Común 12 cm",
    "Macetas"
  );
  producto8.precio = 459;
  producto8.stock = 15;
  producto8.listImagen[0] = "./img/macetas/Maceta12_Terracota1.webp";
  producto8.listImagen[1] = "./img/macetas/Maceta12_Terracota2.jpg";
  producto8.listImagen[2] = "./img/macetas/Maceta12_Terracota3.jpg";
  producto8.descLarga=`
  Las Macetas de Terracota de Blum, se caracterizan por su calidad y diseño, lo que la convierten en líder y referente del mercado nacional de macetas de barro y en la opción ideal, tanto para el jardín como para el interior del hogar.
  `;
  catalogoProductos.push(producto8);

  var producto9 = new Producto(
    "Maceta N° 16",
    "Maceta 16 cm. Plástica Capri",
    "Macetas"
  );
  producto9.precio = 540;
  producto9.stock = 10;
  producto9.listImagen[0] = "./img/macetas/maceta161.jpg";
  producto9.listImagen[1] = "./img/macetas/maceta162.jpg";
  producto9.listImagen[2] = "./img/macetas/maceta163.png";
  producto9.descLarga=`
  -Poseen protección contra rayos Ultra Violeta, aunque se recomienda proteger del rayo directo del sol, ya que con el tiempo tienden a desgastarse, pudiendo resecarse y romperse.
-Es importante colocar algunas piedras en la capa inferior del de la maceta para lograr un buen drenaje, ya que sino la maceta retendrá humedad, pudiendo comprometer la sanidad de las plantas que se coloque
  `;
  catalogoProductos.push(producto9);

  var producto10 = new Producto(
    "Cubo 10x10",
    "Maceta cemento 10x10x10cm",
    "Macetas"
  );
  producto10.precio = 655;
  producto10.stock = 10;
  producto10.listImagen[0] = "./img/macetas/MacetaCubo10x10.webp";
  producto10.listImagen[1] = "./img/macetas/MacetaCubo10x10_2.jpg";
  producto10.listImagen[2] = "./img/macetas/MacetaCubo10x10_3.jpg";
  producto10.descLarga=`
  Son perfectas para jardines de exterior dependiendo de la decoración y el espacio de que se dispone. También se pueden utilizar para interior, son duraderas y resistentes.
Fabricadas en fibrocemento con malla de refuerzo interno que les da mayor resistencia y durabilidad. Tenemos a disposición variedad de diseños y tamaños para lograr las mejores decoraciones en su hogar.
  `;
  catalogoProductos.push(producto10);

  var producto11 = new Producto(
    "Maceta esmaltada",
    "Maceta Gaudi",
    "Macetas"
  );
  producto11.precio = 909;
  producto11.stock = 3;
  producto11.listImagen[0] = "./img/macetas/MacetaGaudi1.webp";
  producto11.listImagen[1] = "./img/macetas/MacetaGaudi2.webp";
  producto11.listImagen[2] = "./img/macetas/MacetaGaudi3.webp";
  producto11.descLarga=`
  Macetas 100% terracota, fabricada con barro y esmaltes de primera calidad. Con su estilo clásico son ideales para todo tipo de plantas, con su amplia variedad de colores y tamaños pueden llenar de vida cualquier espacio.
  `;
  catalogoProductos.push(producto11);

  var producto12 = new Producto(
    "Larga 80x40",
    "Maceta larga 80x40x40cm",
    "Macetas"
  );
  producto12.precio = 3460;
  producto12.stock = 5;
  producto12.listImagen[0] = "./img/macetas/macetaLarga1.webp";
  producto12.listImagen[1] = "./img/macetas/macetaLarga2.webp";
  producto12.listImagen[2] = "./img/macetas/macetaLarga3.webp";
  producto12.descLarga=`
  Son perfectas para jardines de exterior dependiendo de la decoración y el espacio de que se dispone. También se pueden utilizar para interior, son duraderas y resistentes.
Fabricadas en fibrocemento con malla de refuerzo interno que les da mayor resistencia y durabilidad. Tenemos a disposición variedad de diseños y tamaños para lograr las mejores decoraciones en su hogar.
  `;
  catalogoProductos.push(producto12);

//Sustratos

var producto13 = new Producto(
  "Tierra x 5Lts",
  "Tierra Fértil Roots Landiner x5Lts",
  "Sustratos"
);
producto13.precio = 226;
producto13.stock = 20;
producto13.listImagen[0] = "./img/sustratos/tierraroots1.webp";
producto13.listImagen[1] = "./img/sustratos/tierraroots2.webp";
producto13.descLarga=`
Se utiliza en la plantación plantines, arbustos y arboles. También para cubrir semillas de césped en la siembra. Al colocar el césped en panes alfombra, incorporar en las juntas para facilitar la unión. Se puede utilizar también para mejorar la tierra de la huerta y la de arboles frutales.
Modo de uso: Para plantar en canteros y macetas incorporar alrededor del pan de tierra en proporción del 50%. Para césped utilizar del 30% al 50% de tierra abonada loma verde.
La tierra abonada loma verde se elabora con tierra de buena calidad enriquecida con estiércol de caballo compostado.
CARACTERÍSTICAS QUÍMICAS:
-Humedad: 22-25%
-Mat. orgánica s/ tal cual.11-12%
-Cenizas s/ tal cual. 65-67%
-Relación C/N: 21
-Cond. eléctrica: 2,3 mS/cm
-pH:6,8  
  `;
catalogoProductos.push(producto13);

var producto14 = new Producto(
  "Tierra x 5dm3",
  "Tierra Fértil 5Dm3",
  "Sustratos"
);
producto14.precio = 307;
producto14.stock = 15;
producto14.listImagen[0] = "./img/sustratos/tierralandiner1.jpg";
producto14.listImagen[1] = "./img/sustratos/tierralandiner2.jpg";
producto14.descLarga=`
Sustrato especialmente desarrollado para ser utilizado como tierra para nivelar terrenos extensos o en sitios donde los desniveles presentes tengan un volumen importante y el uso de otros sustratos no resulte económico.
Presenta una excelente relación precio producto que lo hace ideal para el uso en obras.
CARACTERÍSTICAS: Composición Química:
-Cada 100 g. (con su humedad natural)
-Humedad: 35 – 40%
-Ceniza tal cual: 40 – 45%
-pH: 6.2 – 4 M.O. tal cual: 15 – 20 %
-C/N: 7.7 C:E: 1.1 mmhos /cm.
  `;
catalogoProductos.push(producto14);

var producto15 = new Producto(
  "Compost x 5Lts",
  "Compost Landiner x5Lts",
  "Sustratos"
);
producto15.precio = 473;
producto15.stock = 10;
producto15.listImagen[0] = "./img/sustratos/compost5lt1.jfif";
producto15.listImagen[1] = "./img/sustratos/compost5lt2.jfif";
producto15.descLarga=`
El Compost Neutro Loma Verde se utiliza para mejorar la calidad de la tierra al incorporar materia orgánica. Aumenta la aireación y la capacidad de retener el agua del suelo, facilitando el desarrollo de las raíces y la disponibilidad de agua para las mismas.
Este sustrato tiene un Ph adecuado y está indicado en la preparación del sustrato de maceteros y canteros, y en la plantación de plantines, árboles y arbustos. Así como también para la colocación de césped y la preparación de la huerta.
CARACTERÍSTICAS QUÍMICAS:
-Humedad: 15-20%
-Mat. orgánica s/ tal cual.11-12%
-Cenizas s/ tal cual.60-61%
-Relación C/N :19
-Nitrógeno: 0.4%
-Cond. eléctrica: 2,6 mS/cm
-pH:6,4
  `;
catalogoProductos.push(producto15);

var producto16 = new Producto(
  "Abono 5Lts",
  "Super Abono Terrafertil 5Lts 36X5X21cm",
  "Sustratos"
);
producto16.precio = 584;
producto16.stock = 10;
producto16.listImagen[0] = "./img/sustratos/Abono5Lts1.webp";
producto16.listImagen[1] = "./img/sustratos/Abono5Lts2.webp";
producto16.descLarga=`
Se utiliza en la plantación plantines, arbustos y arboles. También para cubrir semillas de césped en la siembra. Al colocar el césped en panes alfombra, incorporar en las juntas para facilitar la unión. Se puede utilizar también para mejorar la tierra de la huerta y la de arboles frutales.
Modo de uso: Para plantar en canteros y macetas incorporar alrededor del pan de tierra en proporción del 50%. Para césped utilizar del 30% al 50% de tierra abonada loma verde.
La tierra abonada loma verde se elabora con tierra de buena calidad enriquecida con estiércol de caballo compostado.
CARACTERÍSTICAS QUÍMICAS:
-Humedad: 22-25%
-Mat. orgánica s/ tal cual.11-12%
-Cenizas s/ tal cual. 65-67%
-Relación C/N: 21
-Cond. eléctrica: 2,3 mS/cm
-pH:6,8
  `;
catalogoProductos.push(producto16);

var producto17 = new Producto(
  "Compost 5Lts",
  "Compost Fértilterrafertil 5Lts 36X5X21cm",
  "Sustratos"
);
producto17.precio = 706;
producto17.stock = 3;
producto17.listImagen[0] = "./img/sustratos/compostterrafertil1.jfif";
producto17.listImagen[1] = "./img/sustratos/compostterrafertil2.png";
producto17.descLarga=`
Aumenta la retención de nutrientes.
Evita cambios en pH.
Evita la compactación, favoreciendo la aireación y respiración de las raíces.
Aumenta la capacidad de la retención hídrica manteniendo por más tiempo la humedad en el suelo.
Evita los cambios bruscos de temperatura en el suelo.
Humedad 40-45 %
pH 7,5-9,0
C:E 0,5- 1,5 mS/cm
M.O. 40-60 %
Ceniza 10-20%
  `;
catalogoProductos.push(producto17);

var producto18 = new Producto(
  "Humus De Lombriz x 10Lts",
  "Humus De Lombriz Landiner x10Lts",
  "Sustratos"
);
producto18.precio = 744;
producto18.stock = 5;
producto18.listImagen[0] = "./img/sustratos/Humus_x_5Lts1.webp";
producto18.listImagen[1] = "./img/sustratos/Humus_x_5Lts2.jfif";
producto18.descLarga=`
El Humus de Lombriz es un componente orgánico obtenido de la digestión que las lombrices rojas californianas producen ingiriendo residuos naturales.
Este sustrato es un excelente restaurador del suelo, ya que va devolviendo a la tierra, los elementos esenciales que utilizan las plantas, y a la vez mejorando la estructura física del mismo.
El humus también acelera la germinación, a la vez que el desarrollo aéreo (foliar y floral) y el desarrollo radicular.
Para su aplicación se recomiendo esparcir el sustrato directamente sobre la tierra, bien distribuido y regar abundantemente, nunca enterrarlo ya que las bacterias que debe incorporarse al suelo necesitan oxígeno.
  `;
catalogoProductos.push(producto18);

//Químicos

var producto19 = new Producto(
  "Hormiguicida X 100 Grs",
  "Hormiguicida Mirex Estuche Mamboreta X 100 Grs",
  "Químicos"
);
producto19.precio = 600;
producto19.stock = 20;
producto19.listImagen[0] = "./img/quimicos/HormiguicidaX1001.webp";
producto19.listImagen[1] = "./img/quimicos/HormiguicidaX1002.webp";
producto19.descLarga=`
No tóxico para el hombre o animales domésticos
Excelente atrayente
Para cualquier época del año
DOSIS PROMEDIO: 20 ó 30 grs. por hormiguero
CONTROLA: Hormigas Cortadoras.
PRESENTACIÓN: Estuches de 100, 200 y 500 grs.
CARENCIA: No presenta periodo de carencia.
  `;
catalogoProductos.push(producto19);

var producto20 = new Producto(
  "Hor-Tal 100 Gr",
  "Mix Hor-Tal 100 Gr",
  "Químicos"
);
producto20.precio = 619;
producto20.stock = 15;
producto20.listImagen[0] = "./img/quimicos/MixHor-Tal100gr1.webp";
producto20.listImagen[1] = "./img/quimicos/MixHor-Tal100gr2.jpg";
producto20.descLarga=`
Hor-Tal Hormiguicida líquido es un insecticida que actúa por contacto o ingestión especialmente formulado para control de hormigas en parques, jardines y grandes áreas exteriores. La excelente efectividad de HorTal líquido Hormiguicida se basa en su poder de volteo y altísima permanencia (residualidad) en el ambiente tratado, aun después de las lluvias.El hecho de que los microorganismos y la luz solar degraden lenta y naturamente el producto, lo convierten en una forma segura y amigable con el medio ambiente de tratar las hormigas y evitar sus daños.
Se degrada naturalmente por efecto de la luz solar y microorganismos. Hor-Tal Evolución fue desarrollado con el objetivo de lograr la equilibridad conjunción entre una mayor seguridad para el usuario, protección del ambiente y eficiencia.             
  `;
catalogoProductos.push(producto20);

var producto21 = new Producto(
  "Hormixan Pellet",
  "Hormixan Mirex Cebo En Pellet",
  "Químicos"
);
producto21.precio = 845;
producto21.stock = 10;
producto21.listImagen[0] = "./img/quimicos/Hormixan1.webp";
producto21.listImagen[1] = "./img/quimicos/Hormixan2.jpg";
producto21.descLarga=`
Hormixan Mirex es un cebo hormiguicida específico para el control de las hormigas cortadoras presentes en el hogar. Su poder atractivo hace que las hormigas dejen su carga y tomen el cebo para llevarlo al interior de la honguera donde mata al hongo del cual se alimentan y a la colonia. Su exclusiva fórmula actúa sobre el sistema nervioso de las hormigas, causando su parálisis y eliminando así a toda la colonia. Su acción lenta (3 a 5 días) permite su aceptación y transmisión por parte de la colonia de hormigas sin alertarlas de su poder insecticida.
  `;
catalogoProductos.push(producto21);

var producto22 = new Producto(
  "Matayuyos 110cc",
  "Matayuyos Liquido Herba Glex 110cc",
  "Químicos"
);
producto22.precio = 999;
producto22.stock = 10;
producto22.listImagen[0] = "./img/quimicos/matayuyo1.webp";
producto22.listImagen[1] = "./img/quimicos/matayuyo2.webp";
producto22.descLarga=`
Ingrediente activo: MCPA 28%
Tipo de Formulación: Concentrado Soluble.
Aptitud: Herbicida.
Características: Herbicida sistémico, se traslada por el floema hacia las zonas de crecimiento donde actúa .Producto selectivo.
Recomendaciones: Los mejores resultados se observan cuando las malezas se encuentran creciendo activamente, en condiciones optimas de humedad. No aplicar con condiciones de stress.
visto Cultivos: Indicado para el control malezas susceptibles de hoja ancha en trigo, cebada, centeno, avena, maíz sorgo , lino, maní, arveja, lenteja y papa. Su uso se recomienda también en campos naturales y praderas de gramíneas y césped.
Presentaciones: Bidones de 20 lts y 1 lts..
  `;
catalogoProductos.push(producto22);

var producto23 = new Producto(
  "Triple 15 650gr",
  "Triple 15 Landiner Landiner 650gr",
  "Químicos"
);
producto23.precio = 1013;
producto23.stock = 3;
producto23.listImagen[0] = "./img/quimicos/Triple15_650gr1.webp";
producto23.listImagen[1] = "./img/quimicos/Triple15_650gr2.jpg";
producto23.descLarga=`
15% fósforo – 15% potasio- 15% nitrógeno
Fertilizante químico de liberación lenta que provee una nutrición equilibrada. Para todo tipo de plantas en jardines o macetas. Favorece los tejidos de sostén. Estimula el desarrollo de raíces y tallo. Aumenta la resistencia a enfermedades y heladas.
  `;
catalogoProductos.push(producto23);

var producto24 = new Producto(
  "Fertilizante 330cc",
  "Fertilizante Terrafertil Líquido Orquideas 330cc 25x20x15,5cm",
  "Químicos"
);
producto24.precio = 744;
producto24.stock = 5;
producto24.listImagen[0] = "./img/quimicos/Fertilizante_330cc1.webp";
producto24.listImagen[1] = "./img/quimicos/Fertilizante_330cc2.jpg";
producto24.descLarga=`
Consejos y datos útiles
En la disolución presenta baja conductividad por lo que puede utilizarse hasta en las especies más sensibles.
Además de la disponibilidad de los nutrientes, las raíces necesitan el adecuado equilibrio de agua y oxígeno. Buscá dentro de nuestros sustratos y enmiendas la opción adecuada para mejorar las propiedades físicas de tus canteros y macetas.
Características químicas
N 7,5 %
P 14 %
K 7,5 %
  `;
catalogoProductos.push(producto24);


};