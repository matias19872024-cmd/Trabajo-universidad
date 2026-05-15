// =====================================================
// EVALUACIÓN 2 - Clonar el blog con JavaScript Vanilla
// =====================================================
//
// OBJETIVO:
// Recrear, usando SOLO JavaScript, la misma estructura
// que aparece en "blog-original.html".
//
// REGLAS:
// - No puedes escribir HTML directamente en index.html.
// - Debes usar métodos del DOM: createElement, appendChild,
//   textContent, setAttribute, classList, etc.
// - Puedes apoyarte en innerHTML solo si el profesor lo permite.
//
// PISTAS DE COMANDOS QUE NECESITARÁS:
//   document.getElementById("app")
//   document.createElement("tag")
//   elemento.textContent = "..."
//   elemento.classList.add("clase")
//   elemento.setAttribute("href", "#")
//   padre.appendChild(hijo)
//   elemento.addEventListener("click", funcion)
// =====================================================


// 1) Obtener el contenedor principal donde se montará el blog
const app = document.getElementById("app");
// TODO: verifica con console.log(app) que lo encontraste


// =====================================================
// 2) CREAR EL HEADER DEL BLOG
// =====================================================
// Estructura esperada:
// <header class="blog-header">
//   <h1>Mi Blog de Tecnología</h1>
//   <p class="lema">Aprendiendo JavaScript paso a paso</p>
//   <nav>
//     <ul>
//       <li><a href="#">Inicio</a></li>
//       ... (Artículos, Sobre mí, Contacto)
//     </ul>
//   </nav>
// </header>

function crearHeader() {
    const header = document.createElement("header");
    header.classList.add("blog-header");

    const h1 = document.createElement("h1");
    h1.textContent = "Mi Blog de Tecnología";
    header.appendChild(h1);

    const lema = document.createElement("p");
    lema.classList.add("lema");
    lema.textContent = "Aprendiendo JavaScript paso a paso";
    header.appendChild(lema);

    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const items = ["Inicio", "Artículos", "Sobre mí", "Contacto"];

    items.forEach(texto => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.setAttribute("href", "#");
        a.textContent = texto;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    header.appendChild(nav);
    app.appendChild(header);
}
    // TODO: crear el elemento <header> y agregarle la clase "blog-header"
    // const header = ...

    // TODO: crear el <h1> con el texto "Mi Blog de Tecnología"

    // TODO: crear el <p class="lema"> con el texto "Aprendiendo JavaScript paso a paso"

    // TODO: crear <nav> con un <ul> y un <li><a> por cada item del menú
    // Tip: usa un array y un for / forEach
    // const items = ["Inicio", "Artículos", "Sobre mí", "Contacto"];

    // TODO: agregar header al contenedor app
    // app.appendChild(header);


// =====================================================
// 3) CREAR LA SECCIÓN DE ARTÍCULOS
// =====================================================
// Cada artículo (post) tiene:
//   <article class="post">
//     <h2>Título</h2>
//     <p class="meta">Publicado el FECHA por AUTOR</p>
//     <p>Contenido...</p>
//     <button class="btn-leer">Leer más</button>
//   </article>

// Datos de los posts (úsalos tal cual)
const posts = [
    {
        titulo: "Introducción a JavaScript",
        fecha: "01/05/2026",
        autor: "Profesor",
        contenido: "JavaScript es el lenguaje más usado en la web. Permite agregar interactividad a las páginas y modificar el HTML en tiempo real."
    },
    {
        titulo: "Manipulación del DOM",
        fecha: "03/05/2026",
        autor: "Profesor",
        contenido: "El DOM (Document Object Model) es la representación del HTML que JavaScript puede modificar usando métodos como getElementById o querySelector."
    },
    {
        titulo: "Eventos en JavaScript",
        fecha: "05/05/2026",
        autor: "Profesor",
        contenido: "Los eventos permiten responder a acciones del usuario, como clics, teclas o envíos de formularios. Se usan con addEventListener."
    }
];

function crearArticulos() {
    // Crear el <main class="contenido">
    const main = document.createElement("main");
    main.classList.add("contenido");

    // Crear la <section class="articulos">
    const section = document.createElement("section");
    section.classList.add("articulos");

    // Recorrer el array "posts" y crear cada artículo
    posts.forEach(post => {
        const article = document.createElement("article");
        article.classList.add("post");

        // Crear el <h2> con el título
        const h2 = document.createElement("h2");
        h2.textContent = post.titulo;
        article.appendChild(h2);

        // Crear el <p class="meta"> con fecha y autor
        const meta = document.createElement("p");
        meta.classList.add("meta");
        meta.textContent = "Publicado el " + post.fecha + " por " + post.autor;
        article.appendChild(meta);

        // Crear el <p> con el contenido
        const contenido = document.createElement("p");
        contenido.textContent = post.contenido;
        article.appendChild(contenido);

        // Crear el botón "Leer más"
        const button = document.createElement("button");
        button.classList.add("btn-leer");
        button.textContent = "Leer más";
        
        // Agregar evento click que muestra un alert
        button.addEventListener("click", function() {
            alert(post.titulo);
        });
        
        article.appendChild(button);
        section.appendChild(article);
    });

    // Agregar la sección de artículos al main
    main.appendChild(section);

    // Crear y agregar el sidebar
    const sidebar = crearSidebar();
    main.appendChild(sidebar);

    // Agregar el <main> al contenedor app
    app.appendChild(main);
}


// =====================================================
// 4) CREAR EL SIDEBAR (ASIDE) DE CATEGORÍAS
// =====================================================
// <aside class="sidebar">
//   <h3>Categorías</h3>
//   <ul>
//     <li>HTML</li>
//     <li>CSS</li>
//     <li>JavaScript</li>
//     <li>Frameworks</li>
//   </ul>
// </aside>

function crearSidebar() {
    // Crear el <aside class="sidebar">
    const aside = document.createElement("aside");
    aside.classList.add("sidebar");

    // Agregar el <h3> "Categorías"
    const h3 = document.createElement("h3");
    h3.textContent = "Categorías";
    aside.appendChild(h3);

    // Crear el <ul> y un <li> por cada categoría
    const categorias = ["HTML", "CSS", "JavaScript", "Frameworks"];
    const ul = document.createElement("ul");

    categorias.forEach(categoria => {
        const li = document.createElement("li");
        li.textContent = categoria;
        ul.appendChild(li);
    });

    aside.appendChild(ul);

    // Devolver el aside para insertarlo dentro del <main> en crearArticulos()
    return aside;
}


// =====================================================
// 5) CREAR EL FOOTER
// =====================================================
// <footer class="blog-footer">
//   <p>&copy; 2026 Mi Blog - Evaluación 2</p>
// </footer>

function crearFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("blog-footer");

    const p = document.createElement("p");
    // Usamos innerHTML solo aquí para el símbolo de copyright
    p.innerHTML = "&copy; 2026 Mi Blog - Evaluación 2";
    
    footer.appendChild(p);
    app.appendChild(footer);
}
    // TODO: crear el <footer class="blog-footer">
    // TODO: agregar un <p> con el texto del copyright
    // TODO: agregar el footer al contenedor app


// =====================================================
// 6) EJECUTAR TODAS LAS FUNCIONES EN ORDEN
// =====================================================
// Llama aquí a las funciones para construir el blog completo.

crearHeader();
crearArticulos();
crearFooter();

console.log("Blog generado con JavaScript ✔");
