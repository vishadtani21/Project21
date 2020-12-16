var bullet,wall;
var speed,weight,thickness;



function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52); 
  thickness=random(22,83);

  bullet=createSprite(400, 200, 50, 10);
  bullet.velocityX=speed;
  bullet.shapeColor="white";

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapecolor=color(80,80,80);
}


function draw() {
  background("black");  

  if(hasCollided(bullet, wall))
 {
    bullet.velocityX=0;

    var Damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(Damage<10)
    {

      wall.shapeColor="green";

    }

    if(Damage>10){

      wall.shapeColor="red";

    }

    


 }

 drawSprites();
}

function hasCollided(bullet,wall)
{
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;

if(bulletRightEdge>=wallLeftEdge)
{
return true
}

return false;



}



