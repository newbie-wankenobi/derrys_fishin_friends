var mongoose = require('mongoose');

var db = mongoose.connection;

var env = require('./environment.js');

var SAFE_TITLE = env.localEnvVars.SAFE_TITLE;

var dbUri = 'mongodb://localhost/' + SAFE_TITLE;
            // process.env.MONGOLAB_URI  ||

// connect to db
mongoose.connect(dbUri);


// export the connection
module.exports = mongoose;
