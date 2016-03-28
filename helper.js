function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function getRandomPosition() {

    // make position sensitive to size and document's width
    var posx = (Math.random() * bw ).toFixed();
    var posy = (Math.random() * bh ).toFixed();
    return {posx:posx,posy:posy};
}


function computeMoves()  {
  for (var x =1 ; x < players.length; x++) {
    var currentPlayer = players[x];
    var closestPellet = currentPlayer.findClosestPellet(pellets);
    if ( closestPellet === null)
      return;
    currentPlayer.move(closestPellet);
  }
}

function collisions( players, pellets) {

  //pellet collisions
  for ( var y = 0 ; y < pellets.length; y++) {
    for ( var x = 0 ; x< players.length; x++) {
      var currentPlayer = players[x];
      for ( var i =0 ; i < players[x].cells.length ; i++) {
        if (currentPlayer.cells[i].collideWith(pellets[y])) {
          currentPlayer.cells[i].mergeWith(pellets[y]);
          pellets.splice(y,1);
          addOneCell(massPellet,pellets,Cell);
        }
      }
    }
  }

 
}