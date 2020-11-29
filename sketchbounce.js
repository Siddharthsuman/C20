var fixRect,movingRect;

function setup() {
  createCanvas(1200,800);

fixRect=createSprite(400, 100, 50, 80);
fixRect.shapeColor="green";
fixRect.velocityY=+5;
 
movingRect=createSprite(400,800,80,30);
movingRect.shapeColor="green";
movingRect.velocityY=-5;
}

function draw() {
  background(0,0,0); 

 // movingRect.x=World.mouseX;
 // movingRect.y=World.mouseY;

  if(fixRect.x-movingRect.x<(fixRect.width/2+movingRect.width/2)
  && movingRect.x-fixRect.x<fixRect.width/2+movingRect.width/2){
  
   //fixRect.shapeColor="red";
   // movingRect.shapeColor="red";
    movingRect.velocityX=movingRect.velocityX*(-1);
    fixRect.velocityX=fixRect.velocityX*(-1);
  } 
  
   
  if(fixRect.y-movingRect.y<(fixRect.height/2+movingRect.height/2)
  && movingRect.y-fixRect.y<fixRect.height/2+movingRect.height/2){
   //fixRect.shapeColor="red";
   // movingRect.shapeColor="red";
    movingRect.velocityY=movingRect.velocityY*(-1);
    fixRect.velocityY=fixRect.velocityY*(-1);
  } 
  



  drawSprites();
}