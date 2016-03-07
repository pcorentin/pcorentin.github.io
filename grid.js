


//grid width and height
var bw = 400;
var bh = 400;
//padding around grid
var p = 0;
//size of canvas
var cw = bw + (p*2) + 1;
var ch = bh + (p*2) + 1;

//pellet radius
var rPellet = 5
var nPellets = 20
var pellets = []

var canvas = $("#game");
var context = $("#game").get(0).getContext("2d");
context.canvas.height = ch;
context.canvas.width = cw;
context.globalCompositeOperation = 'destination-over';



function drawBoard(){
    context.beginPath();
    for (var x = 0; x <= bw; x += 40) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, bh + p);
    }


    for (var x = 0; x <= bh; x += 40) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(bw + p, 0.5 + x + p);
    }
context.closePath();
    context.strokeStyle = "black";
    context.stroke();
}



function clearGrid() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}





function initPellets() {
    for (var x = 0; x <= nPellets; x += 1) {
        var coor = getRandomPosition()
        var color = getRandomColor()
        var cell = new Cell(coor.posx,coor.posy,rPellet,color);
        cell.draw(canvas);
        pellets.push(cell)

    }
}

function drawPellets() {
    pellets.forEach ( function (pellet){
        pellet.draw(canvas);
    });

  }










