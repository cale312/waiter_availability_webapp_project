'use strict';
module.exports = function(app){
  const shifts = require('../models/shiftsModel');

  app.get('/admin/:id', function(req, res){
    var admin = req.params.id;
    res.render('admin');
  });

}
