var res = 10.0
var grid
var count = 0
var rows
var cols
var gridOn = true

function setup() {
    createCanvas(400, 400);
    rows = width / res
    cols = height / res
    grid = create2DArray()
    var button = createButton('Next generation')
    button.position(410, 400)
    button.mousePressed(update)

    var reset = createButton('Reset')
    reset.position(410, 430)
    reset.mousePressed(resetGrid)
    slider = createSlider(1, 10)
}

function resetGrid(){
    gridOn = true
    grid = create2DArray()
    frameRate(30)
}

function draw() {

    background(51)
    if(gridOn) stroke(255)
    else{
        noStroke()
        frameRate(slider.value())
        update()
    }
    draw2DArray()

}

function mouseClicked(){
    if (! gridOn)return
    indexX = round((mouseX / res)+ 0.5) - 1
    indexY = round((mouseY / res)+ 0.5) - 1
    if(mouseX > 9 && mouseX < width - 10 && mouseY > 9 && mouseY < height - 10){
        if(grid[indexX][indexY] == 0){
            grid[indexX][indexY] = 1
        }
        else{
            grid[indexX][indexY] = 0
        }
    }
}

function update(){
    gridOn = false
    next = create2DArray()
    for(var i = 0; i < cols ; i++){
        for(var j = 0; j < rows ; j++){
            var state = grid[i][j]
            if(i == 0 || j == 0 || i == cols - 1 || j == rows - 1){
                next[i][j] = state
            }
            else{
                var sum = 0
                var neighbors = neighbours(grid, i, j)

                if(state == 0 && neighbors == 3){
                    next[i][j] = 1
                }
                else if(state == 1 && (neighbors < 2 || neighbors > 3)){
                    next[i][j] == 0
                }
                else{
                    next[i][j] = state
                }
            }

        }
    }
    grid = next
}

function draw2DArray(){
    for(var i = 0; i < rows; i++){
        for(var j = 0; j < cols; j++){
            if(grid[i][j] == 1){
                fill(255)
                rect(i * res, j * res, res, res)
            }
            else{
                fill(51)
                rect(i * res, j * res, res, res)

            }
        }
    }
}

function neighbours(tab, x, y){
    var countS = 0
    for(var i = -1; i < 2; i++){
        for(var j = -1; j < 2; j++){
            var col = (x + i + cols) % cols;
            var row = (y + j + rows) % rows;
            countS += grid[col][row];
        }
    }
    countS -= tab[x][y]
    return countS
}

function userCreate(){
    for(var i = 0; i < rows; i++){
        var temp = []
        for(var j = 0; j < cols; j++){
            temp[j] = 0
        }
        grid[i] = temp
    }
    return grid
}

function drawStart(){
    for(var i = 1; i < rows - 1; i++){
        for(var j = 1; j < cols - 1; j++){
            fill(51)
            stroke(255)
            rect(i * res, j * res, res, res)

        }
    }
}

function create2DArray(){
    var tab = []
    for(var i = 0; i < rows; i++){
        var temp = []
        for(var j = 0; j < cols; j++){
            temp[j] = 0
        }
        tab[i] = temp
    }
    return tab
}
