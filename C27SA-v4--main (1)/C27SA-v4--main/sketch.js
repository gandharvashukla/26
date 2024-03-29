const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}


function setup() {
  canvas = createCanvas(window.width,window.height);

  engine = Engine.create();
  world = engine.world;



  rectMode(CENTER);
  ellipseMode(RADIUS);
  //Use a new keyword to create a tower object.(challenge 4)
  tower= new Tower(150,350,160,310) ;
}

function draw() 
{
  background(189);
  image(backgroundImg, 0, 0,width,height);

  Engine.update(engine);
//display tower(challenge 4)
tower.display();
 
}

