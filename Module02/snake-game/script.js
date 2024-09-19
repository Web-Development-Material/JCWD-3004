// Mengatur canvas dan context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Mengatur ukuran canvas
canvas.width = 400;
canvas.height = 400;

// Ukuran grid untuk snake
const gridSize = 20;

// Posisi awal snake
let snake = [
  { x: gridSize * 5, y: gridSize * 5 },
  { x: gridSize * 4, y: gridSize * 5 },
  { x: gridSize * 3, y: gridSize * 5 },
];

// Arah awal snake
let direction = { x: 1, y: 0 };

// Posisi makanan
let food = {
  x: Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
  y: Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize,
};

// Variabel untuk menyimpan apakah game sedang berjalan
let gameRunning = true;

// Fungsi untuk menggambar persegi
function drawSquare(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, gridSize, gridSize);
}

// Fungsi untuk menggerakkan snake
function moveSnake() {
  const head = {
    x: snake[0].x + direction.x * gridSize,
    y: snake[0].y + direction.y * gridSize,
  };

  // Menambah kepala baru di snake
  snake.unshift(head);

  // Mengecek apakah snake memakan makanan
  if (head.x === food.x && head.y === food.y) {
    // Jika snake memakan makanan, tempatkan makanan di posisi baru
    food = {
      x: Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
      y: Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize,
    };
  } else {
    // Jika tidak memakan makanan, hapus ekor
    snake.pop();
  }

  // Cek apakah snake bertabrakan dengan dinding atau dengan tubuhnya sendiri
  if (
    head.x < 0 ||
    head.x >= canvas.width ||
    head.y < 0 ||
    head.y >= canvas.height ||
    snake
      .slice(1)
      .some((segment) => segment.x === head.x && segment.y === head.y)
  ) {
    gameRunning = false; // Jika bertabrakan, game over
  }
}

// Fungsi untuk menggambar permainan
function drawGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Menggambar makanan
  drawSquare(food.x, food.y, "red");

  // Menggambar snake
  snake.forEach((segment) => drawSquare(segment.x, segment.y, "green"));
}

// Fungsi untuk memperbarui game
function updateGame() {
  if (gameRunning) {
    moveSnake();
    drawGame();
  } else {
    ctx.fillStyle = "red";
    ctx.font = "30px Arial";
    ctx.fillText("Game Over", canvas.width / 4, canvas.height / 2);
  }
}

// Fungsi untuk menangani input dari tombol panah
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      if (direction.y === 0) {
        direction = { x: 0, y: -1 };
      }
      break;
    case "ArrowDown":
      if (direction.y === 0) {
        direction = { x: 0, y: 1 };
      }
      break;
    case "ArrowLeft":
      if (direction.x === 0) {
        direction = { x: -1, y: 0 };
      }
      break;
    case "ArrowRight":
      if (direction.x === 0) {
        direction = { x: 1, y: 0 };
      }
      break;
  }
});

// Memperbarui game setiap 100ms
setInterval(updateGame, 100);
