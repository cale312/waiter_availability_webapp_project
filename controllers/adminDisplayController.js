'use strict';
module.exports = function(app) {
  const waiters = require('../models/shiftsModel');

  // Function that returns all the waiters in teh database
  function getWaiters(fn) {
    waiters.find({}, function(err, result) {
      if (err) {
        return err;
      } else if (result) {
        fn(null, result);
      }
    });
  }

  // Should return an object of days with waiters paored to the days they are available in...
  // Have to return something like this... {monday: ['cale oasin'], tuesday: ['ted mosby'] }

  app.get('/admin/:id', function(req, res, next) {
    const admin = req.params.id;
    var monday = [];
    var tuesday = [];
    var wednesday = [];
    var thursday = [];
    var friday = [];
    var saturday = [];
    var sunday = [];

    var daysObj = {
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday
    }

    getWaiters(function(err, result) {
      for (let i = 0; i < result.length; i++) {
        var resultShifts = result[i].shifts;
        var waiter = result[i].waiter;
        // console.log(result[i]);
        for (let i = 0; i < resultShifts.length; i++) {
          // console.log(resultShifts[i])
          if (err) {
            return err;
          } else if (resultShifts[i] === 'Monday') {
            monday.push(waiter);
          } else if (resultShifts[i] === 'Tuesday') {
            tuesday.push(waiter);
          } else if (resultShifts[i] === 'Wednesday') {
            wednesday.push(waiter);
          } else if (resultShifts[i] === 'Thursday') {
            thursday.push(waiter);
          } else if (resultShifts[i] === 'Friday') {
            friday.push(waiter);
          } else if (resultShifts[i] === 'Saturday') {
            saturday.push(waiter);
          } else if (resultShifts[i] === 'Sunday') {
            sunday.push(waiter);
          }
        }
      }
      res.render('admin', daysObj);
    });
    // console.log(daysObj);
  });

}
