var countMax = 0
var sponge = []
function setup() {
    createCanvas(400, 400, WEBGL);
    var b = new Box(0, 0, 0, 200)
    sponge.push(b)
    frameRate(30)
}

function draw() {
    background(51)
    fill(255, 204, 0)
    var dirY = (mouseY / height - 0.5) * 4;
    var dirX = (mouseX / width - 0.5) * 4;
    directionalLight(255, 204, 0, dirY, dirX, 1);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    for(var i = 0; i< sponge.length; i++){
        sponge[i].show()
    }
    if(frameCount % 50 == 0){
        new_generation()
    }
}

function new_generation(){
    if (countMax> 1){
        sponge = []
        sponge.push(new Box(0,0,0,200))
        countMax = 0
        return
    }
    var new_sponge = []
    var test =[]
    for(var i = 0; i < sponge.length; i++){
        new_sponge = sponge[i].generate()
        Array.prototype.push.apply(test, new_sponge);
    }
    sponge = test
    countMax++

}
