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

  //players collisions ...nasty ! =)
    for ( var x = 0 ; x< players.length-1; x++) {
      var currentPlayer = players[x];
      for ( var i =0 ; i < players[x].cells.length ; i++) {
        for (var y = x+1; y < players.length; y++ ) {
          for (var j =0 ; j < players[y].cells.length; j++) {
            if (currentPlayer.cells[i].collideWith(players[y].cells[j]) ) {
              if ( currentPlayer.cells[i].mass > players[y].cells[j].mass) {
                currentPlayer.cells[i].mergeWith(players[y].cells[j]);
                players[y].cells.splice(j,1); 
                if (players[y].length === 0) {
                  players.splice(y,1);
                }              
              }
              else if (players[y].cells[j].mass > currentPlayer.cells[i].mass) {
                players[y].cells[j].mergeWith(currentPlayer.cells[i]);
                currentPlayer.cells.splice(i,1);  
                if (currentPlayer.length === 0) {
                  players.splice(x,1);
                }              
              }
              addOneCell(massPlayer,players,Player)
            }
          }
        } 
      }
    }


}