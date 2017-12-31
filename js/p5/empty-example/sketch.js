let angle

function setup() {
  createCanvas(800, 800)
  angleSlider = createSlider(0, TWO_PI, PI / 6, 0.01)
}

function draw() {
  angle = angleSlider.value()
  background(51)
  stroke(255)
  translate(400, height)
  branch(200)
}

function branch(len){
  line(0, 0, 0, -len)
  translate(0, -len)
  if (len > 3){
    push()
    rotate(angle)
    branch(len * 0.67)
    pop()
    push()
    rotate(-angle)
    branch(len*0.67)
    pop()

  }
}
