const express = require('express');
const products = require('./routes/products');
const handlebars = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser');

//bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Mount Products
app.use('/products', products);

//handlebars
const hbs = handlebars.create({
  extname: '.hbs',
  defaultLayout: 'app'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// module.exports = products;
module.exports = app;
