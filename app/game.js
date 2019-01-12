var board = require("./board'");

class Game {
    constructor (params){
        this.players = params.players;
        this.board = {
            initialState : ""
        }; 
    }
}

module.exports= {
    Game : Game
};