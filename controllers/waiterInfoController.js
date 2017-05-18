module.exports = function(app) {
  const mongoose = require('mongoose');
  const waiter = require('../models/model');

  function manageStoring(day, fn) {
    
  }

  app.get('/shifts', function(req, res) {
    res.render('shifts', {
      username: username
    });
  });

  app.post('/shifts', function(req, res) {
    var submit = req.body.submit;
    var day = req.body.day;
    console.log(req.body);

    res.render('shifts', {});
  });

}
