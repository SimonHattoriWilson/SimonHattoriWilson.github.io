function setup() {
  createCanvas(500,500);
  background(250);
}

function draw() {

  rectMode(RADIUS);
  fill(245);
  strokeWeight(1);
  stroke(0,0,0);
  rect(mouseX,mouseY,50,50,50,50);

}