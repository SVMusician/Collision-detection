var movingRect, fixedRect; 
function setup() {
  createCanvas(windowWidth,windowHeight);
  fixedRect = createSprite(windowWidth/2, windowHeight/2, 50, 50);
  fixedRect.shapeColor = "blue";
  movingRect = createSprite(0,0, 50, 50);
  movingRect.shapeColor = "red";
  movingRect.debug = true;
  fixedRect.debug = true;
}
  
function draw() {
  background(133, 124, 102); 
  drawSprites();

  movingRect.x = World.mouseX 
  movingRect.y = World.mouseY 

  if(movingRect.x - fixedRect.x   < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
   { movingRect.shapeColor = "green"
    fixedRect.shapeColor = "green"}
    else{
      movingRect.shapeColor = "red"
      fixedRect.shapeColor = "blue";
    }
}
