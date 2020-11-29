var fixRect,movingRect;

function setup() {
  createCanvas(1200,800);

fixRect=createSprite(350, 250, 50, 80);
fixRect.shapeColor="green";
 
movingRect=createSprite(400,300,80,30);
movingRect.shapeColor="green";
}

function draw() {
  background(0,0,0); 

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(fixRect.x-movingRect.x<(fixRect.width/2+movingRect.width/2)&& movingRect.x-fixRect.x<fixRect.width/2+movingRect.width/2 &&fixRect.y-movingRect.y<(fixRect.height/2+movingRect.height/2)&& movingRect.y-fixRect.y<fixRect.height/2+movingRect.height/2){
    fixRect.shapeColor="red";
    movingRect.shapeColor="red";
  } 
  else {
    fixRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
   


  drawSprites();
}