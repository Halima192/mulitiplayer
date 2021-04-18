var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1ing,car2ing,car3ing,car4ing,track;
var cars, car1, car2, car3, car4;

function preLoad(){
  car1ing=loadImage("images/car1.png")
  car2ing=loadImage("images/car2.png")
  car3ing=loadImage("images/car3.png")
  car4ing=loadImage("images/car4.png")
  track=loadImage("images/track.jpg")
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
