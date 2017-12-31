class Star{
    constructor(){
        this.x = random(-width, width)
        this.y = random(-height, height)
        this.z = random(width)
        this.size = random(1, 2)
        this.pz = this.z
    }

    show(){
        var x = this.x
        var y = this.y
        var z = this.z
        fill(255)
        noStroke()
        var newX = map(x / z, 0 , 1, 0, width)
        var newY = map(y / z, 0, 1, 0, height)
        var r = map(z, 0, width, 16, 0)
        //ellipse(newX, newY, r, r)

        stroke(255)
        var pX = map(x / this.pz, 0 , 1, 0, width)
        var pY = map(y / this.pz, 0, 1, 0, height)

        this.pz = this.z
        line(pX, pY, newX, newY)
    }

    update(){
        this.z = this.z - speed * this.size
        if(this.z<1){
            this.z = width
            this.x = random(-width, width)
            this.y = random(-height, height)
            this.pz = this.z
        }
    }
}
