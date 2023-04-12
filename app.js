const gameDiv = document.querySelector('.game')
const random = (max, min = 0) => min + Math.floor(Math.random()* max  )

const game = {
  width : 400 ,
  height : 400,

}

const ball = {
  width: 40,
  height: 40,

}

const me = {
  width: 50,
  height: 15,

}

function createObstacles(count = 10) {
  let height = random(10,10);
  let width = random(10 , 30);
  let offsetHeight = 0;
  for (let i = 0; i < count; i++) {
    let div = document.createElement('div');
    console.log('what' + width + height);
    div.style.width = width + "px";
    div.style.height = height + "px";
    div.style.position = "absolute"


    div.style.left = i*width + 15 +  "px";
    div.style.top =  + "px";
    div.style.backgroundColor = "#aa00aa"
    gameDiv.append(div)
  }
}


createObstacles()