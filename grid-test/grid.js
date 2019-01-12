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
  columns: columns,
  rows: rows
};



function setup() {
  createCanvas(canvas.width, canvas.height);
  
}

function draw() {
  background(51);

  for(let i = 0; i < grid.columns; i++) {
    for(let n = 0; n < grid.rows; n++) {
      let xMultiplier = (canvas.width - 5) / grid.columns;
      let yMultiplier = (canvas.height - 5) / grid.rows;
      tile.x = i * xMultiplier + 2;
      tile.y = n * yMultiplier + 2;
      stroke(0);
      fill(255);
      rect(tile.x, tile.y, xMultiplier, yMultiplier);
    }
  }
}

$(function() {

  $("#column-select").on("change", function() {
    grid.columns = $("#column-select").val();
    // draw();
  });

  $("#row-select").on("change", function() {
    grid.rows = $("#row-select").val();
    // draw();
  });
});