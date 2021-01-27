  // Renaming the Engine module of matter.js library --> NameSpacing  
  const Engine = Matter.Engine;
  const Bodies = Matter.Bodies;
  const World = Matter.World;

  // declaring engine variable
  var engine;
  var ground,box1,box2;
  
function setup() {
  createCanvas(800,400);

  // Creating an engine for our application to make physics simulations

  engine = Engine.create();
  world =  engine.world;

  ground = new Ground(400,380,800,20);

  box1 = new Box(420,200,50,50);
  box2 = new Box(400,100,50,100);
 
}

function draw() {
  background("lightblue"); 

  Engine.update(engine);

  ground.display();
  box1.display();
  box2.display();
  
}