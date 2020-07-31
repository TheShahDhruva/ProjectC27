const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine;
var world;
var chain, chain1;

var bob1;
var bob2;
var bob3, bob4, bob5, bob6;
var roof, roof2, roof3, roof4, roof5, roof6, roof7, roof8, roof9, roof10, roof11, roof12;
var line;
var Ground;
function setup(){
	var canvas = createCanvas(800,600);
	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);
	ellipseMode(RADIUS);
	bob1 = new help(200, 100);
	roof = new ceiling(bob1.body,{x:bob1.body.position.x, y:100});
	
	bob2 = new help(280,100);
	roof2 = new ceiling(bob2.body,{x:bob2.body.position.x, y:100});

	
	bob3 = new help(360, 100);
	roof3 = new ceiling(bob3.body,{x:bob3.body.position.x, y:100});
	
	
	bob4 = new help(440, 100);
	roof4 = new ceiling(bob4.body,{x:bob4.body.position.x, y:100});
	

	bob5 = new help(520, 100);
	roof5 = new ceiling(bob5.body,{x:bob5.body.position.x, y:100});
	

	bob6 = new help(600, 100);
	roof6 = new ceiling(bob6.body,{x: bob6.body.position.x, y:100});
	
	Ground = new ground(400, 100);

}


function draw(){
	background(10, 200, 240);
	Engine.update(engine);
	ellipseMode(RADIUS);
	bob1.display();
	bob2.display();
	roof.display();
	roof2.display();
	/*strokeWeight(3);
	line(bob2.body.position.x, bob2.body.position.y, roof2.body.position.x, roof2.body.position.y);
	line(bob1.body.position.x, bob1.body.position.y, roof.body.position.x, roof.body.position.y);*/
	bob3.display();
	roof3.display();
	bob4.display();
	roof4.display();
	bob5.display();
	roof5.display();
	bob6.display();
	roof6.display();
	Ground.display();
	

}
function mouseDragged(){
	Matter.Body.setPosition(bob6.body, {x: mouseX, y: mouseY});
}
