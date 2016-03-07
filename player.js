function Player (xPos,yPos,radius,color) {
    this.cells = [];
    var cell = new Cell(xPos,yPos,radius,color);
    this.cells.push(cell);;
}


Player.prototype.draw = function (canvas) {
    for (var x=0; x< this.cells.length; x++ ){
        this.cells[x].draw(canvas);
    }
}

Player.prototype.move = function (xPos,yPos) {
    for (var x=0; x< this.cells.length; x++ ){
        this.cells[x].xPos = xPos;
        this.cells[x].yPos = yPos;
    }
}