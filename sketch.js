
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper_ball;
var basket_leftside,basket_rightside,basket_bottomside;

function setup() {
	createCanvas(1400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(700, 370, 1400, 20);	
	paper_ball = new Paper(100, 310, 30);
	basket_leftside = new Dustbin(1000, 310, 20, 100);
    basket_rightside = new Dustbin(1200, 310, 20, 100);
	basket_bottomside = new Dustbin(1100, 350, 200, 20);
	//paper_ball.debug();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //Engine.update(engine);
  ground.display();
  paper_ball.display();
  basket_leftside.display();
  basket_rightside.display();
  basket_bottomside.display();

  

  keyPressed();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper_ball.body,paper_ball.body.position,{x:15,y:-10});
	}
}


