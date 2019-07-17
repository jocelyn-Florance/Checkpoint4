const Game = require("../model/Game");

module.exports = {


    gameList: function(req, res) {
        Game.get(req.connection, function(err, result) {
            if(err) {
                res.status(500).send('Error');
            } else {
                res.json(result);
            }
        });
    },

    gameDetail: function(req, res) {
        Game.getById(req.connection,  req.params.id, function(err, result) {
            if(err) {
                res.status(500).send('Error');
            } else {
                res.json(result[0]);
            }
        });
    },

    create: function(req, res) {
        Game.create(req.connection, req.body, function(err) {
            if(err) {
                res.status(500).send('Error');
            } else {
                res.json().status(200);
            }
        })
    },

    createAlternative: function(req, res) {
        Game.createAlternative(req.connection, req.body, function(err) {
            if(err) {
                res.status(500).send('Error');
            } else {
                res.json().status(200);
            }
        })
    },

    editGame: function(req, res) {
        Game.editGame(req.connection, req.params.id, req.body, function(err) {
            if(err) {
                res.status(500).send('Error');
            } else {
                res.json().status(200);
            }
        })
    },

    deleteGame: function(req, res) {
        Game.deleteGame(req.connection, req.params.id, function(err) {
            if(err) {
                res.status(500).send('Error');
            } else {
                res.json().status(200);
            }
        })
    },

    gameRandon: function(req, res) {
        Game.getRandom(req.connection, function(err, result) {
            if(err) {
                res.status(500).send('Error');
            } else {
                res.json(result[0]);
            }
        });
    },

    alternative: function(req, res) {
        Game.getAlternative(req.connection, req.params.id, function(err, result) {
            if(err) {
                res.status(500).send('Error');
            } else {
                res.json(result);
            }
        });
    },

    gameSearch: function(req, res) {
        let search = req.url.split('/')[2];
        Game.getSearch(req.connection, search, function(err, result) {
            if(err) {
                res.status(500).send('Error');
            } else {
                res.json(result);
            }
        });
    },

};
