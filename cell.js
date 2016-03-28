function Cell (xPos,yPos,mass,color) {
    this.xPos = parseInt(xPos);
    this.yPos = parseInt(yPos);
    this.destX = this.xPos;
    this.desty = this.yPos;
    this.mass  = mass;
    this.radius = this.getRadius();
    this.color = color;
}

Cell.prototype.draw = function(canvas) {
        if ( this.xPos !== this.destX && this.yPos !== this.destY){
          this.moveTo(this.destX,this.destY);
        }      
         canvas.drawArc({
            fillStyle: this.color,
          x: this.xPos ,y: this.yPos,
        radius: this.radius
});
      canvas.drawLine({
        strokeStyle: '#000',
        strokeWidth: 2,
        x1: this.xPos, y1: this.yPos,
        x2: this.destX, y2: this.destY
    });
};

Cell.prototype.distanceWith = function(cell) {
  var dx = this.xPos - cell.xPos;
  var dy = this.yPos - cell.yPos;
  return Math.sqrt(dx * dx + dy * dy);
};



Cell.prototype.setDest = function(xPos,yPos) {
  this.destX = xPos;
  this.destY = yPos;
};

Cell.prototype.moveTo = function(xPos,yPos) {
  "use strict";
  var dx = xPos - this.xPos;
  var dy = yPos - this.yPos ;
  var dist = Math.sqrt(dx*dx+dy*dy);
  var rad = Math.atan2(dy,dx);
  var angle = rad/Math.PI * 180;
  var velX = (dx/dist)*(10/Math.sqrt(this.mass));
  var velY = (dy/dist)*(10/Math.sqrt(this.mass));
  if(Math.abs(velX)  > Math.abs(dx))
    this.xPos = xPos;
  else
    this.xPos +=  velX;
  if(Math.abs(velY)  > Math.abs(dy))
    this.yPos = yPos;
  else
    this.yPos += velY;
};

Cell.prototype.collideWith = function(cell) {
  var distance =this.distanceWith(cell);
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

