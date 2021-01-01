
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1= new Bob(200,200,30)
	bobObject2= new Bob(300,200,30)
	bobObject3= new Bob(400,200,30)
	bobObject4= new Bob(500,200,30)
	bobObject5= new Bob(600,200,30)
    roof= new Roof(400, 50, 500, 20)
    rope1 = new Chain(bobObject1, roof, 200, 50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,63);
  
  drawSprites();
 bobObject1.display()
 bobObject2.display()
 bobObject3.display()
 bobObject4.display()
 bobObject5.display()
 rope1.display()
 roof.display()
}



