var mongoose = require('mongoose');

var db = mongoose.connection;

var env = require('./environment.js');

var dbUri = 'mongodb://localhost/' + env.SAFE_TITLE;
            // process.env.MONGOLAB_URI  ||

// connect to db
mongoose.connect(dbUri);


// export the connection
module.exports = mongoose;
