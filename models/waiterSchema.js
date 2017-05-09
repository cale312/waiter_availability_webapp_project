const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const waiterSchema = new Schema({
  name: String,
  password: Number,
  days: String
});

const waiter = mongoose.model('waiters', waiterSchema);

module.exports = waiter;
