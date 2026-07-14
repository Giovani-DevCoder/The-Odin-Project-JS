// =========================================================================
// BLOCK 1: DATA -> SINGLE MODULE (IIFE)
// =========================================================================
const Gameboard = (function() {
    let board = ["", "", "", "", "", "", "", "", ""];
    
    const getBoard = () => board;
    
    const placeMark = (index, mark) => {
        if (board[index] === "") { 
            board[index] = mark; 
            return true; 
        }
        return false;
    };

    const resetBoard = () => { 
        board = ["", "", "", "", "", "", "", "", ""]; 
    };

    const isBoardFull = () => !board.includes("");

    return { getBoard, placeMark, resetBoard, isBoardFull };
})();

// =========================================================================
// BLOCK 2: LOGIC -> SINGLE MODULE (IIFE)
// =========================================================================
const GameController = (function() {
    const Player = function(name, mark) {
        return { name, mark };
    };

    const playerOne = Player("Player 1", "X");
    const playerTwo = Player("Player 2", "O");

    let activePlayer = playerOne;
    let gameOver = false;
    let gameDraw = false;
    
    // Winning combinations indices
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    const checkWin = () => {
        const currentBoard = Gameboard.getBoard();
        return winConditions.some(combination => {
            return combination.every(index => currentBoard[index] === activePlayer.mark);
        });
    };

    const playTurn = (index) => { 
        if (gameOver || gameDraw) return;

        // Try to place the active player's mark on the board
        const isValidMove = Gameboard.placeMark(index, activePlayer.mark);

        if (isValidMove) {
            if (checkWin()) {
                gameOver = true;
                return;
            }
            
            if (Gameboard.isBoardFull()) {
                gameDraw = true;
                return;
            }
            
            // Switch turns if there is no winner or draw
            activePlayer = (activePlayer === playerOne) ? playerTwo : playerOne;
        }
    };

    const resetGameLogic = () => {
        gameOver = false;
        gameDraw = false;
        activePlayer = playerOne;
    };

    return { 
        playTurn,
        resetGameLogic,
        getActivePlayer: () => activePlayer,
        isGameOver: () => gameOver,
        isDraw: () => gameDraw
    };
})();

// =========================================================================
// BLOCK 3: INTERFACE -> SINGLE MODULE (IIFE)
// =========================================================================
const displayController = (function() {
    const statusText = document.querySelector(".status-text");
    const boardContainer = document.querySelector(".tic-tac-toe");
    const restartButton = document.querySelector("#restart-button");

    const renderBoard = () => {
        if (GameController.isGameOver()) {
            statusText.textContent = `🏆 ${GameController.getActivePlayer().name} wins!`;
        } else if (GameController.isDraw()) {
            statusText.textContent = "🤝 It's a draw!";
        } else {
            statusText.textContent = `It is ${GameController.getActivePlayer().name} turn`;
        }

        boardContainer.innerHTML = "";

        Gameboard.getBoard().forEach((cellValue, index) => {
            const cellElement = document.createElement("button");
            cellElement.classList.add("cell");
            cellElement.textContent = cellValue;

            // Apply different colors for X and O marks
            if (cellValue === "X") {
                cellElement.style.color = "#00b4d8";
            } else if (cellValue === "O") {
                cellElement.style.color = "#64ef23";
            }

            cellElement.addEventListener("click", () => {
                GameController.playTurn(index); // Executes game logic
                renderBoard(); // Re-renders the board with the new state
            });
            
            boardContainer.appendChild(cellElement);
        });
    };

    // Initial render
    renderBoard();

    // Attach click listener to the restart button
    restartButton.addEventListener("click", () => {
        Gameboard.resetBoard();
        GameController.resetGameLogic();
        renderBoard();
    });
})();