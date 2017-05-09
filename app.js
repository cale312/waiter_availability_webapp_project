const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const addWaiter = require('./controllers/waiterAddingController');
const app = express();


app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

addWaiter(app);

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});
