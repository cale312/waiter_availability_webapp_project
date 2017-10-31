const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const waiterLogin = require('./controllers/waiterLoginController');
const registration = require('./controllers/registrationController');
const waiterInfo = require('./controllers/waiterInfoController');
const adminDisplay = require('./controllers/adminDisplayController');
const access = require('./controllers/accessController');
const connectDB = require('./models/connection');
const app = express();


app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
  res.render('index', {})
});

connectDB(app)
waiterLogin(app);
registration(app);
waiterInfo(app);
adminDisplay(app);
access(app);

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Our app is running on http://localhost:' + port);
});
