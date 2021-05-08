var canvas;
var block1,block2,block3,block4;
var ball, edges;
var sound;

function preload(){
    // load sound here
    sound = loadSound("sound.mp3");
}


function setup(){
    canvas = createCanvas(915,600);

    block1 = createSprite(120,580,200,30);
    block1.shapeColor = "purple";

    block2 = createSprite(350,580,200,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here

    block3 = createSprite(580,580,200,30);
    block3.shapeColor = "brown";

    block4 = createSprite(800,580,200,30);
    block4.shapeColor = "pink";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    
    //write code to add velocityX and velocityY
    ball.velocityX= 4;
    ball.velocityY= 4;

}

function draw() {
    background("aquamarine");
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "purple";
        sound.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityX  = 0;
        ball.velocityY = 0;
        //write code to stop music
        sound.stop()
    }

    //write code to bounce off ball from the block3
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "brown";
        sound.play();
    }

    //write code to bounce off ball from the block4
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "pink";
        sound.play();
    }


    drawSprites();
}
