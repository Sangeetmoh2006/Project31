const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world
var rain ,drops = [];
var maxDrops = 100;
function preload(){
    
}

function setup(){
   createCanvas(400,800);
   engine = Engine.create();
    world = engine.world;

    for(var i=0; i<maxDrops; i++) {
        drops.push(new Drops(random(0,400), random(0,400)));
    }
    
}

function draw(){
    Engine.update(engine);
    background("black");

    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
    drawSprites();
    }
}