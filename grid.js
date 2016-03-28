


//grid width and height
var bw = 400;
var bh = 400;
//padding around grid
var p = 0;
//size of canvas
var cw = bw + (p*2) + 1;
var ch = bh + (p*2) + 1;

//pellet radius
var massPellet = 5;
var massPlayer = 10;
var nDecepticons = 3;
var nPellets = 100;
var pellets = [];
var players = [];

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


    for (x = 0; x <= bh; x += 40) {
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



function initPlayer() {
    var xPos = bw/2;
    var yPos = bh/2;
    var radius = 10;
    var color = getRandomColor();
    players.push(new Player(xPos,yPos,radius,color));
    initDecepticons();
}

function initDecepticons() {
    for (var x = 0; x <= nDecepticons; x += 1) {
        addOneCell(massPlayer, players, Player);
    }  
}

function initPellets() {
    for (var x = 0; x <= nPellets; x += 1) {
        addOneCell(massPellet, pellets, Cell);
    }
}

function addOneCell(mass,cells, type) {
        var coor = getRandomPosition();
        var color = getRandomColor();
        var cell = new type(coor.posx,coor.posy,mass,color);
        cell.draw(canvas);
        cells.push(cell);
}

function drawCells(cells) {
    cells.forEach ( function (pellet){
        pellet.draw(canvas);
    });

  }










