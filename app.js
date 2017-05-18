var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var waiterLogin = require('./controllers/waiterLoginController');
var registration = require('./controllers/registrationController');
var connectDB = require('./models/connection');
var app = express();


app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


app.get('/', function(req, res) {
  res.render('index', {})
});

var name = [];

connectDB(app)
waiterLogin(app);
registration(app);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});
