const mongoose = require('mongoose');
const modelAndConnection = require('../models/connection');
const Schema = mongoose.Schema;

var waiterSchema = new Schema({
  waiter: String,
  password: String
});

const waiter = mongoose.model('waiter', waiterSchema);

module.exports = waiter;
