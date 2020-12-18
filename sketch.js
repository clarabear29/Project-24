
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Render=Matter.Render;




var world;//, engine;
var paper1;
var ground1;
var bin1, bin2, bin3;
var wall1, wall2, wall3;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	

	ground1 = new ground (width/2, 670, width, 20);
	paper1=new paper(200,450,40);
	bin1=new bin (1360,655,200,15);
	bin2=new bin (1450,558,15,180);
	bin3=new bin (1270,558,15,180);
	wall1=new wall (1600,350,20,700);
	wall2=new wall (1,350,20,700);
	wall3=new wall (800,1,1600,10);

	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1200,
			height: 700,
			wireframes: false
		}
	});

	Engine.run(engine);
  
}


function draw() {
	//Engine.update(engine);
  rectMode(CENTER);
  background(0);

  paper1.display();
  ground1.display();
  bin1.display();
  bin2.display();
  bin3.display();
  //wall3.display();
  
  

 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:80,y:-80});
	}
}



