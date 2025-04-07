const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Load images
const turtleImg = new Image();
turtleImg.src = "assets/turtle.png";

const roomImg = new Image();
roomImg.src = "assets/room.png";

// Turtle state
const player = {
    x: 400,
    y: 300,
    speed: 3
};

// Input
const keys = {};

window.addEventListener("keydown", e => {
    keys[e.key.toLowerCase()] = true;
});
window.addEventListener("keyup", e => {
    keys[e.key.toLowerCase()] = false;
});

function update() {
    if (keys["arrowup"] || keys["w"]) player.y -= player.speed;
    if (keys["arrowdown"] || keys["s"]) player.y += player.speed;
    if (keys["arrowleft"] || keys["a"]) player.x -= player.speed;
    if (keys["arrowright"] || keys["d"]) player.x += player.speed;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(roomImg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(turtleImg, player.x - 32, player.y - 32, 64, 64);
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

roomImg.onload = () => {
    gameLoop();
};
