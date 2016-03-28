function Cell (xPos,yPos,mass,color) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.mass  = mass;
    this.radius = this.getRadius();
    this.color = color;
}

Cell.prototype.draw = function(canvas) {
         canvas.drawArc({
            fillStyle: this.color,
          x: this.xPos ,y: this.yPos,
        radius: this.radius
});
};

Cell.prototype.collideWith = function(cell) {
  var dx = this.xPos - cell.xPos;
  var dy = this.yPos - cell.yPos;
  var distance = Math.sqrt(dx * dx + dy * dy);
  if (distance < this.radius + cell.radius) {
    return true;
  }
  return false; 
};

Cell.prototype.mergeWith = function(cell) {
  this.mass = this.mass + cell.mass;
  this.radius = this.getRadius();
};

Cell.prototype.getRadius = function() {
  return Math.sqrt(this.mass);
};

