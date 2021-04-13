var gameState,playerCount, database;
var form, player, allPlayers, game;
var cars, car1, car2, car3, car4;
var  distance = 0;
var car1Img, car2Img, car3Img, car4Img;
var track, ground, trackImg, groundImg;
var YouWon, YouWonImg, bg, bgImg;
var qwe;

function preload(){

  car1Img = loadImage("../Images/car1.png");
  car2Img = loadImage("../Images/car2.png");
  car3Img = loadImage("../Images/car3.png");
  car4Img = loadImage("../Images/car4.png");
  trackImg = loadImage("../Images/track.jpg");
  groundImg = loadImage("../Images/ground.png");
  YouWonImg = loadImage("../Images/You Won.jpg");
  bgImg = loadImage("../Images/bg.jpg");

}

function setup(){
  database = firebase.database();
  gameState = 0;
  qwe = random(-250 , 250);
  createCanvas(displayWidth, displayHeight - 230);
  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  background("lavender");
  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 2){

    bg = createSprite(displayWidth/2 , displayHeight/2 ,500, 300);
    bg.addImage(bgImg);

    YouWon = createSprite(camera.position.x + qwe, camera.position.y + qwe, 500, 300);
    YouWon.addImage(YouWonImg);
  } 
  
  if(gameState === 1){
    clear();
    game.play(); 
  }

  drawSprites();
}
