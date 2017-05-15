'use strict';
module.exports = function(app) {
  const mongoose = require('mongoose');
  const waiter = require('../models/model');

  // Manage waiter
  function manageWaiters(newUsername, newPassword, email, fn) {
    waiter.findOne({
      waiter: newUsername
    }, function(err, waiterExists) {
      if (waiterExists) {
        console.log('waiter exists');
        return;
      } else {
        waiter.create({
          waiter: newUsername,
          password: newPassword,
          email: email
        });
        console.log('waiter added');
        return;
      }
    });
  }

  app.get('/register', function(req, res) {
    res.render('signup', {});
  });

  app.post('/register', function(req, res) {
    var newUsername = req.body.newUsername;
    var newPassword = req.body.newPassword;
    var email = req.body.email;
    if (newUsername !== '' && newPassword !== '' && email !== '') {
      manageWaiters(newUsername, newPassword, email);
      res.render('signup', {});
    } else {
      res.render('signup', {massage: 'Error'});
    }
  });
}
