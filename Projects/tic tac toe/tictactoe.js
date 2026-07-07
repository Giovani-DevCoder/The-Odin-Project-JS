// =========================================================================
// BLOQUE 1: DATOS (El estado del juego) -> MÓDULO ÚNICO (IIFE)
// =========================================================================
const Gameboard = (function() {
    let board = ["", "", "", "", "", "", "", "", ""];
    
    const getBoard = () => board;
    const placeMark = (index, mark) => {
        if(board[index] === ""){board[index] = mark; return true; }
        return false;
    }

    const resetBoard = () => { board = ["", "", "", "", "", "", "", "", ""]; };

    return { getBoard, placeMark, resetBoard };
})();

// =========================================================================
// BLOQUE 2: LÓGICA (Las reglas del juego) -> MÓDULO ÚNICO (IIFE)
// =========================================================================
const GameController = (function() {
    // Usa una FACTORY FUNCTION para crear a los jugadores
    const Player = function(name, mark){
        return {name, mark};
    };

    const jugadorX = Player("Goku", "X");
    const jugadorO = Player("Vegeta", "O");

    let jugadorActivo = jugadorX;
    let juegoTerminado = false;
    
    // Usa .some() y .every() para calcular si alguien ganó con las combinaciones...
    const viasDeVictoria = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
    ]

    const verificarGanador = () => {
        const tableroActual = Gameboard.getBoard();
        return viasDeVictoria.some(combinacion => {
            return combinacion.every(index => tableroActual[index] === jugadorActivo.mark);
        });
    };

    const playTurn = (index) => { 
        if (juegoTerminado) return;

        // Intentamos marcar el tablero usando el Bloque 1
        const movimientoValido = Gameboard.placeMark(index, jugadorActivo.mark);

        if (movimientoValido) {
            if (verificarGanador()) {
                console.log(`¡Ganó ${jugadorActivo.name}!`);
                juegoTerminado = true;
                return;
            }
            // Cambiar turno si no hay ganador
            jugadorActivo = jugadorActivo === jugadorX ? jugadorO : jugadorX;
        }
    };
    return { playTurn,
        getJugadorActivo: () => jugadorActivo,
        isGameOver: () => juegoTerminado
     };
})();

// =========================================================================
// BLOQUE 3: INTERFAZ (El DOM) -> MÓDULO ÚNICO (IIFE)
// =========================================================================
const displayController = (function() {

    const victoriaHTML = document.querySelector(".texto-estado");
    
    const contenedorHTML = document.querySelector(".tic-tac-toe");

    const renderizarTablero = () => {
        contenedorHTML.innerHTML = "";
        
        if (isGameOver = true){
            
        }
        // Traemos el array usando el método público de Gameboard
        Gameboard.getBoard().forEach((texto, index) => {
            const casilla = document.createElement("button");
            casilla.classList.add("casilla");
            casilla.textContent = texto;

            casilla.addEventListener("click", () => {
                GameController.playTurn(index); // Ejecuta la lógica
                renderizarTablero(); // Re-dibuja el tablero con los nuevos cambios ("X" o "O")
            });
            
            contenedorHTML.appendChild(casilla);
        });
    };

    // Inicializamos el renderizado por primera vez
    renderizarTablero();
})();