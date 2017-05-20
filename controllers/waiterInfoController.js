module.exports = function(app) {
  const waiter = require('../models/shiftsModel');

  app.get('/shifts/:id', function(req, res, next) {
    const waiterName = req.params.id;
    res.render('shifts');
  });

  app.post('/shifts', function(req, res, next) {
    var submit = req.body.submit;
    var day = req.body.day;
    // console.log(req.body);

    res.render('shifts');
  });

  // app.get('/admin', function(req, res, next) {
  //   res.render('admin');
  // });
}
