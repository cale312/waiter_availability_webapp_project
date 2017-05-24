'use strict';
module.exports = function(app) {
  const mongoose = require('mongoose');
  const waiter = require('../models/loginAndRegModel');
  const shifts = require('../models/shiftsModel');

  // Manage waiter
  function manageWaiters(newUsername, newPassword, fn) {
    waiter.findOne({
      waiter: newUsername
    }, function(err, waiterExists) {
      if (waiterExists) {
        console.log('waiter exists');
        return;
      } else {
        waiter.create({
          waiter: newUsername,
          password: newPassword
        });
        shifts.create({
          waiter: newUsername,
          shifts: []
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
    if (newUsername !== '' && newPassword !== '') {
      manageWaiters(newUsername, newPassword);
      res.render('signup', {});
    } else {
      res.redirect('/register', {
        massage: 'Error'
      });
    }
  });
}
