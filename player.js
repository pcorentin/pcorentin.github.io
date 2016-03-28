function Player (xPos,yPos,radius,color) {
    this.cells = [];
    var cell = new Cell(xPos,yPos,radius,color);
    this.cells.push(cell);
}


Player.prototype.draw = function (canvas) {
    for (var x=0; x< this.cells.length; x++ ){
        this.cells[x].draw(canvas);
    }
};

Player.prototype.moveTo = function (xPos,yPos) {
    for (var x=0; x< this.cells.length; x++ ){
        this.cells[x].setDest(xPos,yPos);
    }
};

Player.prototype.findClosestPellet = function(pellets) { 
    var closestCell = null;
    var minDistance = 100000; // seems about right...
    for (var i = 0 ; i < this.cells.length; i++) {
        var cell = this.cells[i];
        for (var x = 0 ; x < pellets.length; x++) {
            var distance = cell.distanceWith(pellets[x]);
            if (distance < minDistance) {
                minDistance = distance;
                closestCell = pellets[x];
            }
        }
    }
    return closestCell;
};

Player.prototype.move = function(cell) {    
    this.moveTo(cell.xPos,cell.yPos);
};


