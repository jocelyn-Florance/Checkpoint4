module.exports = {
    get: function(connection, callback) {
        connection.query("SELECT * FROM console", callback)
    },

    getById: function(connection, id, callback) {
        connection.query(`SELECT * FROM console WHERE console_id = ${id}`, callback)
    },
};
