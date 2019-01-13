// User Input Variables
let columns = 5;
let rows = 5;

const tile = {
  x: 30,
  y: 30
};

const canvas = {
  width: 605,
  height: 605
};

const grid = {
  columns: columns,
  rows: rows
};



function setup() {
  createCanvas(canvas.width, canvas.height);

}


$(function () {

  $("#column-select").on("change", function () {
    grid.columns = $("#column-select").val();
    // draw();
  });

  $("#row-select").on("change", function () {
    grid.rows = $("#row-select").val();
    // draw();
  });
  
});

$.get("/api/board", function(data){
  if(data){console.log("Data loaded")};
});
