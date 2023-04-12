const gameDiv = document.querySelector(".game");
const ball = document.querySelector(".ball");
const random = (max, min = 0)=>min + Math.floor(Math.random() * max);
const { log  } = console;
const me = document.querySelector(".me");
function getRight(el) {
    return el.left + el.width;
}
function getBottom(el) {
    return el.top + el.height;
}
function updateElement(el, obj) {
    el.style.cssText = `  width :${obj.width}px ; height :${obj.height}px ; left : ${obj.left}px ; top :     ${obj.top}px  `;
}
const Ball = {
    width: 40,
    height: 40,
    left: 60,
    top: 100,
    getRight: function() {
        return this.left + this.width;
    },
    getBottom: function() {
        return this.top + this.height;
    },
    speed: 3,
    movingX: 3,
    movingY: 3
};
const Me = {
    name: "player",
    width: 50,
    height: 15,
    left: 40,
    top: 300,
    getRight: function() {
        return this.left + this.width;
    },
    getBottom: function() {
        return this.top + this.height;
    }
};
const Game = {
    width: 400,
    height: 400,
    obstacles: [
        Me
    ]
};
function createObstacles(count = 5) {
    // let height = random(10, 10);
    // let width = random(10, 30);
    let height = 10;
    let width = 50;
    for(let i = 0; i < count; i++){
        let obstacle = {
            id: Math.random().toString(36).split(2),
            left: 400 / (i + 1),
            top: 20,
            width: width,
            height: height,
            getRight: function() {
                return this.left + this.width;
            },
            getBottom: function() {
                return this.top + this.height;
            }
        };
        Game.obstacles.push(obstacle);
        let div = document.createElement("div");
        div.id = obstacle.id;
        div.style.cssText = `position:absolute; background-color : violet; width :${obstacle.width}px ; height :${obstacle.height}px ; left : ${obstacle.left}px ; top :     ${obstacle.top}px  `;
        gameDiv.append(div);
    }
}
function moveBall() {
    if (Ball.left + Ball.width > Game.width) Ball.movingX = -Ball.speed;
    if (Ball.left < 0) Ball.movingX = Ball.speed;
    if (Ball.top + Ball.height > Game.height) Ball.movingY = -Ball.speed;
    if (Ball.top < 0) Ball.movingY = Ball.speed;
    Game.obstacles.forEach((item, index)=>{
        // let min ,max, min2 , max2 ;
        let condition1 = Ball.left >= item.left && Ball.left <= item.getRight();
        let condition2 = item.left >= Ball.left && item.left <= Ball.getRight();
        let condition3 = Ball.top >= item.top && Ball.top <= item.getBottom();
        let condition4 = item.top >= Ball.top && item.top <= Ball.getBottom();
        if ((condition1 || condition2) && (condition3 || condition4)) {
            Ball.movingX *= -1;
            // Ball.movingY *= -1
            log(condition1, condition2, condition3, condition4);
            if (item.name != "player") {
                document.getElementById(item.id).remove();
                Game.obstacles.splice(index, 1);
                log("not a player");
            }
        }
    });
    Ball.left += Ball.movingX;
    Ball.top += Ball.movingY;
    updateElement(ball, Ball);
}
function startGame() {
    createObstacles();
    setInterval(moveBall, 1000 / 60);
}
gameDiv.addEventListener("mousemove", mouseMove);
function mouseMove(e) {
    if (e.layerX + Me.width > Game.width) Me.left = Game.width - Me.width;
    else Me.left = e.layerX;
    me.style.left = Me.left + "PX";
}
startGame();

//# sourceMappingURL=index.7c0ccee6.js.map
