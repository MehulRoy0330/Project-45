var rocket, rocketUp, rocketStraight, rocketDown;
var meteor, meteorImg;
var space, spaceImg;

var gameState = "start";

var score = 0;

function preload(){
  rocketUp = loadAnimation("imgs/rocket-up.png");
  rocketDown = loadAnimation("imgs/rocket-down.png");
  rocketStraight = loadAnimation("imgs/rocket-straight.png");

  meteorImg = loadImage("imgs/meteor.png");

  spaceImg = loadImage("imgs/space.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}