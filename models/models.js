module.exports = function() {
  const mongoose = require('mongoose');
  const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/waiters";
  mongoose.connect(mongoURL);

  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('We are connected');
  });

  var waiterSchema = mongoose.Schema({
    waiter: String,
    password: String
  });
  var waiters = mongoose.model('waiters', waiterSchema);
  waiters.create({
    waiter: 'admin',
    password: 'admin'
  });
}
