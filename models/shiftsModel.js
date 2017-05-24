const mongoose = require('mongoose');

var waiterShiftsSchema = mongoose.Schema({
  waiter: String,
  shifts: []
});

const waiterShifts = mongoose.model('waiterShifts', waiterShiftsSchema);

module.exports = waiterShifts;
