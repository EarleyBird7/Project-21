var bullet
var wall
var speed
var weight
var thickness

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(21,83);

bullet=createSprite(50, 250, 50, 5);
bullet.velocityX=speed;
bullet.shapeColor=color(225)

wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(230,230,250);

}

function draw() {
  background(255,255,255);
  if(ifCollided(bullet,wall)){
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

if(damage>10){
  wall.shapeColor=color(225,0,0);
}
if(damage<10){
  wall.shapeColor=color(0,255,0);
}
}
  drawSprites();
}

function ifCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width
wallLeftEdge=lwall.x

if(bulletRightEdge>=(wallLeftEdge)){
  return true;
}
return false;
}


