let cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameState = ["", "", "", "", "", "", "", "", ""];
let statusDisplay = document.getElementById('status');
let gameActive = true;

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            statusDisplay.textContent = `Player ${gameState[a]} wins!`;
            gameActive = false;
            return;
        }
    }
    if (!gameState.includes("")) {
        statusDisplay.textContent = "It's a draw!";
        gameActive = false;
    }
}

function handleCellClick(e) {
    const index = e.target.getAttribute('data-index');
    if (gameState[index] === "" && gameActive) {
        gameState[index] = currentPlayer;
        e.target.textContent = currentPlayer;
        checkWinner();
        if (gameActive) {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
        }
    }
}

function resetGame() {
    gameState = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => cell.textContent = "");
    currentPlayer = 'X';
    statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
    gameActive = true;
}

// Add event listeners to each cell
cells.forEach(cell => cell.addEventListener('click', handleCellClick));

// Optionally, you can add a reset button to call resetGame
