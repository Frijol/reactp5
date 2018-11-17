var speed = 1

function setup() {
  createCanvas(700, 500)
  background(90,255,138)
}

function draw() {
  // set background here instead of in setup to animate without leaving trail
  rect(speed, 40, 20, 40)
  speed = speed + 1
}
