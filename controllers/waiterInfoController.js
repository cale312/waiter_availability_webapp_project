'use strict';
module.exports = function(app) {
  const waiter = require('../models/shiftsModel');

  // Function that finds and updates the shifts selected by the waiter...
  function manageInfo(waiterName, days, fn) {
    waiter.findOne({
      waiter: waiterName
    }, function(err, result) {
      if (err) {
        return err;
      } else if (result) {
        result.shifts = days;
        result.save();
        fn(null, {
          status: 'updated'
        });
      } else {
        fn(null, {
          status: '!updated'
        });
      }
    });
  }

  // Finds the waiter in the database and returns the days array
  function daysChecked(waiterName, fn) {
    waiter.findOne({
      waiter: waiterName
    }, function(err, result) {
      if (err) {
        return err;
      }

      if (result) {
        fn(null, result.shifts)
      }
    });
  }

  app.get('/shifts/:id', function(req, res, next) {
    const waiterName = req.params.id;


    daysChecked(waiterName, function(err, result) {

      // Changes the returned array of days to an Object and returns the new Object
      function arrToobj(daysArr) {
        var daysObj = {};
        var daysArray = result.days;
        for (let i = 0; i < daysArr.length; i++){
          daysObj[daysArr[i]] = 'checked';
        }
        return daysObj;
      }

      if (err) {
        return next(err);
      } else {
        waiter.findOne({
          waiter: waiterName
        }, function(err, result) {
          if (err) {
            return err;
          } else if (result) {
            daysChecked(waiterName, function(err, checkedDays){
              if (err) {
                return err;
              } else {
                // console.log(checkedDays);
                let checkedDaysFixed = arrToobj(checkedDays);
                // console.log(checkedDaysFixed);
                res.render('shifts', {
                  username: waiterName,
                  shifts: result.shifts,
                  days: checkedDaysFixed
                });
              }
            })
          } else {
            res.redirect('/login');
          }
        });
      }
    })

  });


  app.post('/shifts/:id', function(req, res, next) {
    const waiterName = req.params.id;
    var submit = req.body.submit;
    var days = req.body.day;

    manageInfo(waiterName, days, function(err, result) {
      if (err) {
        return next(err);
      } else if (result.status === 'updated') {
        res.redirect('/shifts/' + waiterName);
      } else {
        console.log('fail');
        res.redirect('/shifts/' + waiterName);
      }
    });
  });

}
