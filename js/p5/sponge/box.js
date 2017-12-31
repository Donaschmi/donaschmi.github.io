class Box{

    constructor(x, y, z, r){
        this.pos = createVector(x, y, z)
        this.r = r
    }

    generate(){
        var boxes = []
        for(var x = -1; x < 2; x++){
            for(var y = -1; y < 2; y++){
                for(var z = -1;  z< 2; z++){
                    var abs = Math.abs(x) + Math.abs(y) + Math.abs(z)
                    if(abs <= 1) continue
                    var size = this.r / 3.0
                    var b = new Box(this.pos.x + x * size,this.pos.y + y * size, this.pos.z + z * size, size)
                    boxes.push(b)
                }
            }
        }
        return boxes
    }

    show(){
        push()
        translate(this.pos.x, this.pos.y, this.pos.z)
        noStroke()
        box(this.r)
        pop()
    }
}
