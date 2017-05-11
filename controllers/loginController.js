'use strict';
module.exports = function(app) {
  const modelAndConnection = require('../models/connection');
  const waiter = require('../models/models');
  modelAndConnection();


  app.get('/login', function(req, res) {
    res.render('login', {});
  });

  app.post('/login', function(req, res) {
    var newUser = req.body.username;
    var newPassword = req.body.password;
    var login = req.body.login;
    var register = req.body.signup;
    
    // console.log(req.body.login);
    var newWaiter = new waiter({waiter: newUser, password: newPassword});

    if(login) {
      res.render('login', {});
    } else if (register) {
      res.render('signup', {});
    }
  });

  app.get('/signup', function(req, res) {
    res.render('signup', {});
  });

  app.post('/signup', function(req, res) {
    res.render('signup', {});
  });

}
