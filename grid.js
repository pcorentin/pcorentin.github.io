


//grid width and height
var bw = 400;
var bh = 400;
//padding around grid
var p = 0;
//size of canvas
var cw = bw + (p*2) + 1;
var ch = bh + (p*2) + 1;


var context = $("#game").get(0).getContext("2d");
context.canvas.height = ch;
context.canvas.width = cw;

function drawBoard(){
    for (var x = 0; x <= bw; x += 40) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, bh + p);
    }


    for (var x = 0; x <= bh; x += 40) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(bw + p, 0.5 + x + p);
    }

    context.strokeStyle = "black";
    context.stroke();
}

