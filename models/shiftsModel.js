const mongoose = require('mongoose');

var waiterShiftsSchema = mongoose.Schema({
  waiter: String,
  shifts: {
    Monday: Boolean,
    Tuesday: Boolean,
    Wednesday: Boolean,
    Thursday: Boolean,
    Friday: Boolean,
    Saturday: Boolean,
    Sunday: Boolean
  }
});

const waiterShifts = mongoose.model('waiterShifts', waiterShiftsSchema);

module.exports = waiterShifts;
