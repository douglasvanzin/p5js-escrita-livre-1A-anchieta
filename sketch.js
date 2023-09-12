function setup() {
  createCanvas(600, 400);
    background(color(0, 0, 0));
}
 
function draw() {
  fill("purple");
  stroke("blue");
  
  if(mouseIsPressed){
      //rect(mouseX, mouseY, 20, 25);
    circle(mouseX, mouseY, 15);
  }
}
