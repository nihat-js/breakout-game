const gameDiv = document.querySelector('.game')
const random = (max, min = 0) => min + Math.floor(Math.random() * max)
const ball = document.querySelector('.ball')
const { log } = console
const me = document.querySelector('.me')
const Game = {
  width: 400,
  height: 400,
  obstacles : []

}

const Ball = {
  width: 40,
  height: 40,
  left : 60 ,
  top : 100 ,
  getRight : function (){ return this.left + this.width },
  getBottom : function () { return this.top + this.height }  ,
  speed: 3,
  movingX : 3,
  movingY : 3,
  updateElement : function(){
    document.querySelector('.ball').style.left = this.left + "px" ,
    document.querySelector(".ball").style.top  = this.top  + "px"
  }
}

const Me = {
  width: 50,
  height: 15,
  left : 0 ,
  top : 0 , 
  getRight : function () {  }

}

function createObstacles(count = 2) {
  let height = random(10, 10);
  let width = random(10, 30);
  let offsetHeight = 0;
  for (let i = 0; i < count; i++) {
    let obstacle = {
      left :  i*width + 70 ,
      top : 18 , 
      width : width ,
      height : height  ,
      getRight : function (){ return this.left + this.width },
      getBottom : function () { return this.top + this.height }  ,

    }
    Game.obstacles.push(obstacle)
    log("obstacle",obstacle,)
    let div = document.createElement('div');
    div.style.width = obstacle.left + "px";
    div.style.height = obstacle.top + "px";
    div.style.position = "absolute"


    div.style.left = i * width + 15 + "px";
    div.style.top = offsetHeight + "px";
    div.style.backgroundColor = "#aa00aa"
    gameDiv.append(div)
  }
}

function moveBall() {
  if (Ball.left + Ball.width > Game.width) {
    Ball.movingX = - Ball.speed ;
  }
  if (Ball.left < 0 ){
    Ball.movingX =Ball.speed;
  }

  if (Ball.top + Ball.height > Game.height){
    Ball.movingY = -Ball.speed
  }
  if (Ball.top < 0){
    Ball.movingY = Ball.speed
  }

  Game.obstacles.forEach(item => {
    // let min ,max, min2 , max2 ;
    let condition1 =  Ball.left >= item.left && Ball.left <= item.getRight() 
    let condition2 = item.left >= Ball.left && item.left <= Ball.getRight()

    let condition3 =  Ball.top >= item.top && Ball.top <= item.getBottom() 
    let condition4 = item.top >= Ball.top && item.top <= Ball.getBottom()

    if ( (condition1 || condition2) && (condition3 || condition4) ){
      Ball.movingX*=-1
      Ball.movingY*=-1
    }




  })



  Ball.left  += Ball.movingX ;
  Ball.top += Ball.movingY ;
  
  Ball.updateElement()


}


function startGame() {
  createObstacles()
  setInterval(moveBall, 1000 / 60)

}

gameDiv.addEventListener('mousemove',mouseMove)

function mouseMove(e){
  
  me.style.left = e.layerX  - Ball.width / 2 + "PX"

}

startGame()

