let myLibrary = [];

function Book(title, author, genre, read) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.read = false;
    this.id = crypto.randomUUID(); 
}

const contenedor = document.getElementById("elementary-div");
const modal = document.getElementById("my-dialog");
const botonGuardar = document.getElementById("btn-guardar");

function addBookToLibrary() {
    const name = document.getElementById("nombre").value;
    const autor = document.getElementById("autor").value;
    const genero = document.getElementById("genero").value;

    const nuevoLibro = new Book(name, autor, genero);

    myLibrary.push(nuevoLibro);
    
    document.getElementById("nombre").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("genero").value = "";
}

function renderBooks() {
    contenedor.innerHTML = "";

    for (const book of myLibrary) {
        const tarjetaLibro = document.createElement("div");
        tarjetaLibro.classList.add("tarjeta-libro");
        const textoBotonRead = book.read ? "Leído" : "No leído";
        const claseBotonRead = book.read ? "read-true" : "read-false";
        tarjetaLibro.innerHTML = `
            <h3 class="texto-recortado">${book.title}</h3>
            <p class="texto-recortado"><strong>Autor:</strong> ${book.author}</p>
            <p class="texto-recortado"><strong>Género:</strong> ${book.genre}</p>
            <button class="btn-status ${claseBotonRead}" data-id="${book.id}">${textoBotonRead}</button>
            <br><br>
            <button class="btn-eliminar" data-id="${book.id}">Eliminar</button>
        `;

        contenedor.appendChild(tarjetaLibro);
    }

    asignarEventosEliminar();
    asignarEventosStatus();
}

function asignarEventosEliminar() {
    const botonesEliminar = document.querySelectorAll(".btn-eliminar");
    
    botonesEliminar.forEach((boton) => {
        boton.addEventListener("click", (evento) => {
            const idParaEliminar = evento.target.getAttribute("data-id");
            
            myLibrary = myLibrary.filter((book) => book.id !== idParaEliminar);
            
            renderBooks();
        });
    });
}

botonGuardar.addEventListener("click", (evento) => {
    evento.preventDefault();
    
    addBookToLibrary();
    renderBooks();
    modal.close();
});

function asignarEventosStatus() {
    const botonesStatus = document.querySelectorAll(".btn-status");

    botonesStatus.forEach((boton) => {
        boton.addEventListener("click", (evento) => {
            const idLibro = evento.target.getAttribute("data-id");

            const libroEncontrado = myLibrary.find((book) => book.id === idLibro);

            if (libroEncontrado) {
                libroEncontrado.read = !libroEncontrado.read;

                renderBooks();
            }
        });
    });
}