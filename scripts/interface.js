document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    setTimeout(() => {
      if (playerTime == 0) {
        alert("O Jogo Acabou - O Vencedor foi o esculdo");
      } else {
        alert("O Jogo Acabou - O Vencedor foi a espada");
      }
    }, 10);
  }
  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class="${symbol}"> </div>`;
}

function updateSquares() {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    let position = square.id;
    let symbol = board[position];

    if (symbol != "") {
      square.innerHTML = `<div class="${symbol}"> </div>`;
    }
  });
}

function resetGame() {
  playerTime = 0;
  gameOver = false;

  for (let i = 0; i < board.length; i++) {
    board[i] = "";
  }

  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    if (square.hasChildNodes()) {
      square.removeChild(square.childNodes[0]);
    }
  });
}
