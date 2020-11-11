var canvas;
const Engine=Matter.Engine;
const World = Matter.World; 
const Bodies = Matter.Bodies;
var ground,ball;
var engine,world;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create()
    world = engine.world;
    var ground_options = {
        isStatic:true
    }
    ground = Bodies.rectangle(200,390,200,20,ground_options);

    World.add(world.ground);
    console.log(ground);
    var ball_options = {
        restitution: 1
    }
    ball = Bodies.circle(200,100,20);
    World.add(world.ball);
}
function draw(){
    background("blue");
    rectMode(CENTER);
    rect(ob1.position.x, ob1.position.y,50,50);
    ellipseMode(RADIUS);
    ellipse(ball.poxition.x,ball.position.y,20,20);




    











}
