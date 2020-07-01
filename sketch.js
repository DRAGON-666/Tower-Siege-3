const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var engine,world;

var backgroundImg="white";

var groundclass;

var slingshot,polygon;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;

function preload() {
  getTime();
 
}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();

   world = engine.world;

  //level 1

  block1 =new Box(330,255,30,40);
  
  block2 =new Box(360,235,30,40);
  fill(91,169,216);


  block3 =new Box(390,235,30,40);

  block4 =new Box(420,235,30,40);

  block5 =new Box(450,235,30,40);

  //level 2
  block6 =new Box(360,195,30,40);

  block7 =new Box(390,195,30,40);

  block8 =new Box(420,195,30,40);

  //level 3

   block9 =new Box(390,155,30,40);

  ground = new Ground(390,360,300,20);

  polygon = Bodies.circle(100,200,20);

  World.add(world,polygon); 

  slingshot = new SlingShot(polygon,{x:100, y:200});

}

function draw() {
  background(backgroundImg);  

  Engine.update(engine);

  block1.display();

  block2.display();

  block3.display();

  block4.display();

  block5.display();

  block6.display();

  block7.display();

  block8.display();

  block9.display();

  ellipseMode(RADIUS)
    ellipse(polygon.position.x,polygon.position.y,20,20);
  

  ground.display();

  slingshot.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.sling.bodyA=null;
}

function keyPressed(){
  if(keyCode===32)
  slingshot.attach(this.polygon)
}

async function getTime(){
  var response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
  var timeJson = await response.json();
  var datetime = timeJson.datetime;
  var hour     = datetime[11]+datetime[12];

  console.log(hour);
  if(hour>6 && hour<18 ){
      backgroundImg = loadImage("Sprites/night.jpeg");
      console.log("night");
     
  }else {
      backgroundImg = loadImage("Sprites/morning.jpeg")
      console.log("day")
  }

 
}