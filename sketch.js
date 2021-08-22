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

    space = createSprite(width/2, height/2);
    space.addImage(spaceImg);
    space.scale = 12.0;
    space.velocityX = -4;

    rocket = createSprite(100, height/2, 10, 10);
    rocket.addAnimation("straight", rocketStraight);
    rocket.scale = 0.35;

}

function draw() {
    background(0);

    if(space.x < 0){
        space.x = width/2;
    }

    rocket.changeAnimation("straight");
    if(keyDown("up")){
        rocket.addAnimation("up", rocketUp);
        rocket.changeAnimation("up");

        rocket.y -= 10;
    }
    if(keyDown("down")){
        rocket.addAnimation("down", rocketDown);
        rocket.changeAnimation("down");

        rocket.y +=10;
    }

    drawSprites();
}