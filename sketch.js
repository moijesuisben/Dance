let medium = 900;
let offset = 10;

function setup() {
  createCanvas(medium, medium);
  background('white');
  //noLoop();
  frameRate(5);
  strokeWeight(1.2);
}

function draw() {
  

  // GRID 3X3
  var column = 3;
  var vertical = 3;
  var step = (medium / column);
  for (var gridX = 0; gridX < column; gridX++) {
    for (var gridY = 0; gridY < vertical; gridY++) {
      var caseX = gridX * step;
      var caseY = gridY * step;
      rect(caseX, caseY, step, step);
      stroke('white');
      fill('black');
      spirale(caseX, caseY);
    }
  }
}

// SPIRALE
function spirale(x, y, length) {
  push();
  length = medium/3;
  translate(x, y);
  var del1 = random(5);
  var del2 = random(5);
  var del3 = random(5);
  var del4 = random(5);
  var del5 = random(5);
  var del6 = random(5);
  var del7 = random(5);
  var del8 = random(5);

  for (var shape = 0; shape < 50; shape++) {
    quad(
      (offset + del1 * shape),
      (offset + del2 * shape),

      ((length - offset) - del3 * shape),
      (offset + del4 * shape),

      ((length - offset) - del5 * shape),
      ((length - offset) - del6 * shape),

      (offset + del7 * shape),
      ((length - offset) - del8 * shape)
    );
  }
  pop();
}