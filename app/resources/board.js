const defaultBoardOptions = {
    xLim: 16,
    yLim: 16,
    border: 3,
    bonusLim: 3
};

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
        // 9 - "spawn"
        this.x = coords[0];
        this.y = coords[1];
        if( this.x === board.reserved[0].x && this.y === board.reserved[0].y || this.x === board.reserved[1].x && this.y === board.reserved[1].y ){
            this.type = 9;
            this.hasBonus = false;
            this.bonusType = null;
        }else {
            if (this.x < defaultBoardOptions.border || this.x >= board.xLim - defaultBoardOptions.border) {
                if (this.y < defaultBoardOptions.border || this.y >= board.yLim - defaultBoardOptions.border) {
                    typeRoll(this, "border");
                } else {
                    this.type = 0;
                }
            } else {
                this.type = 0;
            }
            if (this.x >= defaultBoardOptions.border && this.x < board.xLim - defaultBoardOptions.border) {
                if (this.y >= defaultBoardOptions.border && this.y < board.yLim - defaultBoardOptions.border) {
                    typeRoll(this, "inland");
                }
            }
            if (!this.type) {
                this.type = 0;
            }
            this.hasBonus = null;
            if (this.type === 0 && board.bonus < defaultBoardOptions.bonusLim) {
                this.hasBonus = typeRoll();
                if (this.hasBonus === 0) {
                    this.hasBonus = false;
                } else if (this.hasBonus === 1) {
                    this.hasBonus = true;
                    this.bonusType = typeRoll(this, "bonus");
                    board.bonus++;
                } else {
                    console.log("An error occured in board assignment");
                }
            }
        }
        this.owner = null;
        if (this.type === 9){
            this.fortification = 6;
        } else {
            this.fortification = 0;
        }
    }

}

class Board {
    constructor(options) {
        if (options) {
            //
        }
        this.xLim = defaultBoardOptions.xLim;
        this.yLim = defaultBoardOptions.yLim;
        this.border = defaultBoardOptions.border;
        this.bonusLim = defaultBoardOptions.bonusLim;
        this.bonus = 0;
        this.reserved = [];
        this.tiles = [];
        this.spawnPlayers(2);
        this.generate();
    }
    spawnPlayers(q) {
        for (var c = 0; c < q; c++) {
            let spawnX = Math.floor(Math.random() * (this.xLim / q)) + ((this.xLim / q) * c);
            let spawnY = Math.floor(Math.random() * (this.yLim));
            this.reserved.push({
                reservedFor : "spawn",
                x : spawnX,
                y : spawnY
            });
        }
    }
    generate() {
        for (var row = 0; row < this.yLim; row++) {
            let thisRow = [];
            for (var col = 0; col < this.xLim; col++) {
                thisRow.push(new Tile([col, row], this));
            }
            this.tiles.push(thisRow);
        }
    }
}


module.exports = {
    getFor: function (game) {
        return game.state.board = new Board();
    },
    Board: Board,
    Tile: Tile
};