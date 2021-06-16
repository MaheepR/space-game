var space,spaceImg;
var rocket,rocketImg;
var alien,alienImg,alienG;
var star,starImg,starG;
var astronaut,astronautImg,astronautG;


function preload(){

  spaceImg = loadImage("image of space.jpg");
  rocketImg = loadImage("rocket.png");
  starImg = loadImage("star.png");
  alienImg = loadImage("alien.png");
  astronautImg = loadImage("astronaut.png");
  
 
}

function setup() {
 createCanvas(600,600);

  space=createSprite(300,300,600,600);
  space.addImage("space",spaceImg);
  space.velocityY=1;
  space.scale=5;

 

  rocket=createSprite(200,400);
  rocket.addImage("rocket",rocketImg);
  rocket.scale=0.3;

}

function draw() {
  
  
  background("black");

if(space.y>400){
    space.y=300;
}
//calling functions
spawnStars();
spawnAliens();
spawnAstronaut();

 drawSprites();

  }

function spawnAliens(){
  if(World.frameRate%200===0){
    alien=createSprite(Math.round(random(200,50)));
    alien.addImage("alien",alienImg);
    alien.velocityY=1;
    alien.lifetime=200;
    alienG.add(alien);
  }
}

function spawnStars(){
  if(World.frameRate%300===0){
    star=createSprite(Math.round(random(50,550)));
    star.addImage("star",starImg);
    star.velocityY=1;
    star.lifetime=200;
    starG.add(star);
    
  }
}

function spawnAstronaut(){
  if(World.frameRate%520===0){
    astronaut=createSprite(Math.round(random(100,400)));
    astronaut.addImage("astronaut",astronautImg);
    astronaut.velocityY=1;
    astronaut.lifetime=200;
    astronautG.add(astronaut);
  }
}