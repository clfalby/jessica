//The setup function only happens once
var sandy=0;

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background(120,216,mouseX);
}

//The draw function happens over and over again
function draw() {
  //an RGB color for the canvas' background
  //circle
  stroke(200,73,184) // an RGB color for the circle's border
  fill(255,255,127,255); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,80,20); // center of canvas, 20px dia
  stroke(84,178,205);
  strokeWeight(5);
  fill(211,sandy,200);
  rect(sandy,200,sandy,sandy);
  line(sandy,100,300,sandy);
  stroke(210,12,15);
  strokeWeight(15);
  point(random(width),random(height));
  
}

function mousePressed() {
  if (sandy>=100)
  {sandy=0;} 
  else 
    {sandy=sandy+1;}
}
