// User Input Variables
let columns = 5;
let rows = 5;

const tile = {
  x: 30,
  y: 30
};

const canvas = {
  height: 605,
  width: 605
};

const grid = {
  columnsAmount: columns,
  rowsAmount: rows
};



function setup() {
  createCanvas(canvas.width, canvas.height);
  
}

function draw() {
  background(51);

  for(let i = 0; i < grid.columnsAmount; i++) {
    for(let n = 0; n < grid.rowsAmount; n++) {
      let tileWidth = (canvas.width - 5) / grid.columnsAmount;
      let tileHeight = (canvas.height - 5) / grid.rowsAmount;
      tile.x = i * tileWidth + 2;
      tile.y = n * tileHeight + 2;
      stroke(0);
      fill(255);
      rect(tile.x, tile.y, tileWidth, tileHeight);
    }
  }
}

$(function() {

  $("#column-select").on("change", function() {
    grid.columnsAmount = $("#column-select").val();
    // draw();
  });

  $("#row-select").on("change", function() {
    grid.rowsAmount = $("#row-select").val();
    // draw();
  });
});