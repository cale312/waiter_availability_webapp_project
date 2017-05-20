const mongoose = require('mongoose');

var waiterShiftsSchema = mongoose.Schema({
  waiter: String,
  shifts: {
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false
  }
});

const waiterShifts = mongoose.model('waiterShifts', waiterShiftsSchema);

module.exports = waiterShifts;
