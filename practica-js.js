
const productos = [
  { id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
  { id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
  { id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
  { id: 4, nombre: 'Laptop', precio: 2500000, categoria: 'Computadores', stock: 4 },
  { id: 5, nombre: 'Impresora', precio: 450000, categoria: 'Perifericos', stock: 2 },
  { id: 6, nombre: 'Webcam', precio: 120000, categoria: 'Perifericos', stock: 8 },
  { id: 7, nombre: 'Micrófono', precio: 180000, categoria: 'Audio', stock: 0 },
  { id: 8, nombre: 'Diadema', precio: 150000, categoria: 'Audio', stock: 6 },
  { id: 9, nombre: 'Tablet', precio: 800000, categoria: 'Moviles', stock: 3 },
  { id: 10, nombre: 'Smartphone', precio: 1500000, categoria: 'Moviles', stock: 5 }
];


console.log("========= PRODUCTOS DISPONIBLES =========");
const disponibles = productos.filter(producto => producto.stock > 0);
console.log(disponibles);


console.log("========= PRODUCTO =========");
const producto3 = productos.find(producto => producto.id === 3);
console.log(producto3);

console.log("========= PRODUCTOS CON PRECIO MAYOR A 100.000 =========");
const mayor = productos.filter(producto => producto.precio > 100000);
console.log(mayor);


console.log("========= PRODUCTOS CON PRECIO ENTRE 50.000 Y 200.000 =========");
const rango = productos.filter(producto => producto.precio > 50000 && producto.precio < 200000);
console.log(rango);

const productosRango= productos.filter(
    producto => productos.precio >= 50000 &&
    producto.precio <= 20000
);
 console.log(productosRango);




console.log("===== PRODUCTOS AUDIO=====")
const productosAudio = productos.filter(
  producto => producto.categoria === 'Audio'
);


console.log(productosAudio);


console.log("===== PRODUCTOS id 5====")

const productos5 = productos.find(
    producto => producto.id === 5
);
console.log(productos5);

console.log("==== FUCTION ====")

function buscarProducto(id){
    return productos.find(
        producto => producto.id === id
    );
}

console.log(buscarProducto(3));
console.log(buscarProducto(5));
console.log(buscarProducto(8));


console.log("==== so ===")


const hayAgotados = productos.some(
  producto => producto.stock === 0
);

const hayProductoMillon = productos.some(
  producto => producto.precio > 1000000
);

const preciosValidos = productos.every(
  producto => producto.precio > 0
);

const stockValido = productos.every(
  producto => producto.stock >= 0
);

const valorInventario = productos.reduce(
  (total, producto) => total + (producto.precio * producto.stock),
  0
);

console.log("¿Existe algún producto agotado?", hayAgotados);
console.log("¿Existe algún producto con precio mayor a $1.000.000?", hayProductoMillon);
console.log("¿Todos los productos tienen precio mayor que cero?", preciosValidos);
console.log("¿Todos los productos tienen stock mayor o igual que cero?", stockValido);
console.log("Valor total del inventario:", valorInventario);

console.log("==== javascript moderno ====")


console.log(
  `El producto ${productos[0].nombre} cuesta $${productos[0].precio}`
);


const { nombre, precio, stock } = productos[0];

console.log(nombre, precio, stock);



const productoActualizado = {
  ...productos[0],
  precio: 65000,
  stock: 8
};

console.log(productoActualizado);



const estado =
  productoActualizado.stock > 0
    ? "Disponible"
    : "Agotado";

console.log(estado);


const productoModificado = {
  ...productos[2],
  precio: 700000,
  stock: 10
};

const estadoProducto =
  productoModificado.stock > 0
    ? "Disponible"
    : "Agotado";

console.log(
  `El producto ${productoModificado.nombre} cuesta $${productoModificado.precio} y se encuentra ${estadoProducto}`
);


export const productos = [
  { id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
  { id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
  { id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
  { id: 4, nombre: 'Laptop', precio: 2500000, categoria: 'Computadores', stock: 2 },
  { id: 5, nombre: 'Impresora', precio: 450000, categoria: 'Perifericos', stock: 1 },
  { id: 6, nombre: 'Webcam', precio: 120000, categoria: 'Perifericos', stock: 8 },
  { id: 7, nombre: 'Microfono', precio: 180000, categoria: 'Audio', stock: 0 },
  { id: 8, nombre: 'Diadema', precio: 150000, categoria: 'Audio', stock: 6 },
  { id: 9, nombre: 'Tablet', precio: 800000, categoria: 'Moviles', stock: 4 },
  { id: 10, nombre: 'Smartphone', precio: 1500000, categoria: 'Moviles', stock: 7 }
];