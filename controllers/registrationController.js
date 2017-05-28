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
        fn(null, {
          status: 'exist'
        });
        // console.log('waiter exists');
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
        fn(null, {
          status: 'added'
        });
        // console.log('waiter added');
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

    manageWaiters(newUsername, newPassword, function(err, result){
      if (err){
        return err;
      } else if (result.status === 'exist') {
        console.log(result);
        res.render('signup', {massage: 'waiter already exist'});
      } else if (result.status === 'added') {
        console.log(result);
        res.render('signup', {massage: 'successfully registered'});
      }
    });
    //
    // if (newUsername !== '' && newPassword !== '') {
    //   res.render('signup', {});
    // } else {
    //   res.redirect('/register', {
    //     massage: 'Error'
    //   });
    // }
  });
}
