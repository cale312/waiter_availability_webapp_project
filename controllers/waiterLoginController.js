module.exports = function(app) {
  app.get('/login', function(req, res) {
    res.render('waiterLogin', {});
  });

  app.post('/login', function(req, res) {
    res.render('waiterLogin', {});
  });
}
