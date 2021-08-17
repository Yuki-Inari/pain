const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof,roof_options;
//Create multiple bobs, mulitple ropes varibale here
let world;
var ball, ball_options;
var ball2;
var ball3;
var ball4;
var ball5;
var ground;
var str;
var str2;
var str3;
var str4;
var str5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
    ball = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball);
  ball2 = Bodies.circle(350,10,12,ball_options);
  World.add(world,ball2);
  ball3 = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball3);
  ball4 = Bodies.circle(350,10,12,ball_options);
  World.add(world,ball4);
  ball5 = Bodies.circle(350,10,12,ball_options);
  World.add(world,ball5);

  str = Matter.Constraint.create({
	pointA:{x:200,y:20},
	bodyB:ball,
	pointB:{x:0,y:0},
	length:100,
	stiffness:0.1
  });


rope1 = new rope (ball,roof,-80,0)

rope2 = new rope (ball2,roof,-40,0)

rope3 = new rope (ball3,roof,0,0)

rope4 = new rope (ball4,roof,40,0)

rope5 = new rope (ball5,roof,80,0)

}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope1. display();
  rope2 . display();
  rope3 . display();
  rope4 . display();
  rope5. display();
  
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,12);
  ellipse(ball3.position.x,ball3.position.y,14);
  ellipse(ball4.position.x,ball4.position.y,16);
  ellipse(ball5.position.x,ball5.position.y,18);
 
}


//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
    }
    if(keyCode==LEFT_ARROW)
    {
      Matter.Body.applyForce(ball5,{x:0,y:0},{x:0,y:0.05});
    }
}
