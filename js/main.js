// Atajo para document
const $ = document;

// Productos
const Productos = [
    // Frutas
    {
        id: 1,
        nombre: "Manzana",
        categoria: "Frutas",
        precio: 100,
    },
    {
        id: 2,
        nombre: "Banana",
        categoria: "Frutas",
        precio: 80,
    },
    {
        id: 3,
        nombre: "Naranja",
        categoria: "Frutas",
        precio: 90,
    },
    {
        id: 4,
        nombre: "Pera",
        categoria: "Frutas",
        precio: 110,
    },
    {
        id: 5,
        nombre: "Uva",
        categoria: "Frutas",
        precio: 120,
    },
    // Verduras
    {
        id: 6,
        nombre: "Lechuga",
        categoria: "Verduras",
        precio: 70,
    },
    {
        id: 7,
        nombre: "Tomate",
        categoria: "Verduras",
        precio: 95,
    },
    {
        id: 8,
        nombre: "Zanahoria",
        categoria: "Verduras",
        precio: 60,
    },
    {
        id: 9,
        nombre: "Cebolla",
        categoria: "Verduras",
        precio: 50,
    },
    {
        id: 10,
        nombre: "Pimiento",
        categoria: "Verduras",
        precio: 85,
    },
    // Hongos
    {
        id: 11,
        nombre: "Champiñón",
        categoria: "Hongos",
        precio: 130,
    },
    {
        id: 12,
        nombre: "Portobello",
        categoria: "Hongos",
        precio: 150,
    },
    {
        id: 13,
        nombre: "Shiitake",
        categoria: "Hongos",
        precio: 170,
    },
    {
        id: 14,
        nombre: "Enoki",
        categoria: "Hongos",
        precio: 140,
    },
    {
        id: 15,
        nombre: "Ostra",
        categoria: "Hongos",
        precio: 160,
    },
];

let listaProductos = $.getElementById("lista-productos");

Productos.forEach((producto) => {
    let productoDiv = $.createElement("div");
    productoDiv.classList.add("card");

    let nombre = $.createElement("h3");
    nombre.textContent = producto.nombre;

    let categoria = $.createElement("p");
    categoria.textContent = `Categoría: ${producto.categoria}`;

    let precio = $.createElement("p");
    precio.textContent = `Precio: $${producto.precio}`;

    productoDiv.appendChild(nombre);
    productoDiv.appendChild(categoria);
    productoDiv.appendChild(precio);

    listaProductos.appendChild(productoDiv);
});