module.exports = function(app) {
  const mongoose = require('mongoose');
  const waiter = require('../models/model');

  function loginController(username, password, fn) {
    waiter.findOne({
        waiter: username,
      },
      function(err, exists) {
        if (exists) {
          return;
        } else {
          return;
        }
      });
  }

  app.get('/login', function(req, res) {
    res.render('waiterLogin', {});
  });

  app.post('/login', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var login = req.body.login;
    var register = req.body.signup;

    if (login) {
      waiter.findOne({
        waiter: username
      }, function(err, waiter) {
        if (err) {
          return next(err);
        } else if (waiter && password === waiter.password) {
          res.render('waiters', {username: username});
        } else if (username === 'admin' && password === 'admin') {
          res.render('admin', {admin: username});
        } else {
          res.render('waiterLogin', {error: 'wrong password/username'});
        }
      });
    } else if (register) {
      res.render('signup', {});
    }
  });
}
