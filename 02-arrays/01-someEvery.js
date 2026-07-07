/* carrito
const carrito = [
    { producto: "Manzanas", precio: 2 },
    { producto: "Televisor", precio: 400 },
    { producto: "Pan", precio: 1 }
];

const caro = carrito.some(item => item.precio >= 100)

console.log(caro);

const barato = carrito.every(item => item.precio <= 500)


console.log(barato); */

const tableroSimulado = ["O", "X", "", "", "O", "X", "", "", "O"];

const viasDeVictoria = [
    [0, 1, 2], // Fila superior
    [0, 4, 8]  // Diagonal principal
];

const arbitro = function(){
    const haGanadoO = viasDeVictoria.some(condition => {
        return condition.every(index => tableroSimulado[index] === "O");
    })

    return haGanadoO;
};

console.log("Gano el jugador O? " + arbitro());