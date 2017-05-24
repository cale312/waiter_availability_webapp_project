module.exports = function(app) {
  const mongoose = require('mongoose');
  const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/waiters";
  mongoose.connect(mongoURL);

  mongoose.Promise = global.Promise;

  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('We are connected');
  });
}
