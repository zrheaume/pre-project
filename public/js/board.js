const board = {
    drawAll: function(tiles) {
        for (let i = 0; i < tiles[i].length; i++) {
            for (let j = 0; j < tiles[i][j].length; i++) {
                let tile = tiles[i][j];

                // Switch statement for tile type
                switch(tile.type) {
                
                default: 
                    break;
                case 0: 
                    // White
                    fill(255);
                    break;
                case 1:
                    // Blue (Water Tile)
                    fill(0,0,255);
                    break;
                case 2:
                    // Brown (Mountain Tile)
                    fill(102,51,0);
                }
                // Switch statement for owner
                switch(tile.owner) {
                default:
                    break;
                case 0:
                    // Pink (Player One)
                    fill(255,0,255);
                    break;
                case 1:
                    // Green (Player Two)
                    fill(0,255,0);
                    break;
                }

                stroke(0);
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