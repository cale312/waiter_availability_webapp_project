module.exports = function(app) {
  const mongoose = require('mongoose');
  const waiter = require('../models/model');

  function shiftSelect(day) {};

  app.get('/waiters', function(req, res) {
    res.render('waiters', {username: username});
  });

  app.post('/waiters', function(req, res) {
    var username = name[0];
    var submit = re.body.submit;
    console.log(req.body);

    res.render('waiters', {});
  });

}
