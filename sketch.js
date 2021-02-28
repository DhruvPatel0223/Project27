
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
var roof;
var chain;
var bob1Diameter = 50;
var bob2Diameter = 50;
var bob3Diameter = 50;
var bob4Diameter = 50;
var bob5Diameter = 50;

var bob1, bob2, bob3, bob4, bob5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(400,400);
	bob2 = new Bob(450, 400);
	bob3 = new Bob(500, 400);
	bob4 = new Bob(550, 400);
	bob5 = new Bob(950, 50);
	roof = new Roof(500,200,250,30);
	chain1 = new Chain(bob1.body, roof.body,  -100,0);
	chain2 = new Chain(bob2.body, roof.body,  -50,0);
	chain3 = new Chain(bob3.body, roof.body,  0,0);
	chain4 = new Chain(bob4.body, roof.body,  50,0);
	chain5 = new Chain(bob5.body, roof.body,  100,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  if (keyDown(UP_ARROW)) {
	  bob1.y = bob1.y -3;
  }
  

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}



