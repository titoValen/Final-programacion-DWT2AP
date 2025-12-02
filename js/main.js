// Atajo para document
const $ = document;

// Productos
const productos = [
    // Frutas
    {
        id: 1,
        nombre: "Manzana",
        imagen: "manzana.webp",
        categoria: "Frutas",
        precio: 100,
    },
    {
        id: 2,
        nombre: "Banana",
        imagen: "banana.webp",
        categoria: "Frutas",
        precio: 80,
    },
    {
        id: 3,
        nombre: "Naranja",
        imagen: "naranja.webp",
        categoria: "Frutas",
        precio: 90,
    },
    {
        id: 4,
        nombre: "Pera",
        imagen: "pera.webp",
        categoria: "Frutas",
        precio: 110,
    },
    {
        id: 5,
        nombre: "Uva",
        imagen: "uva.webp",
        categoria: "Frutas",
        precio: 120,
    },
    // Verduras
    {
        id: 6,
        nombre: "Lechuga",
        imagen: "lechuga.webp",
        categoria: "Verduras",
        precio: 70,
    },
    {
        id: 7,
        nombre: "Tomate",
        imagen: "tomate.webp",
        categoria: "Verduras",
        precio: 95,
    },
    {
        id: 8,
        nombre: "Zanahoria",
        imagen: "zanahoria.webp",
        categoria: "Verduras",
        precio: 60,
    },
    {
        id: 9,
        nombre: "Cebolla",
        imagen: "cebolla.webp",
        categoria: "Verduras",
        precio: 50,
    },
    {
        id: 10,
        nombre: "Morron",
        imagen: "morron.webp",
        categoria: "Verduras",
        precio: 85,
    },
    // Hongos
    {
        id: 11,
        nombre: "Champiñón",
        imagen: "champiñon.webp",
        categoria: "Hongos",
        precio: 130,
    },
    {
        id: 12,
        nombre: "Portobello",
        imagen: "portobello.webp",
        categoria: "Hongos",
        precio: 150,
    },
    {
        id: 13,
        nombre: "Shiitake",
        imagen: "shiitake.webp",
        categoria: "Hongos",
        precio: 170,
    },
    {
        id: 14,
        nombre: "Enoki",
        imagen: "enoki.webp",
        categoria: "Hongos",
        precio: 140,
    },
    {
        id: 15,
        nombre: "Ostra",
        imagen: "ostra.webp",
        categoria: "Hongos",
        precio: 160,
    },
];

// Renderizado de productos
let listaProductos = $.getElementById("lista-productos");

productos.forEach((prod) => {
    let productoDiv = $.createElement("div");
    productoDiv.classList.add("card");

    // Crear imagenes
    let imagen = $.createElement("img");
    imagen.src = `img/producto/${prod.imagen}`;
    imagen.alt = prod.nombre;

    // Crear nombre
    let nombre = $.createElement("h3");
    nombre.textContent = prod.nombre;

    // Crear contenido
    let contenido = $.createElement("div");
    contenido.classList.add("contenido");

    let categoria = $.createElement("p");
    categoria.textContent = `Categoría: ${prod.categoria}`;

    let precio = $.createElement("p");
    precio.textContent = `Precio: $${prod.precio}`;

    contenido.appendChild(categoria);
    contenido.appendChild(precio);

    // Crear botón añadir al carrito
    let conteinerBtn = $.createElement("div");
    conteinerBtn.classList.add("conteiner-btn");

    let botonAñadirCarrito = $.createElement("button");
    botonAñadirCarrito.textContent = "Añadir carrito";
    botonAñadirCarrito.classList.add("btn-añadir-carrito");

    conteinerBtn.appendChild(botonAñadirCarrito);

    // Crear botón ver más
    let botonVerMas = $.createElement("button");
    botonVerMas.textContent = "Ver más";
    botonVerMas.classList.add("btn-ver-mas");

    conteinerBtn.appendChild(botonVerMas);

    // Estructura del producto
    productoDiv.appendChild(imagen);
    productoDiv.appendChild(nombre);
    productoDiv.appendChild(contenido);
    productoDiv.appendChild(conteinerBtn);

    listaProductos.appendChild(productoDiv);
});

// Renderizar los botones de categorías
let filtrosDiv = $.getElementById("filtros-categorias");
const categorias = ["Todas", "Frutas", "Verduras", "Hongos"];

categorias.forEach((cat) => {
    let boton = $.createElement("button");
    boton.textContent = cat;
    boton.addEventListener("click", () => {
        filtrarProductos(cat);
    });
    filtrosDiv.appendChild(boton);
});

// Funcionamiento de filtrar
const Cards = $.querySelectorAll(".card")

function filtrarProductos(cat) {
    if (cat == "Todas") {
        for (i = 0; i < Cards.length; i++) {
            Cards[i].style.display = "block";
        }
        return;
    }

    for (i = 0; i < Cards.length; i++) {
        let contenidoCard = Cards[i].textContent;

        if (!contenidoCard.includes(cat)) {
            Cards[i].style.display = "none";
        }

        if (contenidoCard.includes(cat)) {
            Cards[i].style.display = "block";
        }
    }
}

// Carrito
const Carrito = [];
const TotalBtnAñadir = $.querySelectorAll(".btn-añadir-carrito");

TotalBtnAñadir.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const PadreCard = e.target.parentElement.parentElement;
        const NombreCard = PadreCard.querySelector("h3").textContent;
        const productoCard = productos.find((p) => p.nombre === NombreCard);

        Carrito.push(productoCard);
    })
})