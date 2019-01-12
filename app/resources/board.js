const BORDER = 2;
const XLIM = 8;
const YLIM = 8;
const BONUSLIM = 3;

function typeRoll(tile, zone) {
    var roll;
    switch (zone) {
    case "border":
        roll = Math.round(Math.random());
        return tile.type = roll;
    case "inland":
        roll = Math.round(Math.random());
        if (roll === 1) {
            return tile.type = 2;
        } else {
            return tile.type = roll;
        }
    case "bonus":
        roll = Math.floor(Math.random() * 3);
        return tile.bonusType = roll;
    default:
        roll = Math.round(Math.random());
        return roll;
    }
}

class Tile {
    constructor(coords, board) {
        // Tile types:
        // 0 - "plain"
        // 1 - "ocean"
        // 2 - "mountain"
        this.x = coords[0];
        this.y = coords[1];
        if (this.x < BORDER || this.x >= board.xLim - BORDER) {
            if (this.y < BORDER || this.y >= board.yLim - BORDER) {
                typeRoll(this, "border");
            } else {
                this.type = 0;
            }
        } else {
            this.type = 0;
        }
        if (this.x >= BORDER && this.x < board.xLim - BORDER) {
            if (this.y >= BORDER && this.y < board.yLim - BORDER) {
                typeRoll(this, "inland");
            }
        }
        if (!this.type) {
            this.type = 0;
        }
        if (this.type === 0 && board.bonus < BONUSLIM) {
            this.hasBonus = typeRoll();
            if (this.hasBonus === 0) {
                // Tile has no bonus
            } else if (this.hasBonus === 1) {
                // Tile has bonus
                this.bonusType = typeRoll(this, "bonus");
                board.bonus++;
            } else {
                console.log("An error occured in board assignment");
            }
        }
        this.owner = null;
        this.fortification = 0;
    }

}

class Board {
    constructor(tiles) {
        this.xLim = XLIM;
        this.yLim = YLIM;
        this.bonus = 0;
        if (tiles) {
            this.tiles = tiles;
        } else {
            this.tiles = [];
            this.generate();
        }
    }
    generate() {
        for (var row = 0; row < board.yLim; row++) {
            let thisRow = [];
            for (var col = 0; col < board.xLim; col++) {
                thisRow.push(new Tile([col, row], board));
            }
            this.tiles.push(thisRow);
        }
    }
}


module.exports = {
    createNew: function () {
        return new Board(null);
    },
    Board: Board,
    Tile: Tile
};