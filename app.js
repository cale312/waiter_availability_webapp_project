var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var waiterLogin = require('./controllers/waiterLoginController');
var connectDB = require('./models/connection');
var app = express();

waiterLogin(app);
connectDB(app)

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

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});
