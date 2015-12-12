var mongoose = require('mongoose');

var db = mongoose.connection;

var dbUri = process.env.MONGOLAB_URI  ||
            'mongodb://localhost/' + env.SAFE_TITLE;

// connect to db
mongoose.connect(dbUri);


// export the connection
module.exports = mongoose;
