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
let ListaProductos = $.getElementById("lista-productos");

productos.forEach((Prod) => {
    let ProductoDiv = $.createElement("div");
    ProductoDiv.classList.add("card");

    // Crear imagenes
    let Imagen = $.createElement("img");
    Imagen.src = `img/producto/${Prod.imagen}`;
    Imagen.alt = Prod.nombre;

    // Crear nombre
    let Nombre = $.createElement("h3");
    Nombre.textContent = Prod.nombre;

    // Crear contenido
    let Contenido = $.createElement("div");
    Contenido.classList.add("contenido");

    let Categoria = $.createElement("p");
    Categoria.textContent = `Categoría: ${Prod.categoria}`;

    let Precio = $.createElement("p");
    Precio.textContent = `Precio: $${Prod.precio}`;

    Contenido.appendChild(Categoria);
    Contenido.appendChild(Precio);

    // Crear botón añadir al carrito
    let ConteinerBtn = $.createElement("div");
    ConteinerBtn.classList.add("conteiner-btn");

    let BotonAñadirCarrito = $.createElement("button");
    BotonAñadirCarrito.textContent = "Añadir carrito";
    BotonAñadirCarrito.classList.add("btn-añadir-carrito");

    ConteinerBtn.appendChild(BotonAñadirCarrito);

    // Crear botón ver más
    let BotonVerMas = $.createElement("button");
    BotonVerMas.textContent = "Ver más";
    BotonVerMas.classList.add("btn-ver-mas");

    ConteinerBtn.appendChild(BotonVerMas);

    // Estructura del producto
    ProductoDiv.appendChild(Imagen);
    ProductoDiv.appendChild(Nombre);
    ProductoDiv.appendChild(Contenido);
    ProductoDiv.appendChild(ConteinerBtn);

    ListaProductos.appendChild(ProductoDiv);
});

// Renderizar los botones de categorías
let FiltrosDiv = $.getElementById("filtros-categorias");
const Categorias = ["Todas", "Frutas", "Verduras", "Hongos"];

Categorias.forEach((Cat) => {
    let Boton = $.createElement("button");
    Boton.textContent = Cat;
    Boton.addEventListener("click", () => {
        filtrarProductos(Cat);
    });
    FiltrosDiv.appendChild(Boton);
});

// Funcionamiento de filtrar
const Cards = $.querySelectorAll(".card")

function filtrarProductos(Cat) {
    if (Cat == "Todas") {
        for (i = 0; i < Cards.length; i++) {
            Cards[i].style.display = "block";
        }
        return;
    }

    for (i = 0; i < Cards.length; i++) {
        let ContenidoCard = Cards[i].textContent;

        if (!ContenidoCard.includes(Cat)) {
            Cards[i].style.display = "none";
        }

        if (ContenidoCard.includes(Cat)) {
            Cards[i].style.display = "block";
        }
    }
}

// Carrito
const Carrito = [];
const TotalBtnAñadir = $.querySelectorAll(".btn-añadir-carrito");

TotalBtnAñadir.forEach((Btn) => {
    Btn.addEventListener('click', (E) => {
        const PadreCard = E.target.parentElement.parentElement;
        const NombreCard = PadreCard.querySelector("h3").textContent;
        const ProductoCard = productos.find((P) => P.nombre === NombreCard);

        Carrito.push(ProductoCard);
        Toastr(ProductoCard);
    })
})

// Toastr.js
function Toastr(producto) {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": true,
        "progressBar": true,
        "positionClass": "toast-bottom-center",
        "preventDuplicates": false,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    
    toastr["info"](`Se añadió el producto ${producto.nombre} al carrito`, "Añadido carrito")
}