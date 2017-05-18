module.exports = function(app) {
  const mongoose = require('mongoose');
  const waiter = require('../models/model');

  function manageLogin(username, password, fn) {
    waiter.findOne({
      waiter: username
    }, function(err, waiterExists) {
      if (err){
        return err;
      }

      if (waiterExists && password === waiterExists.password) {
        fn(null, {status : 'LoggedIn'});
      } else {
        fn(null, {status : 'NotLoggedIn'});
      }

    });
  }

  app.get('/login', function(req, res) {
    res.render('login', {});
  });


  app.get('/shifts/:username', function(req, res, next) {
    res.render('shifts', {});
  });

  app.get('/shifts', function(req, res, next) {
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
