var mbImage;


function preload() {
 mbImage = loadImage("MbgImg.jpg");
}

function setup() {
 createCanvas(1300, 700) ;
  wall1 = new Wall(0,0,700,5);
  wall2 = new Wall(0,0,5,225);
  wall3 = new Wall(0,240,5,260);
  wall4 = new Wall(0,493,700,5);
  wall5 = new Wall(695,0,5,225);
  wall6 = new Wall(695,240,5,260);
  wall7 = new Wall(120,0,5,60);
  wall8 = new Wall(70,57,50,5);
  wall9 = new Wall(18,21,102,5);
  wall10 = new Wall(18,20,5,24);
  wall11 = new Wall(18,37,89,7);
  wall12 = new Wall(0,57,53,5);
  wall13 = new Wall(53,57,5,73);
  wall14 = new Wall(0,476,73,7);
  wall15 = new Wall(68,460,5,20);
  wall16 = new Wall(34,460,5,20);
  wall17 = new Wall(51,459,17,7);
  wall18 = new Wall(33,131,57,5);
  wall19 = new Wall(85,134,5,74);
  wall20 = new Wall(0,75,38,5);
  wall21 = new Wall(34,76,5,39);
  wall22 = new Wall(17,92,5,61);
  wall23 = new Wall(0,130,18,5);
  wall24 = new Wall(17,149,56,5);
  wall25 = new Wall(69,150,5,75);
  wall26 = new Wall(69,222,37,5);
  wall27 = new Wall(0,166,38,5);
  wall28 = new Wall(35,167,4,22);
 wall29 = new Wall(37,185,18,5);
 wall30 = new Wall(69,222,37,5);
 wall31 = new Wall(52,168,18,4);
 wall32 = new Wall(102,204,5,20);
 wall33 = new Wall(102,204,37,4);
 wall34 = new Wall(118,222,73,5);
 wall35 = new Wall(186,202,5,22);
 wall36 = new Wall(118,204,5,21);
  wall37 = new Wall(170,202,20,5);
 wall38 = new Wall(0,404,22,5);
  wall39 = new Wall(17,406,5,58);
  wall40 = new Wall(0,222,56,5)
  wall41 = new Wall(0,240,20,5);
  wall42 = new Wall(18,240,4,22);
  wall43 = new Wall(0,348,22,5);
  wall44 = new Wall(17,294,5,57);
  wall45 = new Wall (0,275,73,5);
  wall46 = new Wall(17,185,5,22);
  wall47 = new Wall(18,203,52,5);
  wall48 = new Wall(0,386,22,5);
  wall49 = new Wall(17,368,5,20);
  wall50 = new Wall(153,185,5,36);
  wall51 = new Wall(154,185,86,5);
  wall52 = new Wall(237,185,5,92);
 wall53 = new Wall(220,276,20,5);
  wall54 = new Wall(203,186,5,22);
 wall55 = new Wall(205,202,20,5);
 wall56 = new Wall(188,0,5,99);
  wall57 = new Wall(475,0,5,150);
 wall58 = new Wall(508,147,5,182);
 wall59 = new Wall(170,54,5,76);
 wall60 = new Wall(85,458,5,40);
 wall61 = new Wall(137,19,5,60);
 wall62 = new Wall(407,222,5,167);
 wall63 = new Wall(338,92,5,116);
wall64 = new Wall(592,0,5,25);
 wall65 = new Wall(154,40,5,90);
 wall66 = new Wall(220,222,5,150);
 wall67 = new Wall(255,112,5,132);










}

function draw(){
background("lavender")
image(mbImage,0,0,700,500);
console.log(mouseX);
console.log(mouseY);
  wall1.show();
  wall2.show();
  wall3.show();
  wall4.show();
  wall5.show();
  wall6.show();
  wall7.show();
  wall8.show();
  wall9.show();
  wall10.show();
  wall11.show();
  wall12.show();
  wall13.show();
  wall14.show();
  wall15.show();
  wall16.show();
  wall17.show();
  wall18.show();
  wall19.show();
  wall20.show();
  wall21.show();
  wall22.show();
  wall23.show();
  wall24.show();
  wall25.show();
  wall26.show();
  wall27.show();
  wall28.show();
 wall29.show();
  wall30.show();
  wall31.show();
  wall32.show();
 wall33.show();
 wall34.show();
  wall35.show();
 wall36.show();
 wall37.show();
 wall38.show();
 wall39.show();
 wall40.show();
  wall41.show();
 wall42.show();
 wall43.show();
 wall44.show();
 wall45.show();
 wall46.show();
 wall47.show();
 wall48.show();
 wall49.show();
 wall50.show();
 wall51.show();
  wall52.show();
  wall53.show();
  wall54.show();
 wall55.show();
  wall56.show();
  wall57.show();
  wall58.show();
  wall59.show();
  wall60.show();
  wall61.show();
  wall62.show();
  wall63.show();
  wall64.show();
  wall65.show();
  wall66.show();
  wall67.show();
  drawSprites() ;
}



/*var gameState= "start";
var bg;
var Obstacle1 , Obstacle2 , Obstacle3 ;
var score = 300;
var backgroundImg;
var ground;
var penguin;
var ObstacleImg1, ObstacleImg2,  ObstacleImg3;
var penguin_walking, penguin_collided;
var Obstacle1grp;
var Obstacle2grp;
var Obstacle3grp;


function preload(){
  penguin_walking = loadAnimation("P1.png","P3.png","P2.png","P3.png");
  penguin_collided = loadAnimation("P5.png");
  ObstacleImg1 = loadImage("Obstacle1.png");
  ObstacleImg2 = loadImage("Obstacle2.png");
  ObstacleImg3 = loadImage("Obstacle3.png");
  backgroundImg = loadImage("Antarctica.jpg");

}

function setup(){
 createCanvas(windowWidth,windowHeight);

 bg=createSprite(0,0);
  bg.addImage("Image",backgroundImg);
  bg.scale = 2.5;
 bg.x = width/2 ;
  bg.velocityX = -5;
 

 penguin = createSprite(50,height-52,20,20);
 penguin.addAnimation("walking",penguin_walking);
 penguin.addAnimation("collided",penguin_collided);
 penguin.scale = 0.5;


 

 ground = createSprite(width/2,height-50,width*2,5);
 ground.velocityX = -1;
  ground.x = width/2 ;
  ground.visible = false;

  Obstacle1grp = createGroup();
  Obstacle2grp = createGroup();
  Obstacle3grp = createGroup();        


}

function draw(){
background("lavender");

fill("black")
text ("Score: " + score,920,25);
penguin.collide(ground);
if (ground.x<0) {
  ground.x= ground.width/2
}
console.log(mouseX);
console.log(mouseY);


if (bg.x<0) {
  bg.x= bg.width/2
}




penguin.collide(ground);





spawnObstacle1();
spawnObstacle2();
spawnObstacle3();


if (Obstacle1grp.isTouching(penguin)) {
  penguin.destroy();
  
}

if (keyDown("UP_ARROW")) {
  penguin.velocityY = -5;
}

penguin.velocityY = penguin.velocityY + 0.1;



if (Obstacle2grp.isTouching(penguin)) {
  penguin.changeAnimation("collided");
  
}

if (keyDown("DOWN_ARROW")) {
  penguin.velocityY = 10;
}



if(Obstacle3grp.isTouching(penguin)) {
  
}


drawSprites();

}

function spawnObstacle1() {
 if(frameCount % 150 === 0 && score>=300) 
  {
   Obstacle1 = createSprite(450,height-125,20,20)
  Obstacle1.addImage("Image",ObstacleImg1)
  Obstacle1.scale = 0.2225;
  Obstacle1.velocityX = -5;
  Obstacle1.debug = true;
  Obstacle1.setCollider("circle",0,0,10);
   Obstacle1grp.add (Obstacle1);
  }
   }

function spawnObstacle2() {
  if(frameCount % 180 === 0 ) 
  {

    var y = Math.round(random(200,height-200))
   Obstacle2 = createSprite(450,y,20,20)
  Obstacle2.addImage("Image",ObstacleImg2)
  Obstacle2.scale = 0.125;
  Obstacle2.velocityX = -5;
  Obstacle2.debug = true;
  Obstacle2.setCollider("circle",0,0,10);
   Obstacle2grp.add (Obstacle2);
  }
  

 }

 function spawnObstacle3() {
  if(frameCount % 210 === 0 ) 
   {
    var v = Math.round(random(100,height-200))
    Obstacle3 = createSprite(450,v,20,20)
   Obstacle3.addImage("Image",ObstacleImg3)
   Obstacle3.scale = 0.01;
   Obstacle3.velocityX = -5;
   Obstacle3.debug = true;
   Obstacle3.setCollider("circle",0,0,10);
    Obstacle3grp.add (Obstacle3);
   }
    }

*/


