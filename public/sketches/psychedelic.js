function setup() {
  createCanvas(700, 500)
  background(50,2,50)
}

function draw() {
  noStroke()
  fill(random(255),4,2)
  ellipse(mouseX, mouseY, 80, 100);
  ellipse(mouseY, mouseX, 80, 100);
}

new p5(sketch, 'container');
