var a,b;
function setup() {
  createCanvas(800,400);
 a= createSprite(400, 200, 50, 50);
b= createSprite(200,200,30,20);
 a.shapeColor="red";
 b.shapeColor="red";
}

function draw() {
  background(255,255,255);
  a.x=World.mouseX;
  a.y=World.mouseY;  
  console.log(a.x-b.x);
  if(a.x-b.x<a.width/2+b.width/2 &&b.x-a.x<a.width/2+b.width/2  ){
    a.shapeColor="yellow";
    b.shapeColor="yellow";
  }
  else{
    a.shapeColor="red";
    b.shapeColor="red"; 
  }
  if(a.x-b.x<a.height/2+b.height/2 &&b.x-a.x<a.height/2+b.height/2 ){
    a.shapeColor="yellow";
    b.shapeColor="yellow";
  }
  else{
    a.shapeColor="red";
    b.shapeColor="red"; 
  }
  drawSprites();
}