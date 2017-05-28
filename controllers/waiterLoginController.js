module.exports = function(app) {
  const waiter = require('../models/loginAndRegModel');

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
            // console.log(result);
            res.redirect('/shifts/' + username);
          } else if (username === 'admin' && password === 'admin') {
            res.redirect('/admin/' + username);
          } else {
            res.render('login', {error: 'wrong username/password'});
          }
        }
      });
    } else if (register) {
      res.render('signup', {});
    }
  });

}
