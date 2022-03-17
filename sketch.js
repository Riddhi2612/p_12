var path , pathImg ;
var runner , runnerImg ;
var invisibleBoundary ;
var invisibleBoundary2 ;

function preload(){
  pathImg= loadImage("path.png")
  runnerImg=loadAnimation("Runner-1.png", "Runner-2.png")
  
}

function setup()
{
  createCanvas(600,400);

  path = createSprite(300,0);
  path.addImage("path", pathImg);
  path.velocityY+=10

  createEdgeSprites();
  

  invisibleBoundary = createSprite(160,200,20,400);
  invisibleBoundary.visible = false;
  
  invisibleBoundary2 = createSprite(445,200,20,400);
  invisibleBoundary2.visible = false;
  
}



function draw() {
  background(0);
  createEdgeSprites();
  
  drawSprites();


  if (frameCount % 50 === 0) {
    invisibleBoundary = createSprite(160,200,20,400);
    invisibleBoundary.visible = false;
    invisibleBoundary2 = createSprite(445,200,20,400);
    invisibleBoundary2.visible = false;
  
    }


  if (frameCount % 50 === 0 ){
    path = createSprite(300,0);
  path.addImage("path", pathImg);
  path.velocityY+=10
  }
  
  spawnRunner();



               if (keyWentDown("right")){
                runner.velocityX+=2
                }


               if (keyWentDown("left")){
                 runner.velocityX-=2 
                }
               if (keyWentDown("up")){
                 runner.velocityY-=2 
                }
               if (keyWentDown("down")){
                 runner.velocityY-=2 
                }







}

             
              




function spawnRunner() {
  if (frameCount % 50 === 0 ){
    runner=createSprite(300,340,10,10);
  runner.addAnimation("runner" , runnerImg);
  runner.scale = 0.05
  }

  
}



