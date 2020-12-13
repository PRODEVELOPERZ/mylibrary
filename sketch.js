var r1,r2,r3,r4
function setup() {
  createCanvas(800,400);
 r1= createSprite(400, 200, 50, 80);
 r1.shapeColor="black"
 r2=createSprite(400, 200, 80, 50)
 r2.shapeColor="black"
 r3= createSprite(200, 100, 50, 80);
 r3.shapeColor="black"
 r4=createSprite(300, 100, 50, 80)
 r4.shapeColor="black"
}

function draw() {
  background(255,255,255);
  r2.x=World.mouseX
  r2.y=World.mouseY
  console.log(r2.x-r1.x)
if(isTouching(r3,r2)){
  r3.shapeColor="blue"
    r2.shapeColor="blue"
}
else{
  r3.shapeColor="black"
    r2.shapeColor="black"
}
   
  drawSprites();
}
