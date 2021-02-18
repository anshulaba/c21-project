var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);
    
wall1 = createSprite(0,400,170,20);
wall1.shapeColor="blue";

wall2 = createSprite(140,400,90,20);
wall2.shapeColor="yellow";

wall3 = createSprite(240,400,90,20);
wall3.shapeColor="orange";

wall4 = createSprite(340,400,90,20);
wall4.shapeColor="red";

 ball = createSprite(200, 200,20,20);

ball.velocityX=4;
ball.velocityY=3;

edges=createEdgeSprites();

}

function draw() {
    background("gold");
    
    if (ball.isTouching(wall1)) {
     ball.shapeColor="blue"; 
    }
    
    if (ball.isTouching(wall2)) {
     ball.shapeColor="yellow"; 
    }
    
    if (ball.isTouching(wall3)) {
     ball.shapeColor="orange"; 
    }
    
    if (ball.isTouching(wall4)) {
     ball.shapeColor="red"; 
    }
    
    
    
    ball.bounceOff(edges);
    
    drawSprites();
    }