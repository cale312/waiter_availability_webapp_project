'use strict';
module.exports = function(app) {
  const waiter = require('../models/shiftsModel');

  function manageInfo(waiterName, day, fn) {

  }

  app.get('/shifts/:id', function(req, res, next) {
    const waiterName = req.params.id;
    waiter.findOne({
      waiter: waiterName
    }, function (err, result) {
      if (err) {
        return err;
      } else if (result) {
        res.render('shifts');
      } else {
        res.redirect('/login');
      }
    });
  });

  app.post('/shifts/:id', function(req, res, next) {
    const waiterName = req.params.id;
    var submit = req.body.submit;
    var day = req.body.day;
    res.redirect('/shifts/' + waiterName);

  });

}
