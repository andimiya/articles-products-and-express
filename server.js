const express = require('express');
const products = require('./routes/products');
console.log(products);
const app = express();


app.use('/products', products);
//Mount the products here using app.use(Products)

// app.engine('hbs', h)

// module.exports = products;
module.exports = app;
