const Events = Matter.Events;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;

function setup() 
{
  createCanvas(485,800);
  engine = Engine.create();
  world = engine.world;

  for(var k = 0; k <=width;k = k+80)
  {
    divisions.push(new Division(k,height-devisionHeight/2,10,devisionHeight));
  }

  for(var j = 40; j <=width; j=j+60)
  {
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 15; j <=width-10; j=j+60)
  {
    plinkos.push(new Plinko(j,175));
  }

  for(var j=40; j <=width; j=j+60)
  {
    plinkos.push(new Plinko(j,275));
  }

  for(var j = 15; j <=width-10; j=j+60)
  {
    plinkos.push(new Plinko(j,375));
  }

  ground = new Ground(549,793,1098,10);
  
}

var particles = [];
var plinkos = [];
var divisions = [];

var devisionHeight=300; 

function draw() 
{
  background(0);
  Engine.update(engine);
  
  if(frameCount%60===0)
  {
    particles.push(new Particle(random(width/2-40,width/2+40),10,10));
  }

  for(var p = 0; p < particles.length; p++)
  {
    particles[p].display();
  }

  for (var k = 0; k < divisions.length; k++)
  {
    divisions[k].display();
  }

  for(var j = 0; j < plinkos.length; j++)
  {
    plinkos[j].display();
  }

  for(var j = 0; j < plinkos.length; j++)
  {
    plinkos[j].display();
  }


  ground.display();
  
}