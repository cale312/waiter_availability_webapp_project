// 'use strict';
module.exports = function(app) {
  const waiter = require('../models/shiftsModel');

  // Function that finds and updates the shifts selected by the waiter...
  function manageInfo(waiterName, days, fn){
    waiter.findOne({
      waiter: waiterName
    }, function(err, result){
      if (err){
        return err;
      } else  if (result) {
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

  app.get('/shifts/:id', function(req, res, next) {
    const waiterName = req.params.id;
    waiter.findOne({
      waiter: waiterName
    }, function(err, result) {
      if (err) {
        return err;
      } else if (result) {
        res.render('shifts', {username: waiterName, shifts: result.shifts});
      } else {
        res.redirect('/login');
      }
    });
  });


  app.post('/shifts/:id', function(req, res, next) {
    const waiterName = req.params.id;
    var submit = req.body.submit;
    var days = req.body.day;

    manageInfo(waiterName, days, function(err, result){
      if (err){
        return next(err);
      } else if (result.status === 'updated'){
        console.log('waiter shift updated');
        res.redirect('/shifts/' + waiterName);
      } else {
        console.log('fail');
        res.redirect('/shifts/' + waiterName);
      }
    });
  });

}
