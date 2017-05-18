module.exports = function(app) {
  const mongoose = require('mongoose');
  const waiter = require('../models/model');

  function manageLogin(username, password, fn) {
    waiter.findOne({
      waiter: username
    }, function(err, waiterExists) {
      if (err) {
        return err;
      }

      if (waiterExists && password === waiterExists.password) {
        fn(null, {
          status: 'LoggedIn'
        });
      } else {
        fn(null, {
          status: 'NotLoggedIn'
        });
      }

    });
  }

  app.get('/login', function(req, res) {
    res.render('login', {});
  });

  var id = [];

  app.get('/shifts/:id', function(req, res, next) {
    id = req.params.id;
    res.render('shifts', {});
  });


  app.post('/shifts', function(req, res) {
    var submit = req.body.submit;
    var day = req.body.day;

    res.render('shifts', {});
  });


  app.post('/login', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var login = req.body.login;
    var register = req.body.signup;

    if (login) {
      manageLogin(username, password, function(err, result) {
        if (err) {
          return next(err);
        } else {
          if (result.status === 'LoggedIn') {
            waiter = username;
            res.redirect('/shifts');
          } else {
            res.redirect('/login');
          }
        }
      });
    } else if (register) {
      res.render('signup', {});
    }
  });
}
