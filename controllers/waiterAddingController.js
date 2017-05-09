module.exports = function addWaiter(app) {

  const mongoose = require('mongoose');
  const waiter = require('../models/waiterSchema');

  const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/waiters";
  mongoose.connect(mongoURL);

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('We are connected');
  });

  app.get('/', function(req, res) {
    res.render('index', {});
  });

  app.get('/login', function(req, res) {
    res.render('login', {});
  });

  app.post('/login', function(req, res) {
    res.render('login', {});
  });

  app.get('/registration', function(req, res) {
    res.render('registration', {});
  });

  app.post('/registration', function(req, res) {
    res.render('registration', {});
  });

  app.get('/waiters:username', function(req, res) {
    res.render('waiters', {});
  });

  app.post('/waiters:username', function(req, res) {
    res.render('waiters', {});
  });

  app.get('/admin', function(req, res) {
    res.render('admin', {});
  });
}
