const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';

// Winning combinations
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWin() {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].textContent === currentPlayer;
        });
    });
}

function handleClick(event) {
    const cell = event.target;

    if (cell.classList.contains('taken')) {
        return;
    }

    cell.textContent = currentPlayer;
    cell.classList.add('taken');
    cell.classList.add(currentPlayer.toLowerCase()); // Add class for X or O

    if (checkWin()) {
        setTimeout(() => alert(`${currentPlayer} wins!`), 10);
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

resetButton.addEventListener('click', () => {
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('taken', 'x', 'o', 'winning');
    });
    currentPlayer = 'X';
});

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});