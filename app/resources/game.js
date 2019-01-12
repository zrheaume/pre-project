var board = require("./board");

class Game {
    constructor (params){
        // this.players = params.players;
        this.gameID = params.gameID;
        if(params.createboard){
            this.board = board.createNew();
        }

    }
}

module.exports= {
    Game : Game,
    createNew : function(params){
        return new Game(params);
    }
};