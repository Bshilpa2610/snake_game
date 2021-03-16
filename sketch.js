var apple,head,body;
var appleimg,headimg;
var appleGroup;

var dots=3;
const snakelen=100;
var gameState;
const DELAY = 70;
var k=2;

var x = [];
var y = [];

function preload()
{
  appleimg =loadImage("Apple.png");
  headimg =loadImage("Head1.png");
  bodyimg =loadImage("Body1.png");

}


function setup() {
	createCanvas(400, 400);

  
  // head = createSprite(100, 100);
  // head.scale = 0.1;
  // head.addImage(headimg);
  
  // body= createSprite(100, 110);
  // body.addImage(bodyimg);
  createSnake();
  drawSnake();
 
  appleGroup = new Group();
  apple = createSprite(200, 200);
   apple.scale = 0.05;
   apple.addImage(appleimg);
   appleGroup.add(apple);
   gameState=0;

}


function draw()
{

  background("black");
  
  

  if (gameState==0)
  {
  createSnake();
  setTimeout("drawSnake()", DELAY);
  drawSnake();
  gameState=1;
  k=2;
  }

  if(gameState==1)
  {
    moveSnake();
    setTimeout("drawSnake()", DELAY);
    //drawSnake();
     }

  if ((x[0]==apple.x) && (y[0]==apple.y))
   {
    console.log("Got Apple ")
    dots=dots+1;
    createApple();
  }

  if((x[0]<0) || (y[0]<0) ||(x[0]>=400) || (y[0]>=400))
  {
    console.log("Game End:: Collision")
    gameState=2;
  }
 
  drawSprites();
}



function keyPressed()
{
    if((keyCode === LEFT_ARROW) && (k!== 2)) {
    k=1;
    console.log("left key pressed")
  }

  if((keyCode === RIGHT_ARROW) && (k!== 1)) {
    k=2;
    console.log("Right key pressed")
  }

  if((keyCode === UP_ARROW) &&(k!== 4)) {
    k=3;
    console.log("Up key pressed")
  }

  if((keyCode === DOWN_ARROW) && (k!== 3)) {
    k=4;
    console.log("Down key pressed")
  }

}
 

function createApple(){
  
  appleGroup.destroyEach();
  var apple = createSprite(Math.round(random(100, 300)),Math.round(random(100, 300)),10,10);
  apple.addImage(appleimg);
  apple.scale=0.05;
  //apple.lifetime = 150;
  appleGroup.add(apple);
  }

  function createSnake() 
  {
    dots = 3;
    for (var z = 0; z < dots; z++) {
        x[z] = 50 - z * 10;
        y[z] = 50;

      }
  } 


function drawSnake()
{
  console.log(dots);
  for (var z = 0; z < dots; z++) 
  {      
    if (z == 0) {
        image(headimg, x[z], y[z]);
    } else {
        image(bodyimg, x[z], y[z]);
    }
    
  } 
  //setTimeout(function () { console.log(""); }, 2000);  
//await sleep(5000) ;
}


const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function moveSnake() {

  for (var z = dots; z > 0; z--) 
  {
    x[z] = x[(z - 1)];
    y[z] = y[(z - 1)];
  }

  if (k==1)
  {
  x[0]    =x[0] - 10;
  }

  if (k==2)
  {
  x[0]    =x[0] + 10;
  }

  if (k==3)
  {
  y[0]    =y[0] - 10;
  }
  
  if (k==4)
  {
  y[0]    =y[0] + 10;
  }
}  

