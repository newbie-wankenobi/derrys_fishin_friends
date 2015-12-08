var mongoose = require('mongoose');

var db = mongoose.connection;

var dbUri = process.env.MONGOLAB_URI // ||
            // 'mongodb://localhost/' + env.SAFE_TITLE;

// connect to db
mongoose.connect(dbUri);

db.on('connected', function() {
  console.log("Connected to db: " + dbUri)
})


// export the connection
module.exports = mongoose;
