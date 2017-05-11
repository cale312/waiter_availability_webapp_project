'use strict';
module.exports = function(app) {
  const modelAndConnection = require('../models/models');
  modelAndConnection();
  
  app.get('/login', function(req, res) {
    res.render('login', {});
  });

}
