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
        descripcion: "Manzana roja, fresca y crujiente.",
    },
    {
        id: 2,
        nombre: "Banana",
        imagen: "banana.webp",
        categoria: "Frutas",
        precio: 80,
        descripcion: "Bananas dulces, ideales para colaciones.",
    },
    {
        id: 3,
        nombre: "Naranja",
        imagen: "naranja.webp",
        categoria: "Frutas",
        precio: 90,
        descripcion: "Naranja jugosa, rica en vitamina C.",
    },
    {
        id: 4,
        nombre: "Pera",
        imagen: "pera.webp",
        categoria: "Frutas",
        precio: 110,
        descripcion: "Pera tierna, de sabor suave y dulce.",
    },
    {
        id: 5,
        nombre: "Uva",
        imagen: "uva.webp",
        categoria: "Frutas",
        precio: 120,
        descripcion: "Uvas frescas, listas para consumir.",
    },
    // Verduras
    {
        id: 6,
        nombre: "Lechuga",
        imagen: "lechuga.webp",
        categoria: "Verduras",
        precio: 70,
        descripcion: "Lechuga fresca, ideal para ensaladas.",
    },
    {
        id: 7,
        nombre: "Tomate",
        imagen: "tomate.webp",
        categoria: "Verduras",
        precio: 95,
        descripcion: "Tomates rojos, jugosos y sabrosos.",
    },
    {
        id: 8,
        nombre: "Zanahoria",
        imagen: "zanahoria.webp",
        categoria: "Verduras",
        precio: 60,
        descripcion: "Zanahorias crocantes, listas para cocinar.",
    },
    {
        id: 9,
        nombre: "Cebolla",
        imagen: "cebolla.webp",
        categoria: "Verduras",
        precio: 50,
        descripcion: "Cebollas frescas, de sabor intenso.",
    },
    {
        id: 10,
        nombre: "Morron",
        imagen: "morron.webp",
        categoria: "Verduras",
        precio: 85,
        descripcion: "Morrón rojo, dulce y aromático.",
    },
    // Hongos
    {
        id: 11,
        nombre: "Champiñón",
        imagen: "champiñon.webp",
        categoria: "Hongos",
        precio: 130,
        descripcion: "Champiñones blancos, suaves y versátiles.",
    },
    {
        id: 12,
        nombre: "Portobello",
        imagen: "portobello.webp",
        categoria: "Hongos",
        precio: 150,
        descripcion: "Portobellos grandes, ideales para grillar.",
    },
    {
        id: 13,
        nombre: "Shiitake",
        imagen: "shiitake.webp",
        categoria: "Hongos",
        precio: 170,
        descripcion: "Hongos shiitake, de sabor intenso.",
    },
    {
        id: 14,
        nombre: "Enoki",
        imagen: "enoki.webp",
        categoria: "Hongos",
        precio: 140,
        descripcion: "Enoki finos, perfectos para salteados.",
    },
    {
        id: 15,
        nombre: "Ostra",
        imagen: "ostra.webp",
        categoria: "Hongos",
        precio: 160,
        descripcion: "Hongos ostra, carnosos y delicados.",
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

// Crear modal dinámicamente
function CreateModalVerMas(url, title, cat, pre, des) {
    // Crear contenedor del modal
    let ModalContainer = $.createElement("div");
    ModalContainer.classList.add("modal-container");
    ModalContainer.id = "modal_container";

    // Crear modal
    let Modal = $.createElement("div");
    Modal.classList.add("modal");

    // Crear contenido del modal
    let Img = $.createElement("img");
    Img.src = `img/producto/${url}`

    let H4 = $.createElement("h4");
    H4.textContent = title;

    let SpanCategoria = $.createElement("span")
    SpanCategoria.textContent = `Categoría: ${cat}`;

    let SpanPrecio = $.createElement("span")
    SpanPrecio.textContent = `Precio: $${pre}`;

    let PDescripcion = $.createElement("p")
    PDescripcion.textContent = des;

    let Btn = $.createElement("button")
    Btn.id = "close";
    Btn.textContent = "Cerrar"

    // Agregar evento al botón de cerrar
    Btn.addEventListener('click', CloseModal);

    // Estructura del modal
    Modal.appendChild(Img)
    Modal.appendChild(H4)
    Modal.appendChild(SpanCategoria)
    Modal.appendChild(SpanPrecio)
    Modal.appendChild(PDescripcion)
    Modal.appendChild(Btn)

    ModalContainer.appendChild(Modal);
    $.body.appendChild(ModalContainer);

    // Activar animación después de agregar al DOM
    setTimeout(() => {
        ModalContainer.classList.add('show');
    }, 30);
}

// Cerrar y eliminar modal
function CloseModal() {
    const ModalContainer = $.getElementById("modal_container");
    if (ModalContainer) {
        ModalContainer.classList.remove('show');

        // Esperar a que termine la animación antes de eliminar
        setTimeout(() => {
            ModalContainer.remove();
        }, 300);
    }
}

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

// Añadir Carrito
const Carrito = [];
const TotalBtnAñadir = $.querySelectorAll(".btn-añadir-carrito");
let ValorTotal = 0;

TotalBtnAñadir.forEach((Btn) => {
    Btn.addEventListener('click', (E) => {
        const PadreCard = E.target.parentElement.parentElement;
        const NombreCard = PadreCard.querySelector("h3").textContent;
        const ProductoCard = productos.find((P) => P.nombre === NombreCard);

        Carrito.push(ProductoCard);
        ToastrInfo(ProductoCard);

        ValorTotal += ProductoCard.precio;
    })
})

// Toastr.js
function ToastrInfo(producto) {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": true,
        "progressBar": true,
        "positionClass": "toast-bottom-center",
        "preventDuplicates": false,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "2000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    toastr["info"](`Se añadió el producto ${producto.nombre} al carrito`, "Añadido carrito")
}

function ToastrWarning() {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": true,
        "progressBar": true,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "1500",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    Command: toastr["warning"]("Para ver lo que agregaste en tu carrito tenes que agregar primero.", "Llenar carrito")
}

// Ver más
const TotalBtnVerMas = $.querySelectorAll(".btn-ver-mas");

TotalBtnVerMas.forEach((Btn) => {
    Btn.addEventListener('click', (E) => {
        const PadreCard = E.target.parentElement.parentElement;
        const NombreCard = PadreCard.querySelector("h3").textContent;
        const ProductoCard = productos.find((P) => P.nombre === NombreCard);

        CreateModalVerMas(ProductoCard.imagen, ProductoCard.nombre, ProductoCard.categoria, ProductoCard.precio, ProductoCard.descripcion);
    })
})

// Ver Carrito
const VerCarritoBtn = $.getElementById("carrito");
VerCarritoBtn.addEventListener('click', () => {
    if (Carrito.length === 0) {
        ToastrWarning();
        return;
    }
    CreateModalCarrito(Carrito, ValorTotal);
});

function CreateModalCarrito(carrito, total) {
    // Crear contenedor del modal
    let ModalContainer = $.createElement("div");
    ModalContainer.classList.add("modal-container");
    ModalContainer.id = "modal_container";

    // Crear modal
    let Modal = $.createElement("div");
    Modal.classList.add("modal");

    let H4 = $.createElement("h4");
    H4.textContent = "Carrito de Compras";

    let Ul = $.createElement("ul");
    carrito.forEach((Prod) => {
        let Li = $.createElement("li");
        let Info = $.createElement("span");
        Info.classList.add("info-carrito");
        Info.textContent = `${Prod.nombre} - $${Prod.precio}`;

        let RemoveBtn = $.createElement("button");
        RemoveBtn.classList.add("remover");
        let RemoveImg = $.createElement("img");
        RemoveImg.src = "img/icon/TdesignDeleteFilled.svg";
        RemoveImg.alt = "Remover producto";
        RemoveBtn.appendChild(RemoveImg);

        RemoveBtn.addEventListener('click', (event) => {
            const itemToRemove = event.target.closest('button').previousSibling.textContent;
            const itemName = itemToRemove.split(" - $")[0];

            const index = Carrito.findIndex((P) => P.nombre === itemName);
            if (index !== -1) {
                ValorTotal -= Carrito[index].precio;
                Carrito.splice(index, 1);
            }

            CloseModal();
            if (Carrito.length > 0) {
                CreateModalCarrito(Carrito, ValorTotal);
            }
        })

        Li.appendChild(Info);
        Li.appendChild(RemoveBtn);
        Ul.appendChild(Li);
    });

    let TotalP = $.createElement("p");
    TotalP.textContent = `Total: $${total}`;

    let ContainerBtns = $.createElement("div");
    ContainerBtns.classList.add("container-btns");

    let BtnCerrar = $.createElement("button")
    BtnCerrar.id = "close";
    BtnCerrar.textContent = "Cerrar ventana"
    ContainerBtns.appendChild(BtnCerrar);

    let BtnEliminarTodo = $.createElement("button")
    BtnEliminarTodo.id = "delete-all";
    BtnEliminarTodo.textContent = "Eliminar todo"
    ContainerBtns.appendChild(BtnEliminarTodo);

    let BtnCompra = $.createElement("button")
    BtnCompra.id = "buy-now";
    BtnCompra.textContent = "Continuar compra"
    ContainerBtns.appendChild(BtnCompra);

    // Agregar evento al botón de cerrar
    BtnCerrar.addEventListener('click', CloseModal);

    Modal.appendChild(H4);
    Modal.appendChild(Ul);
    Modal.appendChild(TotalP);
    Modal.appendChild(ContainerBtns);

    ModalContainer.appendChild(Modal);
    $.body.appendChild(ModalContainer);

    // Activar animación después de agregar al DOM
    setTimeout(() => {
        ModalContainer.classList.add('show');
    }, 30);
}