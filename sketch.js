
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground
var stand
var slug
var slingshot
function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height-10,width,20)
 
  
  blockf6 = new Block(500,height-70,50,50)
  blockf1 = new Block(550,height-70,50,50)
  blockf2 = new Block(600,height-70,50,50)
  blockf3 = new Block(650,height-70,50,50)
  blockf4 = new Block(700,height-70,50,50)
  blockf5 = new Block(750,height-70,50,50)
  blockf7 = new Block(800,height-70,50,50)
  
  blocks1 = new Block(525,height-130,50,50)
  blocks2 = new Block(575,height-130,50,50)
  blocks3 = new Block(625,height-130,50,50)
  blocks4 = new Block(675,height-130,50,50)
  blocks5 = new Block(725,height-130,50,50)
  blocks6 = new Block(775,height-130,50,50)

  blockt1 = new Block(550,height-190,50,50)
  blockt2 = new Block(600,height-190,50,50)
  blockt3 = new Block(650,height-190,50,50)
  blockt4 = new Block(700,height-190,50,50)
  blockt5 = new Block(750,height-190,50,50)

  
  slug = new Slug(100,100,25,25,"red")
  slingShot = new SlingShot(slug.body,{x:100,y:200});
}


function draw() 
{
  background(51);
  Engine.update(engine);
  ground.display()
  blockf1.display();
  blockf2.display();
  blockf3.display();
  blockf4.display();
  blockf5.display();
  blockf6.display();
  blockf7.display();

  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  blocks6.display();

  blockt1.display();
  blockt2.display();
  blockt3.display();
  blockt4.display();
  blockt5.display();

  
  slug.display();
  slingShot.display();

}
