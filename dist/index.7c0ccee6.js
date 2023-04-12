const gameDiv = document.querySelector(".game");
const random = (max, min = 0)=>min + Math.floor(Math.random() * max);
const ball = document.querySelector(".ball");
const { log  } = console;
const Game = {
    width: 400,
    height: 400
};
const Ball = {
    width: 40,
    height: 40,
    maxSpeed: 3,
    x: 100,
    y: 100,
    movingX: 1,
    movingY: 1
};
const me = {
    width: 50,
    height: 15
};
function createObstacles(count = 10) {
    let height = random(10, 10);
    let width = random(10, 30);
    let offsetHeight = 0;
    for(let i = 0; i < count; i++){
        let div = document.createElement("div");
        console.log("what" + width + height);
        div.style.width = width + "px";
        div.style.height = height + "px";
        div.style.position = "absolute";
        div.style.left = i * width + 15 + "px";
        div.style.top = offsetHeight + "px";
        div.style.backgroundColor = "#aa00aa";
        gameDiv.append(div);
    }
}
function moveBall() {
    if (Ball.x + Ball.left > Game.width) {
        Ball.x += 2;
        Ball.y += 2;
    }
    ball.style.left = Ball.x + Ball.movingX + "px";
    ball.style.top = Ball.y + Ball.movingY + "px";
}
function startGame() {
    createObstacles();
    setInterval(moveBall, 1000 / 60);
}
startGame();

//# sourceMappingURL=index.7c0ccee6.js.map
