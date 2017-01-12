const express = require('express');
const app = express();

const products = { name: "Product Name", price: "$10.00", inventory: "Inventory" };

app.get('/products', (req, res) => {
  res.json(products);
});

module.exports = app;