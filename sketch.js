var rocket, rocketUp, rocketStraight, rocketDown;
var meteor, meteorImg;
var space, spaceImg;

var gameImg;

var gameState = "start";

var score = 0;

function preload(){
    rocketUp = loadAnimation("imgs/rocket-up.png");
    rocketDown = loadAnimation("imgs/rocket-down.png");
    rocketStraight = loadAnimation("imgs/rocket-straight.png");

    meteorImg = loadImage("imgs/meteor.png");
    spaceImg = loadImage("imgs/space.png");

    gameImg = loadImage("imgs/gameImg.png");
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
    if(gameState === "start"){
        background("cyan");
        
        stroke("black");
        fill("black");
        textSize(30);
        text("Meteor Escape", width/2-95, height/2-200);

        noStroke();
        fill("green");
        textSize(15);
        text("Help the rocket dodge the meteors!!", width/2-110, height/2-150);

        image(gameImg, width/2-60, height/2-120, 137, 114);

        fill("red");
        textSize(18);
        text("Press up and down arrow keys to dodge the meteors", width/2-190, height/2+50);

        fill("blue");
        textSize(20);
        text("Press S to start", width/2-60, height/2+150);

        if(keyDown("s")){
            gameState = "play";
        }
    }
    if(gameState === "play"){
        background(0);

        spawnMeteors();

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

        noStroke();
        fill("white");
        textSize(15);
        text("Score: "+score, width-100, 50);
        score += Math.round(getFrameRate()/60);
    }
}

function spawnMeteors(){
    if(frameCount%60 === 0){
        meteor = createSprite(width+10, random(20, height-20), 10, 10);
        meteor.addImage(meteorImg);
        meteor.scale = random(0.2, 0.5);
        meteor.velocityX = -(9+score/500);
        meteor.lifetime = 170;
    }
}