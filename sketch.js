
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;
const Render = Matter.Render;

var bobDiameter=40;


function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

  roofObject=new Roof(width/2,height/4,width/7,20);
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
       

	rope1 = new Rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0);
	rope2 = new Rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0);
	rope3 = new Rope(bobObject3.body,roofObject.body,0, 0);
	rope4 = new Rope(bobObject4.body,roofObject.body,bobDiameter*1, 0);
	rope5 = new Rope(bobObject5.body,roofObject.body,bobDiameter*2, 0);



	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(211,211,211);
  Engine.update(engine);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

  }
}

