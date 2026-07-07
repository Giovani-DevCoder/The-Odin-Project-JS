const generarBotones = (function(){
    contenedorHTML = document.querySelector(".contenedor-botones");

    botones = ["Boton 1", "Boton 2", "Boton 3"];

    botones.forEach((texto, index) => {
        const casillaBoton = document.createElement("button");

            casillaBoton.textContent = texto

        casillaBoton.addEventListener("click", () => {
            console.log("Hiciste click en la opcion " + texto)
        });

        contenedorHTML.appendChild(casillaBoton);
    });
})();