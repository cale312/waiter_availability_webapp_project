module.exports = function(app) {
  const mongoose = require('mongoose');
  const waiter = require('../models/model');

  app.get('/waiters', function(req, res) {
    res.render('waiters', {});
  });

  app.post('/waiters', function(req, res) {
    res.render('waiters', {});
  });

}
