module.exports = {
    get: function (connection, callback) {
        connection.query("SELECT * FROM game", callback)
    },

    getById: function (connection, id, callback) {
        connection.query(`SELECT *FROM game WHERE game_id = ${id}`, callback)
    },

    create: function (connection, data, callback) {
        connection.query('INSERT INTO game SET ?', data, callback)
    },

    createAlternative: function (connection, data, callback) {
         connection.query(`INSERT INTO game_alternative SET alternative_id ='${data.idAlternative}', game_id = '${data.idGame}' `, callback)
    },

    editGame: function (connection, id, data, callback) {
        connection.query(`UPDATE game SET ? WHERE game_id = ${id}`, data, callback)
    },

    deleteGame: function (connection, id, callback) {
        connection.query(`DELETE FROM game_alternative WHERE game_id = ${id} OR alternative_id = ${id}`, callback);
        connection.query(`DELETE FROM game WHERE game_id = ${id}`, callback);
    },

    getRandom: function (connection, callback) {
        connection.query(`SELECT * FROM game ORDER BY RAND() LIMIT 1`, callback)
    },

    getAlternative: function (connection, id,  callback) {
        connection.query(`SELECT * FROM game_alternative AS g
                          LEFT JOIN game AS a ON a.game_id = g.game_id
                          LEFT JOIN game AS b ON b.game_id = g.alternative_id
                          WHERE a.game_id = ${id}
                          `, callback)
    },

    getSearch: function (connection, search, callback) {
        connection.query(`SELECT * FROM game WHERE name LIKE '${search}%'`, callback);
    },


};
