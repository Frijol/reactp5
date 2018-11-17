function setup() {
  createCanvas(windowWidth, windowHeight)
  background(50,2,50)
}

function draw() {
  noStroke()
  fill(random(255),4,2)
  ellipse(mouseX, mouseY, 80, 100);
  ellipse(mouseY, mouseX, 80, 100);
}
