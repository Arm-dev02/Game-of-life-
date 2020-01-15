var matrix = [];
var m = 25;
var n = 25;
var side = 20;
var grassArr = [];
var grasseaterArr = [];
var predatorArr = [];
var grassherroArr = [];
var sheepArr = []



function setup() {
    for(var i = 0; i < m; i++){
        matrix[i] = [];
        for(var a = 0; a < n; a++){
            matrix[i][a] = Math.floor(random(6));
        createCanvas(matrix[0].length*side,matrix.length*side);
        }
       }
       console.log(matrix);
    frameRate(5);
    background('#8B8383');

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var ge = new GrassEater(x, y, 2)
                grasseaterArr.push(ge);

            } else if (matrix[y][x] == 3) {
                var pe = new Predator(x, y, 3)
                predatorArr.push(pe);
            } else if (matrix[y][x] == 4) {
                var gh = new GrassHerro(x, y, 4)
                grassherroArr.push(gh);
            } else if (matrix[y][x] == 5) {
                var sp = new Sheep(x, y, 5)
                sheepArr.push(sp);
            }
        }
    }
}


function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 0) {
                fill("gray");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side)
            } else if (matrix[y][x] == 5) {
                fill("#FFFFFF");
                rect(x * side, y * side, side, side)
            }
        }
    }

    for (var i in grassArr) {
        grassArr[i].mul();
    }

    for (var i in grasseaterArr) {
        grasseaterArr[i].move();
        grasseaterArr[i].eat();
        grasseaterArr[i].mul();
        grasseaterArr[i].die();
    }
    for (var i in predatorArr) {
        predatorArr[i].move();
        predatorArr[i].eat();
        predatorArr[i].mul();
        predatorArr[i].die();
    }
    for (var i in grassherroArr) {
        grassherroArr[i].move();
        grassherroArr[i].eat();
        grassherroArr[i].mul();
        grassherroArr[i].die();
    }
    for (var i in sheepArr) {
        sheepArr[i].move();
        sheepArr[i].eat();
        sheepArr[i].eat1();
        sheepArr[i].eat2();
        sheepArr[i].die();
    }
}

