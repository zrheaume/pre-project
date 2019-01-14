const Game = require('../models/domain/gamestate')

genBoard = {
    test: "hi",
    there: "sup"
};

genBoard2 = {
    sup: "all",
};

let game = new Game(genBoard);

async function test() {
    board = await Game.createBoard(game);
    console.log(board);

    state = await Game.retrieveBoard(game);
    console.log(state);

    board = await Game.deleteBoard(game);
    console.log(board);

    board = await Game.updateBoard(game, genBoard2);
    console.log(board);

    state = await Game.retrieveBoard(game);
    console.log(state);
}

test();
