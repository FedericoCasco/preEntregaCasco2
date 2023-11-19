//   prueba de CHAT GPT Openai


class Producto {
    constructor(nombre, precio, fechaVencimiento, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.fechaVencimiento = fechaVencimiento;
        this.stock = stock; // stock de productos
    }
    
    iva() {
        return this.precio * 1.15;
    }
}

let harina = new Producto('harina', 5, '2023/12/05', 10);
let cocaCola = new Producto('coca cola', 10, '2025/11/05', 20);
let pan = new Producto('pan', 1, '2024/12/05', 30);
let fideo = new Producto('fideo', 450, '2025/12/04', 40);
let mermelada = new Producto('mermelada', 810, '2023/12/07', 90);

const productos = [harina, cocaCola, pan, fideo, mermelada];

function agregarProducto() {
    let nombre = prompt('Ingrese el nombre de producto para agregar en la lista');
    let precio = parseInt(prompt('Ingrese el precio del producto'));
    let stock = parseInt(prompt('Ingrese el número de stock disponible'));
    let fechaVencimiento = prompt('Ingrese la fecha de vencimiento en formato Año/mes/día (0000/00/00)');
    let nuevoProducto = new Producto(nombre, precio, fechaVencimiento, stock);
    productos.push(nuevoProducto);
}



function comprarProductos() {
    let nombres = productos.map(detalle => detalle.nombre);
    let productoSeleccionado = prompt(`¿Qué producto desea comprar?\n${nombres.join('\n')}\nEscriba el producto a continuación:`);
    let producto = productos.find(prod => prod.nombre === productoSeleccionado);

    if (producto && producto.stock > 0) {
        let cantidadCompra = parseInt(prompt(`Ingrese la cantidad que desea comprar (Stock disponible: ${producto.stock}):`));

        if (cantidadCompra <= producto.stock) {
            producto.stock -= cantidadCompra;
            alert(`Ha comprado ${cantidadCompra} unidades de ${producto.nombre}. Gracias por su compra.`);
        } else {
            alert(`Lo sentimos, no hay suficiente stock disponible para ${producto.nombre}`);
        }
    } else if (producto && producto.stock === 0) {
        alert(`Lo sentimos, ${producto.nombre} está agotado.`);
    } else {
        alert('Producto no encontrado');
    }
}




function verStockProducto() {
    let nombres = productos.map(detalle => detalle.nombre);
    let productoSeleccionado = prompt(`¿De cuál de estos productos desea saber el stock disponible?\n${nombres.join('\n')}\nEscriba el producto a continuación:`);
    let producto = productos.find(prod => prod.nombre === productoSeleccionado);

    if (producto) {
        alert(`Hay ${producto.stock} unidades disponibles de ${producto.nombre}`);
    } else {
        alert('Producto no encontrado');
    }
}

function verPrecio() {
    let nombres = productos.map(detalle => detalle.nombre);
    let productoSeleccionado = prompt(`¿De cuál de estos productos desea saber el Precio por Unidad?\n${nombres.join('\n')}\nEscriba el producto a continuación:`);
    let producto = productos.find(prod => prod.nombre === productoSeleccionado);

    if (producto) {
        alert(`El precio por unidad de ${producto.nombre} es de ${producto.precio * 1.15}$`);
        // iva() {
        //     return this.precio * 1.15;
        // }
    } else {
        alert('Producto no encontrado');
    }
}

function verInfoCompleta() {
    let nombres = productos.map(detalle => detalle.nombre);
    let productoSeleccionado = prompt(`¿De cuál de estos productos desea ver la información completa?\n${nombres.join('\n')}\nEscriba el producto a continuación:`);
    let producto = productos.find(prod => prod.nombre === productoSeleccionado);

    if (producto) {
        alert(`La Información completa del producto ${producto.nombre} es:\n- Precio: ${producto.precio}$\n- F.Vencimiento: ${producto.fechaVencimiento}\n- Stock: ${producto.stock}`);
    } else {
        alert('Producto no encontrado');
    }
}

let iniciar = 0;
while (iniciar === 0) {
    let seleccion = parseInt(prompt('Escriba el número de la opción deseada:\n\n1. Crear producto y agregar a la lista.\n2. Comprar producto \n3. Ver stock de productos\n4. Ver precio de la unidad del producto ( + el 15 % de IVA )\n5. Ver información completa del producto\n6. Salir'));

    if (seleccion === 1) {
        agregarProducto();
    } else if (seleccion === 2) {
        comprarProductos();
    } else if (seleccion === 3) {
        verStockProducto();
    } else if (seleccion === 4) {
        verPrecio();
    } else if (seleccion === 5) {
        verInfoCompleta();
    } else if (seleccion === 6) {
        alert('¡Gracias por elegirnos, esperamos su próximo pedido!');
        break;
    }

    iniciar = parseInt(prompt('0 - Volver al menú\n1 - Salir'));
}
alert('¡Gracias por su visita!');
