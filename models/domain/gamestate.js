const cache = require("../../config/config-redis");
const uuidv4 = require("uuid/v4");
const Promise = require('bluebird')

module.exports = class GameState {
    constructor(board) {
        this.gameID = uuidv4();
        this.gameBoard = board;
    }

    static async createBoard(board) {
        await Promise.all([
            cache.hmsetAsync(board.gameID, board.gameBoard),
            cache.expire(board.gameID, 3600)]);

        return Promise.resolve(board.gameID)
    }

    static async deleteBoard(id) {
        const status = await cache.delAsync(id);

        return Promise.resolve(status);
    }

    static async updateBoard(id, newBoard) {
        const status = await cache.hmsetAsync(id, newBoard);

        return Promise.resolve(status);
    }

    static async retrieveBoard(id) {
        const status = await cache.hgetallAsync(id);

        return Promise.resolve(status);
    }

    toString() {
        return 'game : [id:' + this.gameID + ', board:' + this.gameBoard + ']'
    }
}
