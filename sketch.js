
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	right=new bin(750,350,10,70);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  right.display();


  
  drawSprites();
}



