// var db = require("../models");
var board = require("../app/resources/board");
var game = require("../app/resources/game");

module.exports = function (app) {
    // Get all examples

    // app.get("/api/examples", function(req, res) {
    //   db.Example.findAll({}).then(function(dbExamples) {
    //     res.json(dbExamples);
    //   });
    // });
    // // Create a new example
    // app.post("/api/examples", function(req, res) {
    //   db.Example.create(req.body).then(function(dbExample) {
    //     res.json(dbExample);
    //   });
    // });

    // // Delete an example by id
    // app.delete("/api/examples/:id", function(req, res) {
    //   db.Example.destroy({ where: { id: req.params.id } }).then(function(
    //     dbExample
    //   ) {
    //     res.json(dbExample);
    //   });
    // });
    app.get("/api/testGen/board", function (req, res) {
        res.json(board.gen());
    });
    app.get("/api/testGen/game", function (req, res) {
        res.json(game.createNew());

    app.get("/api/examples", function (req, res) {
        db.Example.findAll({}).then(function (dbExamples) {
            res.json(dbExamples);
        });
    });

    // Create a new example
    app.post("/api/examples", function (req, res) {
        db.Example.create(req.body).then(function (dbExample) {
            res.json(dbExample);
        });
    });

    // Delete an example by id
    app.delete("/api/examples/:id", function (req, res) {
        db.Example.destroy({ where: { id: req.params.id } }).then(function (
            dbExample
        ) {
            res.json(dbExample);
        });
    });
};
