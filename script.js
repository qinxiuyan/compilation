
var i;
var canvas;

function setup() {
  canvas=createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  canvas.style('position','fixed');
  background(220);
   for(let y=10;y<windowHeight;y+=20){
     for(let x=10;x<windowWidth;x+=15){
        fill(random(255),random(255),random(255),5);
     noStroke();
  circle(x,y,random(50));
    }}
}
function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}
function draw(){
  fill(random(255),random(255),random(255),30)
  circle(mouseX,mouseY,random(30))
}
