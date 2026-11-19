console.log("JavaScript listo para practicar");

// =====================================
// RETO 1 - FUNCIONES
// =====================================

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

function calcularPromedio(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

/*
return devuelve un valor para reutilizarlo.
console.log solo muestra información en consola.
*/

console.log("Suma:", sumar(10, 5));
console.log("Resta:", restar(10, 5));
console.log("Multiplicación:", multiplicar(10, 5));
console.log("División:", dividir(10, 5));
console.log("Promedio:", calcularPromedio(4.5, 3.8, 5.0));

// =====================================
// RETO 2 - ARROW FUNCTIONS
// =====================================

const cuadrado = numero => numero * numero;

const esMayorEdad = edad => edad >= 18;

const nombreCompleto = (nombre, apellido) =>
  `${nombre} ${apellido}`;

console.log("Cuadrado:", cuadrado(5));
console.log("Mayor de edad:", esMayorEdad(20));
console.log("Nombre completo:", nombreCompleto("Juan", "Pérez"));

// =====================================
// RETO 3 - ARREGLOS Y OBJETOS
// =====================================

const productos = [
  { id: 1, nombre: "Mouse", precio: 50000, categoria: "Perifericos", stock: 5 },
  { id: 2, nombre: "Teclado", precio: 90000, categoria: "Perifericos", stock: 0 },
  { id: 3, nombre: "Monitor", precio: 650000, categoria: "Pantallas", stock: 3 },
  { id: 4, nombre: "Laptop", precio: 2500000, categoria: "Computadores", stock: 2 },
  { id: 5, nombre: "Impresora", precio: 450000, categoria: "Perifericos", stock: 1 },
  { id: 6, nombre: "Webcam", precio: 120000, categoria: "Perifericos", stock: 8 },
  { id: 7, nombre: "Micrófono", precio: 180000, categoria: "Audio", stock: 0 },
  { id: 8, nombre: "Diadema", precio: 150000, categoria: "Audio", stock: 6 },
  { id: 9, nombre: "Tablet", precio: 800000, categoria: "Moviles", stock: 4 },
  { id: 10, nombre: "Smartphone", precio: 1500000, categoria: "Moviles", stock: 7 }
];

// =====================================
// RETO 4 - FOREACH
// =====================================

console.log("\n=== FOR EACH ===");

productos.forEach((producto, indice) => {
  console.log(
    `${indice + 1}. ${producto.nombre} - $${producto.precio} - stock: ${producto.stock}`
  );
});

// =====================================
// RETO 5 - MAP
// =====================================

console.log("\n=== MAP ===");

const nombres = productos.map(producto => producto.nombre);

const preciosConIva = productos.map(
  producto => producto.precio * 1.19
);

const nombresMayuscula = productos.map(
  producto => producto.nombre.toUpperCase()
);

const resumenProductos = productos.map(
  producto => `${producto.nombre} cuesta $${producto.precio}`
);

console.log("Nombres:", nombres);
console.log("Precios con IVA:", preciosConIva);
console.log("Nombres mayúscula:", nombresMayuscula);
console.log("Resumen:", resumenProductos);

// =====================================
// RETO 6 - FILTER Y FIND
// =====================================

console.log("\n=== FILTER Y FIND ===");

const productosCaros = productos.filter(
  producto => producto.precio > 100000
);

const productosRango = productos.filter(
  producto =>
    producto.precio >= 50000 &&
    producto.precio <= 200000
);

const categoriaAudio = productos.filter(
  producto => producto.categoria === "Audio"
);

const producto5 = productos.find(
  producto => producto.id === 5
);

function buscarProducto(id) {
  return productos.find(
    producto => producto.id === id
  );
}

console.log("Productos > 100.000:", productosCaros);
console.log("Productos entre 50.000 y 200.000:", productosRango);
console.log("Categoría Audio:", categoriaAudio);
console.log("Producto id 5:", producto5);
console.log("Buscar producto id 8:", buscarProducto(8));

// =====================================
// RETO 7 - SOME, EVERY Y REDUCE
// =====================================

console.log("\n=== SOME EVERY REDUCE ===");

const hayAgotados = productos.some(
  producto => producto.stock === 0
);

const hayMillonario = productos.some(
  producto => producto.precio > 1000000
);

const preciosValidos = productos.every(
  producto => producto.precio > 0
);

const stockValido = productos.every(
  producto => producto.stock >= 0
);

const valorInventario = productos.reduce(
  (total, producto) =>
    total + producto.precio * producto.stock,
  0
);

console.log("¿Hay agotados?", hayAgotados);
console.log("¿Hay productos > 1 millón?", hayMillonario);
console.log("¿Todos tienen precio > 0?", preciosValidos);
console.log("¿Todos tienen stock >= 0?", stockValido);
console.log("Valor inventario:", valorInventario);

// =====================================
// RETO 8 - TEMPLATE LITERALS
// =====================================

console.log("\n=== TEMPLATE LITERALS ===");

console.log(
  `El producto ${productos[0].nombre} cuesta $${productos[0].precio}`
);

// =====================================
// RETO 9 - DESESTRUCTURACIÓN
// =====================================

console.log("\n=== DESESTRUCTURACIÓN ===");

const { nombre, precio, stock } = productos[0];

console.log(nombre);
console.log(precio);
console.log(stock);

// =====================================
// RETO 10 - SPREAD Y TERNARIO
// =====================================

console.log("\n=== SPREAD Y TERNARIO ===");

const productoActualizado = {
  ...productos[0],
  precio: 60000,
  stock: 8
};

const estado =
  productoActualizado.stock > 0
    ? "Disponible"
    : "Agotado";

console.log(productoActualizado);

console.log(
  `El producto ${productoActualizado.nombre} cuesta $${productoActualizado.precio} y está ${estado}`
);