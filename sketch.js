
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var slingshot;
function preload()
{
	
}

function setup() {
	createCanvas(600, 300);
	ground =createSprite(310,86,230,10);
	ground.shapeColor="grey";
	ground.body=ground;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
	
	bob1=Bodies.circle(300,250,20);
	World.add(world,bob1);
	bob1.shapeColor="pink";
	bob2=Bodies.circle(303,250,20);
	World.add(world,bob2);
	bob2.shapeColor="pink";
	bob3=Bodies.circle(305,250,20);
	World.add(world,bob3);
	bob3.shapeColor="pink";
	bob4=Bodies.circle(307,250,20);
	World.add(world,bob4);
	bob4.shapeColor="pink";
	bob5=Bodies.circle(309,250,20);
	World.add(world,bob5);
	bob5.shapeColor="pink";



}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();

  ellipseMode(RADIUS);
ellipse(bob1.position.x,bob1.position.y,20,20); 

ellipseMode(RADIUS);
ellipse(bob2.position.x,bob2.position.y,20,20); 

ellipseMode(RADIUS);
ellipse(bob3.position.x,bob3.position.y,20,20); 

ellipseMode(RADIUS);
ellipse(bob4.position.x,bob4.position.y,20,20); 

ellipseMode(RADIUS);
ellipse(bob5.position.x,bob5.position.y,20,20); 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  drawSprites();
 
}



