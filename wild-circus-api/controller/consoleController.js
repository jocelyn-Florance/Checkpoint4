const Console = require("../model/console");

module.exports = {

    consoleList: function(req, res) {
        Console.get(req.connection, function(err, result) {
            if(err) {
                res.status(500).send('Error');
            } else {
                res.json(result);
            }
        });
    },

    consoleDetail: function(req, res) {
        Console.getById(req.connection,  req.params.id, function(err, result) {
            if(err) {
                res.status(500).send('Error');
            } else {
                res.json(result[0]);
            }
        });
    },

};
