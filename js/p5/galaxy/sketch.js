var speed
var stars = []
function setup() {
  createCanvas(800, 800)
  for(var i = 0; i < 600; i++){
    stars[i] = new Star()
  }
  slider = createSlider(1, 50)

}

function draw() {
  background(51)
  speed = slider.value()
  translate(width/2, height/2)
  for(var i = 0; i < stars.length; i++){
    stars[i].update()
    stars[i].show()
  }
}
