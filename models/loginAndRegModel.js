const mongoose = require('mongoose');

var waiterLoginSchema = mongoose.Schema({
  waiter: String,
  password: String
});

const waiterLogin = mongoose.model('waiterLogins', waiterLoginSchema);

module.exports = waiterLogin;
