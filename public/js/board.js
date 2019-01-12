const board = {
    drawAll: function(tiles) {
        for (let i = 0; i < tiles[i].length; i++) {
            for (let j = 0; j < tiles[i][j].length; i++) {
                let tile = tiles[i][j];
                stroke(255);
                fill(0);
                rect(tile.x, tile.y, 30, 30);
            }
        }
    },
    drawOne: function(tile) {
        stroke(255);
        fill(0);
        rect(tile.x, tile.y, 30, 30);
    }
};