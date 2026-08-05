const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("score");
const highScoreElement = document.getElementById("high-score");
const gameOverScreen = document.getElementById("game-over-screen");

const gridSize = 20;
const tileCount = canvas.width / gridSize;

let snake = [{x: 15, y: 15}];
let food = {x: 5, y: 5};
let dx = 1;
let dy = 0;
let score = 0;
let highScore = localStorage.getItem("highScore") || 0;
highScoreElement.innerText = highScore;

let gameInterval;
const gameSpeed = 140; 

function startGame() {
    gameInterval = setInterval(update, gameSpeed);
}

function update() {
    moveSnake();
    if (checkGameOver()) {
        clearInterval(gameInterval);
        gameOverScreen.style.display = "flex";
        if (score > highScore) {
            highScore = score;
            localStorage.setItem("highScore", highScore);
            highScoreElement.innerText = highScore;
        }
        return;
    }
    checkFoodCollision();
    draw();
}

function draw() {
    ctx.fillStyle = "#1e1e1e";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#252525";
    for (let i = 0; i < tileCount; i++) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize, 0);
        ctx.lineTo(i * gridSize, canvas.height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i * gridSize);
        ctx.lineTo(canvas.width, i * gridSize);
        ctx.stroke();
    }

    snake.forEach((part, index) => {
        ctx.fillStyle = index === 0 ? "#00ff88" : "#00b35f";
        ctx.shadowBlur = index === 0 ? 10 : 0;
        ctx.shadowColor = "#00ff88";
        ctx.fillRect(part.x * gridSize + 1, part.y * gridSize + 1, gridSize - 2, gridSize - 2);
    });
    ctx.shadowBlur = 0;

    ctx.fillStyle = "#ff3333";
    ctx.shadowBlur = 8;
    ctx.shadowColor = "#ff3333";
    ctx.fillRect(food.x * gridSize + 2, food.y * gridSize + 2, gridSize - 4, gridSize - 4);
    ctx.shadowBlur = 0;
}

function moveSnake() {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);
    snake.pop();
}

function checkFoodCollision() {
    if (snake[0].x === food.x && snake[0].y === food.y) {
        score++;
        scoreElement.innerText = score;
        growSnake();
        generateFood();
    }
}

function growSnake() {
    const tail = { ...snake[snake.length - 1] };
    snake.push(tail);
}

function generateFood() {
    food.x = Math.floor(Math.random() * tileCount);
    food.y = Math.floor(Math.random() * tileCount);

    snake.forEach(part => {
        if (part.x === food.x && part.y === food.y) {
            generateFood();
        }
    });
}

function checkGameOver() {
    const head = snake[0];

    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        return true;
    }

    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }
    return false;
}

window.addEventListener("keydown", e => {
    switch(e.key) {
        case "ArrowUp":
            if (dy !== 1) { dx = 0; dy = -1; }
            break;
        case "ArrowDown":
            if (dy !== -1) { dx = 0; dy = 1; }
            break;
        case "ArrowLeft":
            if (dx !== 1) { dx = -1; dy = 0; }
            break;
        case "ArrowRight":
            if (dx !== -1) { dx = 1; dy = 0; }
            break;
    }
});

function resetGame() {
    snake = [{x: 15, y: 15}];
    dx = 1;
    dy = 0;
    score = 0;
    scoreElement.innerText = score;
    generateFood();
    gameOverScreen.style.display = "none";
    clearInterval(gameInterval);
    startGame();
}

generateFood();
startGame();