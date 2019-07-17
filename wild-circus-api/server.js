const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./config/db.js');
const app = express();
const cors = require('cors');

// settings
app.set('port', 3000);

// connecting route to database
app.use(function(req, res, next) {
    req.connection = connection;
    next()
});

// middlewares
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// include router
const gameRouter = require("./routes/gameRouter");
const consoleRouter = require("./routes/consoleRouter");

// routing
app.use("/api/games", gameRouter);
app.use("/api/consoles", consoleRouter);

/// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('404 Not Found');
    err.status = 404;
    next(err);
});

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
