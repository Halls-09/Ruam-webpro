const cells = document.querySelectorAll('.cell');
const status = document.getElementById('status');

let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function checkWinner() {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  if (!board.includes('')) return 'draw';
  return null;
}

function computerMove() {
  const emptyCells = [];
  board.forEach((cell, index) => {
    if (cell === '') emptyCells.push(index);
  });
  
  if (emptyCells.length === 0) return;
  
  const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  
  setTimeout(() => {
    board[randomIndex] = 'O';
    cells[randomIndex].textContent = 'O';
    cells[randomIndex].classList.add('o');
    
    const winner = checkWinner();
    if (winner) {
      gameActive = false;
      if (winner === 'X') {
        status.textContent = 'You win!';
      } else if (winner === 'O') {
        status.textContent = 'Computer wins';
      } else {
        status.textContent = "It's a draw!";
      }
    }
  }, 300);
}

function handleClick(e) {
  const cell = e.target;
  const index = parseInt(cell.dataset.index);
  
  if (!gameActive || board[index] !== '') return;
  
  board[index] = 'X';
  cell.textContent = 'X';
  cell.classList.add('x');
  
  const winner = checkWinner();
  if (winner) {
    gameActive = false;
    if (winner === 'X') {
      status.textContent = 'You win!';
    } else if (winner === 'draw') {
      status.textContent = "It's a draw!";
    }
    return;
  }
  
  computerMove();
}

cells.forEach(cell => {
  cell.addEventListener('click', handleClick);
});