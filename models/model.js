const mongoose = require('mongoose');

var waiterSchema = mongoose.Schema({
  waiter: String,
  password: String,
  email: String,
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
const waiter = mongoose.model('waiter', waiterSchema);

module.exports = waiter;
