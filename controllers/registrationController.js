'use strict';
module.exports = function(app) {
  const mongoose = require('mongoose');

  var waiterSchema = mongoose.Schema({
    waiter: String,
    password: String,
    email: String
  });
  const waiter = mongoose.model('waiter', waiterSchema);

  // Manage waiter
  function manageWaiters(newUsername, fn){
    waiter.findOne({
      waiter: newUsername
    }, function(err, waiterExists){
      if (waiterExists){
        console.log('waiter exists');
        return;
      } else {
        waiter.create({
          waiter: newUsername
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
    manageWaiters(newUsername);
    res.render('signup', {})
  });
}
