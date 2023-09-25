////1 crear productos (y que se agregue a la lista de "ver stock productos")
/////2 comprar productos (por el momento no logre hacerlo )
/////3 ver stock de productos
/////4  salir vuelva pronto . 







//creo la clase productos.
class producto{
    constructor(nombre,precio,fechaVencimiento,stock){
        this.nombre=nombre;
        this.precio=precio;
        this.fechaVencimiento=fechaVencimiento;
        this.stock=stock; //stock de productos
    } 
        iva(){
          alert(`el precio total con iva es ${producto.precio}*${1.15}`)
        }
  }
  
  
  let harina=new producto('harina',5,'2023/12/05',10);
  let cocaCola=new producto('coca cola',10,'2025/11/05',20);
  let pan=new producto('pan',1,'2024/12/05',30)
  let fideo=new producto('fideo',450,'2025/12/04',40);
  let mermelada=new producto('mermelada',810,'2023/12/07',90); 

  //array de productos, voy a sumar mas en el futuro....
const productos=[harina,cocaCola,pan,fideo,mermelada]  

alert(`Bienvenido a la tienda !!! \n se tiene los siguientes productos : \n\n 1) - ${harina.nombre}\n 2) - ${cocaCola.nombre}\n 3) - ${pan.nombre}\n 4) - ${fideo.nombre}\n 5) - ${mermelada.nombre}`);  

function agregarProducto(){   
      let nombre=prompt('ingrese el nombre de producto para agregar en la lista');
      let precio=parseInt(prompt('ingrese el precio del producto'))
      let stock=parseInt(prompt('ingrese el numero de stock disponible'));  
      let fechaVencidmiento=prompt('ingrese la fecha de vencimiento en formato \n 0000/00/00 \n Año/mes/dia')
      let nuevoProducto = new producto(nombre,precio,fechaVencidmiento,stock)
productos.push(nuevoProducto)
}   



function comprarProductos(){
// alert prompnt que desea compar?
// 1 fideos 2 harina 3 pan 4 cocacola   productos=[harina,cocaCola,pan,]
// compro harina indice 0 = cuantas unidades?  quier 20
// usted compro 20 unidades de harina
//NO LOGRE HACERLO SIQUIERA CON EL CHATGPT.
}

//
function verProducto(){
    // use for each para buscar los nombres de los productos
       let Nombres=[];
  
      productos.forEach((detalle)=>{
  
        const nombre= detalle.nombre;
        Nombres.push(nombre);
      })
      let productoSeleccionado= prompt(`De cuál de estos productos desea saber el Stock disponible ? \n\n${Nombres}\n\nEscriba el producto a continuación :`);
   
    // use find para encontrar el producto seleccionado        
      let pepito=productos.find((producto)=>producto.nombre ===productoSeleccionado)
  
      alert( `Hay ${pepito.stock} unidades disponibles de ${pepito.nombre}`)
  }
  
  let iniciar=0;
  while(iniciar===0){
    let seleccion=parseInt(prompt('Escriba en valor "Número" la opcion deseada :  \n\n1. Crear productos\n2. Comprar producto (no disponible por el momento)\n3. Ver stock de productos\n4. Salir'));
  
  if(seleccion===1){
      agregarProducto()
  }

    // Aca defino la función para mostrar el stock de todos los productos
  if(seleccion===3){
    verProducto()
  }

  if(seleccion===4){
    alert ('gracias por elegirnos, esperamos su proximo pedido!')
    break
  }
  
  iniciar=parseInt(prompt('0) - para volver al menu\n1) - para salir'));{
 }     
}
alert('Gracias por su visita');